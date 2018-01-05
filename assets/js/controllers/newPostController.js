(function() {

    'use strict';

    angular
        .module('newPostCtrl', [
          'servicesSrvc',
          'postSrvc',
          'restrictionsSrvc',
          'ngMap',
          'ngMapAutocomplete',
          'toastr'
        ])
        .controller('NewPostCtrl', newPostController);

    newPostController.$inject = ['servicesService', 'restrictionsService','postService' ,'NgMap', 'toastr'];

    function newPostController(servicesService, restrictionsService, postService, NgMap, toastr) {
        var vm = this;
        vm.options = { country: 'mx' };
        vm.result = '';
        vm.details = '';
        vm.latitude = '';
        vm.longitude = '';
        vm.pos = {};
        vm.map = { zoom: 17 };
        vm.data = {
          guests : 1,
          services : [],
          restrictions : [],
          img : {
            uno : null,
            dos : null,
            tre : null,
            cua : null
          }
        };

        getServices();
        getRestrictions();
        initMap();

        function getServices() {
          servicesService.getServices().then(function(data) {
            vm.services = data;
          });
        }

        function getRestrictions() {
          restrictionsService.getRestrictions().then(function(data) {
            vm.restrictions = data;
          });
        }

        vm.setMarker = function() {
          var lat = vm.details.geometry.location.lat();
          var lng = vm.details.geometry.location.lng();
          vm.pos = {
            lat: lat,
            lng: lng
          };
          vm.cargarMapa(vm.pos,2,15);
        }

        vm.getCurrentlocation = function(e) {
            vm.pos.lat = e.latLng.lat();
            vm.pos.lng = e.latLng.lng();
        };

        vm.validarForm = function(){
          if(parseInt(vm.data.guests) > 0 && parseInt(vm.data.guests) <= 5){
            if(vm.pos.lat != undefined && vm.pos.lng != undefined ){
              if(parseInt(vm.data.period) > 0 && parseInt(vm.data.period) <= 3){
                if (vm.data.restrictions.length > 0 && vm.data.services.length > 2) {

                  var dataPublicacion = {
                    idUsuario : sessionStorage.getItem('idUsuario'),
              			lat: vm.pos.lat,
              			lng: vm.pos.lng,
              			costo: vm.data.price,
              			descripciones: vm.data.description,
              			idZonaInmueble: 1,
                    huespedes : vm.data.guests,
                    restricciones : vm.data.restrictions,
                    servicios : vm.data.services
                  }

                  postService.setPost(dataPublicacion).then(function(data) {
                    setServicio(data);
                    if(uploadImg(data)){
                      console.log(true);
                      return true;
                    } else {
                      return false;
                    }
                  });

                } else {
                  toastr.error("Selecciona por lo menos 3 servicios y 1 restriction");
                }
              } else {
                toastr.error("El periodo no es valido");
              }
            } else {
              toastr.error("Mueve el pin del mapa para señalar la Ubicación");
            }
          } else {
            toastr.error("El número de Huéspedes no es valido");
          }
        }

        function setServicio(id) {
          var dataPublicacion = {
            idPublicacion : id,
            restricciones : vm.data.restrictions,
            servicios : vm.data.services
          }
          postService.setAdd(dataPublicacion).then(function(data) {
            console.log(data);
            return true;
          });
        }

        function uploadImg(id) {
          var contador = 0;
          var formData = new FormData();
          formData.append("dataimg", id);
          formData.append("1", vm.data.img.uno);
          formData.append("1", vm.data.img.dos);
          formData.append("1", vm.data.img.tre);
          formData.append("1", vm.data.img.cua);
          postService.uploadImg(formData).then(function(data) {
            console.log(data);
            if(parseInt(data.message) == 4) {
              return true;
            }
          });

        }

        vm.addRestriccion = function(id) {
          var index = vm.data.restrictions.indexOf(id);
          if ( index == -1) {
            vm.data.restrictions.push(id);
          } else {
            vm.data.restrictions.splice(index, 1);
          }
        }

        vm.addServicio = function(id){
          var index = vm.data.services.indexOf(id);
          if ( index == -1) {
            vm.data.services.push(id);
          } else {
            vm.data.services.splice(index, 1);
          }
        }

        vm.validarImg = function() {
          for(var k in vm.data.img) {
            if (vm.data.img[k] != null) {
              vm.fileExt = vm.data.img[k].name.split(".").pop();
              if(!vm.fileExt.match(/^(jpg|jpeg|gif|png)$/)){
                  let suma = parseInt(k)+1;
                  toastr.error('La Foto número '+suma+' no tiene un formato valido');
                  return false;
              }
            }
          }
        }

        vm.publicarPost = function(){
          vm.validarImg();
          vm.data.location = {
            lat : vm.pos.lat,
            lng : vm.pos.lng
          }

          if(vm.validarForm()){
            toastr.success("Se ha publicado exitosamente");
            setTimeout(function(){
              window.location.href = '/app/myposts';
            },2000);
          } else {
            toastr.error("Intenta más tarde");
            // window.location.href = 'app/mypost';
          }
        }

        /***********************************MAPS***************************************/
        function initMap() {
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
              vm.pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
              };
              vm.cargarMapa(vm.pos,2,15);
            }, function() {

            });
          }
        }

        document.getElementById('autocomplete').addEventListener('keypress',function(e){
          if (e.keyCode == 13) {
            vm.setMarker();
          }
        },true);

        vm.cargarMapa = function(lugar,opt,zoom = 12) {
          if (opt == 1) {
            lugar = JSON.parse(lugar);
          }
          var uluru = lugar;
          var map = new google.maps.Map(document.getElementById('map'), {
             zoom: zoom,
             center: uluru
           });

           var marker = new google.maps.Marker({
             position: uluru,
             map: map,
             title: 'Mi Lugar',
             draggable: true,
             animation: google.maps.Animation.DROP,
           });

           marker.addListener('dragend', function(evt) {
             vm.pos = {
               lat: evt.latLng.lat(),
               lng: evt.latLng.lng()
             };
          });
        }

    }
})();

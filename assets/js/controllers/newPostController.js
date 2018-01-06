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
        vm.btn = 0;
        vm.data = {
          guests : 1,
          services : [],
          restrictions : [],
          img : {
            uno : null,
            dos : null,
            tre : null,
            cua : null
          },
          price : 0
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
          var suma = 0;
          for(var k in vm.data.img) {
            suma++;
            if (vm.data.img[k] != null) {
              vm.fileExt = vm.data.img[k].name.split(".").pop();
              if(!vm.fileExt.match(/^(jpg|jpeg|gif|png)$/)){
                  toastr.warning('La Foto número '+suma+' no tiene un formato valido');
                  return null;
              }
            } else {
              toastr.warning('Carga la foto número '+suma);
              return null;
            }
          }

          if (vm.data.price < 1 || vm.data.price > 100000) {
            toastr.warning("El costo del inmueble no es valido");
            return null
          }
          if(parseInt(vm.data.guests) > 5 || parseInt(vm.data.guests) < 1){
            toastr.warning("El número de Huéspedes no es valido");
            return null
          }
          if(vm.pos.lat == undefined && vm.pos.lng == undefined ){
            toastr.warning("Mueve el pin del mapa para señalar la Ubicación");
            return null
          }
          if(parseInt(vm.data.period) < 1 || parseInt(vm.data.period) > 3){
            toastr.warning("El periodo no es valido");
            return null
          }
          if (vm.data.restrictions.length < 1 && vm.data.services.length < 3) {
            toastr.warning("Selecciona por lo menos 3 servicios y 1 restriction");
            return null
          }

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
            if(parseInt(data) > 0){
              vm.setServicio(data);
              vm.uploadImg(data);
              return true;
            }
          });
        }

        vm.setServicio = function(id) {
          var dataPublicacion = {
            idPublicacion : id,
            restricciones : vm.data.restrictions,
            servicios : vm.data.services
          }
          postService.setAdd(dataPublicacion).then(function(data) {
            return true;
          });
        }

        vm.uploadImg = function(id) {
          var formData = new FormData();
          formData.append("dataimg", id);
          formData.append("1", vm.data.img.uno);
          formData.append("1", vm.data.img.dos);
          formData.append("1", vm.data.img.tre);
          formData.append("1", vm.data.img.cua);
          postService.uploadImg(formData).then(function(data) {
            if(data.message == 4) {
              return true;
            } else {
              return false;
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


        vm.publicarPost = function(){
          document.getElementById('btnpost').innerHTML = 'Subiendo...';
          if (vm.btn == 0) {
            vm.validarForm()
            toastr.success("Se ha publicado exitosamente");
            setTimeout(function(){
              window.location.href = '/app/myposts';
            },2000);
          }
          vm.btn = 1;
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

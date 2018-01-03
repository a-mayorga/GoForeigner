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
        vm.options = {
          country: 'mx'
        };
        vm.result = '';
        vm.details = '';
        vm.latitude = '';
        vm.longitude = '';
        vm.pos = {};
        vm.map = {
          zoom: 17
        };
        vm.data = {
          guests : 0,
          services : [],
          restrictions : [],
          img : {
            uno : null,
            dos : null,
            tre : null,
            cua : null
          }
        };

        // var swiper = new Swiper('.swiper-container', {
        //   pagination: {
        //     el: '.swiper-pagination',
        //   },
        //   scrollbar: {
        //     el: '.swiper-scrollbar',
        //   },
        //   loop :  true,
        //   dynamicBullets: true,
        // });

        getServices();
        getRestrictions();
        // getPosition();
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

        function getPosition() {
          navigator.geolocation.getCurrentPosition(function(position) {
            vm.map.latitude = position.coords.latitude;
            vm.map.longitude = position.coords.longitude;
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
                  var idPublicacion = 0;
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
                    console.log(data);
                    setServicio(data)
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
          console.log(dataPublicacion);
          postService.setAdd(dataPublicacion).then(function(data) {
            console.log(data);
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
          var contador = 1;

          for (var i = 0; i < 5; i++){
            if (vm.data.img[i] == null) {
              let suma = i+1;
              toastr.error('La Foto número '+suma+' no ha sido cargada');
              return false;
            }
          }

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

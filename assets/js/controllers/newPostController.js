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

        var swiper = new Swiper('.swiper-container', {
          pagination: {
            el: '.swiper-pagination',
          },
          scrollbar: {
            el: '.swiper-scrollbar',
          },
          loop :  true,
          dynamicBullets: true,
        });

        getServices();
        getRestrictions();
        getPosition();

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

          NgMap.getMap().then(function(map) {
            console.log(map);
            console.log('markers', map.markers[0].position);
          });

        }

        vm.getCurrentlocation = function(e) {
            vm.pos.lat = e.latLng.lat();
            vm.pos.lng = e.latLng.lng();
        };

        vm.validarForm = function(){
          if(parseInt(vm.data.guests) > 0 && parseInt(vm.data.guests) <= 5){
            if(vm.data.location.lat != undefined && vm.data.location.lng != undefined ){
              if(parseInt(vm.data.period) > 0 && parseInt(vm.data.period) <= 3){
                if (vm.data.restrictions.length > 0 && vm.data.services.length > 0) {
                  var dataPublicacion = {
                    idUsuario : sessionStorage.getItem('idUsuario'),
              			lat: vm.data.location.lat,
              			lng: vm.data.location.lng,
              			costo: vm.data.price,
              			descripciones: vm.data.description,
              			idZonaInmueble: 1,
                    huespedes : vm.data.guests
                  }
                  postService.setPost(dataPublicacion).then(function(data) {
                    console.log(data);
                  });
                } else {
                  toastr.error("Selecciona por lo menos más de 3 servicios y 3 restrictiones");
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

        vm.addRestriccion = function(id) {
          console.log(id);
          var index = vm.data.restrictions.indexOf(id);
          if ( index == -1) {
            vm.data.restrictions.push(id);
          } else {
            vm.data.restrictions.splice(index, 1);
          }
        }

        vm.addServicio = function(id){
          console.log(id);
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
          // console.log(swiper.slideNext());
          vm.validarImg();
          vm.data.location = {
            lat : vm.pos.lat,
            lng : vm.pos.lng
          }
          console.log(vm.data.img);
          if(vm.validarForm()){

          }
        }

    }
})();

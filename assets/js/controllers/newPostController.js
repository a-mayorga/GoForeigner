(function() {

    'use strict';

    angular
        .module('newPostCtrl', [
          'servicesSrvc',
          'restrictionsSrvc',
          'ngMap',
          'ngMapAutocomplete'
        ])
        .controller('NewPostCtrl', newPostController);

    newPostController.$inject = ['servicesService', 'restrictionsService','NgMap'];

    function newPostController(servicesService, restrictionsService, NgMap) {
        var vm = this;
        vm.options = {
          country: 'mx'
        };
        vm.details = '';
        vm.pos = {};
        vm.map = {
          zoom: 17
        };

        var swiper = new Swiper('.swiper-container', {
          pagination: {
            el: '.swiper-pagination',
          },
          scrollbar: {
            el: '.swiper-scrollbar',
          },
        });

        getServices();
        getRestrictions();
        getPosition();
        // initMap();

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

        /*******************MAPA************/
        function initMap() {
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
              vm.pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
              };
              cargarMapa(vm.pos,2,15);
            }, function() {

            });
          } else {

          }
        }


        function cargarLugar(id) {
          $.ajax({
            method: "POST",
            url: config.url+'Mapa/lugar',
            type : 'POST',
            data : {'idLugar': id},
          })
          .done(function(rst){
            cargarMapa(rst,1, 20);
          })
          .fail(function(){

          })
        }

        function cargarMapa(lugar,opt,zoom = 12) {
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
             pos = {
               lat: lat = evt.latLng.lat(),
               lng: lng = evt.latLng.lng()
             };
          });
        }

        function saveUbicacion() {
          var descripcion = document.getElementById('descripcion').value

          $.ajax({
            method: "POST",
            url: config.url+'Mapa/setLugar',
            type : 'POST',
            data : {lng:pos.lng, lat:pos.lat, desc: descripcion}
          })
          .done(function(rst){
            console.log(rst);
          })
          .fail(function(){

          })
        }
        /*****************END MAPA************/
    }

})();

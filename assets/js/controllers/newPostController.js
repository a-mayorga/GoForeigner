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
        vm.result = '';
        vm.details = '';
        vm.latitude = '';
        vm.longitude = '';
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
            // map.markers.shift();
            // map.markers.push({
            //   latitude: parseFloat(lat),
            //   longitude: parseFloat(lng),
            //   draggable: true
            // });
            console.log('markers', map.markers[0].position);
          });

        }

        vm.getCurrentlocation = function(e) {
            vm.pos.lat = e.latLng.lat();
            vm.pos.lng = e.latLng.lng();
        };


    }
})();

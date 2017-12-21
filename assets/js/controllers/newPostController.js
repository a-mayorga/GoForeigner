(function() {

    'use strict';

    angular
        .module('newPostCtrl', [
          'servicesSrvc',
          'restrictionsSrvc'
        ])
        .controller('NewPostCtrl', newPostController);

    newPostController.$inject = ['servicesService', 'restrictionsService'];

    function newPostController(servicesService, restrictionsService) {
        var vm = this;
        vm.map = {
          zoom: 17
        };

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
    }

})();

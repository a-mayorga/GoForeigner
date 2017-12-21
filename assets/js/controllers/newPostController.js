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

        getServices();
        getRestrictions();

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
    }

})();

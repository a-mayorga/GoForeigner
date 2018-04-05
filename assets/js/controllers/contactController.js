(function() {

    'use strict';

    angular
        .module('contactCtrl', [])
        .controller('ContactCtrl', contactController);

    contactController.$inject = ['$state'];

    function contactController($state) {
        var vm = this;
        vm.accept = accept;
        vm.map = {
          latitude: 45,
          longitude: -73,
          zoom: 8
        };

        function accept() {
          // Implement notification to leesse
          $state.go('app.explore');
        }
    }

})();

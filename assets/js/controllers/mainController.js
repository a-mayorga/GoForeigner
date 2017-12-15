(function() {

    'use strict';

    angular
        .module('mainCtrl', [])
        .controller('MainCtrl', mainController);

    mainController.$inject = ['$rootScope'];

    /* Add class to body depending on the state's bodyClass data */
    function mainController($rootScope) {
        var vm = this;
        vm.isOpen = false;
        vm.openNav = openNav;

        vm.bodyClass = '';

        /* When changing a state was successful */
        $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
            /* Checking if the state has data and the data contains bodyClass */
            if (toState.data && toState.data.bodyClass) {
                /* If it does, assign the value to the bodyClass variable */
                vm.bodyClass = toState.data.bodyClass;
                return;
            }
        });

        function openNav() {
          if(vm.isOpen) {
            angular.element(document.querySelector('.nav-menu')).removeClass('open');
          }
          else {
            angular.element(document.querySelector('.nav-menu')).addClass('open');
          }

          vm.isOpen = !vm.isOpen;
        }
    }

})();

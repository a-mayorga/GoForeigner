(function() {

    'use strict';

    angular
        .module('indexCtrl', [
          'authSrvc'
        ])
        .controller('IndexCtrl', indexController);

    indexController.$inject = ['authService'];

    function indexController(authService) {
        var vm = this;
        vm.isLoggedIn = authService.isLoggedIn();
    }

})();

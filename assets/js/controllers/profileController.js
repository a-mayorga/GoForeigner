(function() {

    'use strict';

    angular
        .module('profileCtrl', [
          'authSrvc'
        ])
        .controller('ProfileCtrl', profileController);

    profileController.$inject = ['authService', 'sessionControl'];

    function profileController(authService, sessionControl) {
        var vm = this;
        vm.name = sessionControl.get('name');
        vm.lastName = sessionControl.get('lastName');
        vm.picture = sessionControl.get('picture');
        vm.logout = authService.logout;
    }

})();

(function() {

    'use strict';

    angular
        .module('loginCtrl', [
          'toastr',
          'authSrvc'
        ])
        .controller('LoginCtrl', loginController);

    loginController.$inject = ['toastr', 'authService'];

    function loginController(toastr, authService) {
        var vm = this;
        vm.loginData = {};
        vm.loginSubmit = loginSubmit;

        function loginSubmit() {
          let email = vm.loginData.email;
          let pass = vm.loginData.pass;

          if(email != null && pass != null) {
            authService.login(vm.loginData);
          }
          else {
            toastr.error('Debes completar todos los campos');
          }
        }
    }

})();

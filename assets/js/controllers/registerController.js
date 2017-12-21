(function() {

    'use strict';

    angular
        .module('registerCtrl', [
          'toastr',
          'userSrvc'
        ])
        .controller('RegisterCtrl', registerController);

    registerController.$inject = ['toastr', 'userService'];

    function registerController(toastr, userService) {
        var vm = this;
        vm.registerData = {};
        vm.registerSubmit = registerSubmit;

        function registerSubmit() {
          let name = vm.registerData.name;
          let lastName = vm.registerData.lastName;
          let email = vm.registerData.email;
          let phone = vm.registerData.phone;
          let pass = vm.registerData.pass;
          let confPass = vm.registerData.confPass;

          if(name != null && lastName != null && email != null && phone != null && pass != null && confPass != null) {
            if(pass.length >= 6) {
              if(pass == confPass) {
                userService.createUser(vm.registerData);
              }
              else {
                toastr.error('Las contraseñas no coinciden');
              }
            }
            else {
              toastr.error('La contraseña debe contener al menos 6 caracteres');
            }
          }
          else {
            toastr.error('Debes completar todos los campos');
          }
        }
    }

})();

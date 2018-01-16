(function() {

    'use strict';

    angular
        .module('offerCtrl', [
          'authSrvc',
          'userSrvc'
        ])
        .controller('OfferCtrl', offerController);

    offerController.$inject = ['$state', 'sessionControl', 'userService'];

    function offerController($state, sessionControl, userService) {
        var vm = this;
        vm.disabled = true;
        vm.changeBtnState = changeBtnState;
        vm.contact = contact;

        function changeBtnState() {
          if(vm.disabled) {
            angular.element(document.querySelector('#continueBtn')).removeAttr('disabled');
          }
          else {
            angular.element(document.querySelector('#continueBtn')).attr('disabled', true);
          }

          vm.disabled = !vm.disabled;
        }

        function contact() {
          var res = confirm('¿Estás seguro de querer realizar esta acción? \n Los cambios no se podrán deshacer después.');

          if(res) {
            var userData = {
              idUser: sessionControl.get('idUser'),
              type: 2
            }

            userService.changeType(userData);
          }
        }
    }

})();

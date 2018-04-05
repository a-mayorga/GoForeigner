(function() {

    'use strict';

    angular
        .module('termsCtrl', [])
        .controller('TermsCtrl', termsController);

    termsController.$inject = ['$state'];

    function termsController($state) {
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
          $state.go('app.contact');
        }
    }

})();

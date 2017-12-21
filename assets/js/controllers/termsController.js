(function() {

    'use strict';

    angular
        .module('termsCtrl', [])
        .controller('TermsCtrl', termsController);

    termsController.$inject = ['$state'];

    function termsController($state) {
        var vm = this;
        vm.accept;
        vm.contact = contact;

        function contact() {
          if(vm.accept != undefined || vm.accept) {
            // NOTE: Replace by app.contact
            $state.go('app.explore');
          }
          else {
            // NOTE: Show toast message instead
            alert('Tienes que aceptar los términos y condiciones');
          }
        }
    }

})();

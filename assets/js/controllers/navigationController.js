(function() {

    'use strict';

    angular
        .module('navCtrl', [
            'authSrvc'
        ])
        .controller('NavigationCtrl', navigationController);

    navigationController.$inject = ['$window', '$rootScope', 'authService', 'sessionControl'];

    function navigationController($window, $rootScope, authService, sessionControl) {
        var vm = this;
        vm.user = {
            /* Get the user's type to show a different layout for different users */
            type: sessionControl.get('type')
        };
    }

})();

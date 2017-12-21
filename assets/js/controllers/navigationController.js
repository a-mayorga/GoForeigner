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
            name: sessionControl.get('name'),
            lastName: sessionControl.get('lastName'),
            email: sessionControl.get('email'),
            phone: sessionControl.get('phone'),
            type: sessionControl.get('type'),
            picture: sessionControl.get('picture')
        };
    }

})();

(function() {

    'use strict';

    angular
        .module('profileCtrl', [
          'authSrvc'
        ])
        .controller('ProfileCtrl', profileController);

    profileController.$inject = ['$scope', 'authService', 'sessionControl'];

    function profileController($scope, authService, sessionControl) {
        var vm = this;
        vm.type = $scope.$parent.navigation.user.type;
        vm.name = sessionControl.get('name');
        vm.lastName = sessionControl.get('lastName');
        vm.picture = sessionControl.get('picture');
        vm.logout = authService.logout;
    }

})();

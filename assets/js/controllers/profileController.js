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
        vm.name = $scope.$parent.navigation.user.name;
        vm.lastName = $scope.$parent.navigation.user.lastName;
        vm.picture = $scope.$parent.navigation.user.picture;
        vm.logout = authService.logout;
    }

})();

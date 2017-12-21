(function() {

    'use strict';

    angular
        .module('editProfileCtrl', [])
        .controller('EditProfileCtrl', editProfileController);

    editProfileController.$inject = ['$scope'];

    function editProfileController($scope) {
        var vm = this;
        vm.picture = $scope.$parent.navigation.user.picture;
        vm.name = $scope.$parent.navigation.user.name;
        vm.lastName = $scope.$parent.navigation.user.lastName;
        vm.email = $scope.$parent.navigation.user.email;
        vm.phone = $scope.$parent.navigation.user.phone;
    }

})();

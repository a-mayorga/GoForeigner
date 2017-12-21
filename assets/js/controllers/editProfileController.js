(function() {

    'use strict';

    angular
        .module('editProfileCtrl', [])
        .controller('EditProfileCtrl', editProfileController);

    editProfileController.$inject = ['$scope'];

    function editProfileController($scope) {
        var vm = this;
        vm.picture = $scope.$parent.navigation.user.picture;
    }

})();

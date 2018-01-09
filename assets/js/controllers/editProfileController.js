(function() {

  'use strict';

  angular
    .module('editProfileCtrl', [
      'authSrvc',
      'userSrvc',
      'toastr'
    ])
    .controller('EditProfileCtrl', editProfileController);

  editProfileController.$inject = ['$scope', 'sessionControl', 'userService', 'toastr'];

  function editProfileController($scope, sessionControl, userService, toastr) {
    var vm = this;
    vm.newPicture;
    vm.picture = $scope.$parent.navigation.user.picture;
    vm.preview = 'profile_pictures/default.jpg';
    vm.profileData = {
      idUser: sessionControl.get('idUser'),
      name: $scope.$parent.navigation.user.name,
      lastName: $scope.$parent.navigation.user.lastName,
      email: $scope.$parent.navigation.user.email,
      phone: parseInt($scope.$parent.navigation.user.phone)
    };
    vm.saveChanges = saveChanges;

    function saveChanges() {
      let userData = new FormData();
      userData.append('idUser', vm.profileData.idUser);
      userData.append('name', vm.profileData.name);
      userData.append('lastName', vm.profileData.lastName);
      userData.append('email', vm.profileData.email);
      userData.append('phone', vm.profileData.phone);
      userData.append('hasPicture', false);

      if (vm.profileData.newPass != undefined) {
        if (vm.profileData.confPass != undefined) {
          if (vm.profileData.newPass == vm.profileData.confPass) {
            if (vm.profileData.newPass.length >= 6) {
              userData.append('newPass', vm.profileData.newPass);
            } else {
              toastr.warning('La contraseña debe contener al menos 6 caracteres');
            }
          } else {
            toastr.warning('Las contraseñas no coinciden');
          }
        } else {
          toastr.warning('Faltan campos por completar');
        }
      }

      if (vm.newPicture != undefined) {
        userData.set('hasPicture', true);
        userData.append('picture', vm.newPicture);
      }

      userService.updateUser(userData);
    }
  }

})();

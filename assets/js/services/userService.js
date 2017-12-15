(function() {

  'use strict';

  /**
   * Dependencies:
   * - toastr: Toast messages
   */
  angular
    .module('userSrvc', [
      'toastr'
    ])
    .factory('userService', userService);

  userService.$inject = ['$http', '$state', 'toastr'];

  function userService($http, $state, toastr) {
    var userService = {
      getUsers: getUsers,
      createUser: createUser,
      updateUser: updateUser,
      deleteUser: deleteUser
    }

    return userService;

    function getUsers() {
      // NOTE: Change URL to website's domain
      // NOTE: Change localhost to computer's IP address when making requests from an external device
      return $http.get('http://localhost:8000/api/users')
        .then(function(response) {
            return response.data;
          },
          function(error) {
            console.log(error);
          }
        );
    }

    function createUser(userData) {
      return $http({
          method: 'POST',
          url: 'http://localhost:1337/api/user/save',
          data: JSON.stringify(userData),
          headers: {
            'Content-type': 'application/json'
          }
        })
        .then(function(response) {
            console.log(response.data.status);
            toastr.success('Cuenta creada con éxito');
            setTimeout(function() {
              $state.go('login');
            }, 2500);
          },
          function(error) {
            toastr.error('Hubo un error al crear tu cuenta');
            console.log(error);
          });
    }

    function updateUser(userData) {
      return $http({
          method: 'POST',
          url: 'http://localhost:8000/api/users/update',
          data: JSON.stringify(userData),
          headers: {
            'Content-type': 'application/json'
          }
        })
        .then(function(response) {
            // NOTE: Return to the entries and reload them
            toastr.success('Usuario editado correctamente');
          },
          function(error) {
            console.log(error.data);
            /* NOTE: Filter errors by code */
            toastr.error('Hubo un error al editar el usuario');
            // toastr.error('Tu sesión expiró');
            // authService.logout();
          });
    }

    function deleteUser(userId) {
      return $http({
          method: 'POST',
          url: 'http://localhost:8000/api/users/delete',
          data: {
            id: userId
          },
          headers: {
            'Content-type': 'application/json'
          }
        })
        .then(function(response) {
            // NOTE: Return to the entries and reload them
            toastr.success('Usuario eliminado correctamente');
          },
          function(error) {
            console.log(error.data);
            /* NOTE: Filter errors by code */
            // toastr.error('Hubo un error al crear la entrada');
            // toastr.error('Tu sesión expiró');
            // authService.logout();
          });
    }
  }

})();

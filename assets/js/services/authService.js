(function() {

  'use strict';

  /**
   * Dependencies:
   * - toastr: Toast messages
   */
  angular
    .module('authSrvc', [
      'toastr'
    ])
    .factory('sessionControl', sessionControl)
    .factory('authService', authService);

  authService.$inject = ['$http', '$state', 'toastr', 'sessionControl'];

  function sessionControl() {
    /* Factory to control sessions with local storage (get, set, unset) */
    var sessionService = {
      get: get,
      set: set,
      unset: unset
    }

    return sessionService;

    function get(key) {
      return sessionStorage.getItem(key);
    }

    function set(key, val) {
      return sessionStorage.setItem(key, val);
    }

    function unset(key) {
      return sessionStorage.removeItem(key);
    }
  }

  function authService($http, $state, toastr, sessionControl) {
    /*
      authService returns three functions:

      1) login(): Tries to login to the /api/auth route
      2) logout(): Logs the user out
      3) isLoggedIn(): Checks the local storage variable 'isLogged' and returns either true or false
    */
    var authService = {
      login: login,
      logout: logout,
      isLoggedIn: isLoggedIn
    }

    return authService;

    function cacheSession(name, lastName, email, type, status) {
      sessionControl.set('isLogged', true);
      sessionControl.set('name', name);
      sessionControl.set('lastName', lastName);
      sessionControl.set('email', email);
      sessionControl.set('type', type);
      sessionControl.set('status', status);
    }

    function uncacheSession() {
      sessionControl.unset('isLogged');
      sessionControl.unset('name');
      sessionControl.unset('lastName');
      sessionControl.unset('email');
      sessionControl.unset('type');
      sessionControl.unset('status');
    }

    /* Executes the $auth dependency login function (provided by Satellizer) with the login form data */
    function login(loginData) {
      return $http({
        method: 'POST',
        url: 'http://localhost:1337/api/login',
        data: JSON.stringify(loginData),
        headers: {
          'Content-type': 'application/json'
        }
      }).then(function(response) {
          cacheSession(response.data[0].nombre, response.data[0].apellidos,
            response.data[0].correo, response.data[0].idTipoUsuario, response.data[0].idTipoEstado);
          $state.go('profile');
        },
        function(error) {
          uncacheSession();
          toastr.error('Usuario o contraseña incorrectos');
        }
      );
    }

    function logout() {
      uncacheSession();
      $state.go('login');
    }

    function isLoggedIn() {
      /* Checking if the user is logged in verifying the userIsLogged variable stored in local storage */
      return sessionControl.get('isLogged') !== null;
    }
  }

})();

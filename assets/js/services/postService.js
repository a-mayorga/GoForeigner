(function() {

  'use strict';

  angular
    .module('postSrvc', [
      'toastr'
    ])
    .factory('postService', postService);

  postService.$inject = ['$http', '$state', 'toastr'];

  function postService($http, $state, toastr) {
    var postService = {
      getServices: getServices
    }

    return postService;

    function getServices() {
      return $http.get('http://localhost:1337/api/servicestype')
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
            console.log(response.data);

          },
          function(error) {
            toastr.error('Hubo un error al crear tu cuenta');
            console.log(error);
          });
    }

  }
})();

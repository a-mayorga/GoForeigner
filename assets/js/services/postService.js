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
      getServices: getServices,
      setPost : setPost,
      setAdd : setAdd
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

    function setPost(postData) {
      return $http({
          method: 'POST',
          url: 'http://localhost:1337/api/posts/save',
          data: JSON.stringify(postData),
          headers: {
            'Content-type': 'application/json'
          }
        })
        .then(function(response) {
            return response.data.idPublicacion;
          },
          function(error) {
            toastr.error('Hubo un error al crear tu publicación');
            console.log(error);
          });
    }

    function setAdd(postData) {
      return $http({
          method: 'POST',
          url: 'http://localhost:1337/api/posts/setAdd',
          data: JSON.stringify(postData),
          headers: {
            'Content-type': 'application/json'
          }
        })
        .then(function(response) {
            return response.data;
          },
          function(error) {
            toastr.error('Hubo un error al crear tu publicación');
            console.log(error);
          });
    }

  }
})();

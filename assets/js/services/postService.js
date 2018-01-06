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
      setAdd : setAdd,
      uploadImg : uploadImg,
      getMyPosts : getMyPosts,
      getPostPayment : getPostPayment
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

    function uploadImg(dataimg) {
      return $http({
          method: 'POST',
          url: 'http://localhost:1337/api/posts/uploadImg',
          data: (dataimg),
          headers: {
            'Content-type': undefined
          },
          processData: false,
          contentType: false
        })
        .then(function(response) {
            return response.data;
          },
          function(error) {
            toastr.error('Hubo un error al crear tu publicación');
          });
    }

    function getMyPosts() {
      return $http({
          method: 'POST',
          url: 'http://localhost:1337/api/posts/getMyPublicaciones',
          data: JSON.stringify({idUsuario : sessionStorage.getItem("idUsuario")}),
          headers: {
            'Content-type': 'application/json'
          }
        })
        .then(function(response) {
            return response.data;
          },
          function(error) {
            toastr.error('Hubo un error al cargar tus publicaciones');
            console.log(error);
          });
    }

    function getPostPayment() {
      return $http.post('http://localhost:1337/api/adspayment/publicaciones')
        .then(function(response) {
            return response.data;
          },
          function(error) {
            console.log(error);
          }
        );
    }

  }
})();

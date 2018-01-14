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
      getPostPayment : getPostPayment,
      getDataPublicacion : getDataPublicacion,
      getRestrictionsPost : getRestrictionsPost,
      getServicesPost : getServicesPost,
      savePost : savePost,
      deletePostSaved : deletePostSaved
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
          data: JSON.stringify({idUsuario : sessionStorage.getItem("idUser")}),
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

    function getDataPublicacion(idPublicacion) {
      return $http({
          method: 'POST',
          url: 'http://localhost:1337/api/posts/getDataPublicacion',
          data: JSON.stringify(idPublicacion),
          headers: {
            'Content-type': 'application/json'
          }
        })
        .then(function(response) {
            return response.data;
          },
          function(error) {
            toastr.error('Hubo un error al cargar la publicación');
            console.log(error);
          });
    }

    function getServicesPost(idPublicacion) {
      return $http({
          method: 'POST',
          url: 'http://localhost:1337/api/posts/getServicesPost',
          data: JSON.stringify(idPublicacion),
          headers: {
            'Content-type': 'application/json'
          }
        })
        .then(function(response) {
            return response.data;
          },
          function(error) {
            toastr.error('Hubo un error al cargar la publicación');
            console.log(error);
          });
    }

    function getRestrictionsPost(idPublicacion) {
      return $http({
          method: 'POST',
          url: 'http://localhost:1337/api/posts/getRestrictionsPost',
          data: JSON.stringify(idPublicacion),
          headers: {
            'Content-type': 'application/json'
          }
        })
        .then(function(response) {
            return response.data;
          },
          function(error) {
            toastr.error('Hubo un error al cargar la publicación');
            console.log(error);
          });
    }

    function savePost(idPublicacion) {
      return $http({
          method: 'POST',
          url: 'http://localhost:1337/api/saved/save',
          data: JSON.stringify(idPublicacion),
          headers: {
            'Content-type': 'application/json'
          }
        })
        .then(function(response) {
            return response.data;
          },
          function(error) {
            toastr.error('savePost');
            console.log(error);
          });
    }

    function deletePostSaved(idPublicacion) {
      return $http({
          method: 'POST',
          url: 'http://localhost:1337/api/saved/delete',
          data: JSON.stringify(idPublicacion),
          headers: {
            'Content-type': 'application/json'
          }
        })
        .then(function(response) {
            return response.data;
          },
          function(error) {
            toastr.error('savePost');
            console.log(error);
          });
    }



  }
})();

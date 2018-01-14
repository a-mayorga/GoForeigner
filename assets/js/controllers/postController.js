(function() {

  'use strict';

  angular
    .module('postCtrl', [
      'toastr',
      'postSrvc'
    ])
    .controller('PostCtrl', postController);

  postController.$inject = ['$stateParams', 'toastr','postService'];

  function postController($stateParams, toastr,postService) {
    var vm = this;
    vm.idPublicacion = $stateParams.id;
    vm.dataPost = {};
    vm.postServices = {};
    vm.postRestrictions = {};
    vm.map = {
      latitude: 45,
      longitude: -73,
      zoom: 15
    };

    getIsSaved();
    getDataPublicacion();
    getServicesPost();
    getRestrictionsPost();

    var swiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
      },
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });

    function getIsSaved() {
      postService.getIsSaved({idPublicacion : vm.idPublicacion, idUsuario : sessionStorage.getItem('idUser')}).then(function(data) {
        console.log(data);
        var heart = document.querySelector('i.save');
        if (data[0].idGuardados > 0 ) {
            heart.classList.remove("fa-heart-o");
            heart.classList.add("fa-heart");
          } else {
            heart.classList.remove("fa-heart");
            heart.classList.add("fa-heart-o");
          }
      });
    }

    function getDataPublicacion() {
      postService.getDataPublicacion({idPublicacion : vm.idPublicacion}).then(function(data) {
        vm.dataPost = data[0];
      });
    }

    function getServicesPost() {
      postService.getServicesPost({idPublicacion : vm.idPublicacion}).then(function(data) {
        vm.postServices = data;
      });
    }

    function getRestrictionsPost() {
      postService.getRestrictionsPost({idPublicacion : vm.idPublicacion}).then(function(data) {
        vm.postRestrictions = data;
      });
    }


  }
})();

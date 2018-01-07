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

    function getDataPublicacion() {
      postService.getDataPublicacion({idPublicacion : vm.idPublicacion}).then(function(data) {
        vm.dataPost = data[0];
      });
    }

    function getServicesPost() {
      postService.getServicesPost({idPublicacion : vm.idPublicacion}).then(function(data) {
        console.log(data);
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

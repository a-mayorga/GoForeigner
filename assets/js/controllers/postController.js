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
    vm.map = {
      latitude: 45,
      longitude: -73,
      zoom: 15
    };

    getDataPublicacion();

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
        console.log(data);
        vm.dataPost = data[0];
      });
    }


  }
})();

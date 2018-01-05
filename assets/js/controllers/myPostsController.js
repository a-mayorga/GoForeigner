(function() {

    'use strict';

    angular
        .module('myPostsCtrl', [
          'postSrvc',
          'toastr'
        ])
        .controller('MyPostsCtrl', myPostsController);

    myPostsController.$inject = ['postService', 'toastr'];

    function myPostsController(postService, toastr) {
        var vm = this;
        vm.opciones = opciones;
        vm.mypostsData  = {};

        var swiper = new Swiper('.swiper-container', {
          pagination: {
            el: '.swiper-pagination',
          },
          scrollbar: {
            el: '.swiper-scrollbar',
          },
        });

        getMyPosts();

        function opciones(id) {
          var elemnt = document.getElementById(id);
          if (elemnt.classList.contains("no-visible")) {
            elemnt.classList.remove("no-visible");
            elemnt.classList.add("visible");
          } else {
            elemnt.classList.add("no-visible");
            elemnt.classList.remove("visible");
          }
        }

        function getMyPosts() {
          postService.getMyPosts().then(function(data) {
            console.log(data);
            vm.mypostsData = data;
          });
        }

        vm.planAdvertising = function(id) {
          // console.log(id);
          window.location.href='/app/planAdvertising/'+id;
        }
    }

})();

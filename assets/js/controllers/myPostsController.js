(function() {

    'use strict';

    angular
        .module('myPostsCtrl', [])
        .controller('MyPostsCtrl', myPostsController);

    myPostsController.$inject = [];

    function myPostsController() {
        var vm = this;
        vm.opciones = opciones;

        var swiper = new Swiper('.swiper-container', {
          pagination: {
            el: '.swiper-pagination',
          },
          scrollbar: {
            el: '.swiper-scrollbar',
          },
        });

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
    }

})();

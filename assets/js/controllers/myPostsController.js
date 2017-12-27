(function() {

    'use strict';

    angular
        .module('myPostsCtrl', [])
        .controller('MyPostsCtrl', myPostsController);

    myPostsController.$inject = [];

    function myPostsController() {
        var vm = this;
        var swiper = new Swiper('.swiper-container', {
          pagination: {
            el: '.swiper-pagination',
          },
          // And if we need scrollbar
          scrollbar: {
            el: '.swiper-scrollbar',
          },
        });
    }

})();

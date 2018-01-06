(function() {

    'use strict';

    angular
        .module('exploreCtrl', [
          'postSrvc'
        ])
        .controller('ExploreCtrl', exploreController);

    // indexController.$inject = ['$document', '$window', 'vcRecaptchaService', 'contactService'];
    exploreController.$inject = ['postService'];

    function exploreController(postService) {
        var vm = this;
        vm.post = {};
        var swiper = new Swiper('.swiper-container', {
          pagination: {
            el: '.swiper-pagination',
          },
          scrollbar: {
            el: '.swiper-scrollbar',
          },
        });

        getPostPayment();

        function getPostPayment() {
          postService.getPostPayment().then(function(data) {
            console.log(data);
            vm.post = data;
          });
        }

    }
})();

(function() {

    'use strict';

    angular
        .module('savedCtrl', [
          'postSrvc'
        ])
        .controller('SavedCtrl', savedController);

    savedController.$inject = ['postService'];

    function savedController(postService) {
        var vm = this;
        vm.deleteSaved = function() {
          alert('Deleting...');
        };
        vm.mypostsData  = {};

        var swiper = new Swiper('.swiper-container', {
          pagination: {
            el: '.swiper-pagination',
          },
          scrollbar: {
            el: '.swiper-scrollbar',
          },
        });

        getMySaves();

        function getMySaves() {
          postService.getMySaves({idUsuario : sessionStorage.getItem('idUser')}).then(function(data) {
            console.log(data);
            vm.mypostsData = data;
          });
        }
    }

})();

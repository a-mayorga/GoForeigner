(function() {

  'use strict';

  angular
    .module('postCtrl', [
      'toastr',
      'postSrvc'
    ])
    .controller('PostCtrl', postController);

  postController.$inject = ['toastr','postService'];

  function postController(toastr,postService) {
    var vm = this;
    vm.map = {
      latitude: 45,
      longitude: -73,
      zoom: 8
    };


  }
})();

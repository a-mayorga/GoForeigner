(function() {

  'use strict';

  angular
    .module('postCtrl', [])
    .controller('PostCtrl', postController);

  postController.$inject = [];

  function postController() {
    var vm = this;
    vm.map = {
      latitude: 45,
      longitude: -73,
      zoom: 8
    };
  }

})();

(function() {

    'use strict';

    angular
        .module('postsCtrl', [])
        .controller('PostsCtrl', postsController);

    postsController.$inject = [];

    function postsController() {
        var vm = this;
    }

})();

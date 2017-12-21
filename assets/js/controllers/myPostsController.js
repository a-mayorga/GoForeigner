(function() {

    'use strict';

    angular
        .module('myPostsCtrl', [])
        .controller('MyPostsCtrl', myPostsController);

    myPostsController.$inject = [];

    function myPostsController() {
        var vm = this;
    }

})();

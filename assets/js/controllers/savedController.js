(function() {

    'use strict';

    angular
        .module('savedCtrl', [])
        .controller('SavedCtrl', savedController);

    savedController.$inject = [];

    function savedController() {
        var vm = this;
        vm.deleteSaved = function() {
          alert('Deleting...');
        };
    }

})();

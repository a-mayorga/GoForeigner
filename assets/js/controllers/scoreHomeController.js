(function() {

    'use strict';

    angular
        .module('scoreHomeCtrl', [
          'toastr'
        ])
        .controller('ScoreHomeCtrl', scoreHomeController);

    scoreHomeController.$inject = ['toastr'];

    function scoreHomeController(toastr) {
        var vm = this;
        vm.scoreHomeData = {};
        vm.scoreSubmit = scoreSubmit;

        function scoreSubmit() {

        }
    }

})();

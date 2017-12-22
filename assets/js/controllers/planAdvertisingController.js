(function() {

    'use strict';

    angular
        .module('planAdvertisingCtrl', [
          'planAdvertisingSrvc'
        ])
        .controller('PlanAdvertisingCtrl', planAdvertisingController);

    planAdvertisingController.$inject = ['$stateParams','planAdvertisingService'];

    function planAdvertisingController($stateParams, planAdvertisingService) {
        var vm = this;
        vm.idPublicacion = $stateParams.id;
        vm.dataPlan = {};
        console.log($stateParams.id);
        getTipPlan();

        function getTipPlan() {
          planAdvertisingService.getPlan().then(function(data) {
            vm.dataPlan = data;
            console.log(data);
          });
        }
    }

})();

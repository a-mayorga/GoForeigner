(function() {

    'use strict';

    angular
        .module('planAdvertisingCtrl', [
          'planAdvertisingSrvc',
          'paySrvc',
          'toastr'
        ])
        .controller('PlanAdvertisingCtrl', planAdvertisingController);

    planAdvertisingController.$inject = ['$stateParams','planAdvertisingService', 'payService', 'toastr'];

    function planAdvertisingController($stateParams, planAdvertisingService, payService, toastr) {
        var vm = this;
        vm.idPublicacion = {};
        vm.idPublicacion = $stateParams.id;
        vm.idPago = {};
        vm.dataPlan = {};
        vm.seleccionaPlan = seleccionaPlan;
        vm.pagarPayPal = pagarPayPal;
        getTipPlan();

        function getTipPlan() {
          planAdvertisingService.getPlan().then(function(data) {
            vm.dataPlan = data;
          });
        }

        function seleccionaPlan(id) {
          vm.idPago = id;
          localStorage.setItem("idPago",id);
          localStorage.setItem("idPublicacion",vm.idPublicacion);

          var elementos = document.getElementsByClassName("seleccionado");
          for (var i = 0; i < elementos.length; i++) {
            elementos[i].classList.remove("seleccionado");
          }
          if (document.getElementById(id).classList.contains("seleccionado")) {
            document.getElementById(id).classList.remove("seleccionado");
          } else {
            document.getElementById(id).classList.add("seleccionado");
            toastr.success('Plan Seleccionado');
          }

        }

        function pagarPayPal() {
          if(vm.idPago > 0){
            window.location.href = "/app/pay";
          } else {
            toastr.error('Selecciona un plan');
          }
        }
    }

})();

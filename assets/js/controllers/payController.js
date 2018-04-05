(function() {

    'use strict';

    angular
        .module('payCtrl', [
          'toastr',
          'paySrvc'
        ])
        .controller('PayCtrl', payController);

    payController.$inject = ['$stateParams','toastr', 'payService'];

    function payController($stateParams, toastr, payService) {
        var vm = this;
        vm.idPlan = localStorage.getItem("idPago");
        vm.idPublicacion = localStorage.getItem("idPublicacion");
        vm.payData = {};
        vm.tipoPublicidad = 1
        vm.long = 1;
        vm.paypl = paypl;

        getDataToPay();

        function getDataToPay() {

          payService.getInfoPago({ id : vm.idPlan }).then(function(data) {
            vm.payData = data;
            vm.long = data.duracion;
            paypl(data.costo);
          });
        }

        function paypl(costo) {
          paypal.Button.render({
              env: 'sandbox', // Or 'sandbox'
              client: {
                  sandbox:    'ARp962Irq2fb09N20pPMnl0T86CeVtAkcMPqrSquRzUdSS1Yo6kKbGiOw7AG8IOzWOw4OwsRP2ywYEn6',
                  production: 'AU42QHezL0JzJsmfYb0pigw-Hnq-omahb0-3lja7u9uMutIw1Y8JKMPELhFtm5vLm_m4r3w7suYqFdWW'
              },
              style: {
                  size: 'responsive',
                  color: 'blue',
                  shape: 'pill',
                  label: 'checkout'
              },
              commit: true, // Show a 'Pay Now' button

              payment: function(data, actions) {
                  return actions.payment.create({
                      payment: {
                          transactions: [
                              {
                                  amount: { total: costo+".00", currency: 'MXN' }
                              }
                          ]
                      }
                  });
              },

              onAuthorize: function(data, actions) {
                  return actions.payment.execute().then(function(payment) {
                      var dataPay = {
                        idPublicacion : vm.idPublicacion,
                        idTipoPublicidad : vm.tipoPublicidad,
                        long : vm.long,
                        payerID : data.payerID,
                        paymentID : data.paymentID,
                        paymentToken : data.paymentToken
                      }
                      // The payment is complete!
                      // You can now show a confirmation message to the customer
                      payService.setPagoPublicidad(dataPay).then(function(data) {
                        console.log(data);
                        if (parseInt(data.idPagoPublicidad) > 0) {
                          toastr.success("Pago Exitoso!");
                          toastr.info("Tu publicacion ahora durara "+vm.long+" días en el apartado explorar");
                          setTimeout(function(){
                            window.location.href = '/app/myposts';
                          },5000);
                        }
                      });
                  });
              }

          }, '#paypal-button');
        }
    }

})();

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
        vm.idPlan = $stateParams.id;
        vm.payData = {};
        vm.paypal = paypal;

        paypal();
        getDataToPay();

        function getDataToPay() {
          payService.getPayData(vm.idPlan).then(function(data) {
            vm.payData = data;
            console.log(data);
          });
        }

        function paypal() {
          paypal.Button.render({
              env: 'production', // Or 'sandbox'
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
                                  amount: { total: '1.00', currency: 'MXN' }
                              }
                          ]
                      }
                  });
              },

              onAuthorize: function(data, actions) {
                  return actions.payment.execute().then(function(payment) {

                      // The payment is complete!
                      // You can now show a confirmation message to the customer
                  });
              }

          }, '#paypal-button');
        }
    }

})();
(function() {

  'use strict';

  angular
    .module('paySrvc', [])
    .factory('payService', payService);

  payService.$inject = ['$http'];

  function payService($http) {
    var payService = {
      payService: payService,
      getPayData : getPayData
    }

    return payService;

    function getPayData(payId){
      return $http({
              method: 'GET',
              url: 'http://localhost:1337/api/album/' + payId,
          })
          .then(function(response) {
                  return response.data
              },
              function(error) {
                  console.log(error);
              });
    }

    function payService(payData) {
      return $http({
          method: 'POST',
          url: 'http://localhost:1337/api/adspayment/save',
          data: JSON.stringify(payData),
          headers: {
            'Content-type': 'application/json'
          }
        })
        .then(function(response) {
            console.log(response.data.status);
            toastr.success('Pago Exitoso');
            setTimeout(function() {
              $state.go('login');
            }, 2500);
          },
          function(error) {
            toastr.error('Hubo un error al Pagar');
            console.log(error);
          });
    }
  }

})();

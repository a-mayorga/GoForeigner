(function() {

  'use strict';

  angular
    .module('paySrvc', [
      'toastr'
    ])
    .factory('payService', payService);

  payService.$inject = ['$http', 'toastr'];

  function payService($http, toastr) {
    var payService = {
      getInfoPago : getInfoPago,
      setPagoPublicidad : setPagoPublicidad
    }

    return payService;

    function getInfoPago(payData) {
      return $http({
        method: 'POST',
        url: 'http://localhost:1337/api/adstypebyId',
        data: JSON.stringify(payData),
        headers: {
          'Content-type': 'application/json'
        }
      }).then(function(response) {
          return response.data
        },
        function(error) {
          toastr.error("No se pudo conectar con el servicio");
        }
      );
    }

    function setPagoPublicidad(payData) {
      return $http({
        method: 'POST',
        url: 'http://localhost:1337/api/pago/setPagoPublicidad',
        data: JSON.stringify(payData),
        headers: {
          'Content-type': 'application/json'
        }
      }).then(function(response) {
          return response.data
        },
        function(error) {
          toastr.error("No se pudo conectar con el servicio");
        }
      );
    }
  }

})();

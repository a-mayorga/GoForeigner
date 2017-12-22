(function() {

  'use strict';

  angular
    .module('planAdvertisingSrvc', [])
    .factory('planAdvertisingService', planAdvertisingService);

  planAdvertisingService.$inject = ['$http'];

  function planAdvertisingService($http) {
    var planAdvertisingService = {
      getPlan: getPlan
    }

    return planAdvertisingService;

    function getPlan() {
      return $http.get('http://localhost:1337/api/adstype')
        .then(function(response) {
            return response.data;
          },
          function(error) {
            console.log(error);
          }
        );
    }
  }

})();

(function() {

  'use strict';

  angular
    .module('servicesSrvc', [])
    .factory('servicesService', servicesService);

  servicesService.$inject = ['$http'];

  function servicesService($http) {
    var servicesService = {
      getServices: getServices
    }

    return servicesService;

    function getServices() {
      return $http.get('http://localhost:1337/api/servicestype')
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

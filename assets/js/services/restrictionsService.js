(function() {

  'use strict';

  angular
    .module('restrictionsSrvc', [])
    .factory('restrictionsService', restrictionsService);

  restrictionsService.$inject = ['$http'];

  function restrictionsService($http) {
    var restrictionsService = {
      getRestrictions: getRestrictions
    }

    return restrictionsService;

    function getRestrictions() {
      return $http.get('http://localhost:1337/api/restrictionstype')
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

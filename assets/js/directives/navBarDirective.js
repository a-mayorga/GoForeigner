(function() {

  'use strict';

  /*
    Directive to update html title

    The directive can be invoked by:
      - Element name (tag)
      - Attribute
      - Class
      - Comment
  */
  angular
    .module('navBarDir', [])
    .directive('navBar', navBarDir);

  navBarDir.$inject = [];

  function navBarDir() {
    var navBarDir = {
      restrict: 'E',
      templateUrl: 'js/templates/navbar.html',
      link: link
    };

    return navBarDir;

    function link(scope, element, attrs) {

      angular.element(element[0].querySelector('i.back')).on('click', function() {
        history.back();
      });

      angular.element(element[0].querySelector('i.save')).on('click', function() {
        // NOTE: Implement save functionality
        alert('bye');
      });
    }
  }

})();

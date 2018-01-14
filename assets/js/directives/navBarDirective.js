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
    .module('navBarDir', [
      'postSrvc'
    ])
    .directive('navBar', navBarDir);

  navBarDir.$inject = ['postService'];

  function navBarDir(postService) {
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
        var heart = document.querySelector('i.save');
        var idPublicacion = document.getElementById('idPublicacion').value;
        if (heart.classList.contains("fa-heart-o")) {
          heart.classList.remove("fa-heart-o");
          postService.savePost({idPublicacion : idPublicacion, idUsuario : sessionStorage.getItem('idUser')}).then(function(data) {
            if (data.idGuardados > 0) {
              heart.classList.add("fa-heart");
            }
          });
        } else {
          heart.classList.remove("fa-heart");
          postService.deletePostSaved({idPublicacion : idPublicacion, idUsuario : sessionStorage.getItem('idUser')}).then(function(data) {
            console.log(data);
            heart.classList.add("fa-heart-o");
            if (data[0].idGuardados > 0) {
              heart.classList.add("fa-heart-o");
            }
          });
        }
        // alert('bye');
      });
    }
  }

})();

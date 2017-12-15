(function() {

  'use strict';

  angular
    .module('goForeignerApp', [
      'ngAnimate',
      'ui.router',
      'toastr',
      'mainCtrl',
      'indexCtrl',
      'loginCtrl',
      'registerCtrl',
      'exploreCtrl',
      'savedCtrl',
      'profileCtrl',
      'editProfileCtrl',
      'resultsCtrl',
      'authSrvc',
      'pageTitleDir'
    ])
    .config(appConfig)
    .run(appRun);

  /* Injecting dependencies to the config */
  appConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', 'toastrConfig'];
  appRun.$inject = ['$rootScope', '$state', 'authService', 'toastr'];

  function appConfig($stateProvider, $urlRouterProvider, $locationProvider, toastrConfig) {
    /* Configure toast messages */
    angular.extend(toastrConfig, {
        autoDismiss: true,
        maxOpened: 1,
        positionClass: 'toast-bottom-center',
        preventOpenDuplicates: true,
        target: 'div.container',
        timeOut: 2500,
        extendedTimeOut: 1000
      }
    );

    /* Creating states */
    var indexState = {
      name: 'index',
      url: '/',
      controller: 'IndexCtrl',
      controllerAs: 'index',
      templateUrl: 'js/templates/index.html',
      module: 'public',
      data: {
        'pageTitle': 'GoForeigner',
        'bodyClass': 'body-main'
      }
    }

    var loginState = {
      name: 'login',
      url: '/login',
      controller: 'LoginCtrl',
      controllerAs: 'login',
      templateUrl: 'js/templates/login.html',
      module: 'public',
      data: {
        'pageTitle': 'Iniciar Sesión',
        'bodyClass': 'body-main'
      }
    }

    var registerState = {
      name: 'register',
      url: '/register',
      controller: 'RegisterCtrl',
      controllerAs: 'register',
      templateUrl: 'js/templates/register.html',
      module: 'public',
      data: {
        'pageTitle': 'Registro',
        'bodyClass': 'body-main'
      }
    }

    var exploreState = {
      name: 'explore',
      url: '/explore',
      controller: 'ExploreCtrl',
      controllerAs: 'explore',
      templateUrl: 'js/templates/explore.html',
      module: 'public',
      data: {
        'pageTitle': 'Explorar'
      }
    }

    var savedState = {
      name: 'saved',
      url: '/saved',
      controller: 'SavedCtrl',
      controllerAs: 'saved',
      templateUrl: 'js/templates/saved.html',
      module: 'private',
      data: {
        'pageTitle': 'Guardados'
      }
    }

    var profileState = {
      name: 'profile',
      url: '/profile',
      controller: 'ProfileCtrl',
      controllerAs: 'profile',
      templateUrl: 'js/templates/profile.html',
      module: 'private',
      data: {
        'pageTitle': 'Perfil'
      }
    }

    // var editProfileState = {
    //   name: 'profile.edit',
    //   url: '/edit',
    //   controller: 'EditProfileCtrl',
    //   controllerAs: 'editProfile',
    //   templateUrl: 'js/templates/edit_profile.html',
    //   module: 'public',
    //   data: {
    //     'pageTitle': 'Editar perfil'
    //   }
    // }

    // NOTE: Add ID after /results
    var resultsState = {
      name: 'results',
      url: '/results',
      controller: 'ResultsCtrl',
      controllerAs: 'results',
      templateUrl: 'js/templates/results.html',
      module: 'public',
      data: {
        'pageTitle': 'Resultados de búsqueda'
      }
    }

    var notFoundState = {
      name: '404',
      url: '/404',
      templateUrl: 'js/templates/404.html',
      module: 'public',
      data: {
        'pageTitle': 'Página no encontrada'
      }
    }

    /* Adding states to the StateProvider */
    $stateProvider.state(indexState);
    $stateProvider.state(loginState);
    $stateProvider.state(registerState);
    $stateProvider.state(exploreState);
    $stateProvider.state(savedState);
    $stateProvider.state(profileState);
    // $stateProvider.state(editProfileState);
    $stateProvider.state(resultsState);
    $stateProvider.state(notFoundState);

    /* Defining redirection state when the route on the address bar doesn't match any state */
    $urlRouterProvider.otherwise('404');

    /* Disabling # notation on the address bar */
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });

  }

  function appRun($rootScope, $state, authService, toastr) {
    $rootScope.$state = $state;
    /* Listening to state changes to decide if the user is authorized to see its template */
    $rootScope.$on('$stateChangeStart', function(evt, toState, toParams, fromState, fromParams) {
        /* If the current state has a private module and the user is not logged in, return to the login */
        if (toState.module === 'private' && !authService.isLoggedIn()) {
            evt.preventDefault();
            toastr.error('Debes iniciar sesión primero', 'Error');
            $state.go('login');
        }

        /* Avoiding a logged user from returning to the login form */
        if (toState.name === 'login' && authService.isLoggedIn()) {
            evt.preventDefault();
            $state.go('profile');
        }
    });
  }

})();

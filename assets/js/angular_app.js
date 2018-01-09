(function() {

  'use strict';

  angular
    .module('goForeignerApp', [
      'angular-media-preview',
      'file-model',
      'ngAnimate',
      'ngMap',
      'ngMapAutocomplete',
      'toastr',
      'ui.router',
      'mainCtrl',
      'indexCtrl',
      'loginCtrl',
      'registerCtrl',
      'navCtrl',
      'exploreCtrl',
      'savedCtrl',
      'profileCtrl',
      'editProfileCtrl',
      'helpCtrl',
      'myPostsCtrl',
      'notificationsCtrl',
      'newPostCtrl',
      'postsCtrl',
      'postCtrl',
      'payCtrl',
      'scoreHomeCtrl',
      'planAdvertisingCtrl',
      'termsCtrl',
      'contactCtrl',
      'reportsCtrl',
      'resultsCtrl',
      'authSrvc',
      'pageTitleDir',
      'navBarDir'
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
        target: 'ui-view',
        timeOut: 2500,
        extendedTimeOut: 1000
      }
    );

    /* Creating states */
    var indexState = {
      name: 'index',
      url: '/',
      controller: 'LoginCtrl',
      controllerAs: 'login',
      templateUrl: 'js/templates/login.html',
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

    var appState = {
        name: 'app',
        url: '/app',
        controller: 'NavigationCtrl',
        controllerAs: 'navigation',
        templateUrl: 'js/templates/navigation.html',
        module: 'private'
    }

    var exploreState = {
      name: 'app.explore',
      url: '/explore',
      parent: 'app',
      controller: 'ExploreCtrl',
      controllerAs: 'explore',
      templateUrl: 'js/templates/explore.html',
      module: 'private',
      data: {
        'pageTitle': 'Explorar'
      }
    }

    var savedState = {
      name: 'app.saved',
      url: '/saved',
      parent: 'app',
      controller: 'SavedCtrl',
      controllerAs: 'saved',
      templateUrl: 'js/templates/saved.html',
      module: 'private',
      data: {
        'pageTitle': 'Guardados'
      }
    }

    var profileState = {
      name: 'app.profile',
      url: '/profile',
      parent: 'app',
      controller: 'ProfileCtrl',
      controllerAs: 'profile',
      templateUrl: 'js/templates/profile.html',
      module: 'private',
      data: {
        'pageTitle': 'Perfil'
      }
    }

    var editProfileState = {
      name: 'app.editprofile',
      url: '/editprofile',
      parent: 'app',
      controller: 'EditProfileCtrl',
      controllerAs: 'editprofile',
      templateUrl: 'js/templates/edit_profile.html',
      module: 'private',
      data: {
        'pageTitle': 'Editar perfil'
      }
    }

    var offerState = {
      name: 'app.offer',
      url: '/offer',
      parent: 'app',
      controller: 'EditProfileCtrl',
      controllerAs: 'editProfile',
      templateUrl: 'js/templates/offerGuests.html',
      module: 'private',
      data: {
        'pageTitle': 'Ofrecer a Huéspedes'
      }
    }

    var helpState = {
      name: 'app.help',
      url: '/help',
      parent: 'app',
      controller: 'HelpCtrl',
      controllerAs: 'help',
      templateUrl: 'js/templates/help.html',
      module: 'private',
      data: {
        'pageTitle': 'Ayuda'
      }
    }

    var myPostsState = {
      name: 'app.myposts',
      url: '/myposts',
      parent: 'app',
      controller: 'MyPostsCtrl',
      controllerAs: 'myposts',
      templateUrl: 'js/templates/my_posts.html',
      module: 'private',
      data: {
        'pageTitle': 'Mis publicaciones'
      }
    }

    var notificationsState = {
      name: 'app.notifications',
      url: '/notifications',
      parent: 'app',
      controller: 'NotificationsCtrl',
      controllerAs: 'notifications',
      templateUrl: 'js/templates/notifications.html',
      module: 'private',
      data: {
        'pageTitle': 'Notificaciones'
      }
    }

    var newPostState = {
      name: 'app.newpost',
      url: '/newpost',
      parent: 'app',
      controller: 'NewPostCtrl',
      controllerAs: 'newpost',
      templateUrl: 'js/templates/new_post.html',
      module: 'private',
      data: {
        'pageTitle': 'Nueva publicación'
      }
    }

    var postsState = {
      name: 'app.posts',
      url: '/posts',
      parent: 'app',
      controller: 'PostsCtrl',
      controllerAs: 'posts',
      templateUrl: 'js/templates/posts.html',
      module: 'private',
      data: {
        'pageTitle': 'Publicaciones'
      }
    }

    var postState = {
      name: 'app.post',
      url: '/post/{id}',
      parent: 'app',
      controller: 'PostCtrl',
      controllerAs: 'post',
      templateUrl: 'js/templates/post.html',
      module: 'private',
      data: {
        'pageTitle': 'Publicación'
      }
    }

    var termsState = {
      name: 'app.terms',
      url: '/terms',
      parent: 'app',
      controller: 'TermsCtrl',
      controllerAs: 'terms',
      templateUrl: 'js/templates/terms.html',
      module: 'private',
      data: {
        'pageTitle': 'Términos y Condiciones'
      }
    }

    var contactState = {
      name: 'app.contact',
      url: '/contact',
      parent: 'app',
      controller: 'ContactCtrl',
      controllerAs: 'contact',
      templateUrl: 'js/templates/contact.html',
      module: 'private',
      data: {
        'pageTitle': 'Contacto'
      }
    }

    var payState = {
      name: 'app.pay',
      url: '/pay',
      parent: 'app',
      controller: 'PayCtrl',
      controllerAs: 'pay',
      templateUrl: 'js/templates/pay.html',
      module: 'private',
      data: {
        'pageTitle': 'Pago de Publicidad'
      }
    }

    var planAdvertisingState = {
      name: 'app.planAdvertising',
      url: '/planAdvertising/{id}',
      parent: 'app',
      controller: 'PlanAdvertisingCtrl',
      controllerAs: 'planAdvertising',
      templateUrl: 'js/templates/planAdvertising.html',
      module: 'private',
      data: {
        'pageTitle': 'Planes de Publicidad'
      }
    }

    var scoreHomeState = {
      name: 'app.scoreHome',
      url: '/scoreHome',
      parent: 'app',
      controller: 'ScoreHomeCtrl',
      controllerAs: 'scoreHome',
      templateUrl: 'js/templates/scoreHome.html',
      module: 'public',
      data: {
        'pageTitle': 'Calificar Estadía'
      }
    }

    var reportsState = {
      name: 'app.reports',
      url: '/reports',
      parent: 'app',
      controller: 'ReportsCtrl',
      controllerAs: 'reports',
      templateUrl: 'js/templates/reports.html',
      module: 'private',
      data: {
        'pageTitle': 'Publicaciones'
      }
    }

    // NOTE: Add ID after /results
    var resultsState = {
      name: 'app.results',
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
    $stateProvider.state(appState);
    $stateProvider.state(exploreState);
    $stateProvider.state(savedState);
    $stateProvider.state(profileState);
    $stateProvider.state(editProfileState);
    $stateProvider.state(offerState);
    $stateProvider.state(helpState);
    $stateProvider.state(myPostsState);
    $stateProvider.state(notificationsState);
    $stateProvider.state(newPostState);
    $stateProvider.state(postsState);
    $stateProvider.state(postState);
    $stateProvider.state(payState);
    $stateProvider.state(planAdvertisingState);
    $stateProvider.state(scoreHomeState);
    $stateProvider.state(termsState);
    $stateProvider.state(contactState);
    $stateProvider.state(reportsState);
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
            $state.go('app.explore');
        }
        if (toState.name === 'register' && authService.isLoggedIn()) {
            evt.preventDefault();
            $state.go('app.explore');
        }
        if (toState.name === 'index' && authService.isLoggedIn()) {
            evt.preventDefault();
            $state.go('app.explore');
        }
    });
  }

})();

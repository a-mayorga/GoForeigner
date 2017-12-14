(function() {

    'use strict';

    angular
        .module('goForeignerApp', [
            'ui.router',
            'mainCtrl',
            'indexCtrl',
            'pageTitleDir'
        ])
        .config(appConfig);

    /* Injecting dependencies to the config */
    appConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
    // appRun.$inject = ['$rootScope', '$state', 'authService', 'toastr'];

    function appConfig($stateProvider, $urlRouterProvider, $locationProvider) {
        /* Creating states */
        var indexState = {
            name: 'index',
            url: '/',
            controller: 'IndexCtrl',
            controllerAs: 'index',
            templateUrl: 'js/templates/index.html',
            module: 'public',
            data: {
                'pageTitle': 'GoForeigner'
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
        $stateProvider.state(notFoundState);

        /* Defining redirection state when the route on the address bar doesn't match any state */
        $urlRouterProvider.otherwise('404');

        /* Disabling # notation on the address bar */
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });

    }

    // function appRun($rootScope, $state, authService, toastr) {
    //     /* Listening to state changes to decide if the user is authorized to see its template */
    //     $rootScope.$on('$stateChangeStart', function(evt, toState, toParams, fromState, fromParams) {
    //         /* If the current state has a private module and the user is not logged in, return to the login */
    //         if (toState.module === 'private' && !authService.isLoggedIn()) {
    //             evt.preventDefault();
    //             toastr.error('Debes iniciar sesión primero', 'Error');
    //             $state.go('login');
    //         }
    //
    //         /* Avoiding a logged user from returning to the login form */
    //         if (toState.name === 'login' && authService.isLoggedIn()) {
    //             evt.preventDefault();
    //             $state.go('app.home');
    //         }
    //     });
    // }

})();

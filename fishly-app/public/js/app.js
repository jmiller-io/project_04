(function() {
  'use strict';
  angular.module('Fishly', ['ui.router', 'satellizer'])
    .config(MainRouter)
    .config(function($authProvider) {
      $authProvider.google({
        clientId: '438732225145-6sqpghdlgqcdtra6gjl0u3rorhgkjsbl.apps.googleusercontent.com'
      })
    })

    MainRouter.$inject = ['$stateProvider', '$urlRouterProvider'];
    function MainRouter($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'home.html'
        })
        .state('about', {
          url: '/about',
          templateUrl: 'about.html'
        })
        $urlRouterProvider.otherwise('/');
    }



}());

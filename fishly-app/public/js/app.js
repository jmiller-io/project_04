(function() {
  'use strict';
  angular.module('Fishly', ['ui.router', 'satellizer'])
    .config(MainRouter);

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

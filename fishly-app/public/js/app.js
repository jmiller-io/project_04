(function() {
  'use strict';
  angular.module('Fishly', ['ui.router', 'satellizer'])
    .config(MainRouter)
    .config(function($authProvider) {
      $authProvider.loginUrl = 'http://localhost:3000/auth/login';
      $authProvider.signupUrl = 'http://localhost:3000/auth/signup';
      $authProvider.google({clientId: '438732225145-6sqpghdlgqcdtra6gjl0u3rorhgkjsbl.apps.googleusercontent.com'})
      // $authProvider.oauth2({
      //   name: 'fishly',
      //   url: '/auth/fishly',
      //   redirectUri: window.location.origin,
      //   clientId: '438732225145-6sqpghdlgqcdtra6gjl0u3rorhgkjsbl.apps.googleusercontent.com',
      //   requiredUrlParams: ['scope'],
      //   scope: ['profile'],
      //   scopePrefix: 'openid',
      //   scopeDelimiter: ' ',
      //   display: 'popup',
      //   popupOptions: { width: 452, height: 633 }
      //   authorizationEndpoint: 'https://accounts.google.com/o/oauth2/v2/auth'
      // });
      $authProvider.google({
        url: '/auth/google',
        authorizationEndpoint: 'https://accounts.google.com/o/oauth2/auth',
        redirectUri: window.location.origin || window.location.protocol + '//' + window.location.host,
        scope: ['profile', 'email'],
        scopePrefix: 'openid',
        scopeDelimiter: ' ',
        requiredUrlParams: ['scope'],
        optionalUrlParams: ['display'],
        display: 'popup',
        type: '2.0',
        popupOptions: { width: 580, height: 400 }
      });
    })

    MainRouter.$inject = ['$stateProvider', '$urlRouterProvider'];
    function MainRouter($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'home.html'
        })
        .state('login', {
          url: '/login',
          templateUrl: 'login.html'
        })
        .state('about', {
          url: '/about',
          templateUrl: 'about.html'
        })
        .state('lakes', {
          url: '/lakes',
          templateUrl: 'lakes.html'
        })
        $urlRouterProvider.otherwise('/');
    }



}());

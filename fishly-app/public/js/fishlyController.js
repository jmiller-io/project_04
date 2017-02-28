angular.module('Fishly')
  .controller('FishlyController', FishlyController)
  .controller('LoginCtrl', function($scope, $auth) {
    $scope.authenticate = function(provider) {
      $auth.authenticate(provider);
    };
  })
  .controller('LoginCtrl', function($scope, $auth) {
    $scope.authenticate = function(provider) {
      $auth.authenticate(provider);
    };

    $scope.isAuthenticated = function() {
      return $auth.isAuthenticated();
    };
  })

  FishlyController.$inject = ['$http'];

function FishlyController($http) {

}

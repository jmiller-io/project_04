angular.module('Fishly')
  .controller('FishlyController', FishlyController)
  .controller('LoginCtrl', function($scope, $auth) {
    $scope.authenticate = function(provider) {
      $auth.authenticate(provider);
    };
  })

  FishlyController.$inject = ['$http'];

function FishlyController($http) {

}

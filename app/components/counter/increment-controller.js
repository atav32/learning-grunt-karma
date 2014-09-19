angular.module('myApp', [])
.controller('IncrementController', ['$scope', function($scope) { 
  $scope.count = 0;

  $scope.increment = function() {
    $scope.count++;
  }
}]);

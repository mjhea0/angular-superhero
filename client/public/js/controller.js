angular.module("myApp").controller("addSuperheroController", ["$scope", "$http",
  function($scope, $http) {

  $scope.superheros = [
    {name: 'batman'},
    {name: 'superman'},
    {name: 'ironman'}
  ];

  $scope.addSuperhero = function() {
    var payload = {
      name: $scope.newSuperhero.name
    };
    $http.post('/api/v1/superheros', payload)
      .success(function(data) {
      console.log(data);
    });
  };

}]);

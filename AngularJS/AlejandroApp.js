var app = angular.module("AlejandroApp", []);
app.controller("CountryList", function($scope, $http) {

  $scope.totalDisplayed = 5;

  $scope.loadMore = function() {
    $scope.totalDisplayed += 20;
  };

  $scope.removeItem = function(Countrycode) {
    $scope.item = $scope.records.find( country => country.code === Countrycode );
		$scope.records.splice($scope.records.indexOf($scope.item), 1);
  };

  $scope.loadData = function() {
    $http({
      method: 'GET',
      url: 'https://api.myjson.com/bins/16i597'

    }).success(function(data, status) {
      $scope.records = data;
      $scope.removeItem('AL'); //Removing United Kingdom from the list "no fly list" 
    });
  };
});

var apartApp = angular.module('zyringApp')

apartApp.factory("City", function($resource) {
    return $resource("/cities/:cityName");
  });

apartApp.controller('CityCtrl',
      ['$scope','City', function($scope, City) {
        $scope.allCities = City.query();
    }];




/*app.factory("City", function($resource) {
    return $resource("/apartments/:cityName");
  });

app.factory('City', ['$http', function($http){
				return $http.get('http://spidey.zyring.com/cities/seattle')
						.success(function(data){
								return data;
						})
						.error(function(err){
							return err;
						});
}]);*/

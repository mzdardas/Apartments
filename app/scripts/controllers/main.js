'use strict';

/**
 * @ngdoc function
 * @name zyringApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the zyringApp
 */
angular.module('zyringApp')
  .controller('MainCtrl', function ($scope) {
    $scope.apartments = [
      {city: 'Seattle',
       image: 'images/Seattle.jpg'},
      {city: 'Redmond',
       image: 'images/Redmond.jpg'},
      {city: 'Dinand',
       image: 'images/Dinand_Night.jpg'},
      {city: 'Bellevue',
       image: 'images/Bellevue.jpg'},
      {city: 'Kirkland',
       image: 'images/Kirkland.jpg'},
      {city: 'Tacoma',
       image: 'images/Tacoma.jpg'},
      {city: 'Olympia',
       image: 'images/Olympia.jpg'}
    ];

  });

angular.module('zyringApp')
  .controller( 'ApartmentCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams){
                    //if we go to url /apartments/seattle,
                    //cityName will contain the value seattle
                    $scope.city_Name = $routeParams.cityName;
  }]);


var apartApp = angular.module('zyringApp')

/*apartApp.factory("City", function($resource) {
      return $resource("/http://spidey.zyring.com/cities/:cityName");
    });


apartApp.controller('CityCtrl',
          ['$scope','City', function($scope, City) {
            $scope.allCities = City.query();
        }];
*/

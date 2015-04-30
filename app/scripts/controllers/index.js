'use strict';

/**
 * @ngdoc function
 * @name zyringApp.controller:AboutCtrl
 * @description
 * # IndexCtrl
 * Controller of the zyringApp
 */
var myApp = angular.module('myApp');

myApp.controller('',['$scope', function($scope){
    $scope.userCount = 100;
}]);

myApp.controller('ProfileCtrl', ['$scope', function($scope){
  $scope.name = 'Ali';
}]);

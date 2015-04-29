'use strict';

/**
 * @ngdoc function
 * @name bagOFoodApp.controller:FoodlistCtrl
 * @description
 * # FoodlistCtrl
 * Controller of the bagOFoodApp
 */
angular.module('bagOFoodApp')
  .controller('FoodlistCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

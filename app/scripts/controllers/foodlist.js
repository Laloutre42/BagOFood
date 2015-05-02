'use strict';

/**
 * @ngdoc function
 * @name bagOFoodApp.controller:FoodlistCtrl
 * @description
 * # FoodlistCtrl
 * Controller of the bagOFoodApp
 */
angular.module('bagOFoodApp')
  .controller('FoodlistCtrl', function ($scope, $route, FoodListService) {

    if ($route.current.listData === 'allFoodList') {
      FoodListService.query().$promise.then(function (foodListList) {
        $scope.foodListList = foodListList;
      });
    }
    if ($route.current.listData === 'myFoodList') {

      FoodListService.getFoodListByAuthorUserName({userName: 'Arnaud'}).$promise.then(function (foodListList) {
        $scope.foodListList = foodListList;
      });
    }

  });

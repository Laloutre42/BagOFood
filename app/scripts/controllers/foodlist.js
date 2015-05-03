'use strict';

/**
 * @ngdoc function
 * @name bagOFoodApp.controller:FoodlistCtrl
 * @description
 * # FoodlistCtrl
 * Controller of the bagOFoodApp
 */
angular.module('bagOFoodApp')
  .controller('FoodlistCtrl', function ($scope, $route, $modal, FoodListService) {

    if ($route.current.listData === 'allFoodList') {
      FoodListService.query().$promise.then(function (foodListList) {
        $scope.foodListList = foodListList;
      });
    }
    if ($route.current.listData === 'myFoodList') {

      FoodListService.getFoodListByUserId({userId: 2}).$promise.then(function (foodListList) {
        $scope.foodListList = foodListList;
      });
    }

    // Open a modal to add a new food list
    $scope.addNewFoodList = function (foodList) {
      var modalInstance = $modal.open({
        animation: true,
        templateUrl: 'views/modal/addnewfoodlist.html',
        controller: 'AddnewfoodlistCtrl',
        size: 'lg',
        resolve: {
          foodList: function () {
            return foodList;
          }
        }
      });
    }

  });

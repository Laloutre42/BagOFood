'use strict';


angular.module('bagofood.sections.item.add.controller', ['bagofood.core.service.foodlist'])
  .controller('AddItemController', function ($scope, $stateParams, $previousState, CONST, FoodListService) {

    $scope.item = angular.copy($stateParams.item) || {category: CONST.itemCategories[0]};
    $scope.categories = CONST.itemCategories;

    // Valid form
    $scope.ok = function () {
      // save or update
      if (typeof $scope.item.id === 'undefined') {
        FoodListService.addItemOnFoodList({'id': $stateParams.foodListId}, $scope.item).$promise.then(
          function (data) {
            $scope.back();
          });
      }
      else {
        FoodListService.updateItemOnFoodList({'id': $stateParams.foodListId, 'itemId': $scope.item.id}, $scope.item).$promise.then(
          function (data) {
            $scope.back();
          });
      }
    };

    // Cancel form
    $scope.back = function () {
      $previousState.go();
    };
  });

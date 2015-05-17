'use strict';


angular.module('bagofood.sections.item.add.controller', ['bagofood.core.service.foodlist'])
  .controller('AddItemController', function ($scope, $modalInstance, CONST, FoodListService, item, foodListId) {

    $scope.item = angular.copy(item) || { category: CONST.itemCategories[0]};
    $scope.categories = CONST.itemCategories;

    // Valid modal
    $scope.ok = function () {
      // save or update
      if (typeof $scope.item.id === 'undefined') {
        FoodListService.addItemOnFoodList({'id': foodListId}, $scope.item).$promise.then($modalInstance.close);
      }
      else {
        FoodListService.updateItemOnFoodList({'id': foodListId, 'itemId': $scope.item.id}, $scope.item).$promise.then($modalInstance.close);
      }
    };

    // Cancel modal
    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  });

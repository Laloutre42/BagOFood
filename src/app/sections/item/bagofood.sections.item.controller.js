'use strict';

angular.module('bagofood.sections.item.controller', ['bagofood.sections.item.add.controller'])
  .controller('ItemListController', function ($scope, $log, $stateParams, $state, FoodListService) {

    getItemList();

    // Open a form to add a new item on food list
    $scope.addItem = function (item) {
      $state.go('main.addItem', {item: item, foodListId: $stateParams.foodListId});
    };

    $scope.removeItem = function (item) {
      FoodListService.deleteItemOnFoodList({'id': $stateParams.foodListId, 'itemId': item.id}).$promise.then(getItemList);
    };

    function getItemList() {

      FoodListService.getFoodListItemsById({'id': $stateParams.foodListId}).$promise.then(function (itemList) {
        $scope.itemList = itemList;
        $log.debug('[getItemList] length is ', $scope.itemList.length)
      });
    }

  });

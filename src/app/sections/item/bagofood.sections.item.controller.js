'use strict';

angular.module('bagofood.sections.item.controller', ['bagofood.sections.item.add.controller'])
  .controller('ItemListController', function ($scope, $log, $modal, $stateParams, FoodListService) {

    getItemList();

    // Open a modal to add a new item on food list
    $scope.addItem = function (item) {

      var modalInstance = $modal.open({
        animation: true,
        templateUrl: 'app/sections/item/modal/item.add.html',
        controller: 'AddItemController',
        size: 'lg',
        resolve: {
          item: function () {
            return item;
          },
          foodListId: function () {
            return $stateParams.foodlistId;
          }
        }
      });

      modalInstance.result.then(getItemList);

    };

    $scope.removeItem = function (item) {
      FoodListService.deleteItemOnFoodList({'id': $stateParams.foodlistId, 'itemId': item.id}).$promise.then(getItemList);
    };

    function getItemList() {

      FoodListService.getFoodListItemsById({'id': $stateParams.foodlistId}).$promise.then(function (itemList) {
        $scope.itemList = itemList;
        $log.debug('[getItemList] length is ', $scope.itemList.length)
      });

    }


  });

'use strict';

angular.module('bagofood.sections.item.controller', ['bagofood.sections.item.add.controller'])
  .controller('ItemListController', function ($scope, $log, $stateParams, $state, ngTableParams, FoodListService) {

    /**
     * Ng table to display items
     * @type {ngTableParams}
     */
    $scope.itemTable = new ngTableParams({
      page: 1,
      count: 10
    }, {
      total: 0,
      getData: function ($defer, params) {
        getItemList($defer, params);
      }
    });

    // Open a form to add a new item on food list
    $scope.addItem = function (item) {
      $state.go('main.addItem', {item: item, foodListId: $stateParams.foodListId});
    };

    $scope.removeItem = function (item) {
      FoodListService.deleteItemOnFoodList({'id': $stateParams.foodListId, 'itemId': item.id}).$promise.then(getItemList);
    };

    function getItemList($defer, params) {

      FoodListService.getFoodListItemsById({'id': $stateParams.foodListId}).$promise.then(function (data) {
        $log.debug('[getItemList] length is ', data.length);
        $defer.resolve(data.slice((params.page() - 1) * params.count(), params.page() * params.count()));
        params.total(data.length);
      });
    }

  });

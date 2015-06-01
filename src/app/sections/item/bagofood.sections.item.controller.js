'use strict';

angular.module('bagofood.sections.item.controller', ['bagofood.sections.item.add.controller'])
  .controller('ItemListController', function ($log, $filter, $stateParams, $state, ngTableParams, FoodListService) {

    var vm = this;
    vm.foodList = $stateParams.foodList;
    vm.addItem = addItem;
    vm.removeItem = removeItem;

    // ng table to display data
    vm.itemTable = new ngTableParams({
      page: 1,
      count: 10
    }, {
      total: 0,
      getData: function ($defer, params) {
        getItemList($defer, params);
      }
    });

    // Open a form to add a new item on food list
    function addItem(item) {
      $state.go('main.addItem', {item: item, foodListId: $stateParams.foodListId});
    };

    function removeItem(item) {
      FoodListService.deleteItemOnFoodList({'id': $stateParams.foodListId, 'itemId': item.id}).$promise.then(function () {
        $scope.itemTable.reload();
      });
    };

    function getItemList($defer, params) {

      FoodListService.getFoodListItemsById({'id': $stateParams.foodListId}).$promise.then(function (data) {
        $log.debug('[getItemList] length is ', data.length);

        var orderedData = params.sorting() ? $filter('orderBy')(data, vm.itemTable.orderBy()) : data;
        $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
        params.total(orderedData.length);
      });
    }

  });

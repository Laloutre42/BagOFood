'use strict';

angular.module('bagofood.sections.item.controller',
  [
    'bagofood.sections.item.add.controller',
    'bagofood.sections.item.description.controller',
    'bagofood.sections.item.statistics-table.controller',
    'bagofood.sections.item.statistics-chart-histo.controller',
    'bagofood.sections.item.statistics-chart-pie.controller'
  ])
  .controller('ItemsListController', function ($log, $filter, $stateParams, $state, ngTableParams, FoodListService, ProductModalDetailsService) {

    var vm = this;
    vm.radioViewTypeSelection = 0;
    vm.foodList = {};
    vm.addItem = addItem;
    vm.removeItem = removeItem;
    vm.searchProductByIdAndOpenModalForDetailProduct = ProductModalDetailsService.searchProductByIdAndOpenModalForDetailProduct;

    // ng table to display data
    vm.itemTable = new ngTableParams({
      page: 1,
      count: 10
    }, {
      total: 0,
      getData: function ($defer, params) {
        getItemsList($defer, params);
      }
    });

    // Open a form to add a new item on food list
    function addItem(item) {
      $state.go('main.addItem', {item: item, foodListId: $stateParams.foodListId});
    };

    function removeItem(item) {
      FoodListService.deleteItemOnFoodList({'id': $stateParams.foodListId, 'itemId': item.id}).$promise.then(function () {
        vm.itemTable.reload();
      });
    };

    function getItemsList($defer, params) {

      FoodListService.get({'id': $stateParams.foodListId}).$promise.then(function (data) {
        vm.foodList = data;
        $log.debug('[getItemsList] length is ', vm.foodList.itemList.length);

        var orderedData = params.sorting() ? $filter('orderBy')(vm.foodList.itemList, vm.itemTable.orderBy()) : vm.foodList.itemList;
        $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
        params.total(orderedData.length);

        //Now go to description by default
        $state.go('main.itemslist.description');
      });
    }

  });

(function () {
  'use strict';

  angular.module('bagofood.sections.item.description.controller', [])
    .controller('ItemsListDescriptionController', function ($log, $scope, $filter, $state, $stateParams, ngTableParams, ProductModalDetailsService, SessionService, FoodListService) {

      var vm = this;
      vm.foodList = $scope.$parent.vm.foodList;
      vm.radioViewTypeSelection = 0;
      vm.addItem = addItem;
      vm.removeItem = removeItem;
      vm.searchProductByIdAndOpenModalForDetailProduct = ProductModalDetailsService.searchProductByIdAndOpenModalForDetailProduct;
      vm.user = SessionService.getUser();

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
      }

      function removeItem(item) {
        FoodListService.deleteItemOnFoodList({'id': $stateParams.foodListId, 'itemId': item.id}).$promise.then(function () {
          vm.itemTable.reload();
        });
      }

      function getItemsList($defer, params) {

        if (typeof vm.foodList !== 'undefined' && typeof vm.foodList.itemList !== 'undefined') {
          sortAndOrderItemList($defer, params);
        }
        else {
          FoodListService.get({'id': $stateParams.foodListId}).$promise.then(function (data) {
            vm.foodList = data;
            sortAndOrderItemList($defer, params);
          });
        }
      }

      function sortAndOrderItemList($defer, params) {
        $log.debug('[getItemsList] length is ', vm.foodList.itemList.length);
        var orderedData = params.sorting() ? $filter('orderBy')(vm.foodList.itemList, vm.itemTable.orderBy()) : vm.foodList.itemList;
        $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
        params.total(orderedData.length);
      };

    });
})();

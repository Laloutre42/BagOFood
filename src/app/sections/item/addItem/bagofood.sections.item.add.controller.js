'use strict';

angular.module('bagofood.sections.item.add.controller', ['bagofood.core.service.foodlist', 'bagofood.sections.item.product.detail.controller'])
  .controller('AddItemController', function ($stateParams, $modal, $log, $previousState, ngTableParams, ProductService, CONST, FoodListService, ProductModalDetailsService, $scope) {

    var vm = this;
    vm.item = angular.copy($stateParams.item) || {category: CONST.itemCategories[0], catalog: 'Ciqual 2012'};
    vm.categories = CONST.itemCategories;
    vm.seeAllDetails = false;
    vm.totalProductsFound = -1;
    vm.ok = ok;
    vm.back = back;
    vm.selectProduct = selectProduct;
    vm.reloadTable = reloadTable;
    vm.openModalForDetailProduct = ProductModalDetailsService.openModalForDetailProduct;
    vm.productToSearch = '';

    vm.productTable = new ngTableParams({
      page: 1,
      count: 5
    }, {
      total: 0,
      counts: [5, 10, 15],
      getData: function ($defer, params) {
        searchProductCiqual2012($defer, params);
      }
    });

    // Valid form
    function ok() {

      // save or update
      if (typeof vm.item.id === 'undefined') {
        FoodListService.addItemOnFoodList({'id': $stateParams.foodListId}, vm.item).$promise.then(
          function (data) {
            vm.back();
          });
      }
      else {
        FoodListService.updateItemOnFoodList({'id': $stateParams.foodListId, 'itemId': vm.item.id}, vm.item).$promise.then(
          function (data) {
            vm.back();
          });
      }
    };

    // Cancel form
    function back() {
      $previousState.go();
    };

    /**
     * Search product in Ciqual 2012 database
     */
    function searchProductCiqual2012($defer, params) {

      // No search if search field is null
      if (vm.productToSearch) {

        ProductService.getFoodListByOrigfdnm({'origfdnm': vm.productToSearch}).$promise.then(function (data) {
          $log.debug('[searchProductCiqual2012] length is ', data.length);
          params.total(data.length);
          vm.totalProductsFound = data.length;
          $defer.resolve(data.slice((params.page() - 1) * params.count(), params.page() * params.count()));
        });
      }
    };

    function reloadTable() {
      $log.info('reload table');
      if (vm.productCiqual2012) {
        vm.productToSearch = vm.productCiqual2012;
        vm.productTable.page(1);
        vm.productTable.reload();
      }
    }

    /**
     * Select a product
     * @param product
     */
    function selectProduct(product) {
      if (typeof product != 'undefined') {
        vm.item.name = product.origfdnm;
        vm.item.energyFor100 = product.energie_reglement_ue_1169_2011_kcal_100g;
        vm.item.productId = product.id
      }
    }

    /**
     * Change catalog watcher
     */
    $scope.$watch("vm.item.catalog", function (newValue, oldValue) {
      if (oldValue === CONST.catalog.CUSTOM && newValue === CONST.catalog.CIQUAL_2012) {
        vm.item.name = '';
        vm.item.energyFor100 = '';
      }
      if (newValue === CONST.catalog.CUSTOM) {
        vm.item.productId = null;
      }
    });

  });

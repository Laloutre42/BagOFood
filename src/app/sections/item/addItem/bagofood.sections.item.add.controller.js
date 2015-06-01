'use strict';

angular.module('bagofood.sections.item.add.controller', ['bagofood.core.service.foodlist', 'bagofood.sections.item.product.detail.controller'])
  .controller('AddItemController', function ($stateParams, $modal, $log, $previousState, ngTableParams, ProductService, CONST, FoodListService) {

    var vm = this;
    vm.item = angular.copy($stateParams.item) || {category: CONST.itemCategories[0], catalog: 'Ciqual 2012'};
    vm.categories = CONST.itemCategories;
    vm.seeAllDetails = false;
    vm.totalProductsFound = -1;
    vm.ok = ok;
    vm.back = back;
    vm.openModalForDetailProduct = openModalForDetailProduct;

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
      if (vm.productCiqual2012) {

        ProductService.getFoodListByOrigfdnm({'origfdnm': vm.productCiqual2012}).$promise.then(function (data) {
          $log.debug('[searchProductCiqual2012] length is ', data.length);
          $defer.resolve(data.slice((params.page() - 1) * params.count(), params.page() * params.count()));
          params.total(data.length);
          vm.totalProductsFound = data.length;
        });
      }
    };

    /**
     * Open a modal to see details for a product
     */
    function openModalForDetailProduct(product) {

      var modalInstance = $modal.open({
        animation: true,
        templateUrl: 'app/sections/item/addItem/modal/product.detail.html',
        controller: 'ItemProductDetailController',
        size: 'lg',
        resolve: {
          product: function () {
            return product;
          }
        }
      });

      modalInstance.result.then(function (product){

        if (typeof product != 'undefined'){

          vm.item.name = product.origfdnm;
          vm.item.energyFor100 = product.energie_reglement_ue_1169_2011_kcal_100g;
        }
      });
    };

  });

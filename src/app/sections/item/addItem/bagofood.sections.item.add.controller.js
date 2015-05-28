'use strict';

angular.module('bagofood.sections.item.add.controller', ['bagofood.core.service.foodlist', 'bagofood.sections.item.product.detail.controller'])
  .controller('AddItemController', function ($scope, $stateParams, $modal, $log, $previousState, ngTableParams, ProductService, CONST, FoodListService) {

    $scope.item = angular.copy($stateParams.item) || {category: CONST.itemCategories[0]};
    $scope.categories = CONST.itemCategories;
    $scope.seeAllDetails = false;
    $scope.totalProductsFound = -1;

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

    /**
     * Ng table to display product
     * @type {ngTableParams}
     */
    $scope.productTable = new ngTableParams({
      page: 1,
      count: 10
    }, {
      total: 0,
      getData: function ($defer, params) {
        $scope.searchProductCiqual2012($defer, params);
      }
    });

    /**
     * Search product in Ciqual 2012 database
     */
    $scope.searchProductCiqual2012 = function ($defer, params) {

      // No search if search field is null
      if ($scope.productCiqual2012) {

        ProductService.getFoodListByOrigfdnm({'origfdnm': $scope.productCiqual2012}).$promise.then(function (data) {
          $log.debug('[searchProductCiqual2012] length is ', data.length);
          $defer.resolve(data.slice((params.page() - 1) * params.count(), params.page() * params.count()));
          params.total(data.length);
          $scope.totalProductsFound = data.length;
        });
      }
    };

    /**
     * Open a modal to see details for a product
     */
    $scope.openModalForDetailProduct = function (product) {

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

          $scope.item.name = product.origfdnm;
          $scope.item.energyFor100 = product.energie_reglement_ue_1169_2011_kcal_100g;
        }
      });
    };

  });

'use strict';

angular.module('bagofood.sections.product.controller', ['ngTable', 'bagofood.core.service.product', 'bagofood.sections.product.detail.controller'])
  .controller('ProductController', function ($scope, $modal, $log, ProductService, ngTableParams) {

    $scope.seeAllDetails = false;
    $scope.totalProductsFound = -1;

    /**
     * Ng table for result
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
        templateUrl: 'app/sections/product/modal/product.detail.html',
        controller: 'ProductDetailController',
        size: 'lg',
        resolve: {
          product: function () {
            return product;
          }
        }
      });
    };

  });

'use strict';

angular.module('bagofood.sections.product.controller', ['bagofood.core.service.product', 'bagofood.sections.product.detail.controller'])
  .controller('ProductController', function ($scope, $modal, $log, ProductService) {

    $scope.seeAllDetails = false;

    $scope.filteredProductCiqual2012Results = [];

    /**
     * Search product in Ciqual 2012 database
     */
    $scope.searchProductCiqual2012 = function () {

      // No search if search field is null
      if ($scope.productCiqual2012) {

        $scope.filteredProductCiqual2012Results = [];

        ProductService.query().$promise.then(function (result) {
          $scope.filteredProductCiqual2012Results = result;
          $log.debug('[searchProductCiqual2012] length is ', $scope.filteredProductCiqual2012Results.length)
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

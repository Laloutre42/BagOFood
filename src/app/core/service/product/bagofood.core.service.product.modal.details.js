(function() {
  'use strict';

angular.module('bagofood.core.service.product.modal.details', [])
  .service('ProductModalDetailsService', function ($modal, $log, ProductService) {

    var self = this;
    this.openModalForDetailProduct = openModalForDetailProduct;
    this.searchProductByIdAndOpenModalForDetailProduct = searchProductByIdAndOpenModalForDetailProduct;

    var ProductModalDetailsService = {
      openModalForDetailProduct: openModalForDetailProduct,
      searchProductByIdAndOpenModalForDetailProduct: searchProductByIdAndOpenModalForDetailProduct
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
    }

    /**
     * Search a product by product Id and open modal to see details if it exists
     * @param productId
     */
    function searchProductByIdAndOpenModalForDetailProduct(productId) {

      if (productId !== null && typeof productId !== 'undefined' && productId !== '') {
        ProductService.get({id: productId}).$promise.then(
          function (data) {
            self.openModalForDetailProduct(data);
          },
          function (reason) {
            $log.error('Error searchProductByIdAndOpenModalForDetailProduct: ', reason);
          })
      }
    }

    return ProductModalDetailsService;
  });
})();
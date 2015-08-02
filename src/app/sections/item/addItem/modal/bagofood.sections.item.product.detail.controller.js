(function() {
  'use strict';


angular.module('bagofood.sections.item.product.detail.controller', [])
  .controller('ItemProductDetailController', function ($scope, $modalInstance, product) {

    $scope.product = product;

    // Cancel modal
    $scope.close = function () {
      $modalInstance.close();
    };

  });
})();

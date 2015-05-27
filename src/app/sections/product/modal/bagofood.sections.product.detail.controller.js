'use strict';


angular.module('bagofood.sections.product.detail.controller', [])
  .controller('ProductDetailController', function ($scope, $modalInstance, product) {

    $scope.product = product;

    // Cancel modal
    $scope.close = function () {
      $modalInstance.close();
    };
  });

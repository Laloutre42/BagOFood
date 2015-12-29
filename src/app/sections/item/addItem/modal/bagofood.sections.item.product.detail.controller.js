(function() {
  'use strict';


angular.module('bagofood.sections.item.product.detail.controller', [])
  .controller('ItemProductDetailController', function ($scope, $filter, $modalInstance, $log, ngTableParams, product) {

    $scope.product = product;

    // ng table to display data
    $scope.itemDetailTable = new ngTableParams({
      page: 1,
      count: 10
    }, {
      total: 0,
      getData: function ($defer, params) {
        $log.debug('aa');
        getItemDetails($defer, params);
      }
    });

    function getItemDetails($defer, params) {
      $log.debug('[getItemDetails] length is ', $scope.product.length);
      var orderedData = params.sorting() ? $filter('orderBy')($scope.product, $scope.itemDetailTable.orderBy()) : $scope.product;
      $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
      params.total(orderedData.length);
    };

    // Cancel modal
    $scope.close = function () {
      $modalInstance.close();
    };

  });
})();

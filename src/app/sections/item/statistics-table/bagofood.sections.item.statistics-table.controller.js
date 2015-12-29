(function () {
  'use strict';

  angular.module('bagofood.sections.item.statistics-table.controller', [])
    .controller('ItemsListStatisticsTableController', function ($log, $scope, $filter, ngTableParams, $stateParams, FoodListComputationService) {

      var vm = this;

      // ng table to display data
      vm.itemTable = new ngTableParams({
        page: 1,
        count: 10
      }, {
        total: 0,
        getData: function ($defer, params) {
          getStatisticsTableFromFoodListById($defer, params);
        }
      });

      function getStatisticsTableFromFoodListById($defer, params) {
        FoodListComputationService.getStatisticsTableFromFoodListById({'id': $stateParams.foodListId}).$promise.then(function (data) {
          vm.categoryDataInformations = data;
          sortAndOrderFoodListComputation($defer, params);
        });
      }

      function sortAndOrderFoodListComputation($defer, params) {
        $log.debug('[sortAndOrderFoodListComputation] length is ', vm.categoryDataInformations.length);
        var orderedData = params.sorting() ? $filter('orderBy')(vm.categoryDataInformations, vm.itemTable.orderBy()) : vm.categoryDataInformations;
        $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
        params.total(orderedData.length);
      };

    });
})();

(function () {
  'use strict';

  angular.module('bagofood.sections.foodlist.controller', ['bagofood.sections.foodlist.add.controller'])
    .controller('FoodListController', ['$log', '$filter', '$stateParams', '$state', 'ngTableParams', 'FoodListService', 'SessionService',
        function ($log, $filter, $stateParams, $state, ngTableParams, FoodListService, SessionService) {

      var vm = this;
      vm.removeFoodList = removeFoodList;
      vm.user = SessionService.getUser();

      // ng table to display data
      vm.foodlistTable = new ngTableParams({
        page: 1,
        count: 10
      }, {
        total: 0,
        getData: function ($defer, params) {
          getAllFoodList($defer, params);
        }
      });

      function removeFoodList(foodList) {
        FoodListService.delete({'id': foodList.id}).$promise.then(function () {
          vm.foodlistTable.reload();
        });
      }

      function getAllFoodList($defer, params) {

        var getFoodListParam;
        if ($stateParams.type === 'all') {
          getFoodListParam = FoodListService.query();
        }
        if ($stateParams.type === 'mine' && vm.user) {
          getFoodListParam = FoodListService.getFoodListByUserId({'userId': vm.user.id});
        }

        if (typeof getFoodListParam !== 'undefined') {
          getFoodListParam.$promise.then(function (data) {
            $log.debug('[getAllFoodList] length is ', data.length);

            var orderedData = params.sorting() ? $filter('orderBy')(data, vm.foodlistTable.orderBy()) : data;
            $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
            params.total(orderedData.length);
          });
        }
      }

    }]);
})();

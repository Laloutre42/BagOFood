<<<<<<< HEAD
(function () {
  'use strict';

  angular.module('bagofood.sections.item.statistics-table.controller', [])
    .controller('ItemsListStatisticsTableController', function ($log, $scope, CONST, ItemsService) {

      var vm = this;
      vm.foodList = $scope.$parent.vm.foodList;
      vm.totalObject = ItemsService.buildDataFromFoodList(vm.foodList);
      vm.categories = CONST.itemCategories;

    });
})();
=======
'use strict';

angular.module('bagofood.sections.item.statistics-table.controller', [])
  .controller('ItemsListStatisticsTableController', function ($log, $scope, CONST, ItemsService) {

    var vm = this;
    vm.foodList = $scope.$parent.vm.foodList;
    vm.totalObject = ItemsService.buildDataFromFoodList(vm.foodList);
    vm.categories = CONST.itemCategories;

  });
>>>>>>> 8faae942766808f1544e0d552197457ca274c18d

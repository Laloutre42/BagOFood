(function () {
  'use strict';

  angular.module('bagofood.sections.item.controller',
    [
      'bagofood.sections.item.add.controller',
      'bagofood.sections.item.description.controller',
      'bagofood.sections.item.statistics-table.controller',
      'bagofood.sections.item.statistics-chart-histo.controller',
      'bagofood.sections.item.statistics-chart-pie.controller'
    ])
    .controller('ItemsListController', function ($log, $stateParams, $state, FoodListService) {

      var vm = this;
      vm.foodList = {};

        FoodListService.get({'id': $stateParams.foodListId}).$promise.then(function (data) {
          vm.foodList = data;
          $log.debug('[getItemsList] length is ', vm.foodList.itemList.length);
          //Now go to description by default
          $state.go('main.itemslist.description');
        });

    });
})();

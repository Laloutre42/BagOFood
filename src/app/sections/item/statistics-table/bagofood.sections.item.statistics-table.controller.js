'use strict';

angular.module('bagofood.sections.item.statistics-table.controller', [])
  .controller('ItemsListStatisticsTableController', function ($stateParams) {

    var vm = this;
    vm.foodList = $stateParams.foodList;

  });

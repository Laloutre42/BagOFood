'use strict';

angular.module('bagofood.sections.item.statistics-chart-pie.controller', [])
  .controller('ItemsListStatisticsChartPieController', function ($stateParams) {

    var vm = this;
    vm.foodList = $stateParams.foodList;

  });

'use strict';

angular.module('bagofood.sections.item.statistics-chart-histo.controller', [])
  .controller('ItemsListStatisticsChartHistoController', function ($stateParams) {

    var vm = this;
    vm.foodList = $stateParams.foodList;

  });

'use strict';

angular.module('bagofood.sections.item.statistics-chart-histo.controller', [])
  .controller('ItemsListStatisticsChartHistoController', function ($log, $scope) {

    var vm = this;
    vm.foodList = $scope.$parent.vm.foodList;
  });

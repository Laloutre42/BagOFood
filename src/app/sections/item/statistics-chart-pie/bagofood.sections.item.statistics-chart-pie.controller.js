'use strict';

angular.module('bagofood.sections.item.statistics-chart-pie.controller', [])
  .controller('ItemsListStatisticsChartPieController', function ($log, $scope) {

    var vm = this;
    vm.foodList = $scope.$parent.vm.foodList;
  });

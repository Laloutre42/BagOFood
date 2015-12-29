(function () {
  'use strict';

  angular.module('bagofood.sections.item.statistics-chart-pie.controller', [])
    .controller('ItemsListStatisticsChartPieController', function ($log, $scope, $stateParams, FoodListComputationService) {

      var vm = this;
      FoodListComputationService.getStatisticsChartHistoFromFoodListById({'id': $stateParams.foodListId}).$promise.then(function (data) {

        // Graph Pie configuration
        vm.chartConfig = {

          options: {
            //This is the Main Highcharts chart config. Any Highchart options are valid here will be overriden by values specified below.
            chart: {
              backgroundColor: '#EBEBEB',
              plotBackgroundColor: null,
              plotBorderWidth: null,
              plotShadow: false
            },
            tooltip: {
              pointFormat: '{series.name}: {point.y} (<b>{point.percentage:.1f}%</b>)'
            }
          },

          //Series object (optional) - a list of series using normal highcharts series options.
          series: [
            {
              type: 'pie',
              name: 'Total weight (g)',
              center: ['25%', '50%'],
              showInLegend: true,
              data: []
            },
            {
              type: 'pie',
              name: 'Total energy (kcal)',
              center: ['75%', '50%'],
              showInLegend: false,
              data: []
            }
          ],
          title: {
            text: 'Total weight and Total energy'
          },
          legend: {
            enabled: true
          },
          plotOptions: {
            pie: {
              size: '100%',
              dataLabels: {
                enabled: false
              }
            }
          },
          //Whether to use HighStocks instead of HighCharts (optional). Defaults to false.
          useHighStocks: false,


          credits: {
            enabled: false
          }

        };

        vm.chartConfig.series[0].data = [];
        vm.chartConfig.series[1].data = [];

        data.category.forEach(function (element, index) {

          // Skip first element, category ALL
          if (index !== 0) {

            vm.chartConfig.series[0].data.push({
              name: element,
              y: data.totalWeight[index]
            });

            vm.chartConfig.series[1].data.push({
              name: element,
              y: data.totalEnergy[index]
            });
          }

        });

      });

    });
})();

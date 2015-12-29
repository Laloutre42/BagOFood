(function () {
  'use strict';

  angular.module('bagofood.sections.item.statistics-chart-histo.controller', [])
    .controller('ItemsListStatisticsChartHistoController', function ($log, $scope, $stateParams, FoodListComputationService) {

      var vm = this;

      FoodListComputationService.getStatisticsChartHistoFromFoodListById({'id': $stateParams.foodListId}).$promise.then(function (data) {

        // Graph histo configuration
        vm.chartConfig = {

          options: {
            //This is the Main Highcharts chart config. Any Highchart options are valid here will be overriden by values specified below.
            chart: {
              backgroundColor: '#EBEBEB',
              type: 'bar'
            },
            tooltip: {
              style: {
                padding: 10,
                fontWeight: 'bold'
              }
            }
          },

          //Series object (optional) - a list of series using normal highcharts series options.
          series: [{
            name: 'Total weight (g)',
            data: []
          }, {
            name: 'Total energy (kcal)',
            data: []
          }, {
            name: 'Average kcal/100g',
            data: []
          }],
          title: {
            text: null
          },
          //Boolean to control showng loading status on chart (optional) Could be a string if you want to show specific loading text.
          loading: false,
          xAxis: {
            categories: data.category,
            title: {
              text: null
            }
          },
          yAxis: {
            min: 0,
            title: {
              text: null
            }
          },
          //Whether to use HighStocks instead of HighCharts (optional). Defaults to false.
          useHighStocks: false,
          plotOptions: {
            bar: {
              dataLabels: {
                enabled: true
              }
            }
          },
          legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            floating: true,
            borderWidth: 1,
            backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
            shadow: true,
            reversed: true
          },
          credits: {
            enabled: false
          }
        };

        vm.chartConfig.series[0].data = data.totalWeight;
        vm.chartConfig.series[1].data = data.totalEnergy;
        vm.chartConfig.series[2].data = data.averagelEnergy100g;
      });

    });
})();

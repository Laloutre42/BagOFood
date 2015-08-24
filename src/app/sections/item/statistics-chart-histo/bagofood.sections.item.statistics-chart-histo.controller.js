(function () {
  'use strict';

  angular.module('bagofood.sections.item.statistics-chart-histo.controller', [])
    .controller('ItemsListStatisticsChartHistoController', function ($log, $scope, CONST, ItemsService) {

      var vm = this;
      vm.foodList = $scope.$parent.vm.foodList;

      // Graph histo configuration
      vm.chartConfig = {

        options: {
          //This is the Main Highcharts chart config. Any Highchart options are valid here will be overriden by values specified below.
          chart: {
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
          categories: CONST.itemCategories.concat('All'),
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

      // Build data for the graph
      displayTotal(ItemsService.buildDataFromFoodList(vm.foodList));

      function displayTotal(totalObject) {

        // Total weight (g)
        vm.chartConfig.series[0].data = [
          totalObject.totalBreakfast.totalWeight,
          totalObject.totalSnack.totalWeight,
          totalObject.totalLunch.totalWeight,
          totalObject.totalDiner.totalWeight,
          totalObject.totalAll.totalWeight
        ];

        // Total energy (kcal)
        vm.chartConfig.series[1].data = [
          totalObject.totalBreakfast.totalEnergy,
          totalObject.totalSnack.totalEnergy,
          totalObject.totalLunch.totalEnergy,
          totalObject.totalDiner.totalEnergy,
          totalObject.totalAll.totalEnergy
        ];

        // Average kcal/100g
        vm.chartConfig.series[2].data = [
          totalObject.totalBreakfast.averagelEnergy100g,
          totalObject.totalSnack.averagelEnergy100g,
          totalObject.totalLunch.averagelEnergy100g,
          totalObject.totalDiner.averagelEnergy100g,
          totalObject.totalAll.averagelEnergy100g
        ];
      }

    });
})();

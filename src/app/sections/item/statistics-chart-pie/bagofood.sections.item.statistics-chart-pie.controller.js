<<<<<<< HEAD
(function () {
  'use strict';

  angular.module('bagofood.sections.item.statistics-chart-pie.controller', [])
    .controller('ItemsListStatisticsChartPieController', function ($log, $scope, CONST, ItemsService) {

      var vm = this;
      vm.foodList = $scope.$parent.vm.foodList;

      // Graph Pie configuration
      vm.chartConfig = {

        options: {
          //This is the Main Highcharts chart config. Any Highchart options are valid here will be overriden by values specified below.
          chart: {
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
          text: 'Total weight / Total energy'
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

      // Build data for the graph
      displayTotal(ItemsService.buildDataFromFoodList(vm.foodList));

      function displayTotal(totalObject) {

        // Total weight (g)
        vm.chartConfig.series[0].data = [
          {
            name: CONST.itemCategories[0],
            y: totalObject.totalBreakfast.totalWeight
          },
          {
            name: CONST.itemCategories[1],
            y: totalObject.totalSnack.totalWeight
          },
          {
            name: CONST.itemCategories[2],
            y: totalObject.totalLunch.totalWeight
          },
          {
            name: CONST.itemCategories[3],
            y: totalObject.totalDiner.totalWeight
          }
        ];

        // Total energy (kcal)
        vm.chartConfig.series[1].data = [
          {
            name: CONST.itemCategories[0],
            y: totalObject.totalBreakfast.totalEnergy
          },
          {
            name: CONST.itemCategories[1],
            y: totalObject.totalSnack.totalEnergy
          },
          {
            name: CONST.itemCategories[2],
            y: totalObject.totalLunch.totalEnergy
          },
          {
            name: CONST.itemCategories[3],
            y: totalObject.totalDiner.totalEnergy
          }
        ];
      }

    });
})();
=======
'use strict';

angular.module('bagofood.sections.item.statistics-chart-pie.controller', [])
  .controller('ItemsListStatisticsChartPieController', function ($log, $scope, CONST, ItemsService) {

    var vm = this;
    vm.foodList = $scope.$parent.vm.foodList;

    // Graph Pie configuration
    vm.chartConfig = {

      options: {
        //This is the Main Highcharts chart config. Any Highchart options are valid here will be overriden by values specified below.
        chart: {
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
          center: ["25%", "50%"],
          showInLegend: true,
          data: []
        },
        {
          type: 'pie',
          name: 'Total energy (kcal)',
          center: ["75%", "50%"],
          showInLegend: false,
          data: []
        }
      ],
      title: {
        text: "Total weight / Total energy"
      },
      legend: {
        enabled: true
      },
      plotOptions: {
        pie: {
          size: "100%",
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

    // Build data for the graph
    displayTotal(ItemsService.buildDataFromFoodList(vm.foodList));

    function displayTotal(totalObject) {

      // Total weight (g)
      vm.chartConfig.series[0].data = [
        {
          name: CONST.itemCategories[0],
          y: totalObject.totalBreakfast.totalWeight
        },
        {
          name: CONST.itemCategories[1],
          y: totalObject.totalSnack.totalWeight
        },
        {
          name: CONST.itemCategories[2],
          y: totalObject.totalLunch.totalWeight
        },
        {
          name: CONST.itemCategories[3],
          y: totalObject.totalDiner.totalWeight
        }
      ];

      // Total energy (kcal)
      vm.chartConfig.series[1].data = [
        {
          name: CONST.itemCategories[0],
          y: totalObject.totalBreakfast.totalEnergy
        },
        {
          name: CONST.itemCategories[1],
          y: totalObject.totalSnack.totalEnergy
        },
        {
          name: CONST.itemCategories[2],
          y: totalObject.totalLunch.totalEnergy
        },
        {
          name: CONST.itemCategories[3],
          y: totalObject.totalDiner.totalEnergy
        }
      ];
    }

  });
>>>>>>> 8faae942766808f1544e0d552197457ca274c18d

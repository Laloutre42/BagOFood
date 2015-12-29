(function() {
  'use strict';

angular.module('bagofood.core.service.foodlistComputation', [])
  .factory('FoodListComputationService', ['$resource', 'ENV', function ($resource, ENV) {
    return $resource(ENV.apiEndpoint + '/foodlistComputation/:id', {id: '@id'}, {

      // Get product by origfdnm
      getStatisticsTableFromFoodListById: {
        url: ENV.apiEndpoint + '/foodlistComputation/statisticsTable/:id',
        method: 'GET',
        isArray: true
      },

      getStatisticsChartHistoFromFoodListById: {
        url: ENV.apiEndpoint + '/foodlistComputation/statisticsChartHisto/:id',
        method: 'GET'
      }

    }, {
      stripTrailingSlashes: false
    });
  }]);
})();

'use strict';

/**
 * @ngdoc service
 * @name bagOFoodApp.elasticSearchService
 * @description
 * # elasticSearchService
 * Service in the bagOFoodApp.
 */
angular.module('bagOFoodApp')
  .service('elasticSearchService', function (esFactory) {
    return esFactory({
      host: 'localhost:9200',
      apiVersion: '1.5',
      log: 'trace'
    });
  });


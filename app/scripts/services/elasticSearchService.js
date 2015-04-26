'use strict';

/* Services */

var bagOFoodServices = angular.module('bagOFoodServices', []);

// esFactory() creates a configured elasticSearchService instance.
bagOFoodServices.service('elasticSearchService', function (esFactory) {
    return esFactory({
        host: 'localhost:9200',
        apiVersion: '1.5',
        log: 'trace'
    });
});

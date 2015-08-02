(function() {
  'use strict';

angular.module('bagofood.core.service.product', [])
  .factory('ProductService', function ($resource, ENV) {
    return $resource(ENV.apiEndpoint + '/product/:id', {id: '@id'}, {

      // Get product by origfdnm
      getFoodListByOrigfdnm: {
        url: ENV.apiEndpoint + '/product/origfdnm/:origfdnm',
        method: 'GET',
        isArray: true
      }

    }, {
      stripTrailingSlashes: false
    });
  });
})();  

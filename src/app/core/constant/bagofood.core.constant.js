'use strict';

angular.module('bagofood.core.constant', [])
  .constant('ENV', {name: 'development', apiEndpoint: 'http://localhost:8080'})
  .constant('CONST', {
    itemCategories: ['Breakfast', 'Snack', 'Lunch', 'Diner'],
    catalog: {
      CIQUAL_2012: 'Ciqual 2012',
      CUSTOM: 'Custom'
    }
  });

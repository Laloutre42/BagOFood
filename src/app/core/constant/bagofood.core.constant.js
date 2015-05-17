'use strict';

angular.module('bagofood.core.constant', [])
  .constant('ENV', {name: 'development', apiEndpoint: 'http://localhost:8080'})
  .constant('CONST', {itemCategories: ['BREAKFAST', 'SNACK', 'LUNCH', 'DINER']});

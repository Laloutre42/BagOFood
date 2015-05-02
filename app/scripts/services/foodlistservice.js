'use strict';

/**
 * @ngdoc service
 * @name bagOFoodApp.foodListService
 * @description
 * # foodListService
 * Service in the bagOFoodApp.
 */
angular.module('bagOFoodApp')
  .factory('FoodListService', function ($resource, ENV) {
    return $resource(ENV.apiEndpoint + '/foodlist/:id', {id: '@id'}, {

      // Get food list by an author name
      getFoodListByAuthorUserName: {
        url: ENV.apiEndpoint + '/foodlist/userName/:userName',
        method: 'GET',
        isArray: true
      },

      update: {
        method: 'PUT'
      }
    }, {
      stripTrailingSlashes: false
    });
  });

'use strict';

angular.module('bagofood.core.service.foodlist', [])
  .factory('FoodListService', function ($resource, ENV) {
    return $resource(ENV.apiEndpoint + '/foodlist/:id', {id: '@id'}, {

      // Get food list by an author id
      getFoodListByUserId: {
        url: ENV.apiEndpoint + '/foodlist/userId/:userId',
        method: 'GET',
        isArray: true
      },

      // Add item on food list id
      addItemOnFoodList: {
        url: ENV.apiEndpoint + '/foodlist/:id/items',
        method: 'POST'
      },

      // Delete item on food list id
      deleteItemOnFoodList: {
        url: ENV.apiEndpoint + '/foodlist/:id/items/:itemId',
        method: 'DELETE'
      },

      // Update items on food list id
      updateItemOnFoodList: {
        url: ENV.apiEndpoint + '/foodlist/:id/items/:itemId',
        method: 'POST'
      }

    }, {
      stripTrailingSlashes: false
    });
  });

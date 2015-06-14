'use strict';

angular.module('bagofood.core.service.items', [])
  .factory('ItemsService', function ($log, CONST) {

    var ItemsService = {};
    ItemsService.buildDataFromFoodList = function (foodList) {

      var totalObject = {};
      totalObject.totalAll = {
        'totalWeight': 0,
        'totalEnergy': 0,
        'totalEnergy100g': 0,
        'averagelEnergy100g': 0,
        'nbItems': 0
      };
      totalObject.totalBreakfast = angular.copy(totalObject.totalAll);
      totalObject.totalLunch = angular.copy(totalObject.totalAll);
      totalObject.totalDiner = angular.copy(totalObject.totalAll);
      totalObject.totalSnack = angular.copy(totalObject.totalAll);

      // Loop on items
      for (var i = 0; i < foodList.itemList.length; i++) {

        var item = foodList.itemList[i];
        switch (item.category) {

          // Breakfast
          case CONST.itemCategories[0]:
            incrementTotalObject(totalObject.totalBreakfast, item);
            break;

          // Snack
          case CONST.itemCategories[1]:
            incrementTotalObject(totalObject.totalSnack, item);
            break;

          // Lunch
          case CONST.itemCategories[2]:
            incrementTotalObject(totalObject.totalLunch, item);
            break;

          // Diner
          case CONST.itemCategories[3]:
            incrementTotalObject(totalObject.totalDiner, item);
            break;
        }
        incrementTotalObject(totalObject.totalAll, item);
      }

      roundTotalObject(totalObject.totalAll);
      roundTotalObject(totalObject.totalBreakfast);
      roundTotalObject(totalObject.totalLunch);
      roundTotalObject(totalObject.totalDiner);
      roundTotalObject(totalObject.totalSnack);

      return totalObject;
    };

    function incrementTotalObject(total, item) {
      total.totalWeight += item.weight;
      total.totalEnergy += (item.weight * item.energyFor100 / 100);
      total.totalEnergy100g += item.energyFor100;
      total.nbItems++;
      total.averagelEnergy100g += (total.totalEnergy100g / total.nbItems);
    }

    function roundTotalObject(total) {
      total.totalWeight = +total.totalWeight.toFixed(2);
      total.totalEnergy = +total.totalEnergy.toFixed(2);
      total.totalEnergy100g = +total.totalEnergy100g.toFixed(2);
      total.averagelEnergy100g = +total.averagelEnergy100g.toFixed(2);
    }

    return ItemsService;
  })
;

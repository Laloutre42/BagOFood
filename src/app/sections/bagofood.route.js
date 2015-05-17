'use strict';

angular.module('bagofood.route', ['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('main', {
        templateUrl: 'app/sections/main/main.html'
      })
      .state('main.home', {
        url: '/',
        templateUrl: 'app/sections/home/home.html'
      })
      .state('main.foodlist', {
        url: 'foodlist/:type',
        templateUrl: 'app/sections/foodlist/foodlist.html',
        controller: 'FoodListController'
      })
      .state('main.itemlist', {
        url: 'foodlist/:foodlistId/items',
        templateUrl: 'app/sections/item/item.html',
        controller: 'ItemListController'
      })
    ;

    $urlRouterProvider.otherwise('/');
  })
;

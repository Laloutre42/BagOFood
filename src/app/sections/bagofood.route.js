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
      // Foodlist
      .state('main.foodlist', {
        url: '/foodlist/:type',
        templateUrl: 'app/sections/foodlist/foodlist.html',
        controller: 'FoodListController as vm'
      })
      .state('main.modal', {
        url: '/modal',
        templateUrl: 'app/sections/foodlist/addFoodlist/foodlist.add.html',
        controller: 'AddFoodlistController as vm',
        params: {'foodList': null }
      })
      // Items
      .state('main.itemlist', {
        url: '/foodlist/:foodListId/items',
        templateUrl: 'app/sections/item/item.html',
        controller: 'ItemListController as vm',
        params: {'foodList': null }
      })
      .state('main.addItem', {
        url: '/addItem',
        templateUrl: 'app/sections/item/addItem/item.add.html',
        controller: 'AddItemController as vm',
        params: {'item': null, 'foodListId': null }
      })
    ;

    $urlRouterProvider.otherwise('/');
  })
;

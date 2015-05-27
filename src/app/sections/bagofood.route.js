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
        controller: 'FoodListController'
      })
      .state('main.addFoodlist', {
        url: '/addFoodlist',
        templateUrl: 'app/sections/foodlist/modal/foodlist.add.html',
        controller: 'AddFoodlistController',
        params: {'foodList': null }
      })
      // Items
      .state('main.itemlist', {
        url: '/foodlist/:foodListId/items',
        templateUrl: 'app/sections/item/item.html',
        controller: 'ItemListController'
      })
      .state('main.addItem', {
        url: '/addItem',
        templateUrl: 'app/sections/item/modal/item.add.html',
        controller: 'AddItemController',
        params: {'item': null, 'foodListId': null }
      })
      // Product
      .state('main.product', {
        url: '/foodlist/product',
        templateUrl: 'app/sections/product/product.html',
        controller: 'ProductController'
      })
    ;

    $urlRouterProvider.otherwise('/');
  })
;

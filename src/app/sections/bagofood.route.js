'use strict';

angular.module('bagofood.route', ['ui.router', 'bagofood.core.service.head'])
  .config(function ($stateProvider, $urlRouterProvider, $httpProvider) {
    $stateProvider
      .state('main', {
        templateUrl: 'app/sections/main/main.html'
      })
      .state('main.home', {
        url: '/',
        templateUrl: 'app/components/authentification/authentification.html',
        controller: 'AuthentificationController as vm'
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
        params: {'foodList': null}
      })

      // Items
      .state('main.itemslist', {
        url: '/foodlist/:foodListId/items',
        templateUrl: 'app/sections/item/item.html',
        controller: 'ItemsListController as vm'
      })
      .state('main.addItem', {
        url: '/addItem',
        templateUrl: 'app/sections/item/addItem/item.add.html',
        controller: 'AddItemController as vm',
        params: {'item': null, 'foodListId': null}
      })

      // Items foodlist caracteristics
      .state('main.itemslist.description', {
        templateUrl: 'app/sections/item/description/description.html',
        controller: 'ItemsListDescriptionController as vm'
      })
      .state('main.itemslist.statisticsCharHisto', {
        templateUrl: 'app/sections/item/statistics-chart-histo/statistics-chart-histo.html',
        controller: 'ItemsListStatisticsChartHistoController as vm'
      })
      .state('main.itemslist.statisticsChartPie', {
        templateUrl: 'app/sections/item/statistics-chart-pie/statistics-chart-pie.html',
        controller: 'ItemsListStatisticsChartPieController as vm'
      })
      .state('main.itemslist.statisticsTable', {
        templateUrl: 'app/sections/item/statistics-table/statistics-table.html',
        controller: 'ItemsListStatisticsTableController as vm'
      })
    ;

    $urlRouterProvider.otherwise('/');

    $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
  })
;

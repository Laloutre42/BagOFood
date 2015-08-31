(function () {
  'use strict';

  angular.module('bagofood.route', [])
    .config(['$stateProvider','$urlRouterProvider', '$httpProvider', '$locationProvider', 'USER_ROLES', 
      function ($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider, USER_ROLES) {
      $stateProvider
        .state('main', {
          templateUrl: 'app/sections/main/main.html',
          controller: 'MainController as vm'
        })
        .state('main.home', {
          url: '/',
          templateUrl: 'app/sections/home/home.html'
        })
        .state('main.about', {
          url: '/about',
          templateUrl: 'app/sections/about/about.html'
        })

        // Foodlist
        .state('main.foodlist', {
          url: '/foodlist/:type',
          templateUrl: 'app/sections/foodlist/foodlist.html',
          controller: 'FoodListController as vm',
          data: {
            authorizedRoles: [USER_ROLES.admin, USER_ROLES.user]
          }
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

      /* The custom "X-Requested-With" is a conventional header sent by browser clients, and it used to be the default in Angular but they took it out in 1.3.0.
      Spring Security responds to it by not sending a "WWW-Authenticate" header in a 401 response, and thus the browser will not pop up an authentication dialog
      (which is desirable in our app since we want to control the authentication). */
      $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';

      // use the HTML5 History API
      $locationProvider.html5Mode(true);      

      $urlRouterProvider.otherwise('/');
    }]);
})();

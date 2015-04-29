'use strict';

/**
 * @ngdoc overview
 * @name bagOFoodApp
 * @description
 * # bagOFoodApp
 *
 * Main module of the application.
 */
angular.module('bagOFoodApp', [
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch',
  'elasticsearch',
  'ui.bootstrap'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/foodList', {
        templateUrl: 'views/foodlist.html',
        controller: 'FoodlistCtrl'
      })
      .when('/productList', {
        templateUrl: 'views/productlist.html',
        controller: 'ProductlistCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

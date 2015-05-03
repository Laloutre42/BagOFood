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
  'ngResource',
  'validation',
  'validation.rule',
  'config',
  'elasticsearch',
  'ui.bootstrap',
  'datatables'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/foodList', {
        templateUrl: 'views/foodlist.html',
        controller: 'FoodlistCtrl',
        listData: 'allFoodList'
      })
      .when('/myFoodList', {
        templateUrl: 'views/foodlist.html',
        controller: 'FoodlistCtrl',
        listData: 'myFoodList'
      })
      .when('/productList', {
        templateUrl: 'views/productlist.html',
        controller: 'ProductlistCtrl'
      })
      .when('/addNewFoodList', {
        templateUrl: '../views/modal/addnewfoodlist.html',
        controller: 'AddnewfoodlistCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

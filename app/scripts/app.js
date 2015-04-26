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
        'bagOFoodControllers',
        'bagOFoodServices'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'BagOFoodCtrl'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });

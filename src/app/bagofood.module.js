(function() {
  'use strict';

angular.module('bagOfoodGulp', [
  // Ng
  'ngAnimate',
  'ngCookies',
  'ngTouch',
  'ngSanitize',
  'ngResource',
  'ngMessages',

  //ngTable
  'ngTable',

  // Ui
  'ui.bootstrap',
  'ui.router',

  // Ui router extra
  'ct.ui.router.extras.core',
  'ct.ui.router.extras.transition',
  'ct.ui.router.extras.previous',

  //Char with highcharts-ng build with highcharts for angular
  'highcharts-ng',

  // translate
  'pascalprecht.translate',
  'tmh.dynamicLocale',

  // My app
  'bagofood.sections',
  'bagofood.components',
  'bagofood.core',
  'bagofood.route',
  'bagofood.config'
]);
})();

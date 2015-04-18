'use strict';

/**
 * @ngdoc function
 * @name bagOfoodApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the bagOfoodApp
 */
angular.module('bagOfoodApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

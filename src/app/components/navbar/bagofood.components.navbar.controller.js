'use strict';

angular.module('bagofood.components.navbar.controller', [])
  .controller('NavBarController', function ($scope) {
    $scope.date = new Date();
  });

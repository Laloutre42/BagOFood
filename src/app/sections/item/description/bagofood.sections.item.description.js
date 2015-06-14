'use strict';

angular.module('bagofood.sections.item.description.controller', [])
  .controller('ItemsListDescriptionController', function ($log, $scope) {

    var vm = this;
    vm.foodList = $scope.$parent.vm.foodList;
  });

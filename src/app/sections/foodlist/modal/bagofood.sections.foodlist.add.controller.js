'use strict';


angular.module('bagofood.sections.foodlist.add.controller', ['bagofood.core.service.foodlist'])
  .controller('AddFoodlistController', function ($scope, $modalInstance, FoodListService, foodList) {

    $scope.foodList = angular.copy(foodList) || {};

    // Valid modal
    $scope.ok = function () {

      // Todo to change userId (session storage?)
      $scope.foodList.user = {
        id: 2,
        name: "Arnaud",
        email: "Arnaud@gmail.com"
      },

        FoodListService.save($scope.foodList).$promise.then($modalInstance.close);

    };

    // Cancel modal
    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  });

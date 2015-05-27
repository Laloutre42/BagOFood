'use strict';


angular.module('bagofood.sections.foodlist.add.controller', ['bagofood.core.service.foodlist'])
  .controller('AddFoodlistController', function ($scope, $log, $stateParams, $previousState, FoodListService) {

    $scope.foodList = angular.copy($stateParams.foodList) || {};

    // Valid form
    $scope.ok = function () {

      // Todo to change userId (session storage?)
      $scope.foodList.user = {
        id: 2,
        name: "Arnaud",
        email: "Arnaud@gmail.com"
      },

        FoodListService.save($scope.foodList).$promise.then(
          function (data){
            $scope.back();
          }
        );

    };

    // Cancel form
    $scope.back = function () {
      $previousState.go();
    };
  });

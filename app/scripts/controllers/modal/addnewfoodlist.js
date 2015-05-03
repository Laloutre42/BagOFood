'use strict';

/**
 * @ngdoc function
 * @name bagOFoodApp.controller:AddnewfoodlistCtrl
 * @description
 * # AddnewfoodlistCtrl
 * Controller of the bagOFoodApp
 */
angular.module('bagOFoodApp')
  .controller('AddnewfoodlistCtrl', function ($scope, $modalInstance, FoodListService) {

    // Valid modal
    $scope.ok = function () {

      $scope.foodList.user = {
        id: 2,
        name: "Arnaud",
        email: "Arnaud@gmail.com"
      },

        FoodListService.save($scope.foodList).$promise.then(function (foodList) {
          alert('Food list saved');
          //console.log(foodList);
        });

      $modalInstance.close();
    };

    // Cancel modal
    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  });

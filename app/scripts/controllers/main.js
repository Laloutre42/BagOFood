'use strict';

/**
 * @ngdoc function
 * @name bagOFoodApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bagOFoodApp
 */
angular.module('bagOFoodApp')
  .controller('MainCtrl', function ($scope, $modal) {

    // Open a modal to add a new food list
    $scope.addNewFoodList = function () {

      var modalInstance = $modal.open({
        animation: true,
        templateUrl: 'views/modal/addnewfoodlist.html',
        controller: 'AddnewfoodlistCtrl',
        size: 'lg',
        resolve: {
          foodList: function () {
            return $scope.foodList;
          }
        }
      });
    }

  });

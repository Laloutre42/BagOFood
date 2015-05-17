'use strict';

angular.module('bagofood.sections.foodlist.controller', ['bagofood.core.service.foodlist', 'bagofood.sections.foodlist.add.controller'])
  .controller('FoodListController', function ($scope, $modal, $log, $stateParams, FoodListService) {


    getAllFoodList();

    // Open a modal to add a new food list
    $scope.addFoodList = function (foodList) {

      var modalInstance = $modal.open({
        animation: true,
        templateUrl: 'app/sections/foodlist/modal/foodlist.add.html',
        controller: 'AddFoodlistController',
        size: 'lg',
        resolve: {
          foodList: function () {
            return foodList;
          }
        }
      });

      modalInstance.result.then(getAllFoodList);

    };

    $scope.removeFoodList = function (foodList) {
      FoodListService.delete({'id': foodList.id}).$promise.then(getAllFoodList);
    };

    function getAllFoodList() {

      $log.debug('$stateParams is ', $stateParams);

      var getFoodListParam;
      if ($stateParams.type === 'all') {
        getFoodListParam = FoodListService.query();
      }
      else {
        // Todo to change userId
        getFoodListParam = FoodListService.getFoodListByUserId({'userId': 2});
      }

      getFoodListParam.$promise.then(function (foodListList) {
        $scope.foodListList = foodListList;
        $log.debug('[getAllFoodList] length is ', $scope.foodListList.length)
      });
    }

  })
;

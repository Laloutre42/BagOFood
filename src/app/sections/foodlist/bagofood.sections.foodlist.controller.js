'use strict';

angular.module('bagofood.sections.foodlist.controller', ['bagofood.core.service.foodlist', 'bagofood.sections.foodlist.add.controller'])
  .controller('FoodListController', function ($scope, $log, $stateParams, $state, FoodListService) {


    getAllFoodList();

    // Open a modal to add a new food list
    $scope.addFoodList = function (foodList) {
      $state.go('main.addFoodlist', {foodList: foodList});
    };

    // Navigate to the foodlist detail (item list)
    $scope.navigateToDetailFoodList = function(foodListId){
      $state.go('main.itemlist',{foodListId: foodListId});
    };

    $scope.removeFoodList = function (foodList) {
      FoodListService.delete({'id': foodList.id}).$promise.then(getAllFoodList);
    };

    function getAllFoodList() {

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

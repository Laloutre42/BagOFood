'use strict';

angular.module('bagofood.sections.foodlist.controller', ['bagofood.core.service.foodlist', 'bagofood.sections.foodlist.add.controller'])
  .controller('FoodListController', function ($scope, $log, $stateParams, $state, ngTableParams, FoodListService) {

    /**
     * Ng table to display foodlist
     * @type {ngTableParams}
     */
    $scope.foodlistTable = new ngTableParams({
      page: 1,
      count: 10
    }, {
      total: 0,
      getData: function ($defer, params) {
        getAllFoodList($defer, params);
      }
    });

    // Open a modal to add a new food list
    $scope.addFoodList = function (foodList) {
      $state.go('main.modal', {foodList: foodList});
    };

    // Navigate to the foodlist detail (item list)
    $scope.navigateToDetailFoodList = function(foodListId){
      $state.go('main.itemlist',{foodListId: foodListId});
    };

    $scope.removeFoodList = function (foodList) {
      // TODO
      FoodListService.delete({'id': foodList.id}).$promise.then($scope.foodlistTable.reload);
    };

    function getAllFoodList($defer, params) {

      var getFoodListParam;
      if ($stateParams.type === 'all') {
        getFoodListParam = FoodListService.query();
      }
      else {
        // Todo to change userId
        getFoodListParam = FoodListService.getFoodListByUserId({'userId': 2});
      }

      getFoodListParam.$promise.then(function (data) {
        $log.debug('[getAllFoodList] length is ', data.length);
        $defer.resolve(data.slice((params.page() - 1) * params.count(), params.page() * params.count()));
        params.total(data.length);
      });
    }

  })
;

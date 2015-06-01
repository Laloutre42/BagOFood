'use strict';

angular.module('bagofood.sections.foodlist.controller', ['bagofood.core.service.foodlist', 'bagofood.sections.foodlist.add.controller'])
  .controller('FoodListController', function ($log, $stateParams, $state, ngTableParams, FoodListService) {

    var vm = this;
    vm.addFoodList = addFoodList;
    vm.navigateToDetailFoodList = navigateToDetailFoodList;
    vm.removeFoodList = removeFoodList;

    // ng table to display data
    vm.foodlistTable = new ngTableParams({
      page: 1,
      count: 10
    }, {
      total: 0,
      getData: function ($defer, params) {
        getAllFoodList($defer, params);
      }
    });

    // Open a modal to add a new food list
    function addFoodList(foodList) {
      $state.go('main.modal', {foodList: foodList});
    };

    // Navigate to the foodlist detail (item list)
    function navigateToDetailFoodList(foodList){
      $state.go('main.itemlist',{foodListId: foodList.id, foodList: foodList});
    };

    function removeFoodList(foodList) {
      FoodListService.delete({'id': foodList.id}).$promise.then(function(){
        vm.foodlistTable.reload();
      });
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

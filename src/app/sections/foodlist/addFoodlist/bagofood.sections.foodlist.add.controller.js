(function () {
  'use strict';

  angular.module('bagofood.sections.foodlist.add.controller', ['bagofood.core.service.foodlist'])
    .controller('AddFoodlistController', function ($log, $stateParams, $previousState, FoodListService, SessionService) {

      var vm = this;
      vm.foodList = angular.copy($stateParams.foodList) || {};
      vm.user = SessionService.getUser();
      vm.ok = ok;
      vm.back = back;

      // Valid form
      function ok() {

        if (!vm.user){
          $log.error("[AddFoodlistController] User is undefined!");
          return;
        }
        else{
          vm.foodList.user = vm.user;

          FoodListService.save(vm.foodList).$promise.then(
            function () {
              vm.back();
            });
        }

      }

      // Cancel form
      function back() {
        $previousState.go();
      }
    });
})();

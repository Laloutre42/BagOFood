<<<<<<< HEAD
(function () {
  'use strict';

  angular.module('bagofood.sections.foodlist.add.controller', ['bagofood.core.service.foodlist'])
    .controller('AddFoodlistController', function ($log, $stateParams, $previousState, FoodListService) {

      var vm = this;
      vm.foodList = angular.copy($stateParams.foodList) || {};
      vm.ok = ok;
      vm.back = back;

      // Valid form
      function ok() {

        // Todo to change userId (session storage?)
        vm.foodList.user = {
          id: 2,
          name: "Arnaud",
          email: "Arnaud@gmail.com"
        },

          FoodListService.save(vm.foodList).$promise.then(
            function () {
              vm.back();
            });

      }

      // Cancel form
      function back() {
        $previousState.go();
      }
    });
})();
=======
'use strict';

angular.module('bagofood.sections.foodlist.add.controller', ['bagofood.core.service.foodlist'])
  .controller('AddFoodlistController', function ($log, $stateParams, $previousState, FoodListService) {

    var vm = this;
    vm.foodList = angular.copy($stateParams.foodList) || {};
    vm.ok = ok;
    vm.back = back;

    // Valid form
    function ok() {

      // Todo to change userId (session storage?)
      vm.foodList.user = {
        id: 2,
        name: "Arnaud",
        email: "Arnaud@gmail.com"
      },

        FoodListService.save(vm.foodList).$promise.then(
          function (data) {
            vm.back();
          }
        );

    };

    // Cancel form
    function back() {
      $previousState.go();
    };
  });
>>>>>>> 8faae942766808f1544e0d552197457ca274c18d

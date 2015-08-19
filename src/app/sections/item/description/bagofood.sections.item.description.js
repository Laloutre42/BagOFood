<<<<<<< HEAD
(function () {
  'use strict';

  angular.module('bagofood.sections.item.description.controller', [])
    .controller('ItemsListDescriptionController', function ($log, $scope) {

      var vm = this;
      vm.foodList = $scope.$parent.vm.foodList;
    });
})();
=======
'use strict';

angular.module('bagofood.sections.item.description.controller', [])
  .controller('ItemsListDescriptionController', function ($log, $scope) {

    var vm = this;
    vm.foodList = $scope.$parent.vm.foodList;
  });
>>>>>>> 8faae942766808f1544e0d552197457ca274c18d

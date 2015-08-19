<<<<<<< HEAD
(function() {
  'use strict';
=======
'use strict';
>>>>>>> 8faae942766808f1544e0d552197457ca274c18d


angular.module('bagofood.sections.item.product.detail.controller', [])
  .controller('ItemProductDetailController', function ($scope, $modalInstance, product) {

    $scope.product = product;

    // Cancel modal
    $scope.close = function () {
      $modalInstance.close();
    };

  });
<<<<<<< HEAD
})();
=======
>>>>>>> 8faae942766808f1544e0d552197457ca274c18d

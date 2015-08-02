(function() {
  'use strict';


angular.module('bagofood.components.authentication.signUp.modal', [])
  .controller('SignUpModalController', function ($scope, $modalInstance) {

    // Cancel modal
    $scope.close = function () {
      $modalInstance.close();
    };

  });
})();

(function() {
  'use strict';


angular.module('bagofood.components.authentication.login.modal', [])
  .controller('LoginModalController', function ($scope, $modalInstance) {

    // Cancel modal
    $scope.close = function () {
      $modalInstance.close();
    };

  });
})();

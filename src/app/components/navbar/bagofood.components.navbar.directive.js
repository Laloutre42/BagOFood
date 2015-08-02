(function () {
  'use strict';

  angular.module('bagofood.components.navbar.directive', [])
    .directive('navBarDirective', function () {

      var directive = {
        restrict: 'E',
        templateUrl: 'app/components/navbar/navbar.html',
        scope: {
          creationDate: '='
        },
        controller: NavbarController,
        controllerAs: 'vm',
        bindToController: true
      };

      return directive;

      function NavbarController($rootScope, moment, $log, $modal) {
        var vm = this;

        $rootScope.$watch('currentUser', function (currentUser) {
          vm.user = currentUser;
          $log.debug("[NavbarController] User is ", vm.user);
        });

        vm.relativeDate = moment(vm.creationDate).fromNow();
        vm.openModalForSignIn = openModalForSignIn;
        vm.openModalForSignUp = openModalForSignUp;

        function openModalForSignIn() {

          $modal.open({
            animation: true,
            templateUrl: 'app/components/authentication/login/modal/login.html',
            controller: 'LoginModalController',
            size: 'md'
          });
        }

        function openModalForSignUp() {

          $modal.open({
            animation: true,
            templateUrl: 'app/components/authentication/signUp/modal/signUp.html',
            controller: 'SignUpModalController',
            size: 'md'
          });
        }

      }

    });

})();


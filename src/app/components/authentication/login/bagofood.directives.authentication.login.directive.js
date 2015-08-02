(function () {
  'use strict';

  angular.module('bagofood.components.authentication.login.directive', ['bagofood.components.authentication.login.modal'])
    .directive('authenticationLoginDirective', function () {

      var directive = {
        restrict: 'E',
        templateUrl: 'app/components/authentication/login/login.html',
        scope: {},
        controller: AuthenticationLoginController,
        controllerAs: 'vm',
        bindToController: true
      };

      return directive;

      function AuthenticationLoginController($rootScope, $log, AUTH_EVENTS, AuthenticationService) {
        var vm = this;

        vm.login = login;

        vm.credentials = {
          name: '',
          password: ''
        };
        $rootScope.currentUser = null;

        function login(credentials) {
          AuthenticationService.login(credentials).then(
            function (user) {
              $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
              $rootScope.currentUser = user;
            },
            function () {
              $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
            });
        }

      }

    });

})();


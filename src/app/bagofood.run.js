(function () {
  'use strict';

  angular
    .module('bagOfoodGulp')
    .run(['$log', '$rootScope', 'AUTH_EVENTS', 'USER_ROLES', 'AuthenticationService', runBlock]);

  /** @ngInject */
  function runBlock($log, $rootScope, AUTH_EVENTS, USER_ROLES, AuthenticationService) {

    // Check authentication on server side to see if user is logged in
    AuthenticationService.authenticationCheck().finally(function () {

      $rootScope.$on('$stateChangeStart', function (event, next) {

        // If no roles ares specified, default to all
        var authorizedRoles;
        if (typeof next.data === 'undefined' || typeof next.data.authorizedRoles === 'undefined') {
          authorizedRoles = USER_ROLES.all;
        }
        else {
          authorizedRoles = next.data.authorizedRoles;
        }

        // Accès non autorisé
        if (!AuthenticationService.isAuthorized(authorizedRoles)) {

          event.preventDefault();

          // user is not allowed
          if (AuthenticationService.isAuthenticated()) {
            $rootScope.$broadcast(AUTH_EVENTS.notAuthorized);
            $log.debug('[runBlock] User is not allowed');
            toastr.error('Your are not allowed');
          }
          // user is not logged in
          else {
            $log.debug('[runBlock] User is not logged in');
            toastr.error('Your are not logged in');
            $rootScope.$broadcast(AUTH_EVENTS.notAuthenticated);
          }
        }
      });

      $log.debug('[runBlock] end');

    });
  }

})();

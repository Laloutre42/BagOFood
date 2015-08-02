(function () {
  'use strict';

  angular.module('bagofood.core.service.authentication', [])
    .factory('AuthenticationService', function ($cookies, $log, $http, USER_ROLES, SessionService) {
      var AuthenticationService = {

        login: function (credentials) {
          return $http
            .post('/api/user/login', credentials)
            .then(function (res) {
              SessionService.create(res.data.id, res.data.id, res.data.role);
              return res.data;
            });
        },

        isAuthenticated: function () {
          return !!SessionService.userId;
        },

        isAuthorized: function (authorizedRoles) {
          if (!angular.isArray(authorizedRoles)) {
            authorizedRoles = [authorizedRoles];
          }
          return ((AuthenticationService.isAuthenticated() && authorizedRoles.indexOf(SessionService.userRole) !== -1) ||
            (authorizedRoles.indexOf(USER_ROLES.guest) !== -1) ||
            (authorizedRoles.indexOf(USER_ROLES.all) !== -1));
        },

        signUp: function (credentials) {
          return $http
            .post('/api/user/signUp', credentials)
            .then(function (res) {
              SessionService.create(res.data.id, res.data.id, res.data.role);
              return res.data;
            });
        }

      };

      return AuthenticationService;
    });
})();

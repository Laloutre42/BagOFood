(function () {
  'use strict';

  angular.module('bagofood.core.service.authentication', [])
    .factory('AuthenticationService', function ($rootScope, $cookies, $log, $http, USER_ROLES, AUTH_EVENTS, SessionService) {
      var AuthenticationService = {

        login: function (credentials) {

          $http
            .get('/api/user/principalUser', {headers: headers})
            .then(
            function (response) {
              //SessionService.create(response.data.id, response.data.id, response.data.role);

              $log.debug("[AuthenticationService][login] response ok ", response);

              if (response.data.name) {
                $rootScope.authenticated = true;
                $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
                //$rootScope.currentUser = user;
              } else {
                $rootScope.authenticated = false;
                $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
              }
            },
            function (response) {
              $log.error("[AuthenticationService][login] response error ", response);
              $rootScope.authenticated = false;
              $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
            });

          //var headers = credentials ? {authorization: "Basic " + btoa(credentials.name + ":" + credentials.password)} : {};
          //
          //$http
          //  .get('/api/user/principalUser', {headers: headers})
          //  .then(
          //  function (response) {
          //    //SessionService.create(response.data.id, response.data.id, response.data.role);
          //
          //    $log.debug("[AuthenticationService][login] response ok ", response);
          //
          //    if (response.data.name) {
          //      $rootScope.authenticated = true;
          //      $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
          //      //$rootScope.currentUser = user;
          //    } else {
          //      $rootScope.authenticated = false;
          //      $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
          //    }
          //  },
          //  function (response) {
          //    $log.error("[AuthenticationService][login] response error ", response);
          //    $rootScope.authenticated = false;
          //    $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
          //  });
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
        },

        logOut: function(){

          $http
            .post('/api/logout')
            .then(
            function (response) {
              $log.error("[AuthenticationService][logOut] response ok ", response);
              $rootScope.authenticated = false;
            },
            function (response) {
              $log.error("[AuthenticationService][logOut] response error ", response);
              $rootScope.authenticated = false;
            });
        }

      };

      return AuthenticationService;
    });
})();

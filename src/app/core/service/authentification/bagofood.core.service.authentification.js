'use strict';

angular.module('bagofood.core.service.authentification', [])
  .factory('AuthentificationService', function ($cookies, $log, $http, ENV) {
    var AuthentificationService = {

      connectOnFacebook: function () {

        return $http({method: 'POST', url: ENV.apiEndpoint + '/signin/facebook'}).then(function (response) {
          $log.debug(response);
          return response.data;
        });
      }
    };

    return AuthentificationService;
  });

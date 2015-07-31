'use strict';

angular.module('bagofood.core.service.head', [])
  .factory('HeadService', function ($log, $http, ENV) {
    var HeadService = {

      async: function () {

        var promise = $http({method: 'GET', url: ENV.apiEndpoint + '/head'}).then(function (response) {
          $log.debug(response);
          return response.data;
        });

        return promise;
      }
    };

    return HeadService;
  });



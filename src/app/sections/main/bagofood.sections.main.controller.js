(function () {
  'use strict';

  angular.module('bagofood.sections.main.controller', [])
    .controller('MainController', function ($http, $log) {
      var vm = this;

      vm.testA = testA;
      vm.testNA = testNA;

      function testA(){
        $http.get('/api/user/testA').success(function(data) {
          $log.debug(data);
        })
      }

      function testNA(){
        $http.get('/api/user/testNA').success(function(data) {
          $log.debug(data);
        })
      }

    });
})();

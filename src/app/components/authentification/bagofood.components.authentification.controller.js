'use strict';

angular.module('bagofood.components.authentification.controller', [])
  .controller('AuthentificationController', function ($window, $log, AuthentificationService) {

    var vm = this;
    vm.connectOnFacebook = connectOnFacebook;

    // Connect to Facebook provider with Spring social
    function connectOnFacebook() {
      AuthentificationService.connectOnFacebook().then(function(data){
       $log.debug(data);
      })
    };

  });

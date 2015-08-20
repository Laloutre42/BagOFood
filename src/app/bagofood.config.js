(function () {
  'use strict';

  angular.module('bagofood.config', [])
    .config(function ($logProvider, $httpProvider, toastr) {

      // Enable log
      $logProvider.debugEnabled(true);

      // Set options third-party lib
      toastr.options.timeOut = 3000;
      toastr.options.positionClass = 'toast-top-right';
      toastr.options.preventDuplicates = true;
      toastr.options.progressBar = false;


      $httpProvider.interceptors.push([
        '$injector',
        function ($injector) {
          return $injector.get('AuthenticationInterceptorService');
        }
      ]);

    });

})();

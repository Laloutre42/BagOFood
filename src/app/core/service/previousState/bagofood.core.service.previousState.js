<<<<<<< HEAD
(function() {
  'use strict';

angular.module('bagofood.core.service.previousState', [])
  .service(['$rootScope', '$state', function ($rootScope, $state) {
=======
'use strict';

angular.module('bagofood.core.service.previousState', [])
  .service("$previousState", function ($rootScope, $state) {
>>>>>>> 8faae942766808f1544e0d552197457ca274c18d
    var previous = null;
    var memos = {};

    var lastPrevious = null;

<<<<<<< HEAD
    $rootScope.$on('$stateChangeStart', function (evt, toState, toStateParams, fromState, fromStateParams) {
=======
    $rootScope.$on("$stateChangeStart", function (evt, toState, toStateParams, fromState, fromStateParams) {
>>>>>>> 8faae942766808f1544e0d552197457ca274c18d
      lastPrevious = previous;
      previous = {state: fromState, params: fromStateParams};
    });

<<<<<<< HEAD
    $rootScope.$on('$stateChangeError', function () {
=======
    $rootScope.$on("$stateChangeError", function () {
>>>>>>> 8faae942766808f1544e0d552197457ca274c18d
      previous = lastPrevious;
      lastPrevious = null;
    });

<<<<<<< HEAD
    $rootScope.$on('$stateChangeSuccess', function () {
=======
    $rootScope.$on("$stateChangeSuccess", function () {
>>>>>>> 8faae942766808f1544e0d552197457ca274c18d
      lastPrevious = null;
    });

    var $previousState = {
      get: function (memoName) {
        return memoName ? memos[memoName] : previous;
      },
      go: function (memoName) {
        var to = $previousState.get(memoName);
<<<<<<< HEAD
        return $state.go(to.state, to.params);
=======
        return $state.go(to.state, to.params)
>>>>>>> 8faae942766808f1544e0d552197457ca274c18d
      },
      memo: function (memoName) {
        memos[memoName] = previous;
      }
    };

    return $previousState;
<<<<<<< HEAD
  }]);

/*  angular.module('bagofood.core.service.previousState').run(['$previousState', function () {
    // Inject in .run so it can register $rootScope.$on.
  }]);*/
})();
=======
  });

angular.module('bagofood.core.service.previousState').run(['$previousState', function ($previousState) {
  "use strict";
  // Inject in .run so it can register $rootScope.$on.
}]);
>>>>>>> 8faae942766808f1544e0d552197457ca274c18d

<<<<<<< HEAD
(function() {
  'use strict';

/* global malarkey:false, toastr:false, moment:false */
angular.module('bagofood.core.constant', [])

  .constant('malarkey', malarkey)
  .constant('toastr', toastr)
  .constant('moment', moment)

  .constant('ENV', {name: 'development', apiEndpoint: '/api'})
=======
'use strict';

angular.module('bagofood.core.constant', [])
  .constant('ENV', {name: 'development', apiEndpoint: 'http://localhost:8080'})
>>>>>>> 8faae942766808f1544e0d552197457ca274c18d
  .constant('CONST', {
    itemCategories: ['Breakfast', 'Snack', 'Lunch', 'Diner'],
    catalog: {
      CIQUAL_2012: 'Ciqual 2012',
      CUSTOM: 'Custom'
    }
<<<<<<< HEAD
  })

  .constant('AUTH_EVENTS', {
    loginSuccess: 'auth-login-success',
    loginFailed: 'auth-login-failed',
    logoutSuccess: 'auth-logout-success',
    sessionTimeout: 'auth-session-timeout',
    notAuthenticated: 'auth-not-authenticated',
    notAuthorized: 'auth-not-authorized'
  })
  .constant('USER_ROLES', {
    all: '*',
    admin: 'ADMIN',
    user: 'USER',
    guest: 'GUEST'
  });

})();
=======
  });
>>>>>>> 8faae942766808f1544e0d552197457ca274c18d

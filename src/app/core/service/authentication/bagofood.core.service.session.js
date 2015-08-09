(function () {
  'use strict';

  angular.module('bagofood.core.service.session', [])
    .service('SessionService', function () {

      this.user = {
        userId: null,
        userName: null,
        userRole: null,
        userEmail: null
      };

      this.create = function (userId, userName, userRole, userEmail) {
        this.user.userId = userId;
        this.user.userName = userName;
        this.user.userRole = userRole;
        this.user.userEmail = userEmail;
      };

      this.destroy = function () {
        this.user.userId = null;
        this.user.userName = null;
        this.user.userRole = null;
        this.user.userEmail = null;
      };

      this.getUser = function () {
        return (this.user.userId !== null) ? this.user : null;
      }

    });
})();

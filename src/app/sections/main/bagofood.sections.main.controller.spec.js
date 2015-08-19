<<<<<<< HEAD
(function () {
  'use strict';

  describe('controllers', function () {
    var scope;

    beforeEach(module('bagOfood'));

    beforeEach(inject(function ($rootScope) {
      scope = $rootScope.$new();
    }));

    it('should define more than 5 awesome things', inject(function ($controller) {
      expect(scope.awesomeThings).toBeUndefined();

      $controller('MainCtrl', {
        $scope: scope
      });

      expect(angular.isArray(scope.awesomeThings)).toBeTruthy();
      expect(scope.awesomeThings.length > 5).toBeTruthy();
    }));
  });
})();
=======
'use strict';

describe('controllers', function(){
  var scope;

  beforeEach(module('bagOfood'));

  beforeEach(inject(function($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should define more than 5 awesome things', inject(function($controller) {
    expect(scope.awesomeThings).toBeUndefined();

    $controller('MainCtrl', {
      $scope: scope
    });

    expect(angular.isArray(scope.awesomeThings)).toBeTruthy();
    expect(scope.awesomeThings.length > 5).toBeTruthy();
  }));
});
>>>>>>> 8faae942766808f1544e0d552197457ca274c18d

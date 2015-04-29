'use strict';

describe('Controller: FoodlistCtrl', function () {

  // load the controller's module
  beforeEach(module('bagOFoodApp'));

  var FoodlistCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FoodlistCtrl = $controller('FoodlistCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

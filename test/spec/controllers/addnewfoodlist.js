'use strict';

describe('Controller: AddnewfoodlistCtrl', function () {

  // load the controller's module
  beforeEach(module('bagOFoodApp'));

  var AddnewfoodlistCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddnewfoodlistCtrl = $controller('AddnewfoodlistCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

'use strict';

describe('Service: foodListService', function () {

  // load the service's module
  beforeEach(module('bagOFoodApp'));

  // instantiate service
  var foodListService;
  beforeEach(inject(function (_foodListService_) {
    foodListService = _foodListService_;
  }));

  it('should do something', function () {
    expect(!!foodListService).toBe(true);
  });

});

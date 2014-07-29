'use strict';

describe('Service: turtleService', function () {

  // load the service's module
  beforeEach(module('tmntApp'));

  // instantiate service
  var turtleService;
  beforeEach(inject(function (_turtleService_) {
    turtleService = _turtleService_;
  }));

  it('should do something', function () {
    expect(!!turtleService).toBe(true);
  });

});

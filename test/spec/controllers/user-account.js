'use strict';

describe('Controller: UserAccountCtrl', function () {

  // load the controller's module
  beforeEach(module('pmsApp'));

  var UserAccountCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UserAccountCtrl = $controller('UserAccountCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(UserAccountCtrl.awesomeThings.length).toBe(3);
  });
});

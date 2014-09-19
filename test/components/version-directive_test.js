'use strict';

describe('myApp.version module', function() {
  var $compile;
  var $rootScope;

  // load the app module 
  beforeEach(module('myApp.version'));

  // initialize the directive
  beforeEach(module(function($provide) {
      $provide.value('version', 'TEST_VER');
  }));

  beforeEach(inject(function(_$compile_, _$rootScope_) {
    $compile = _$compile_;
    $rootScope = _$rootScope_;
  }));

  it('should show current version', function() {
    var element = $compile('<span app-version></span>')($rootScope);
    expect(element.text()).toEqual('TEST_VER');
  });
});

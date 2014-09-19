describe('Increment Controller', function() {
  var scope, controller; 

  beforeEach(module('myApp'));
  
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    controller = $controller('IncrementController', {
      $scope: scope
    });
  }));

  it('should have an IncrementController', function() {
    expect(controller).toBeDefined();
  });

  it('should initialize count to 0', function() {
    expect(scope.count).toBe(0);
  });

  it('should increment count', function() {
    scope.increment();
    expect(scope.count).toBe(1);
  });
});

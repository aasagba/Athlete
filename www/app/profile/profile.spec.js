/**
 * Created by adrianasagba on 12/04/2017.
 */
/**
 * Created by adrianasagba on 11/04/2017.
 */
describe('AthleteApp Profile', function () {

  var controller, scope;

  beforeEach(module('athleteApp'));
  beforeEach(module('starter.controller'));

  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    controller = $controller('profileCtrl', {
      $scope: scope
    });
    controller.$onInit();
  }));

  it('should have a ctrl', function () {
    expect(controller).toBeDefined();
  });

  it('should have profiles', function () {
    expect(controller.profiles).toBeDefined();
  });

});

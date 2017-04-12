/**
 * Created by adrianasagba on 11/04/2017.
 */
describe('AthleteApp Training Plans', function () {

  var controller, scope;

  beforeEach(module('athleteApp'));
  beforeEach(module('starter.controller'));

  beforeEach(inject(function($controller, $rootScope) {
    //scope = $rootScope.$new();
    controller = $controller('trainingPlanCtrl', {
      $scope: $rootScope.$new()
    });
    console.log('controller: ', JSON.stringify(controller));
  }));

  it('should have a ctrl', function () {
    expect(controller).toBeDefined();
  });

  it('should have training plans', function () {
    expect(controller.plans).toBeDefined();
  });

});

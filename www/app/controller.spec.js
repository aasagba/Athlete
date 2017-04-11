/**
 * Created by adrianasagba on 08/04/2017.
 */
describe('AthleteApp', function () {

  var controller, scope, timeout, ionicModal;

  beforeEach(module('starter.controller'));

  beforeEach(inject(function($controller, $rootScope, $timeout) {
    scope = $rootScope.$new();
    timeout = $timeout;

    function fakeTemplate() {
      return { then:function(){}}
    }
    ionicModal = {
      fromTemplateUrl: jasmine.createSpy('ionicModal.fromTemplateUrl').and.callFake(fakeTemplate)
    };

    controller = $controller('appCtrl', {
      $scope: scope,
      $timeout: timeout,
      $ionicModal: ionicModal
    });
  }));

  describe('AthleteApp module and ctrl', function () {
    it('should have a ctrl', function () {
      expect(controller).toBeDefined();
    });
  });

});

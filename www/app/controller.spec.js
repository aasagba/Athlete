/**
 * Created by adrianasagba on 08/04/2017.
 */
describe('AthleteApp', function () {

  beforeEach(module('starter.controller'));

  var createController, scope, ionicModal, timeout;

    beforeEach(inject(function($controller, $rootScope) {
      scope = $rootScope.$new();
      createController = function () {
        return $controller('appCtrl', {
          '$scope': scope
        });
      }
      //$controller = _$controller_;
    }));

    describe('AthleteApp module and ctrl', function () {
      it('should have a ctrl', function () {
        var controller = createController();
        expect(controller).toBeDefined();
      });
    });



});

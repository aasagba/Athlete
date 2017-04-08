describe('AthleteApp', function () {

  describe('AthleteApp module and ctrl', function () {

      var $ctrl;

      beforeEach(module('athleteApp'));

      beforeEach(inject(function ($controller) {
          $ctrl = $controller('AppCtrl');
      }));

      it('should have a ctrl', function () {
        expect($ctrl).toBeDefined();
      });

  });

});

/**
 * Created by adrianasagba on 06/04/2017.
 */
(function () {
    'use strict';

    angular.module('athleteApp').controller('trainingPlanCtrl', trainingPlanCtrl);

    trainingPlanCtrl.$inject = ['$scope'];

    function trainingPlanCtrl ($scope) {
      console.log('plans');

      $scope.plans = [
        { title: 'BoxFit', id: 1 },
        { title: 'RunFit', id: 2 },
        { title: 'SnowFit', id: 3 }
      ];
    }

})();

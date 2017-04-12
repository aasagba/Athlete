/**
 * Created by adrianasagba on 06/04/2017.
 */
(function () {
    'use strict';

    angular.module('athleteApp').controller('trainingPlanCtrl', trainingPlanCtrl);

    trainingPlanCtrl.$inject = ['$scope'];

    function trainingPlanCtrl () {
      console.log('plans');
      var vm = this;
      vm.plans = [];

      vm.$onInit = function () {
        console.log('firing');
        vm.plans = [
          { title: 'BoxFit', id: 1 },
          { title: 'RunFit', id: 2 },
          { title: 'SnowFit', id: 3 }
        ];
      }

      vm.$onInit();

      console.log(vm.plans);
      //$scope.$digest();
    }

})();

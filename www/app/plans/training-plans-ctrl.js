/**
 * Created by adrianasagba on 06/04/2017.
 */
(function () {
    'use strict';

    angular.module('athleteApp').controller('trainingPlanCtrl', trainingPlanCtrl);

    trainingPlanCtrl.$inject = ['$scope','trainingPlanService'];

    function trainingPlanCtrl ($scope, trainingPlanService) {
      console.log('plans');
      var vm = this;
      vm.plans = [];

      vm.$onInit = function () {
        trainingPlanService.getPlans().then(function (data) {
          vm.plans = data;
        });
      }

    }

})();

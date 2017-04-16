/**
 * Created by adrianasagba on 13/04/2017.
 */
(function () {
    'use strict';

    angular
      .module('athleteApp')
      .factory('trainingPlanService',trainingPlanService);

     trainingPlanService.$inject = ['$http'];



     function trainingPlanService($http) {

       var plans = [];

       return {
         getPlan: getPlan,
         getPlans: getPlans
       };

       function getPlans () {
         //return $http.get('app/stubs/plans.json');
         return $http.get("app/stubs/plans.json")
           .then(function(response) {
             return response.data;
           });
       };

       function getPlan (id) {
         angular.forEach(plan, function (value, key) {
           if (value === id) {
             return value;
           }
         });
       };
     }

})();

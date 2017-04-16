/**
 * Created by adrianasagba on 12/04/2017.
 */
/**
 * Created by adrianasagba on 06/04/2017.
 */
(function () {
  'use strict';

  angular.module('athleteApp').controller('profileCtrl', profileCtrl);

  profileCtrl.$inject = ['$stateParams'];

  function profileCtrl ($stateParams) {
    var vm = this;
    vm.id = $stateParams.planId;
    vm.profiles = [];

    vm.$onInit = function () {
      vm.profiles = [
        { title: 'BoxFit', id: 1 },
        { title: 'RunFit', id: 2 },
        { title: 'SnowFit', id: 3 }
      ];
    }

    vm.$onInit();

    console.log(vm.id);
    //$scope.$digest();
  }

})();

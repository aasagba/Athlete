/**
 * Created by adrianasagba on 12/04/2017.
 */
/**
 * Created by adrianasagba on 06/04/2017.
 */
(function () {
  'use strict';

  angular.module('athleteApp').controller('profileCtrl', profileCtrl);

  profileCtrl.$inject = ['$stateParams', 'mockAthleteApi'];

  function profileCtrl ($stateParams, mockAthleteApi) {
    var vm = this;
    vm.id = $stateParams.planId;
    vm.title = $stateParams.planTitle;
    vm.profiles = [];
    vm.profile = {};
/*    vm.$onInit = function () {
      vm.profiles = [
        { title: 'BoxFit', id: 1 },
        { title: 'RunFit', id: 2 },
        { title: 'SnowFit', id: 3 }
      ];
    }

    vm.$onInit();*/

    test();

    function test() {
      var profileList = mockAthleteApi.profiles();
      console.log(JSON.stringify(profileList));
      vm.name = profileList[0].name;
      vm.image = profileList[0].image;
      vm.content = profileList[0].content;

    }

    console.log(vm.id);
    //$scope.$digest();
  }

})();


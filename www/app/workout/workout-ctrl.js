/**
 * Created by adrianasagba on 16/04/2017.
 */
(function () {
    'use strict';

  angular.module('athleteApp').controller('workoutCtrl', workoutCtrl);

  workoutCtrl.$inject = ['$timeout'];

  function workoutCtrl ($timeout) {
    console.log('workoutCtrl');

    var vm = this;
    var stopped;
    var last = "";
    vm.counter = 5;
    vm.complete = false;
    vm.started = false;

    vm.stop = function () {
      vm.started = !vm.started;
    }

    vm.countdown = function (count) {

      // if same timer clicked twice stop
      if (count === last) {
        if (!vm.complete) {
          vm.stop(count);
          last = "";
          return
        }
      }

      // stop current count and start new one
      vm.stop(count);
      vm.complete = false;
      vm.started = true;
      vm.start(count);

      // save last click action
      last = count;
    }

    // start countdown
    vm.start = function (count) {
      if (vm.started) {
        vm.counter = count;
        stopped = $timeout(function () {
          vm.counter--;
          if (vm.counter >= 0) {
            vm.start(vm.counter);
          } else {
            vm.complete = true;
            vm.started = false;
            vm.counter = count;
          }
        }, 1000);
      } else {
        vm.stop(count);
      }
    };

    // stop countdown
    vm.stop = function (count) {
      $timeout.cancel(stopped);
      vm.counter = count;
      vm.complete = false;
      vm.started = false;
    }
  }

})();

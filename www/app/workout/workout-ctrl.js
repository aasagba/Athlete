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

    vm.groups = [
      {
        "id": 1,
        "name": "WARMUP",
        "iconURL": "http://ionicframework.com/img/docs/venkman.jpg",
        "childItems": [
          {
            "childName": "Warmup 1",
            "iconUrl": "http://ionicframework.com/img/docs/venkman.jpg",
            "complete": true
          },
          {
            "childName": "Warmup 2",
            "iconUrl": "http://ionicframework.com/img/docs/venkman.jpg",
            "complete": false
          },
          {
            "childName": "Warmup 3",
            "iconUrl": "http://ionicframework.com/img/docs/venkman.jpg",
            "complete": false
          }
        ]
      },
      {
        "id": 2,
        "name": "WORKOUT",
        "iconURL": "http://ionicframework.com/img/docs/barrett.jpg",
        "childItems": [
          {
            "childName": "Exercise 1",
            "iconUrl": "http://ionicframework.com/img/docs/barrett.jpg",
            "complete": false
          },
          {
            "childName": "Exercise 2",
            "iconUrl": "http://ionicframework.com/img/docs/barrett.jpg",
            "complete": false
          },
          {
            "childName": "Exercise 3",
            "iconUrl": "http://ionicframework.com/img/docs/barrett.jpg",
            "complete": false
          }
        ]
      }
    ];

    vm.toggleDone = function (complete, $event) {
    $event.preventDefault();
      $event.stopPropagation();
      $event.preventDefault();
      console.log('toggleDone');
      console.log(!complete);
      return !complete;
    }

    vm.toggleGroup = function(group) {
      if (vm.isGroupShown(group)) {
        vm.shownGroup = null;
      } else {
        vm.shownGroup = group;
      }
      // $ionicScrollDelegate.resize();
    }

    vm.toggleSubGroup = function(item) {
      if (vm.isSubGroupShown(item)) {
        vm.shownChild = null;
      } else {
        vm.shownChild = item;
      }
      // $ionicScrollDelegate.resize();
    }

    vm.isGroupShown = function(group) {
      return vm.shownGroup === group;
    }

    vm.isSubGroupShown = function(item) {
      return vm.shownChild === item;
    }

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

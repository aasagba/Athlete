// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
(function () {
  'use strict';

  angular.module('athleteApp', [
    'ionic',
    'starter.controller'
  ])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      if(window.cordova && window.cordova.plugins.keyboard) {
        cordova.plugins.keyboard.hideKeyboardAccessoryBar(true);
      }
      if(window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })

  .config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('app', {
        abstract: true,
        url: "/app",
        templateUrl: "app/layout/menu-layout.html",
        controller: 'appCtrl'
      })
      .state('app.plans', {
        url: '/plans',
        views: {
          'menuContent': {
            templateUrl: 'app/plans/training-plans.html'
          }
        }
      })
      .state('app.home', {
        url: '/home',
        views: {
          'menuContent': {
            templateUrl: 'app/home/home.html'
          }
        }
      })
      .state('app.profile', {
        url: '/plans/:planId',
        views: {
          'menuContent': {
            templateUrl: 'app/profile/profile.html'
          }
        }
      })
      .state('app.workout', {
        url: '/workout',
        views: {
          'menuContent': {
            templateUrl: 'app/workout/workout.html'
          }
        }
      })

    $urlRouterProvider.otherwise('/app/home');

  });

})();

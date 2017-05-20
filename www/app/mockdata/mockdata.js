/**
 * Created by adrianasagba on 22/04/2017.
 */
(function () {
    'use strict';

     angular
       .module('athleteApp.mockdata', [
        'ngMockE2E',
        'ngStorage'
       ])
       .run(run);

     function run($httpBackend, mockAthleteApi) {
        $httpBackend.whenGET('/\/profiles\/(\w+)\/(\d+)/').respond(mockAthleteApi.profiles());
        $httpBackend.whenGET('app/workout/workout.html').passThrough();
       $httpBackend.whenGET('app/profile/profile.html').passThrough();
       $httpBackend.whenGET('app/home/home.html').passThrough();
       $httpBackend.whenGET('app/plans/training-plans.html').passThrough();
       $httpBackend.whenGET('app/layout/menu-layout.html').passThrough();
       $httpBackend.whenGET('templates/login.html').passThrough();
       $httpBackend.whenGET('app/stubs/plans.json').passThrough();
     }
})();

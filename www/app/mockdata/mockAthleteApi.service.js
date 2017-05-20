/**
 * Created by adrianasagba on 22/04/2017.
 */
(function () {
    'use strict';

     angular
       .module('athleteApp.mockdata')
       .factory('mockAthleteApi', mockAthleteApi);

     function mockAthleteApi($localStorage) {

       return {
         profiles: profiles
       };

        console.log('in mockAthleteApi');

        $localStorage['profiles'] = $localStorage['profiles'] || fakeProfileList();

        function profiles() {
          //return $localStorage['profiles'];
          return fakeProfileList();
        }

        function fakeProfileList() {
          var list = [];
          for (var i = 0; i < 3; i++) {
            list.push({
              id: i,
              name: faker.name.findName(),
              image: faker.image.sports(),
              content: faker.lorem.paragraphs(),
              createdAt: faker.date.past(),
              updatedAt: faker.date.recent()
            });
          }
          return list;
        }

     }

})();

let app = angular.module('contactApp', []);

app.controller('FriendList', function ($scope) {
  $scope.friends = [{
    firstName: 'John',
    lastName: 'Johnson',
    number: '703-534-7272',
    email: 'jj@yahoo.com',
    address1: '845 Main St.',
    city: 'Kansas City',
    state: 'MO',
    zip: '88809',
    comments: [{date: '3/25/18', body: 'met John at the gym'}],
    friends: ['Kim Smith', 'Katie Bell']
  },

  {
    firstName: 'George',
    lastName: 'Mason',
    number: '202-667-7696',
    email: 'GEMA@yahoo.com',
    address1: '123 Smith St.',
    city: 'Arlington',
    state: 'VA',
    zip: '22209',
    comments: [{date: '2/5/18', body: 'met George in HS'}],
    friends: ['Jake Power', 'Chris Bettis']
  },

  {
    firstName: 'Stacy',
    lastName: 'Fan',
    number: '626-778-5678',
    email: 'fanstacy@gmail.com',
    address1: '90 Park Pl.',
    city: 'New York',
    state: 'NY',
    zip: '10008',
    comments: [{date: '1/25/18', body: 'met Stacy at HH'}],
    friends: ['Kim Taylor']
  }];
  
})





// firstName: {type: String, required: true, max: 100, lowercase: true, trim: true},
// lastName: {type: String, required: true, max: 100, lowercase: true, trim: true},
// number: {type: String, required: true, max: 100, lowercase: true, trim: true},
// email: {type: String, max: 100, lowercase: true, trim: true},
// address1: {type: String, max: 200, lowercase: true, trim: true},
// address2: {type: String, max: 200, lowercase: true, trim: true},
// city: {type: String, max: 100, lowercase: true, trim: true},
// state: {type: String, min: 2, max: 2, uppercase: true, trim: true},
// zip: {type: String, min: 5, max: 5, lowercase: true, trim: true},
// comments: [{date: Date, body: String}],
// friends: Array







// app.component('friendList', {
// 	templateUrl: '../templates/friendList.html',
//   // controller: FriendList
// });
// let app = angular.module('contactApp', []);

app.controller('FriendList', function ($scope) {
  this.friends = [{
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

  // $scope.showMe = false;

  // $scope.friendDetails = function(friend, $index) {
  //   $scope.showMe = !$scope.showMe;
  //   console.log($index, friend);
  // };
  
})


app.component('friends', {
	templateUrl: '../templates/friendList.html',
  controller: 'FriendList'
});
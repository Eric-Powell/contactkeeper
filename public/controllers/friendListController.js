// let app = angular.module('contactApp', []);

app.controller('FriendListCtrl', ['$scope', 'FriendFactory', function($scope, FriendFactory) {

  // console.log(FriendFactory.getFriends())
  FriendFactory.getFriends().then((person) => {
    this.friends = person;
    console.log(this.friends)
  }).catch((err) => console.error('There was an error in the FriendListCtrl getting your friend list: ', err));

  // this.friends = [{
  //   firstName: 'John',
  //   lastName: 'Johnson',
  //   number: '703-534-7272',
  //   email: 'jj@yahoo.com',
  //   address1: '845 Main St.',
  //   city: 'Kansas City',
  //   state: 'MO',
  //   zip: '88809',
  //   notes: [{date: '3/25/18', body: 'met John at the gym'}],
  //   friends: ['Kim Smith', 'Katie Bell']
  // },

  // {
  //   firstName: 'George',
  //   lastName: 'Mason',
  //   number: '202-667-7696',
  //   email: 'GEMA@yahoo.com',
  //   address1: '123 Smith St.',
  //   city: 'Arlington',
  //   state: 'VA',
  //   zip: '22209',
  //   notes: [{date: '2/5/18', body: 'met George in HS'}],
  //   friends: ['Jake Power', 'Chris Bettis']
  // },

  // {
  //   firstName: 'Stacy',
  //   lastName: 'Fan',
  //   number: '626-778-5678',
  //   email: 'fanstacy@gmail.com',
  //   address1: '90 Park Pl.',
  //   address2: 'APT 5B',
  //   city: 'New York',
  //   state: 'NY',
  //   zip: '10008',
  //   notes: [{date: '1/25/18', body: 'met Stacy at HH'}, {date: '2/2/18', body: 'hungout in NYC'}],
  //   friends: ['Kim Taylor']
  // }];

  this.orderProp = 'firstName';
}]);



app.component('friendList', {
	templateUrl: '../templates/friendList.html',
  controller: 'FriendListCtrl'
});
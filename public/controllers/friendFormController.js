app.controller('FriendFormCtrl', ['$scope', 'FriendFactory', function ($scope, FriendFactory) {
	this.addFriendInfo = () => FriendFactory.addFriend(this.friend);
}]);

app.component('friendForm', {
  templateUrl: '../templates/friendForm.html',
  controller: 'FriendFormCtrl'
});
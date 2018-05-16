app.controller('FriendFormCtrl', ['$scope', 'FriendFactory', function ($scope, FriendFactory) {
	this.addFriendInfo = () => {
    FriendFactory.addFriend(this.friend);
    // $state.reload();
  }
}]);

app.component('friendForm', {
  templateUrl: '../templates/friendForm.html',
  controller: 'FriendFormCtrl', 
  bindings: {friends: '<'}
});
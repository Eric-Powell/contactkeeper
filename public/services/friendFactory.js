app.factory('FriendFactory', ['$http', function ($http) {	

	return {
    getFriends: () => {
      return $http({
        method: 'GET',
        url: '/friends',
      }).then((res) => res.data).catch((err) => console.error('http request error getting list of friends: ', err))
    },

    addFriend: (friendInfo) => {
      return $http({
        method: 'POST',
        url: '/friends',
        // headers: {'Content-Type': 'application/json'},
        data: friendInfo
      })
    }
	}
}]);
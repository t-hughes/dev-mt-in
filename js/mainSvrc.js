app.service('mainSvrc', function($http, $q) {

    //Stores users' data in local storage after clicking the save button on either form.

    this.createUser = function(user) {
        localStorage.setItem('profile', JSON.stringify(user));
        return user;
    };

    this.checkForCurrentUser = function() {
        var deferred = $q.defer();
        //check localstorage for user key
        if (localStorage.getItem('profile')) {

            deferred.resolve(localStorage.profile);
        } else {

            deferred.reject();
        }
        return deferred.promise;
    };


///API////
this.getPeople = function(name){
		var deferred = $q.defer();
		$http({
			method: 'GET',
			url: 'http://connections.devmounta.in/api/profiles?name=' + name
		}).then(function(res){
			deferred.resolve(res.data);
		})
		return deferred.promise;
	}

    //gets searched user's profile by id
	this.getProfile = function(id){
	  var deferred = $q.defer();
		$http({
			method: 'GET',
			url: 'http://connections.devmounta.in/api/profiles/' + id
		}).then(function(res){
			deferred.resolve(res.data);
		})
		return deferred.promise;
	}

    //add and remove friend buttons
    var friends = [];
    this.currentlyFriends = false;
    	this.addFriend = function(obj) {
            this.currentlyFriends = true;
            for (var i = 0; i < friends.length; i++){
    			if (friends[i]._id === obj._id){
    				return;
    			}
    		}
    		friends.push(obj);
    	}


        this.removeFriend = function(obj) {
            this.currentlyFriends = false;
            for (var i = friends.length - 1; i >= 0; i--) {
                if (friends[i]._id === obj._id) {
                    friends.splice(i, 1);
                }
            }
        };


    	this.getFriends = function(){
    		return friends;
    	}

});

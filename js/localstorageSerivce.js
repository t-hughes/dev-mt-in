angular.module('socialInternApp').service('localstorageService', function() {
  var userProfile = {};
  var userFriends = [];

  localStorage.userProfile;
  localStorage.userFriends;

  this.saveUserFriendsLs = function() {
    localStorage.userFriends = JSON.stringify(userFriends);
  };

  this.storeUserProfile = function(profileObj) {
    userProfile = profileObj;
    localStorage.userProfile = JSON.stringify(profileObj);
  };

  this.getUserProfile = function() {
    return JSON.parse(localStorage.userProfile);
  };

  this.getUserFriends = function() {
    return JSON.parse(localStorage.userFriends);
  };

  this.addFriendToUserFriends = function(profileObj) {
    userFriends.push(profileObj);
    this.saveUserFriendsLs();
  };

  this.removeFriendFromUserFriends = function(profileObj) {
    for( var i = userFriends.length - 1; i >= 0; i--) {
      if (userFriends[i].name === profileObj.name) {
        userFriends.splice(i, 1);
      }
    }
    this.saveUserFriendsLs();
  };

  if (localStorage.userProfile && localStorage.userFriends) {
    this.userProfile = this.getUserProfile();
    this.userFriends = this.getUserFriends();
  }
  else {
    localStorage.userProfile = {};
    localStorage.userFriends = [];
  }

});

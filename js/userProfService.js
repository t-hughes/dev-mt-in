angular.module('socialInternApp').service('userProfService', function() {


  this.createUser = function(profileObj) {
    userProfile = profileObj;
    localStorage.setItem('userProfile', JSON.stringify(profileObj));
  };

this.saveUserFriends = function(profileObj) {
  userProfile = profileObj;
  localStorage.userProfile = JSON.stringify(profileObj);
};

this.storeUserProfile = function(profileObj) {
    userProfile = profileObj;
    localStorage.userProfile = JSON.stringify(profileObj);
  };

this.getUserProfile = function() {
  return JSON.parse(localStorage.userProfile);
};

this.getUserFriends = function() {
    return JSON.parse( localStorage.userFriends );
  };

  this.addFriendToUserFriends = function(profileObj) {
    userFriends.push(profileObj);
    this.saveUserFriends();
  };

  this.removeFriendFromUserFriends = function(profileObj) {
    for( var i = userFriends.length - 1; i >= 0; i--) {
      if (userFriends[i].name === profileObj.name) {
        userFriends.splice(i, 1);
      }
    }
    this.saveUserFriends();
  };

  var userProfile = {};
  var userFriends = [];

  localStorage.userProfile;
  localStorage.userFriends;

  if (localStorage.userProfile && localStorage.userFriends) {
    userProfile = this.getUserProfile();
    userFriends = this.getUserFriends();
  }
  else {
    localStorage.userProfile = {};
    localStorage.userFriends = [];
  }
});

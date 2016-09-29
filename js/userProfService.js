angular.module('socialInternApp').service('userProfService', function() {


this.createUser = function(profileObj) {
  userProfile = profileObj;
  localStorage.userProfile = JSON.stringify(profileObj);
};

this.storeUserProfile = function( profileObj ) {
    userProfile = profileObj;
    localStorage.userProfile = JSON.stringify(profileObj);
  };

this.getUserProfile = function() {
  return JSON.parse(localStorage.userProfile);
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

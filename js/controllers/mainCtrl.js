app.controller('mainCtrl', function($scope, $state, mainSvrc){

  $scope.$state = $state;
//Local storage for new user profile and updated profile.//
  $scope.currentUser = JSON.parse(localStorage.getItem('profile'));


  $scope.createUser = function(obj) {
    $scope.currentUser = mainSvrc.createUser(obj);
    $state.go('landing');
    swal(
      '',
      'Your Information has been saved!',
      'success'
      );
  };

  $scope.friendProfile = {};
  $scope.userFriends = [];
  $scope.currentlyFriends = false;

  $scope.addFriend = function(obj) {
    $scope.userFriends = mainSvrc.addFriend($scope.friendProfile);
    $scope.currentlyFriends = true;
  };

  $scope.removeFriend = function(obj) {
    mainSvrc.removeFriend
    ($scope.friendProfile);
    $scope.currentlyFriends = false;
  };
});

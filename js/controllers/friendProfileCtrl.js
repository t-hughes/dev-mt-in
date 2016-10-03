app.controller('friendProfileCtrl', function($scope, $state, mainSvrc) {

//Pulls users' ID from the friends array in the mainSvrc
  $scope.friendID = $state.params.id;

  $scope.friend = mainSvrc.getFriendById($scope.friendID);


});

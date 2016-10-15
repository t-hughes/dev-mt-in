app.controller('friendSearchCtrl', function($scope, $state, mainSvrc, checkUser) {

//Pulls friends profile data from the friends array in the mainSvrc
  $scope.getFriends = mainSvrc.getFriends();
  
});

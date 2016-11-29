app.controller('friendProfileCtrl', function($scope, $stateParams, mainSvrc) {

    //Pulls users' ID from the friends array in the mainSvrc
    $scope.getProfile = function(id){
    		mainSvrc.getProfile(id).then(function(res){
    			$scope.searchedProfile = res;
    			for (var i = 0; i < $scope.searchedProfile.name.length; i++){
    				if ($scope.searchedProfile.name.charAt(i) === " "){
    					$scope.searchedProfile.first = $scope.searchedProfile.name.slice(0,i);
    					$scope.searchedProfile.last = $scope.searchedProfile.name.slice(i+1);
    				}
    			}
    			if ($scope.searchedProfile.first === undefined){
    				$scope.searchedProfile.first = name;
    			}
    		})
    	}

    	$scope.getProfile($stateParams.id);


    //add and remove friend buttons
// $scope.currentlyFriends = false;
      $scope.addFriend = mainSvrc.addFriend;
      $scope.removeFriend = mainSvrc.removeFriend;
});

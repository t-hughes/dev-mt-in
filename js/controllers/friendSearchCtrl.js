app.controller('friendSearchCtrl', function($scope, $state, mainSvrc) {

    //Pulls friends profile data from the friends array in the mainSvrc
    // $scope.getFriends = mainSvrc.getFriends();

    $scope.searchFriends = function() {
      mainSvrc.searchFriends($scope.searchName).then(function(respose){
        $scope.friends = response.data;
      });
    };

});

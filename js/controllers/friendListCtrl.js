app.controller('friendListCtrl', function($scope, mainSvrc) {

    //brings in added friends
    $scope.friends = mainSvrc.getFriends();

});

app.controller('mainCtrl', function($scope, $state, mainSvrc) {

    $scope.$state = $state;

    //Local storage for new user profile and updated profile.//
    $scope.currentUser = JSON.parse(localStorage.getItem('profile'));


    $scope.createUser = function(obj, $event) {
        $scope.currentUser = mainSvrc.createUser(obj);
        $state.go('landing');
        swal(
            '',
            'Your Information has been saved!',
            'success'
        );
    };





    $scope.friendProfile = {};
    $scope.userFriends = mainSvrc.userFriends;
    $scope.currentlyFriends = false;

    $scope.addFriend = function(profileObj) {
        mainSvrc.addFriend($scope.friendProfile);
        $scope.userFriends = mainSvrc.userFriends;
        $scope.currentlyFriends = true;
    };

    $scope.removeFriend = function(profileObj) {
        mainSvrc.removeFriend($scope.friendProfile);
        $scope.currentlyFriends = false;
        $scope.userFriends = mainSvrc.userFriends;
    };
});
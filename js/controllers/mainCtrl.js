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

});

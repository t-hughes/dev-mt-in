angular.module('socialInternApp').controller('mainControl', function($scope, $state, mainService, userProfService){

  $scope.$state = $state;
  $scope.userProfile = {};
  $scope.friendProfile = {};
  $scope.userFriends = [];


  if (localStorage.userProfile && localStorage.userFriends) {
      $scope.userProfile = userProfService.getUserProfile();
      $scope.userFriends = userProfService.getUserFriends();
      $scope.isUserProfileLogged = true;
    }

  $scope.createUser = function(profileObj, $event) {
    $event.preventDefault();
    $scope.userProfile = profileObj;
    userProfService.createUser(profileObj);
    $state.go('landing');
    swal(
  'Welcome to the Club!',
  'Your Information has been saved!',
  'success'
  );
  };

  $scope.updateProfile = function(profileObj, $event) {
      $event.preventDefault();
      $scope.userProfile = userProfService.getUserProfile();

      for (var prop in profileObj) {
        if (profileObj[prop]) {
          $scope.userProfile[prop] = profileObj[prop];
        }
      }

      userProfService.storeUserProfile($scope.userProfile);
      $state.go('landing');
      swal(
    '',
    'Your Information has been updated!',
    'success'
    );
};


  $scope.getUserResults = function(){
    $scope.userResults = mainService.getUserResults();
  };
    $scope.getUserResults();
});

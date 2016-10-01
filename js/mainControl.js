angular.module('socialInternApp').controller('mainControl', function($scope, $state, mainService, userProfService){

  $scope.$state = $state;
  $scope.userProfile = {};
  $scope.friendProfile = {};
  $scope.userFriends = [];


  if (localStorage.userProfile && localStorage.userFriends) {
      $scope.userProfile = userProfService.getUserProfile();
      $scope.userFriends = userProfService.getUserFriends();
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

//   $scope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
// // Check whether user input form is submitted
// if(!formSubmitted){
// event.preventDefault();
// }
// });

//   var formSubmitted = false;
// $scope.createUser = function(profileObj, $event) {
    // I don't  think you need to preventDefault here, but not sure what you are trying to do.
    // If you just wrote the $event.preventDefault() so that user will not be navigated to landing page, you don't need it here.
    //$event.preventDefault();
//     $scope.userProfile = profileObj;
//     userProfService.createUser(profileObj);
//     formSubmitted = true;
//     $state.go('landing');
//     swal(
//         'Welcome to the Club!',
//         'Your Information has been saved!',
//         'success'
//     );
// };

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


//pulls users from mainService to the find friends page//
  $scope.getUserResults = function(){
    $scope.userResults = mainService.getUserResults();
  };
    $scope.getUserResults();



$scope.viewPotentialFriend = function(profileObj, $event) {
  $event.preventDefault();

  $scope.friendProfile = profileObj;
  $scope.currentlyFriends = false;
  $state.go('friend-profile');

  for(var i = 0; i < $scope.userFriends.length; i++) {
    if($scope.userFriends[i].name === profileObj.name) {
      $scope.currentlyFriends = true;
    }
  }
};

$scope.addFriend = function(profileObj) {
  userProfService.addFriendToUserFriends($scope.friendProfile);
  $scope.currentlyFriends = true;
};

$scope.removeFriend = function(profileObj) {
  userProfService.removeFriendFromUserFriends($scope.friendProfile);
  $scope.currentlyFriends = false;
};

});

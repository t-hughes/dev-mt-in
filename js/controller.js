angular.module('socialInternApp').controller('mainCtrl', function($scope, mainSrvc, localstorageService){

  $scope.InitialUserSave = function(profileObj, $event) {
    $event.preventDefault();
    $scope.userProfile = profileObj;
    localstorageService.storeUserProfile(profileObj);
    $scope.goToLandingPage();
    $scope.isUserProfileLogged = true;
  };

});

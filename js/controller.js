angular.module('socialInternApp').controller('mainCtrl', function($scope, $state, mainSrvc){

      $scope.save = function() {
          alert('saved!');
          $state.go('landing');
      };


      // $scope.save = function() {
      //     alert('saved!');
      //     $state.go('landing');
      // };
});

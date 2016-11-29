app.controller('friendSearchCtrl', function($scope, $state, mainSvrc) {

    //Pulls friends profile data from the friends array in the mainSvrc

    	$scope.getPeople = function(name){
    		mainSvrc.getPeople(name).then(function(res){
    			if (res.length > 6){
    				var peopleArray = [];
    				for (var i = 0; i < 6; i++){
    					peopleArray.push(res[i]);
    				}
    				$scope.people = peopleArray;
    			} else {
    				$scope.people = res;
    			}
    		})
    	}
});

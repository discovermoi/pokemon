var app = angular.module('angularTable', ['angularUtils.directives.dirPagination']);

app.controller('listdata',function($scope, $http){
	$scope.users = []; //declare an empty array
	$http.get("https://pokeapi.co/api/v2/pokemon?limit=151").success(function(response){
        $scope.users = response; //ajax request to fetch data into $scope.data
	});
	
	$scope.sort = function(keyname){
		$scope.sortKey = keyname;   //set the sortKey to the param passed
        if(keyname=="url"){$scope.sortKey = parseInt(keyname);}
		$scope.reverse = !$scope.reverse; //if true make it false and vice versa 
	}
});

var app = angular.module('videoSearch', []);

app.controller('MainController', function ($scope, $http){
	
	$scope.movies = [];
	//console.log($scope.movies);
		
	// this.map = function(data){

	// 	var mapArr = [];

	// 	$.map(data, function(n, i){
	// 		mapArr.push({name: n.Title, year:n.Year, type:n.Type});
	// 	});

	// 	console.log(mapArr);

	// };

//http://www.omdbapi.com/?plot&s
	$scope.search = function(query){

		var query = 'http://www.omdbapi.com/?t='+query+'&y=&plot=short&tomatoes=true';
		$http.get(query).success(function(data){
		 	console.log(data);
		 	$scope.movies.push(data);
		});
	};

	 
	

});



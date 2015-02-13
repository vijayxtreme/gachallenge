
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

	//var context = this;

	$scope.search = function(query){
		$http.get('http://www.omdbapi.com/?s='+query).success(function(data){
		 	console.log(data["Search"]);
		 	$scope.movies = data["Search"];
		});
	};

	 
	

});



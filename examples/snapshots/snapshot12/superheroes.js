var superheroesApp = angular.module('superheroesApp', []);

superheroesApp.factory("SuperheroesService", function($http) {
	return {
		list: function(callback) {
			$http.get('superheroes.json').success(callback);
		},
		isNonEmptyStr: function (str) {
			return (str != null && typeof(str) === "string" && 0 !== str.length);
		}
	};
});

superheroesApp.controller('SuperheroesCtrl', function($scope, SuperheroesService) {
	SuperheroesService.list(function(data) {
		$scope.superheroDataArray = data;
	});

	$scope.createSuperhero = function() {
		// Add to array
		$scope.superheroDataArray.push({
			name: $scope.newName,
			photo_url: $scope.newPhotoUrl
		});
		// Clear values
		$scope.newName = "";
		$scope.photo_url = "";
	};

	$scope.removeSuperhero = function(superheroData) {
		$scope.superheroDataArray.splice($scope.superheroDataArray.indexOf(superheroData), 1);
	};

	$scope.isValidName = function(str) {
		// This would need improvement if we are doing form validation, e.g. strip tags
		return SuperheroesService.isNonEmptyStr(str);
	};
	$scope.isValidUrl = function(str) {
		// This would need improvement if we are doing form validation, e.g. strip tags
		return SuperheroesService.isNonEmptyStr(str);
	};
});


var superheroControllers = angular.module('superheroControllers', []);

superheroControllers.controller('SuperheroesCtrl', function($scope, superheroesService) {
	superheroesService.list(function(data) {
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
		return superheroesService.isNonEmptyStr(str);
	};
	$scope.isValidUrl = function(str) {
		// This would need improvement if we are doing form validation, e.g. strip tags
		return superheroesService.isNonEmptyStr(str);
	};
});
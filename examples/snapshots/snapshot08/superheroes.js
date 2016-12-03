var superheroesApp = angular.module('superheroesApp', []);
superheroesApp.controller('SuperheroesCtrl', function($scope) {
	$scope.superheroDataArray = [
		{
			name: 'Batman',
			photo_url: '../../../images/avatars/batman.jpg'
		}
	];
});
angular.module('superheroesFactory', [])
	.factory('superheroesService', function($http) {
		return {
			list: function (callback) {
				$http.get('superheroes.json').success(callback);
			},
			isNonEmptyStr: function (str) {
				return (str != null && typeof(str) === "string" && 0 !== str.length);
			}
		};
	});

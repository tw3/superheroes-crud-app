// Initial data
superheroDataArray = [
	{ "name": "Superman", "photo_url": "../../../images/avatars/superman.jpg" },
	{ "name": "Batman", "photo_url": "../../../images/avatars/batman.jpg" },
	{ "name": "Batgirl", "photo_url": "../../../images/avatars/batgirl.jpg" },
	{ "name": "Daredevil", "photo_url": "../../../images/avatars/daredevil.jpg" },
	{ "name": "Nick Cage", "photo_url": "../../../images/avatars/nickcage.jpg" },
	{ "name": "Flash", "photo_url": "../../../images/avatars/flash.jpg" },
	{ "name": "Cyclops", "photo_url": "../../../images/avatars/cyclops.jpg" },
	{ "name": "Green Lantern", "photo_url": "../../../images/avatars/greenlantern.jpg" },
	{ "name": "Colossus", "photo_url": "../../../images/avatars/colossus.jpg" },
	{ "name": "Falcon", "photo_url": "../../../images/avatars/falcon.jpg" },
	{ "name": "Spiderman", "photo_url": "" }
];

(function($, _) {
	var jqSuperheroGrid, superheroCardTemplateStr;

	function init() {
		jqSuperheroGrid = $('.superhero-grid');
		superheroCardTemplateStr = $('#superheroCardTemplate').html();

		// Add all superheroes from local data
		$.each(superheroDataArray, function(idx, superheroData) { // If superheroDataArray is a large array use a vanilla for() loop to improve performance
			addSuperhero(superheroData);
		});
	}

	function addSuperhero(superheroData) {
		// Generate superhero card HTML using underscore's template engine
		var templateData = {
			superheroData: superheroData,
			isValidName: isValidName,
			isValidPhotoUrl: isValidPhotoUrl
		};
		var jqSuperheroCard = $(_.template(superheroCardTemplateStr, templateData));
		// Prepend to grid
		jqSuperheroCard.appendTo(jqSuperheroGrid);
	}

	function isValidName(str) {
		// This would need improvement if we are doing form validation, e.g. strip tags
		return isNonEmptyStr(str);
	}

	function isValidPhotoUrl(str) {
		// This would need improvement if we are doing form validation, e.g. strip tags and validation url syntax
		return isNonEmptyStr(str);
	}

	function isNonEmptyStr(str) {
		return (str != null && typeof(str) === "string" && 0 !== str.length);
	}

	$(document).ready(function() {
		init();
	})

})(jQuery, _);
(function($, _) {
	var jqSuperheroGrid, superheroCardTemplateStr;

	function init() {
		jqSuperheroGrid = $('.superhero-grid');
		superheroCardTemplateStr = $('#superheroCardTemplate').html();

		// Grab superhero data from the JSON file
		$.getJSON("superheroes.json", function(superheroDataArray) {
			// Add all superheroes from local data
			$.each(superheroDataArray, function(idx, superheroData) { // If superheroDataArray is a large array use a vanilla for() loop to improve performance
				addSuperhero(superheroData);
			});
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
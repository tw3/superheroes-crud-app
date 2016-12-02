(function($, _) {
	var jqFullName, jqPhotoURL, jqSuperheroGrid, superheroCardTemplateStr, zeroSuperheroesTemplateStr;

	function init() {
		// Cache stuff
		var jqMainForm = $('div#main-content > form');
		jqFullName = $('input[name="name"]', jqMainForm);
		jqPhotoURL = $('input[name="photo_url"]', jqMainForm);
		jqSuperheroGrid = $('.superhero-grid');
		superheroCardTemplateStr = $('#superheroCardTemplate').html();
		zeroSuperheroesTemplateStr = $('#zeroSuperheroesTemplate').html();

		// Grab superhero data from the JSON file
		$.getJSON("superheroes.json", function(superheroDataArray) {
			// Add all superheroes from local data
			$.each(superheroDataArray, function(idx, superheroData) { // If superheroDataArray is a large array use a vanilla for() loop to improve performance
				addSuperhero(superheroData);
			});

			// Create handler for createSuperhero()
			jqMainForm.submit(onSubmitForm);

			handleZeroSuperheroes();
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
		// Remove zero superheroes message and prepend to grid
		$('.emptySuperheroesMessage', jqSuperheroGrid).remove();
		jqSuperheroCard.appendTo(jqSuperheroGrid);
		// Add click handler to remove this superhero card
		$('.superhero-card-close', jqSuperheroCard).click(function() {
			// A more common approach is to assign each superhero-card a unique id and use that to remove it
			$(this).closest('.superhero-card').remove();
			// Handle zero superheroes
			handleZeroSuperheroes();
		});
	}

	function onSubmitForm(evt) {
		// Prevent actual form submission
		evt.preventDefault();
		// Assumption here is that Create is the only form submission, otherwise we'd need to look at the evt.target
		var superheroData = {
			name: jqFullName.val(),
			photo_url: jqPhotoURL.val()
		};
		addSuperhero(superheroData);
	}

	function handleZeroSuperheroes() {
		var numCards = $('.superhero-card', jqSuperheroGrid).length;
		if (numCards === 0) {
			jqSuperheroGrid.html(_.template(zeroSuperheroesTemplateStr, {}));
		}
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
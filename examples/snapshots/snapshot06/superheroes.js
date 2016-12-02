(function($, _) {
	var jqFullName, jqPhotoURL, jqCelebGrid, celebCardTemplateStr;

	function init() {
		// Cache stuff
		var jqMainForm = $('div#main-content > form');
		jqFullName = $('input[name="name"]', jqMainForm);
		jqPhotoURL = $('input[name="photo_url"]', jqMainForm);
		jqCelebGrid = $('.celeb-grid');
		celebCardTemplateStr = $('#celebCardTemplate').html();

		// Grab superhero data from the JSON file
		$.getJSON("superheroes.json", function(celebDataArray) {
			// Add all celebs from local data
			$.each(celebDataArray, function(idx, celebData) { // If celebDataArray is a large array use a vanilla for() loop to improve performance
				addCeleb(celebData);
			});

			// Create handler for createCeleb()
			jqMainForm.submit(onSubmitForm);
		});
	}

	function addCeleb(celebData) {
		// Generate celeb card HTML using underscore's template engine
		var templateData = {
			celebData: celebData,
			isValidName: isValidName,
			isValidPhotoUrl: isValidPhotoUrl
		};
		var jqCelebCard = $(_.template(celebCardTemplateStr, templateData));
		// Prepend to grid
		jqCelebCard.appendTo(jqCelebGrid);
	}

	function onSubmitForm(evt) {
		// Prevent actual form submission
		evt.preventDefault();
		// Assumption here is that Create is the only form submission, otherwise we'd need to look at the evt.target
		var celebData = {
			name: jqFullName.val(),
			photo_url: jqPhotoURL.val()
		};
		addCeleb(celebData);
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
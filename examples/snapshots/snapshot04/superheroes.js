// Initial data
celebDataArray = [
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
	var jqCelebGrid, celebCardTemplateStr;

	function init() {
		jqCelebGrid = $('.celeb-grid');
		celebCardTemplateStr = $('#celebCardTemplate').html();

		// Add all celebs from local data
		$.each(celebDataArray, function(idx, celebData) { // If celebDataArray is a large array use a vanilla for() loop to improve performance
			addCeleb(celebData);
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
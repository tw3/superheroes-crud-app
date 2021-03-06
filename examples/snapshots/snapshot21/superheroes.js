(function($) {
	function SuperheroCardModel(name, photoUrl) {
		var self = this;
		self.name = name;
		self.photoUrl = photoUrl;
		self.isValidName = function() {
			// This would need improvement if we are doing form validation, e.g. strip tags
			return isNonEmptyStr(this.name);
		};
		self.isValidPhotoUrl = function() {
			// This would need improvement if we are doing form validation, e.g. strip tags and validation url syntax
			return isNonEmptyStr(this.photoUrl);
		};
	}

	function SuperheroGridModel(superheroDataArray) {
		this.superheroCardModels = superheroDataArray.map(function(superheroData) {
			return new SuperheroCardModel(superheroData.name, superheroData.photo_url);
		});
	}

	function init() {
		$.getJSON("superheroes.json", function(superheroDataArray) {
			ko.applyBindings(new SuperheroGridModel(superheroDataArray));
		});
	}

	function isNonEmptyStr(str) {
		return (str != null && typeof(str) === "string" && 0 !== str.length);
	}

	$(document).ready(function() {
		init();
	})
})(jQuery);
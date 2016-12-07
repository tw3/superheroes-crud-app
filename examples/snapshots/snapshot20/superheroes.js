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

	function init() {
		ko.applyBindings(new SuperheroCardModel("Batman", "../../../images/avatars/batman.jpg"));
	}

	function isNonEmptyStr(str) {
		return (str != null && typeof(str) === "string" && 0 !== str.length);
	}

	$(document).ready(function() {
		init();
	})
})(jQuery);
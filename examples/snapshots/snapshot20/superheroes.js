(function($) {

	function SuperheroCardModel(name, photoUrl) {
		var self = this;
		self.name = name;
		self.photoUrl = photoUrl;
	}

	function init() {
		ko.applyBindings(new SuperheroCardModel("Batman", "../../../images/avatars/batman.jpg"));
	}

	$(document).ready(function() {
		init();
	})
})(jQuery);
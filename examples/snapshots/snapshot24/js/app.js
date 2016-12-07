requirejs.config({
	"baseUrl": "js/lib",
	"paths": {
		"app": "../app",
		"jquery": "//cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery",
		"knockout": "//cdnjs.cloudflare.com/ajax/libs/knockout/3.4.1/knockout-debug"
	}
});

// Load the main module to start the app
requirejs(["app/main"]);
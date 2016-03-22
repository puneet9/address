var Gbl = {
	
	

	actInd: null,
	currentPage: null,
		
	subscribeLabel : 'SUBSCRIBE MY PHONE',
	subscribed : false,
	
	API_ENDPOINT : 'http://smartivd.cloudapp.net/Service1.svc/',
	__windowStack: null,
	__getView: function(view) {
		// views are not preloaded, but loaded on request
		var viewView = view.substring(view.lastIndexOf('/') + 1);
		
		if (!this.views[viewView])
			Ti.include('/views/' + view + '.js');
			
		return this.views[viewView];
	},
	views: {},
	init: function() {
		this.__windowStack = new Array();
	},
	
	openView: function(view, options) {
		options = typeof options != 'undefined' ? options : {};
		defaultOptions = {
			theme:"Theme.AppCompat.Fullscreen",
			navBarHidden: true,			
			exitOnClose: this.__windowStack.length > 0 ? false : true,
			orientationModes: [Ti.UI.PORTRAIT, Ti.UI.UPSIDE_PORTRAIT],
			fullscreen: true,
			Gbl: this,			
			url: '/views/' + view + '.js',
			id: view
		};
		
		
		for (var o in options)
			defaultOptions[o] = options[o];
		
		var newWindow = Ti.UI.createWindow(defaultOptions);
		
		this.__windowStack.push(newWindow);
		
		this.__getView(view).call(newWindow, newWindow);
	},
	renderView: function() {
		this.__windowStack[this.__windowStack.length - 1].open();
	},
	closeView: function(view) {
		view = typeof view != 'undefined' ? view : null;
		
		var lastWindow = this.__windowStack.splice(this.__windowStack.length - 1, 1)[0];
		
		setTimeout(function(e)
		{
			lastWindow.close();
			lastWindow = null;
			
			if (!view) return;
			//this.openView(view);
		},50);
		
		
	}	
	
	
	
};
module.exports = Gbl;

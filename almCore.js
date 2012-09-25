
(function($) {
    $.almCore = {
    	debug: false,

    	setDebug: function (statut) {
    		this.debug = statut;
    	},
    	/*
    	 * Use this method when the end of dom is reached. It will trigger a coreRunned event
    	 * who can be binded to execute some usefull stuff.
    	 */
    	runCore: function() {
			this.triggerEvent('coreRunned');
		},
		/*
		 * Register a new listener with the jQuery bind method.
		 * Also, check parameters an throw an almCoreException is an invalid data is found.
		 */
		addListener: function(eventName, code, item) {
			try {
				if (typeof eventName === 'undefined' || typeof code !== 'function') {
					this.throwException(this.generateException(this, 'demo'));
				}
				if (typeof item === 'undefined') {
					item = $(document);
				}
				item.bind(eventName, code);
			} catch (e) {
				this.catchException(e);
			}
		},
		/* 
		 * This method must be used to throw new exception. 
		 * If your exception does not exist, please create it
		 * first, and please, documente it ;)
		 */
		throwException: function(e) {
			throw e;
		},
		catchException: function (e) {
			if (this.debug) {
				console.log(e);
			}
			console.log(e instanceof almException);
		},
		/* Please use this method to fire events */
		triggerEvent: function(eventName) {
			
				$(document).trigger(eventName);
			
		},

		/* Exceptions */
		generateException: function(error, errorMessage) {
			return {
				'name' : error,
				'message' : errorMessage
			}
		}
		/* Exception who should be used when required parameters */
		invalidParameters: function() {

		}

    };
    $.runAlmCore = function(params) {
    	var _opts = {
    		debug: true
    	};
    	_opts = $.extend(_opts, params);
    	this.almCore.setDebug(_opts.debug);
    }
})(jQuery);

$(function() {
	$.runAlmCore();
})

console.log($.almCore);
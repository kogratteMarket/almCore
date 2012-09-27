define(['jquery'], function($) {
	return {
		addListener: function(eventName, callback, container) {
			if (typeof container === 'undefined') {
				container = $(document);
			}
			console.log(eventName, callback, container);
			container.unbind(eventName).bind(eventName, callback);

		}
	};
});
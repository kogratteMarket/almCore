define(function() {
	return {
		displayMouseMoveMessage: function() {
			require(['stringUtils'], function(stringUtils) {
				console.log(stringUtils);
				alert(stringUtils.capitalize('clic event triggered'));
			});
		}
	}
});
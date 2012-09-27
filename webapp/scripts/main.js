require(["jquery", "eventsListener", "reactions"], function($, eventsListener, reactions) {
    //the jquery.alpha.js and jquery.beta.js plugins have been loaded.
    $(function() {
    	alert('toto');
    	eventsListener.addListener('click', reactions.displayMouseMoveMessage);
        
    });
});

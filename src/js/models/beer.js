window.beerApp = (window.beerApp || {});
window.beerApp.Beer = (function() {
    "use strict";

    var nextId = 0;

	var Beer = function( options ) {
		var now = (new Date()).getTime();
        var default_abv = 0;

        _.extend(this, {
            name: "Beer",
            brewery: null,
            description: null,
            abv: default_abv
        }, options);

        this.id = ++nextId;
        this.created_at = now;
        this.updated_at = now;
	};

    _.extend(Beer.prototype, {
        toString: function() {
            return this.name + "(" + (this.description || "?") + ") by " + 
                (this.brewery || "Unknown") + 
                " (abv " + (this.abv || "?") + "%)";
        }
    });

	return Beer;

})();
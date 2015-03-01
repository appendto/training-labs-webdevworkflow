window.beerApp = (window.beerApp || {});
window.beerApp.Beer = (function($) {
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

    Beer.find = function beerFinder(query, limit, cb) {
        // If the calling code didn't provide query or limit, but did give us a callback, use that!
        if (typeof query === "function") { cb = query; query = null; }
        if (typeof limit === "function") { cb = limit; limit = null; }
        
        // Some sane defaults...
        query = query || {};
        limit = limit || 10;
        cb = cb || function(){};

        if (query && typeof query !== "object") {
            // The 'setTimeout' call here keeps the 'find()' method asynchronous
            setTimeout(function() { cb(new Error("Sorry, but the query must be an object!")); }, 0);
            return;
        }
        if (limit && typeof limit !== "number") {
            setTimeout(function() { cb(new Error("Sorry, but the limit must be a number!")); }, 0);
            return;
        }

        // Now do our search...
        $.ajax({
            url: "/data.json",
            data: { query: query, limit: limit },
            dataType: "json",
            success: function findResults(results) {
                cb(results);
            },
            error: function findError(xhr) {
                window.console.warn("error finding beer:", xhr);
                cb(new Error("Unable to process beer search!"));
            }
        });
    };

	return Beer;

})(window.jQuery);
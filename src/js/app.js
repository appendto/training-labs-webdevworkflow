window.beerApp = (function() {
    "user strict";

    var App = function( options) {
        options = options || {};

        this.resources = options.resources || [];
        this.debug = true;

        if (options.viewModel && typeof options.viewModel == 'function') {
            this.activeViewModel = new options.viewModel();
            this.activeViewModel.initialize((options.complete || function(){}).bind(this));
        } else {
            (options.complete || function() {}).bind(this)();
        }
    };

    App.prototype = {
        constructor: App,
        activeViewModel: null,

        getName: function() {
            return "Beers"
        },
    };

    return App;

})();
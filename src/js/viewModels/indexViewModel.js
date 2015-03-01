window.beerApp = (window.beerApp || {});
window.beerApp.IndexViewModel = (function($, Beer) {
    "user strict";

    var IndexViewModel = function() {
        this.beers = [];
        this.favorites = [];

        _.bindAll( this, "addToFavorites", "removeFromFavorites" );
    };

    _.extend(IndexViewModel.prototype, {
        initialize: function(cb) {
            this.doSearch(null, 10, (function(beers) {
                this.beers = this.parse(beers);
                cb();
            }).bind(this));
        },

        render: function(node) {
            var beerContent = [];
            
            node = $(node);
            if (!node.length) {
                return;
            }

            beerContent = _.map(this.beers, function(beer) {
                var text = beer.toString();
                return text.replace(/\(([^\)]+)\)/g, "<span class='note'>($1)</span>");
            });

            node.append("<li>" + beerContent.join('</li><li>') + "</li>");
        },

        filterBeers: function(filter) {
            var filter = (filter && filter.toLowerCase());

            if ( !filter ) {
                return this.beers;
            } else {
                return _.filter( this.beers, function( item ) {
                    return item.name().toLowerCase().indexOf( filter ) > -1;
                });
            }
        },

        parse: function( beers ) {
            return _.map( beers, function( beer ) {
                return new Beer( beer );
            });
        },

        addToFavorites: function( beer ) {
            this.favorites.push( beer );
        },

        removeFromFavorites: function( beer ) {
            this.favorites.remove( beer );
        },

        doSearch: function(query, limit, cb) {
            return Beer.find(query, limit, cb);
        }
    });

    return IndexViewModel;

})( window.jQuery, window.beerApp.Beer );

(function(QUnit, global) {
    "use strict";

    QUnit.module("Creating Beers");

    QUnit.test("Confirm model exists", function(assert) {
        assert.ok(global.beerApp.Beer, "The Beer model exists on the beerApp object");
    });

    QUnit.test("Empty Beer object gets defaults", function(assert) {
        var b = new global.beerApp.Beer();
        assert.ok(b, "The Beer object was created");
        assert.equal(b.name, "Beer", "The default name was used");
        assert.equal(b.abv, 0, "The default abv was used");
        assert.ok(Number(b.id), "An id was assigned");
        assert.ok(Number(b.created_at), "The Beer has a create timestamp");
        assert.equal(b.updated_at, b.created_at, "The Beer has an update timestamp that matches the create timestamp");
    });

    QUnit.test("Passing options creates custom Beer", function(assert) {
        var b = new global.beerApp.Beer({
            name: "Shiner",
            brewery: "Spetzel",
            description: "Bock",
            abv: 4.5
        });

        assert.ok(b, "The Beer object was created");
        assert.equal(b.name, "Shiner", "The correct name was used");
        assert.equal(b.brewery, "Spetzel", "The correct brewery was used");
        assert.equal(b.description, "Bock", "The correct description was used");
        assert.equal(b.abv, 4.5, "The correct abv was used");
    });


    QUnit.module("Finding Beers", {
        beforeEach: function() {
            $.mockjax({
                url: "/data.json",
                dataType: "json",
                response: function(req) {
                    var data = [
                        { "name": "Foo", "brewery": "Bar", "description": "beer", "abv": 1 },
                        // We could, of course, fill out the rest of this data...
                        {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

                    this.status = 200;
                    this.responseText = data.slice(0, req.data.limit);

                    // Handle a "request" for an error...
                    if (req.data.query && req.data.query.foo === "bar") {
                        this.status = 500;
                        this.responseText = "Foo error!"
                    }
                }
            });
        },
        afterEach: function() {
            $.mockjax.clear();
        }
    });

    QUnit.test("Find with single cb arg", function(assert) {
        var done = assert.async();
        
        global.beerApp.Beer.find(function(results) {
            assert.equal(results.length, 10, "Correct number of results by default");
            // What else could/should we assert?
            done();
        });
    });

    QUnit.test("Limit search results", function(assert) {
        var done = assert.async();
        
        global.beerApp.Beer.find({}, 5, function(results) {
            assert.equal(results.length, 5, "Correct number of results by default");
            done();
        });
    });

    QUnit.test("Check HTTP error handling", function(assert) {
        var done = assert.async();
        
        global.beerApp.Beer.find({ foo: "bar" }, 5, function(err) {
            assert.ok(err instanceof Error, "An error object was received in the cb");
            assert.equal(err.message, "Unable to process beer search!", "Error has correct message");
            done();
        });
    });


    QUnit.module("Beer helpers");

    QUnit.test("Beer stringification works", function(assert) {
        var b = new global.beerApp.Beer();
        assert.equal(b.toString(), "Beer(?) by Unknown (abv ?%)", "Default string is correct");
    });

})(window.QUnit, window);

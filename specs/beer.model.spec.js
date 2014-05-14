
(function(QUnit, global) {
    "use strict";

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

    QUnit.test("Beer stringification works", function(assert) {
        var b = new global.beerApp.Beer();
        assert.equal(b.toString(), "Beer(?) by Unknown (abv ?%)", "Default string is correct");
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

})(window.QUnit, window);

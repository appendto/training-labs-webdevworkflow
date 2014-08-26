QUnit.test("Confirm model exists", function(assert) {
    assert.ok(global.beerApp.Beer, "The Beer model exists on the beerApp object");
});

QUnit.test("Empty Beer object gets defaults", function(assert) {
    var b = new global.beerApp.Beer();
    assert.ok(b, "The Beer object was created");
    assert.equal(b.name, "Beer", "The default name was used");
});

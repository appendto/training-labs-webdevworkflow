
(function(QUnit, global) {
    "use strict";

    QUnit.module("IndexViewModel Creation");

    QUnit.test("Confirm viewModel exists", function(assert) {
        assert.ok(global.beerApp.IndexViewModel, "The IndexViewModel exists on the beerApp object");
    });

    QUnit.test("New IndexViewModel object gets defaults", function(assert) {
        var vm = new global.beerApp.IndexViewModel();
        
        assert.ok(vm, "The viewModel object was created");
        assert.ok(vm.beers, "The beers object exists");
        assert.equal(vm.beers.length, 0, "There are no beers by default");
        assert.ok(vm.favorites, "The favorites object exists");
        assert.equal(vm.favorites.length, 0, "There are no favorites by default");
    });

    QUnit.module("IndexViewModel Favorites");

    QUnit.test("Adding a favorite", function(assert) {
        var vm = new global.beerApp.IndexViewModel();

        assert.ok(vm.addToFavorites && typeof vm.addToFavorites === "function", "The method exists on the view model");
        assert.equal(vm.favorites.length, 0, "There are no favorites by default");
        vm.addToFavorites({ name: "Beer One" });
        assert.equal(vm.favorites.length, 1, "A new beer should be added to the favorites");

    });

    QUnit.test("Removing a favorite", function(assert) {
        var vm = new global.beerApp.IndexViewModel();

        assert.ok(vm.removeFromFavorites && typeof vm.removeFromFavorites === "function", "The method exists on the view model");
        
        // Set some default favorites
        var beerToRemove = { name: "Two" };
        vm.favorites = [ { name: "One" }, beerToRemove, { name: "Three" } ];

        assert.equal(vm.favorites.length, 3, "There are 3 favorites by default");
        vm.removeFromFavorites(beerToRemove);
        assert.deepEqual(vm.favorites, [ { name: "One" }, { name: "Three" } ], "The correct beer was removed");

    });


})(window.QUnit, window);
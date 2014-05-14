Web Developer's Toolbox Labs
----

## Lab #1

### Tasks

1. __Getting the lab project__
  * Fork our skeleton project repository into your own Github account (Optional)
  * Clone the repository locally
  * Create a branch for your work today
  * Add a note in the README file
  * Stage the changed README file (check `git status` to see what is staged)
  * Unstage the README file (check `git status`)
  * Stage the file (again)
  * Commit the change
  * View the commit log
  * Push to your repository (Optional, only if you did step 1)

2. __Setting up Grunt__
  * Create a git branch for setting up Grunt
  * Create a `package.json` file for our Node modules
      * Make sure to add `grunt` as a dependency
  * Install Node dependencies
  * Install the Grunt command line interface globally with `npm install -g grunt-cli`
  * Create a `Gruntfile.js` for the tasks and config
  * Add the `grunt-contrib-copy` plugin
  * Edit the `copy` task config to copy all JS files and assets to a `dist` directory
      * Test your new task by running `grunt copy`
      * Investigate the `cwd` and `expand` options to ensure the files are copied to the correct directories
      * Create a `default` Grunt task that just runs the `copy` task for now
  * Stage and commit your changes
      * Make sure the `node_modules` directory is _not_ committed to Git!
      * Make sure the `dist` directory is _not_ committed to Git!
  * Merge this branch back into your branch from Task #1
  * View the commit log on your original branch
  * _If you have extra time_, add a `clean` task to remove the `dist` directory before doing the copy for the `default` task


## Lab #2

### Tasks

1. __Preventing bugs with JSLint/Hint__
  * Add JSHint to our node modules and re-install dependencies
      * Try using this shortcut on the command line: `npm install grunt-contrib-jshint --save-dev`
  * Create a `.jshintrc` file in the project root, add some jshint options there
      * Be sure to at least add these:  
      `{ "eqeqeq": true, "indent": 4, "lastsemic": false, "quotmark": true, "strict": true, "undef": true, }`
  * Add a `jshint` config block to your Gruntfile
  * Run `grunt jshint` and see what you get
      * Consider what else you may need to add to the `.jshintrc` file
      * Fix some of the jshint errors and try to get it to pass the jshint task cleanly
  * Add the `jshint` task to the list of `default` tasks
  * Stage and commit your work

2. __Minifying code with UglifyJS__
  * Add the `grunt-cotnrib-uglify` plugin to your application
  * Add an `uglify` task to your Gruntfile
      * Make it create a single file from all of your application JavaScript
      * Make sure to _not_ include any vendor files, and to make `app.js` come first!
  * Run your uglify task to confirm it works
  * _If you have time_, Add the `sourceMap` option and make it create the source map file in the `dist/js/` directory
      * _Notice anything off about your sourcemap? Think about where the files are being "sourced" from and written to._
  * Add this task to your `default` task
  * Stage and commit your work

3. __Mange front end dependencies with Bower__
  * Install bower globally via `npm install -g bower`
  * Add a `bower.json` file to the project root
      * Add a `name` and `version`, then an empty `dependencies` object in that JSON file
  * Create a `.bowerrc` file also in the project root
      * Set the install directory for bower in this file: `{ "directory": "src/js/vendor" }`
  * Install jquery and underscore via Bower
      * You can either add them manually to the bower.json file, then run `bower install` from the command line...
      * ... or you can run `bower install jquery --save-dev` from the command line (and similar for underscore)
  * Update the `index.html` file to point to the correct location for these files
      * _If you have extra time, consider how you might copy these files into the `dist/` directory and reference them there._
  * Stage and commit your work
      * Make sure you don't commit `vendor` files!


## Lab #3

### Tasks

1. __Setting up a QUnit test suite__
  * Investigate the `beer-model.html` file in the `specs/` directory
  * Create the test spec JavaScript file called `beer.model.spec.js` in the same directory
  * Write a test for the basic Beer object model
      * Make sure the `Beer` object exists on the proper namespace (an `ok` check on `window.beerApp.Beer`)
      * Make sure the deafult options are used if none are passed in (create a `Beer` with no options and check various properties)
      * Make sure the correct options are used if they are passed in (create a `Beer` with custom options and check various properties)
      * Make sure the `toString` method works correctly
  * Check the test results in the browser by loading that html file
  * Stage and commit your changes

2. __Create a new test file for the `indexViewModel`__
  * Create a new test file for the `indexViewModel` in `specs/` (maybe called `indexViewModel.html`)
      * You can use the `beer-model.html` file as a basis
      * Be sure to include the proper source file!
      * Be sure to create (and reference) a new JavaScript file for the tests! (maybe called `indexViewModel.spec.js`)
  * Create a module for some basic tests surrounding creating an IndexViewModel (maybe called "IndexViewModel Creation")
      * Ensure that the `IndexViewModel` object exists on the namespace
      * Ensure that an IndexViewModel object can be created
      * Ensure that the created view model has a beers array of length 0 and a favorites array of length 0
  * Create a module for the "favorites" functionality
      * Ensure that adding a favorites increases the size of the array
      * Ensure that removing a favorite removes the correct entry from the array (_What assertion should you use?_)
  * Check all of the results as you go
  * Stage and commit your changes

3. __Set up test automation in Grunt__
  * Install the `grunt-contrib-qunit` plugin via npm (_Make sure it gets added to `package.json`!_)
  * Configure the `qunit` Grunt task to run all test files
  * Run `grunt qunit` to test the results
  * Add the `qunit` task to the `default` task
  * Stage and commit your changes


## Lab #4

### Tasks

1. __Styling the Beer App__
  * Add the `grunt-sass` plugin
  * Use variables to add some colors and positions to the elements using the `src/sass/screen.scss` file
  * Using style nesting to override the paragraph styles in the footer
  * Use a loop to style different beers differently (perhaps odd & even rows?)
  * Play with mixins to see what you can do!
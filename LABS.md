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

2. __Minifying code with UglifyJS__
  * 
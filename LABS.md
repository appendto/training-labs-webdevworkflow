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

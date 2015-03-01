module.exports = function( grunt ) {

    grunt.loadNpmTasks( "grunt-contrib-copy" );
    grunt.loadNpmTasks( "grunt-contrib-clean" );
    grunt.loadNpmTasks( "grunt-contrib-jshint" );
    grunt.loadNpmTasks( "grunt-contrib-uglify" );
    grunt.loadNpmTasks( "grunt-contrib-qunit" );

    grunt.initConfig({
        copy: {
            html: {
                expand: true,
                src: "index.html",
                dest: "dist/",
                cwd: "src/"
            },
            js: {
                expand: true,
                src: [ "js/**/*.js", "!js/vendor/**/*.*" ],
                dest: "dist/",
                cwd: "src/"
            },
            jquery: {
                expand: true,
                src: "jquery.min.js",
                dest: "dist/js/vendor/",
                cwd: "src/js/vendor/jquery/dist/"
            },
            underscore: {
                expand: true,
                src: "underscore.js",
                dest: "dist/js/vendor/",
                cwd: "src/js/vendor/underscore/"
            },            
            assets: {
                expand: true,
                src: [ "assets/*.*" ],
                dest: "dist/",
                cwd: "src/"
            },
            data: {
                expand: true,
                src: [ "*.json" ],
                dest: "dist/",
                cwd: "src/"
            }
        },

        clean: {
            files: [ "dist/" ]
        },

        jshint: {
            options: {
                jshintrc: ".jshintrc",
                jshintignore: ".jshintignore"
            },
            files: {
                src: [ "src/js/**/*.js" ]
            }
        },

        uglify: {
            app: {
                options: {
                    sourceMap: true,
                    sourceMapName: "dist/js/sourcemap.map"
                },
                files: {
                    "dist/js/beers.min.js": [
                        "dist/js/app.js",
                        "dist/js/models/*.js",
                        "dist/js/viewModels/*.js"
                    ]
                }
            }
        },

        qunit: {
            models: {
                options: {
                    urls: [ "specs/beer-model.html" ]
                }
            },
            viewModels: {
                options: {
                    urls: [ "specs/indexViewModel.html" ]
                }
            }
        }
    });

    grunt.registerTask( "default", [ "clean", "jshint", "qunit", "copy", "uglify" ] );

};
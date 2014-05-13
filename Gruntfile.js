module.exports = function( grunt ) {

    grunt.loadNpmTasks( "grunt-contrib-copy" );
    grunt.loadNpmTasks( "grunt-contrib-clean" );
    grunt.loadNpmTasks( "grunt-contrib-jshint" );
    grunt.loadNpmTasks( "grunt-contrib-uglify" );

    grunt.initConfig({
        copy: {
            js: {
                expand: true,
                src: [ "js/**/*.js" ],
                dest: "dist/",
                cwd: "src/"
            },
            assets: {
                expand: true,
                src: [ "assets/*.*" ],
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
        }
    });

    grunt.registerTask( "default", [ "clean", "jshint", "copy", "uglify" ] );

};
module.exports = function( grunt ) {

    grunt.loadNpmTasks( "grunt-contrib-copy" );
    grunt.loadNpmTasks( "grunt-contrib-clean" );
    grunt.loadNpmTasks( "grunt-contrib-jshint" );

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
                jshintrc: '.jshintrc',
                jshintignore: '.jshintignore'
            },
            files: {
                src: [ "src/js/**/*.js" ]
            }
        },
    });

    grunt.registerTask( "default", [ "clean", "jshint", "copy" ] );

};
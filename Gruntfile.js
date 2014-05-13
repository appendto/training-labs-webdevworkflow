module.exports = function( grunt ) {

    grunt.loadNpmTasks( "grunt-contrib-copy" );
    grunt.loadNpmTasks( "grunt-contrib-clean" );

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
        }
    });

    grunt.registerTask( "default", [ "clean", "copy" ] );

};
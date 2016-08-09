module.exports = function(grunt) {

    grunt.initConfig({
        connect: {
            server: {
                options: {
                    port: 8000,
                    hostname: 'localhost',
                    keepalive: true
                }
            }
        },
        uglify: {
            options: {
                sourceMap: false
            },
            target: {
                files: {
                    'static/js/scripts.min.js': ['static/js/lib.js']
                }
            }
        },
        cssmin: {
            target: {
                files: {
                    'static/css/styles.min.css': ['static/css/creative.css']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['connect']);

};

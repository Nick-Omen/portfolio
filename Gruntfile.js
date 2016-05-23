module.exports = function (grunt) {

    grunt.initConfig({
        
        connect: {
            server: {
                options: {
                    port: 5000,
                    hostname: 'localhost',
                    keepalive: true,
                    base: 'frontend'
                }
            }
        },
        
        sass: {
            dist: {
                files: {
                    'frontend/static/css/portfolio.css': 'frontend/static/sass/portfolio.sass'
                }
            }
        },
        
        clean: ['frontend/static/css/portfolio.*'],
        
        watch: {
            files: ['frontend/static/sass/**/*'],
            tasks: ['clean', 'sass']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('default', []);
    grunt.registerTask('static', ['clean', 'sass', 'watch']);
    grunt.registerTask('server', ['connect']);

};
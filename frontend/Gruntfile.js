module.exports = function (grunt) {

    grunt.initConfig({
        
        connect: {
            server: {
                options: {
                    port: 5000,
                    hostname: 'localhost',
                    keepalive: true
                }
            }
        },
        
        sass: {
            dist: {
                files: {
                    'static/portfolio/css/portfolio.css': 'static/portfolio/sass/portfolio.sass'
                }
            }
        },
        
        clean: ['static/portfolio/css/portfolio.*'],
        
        watch: {
            files: [
                'static/sass/**/*',
                'static/portfolio/sass/**/*'
            ],
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
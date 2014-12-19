module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            development: {
                options: {
                    paths: ["css"]
                },
                files: {"css/style.css": "css/style.less"}
            },
            production: {
                options: {
                    paths: ["css"],
                    cleancss: true
                },
                files: {"css/style.css": "css/style.less"}
            }
        }/*, 
        watch: {
            style: {
                files: ["css/style.less"],
                task: ['less'],
                options: {
                    nospawn: true
                }
            }
        }*/
    });
    grunt.loadNpmTasks('grunt-contrib-less');
    //grunt.loadNpmTasks('grunt-contrib-watch');
    //grunt.registerTask('default', ['less', 'watch']);
    grunt.registerTask('default', ['less']);
};
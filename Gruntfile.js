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
        }
    });
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.registerTask('default', ['less']);
};
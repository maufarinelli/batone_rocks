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
        }, 
        ngAnnotate: {
            options: {
                singleQuotes: true,
            },
            build: {
                files: {
                    'build.js': [
                        'js/locales/i18n.js',
                        'js/locales/en.js',
                        'js/locales/fr.js',
                        'js/locales/pt.js',
                        'js/batone-app.js',
                        'js/Common/controllers/menu.controller.js',
                        'js/Common/directives/menu.directive.js',
                        'js/Common/controllers/bg.controller.js',
                        'js/Common/services/common.services.js',
                        'js/Player/player.controller.js',
                        'js/Videos/videos.controller.js',
                        'js/Videos/videos.directive.js',
                        'js/Downloads/downloads.controller.js',
                        'js/Downloads/downloads.directive.js',
                        'js/Eu/eu.controller.js'
                    ]
                }
            }
        },
        uglify: {
            build: {
                files: {
                    'build.min.js': ['build.js']
                }
            }
        }


        /*, 
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
    grunt.loadNpmTasks('grunt-ng-annotate');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    //grunt.loadNpmTasks('grunt-contrib-watch');
    //grunt.registerTask('default', ['less', 'watch']);
    grunt.registerTask('default', ['less']);
};

/*
<script src="js/locales/i18n.js"></script>
    <script src="js/locales/en.js"></script>
    <script src="js/locales/fr.js"></script>
    <script src="js/locales/pt.js"></script>
    
    <script src="js/batone-app.js"></script>
    <script src="js/Common/controllers/menu.controller.js"></script>
    <script src="js/Common/directives/menu.directive.js"></script>

    <script src="js/Common/controllers/bg.controller.js"></script>
    <script src="js/Common/services/common.services.js"></script>
    
    <script src="js/Player/player.controller.js"></script>
    
    <script src="js/Videos/videos.controller.js"></script>
    <script src="js/Videos/videos.directive.js"></script>

    <script src="js/Downloads/downloads.controller.js"></script>
    <script src="js/Downloads/downloads.directive.js"></script>

    <script src="js/Eu/eu.controller.js"></script>
 */
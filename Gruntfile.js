module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        karma: {
            unit: {
                configFile: 'karma.conf.js'
            }
        },
        uglify: {
            allowedChars: {
                options: {
                    banner: "/*! <%= pkg.name %> <%= grunt.template.today('dd-mm-yyyy') %> <%= pkg.title %> " +
                        "v<%= pkg.version %> Copyright (c) 2014 <%= pkg.author %> and other contributors. " +
                        "Distributed under the <%= pkg.license %> license. <%= pkg.homepage %> */",
                    mangle: true,
                    compress: true,
                    sourceMap: true
                },
                files: {
                    'dist/<%= pkg.name %>.min.js': ['dist/<%= pkg.name %>.js']
                }
            }
        },
        jshint: {
            files: ['dist/<%= pkg.name %>.js'],
            options: {
                jshintrc: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-karma');

    grunt.registerTask('default', ['karma', 'jshint', 'uglify']);
    grunt.registerTask('test', ['karma', 'jshint']);
};

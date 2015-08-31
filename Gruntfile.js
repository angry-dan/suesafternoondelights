'use strict';

module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    project: {
      assets: ['assets'],
      css: ['<%= project.assets %>/sass/style.scss']
    },
    sass: {
      dev: {
        options: {
          style: 'expanded',
          compass: false,
          loadPath: 'bower_components/bootstrap-sass-official/assets/stylesheets'
        },
        files: {
          '<%= project.assets %>/css/style.css':'<%= project.css %>'
        }
      },
      prod: {
        options: {
          style: 'compressed',
          compass: false,
          loadPath: 'bower_components/bootstrap-sass-official/assets/stylesheets',
          sourcemap: 'none'
        },
        files: {
          '<%= project.assets %>/css/style.css':'<%= project.css %>'
        }
      }
    },
    watch: {
      sass: {
        files: '<%= project.assets %>/sass/{,*/}*.{scss,sass}',
        tasks: ['sass:dev']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', [
    'watch'
  ]);

};

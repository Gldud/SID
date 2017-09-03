module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      development: {
        options: {
          paths: ['public']
        },
        files: {
          'public/admin-form/style.css': 'public/admin-form/style.less',
          'public/company-profile/business-type/style.css': 'public/company-profile/business-type/style.less',
          'public/company-profile/company-info/basic/style.css' : 'public/company-profile/company-info/basic/style.less',
          'public/transaction-document/style.css' : 'public/transaction-document/style.less',
          'public/market/style.css' : 'public/market/main.less'
        }
      }
    },
    watch: {
      scripts: {
        files: ['**/*.less'],
        tasks: ['less'],
        options: {
          spawn: false
        }
      }
    },
    sprite: {
      all: {
        src: 'public/market/sprite/*.png',
        dest: 'public/market/sprites/sprite.png',
        destCss: 'public/market/less/sprites.less'
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
   grunt.loadNpmTasks('grunt-spritesmith');

  // Default task(s).
  grunt.registerTask('default', ['watch']);

};

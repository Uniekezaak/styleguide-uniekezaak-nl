// Generated on 2014-01-09 using generator-bootstrap-less 3.2.0
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {
    
  // load all grunt tasks
  require('load-grunt-tasks')(grunt);
  // show elapsed time at the end
  require('time-grunt')(grunt);

  // configurable paths
  var yeomanConfig = {
    app: require('./bower.json').appPath || 'app',
    dist: 'dist'
  };
  
  var skinDir = 'app/theme/skin/frontend/uniekezaak-theme/default/';

console.log(skinDir);

  grunt.initConfig({
    yeoman: yeomanConfig,
    watch: {
      less: {
        files: [
		skinDir + 'less/{,*/}*.less'
	       ],
        tasks: ['less']
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= yeoman.app %>/*.html',
          '{.tmp,<%= yeoman.app %>}/theme/skin/frontend/uniekezaak-theme/default/css/{,*/}*.css',
          '{.tmp,<%= yeoman.app %>}/theme/skin/frontend/uniekezaak-theme/default/js/{,*/}*.js',
          '<%= yeoman.app %>/theme/skin/frontend/uniekezaak-theme/default/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },
    connect: {
      options: {
        port: 9000,
        // change this to'0.0.0.0' to access the server from outside
        hostname: '0.0.0.0',
        livereload: 35729
      },
      livereload: {
        options: {
          open: true,
          base: [
            '.tmp',
            '<%= yeoman.app %>'
          ]
        }
      },
      test: {
        options: {
          port: 9001,
          base: [
            '.tmp',
            'test',
            '<%= yeoman.app %>'
          ]
        }
      },
      dist: {
        options: {
          base: '<%= yeoman.dist %>'
        }
      }
    },
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= yeoman.dist %>/*',
            '!<%= yeoman.dist %>/.git*'
          ]
        }]
      },
      server: '.tmp'
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: [
        'Gruntfile.js',
        '<%= yeoman.app %>/scripts/{,*/}*.js',
        '!<%= yeoman.app %>/scripts/vendor/*',
        'test/spec/{,*/}*.js'
      ]
    },
    mocha: {
      all: {
        options: {
          run: true,
          urls: ['http://styleguide.uniekezaak.nl:<%= connect.options.port %>/index.html']
        }
      }
    },
    less: {
      all: {
        files: {
          '<%= yeoman.app %>/theme/skin/frontend/uniekezaak-theme/default/css/style.css': [skinDir + 'less/style.less']
        },
        options: {
          cleancss: true,
          compress: true,
          sourceMap: true,
          sourceMapFilename: '<%= yeoman.app %>/theme/skin/frontend/uniekezaak-theme/default/css/main.css.map',
          sourceMapBasepath: '<%= yeoman.app %>/',
          sourceMapRootpath: '/'
        }
      }
    },
    // not used since Uglify task does concat,
    // but still available if needed
    /*concat: {
      dist: {}
    },*/
    // not enabled since usemin task does concat and uglify
    // check index.html to edit your build targets
    // enable this task if you prefer defining your build targets here
    /*uglify: {
      dist: {}
    },*/
    rev: {
      dist: {
        files: {
          src: [
            '<%= yeoman.dist %>/theme/skin/frontend/uniekezaak-theme/default/js/{,*/}*.js',
            '<%= yeoman.dist %>/theme/skin/frontend/uniekezaak-theme/default/css/{,*/}*.css',
            '<%= yeoman.dist %>/theme/skin/frontend/uniekezaak-theme/default/images/{,*/}*.{png,jpg,jpeg,gif,webp}',
            '<%= yeoman.dist %>/theme/skin/frontend/uniekezaak-theme/default/fonts/{,*/}*.*'
          ]
        }
      }
    },
    useminPrepare: {
      html: '<%= yeoman.app %>/index.html',
      options: {
        dest: '<%= yeoman.dist %>'
      }
    },
    usemin: {
      html: ['<%= yeoman.dist %>/{,*/}*.html'],
      css: ['<%= yeoman.dist %>/theme/skin/frontend/uniekezaak-theme/default/css/{,*/}*.css'],
      options: {
        dirs: ['<%= yeoman.dist %>']
      }
    },
    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/images',
          src: '{,*/}*.{png,jpg,jpeg}',
          dest: '<%= yeoman.dist %>/images'
        }]
      }
    },
    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/images',
          src: '{,*/}*.svg',
          dest: '<%= yeoman.dist %>/images'
        }]
      }
    },
    cssmin: {
      dist: {
        files: {
          '<%= yeoman.dist %>/theme/skin/frontend/uniekezaak-theme/default/css/style.css': [
            '.tmp/styles/{,*/}*.css',
            '<%= yeoman.app %>/theme/skin/frontend/uniekezaak-theme/default/css/{,*/}*.css'
          ]
        }
      }
    },
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>',
          dest: '<%= yeoman.dist %>',
          src: [
            '*.{ico,php,png,txt}',
            'fonts/{,*/}*.*',
            '.htaccess',
            'images/{,*/}*.{webp,gif}'
          ]
        }]
      },
      server: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>/bower_components/font-awesome/fonts/',
          dest: '<%= yeoman.app %>/fonts/font-awesome',
          src: ['*']
        }, {
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>//bootstrap/fonts/',
          dest: '<%= yeoman.app %>/fonts/glyphicons',
          src: ['*']
        }]
      }
    },
    concurrent: {
      dist: [
        'less',
        //'imagemin',
        //'svgmin',
        'htmlmin'
      ]
    }
  });

  grunt.registerTask('serve', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'clean:server',
      'less',
      'cssmin',
      'copy:server',
      'connect:livereload',
      'watch'
    ]);
  });

  grunt.registerTask('server', function () {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run(['serve']);
  });

  grunt.registerTask('test', [
    'clean:server',
    'coffee',
    'less',
    'copy:server',
    'connect:test',
    'mocha'
  ]);

  grunt.registerTask('build', [
    'clean:dist',
    'copy:server',
    //'useminPrepare',
    'concurrent',
    'cssmin',
    //'concat',
    //'uglify',
    'copy',
    //'usemin'
  ]);
  
  /* 
  grunt.registerTask('build', [
    'clean:dist',
    'copy:server',
    'useminPrepare',
    'concurrent',
    'cssmin',
    'concat',
    'uglify',
    'copy',
    'rev',
    'usemin'
  ]);
  */

  grunt.registerTask('default', [
    'jshint',
    'test',
    'build'
  ]);
};

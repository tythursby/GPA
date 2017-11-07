'use-strict';

var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var cssnano = require('gulp-cssnano');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var inject = require('gulp-inject');

var
    source = 'app/',
    dest = 'dist/';

var bootstrapSass = {
    in: './node_modules/bootstrap-sass/'
  };


var scss = {
    sassOpts: {
        outputStyle: 'nested',
        precison: 3,
        errLogToConsole: true,
        includePaths: [bootstrapSass.in + 'assets/stylesheets']
    }
  };


gulp.task('inject', function () {
  var target = gulp.src('./app/index.html');
  var sources = gulp.src(['app/css/**/*.css', 'app/js/**/*.js'], {read:false});

  var injectOptions = {
    ignorePath: '/app'
  };
  return target.pipe(inject(sources, injectOptions))
    .pipe(gulp.dest('./app'));
});

// Static Server + watching scss/html files
gulp.task('serve', ['sass', 'inject'], function() {

    browserSync.init({
        server: './app'
    });

    gulp.watch('app/scss/*.scss', ['sass']).on('change', browserSync.reload);
    gulp.watch('app/*.html').on('change', browserSync.reload);
    gulp.watch('app/*.js').on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src('app/scss/*.scss')
        .pipe(sass(scss.sassOpts))
        .pipe(autoprefixer({
          browsers: ['last 2 versions'],
          cascade: false
        }))
        .pipe(sass())
        .pipe(gulp.dest("app/css"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve', 'inject']);

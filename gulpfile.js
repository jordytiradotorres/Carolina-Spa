const gulp = require('gulp'),
  concat = require('gulp-concat'),
  sass = require('gulp-sass'),
  prefix = require('gulp-autoprefixer'),
  pug = require('gulp-pug'),
  babelify = require('babelify'),
  browserify = require('browserify'),
  buffer = require('vinyl-buffer'),
  source = require('vinyl-source-stream'),
  browserSync = require('browser-sync').create(),
  reload = browserSync.reload;


gulp.task('pug', () => {
  return gulp.src('dev/pug/*.pug')
      .pipe(pug({
          pretty: true
      }))
      .pipe(gulp.dest('./public/'))
});

gulp.task('sass', ()=> {
  gulp.src('dev/scss/*.scss')
    .pipe(sass({
      //outputStyle: 'compressed',
      includePaths: ['dev/scss']
    }).on('error', sass.logError))
    .pipe(prefix({
      versions: ['last 2 versions']
    }))
    .pipe(gulp.dest('./public/css/'))
});

gulp.task('js', () => {
    return browserify({
        entries: ['dev/js/index.js'],
        transform: [babelify]
    }).bundle()
        .pipe(source('index.js'))
        .pipe(buffer())
        .pipe(gulp.dest('public/js/'))
});

gulp.task('serve', ['sass'], () => {
    browserSync.init(['public/css/*.css', 'public/js/*.js', 'public/*.html'], {
        server: {
            baseDir: 'public'
        }
    });
});

gulp.task('watch', ['sass','serve'], ()=> {
  gulp.watch('./dev/pug/**/*.pug', ['pug']);
  gulp.watch('./dev/scss/**/*.scss', ['sass']);
  gulp.watch('./dev/js/**/*.js', ['js']);
  gulp.watch('./public/*.html');
});

gulp.task('default', ['watch']);
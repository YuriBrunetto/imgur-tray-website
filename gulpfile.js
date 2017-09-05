const gulp = require('gulp')
const sass = require('gulp-sass')
const autoprefixer = require('gulp-autoprefixer')
const browserSync = require('browser-sync').create()

gulp.task('serve', ['sass'], () => {
  browserSync.init({ server: './' })

  gulp.watch('./scss/*.scss', ['sass'])
  gulp.watch('./*.html').on('change', browserSync.reload)
})

gulp.task('sass', () => {
  return gulp.src('./scss/main.scss')
    .pipe(autoprefixer())
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream())
})

gulp.task('default', ['serve'])

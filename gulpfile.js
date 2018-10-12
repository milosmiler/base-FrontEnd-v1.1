const gulp = require('gulp'),
      sass = require('gulp-sass'),
      pug = require('gulp-pug'),
      babel = require('gulp-babel'),
      sitemap = require('gulp-sitemap'),
      autoprefixer = require('gulp-autoprefixer'),
      
      browserSync = require('browser-sync').create();

// compilacions de sass a css
gulp.task('sass', () =>
    gulp.src('./Components/Scss/*.scss')
        .pipe(sass({
            outputStyle: 'expended',
            sourceComments: false
        }))
        .pipe(autoprefixer({
            version: ['last 2 browsers']
        }))
        .pipe(gulp.dest('./dest/css'))
        .pipe(browserSync.stream())
    );

// compilacion gulp a html
gulp.task('pug', () =>
    gulp.src('./Components/Pug/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('./dest'))
        .on('end', browserSync.reload)
    );

// optimizar imagenes
gulp.task('imagemin', () =>
    gulp.src('./Components/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
);

// transpilacion de ecmac 6

gulp.task('babel',() =>
  gulp.src('./Components/Js/*.js')
    .pipe(babel())
    .pipe(gulp.dest('./dest/js'))
);

// trasnformacion icon font





  //generar mapa de sitio

  gulp.task('sitemap', function () {
    gulp.src('dest/**/*.html', {
            read: false
        })
        .pipe(sitemap({
            siteUrl: ' '
        }))
        .pipe(gulp.dest('./dest'));
});



 

// servido que mostrara los cambios
gulp.task('default',() => {
    browserSync.init({
        server:'./dest'
    });
    gulp.watch('Components/Scss/**/*.scss',['sass']);
    gulp.watch('Components/Pug/**/**/*.pug',['pug']);
    gulp.watch('Components/Js/*.js',['babel']);
    gulp.watch('dest/**/*.html', ['sitemap']);
})










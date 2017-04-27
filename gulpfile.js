const gulp = require('gulp'),
      sass = require('gulp-sass'),
      pug = require('gulp-pug'),
      imagemin = require('gulp-imagemin'),
      iconfontCss = require('gulp-iconfont-css'),
      iconfont = require('gulp-iconfont'),
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

// trasnformacion icon font

 var fontName = 'demo-icons';
 
  gulp.task('iconfont', function() {
    gulp.src(['./Components/svg/*.svg'])
      .pipe(iconfontCss({
        fontName: fontName,
        targetPath: '_iconfont.scss',
        fontPath: '../fonts/'
      }))
      .pipe(iconfont({
        fontName: fontName,
        // Remove woff2 if you get an ext error on compile
        formats: ['svg', 'ttf', 'eot', 'woff', 'woff2'],
        normalize: true,
        fontHeight: 1001
      }))
      .pipe(gulp.dest('./dest/fonts/'))
  });
 

// servido que mostrara los cambios
gulp.task('default',() => {
    browserSync.init({
        server:'./dest'
    });

    gulp.watch('Components/Scss/*.scss',['sass']);
    gulp.watch('Components/Pug/**/*.pug',['pug']);
    gulp.watch('Components/svg/*.svg',['iconfont']);

})










const gulp = require('gulp'),
      sass = require('gulp-sass'),
      pug = require('gulp-pug'),
      autoprefixer = require('gulp-autoprefixer'),
      browserSync = require('browser-sync').create();

// gulp.task('sass', () =>
//     gulp.src('Components/Scss/*.scss')
//         .pipe(sass({
//             outputStyle: 'expended',
//             sourceComments: false
//         }))
//         .pipe(autoprefixer({
//             version: ['last 2 browsers']
//         }))
//         .pipe(gulp.dest('./dest/css'))
//         .pipe(browserSync.stream())
//     );


// gulp.task('pug', () =>
//     gulp.src('Components/Pug/*.pug')
//         .pipe(pug({
//             pretty: true
//         }))
//         .pipe(gulp.dest('./dest'))
//         .on('end', browserSync.reload)
//     );



// gulp.task('default',() => {

//     browserSync.init({

//         server:'./'
//     });

//     gulp.watch('Components/Scss/*.scss',['sass']);
//     gulp.watch('Components/Pug/**/*.pug',['pug']);

// })

gulp.task('sass',() =>
  gulp.src('./Components/Scss/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(autoprefixer({
        browsers: ['last 2 versions']
      }))
      .pipe(gulp.dest('./dest/css'))
      .pipe(browserSync.stream())
);

gulp.task('pug', () =>
  gulp.src('./Components/Pug/*.pug')
      .pipe(pug({
        pretty: true
      }))
      .pipe(gulp.dest('./dest'))
      .on('end', browserSync.reload)
);

gulp.task('default', () =>{
  browserSync.init({
    server : './Components'
  });
  gulp.watch('./Components/Scss/*.scss', ['sass']);
  gulp.watch('./Components/Pug/**/*.pug', ['pug']);
});









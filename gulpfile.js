const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const imageResize = require('gulp-image-resize');
const imageminPngquant = require('imagemin-pngquant');
const imageminZopfli = require('imagemin-zopfli');
const imageminMozjpeg = require('imagemin-mozjpeg');

/* TODO : install before using
* brew install libpng
* brew install imagemagick
* brew install graphicsmagick
* */

gulp.task('default', () =>
    gulp.src('src/**/*.{png,jpg}')
        .pipe(imagemin([

            // png
            imageminPngquant({
                speed: 1,
                quality: 90, // lossy settings
            }),
            imageminZopfli({
                more: true,
            }),

            // jpg very light lossy
            imageminMozjpeg({
                quality: 98,
            })
        ]))
        .pipe(imageResize({
            width: 1000,
            filter: 'Catrom'
        }))
        .pipe(gulp.dest('dist'))
);


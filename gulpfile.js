const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const imageminPngquant = require('imagemin-pngquant');
const imageminZopfli = require('imagemin-zopfli');
const imageminMozjpeg = require('imagemin-mozjpeg'); //need to run 'brew install libpng'

// TODO : add image resizing
// https://github.com/axyz/gulp-image-resize

gulp.task('default', () =>
    gulp.src('src/**/*.{png,jpg}')
        .pipe(imagemin([
            //png
            imageminPngquant({
                speed: 1,
                quality: 98 //lossy settings
            }),
            imageminZopfli({
                more: true
            }),
            //jpg very light lossy
            imageminMozjpeg({
                quality: 90
            })
        ]))
        .pipe(gulp.dest('dist'))
);


var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('testAutoFx', function(){
    gulp.src('css/index.css')
    .pipe(autoprefixer({
        browsers: ['last 2 versions','Android >= 4.0'],
        cascade: true,
        remove: true
    }))
    .pipe(gulp.dest('dist/css'));
});
var gulp = require('gulp');
var ts = require('gulp-typescript');
var uglify = require('gulp-uglify');

gulp.task("transpile", function(){
	return gulp.src("src/**/**/*.ts")
		.pipe(ts())
		.on("error", function(){
			/*gulp.src('build/')
        		.pipe(clean({force: true}))*/
			this.emit('end');
		})
		//.pipe(uglify())
		.pipe(gulp.dest("src/"));
});



gulp.task("copyjsfiles", ["transpile"], function(){
	gulp.src("src/**/*.js")
		.pipe(gulp.dest("build/"));
});

// gulp.task('default', ["copyjsfiles"]);


gulp.task("default", function(){
	gulp.watch(["src/**/**/*.ts"], ['transpile', 'copyjsfiles']);
});
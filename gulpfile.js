// var gulp=require('gulp');
// var watch = require('gulp-watch');
// var server = require('gulp-express');

// var browserSync = require('browser-sync');

// 	gulp.task('default',['browser-sync','server'],function(){
// 		gulp.watch("*.html").on("change", browserSync.reload);
// 		gulp.watch("elements/*.html").on("change", browserSync.reload);
// 	});

// 	gulp.task('browser-sync', function() {
//     browserSync({
// 	        server: {
// 	            baseDir: "./public/"
// 	        }
//     	});
// 	});

// 	gulp.task('server', function () {
// 	    // Start the server at the beginning of the task 
// 	    server.run(['app.js']);
	 
// 	    // Restart the server when file changes 
// 	    gulp.watch(['app/**/*.html'], server.notify);
// 	    gulp.watch(['app/styles/**/*.scss'], ['styles:scss']);
// 	    gulp.watch(['{.tmp,app}/styles/**/*.css'], ['styles:css', server.notify]); 
// 	    //Event object won't pass down to gulp.watch's callback if there's more than one of them. 
// 	    //So the correct way to use server.notify is as following: 
// 	    gulp.watch(['{.tmp,app}/styles/**/*.css'], function(event){
// 	        gulp.run('styles:css');
// 	        server.notify(event);
// 	        //pipe support is added for server.notify since v0.1.5, 
// 	        //see https://github.com/gimm/gulp-express#servernotifyevent 
// 	    });
	 
// 	    gulp.watch(['app/scripts/**/*.js'], ['jshint']);
// 	    gulp.watch(['app/images/**/*'], server.notify);
// 	    gulp.watch(['app.js', 'routes/**/*.js'], [server.run]);
// 	});
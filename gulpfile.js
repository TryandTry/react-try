var gulp    = require('gulp'),
    uglify  = require('gulp-uglify'),
    concat  = require('gulp-concat'),
    notify  = require('gulp-notify'),
    react   = require('gulp-react'),
    connect = require('gulp-connect');
var path = {
  All: ['src/*.js' , 'index.html'],
  Js : ['src/*.js'],
  library:['JS/*.js'],
  Html:'index.html',
  DEST_BUILD: 'build'
}

/*建立網站*/
gulp.task('startServer',function(){

  connect.server({
    port:6952,
    livereload:true
  });
})

gulp.task('closeServer',function(){

  connect.serverClose();
})

gulp.task('librartTool',function(){
  gulp.src(path.library)
  .pipe(concat('librar.min.js'))
  .pipe(gulp.dest(path.DEST_BUILD));
})

gulp.task('srcTool',function () {

  gulp.src(path.Js)

  /*編譯 jsx */
  .pipe(react())

  /*當編譯發生問題*/
  .on('error',function(err){
    this.end();

    /*使用插件發出變異錯誤的訊息*/
    gulp.src('').pipe(notify('✖ jsx編譯失敗 ✖'+err) )
  })

  /*打包成一個新的檔案*/
  .pipe(concat('app.min.js'))

  /*醜化他
  .pipe(uglify())*/

  /*建立在這個位置下*/
  .pipe(gulp.dest(path.DEST_BUILD))

  /*當執行到此處重整頁面*/
  .pipe(connect.reload())
  .pipe(notify({ message: '完成' }));
});


gulp.task('watch',function(){
    /*某個目录及其所有子目录中的所有后缀名为js的文件*/
    gulp.watch(path.All,['srcTool'])
})

gulp.task('default',['startServer','librartTool','srcTool','watch']);


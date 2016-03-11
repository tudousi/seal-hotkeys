var gulp = require('gulp');
var umd = require('gulp-umd');
gulp.task('default', function() {
    return gulp.src('src/*.js')
    	.pipe(umd({
			dependencies: function (file) {
				return [
                    {
			            name: 'seal-hotkeys',
                        amd: 'jQuery',
                        cjs: 'jQuery',
                        global: 'jQuery',
                        param: '$'
				    },
                    {
    				  name: 'seal-hotkeys',
    				  amd: 'SealModule',
    				  cjs: 'SealModule',
    				  global: 'SealModule',
    				  param: 'Module'
    				}
                ];
			}
		}))
    	.pipe(gulp.dest('build'));
});

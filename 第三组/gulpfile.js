//导入各种包
var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var uglify = require('gulp-uglify');
var less = require('gulp-less');
var cleanCss = require('gulp-clean-css');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer')
var htmlReplace = require('gulp-html-replace')
    //html处理
gulp.task('html', function() {
    gulp.src(['src/html/comparison/*.html', 'src/html/discount/*.html', 'src/html/save/*.html', 'src/html/white/*.html', 'src/html/all-brand/*.html', 'src/html/discounts/*.html', 'src/html/haitaokou/*.html', 'src/html/shop-nav/*.html', 'src/html/skiphop/*.html'])
        // 公共部分
        .pipe(htmlReplace({
            footer: gulp.src('src/html/common/footer.html'),
            hearder: gulp.src('src/html/common/hearder.html')
        }))
        .pipe(htmlmin({
            collapseWhitespace: true, //压缩页面空格
            minifyCSS: true, //压缩页面CSS
            minifyJS: true, //压缩页面js
            removeComments: true //删除页面注销
        }))
        .pipe(gulp.dest('dist/html/public'));
});
gulp.task('index', function() {
    gulp.src('index.html')
        .pipe(htmlReplace({
            footer: gulp.src('src/html/common/footer.html'),
            hearder: gulp.src('src/html/common/hearder.html')
        }))
        .pipe(htmlmin({
            collapseWhitespace: true, //压缩页面空格
            minifyCSS: true, //压缩页面CSS
            minifyJS: true, //压缩页面js
            removeComments: true //删除页面注销
        }))
        .pipe(gulp.dest('dist'));
});
//less编译压缩
gulp.task('less', function() {
    gulp.src(['src/less/**/*.less', 'index.less'])
        .pipe(less())
        .pipe(cleanCss())
        .pipe(gulp.dest('dist/css'));
});
var jsLibs = ['node_modules/art-template/lib/template-web.js', 'node_modules/jquery/dist/jquery.js', 'node_modules/bootstrap/dist/js/bootstrap.js', 'node_modules/jquery-form/dist/jquery.form.min.js', //'node_modules/jquery.cookie/jquery.cookie.js',
        // 'node_modules/nprogress/nprogress.js', 'node_modules/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js', 'node_modules/bootstrap-datepicker/dist/locales/bootstrap-datepicker.zh-CN.min.js',
        // 'lib/jquery-uploadify/jquery.uploadify.min.js',
        // 'lib/jquery-jcrop/js/Jcrop.min.js',
        // 'lib/jquery-region/jquery.region.js'
    ]
    //第三方包合并压缩
gulp.task('jsLib', function() {
        gulp.src(jsLibs)
            .pipe(concat('lib.js'))
            // .pipe(uglify())
            .pipe(gulp.dest('dist/js'))
    })
    //打包CommonJS模块
var jsModules = ['src/js/index.js', 'src/js/all-brand/page.js', 'src/js/all-brand/per_brand.js', 'src/js/shop-nav/shop.js', 'src/js/common/back_top.js', 'src/js/white/baicaijia.js'] // gulp.task('js', function() {
var jsModules = ['src/js/index.js', 'src/js/all-brand/page.js', 'src/js/all-brand/per_brand.js', 'src/js/shop-nav/shop.js', 'src/js/common/back_top.js', 'src/js/baicaijia/baicaijia.js'] // gulp.task('js', function() {

var jsModules = ['src/js/index.js', 'src/js/comparison/category.js', 'src/js/comparison/list.js', 'src/js/comparison/details.js', 'src/js/discount/discount.js', 'src/js/discount/discount_commodity.js', 'src/js/save/save.js', 'src/js/save/save_commodity.js', 'src/js/white/baicaijia.js', 'src/js/all-brand/page.js', 'src/js/all-brand/per_brand.js', 'src/js/discounts/couponproduct.js', 'src/js/discounts/discounts-interface.js', 'src/js/haitaokou/haitaokou-interface.js', 'src/js/shop-nav/shop.js', 'src/js/skiphop/skiphop-interface.js'] // gulp.task('js', function() {
    //     browserify('src/js/index.js').bundle() //打包index.js
    //         .pipe(source('index.js'))
    //         .pipe(buffer())
    //         //.pipe(uglify())
    //         .pipe(gulp.dest('dist/js'))
    // })
gulp.task('js', function() {
        jsModules.forEach(function(jsPath) {
            var pathArr = jsPath.split('/')
            var jsName = pathArr.pop();
            pathArr.shift();
            //加上debug:true后台更容易调试代码
            browserify(jsPath, { debug: true }).bundle()
                .pipe(source(jsName))
                .pipe(buffer())
                // .pipe(uglify())
                .pipe(gulp.dest('dist/' + pathArr.join('/')))
        })
    })
    //统一打包任务
gulp.task('build', function() {
    gulp.run(['html', 'index', 'less', 'jsLib', 'js']);
});
//监听文件变化，自动打包
gulp.task('default', function() {
    gulp.run('build')
    gulp.watch(['src/html/comparison/*.html'], function() {
        gulp.run('html')
    })
    gulp.watch('index.html', function() {
        gulp.run('index')
    })
    gulp.watch(['src/less/**/*.less', 'index.less'], function() {
        gulp.run('less')
    })
    gulp.watch(jsLibs, function() {
        gulp.run('jsLib')
    })
    gulp.watch(jsModules, function() {
        gulp.run('js')
    })
})
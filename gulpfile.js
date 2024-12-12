const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const tailwindcss = require('tailwindcss');
const terser = require('gulp-terser');
const browserSync = require('browser-sync').create();
const cssnano = require('cssnano');

// Compile SCSS
function compileSass() {
    return gulp.src('src/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([
            tailwindcss,
            require('autoprefixer'),
            cssnano(),
        ]))
        .pipe(gulp.dest('public/css'))
        .pipe(browserSync.stream());
}

// Compile JS
function compileJs() {
    return gulp.src('src/js/**/*.js')
        .pipe(terser())
        .pipe(gulp.dest('public/js'))
        .pipe(browserSync.stream());
}

// BrowserSync
function browserSyncInit(done) {
    browserSync.init({
        server: {
            baseDir: "./",
            middleware: [
                function (req, res, next) {
                    res.setHeader('Access-Control-Allow-Origin', '*');
                    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
                    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
                    next();
                }
            ]
        },
        port: 3000,
        open: false,
        notify: false,
        ghostMode: false,
        socket: {
            domain: 'localhost:3000'
        }
    });
    done();
}

// Watch files
function watchFiles(done) {
    gulp.watch('src/scss/**/*.scss', compileSass);
    gulp.watch('src/js/**/*.js', compileJs);
    gulp.watch('src/assets/**/*', copyAssets);
    gulp.watch('./*.html').on('change', compileSass, compileJs, copyAssets);
    gulp.watch('./*.html').on('change', browserSync.reload);
    done();
}

// Copy assets
function copyAssets() {
    return gulp.src('src/assets/**/*') // Match all files and folders under src/assets
        .pipe(gulp.dest('public/assets')); // Output to public/assets
}

// Define complex tasks
const build = gulp.series(compileSass, compileJs, copyAssets);
const assets = gulp.series(copyAssets);
const javascript = gulp.series(compileJs);
const scss = gulp.series(compileSass);
const watch = gulp.parallel(watchFiles, browserSyncInit);


// Export tasks
exports.sass = compileSass;
exports.js = compileJs;
exports.assets = assets;
exports.javascript = javascript;
exports.scss = scss;
exports.build = build;
exports.watch = watch;
exports.assets = copyAssets;
exports.default = gulp.series(build, watch);
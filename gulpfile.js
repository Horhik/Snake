const
    gulp = require("gulp"),
    browserSync = require("browser-sync").create(),
    sass = require("gulp-sass"),
    postcss = require("gulp-postcss"),
    autoprefixer = require("autoprefixer");

const sources = {
    css: "./*/**/*.scss",
    html: "./*/**/*.html",
    js: "./*/**/*.js",
    cssExactly: "./src/scss/styles.scss"
}

const build = {
    css: "./app"
}

// Starting Server
gulp.task("server", () => {
    browserSync.init({
        server: {
            baseDir: "./app"
        }
    })
})

// Start workin about styles
gulp.task("styles", () => {
    return gulp.src(sources.cssExactly)
        .pipe(sass())
        .pipe(postcss([autoprefixer({
            browsers: ["> 1%"]
        })]))
        .pipe(gulp.dest(build.css))
        .pipe(browserSync.stream())
})

// Start watching
gulp.task("watch", () => {
    gulp.watch(sources.css, gulp.series("styles"));
    gulp.watch(sources.html).on('change', browserSync.reload);
    gulp.watch(sources.js).on('change', browserSync.reload);

})

// Starting Default`
gulp.task("default",gulp.parallel('server',  'styles', 'watch' ), () => {
})
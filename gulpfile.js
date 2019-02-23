const { src, dest, task, parallel } = require("gulp");
const sass = require("gulp-sass");
const rename = require("gulp-rename");
const autoprefixer = require("gulp-autoprefixer");
const cleanCss = require("gulp-clean-css");

task("sass", () =>
	src("src/index.sass")
		.pipe(sass())
		.pipe(autoprefixer())
		.pipe(cleanCss())
		.pipe(rename({ basename: "material-design" }))
		.pipe(dest("dist"))
);

task("build", parallel("sass"));

# gulp-html-transform-minify-inline-json
This is a plugin for [gulp-html-transform](https://github.com/maistho/gulp-html-transform)

Minifies inline `<script>` tags containing JSON data, i.e. `application/json` and `application/ld+json`.

Loosely based on [gulp-minify-inline-json](https://github.com/haensl/gulp-minify-inline-json)

## Installing

Using npm
```
$ npm install --save gulp-html-transform-inline-json
```

Using yarn
```
$ yarn add gulp-html-transform-inline-json
```

## Usage
#### gulpfile.js
```javascript
const path = require('path')
const { transform } = require('gulp-html-transform')
const { minifyInlineJson } = require('gulp-html-transform-minify-inline-json')

gulp.task('html', () => {
  gulp.src('src/**/*.html')
  .pipe(transform(
    minifyInlineJson({
      mimetypes: ['application/json'], // optional
    })
  ))
  .pipe(gulp.dest('dist'))
})
```

If you want to add the styles manually you can import `index.css` from the package folder and remove `addStyles`.

#### Html in:
```html
<script type="application/json">
{
  "key": {
    "other_key": "value"
  }
}
</script>
```

#### Html out:
```html
<script type="application/json">{"key":{"other_key":"value"}}</script>
```

## API
```javascript
minifyInlineJson({
  mimetypes: ['application/json', 'application/ld+json'], // optional string array of mimeTypes.
})
```

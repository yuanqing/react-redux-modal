import babelify from 'babelify';
import browserify from 'browserify';
import buffer from 'vinyl-buffer';
import ecstatic from 'ecstatic';
import gulp from 'gulp';
import gutil from 'gulp-util';
import http from 'http';
import nopt from 'nopt';
import opn from 'opn';
import runSequence from 'run-sequence';
import source from 'vinyl-source-stream';
import watchify from 'watchify';

const JS_VENDOR_MODULES = [
  'react',
  'react-addons-css-transition-group',
  'react-dom',
  'react-redux',
  'redux'
];

gulp.task('example', (callback) => {
  runSequence(
    'example:vendor',
    'example:app',
    'example:open',
    callback
  );
});

gulp.task('example:vendor', () => {
  return browserify()
    .require(JS_VENDOR_MODULES)
    .bundle()
    .pipe(source('vendor.js'))
    .pipe(buffer())
    .pipe(gulp.dest('example'));
});

function bundle(b) {
  return b.bundle()
    .on('error', ({message, codeFrame}) => {
      gutil.log(gutil.colors.red(message));
      console.log(codeFrame);
    })
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(gulp.dest('example'));
};

gulp.task('example:app', () => {
  const b = browserify({
    entries: 'example/index.js',
    debug: true
  });
  b.external(JS_VENDOR_MODULES);
  b.transform(babelify);
  b.plugin(watchify);
  b.on('error', gutil.log);
  b.on('log', gutil.log);
  b.on('update', () => {
    bundle(b);
  });
  bundle(b);
});

gulp.task('example:open', () => {
  http.createServer(ecstatic({
    root: '.'
  })).listen(4242);
  const args = nopt({
    open: Boolean
  }, {
    o: ['--open']
  });
  if (args.open) {
    const url = 'http://localhost:4242/example';
    gutil.log(gutil.colors.green('Opening', url));
    opn(url, {
      app: 'google chrome',
      wait: false
    });
  }
});

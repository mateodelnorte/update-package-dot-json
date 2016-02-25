#!/usr/bin/env node

var pkg = require('package-json-io');

var packageName = process.argv[2];
var version = process.argv[3];

if ( ! packageName) return console.warn('please specify a package name to update');
if ( ! version) return console.warn('please specify a package version');

// read and parse the package.json file in current directory
pkg.read(function (err, data) {

  data.dependencies = data.dependencies || {};

  data.dependencies[packageName] = version;

  pkg.update(data, function (err) {
    if (err) throw err;

  });

});
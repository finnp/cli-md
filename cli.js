#!/usr/bin/env node
var fs = require('fs')
var concat = require('concat-stream')

var md = require('./')
var filepath = process.argv[2]
var readStream

if (filepath) {
  readStream = fs.createReadStream(filepath)
} else {
  readStream = process.stdin
}

readStream.pipe(concat(function (markdown) {
  process.stdout.write(md(markdown.toString()))
}))

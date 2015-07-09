#!/usr/bin/env node
var fs = require('fs')
var concat = require('concat-stream')

var md = require('./')

process.stdin.pipe(concat(function (markdown) {
  process.stdout.write(md(markdown.toString()))
}))

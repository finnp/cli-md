#!/usr/bin/env node
var fs = require('fs')
var concat = require('concat-stream')

// Force colors for chalk.
process.argv.push('--color')

var md = require('./')

process.stdin.pipe(concat(function (markdown) {
  process.stdout.write(md(markdown.toString()))
}))

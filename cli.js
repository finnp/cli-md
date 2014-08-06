#!/usr/bin/env node
var fs = require('fs')
var concat = require('concat-stream')
var md = require('./index.js')

process.stdin.pipe(concat(function (markdown) {
  console.log(md(markdown.toString()))
}))
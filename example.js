var md = require('./index.js')
var fs = require('fs')

console.log(md(fs.readFileSync('./test.md').toString()))
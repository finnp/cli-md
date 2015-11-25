var marked = require('marked')
var TerminalRenderer = require('marked-terminal')
var chalk = require('chalk')

var c = {
  heading: chalk.bold.cyan,
  firstHeading: chalk.bold.cyan,
  html: chalk.grey,
  strong: chalk.bold.blue,
  em: chalk.italic.magenta,
  codespan: chalk.yellow,
  del: chalk.strikethrough.red,
  link: chalk.blue,
  href: chalk.blue.underline,
  blockquote: chalk.gray
}

marked.setOptions({
  renderer: new TerminalRenderer(c)
})

module.exports = marked

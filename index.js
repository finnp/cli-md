var marked = require('marked')
var chalk = require('chalk')

var renderer = new marked.Renderer()

var c = {
  heading: chalk.bold.cyan,
  syntax: chalk.grey,
  strong: chalk.bold.blue,
  em: chalk.italic.magenta,
  codespan: chalk.yellow,
  del: chalk.strikethrough.red,
  link: chalk.blue,
  href: chalk.gray,
  quote: chalk.gray
}

// Block Level

renderer.heading = function (text, level) {
  return c.syntax(Array(level + 1).join('#')) + ' ' + c.heading(text) + '\n'
}

renderer.hr = function () {
  return c.syntax(Array(20).join('-')) + '\n'
}

renderer.paragraph = function (text) {
  return '\n' + text + '\n'
}

renderer.list = function (body, ordererd) {
  return '\n' + body 
}

renderer.listitem = function (text, test) {
  // TODO: ordering information in list not here
  return c.syntax('- ') + text + '\n'
}

renderer.blockquote = function (quote) {
  return c.quote(quote)
}

// TODO
renderer.code = function (code, language) {
  return  '\n' + code + '\n'
}


renderer.html = function (html) {
  return html
}

renderer.table = function (header, body) {
  return c.heading(header) + '\n' + body + '\n'
}

renderer.tablerow = function (content) {
  return content
}

renderer.tablecell = function (content, flags) {
  return content + Array(20-content.length).join(' ') + '|'
}

// Inline Level

renderer.strong = function (text) {
  return c.strong(text)
}

renderer.em = function (text) {
  return c.em(text)
}

renderer.codespan = function (code) {
  return c.codespan(code)
}

renderer.br = function () {
  return '\n'
}

renderer.del = function (text) {
  return c.syntax('~~') + c.del(text) + c.syntax('~~')
}

renderer.link = function (href, title, text) {
  return c.syntax('[') + c.link(text) + c.syntax('](') + c.href(href) + c.syntax(')')
}

renderer.image = function (href, title, text) {
  return c.syntax('![') + c.link(text) + c.syntax('](') + c.href(href) + c.syntax(')')
}

marked.setOptions({renderer: renderer})

module.exports = marked
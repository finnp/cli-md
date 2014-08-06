# cli-md

Transform markdown to terminal colors. Install with `npm install cli-md`

It is inspired by and similar to [msee](https://www.npmjs.org/package/msee), 
but the implementation is probably a bit simpler, since I am only overwriting the
`Renderer()` methods of the `marked` module and color it with `chalk`.

## Usage
```js
var md = require('cli-md')
md('# markdown')
```

## Command line usage
```
$ cli-md < Readme.md
```
Which would look something like this:
![Photo](example.png)
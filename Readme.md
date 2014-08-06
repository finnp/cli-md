# cli-md

Transform markdown to terminal colors. Install with `npm install cli-md`

It is inspired by and similar to [msee](https://www.npmjs.org/package/msee), 
but the implementation is probably a bit simpler, since I am only overwriting the
`Renderer()` methods of the `marked` module and color it with `chalk`.

You should also checkout [marked-terminal](https://github.com/mikaelbr/marked-terminal), which
was started 9 days before this project and basically does the same :).

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
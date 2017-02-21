# Stagnate

Static site with React

Meaningless comparison: the whole site payload (including trump image) is smaller than unminified jQuery

* * *

This is an example project. At some point, I might pull the webpack config and entry.js out into a module.

## Things you can do

run `yarn dev` for browsersync (no hmr yet :/).

run `yarn build` to build for production into `./target/` folder. You can then drop the contents of `./target/` on apache or s3 or varnish or whatever you like.

run `yarn start` to statically serve the contents of the `target` folder.

## Things that happen

It's all webpack.

`./src/entry.js` is the entry point.

`./routes.js` is passed into both the react router _and_ the static-site-generator-webpack-plugin. If you want a page to get rendered into a file, put it in there.

Content comes from `./src/copy.js`, and uses a "content blocks" model.

All the javascript gets bundled into a single external file. It would be cool if it was inlined.

All the css gets compiled, then run through purifycss, which does a middling job of removing unused declarations.

There are rules in `./style/` for most css properties. They use no nesting whatsoever. This is a good thing. Use those classnames in your html and never again worry about "is it safe to edit this declaration?" or "I wonder what other parts of the site I'm affecting rn" or "I wonder which css files affect how this element might render". All the files in `./style/` are ripped from [tachyons](http://tachyons.io). [this control-f-able file lists all of the declarations](http://tachyons.io/docs/table-of-styles/)

Every declaration comes with breakpoints as follows:

```
// mobile first
.classname {}

// "not small"
@media screen and (min-width: 30em) {
 .classname-ns {}
}

// medium
@media screen and (min-width: 30em) and (max-width: 60em) {
 .classname-m {}
}

// large
@media screen and (min-width: 60em) {
 .classname-l {}
}
```


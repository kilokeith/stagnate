const postcss = require('postcss')
const purify = require('purifycss')

const postPurify = postcss.plugin('purifycss', (opts) => {
  return (root, result) => {
    const css = root.toString()
    purify(['**/src/**/*.js'], css, pureCss => {
      console.log('purified css! length:', pureCss.length)
      console.log('original length:', css.length)
      result.root = postcss.parse(pureCss)
    })
  }
})

const inProduction = plugin => process.NODE_ENV === 'production'
  ? [plugin] : []

module.exports = {
  plugins: [
    require('postcss-smart-import'),
    require('postcss-cssnext'),
    ...inProduction(postPurify()),
    ...inProduction(require('cssnano')({
      discardComments: {
        removeAll: true
      }
    }))
  ]
}


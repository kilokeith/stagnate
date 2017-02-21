import R from 'ramda'
import { resolve } from 'path'
import StaticSiteGeneratorPlugin from 'static-site-generator-webpack-plugin'
import BrowserSyncPlugin from 'browser-sync-webpack-plugin'

import {
  addBabel,
  addMinify,
  addName,
  addOutputPath,
  addPlugin,
  addProgress,
  addRule,
  addSourcemap,
  addUMD,
  base,
  makeRule
} from '@amonks/webpack-helpers'

import routes from './routes'

const name = 'stagnate'

const addSrc = R.pipe(
  R.assoc('entry', {[name]: resolve(__dirname, 'src/entry.js')})
)

const style = addRule(makeRule(/\.css$/, [
  'to-string-loader',
  'css-loader?importLoaders=1',
  'postcss-loader'
]))

const staticSite = (() => {
  const locals = {}
  return R.pipe(
    addPlugin(
      new StaticSiteGeneratorPlugin(name, Object.keys(routes), locals)
    ),
    addPlugin(
      new BrowserSyncPlugin({
        host: 'localhost',
        port: 3000,
        server: { baseDir: ['target'] },
        open: false
      })
    )
  )
})()

const handleImages = addRule(makeRule(/\.(png|jpg)$/, 'url-loader?limit=8192'))

const config = R.pipe(
  addSrc,
  style,
  addOutputPath(resolve(__dirname, 'target')),
  handleImages,
  addSourcemap,
  addBabel,
  addProgress,
  addName(name),
  addUMD,
  staticSite,
  R.assoc('stats', 'verbose'),
  process.NODE_ENV === 'production' ? addMinify : R.identity
)(base)

console.log(config)

export default config


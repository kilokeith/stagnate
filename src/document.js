import React from 'react'
import { renderToStaticMarkup, renderToString } from 'react-dom/server'

import banner from 'raw-loader!./banner.txt'
import style from '../style/index.css'

const document = El => {
  const elHtml = renderToString(El)
  const html = renderToStaticMarkup(
    <html>
      <head>
        <title>Stagnate</title>
        <style dangerouslySetInnerHTML={{__html: style}} />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </head>
      <body>
        <div id='root' dangerouslySetInnerHTML={{__html: elHtml}} />
        <script src='/stagnate.js' />
      </body>
    </html>
  )
  return `<!DOCTYPE html>${banner}${html}`
}

export default document


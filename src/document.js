import React from 'react'
import { renderToStaticMarkup, renderToString } from 'react-dom/server'

import banner from 'raw-loader!./banner.txt'
import analytics from 'raw-loader!./ga.js'
import style from '../style/index.css'

const document = El => {
  const elHtml = renderToString(El)
  const html = renderToStaticMarkup(
    <html>
      <head>
        <meta charset='utf-8' />
        <meta http-equiv='x-ua-compatible' content='ie=edge' />
        <title>Stagnate</title>
        <meta name='description' content='' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='apple-touch-icon' href='apple-touch-icon.png' />
        <style dangerouslySetInnerHTML={{__html: style}} />
      </head>
      <body>
        <div id='root' dangerouslySetInnerHTML={{__html: elHtml}} />
        <script src='/stagnate.js' />
        <script dangerouslySetInnerHTML={{__html: analytics}} />
        <script src='https://www.google-analytics.com/analytics.js' async defer />
      </body>
    </html>
  )
  return `<!DOCTYPE html>${banner}${html}`
}

export default document


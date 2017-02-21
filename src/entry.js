import React from 'react'
import { render } from 'react-dom'
import Root from './Root'
import document from './document'

// just render it if we're on the client
if (typeof window !== 'undefined') {
  render(<Root />, window.document.querySelector('#root'))
}

// export a renderer for the server
const server = async locals => {
  return document(<Root {...locals} />)
}

export default server


import React from 'react'
import { BrowserRouter, MemoryRouter } from 'react-router-dom'

const Router = (() => {
  if (typeof window === 'undefined') {
    return ({children, path}) => (
      <MemoryRouter
        initialEntries={[path]}
      >
        <div>
          {children}
        </div>
      </MemoryRouter>
    )
  } else {
    return ({children}) => (
      <BrowserRouter>
        <div>
          {children}
        </div>
      </BrowserRouter>
    )
  }
})()

export default Router


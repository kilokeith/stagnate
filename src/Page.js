import React from 'react'

import Nav from './Nav'
import Footer from './Footer'

const Page = ({children}) => {
  return (
    <div className='min-vh-100 flex flex-column'>
      <Nav />
      <div className='flex-auto'>
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Page


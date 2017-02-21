import React from 'react'

import copy from './copy'

const Footer = () => {
  return (
    <footer className='w-100 bt pa5 pa5-ns bottom-0'>
      <div className='mw8 center'>
        {copy.footer}
      </div>
    </footer>
  )
}

export default Footer


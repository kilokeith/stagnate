import React from 'react'

const Image = ({src}) => {
  return (
    <img src={require('./images/' + src)} className='w-100' />
  )
}

export default Image


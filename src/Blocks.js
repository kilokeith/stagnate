import React from 'react'

import Header from './Header'
import Markdown from './Markdown'
import Image from './Image'
import Hr from './Hr'

const block = (block, key) => {
  switch (block.type) {
    case 'header':
      return <Header key={key} {...block} />
    case 'hr':
      return <Hr key={key} {...block} />
    case 'markdown':
      return <Markdown key={key} {...block} />
    case 'image':
      return <Image key={key} {...block} />
    default:
      return null
  }
}

const Blocks = ({blocks}) => {
  return (
    <div>
      {blocks.map(block)}
    </div>
  )
}

export default Blocks


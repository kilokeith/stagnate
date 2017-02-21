import React from 'react'

import copy from './copy'
import Page from './Page'
import Blocks from './Blocks'

const Home = () => {
  return (
    <Page>
      <Blocks blocks={copy.home.content} />
    </Page>
  )
}

export default Home


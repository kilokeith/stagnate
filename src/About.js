import React from 'react'

import copy from './copy'
import Page from './Page'
import Blocks from './Blocks'

const About = () => {
  return (
    <Page>
      <Blocks blocks={copy.about.content} />
    </Page>
  )
}

export default About


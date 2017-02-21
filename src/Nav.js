import R from 'ramda'
import React from 'react'

import { Link } from 'react-router-dom'

import copy from './copy'

const Links = ({links}) => {
  const lastLink = R.last(links)
  const firstLinks = R.dropLast(1, links)
  const lastHref = lastLink[0]
  const lastTitle = lastLink[1]
  return (
    <div className='db dtc-l v-mid w-100 w-75-l tc tr-l bb bt bn-l'>
      {[
        ...firstLinks.map(
          ([path, title], key) =>
            <Link key={key} className='link dim pa4 dark-gray f6 f5-l dib mr3 mr4-l' to={path} title={title}>{title}</Link>
        ),
        <Link key='last' className='link dim pa4 dark-gray f6 f5-l dib' to={lastHref} title={lastTitle}>{lastTitle}</Link>
      ]}
    </div>
  )
}

const Nav = () => {
  return (
    <header className='w-100 bb-l'>
      <nav className='db dt-l w-100 border-box mw8 center'>
        <Link to='/' className='db dtc-l v-mid pa4 mid-gray link dim w-100 w-25-l tc tl-l mb2 mb0-l' title='Home'>
          <span className='dib br-100'>{copy.title}</span>
        </Link>
        <Links links={copy.nav.links} />
      </nav>
    </header>
  )
}

export default Nav


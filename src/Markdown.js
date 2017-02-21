import React from 'react'
import ReactMarkdown from 'react-markdown'

const Markdown = ({text}) => {
  return (
    <div className='mv4 mv5-ns mh3 mh4-ns'>
      <ReactMarkdown className='center measure lh-copy' source={text} />
    </div>
  )
}

export default Markdown


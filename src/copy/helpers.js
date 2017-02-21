export const hr = () => ({
  type: 'hr'
})

export const markdown = text => ({
  type: 'markdown',
  text
})

export const image = src => ({
  type: 'image',
  src
})

export const header = text => ({
  type: 'header',
  text
})


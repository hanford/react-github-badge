import React from 'react'

export const GithubBadge = ({ url, title }) => (
  <a
    href={url}
    target='_blank'
    style={{
      display: 'block',
      position: 'fixed',
      top: '40px',
      right: '-61px',
      padding: '16px',
      width: '250px',
      textAlign: 'center',
      backgroundColor: 'rgba(0,0,0,0.7)',
      color: '#FEFEFE',
      fontSize: '16px',
      transform: 'rotate(45deg)',
      textDecoration: 'none'
    }}
  >
    {title}
  </a>
)

export default GithubBadge

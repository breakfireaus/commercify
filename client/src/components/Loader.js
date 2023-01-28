import React from 'react'
import { Spinner } from 'react-bootstrap'

export const Loader = () => {
  return (
    <Spinner
      animation='grow'
      role='status'
      style={{
        width: '120px',
        height: '120px',
        margin: 'auto',
        display: 'block',
      }}
    >
      <span className='sr-only'>...loading...</span>
    </Spinner>
  )
}
export default Loader

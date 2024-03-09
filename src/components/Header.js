
import React from 'react'

const style = {
    height: 'fit-content',
    width: '100%',
    padding: '20px',
    display: 'flex'
}

function Header() {
  return (
    <div className='header thing'>
        <a className='navlink thing' href='/'>Home</a>
    </div>
  )
}

export default Header
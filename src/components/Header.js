
import React from 'react'
import User from '../features/user/User'

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
        <User />
    </div>
  )
}

export default Header
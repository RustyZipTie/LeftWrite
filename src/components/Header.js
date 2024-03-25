
import React from 'react'
import User from '../features/user/User'
import quill from '../app/assets/quill.svg'

const style = {
  height: 'fit-content',
  width: '100%',
  padding: '20px',
  display: 'flex'
}

function Header() {
  return (
    <div className='header thing'>
      <img
        src={quill}
        alt="logo"
        className='navlink thing'
        style={{
          height: 60
        }}
      ></img>
      <User />
    </div>
  )
}

export default Header
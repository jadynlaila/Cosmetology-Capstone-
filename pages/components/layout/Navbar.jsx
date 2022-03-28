import React, {useState} from 'react'
import Image from 'next/image'


const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  return (
    <nav>
      <Image className='logo' src={'/newLogo.png'} alt="logo" height='56.25' width='112.5'/>
      <div className="nav-list">
        <h3>{loggedIn ? "Logout" : 'Login'}</h3>
      </div>
    </nav>
  )
}

export default Navbar
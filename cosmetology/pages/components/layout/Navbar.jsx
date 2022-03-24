import React, {useState} from 'react'

const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  return (
    <nav>
      <img src="#" alt="logo" className="logo" />
      <div className="nav-list">
        <h3>{loggedIn ? "Logout" : 'Login'}</h3>
      </div>
    </nav>
  )
}

export default Navbar
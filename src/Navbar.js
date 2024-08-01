import React from 'react'

function Navbar() {
    
  return (
    <div>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
    <div className="container-fluid">
    <a className="navbar-brand" href="#">
    <img src="logo.jpg" alt="logo" />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="#">Login</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Sign Up</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>    
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar


import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  return (
    <header>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="logo.jpg" alt="Company Logo" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <button className="nav-link btn-link" onClick={() => alert('Login')}>Login</button>
              </li>
              <li className="nav-item">
                <button className="nav-link btn-link" onClick={() => alert('Sign Up')}>Sign Up</button>
              </li>
              <li className="nav-item">
                <button className="nav-link btn-link" onClick={() => alert('About')}>About</button>
              </li>    
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

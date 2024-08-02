import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  const headerText = "Marketplace UI";
  
  return (
    <div className="container-fluid bg-success text-white px-5 py-3">
      <div className="container">
        <h2>{headerText}</h2>
      </div>
    </div>
  );
}

export default Header;

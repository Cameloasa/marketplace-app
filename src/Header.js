import React from 'react'

function Header() {
    const headerText = "Marketplace UI";
  return (
    <div className='container-fluid bg-succes text-white px-5'>
        <div className='container'>
        <h2>{headerText}</h2>
        </div>
    </div>
  )
}

export default Header
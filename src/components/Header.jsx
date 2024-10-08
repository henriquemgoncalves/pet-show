import '../styles/components/header.sass'

import React from 'react'

const Header = () => {
  return (
    <header id='logo'>
        <div className="container">
           <img src='/img/dogshow_logo.png' alt=''/>
            <h3>PetShow</h3> 
        </div>     
    </header>
  )
}

export default Header;
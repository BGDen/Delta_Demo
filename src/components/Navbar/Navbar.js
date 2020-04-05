import React from 'react';

export function Navigation (){
  // console.log(props);
  return(
    <nav className="navbar navbar-light bg-light Nav_on">
      
      <a className="navbar-brand" href="#"><img src='../src/components/img/logo/toolkit.png' width="50px" height="50px" className='logo' alt="logo" />Delta Shop</a>

      <div className="form-inline my-lg-0">
        <input className="form-control mr-sm-2 search" type="text" placeholder="Search" aria-label="Search" />
      </div>
    </nav>
  )
}
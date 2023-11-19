import React from "react";
import Menu from "./Menu"

function Navbar(){

    return(
        <>
        <nav className="first-nav">
      <h5>Model S</h5>
      <h5>Model 3</h5>
      <h5>Model X</h5>
      <h5>Model Y</h5>
      <h5>Solar Roof</h5>
      <h5>Solar Panels</h5>
    </nav>
    
      <div className="second-nav">
  <button className="button">Shop</button>
  <button className="button">Account</button>
        <Menu />
 </div>
 </>
    )
}

export default Navbar;

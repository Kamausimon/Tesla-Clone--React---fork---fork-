import React from "react";
import logo from "../../assets/tesla.svg"
import Menu from "./Menu";

function Header(){
    return(
       <div className="App-header">
        
         <center>
        <div className="App-logo">
       <img src={logo}/>
        </div>
        </center>

        <div className="first-nav"> 
            <h5>Model-3 </h5>
            <h5> Model-S </h5>
            <h5>Model-X </h5>
            <h5> Model-y</h5>
            <h5>Solar-panel </h5>
            <h5> Storm-night</h5>
        </div>

        <div className="second-nav"> 
          <button className="button">Shop </button>
          <button className="button">Account </button>
          <Menu />
        </div>

       </div>
    )
}

export default Header;
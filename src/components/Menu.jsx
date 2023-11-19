import React, { useRef, useState,useEffect } from "react";
import Navbar from "./Navbar";

function Menu() {
  const [open, setOpen] = useState(false);
  const container = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  },[]);


 const handleOutsideClick = (event) => {
    if (container.current && !container.current.contains(event.target)) {
      setOpen(false);
    }
  };

 
  const handleClick = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <div className="dropdown" ref={container}>
      <button onClick={handleClick} className="dropbtn">
        Menu
      </button>

      {open && (
        <div className="dropdown-content">
          <Navbar />
        </div>
      )}
    </div>
  );
}

export default Menu;

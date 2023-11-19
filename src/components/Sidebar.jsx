import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { TbMinusVertical } from "react-icons/tb";

function Sidebar({ children }) {
  // Retrieve the selected page from localStorage or default to '/'
  const [selected, setSelected] = useState(
    localStorage.getItem("selectedPage") || "/"
  );

  const menuItem = [
    {
      path: "/",
      icon: <TbMinusVertical />,
      body: "url(/assets/model-3.jpg)",
    },
    {
      path: "/Models",
      icon: <TbMinusVertical />,
      body: "url(/assets/model-s.jpg)",
    },
    {
      path: "/Modelx",
      icon: <TbMinusVertical />,
      body: "url(/assets/model-x.jpg)",
    },
    {
      path: "/Modely",
      icon: <TbMinusVertical />,
      body: "url(/assets/model-y.jpg)",
    },
    {
      path: "/Solarpanel",
      icon: <TbMinusVertical />,
      body: "url(/assets/solar-panel.jpg)",
    },
    {
      path: "/Stormnight",
      icon: <TbMinusVertical />,
      body: "url(/assets/storm-night.png)",
    },
  ];

  useEffect(() => {
    // Store the selected page in localStorage
    localStorage.setItem("selectedPage", selected);

    // Update the body background image when the selected path changes
    const selectedMenuItem = menuItem.find((item) => item.path === selected);
    if (selectedMenuItem) {
      document.body.style.backgroundImage = selectedMenuItem.body;
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundPosition = "center";
    }

    // Cleanup function to reset body styles when the component unmounts
    return () => {
      document.body.style.backgroundImage = "";
      document.body.style.backgroundSize = "";
      document.body.style.backgroundPosition = "";
    };
  }, [selected, menuItem]);

  return (
    <div className="sidebarcontainer">
      <div className="sidebar">
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
          
            onClick={() => setSelected(item.path)}
          >
            <div
              className="icon">
              {item.icon}
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
}

export default Sidebar;

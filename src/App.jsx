import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Models from "./pages/Models";
import Modelx from "./pages/Modelx";
import Modely from "./pages/Modely";
import Solarpanel from "./pages/Solarpanel";
import Stormnight from "./pages/Stormnight";
import Home from "./pages/Home";
import Header from "./components/Header";

import "./App.css";

function App() {
  return (
    <div className="App">
         <Header />

      <Sidebar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Models" element={<Models />} />
          <Route path="/Modelx" element={<Modelx />} />
          <Route path="/Modely" element={<Modely />} />
          <Route path="/Solarpanel" element={<Solarpanel />} />
          <Route path="/Stormnight" element={<Stormnight />} />
        </Routes>
      </Sidebar>
      
    </div>
  );
}

export default App;


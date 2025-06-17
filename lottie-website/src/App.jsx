import React from "react";
import HeaderSection from "./components/HeaderSection";
import InputSection from "./components/InputSection";
import CursorSection from "./components/CursorSection";
import ScrollSection from "./components/ScrollSection";
import "./App.css";


function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>FinanzHero</h1>
          <nav className="nav-links">
            <a href="#home">Home</a>
            <a href="#services">Service</a>
            <a href="#about">Über uns</a>
          </nav>
      </header>

      <HeaderSection />
      <InputSection />
      <CursorSection />
      <ScrollSection /> 

    </div>
  );
}

export default App;

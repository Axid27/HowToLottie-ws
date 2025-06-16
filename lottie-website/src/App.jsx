import React from "react";
import HeaderSection from "./components/HeaderSection";
import InputSection from "./components/InputSection";
import CursorSection from "./components/CursorSection";
import ScrollSection from "./components/ScrollSection";
import "./App.css";
import LottiePraxisSlide from "./slides/LottiePraxisSlide";
import Presentation from "./slides/Presentation";

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

      {/* <HeaderSection />
      <InputSection />
      <CursorSection />
      <ScrollSection />  */}
      <Presentation />
    </div>
  );
}

export default App;

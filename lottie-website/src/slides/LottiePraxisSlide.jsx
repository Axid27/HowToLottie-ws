import React, { useState } from "react";
import { Slide } from "spectacle";
import Lottie from "lottie-react";
import animationData from "../animations/EmptyState.json";

const LottiePraxisSlide = () => {
  const [step, setStep] = useState(0);

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 0));

  return (
    <Slide>
      <div 
        tabIndex={0} 
        onClick={nextStep} 
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") nextStep();
          if (e.key === "ArrowLeft") prevStep();
        }}
        style={{ textAlign: "center", padding: "20px", outline: "none" }}
      >
        <h1 style={{ fontSize: "3rem", marginBottom: "10px" }}>Lottie-Praxis</h1>
        <h2 style={{ fontSize: "2rem", fontWeight: "lighter" }}>Interaktivität</h2>

        <div style={{
          width: "300px",
          margin: "auto",
          opacity: step >= 1 ? 1 : 0,
          transition: "opacity 1s ease-in-out"
        }}>
          <Lottie animationData={animationData} loop={true} />
        </div>

        <ul style={{
          fontSize: "1.5rem",
          listStyleType: "none",
          padding: "0",
          opacity: step >= 2 ? 1 : 0,
          transition: "opacity 1s ease-in-out"
        }}>
          <li>🎬 Animierte Übergänge</li>
          <li>🖱 Steuerung per Klick & Tastatur</li>
          <li>✨ Individuelle Anpassung möglich</li>
        </ul>
      </div>
    </Slide>
  );
};

export default LottiePraxisSlide;

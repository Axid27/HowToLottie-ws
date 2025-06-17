import React, { useRef } from "react";
import Lottie from "lottie-react";
import "./section.css";
// Importiere die Lottie-Animation


const InputSection = () => {
  // Ref für die Lottie-Animation
  // Damit können wir die Animation steuern (z.B. abspielen, pausieren)


  // Funktion, die aufgerufen wird, wenn der Button geklickt wird


  const bgStyle = {
    backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0)),
                      url('/images/futuristic-finance.jpg')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <section className="section input-section" style={bgStyle} id="input">
      <div className="glassy-container">
        <div className="text-content"><h1>Gib dein Passwort ein</h1></div>
        <div className="security-container"> 
          <div className="input-content">   
            <input type="text" placeholder="Gib dein Password ein:" />
            <button onClick={"handleClick"}>Verschlüsseln</button>
          </div>
          <div className="lottie-wrapper">
            {/* Hier wird die Lottie-Animation eingebunden */}
            
          </div>
        </div>   
      </div>  
    </section>
  );
};

export default InputSection;

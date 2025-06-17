import React, { useRef } from "react";
import Lottie from "lottie-react";
import "./section.css";
// Importiere die Lottie-Animation
import animationData from "../animations/SecurityLock.json";  // Pfad anpassen

const InputSection = () => {
  // Ref für die Lottie-Animation
  // Damit können wir die Animation steuern (z.B. abspielen, pausieren)
  const lottieRef = useRef();

  // Funktion, die aufgerufen wird, wenn der Button geklickt wird
  const handleClick = () => {
    lottieRef.current?.play();
  };

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
            <button onClick={handleClick}>Verschlüsseln</button>
          </div>
          <div className="lottie-wrapper">
            {/* Hier wird die Lottie-Animation eingebunden */}
            <Lottie 
              lottieRef={lottieRef}
              animationData={animationData}
              loop={false}
              autoplay={false}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>   
      </div>  
    </section>
  );
};

export default InputSection;

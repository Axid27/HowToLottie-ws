import React, { useRef } from "react";
import "@lottiefiles/lottie-player";
import "./section.css";

const InputSection = () => {
  const playerRef = useRef();

  const handleClick = () => {
    playerRef.current?.play();
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
          <lottie-player
            ref={playerRef}
            src="/animations/SecurityLock.json"
            background="transparent"
            speed="1"
            loop={false}
            autoplay={false}
            style={{ width: "50%", height: "50%" }}
          ></lottie-player>
        </div>   
      </div>  
    </section>
  );
};

export default InputSection;

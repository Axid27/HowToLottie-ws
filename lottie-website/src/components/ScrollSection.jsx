import React, { useEffect, useRef } from "react";
import "./section.css";
// Importiere die nötigen Lottie-Componenten
import "@lottiefiles/lottie-player";
import { create } from "@lottiefiles/lottie-interactivity";

const ScrollSection = () => {
  // Ref für die Scroll-Animation
  const playerRef = useRef();

  useEffect(() => {
    // Initialisiere die Lottie-Interaktivität, wie in der Doc
    create({
      player: playerRef.current,
      mode: "scroll",
      actions: [
        {
          visibility: [0.5, 1],
          type: "seek",
          frames: [0, 150],
        },
        {
          visibility: [0.2, 1],
          type: "seek",
          frames: [150, 355],
        },
      ],
    });
  }, []);

  return (
    <section className="section scroll-section" style={{ height: "300vh" }}>
      <h2>Stay Ahead While You Scroll</h2>
      {/* Hier wird die Lottie-Animation eingebunden */}
      <lottie-player
        ref={playerRef}
        src="./animations/EmptyState.json"
        background="transparent"
        speed="5"
        autoplay={false}
        loop
        style={{ width: "800px", height: "800px" }}
      ></lottie-player>
    </section>
  );
};

export default ScrollSection;

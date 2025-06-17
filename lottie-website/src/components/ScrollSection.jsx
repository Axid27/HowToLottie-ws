import React, { useEffect, useRef } from "react";
import "./section.css";
// Importiere die nötigen Lottie-Componenten


const ScrollSection = () => {
  // Ref für die Scroll-Animation
  const playerRef = useRef();

  useEffect(() => {
    // Initialisiere die Lottie-Interaktivität, wie in der Doc
    
  }, []);

  return (
    <section className="section scroll-section" style={{ height: "200vh" }}>
      <h2>Stay Ahead While You Scroll</h2>
      {/* Hier wird die Lottie-Animation eingebunden */}
      
    </section>
  );
};

export default ScrollSection;

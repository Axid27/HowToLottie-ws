import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import "./section.css";

export default function CursorSection() {

  // Ref für das Container-Element, in dem die Lottie-Animation gerendert wird
  const containerRef = useRef(null);

  // Ref für die Lottie-Animation, um sie später zu steuern
  const animRef = useRef(null);

  // Ref für die Lottie-Animation
  useEffect(() => {
    // Animation initialisieren, wenn das Component gemountet wird
   
    });

    // handleMouseMove function zum Updaten der Animation basierend auf der Mausposition
    const handleMouseMove = (e) => {
      const bounds = containerRef.current.getBoundingClientRect();
      const xPos = (e.clientX - bounds.left) / bounds.width;
      const frame = Math.min(Math.max(0, xPos), 1) * animRef.current.totalFrames;
      animRef.current.goToAndStop(frame, true);
    };

    // Füge den Mousemove-Event-Listener zum Container hinzu
    

   


  return (
    <section className="section cursor-section">
      <h2>Steuere mit deinem Cursor</h2>
      <div
        // Das Container-Element, in dem die Lottie-Animation gerendert wird
        
        style={{
          width: 400,
          height: 400,
          cursor: "pointer",
          border: "2px solid #ccc",
          borderRadius: "8px",
        }}
      ></div>
    </section>
  );
}
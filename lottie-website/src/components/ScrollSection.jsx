import React, { useEffect, useRef } from "react";
import "@lottiefiles/lottie-player";
import { create } from "@lottiefiles/lottie-interactivity";
import "./section.css";

const ScrollSection = () => {
  const playerRef = useRef();

  useEffect(() => {
    create({
      player: playerRef.current,
      mode: "scroll",
      actions: [
        {
          visibility: [0, 1],
          type: "seek",
          frames: [0, 100],
        },
      ],
    });
  }, []);

  return (
    <section className="section scroll-section" style={{ height: "200vh" }}>
      <h2>Stay Ahead While You Scroll</h2>
      <lottie-player
        ref={playerRef}
        src="/animations/GrowthGraph.json"
        background="transparent"
        speed="1"
        autoplay={false}
        loop
        style={{ width: "400px", height: "400px" }}
      ></lottie-player>
    </section>
  );
};

export default ScrollSection;

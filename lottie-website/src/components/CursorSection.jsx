import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import "./section.css";

export default function CursorSection() {
  const containerRef = useRef(null);
  const animRef = useRef(null);

  useEffect(() => {
    animRef.current = lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg",
      loop: false,
      autoplay: false,
      path: "/animations/SecurityLock.json", // Path to your Lottie JSON file
    });

    const handleMouseMove = (e) => {
      const bounds = containerRef.current.getBoundingClientRect();
      const xPos = (e.clientX - bounds.left) / bounds.width;
      const frame = Math.min(Math.max(0, xPos), 1) * animRef.current.totalFrames;
      animRef.current.goToAndStop(frame, true);
    };

    containerRef.current?.addEventListener("mousemove", handleMouseMove);

    return () => {
      animRef.current.destroy();
      containerRef.current?.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="section cursor-section">
      <h2>Steuere mit deinem Cursor</h2>
      <div
        ref={containerRef}
        style={{
          width: 400,
          height: 400,
          border: "1px solid #ccc",
          cursor: "pointer",
        }}
      ></div>
    </section>
  );
}

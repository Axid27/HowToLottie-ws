import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import animationData from "../animations/LandingPageHeader.json";

const HeaderSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData,
    });

    return () => anim.destroy();
  }, []);

  const bgStyle = {
    backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0)), url('/images/futuristic-finance.jpg')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <section className="section header-section" styleid="home">
      <div className="text-content">
        <h1>Einkaufen einfach gemacht</h1>
        <p>Das Einkaufen der Zukunft: <br /> Scannen. Bezahlen. Fertig.</p>
      </div>
      <div ref={containerRef} style={{ width: "100%", height: "100%",  margin: "0px 0px -125px 0px" }} />
    </section>
  );
};

export default HeaderSection;

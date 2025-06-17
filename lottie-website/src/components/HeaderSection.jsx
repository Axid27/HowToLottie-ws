
import Lottie from "lottie-react";
import "./section.css"; 
// Importiere die Lottie-Animation
import animationData from "../animations/LandingPageHeader.json";

const HeaderSection = () => {
 

  return (
    <section className="section header-section"  id="home">
      <div className="text-content">
        <h1>Einkaufen einfach gemacht</h1>
        <p>Das Einkaufen der Zukunft: <br /> Scannen. Bezahlen. Fertig.</p>
      </div>
      <div style={{ width: "50%", height: "50%", margin: "0px 0px 350px 0px" }}>
        {/* Hier wird die Lottie-Animation eingebunden */}
        <Lottie 
          animationData={animationData} 
          loop={true} 
          autoplay={true} 
        />
      </div>
    </section>
  );
};

export default HeaderSection;

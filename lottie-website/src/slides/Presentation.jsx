import React from "react";
import { Deck } from "spectacle";
import LottiePraxisSlide from "./LottiePraxisSlide.jsx";

const Presentation = () => (
  <Deck transition={["fade"]} transitionDuration={500}>
    <LottiePraxisSlide />
  </Deck>
);

export default Presentation;

import React from "react";
import Canvas from "../../components/common/Canvas";
import ColoredText from "../../components/styled/ColoredText";
import { FlexSection } from "../../components/styled/Flex";
import SelfportraitImage from "../../images/Selfportrait.png";

import "./styles.css";

const Selfportrait = () => {
  return (
    <FlexSection
      height="100%"
      justifyContent="space-between"
      alignItems="center"
    >
      <img
        className="selfportrait-figure"
        src={SelfportraitImage}
        alt="selfportrait"
      />

      <figure className="canvas-figure">
        <figcaption>
          Ovo je slikar Marino Tartaglia.
          <br /> Marino je sebe naslikao bez crtanja obrisne linije.
          <br /> Punio je plohe bojom, a one su počele tvoriti lice.
          <br /> Jesi li ikad nacrtao/la sebe?
          <ColoredText color="#5a2780" isBold={true}>
            Pokušaj to napraviti na ovaj način!
          </ColoredText>
        </figcaption>
        <Canvas width="350" height="580" />
      </figure>
    </FlexSection>
  );
};

export default Selfportrait;

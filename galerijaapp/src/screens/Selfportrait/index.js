import React from "react";
import Canvas from "../../components/common/Canvas";
import ColoredText from "../../components/styled/ColoredText";
import { FlexSection } from "../../components/styled/Flex";

import "./styles.css";

const Selfportrait = ({ canvasSrc, updateUser, SelfportraitImg }) => {
  return (
    <FlexSection
      height="100%"
      justifyContent="space-between"
      alignItems="center"
    >
      <img
        className="selfportrait-figure"
        src={SelfportraitImg}
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
        <Canvas
          width={window.innerHeight < 750 ? "250" : "350"}
          height="65%"
          canvasSrc={canvasSrc}
          updateUser={updateUser}
          parent="selfportrait"
        />
      </figure>
    </FlexSection>
  );
};

export default Selfportrait;

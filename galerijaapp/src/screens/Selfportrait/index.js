import React, { useEffect } from "react";
import Canvas from "../../components/common/Canvas";
import ColoredText from "../../components/styled/ColoredText";
import { FlexSection } from "../../components/styled/Flex";
import SelfportraitImage from "../../images/Selfportrait.png";

import "./styles.css";
import { convertCanvasToImg } from "../../utils/convertCanvasToImg";
import { addSelfportraitImage } from "../../services/user";

const Selfportrait = () => {
  useEffect(() => {
    const id = localStorage.getItem("id");
    return () => {
      const drawing = convertCanvasToImg(0);
      addSelfportraitImage(id, drawing).then((res) => console.log(res));
    };
  }, []);

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

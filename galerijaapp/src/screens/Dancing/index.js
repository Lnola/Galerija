import React, { useEffect } from "react";
import styled from "styled-components";

import { FlexSection } from "../../components/styled/Flex";
import Canvas from "../../components/common/Canvas";
import ColoredText from "../../components/styled/ColoredText";

import DancingImage from "../../images/dancing.jpg";
import { convertCanvasToImg } from "../../utils/convertCanvasToImg";
import { addDancingImage } from "../../services/user";

const Text = styled.span`
  font-size: 28px;
  width: 25%;
  text-shadow: 0px 0px 0.6px #000;
`;

const Dancing = () => {
  useEffect(() => {
    const id = localStorage.getItem("id");
    return () => {
      const drawing = convertCanvasToImg(0);
      addDancingImage(id, drawing).then((res) => console.log(res));
    };
  }, []);

  return (
    <FlexSection
      height="100%"
      justifyContent="space-around"
      alignItems="center"
    >
      <Canvas width="50%" height="90%" backgroundImage={DancingImage} />
      <Text>
        Ovaj rad napravio je Miroslav Kraljević. Prikazuje par u plesu.
        <br /> <br />
        Mislimo da mu fali boja.
        <ColoredText color="#e50000" isBold={true}>
          Pomozi nam i oboji ga!
        </ColoredText>
      </Text>
    </FlexSection>
  );
};

export default Dancing;

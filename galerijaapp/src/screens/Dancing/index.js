import React from "react";
import styled from "styled-components";

import { FlexSection } from "../../components/styled/Flex";
import Canvas from "../../components/common/Canvas";
import ColoredText from "../../components/styled/ColoredText";

const Text = styled.span`
  font-size: 160%;
  width: 25%;
  text-shadow: 0px 0px 0.6px #000;

  @media screen and (max-height: 750px) {
    font-size: 120%;
  }
`;

const Dancing = ({ canvasSrc, updateUser, DancingImg }) => {
  return (
    <FlexSection
      height="100%"
      justifyContent="space-around"
      alignItems="center"
    >
      <Canvas
        width={`${window.innerHeight / 1.4}`}
        height="90%"
        backgroundImage={DancingImg}
        canvasSrc={canvasSrc}
        updateUser={updateUser}
        parent="dancing"
      />
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

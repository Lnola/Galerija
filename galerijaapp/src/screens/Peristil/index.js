import React, { useState } from "react";
import Canvas from "../../components/common/Canvas";
import { ColoredTextSpan } from "../../components/styled/ColoredText";

import styled from "styled-components";
import Flex, { FlexSection } from "../../components/styled/Flex";

const Arrow = styled.img`
  position: absolute;
  height: 40%;
  margin-left: -20px;
`;

const Text = styled.p`
  font-size: 28px;
  margin-bottom: -10%;
`;

const Peristil = ({
  canvasSrc,
  updateUser,
  OrangeArrowDownImg,
  PeristilImg,
}) => {
  const [isCanvasClicked, setIsCanvasClicked] = useState(false);

  return (
    <FlexSection
      height="100%"
      wrap="wrap"
      justifyContent="center"
      alignItems="center"
      margin="-3% 0 0 0"
    >
      <Text>
        Kako bi ti preuredio/la Peristil?
        <ColoredTextSpan color="#e26714" isBold={true}>
          To možeš napraviti na ovoj fotografiji!
        </ColoredTextSpan>
      </Text>
      <Flex position="relative" justifyContent="center">
        {!isCanvasClicked && (
          <Arrow src={OrangeArrowDownImg} alt="orange arrow down" />
        )}
        <Canvas
          width={`${window.innerHeight / 0.85}`}
          height="67%"
          backgroundImage={PeristilImg}
          setIsCanvasClicked={setIsCanvasClicked}
          canvasSrc={canvasSrc}
          updateUser={updateUser}
          parent={"peristil"}
        />
      </Flex>
    </FlexSection>
  );
};

export default Peristil;

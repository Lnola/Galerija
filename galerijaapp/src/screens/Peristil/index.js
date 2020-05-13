import React, { useState, useEffect } from "react";
import Canvas from "../../components/common/Canvas";
import { ColoredTextSpan } from "../../components/styled/ColoredText";

import OrangeArrowDown from "../../images/orangeArrowDown.png";
import PeristilImage from "../../images/peristil.jpg";
import styled from "styled-components";
import Flex, { FlexSection } from "../../components/styled/Flex";
import { addPeristilImage } from "../../services/user";
import { convertCanvasToImg } from "../../utils/convertCanvasToImg";

const Arrow = styled.img`
  position: absolute;
  height: 40%;
  margin-left: -20px;
`;

const Text = styled.p`
  font-size: 28px;
  margin-bottom: -10%;
`;

const Peristil = () => {
  const [isCanvasClicked, setIsCanvasClicked] = useState(false);

  useEffect(() => {
    const id = localStorage.getItem("id");
    return () => {
      const drawing = convertCanvasToImg(0);
      addPeristilImage(id, drawing).then((res) => console.log(res));
    };
  }, []);

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
          <Arrow src={OrangeArrowDown} alt="orange arrow down" />
        )}
        <Canvas
          width="1000"
          height="582.5"
          backgroundImage={PeristilImage}
          setIsCanvasClicked={setIsCanvasClicked}
        />
      </Flex>
    </FlexSection>
  );
};

export default Peristil;

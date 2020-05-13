import React, { useEffect } from "react";

import styled from "styled-components";
import Flex, { FlexSection } from "../../components/styled/Flex";
import Canvas from "../../components/common/Canvas";

import SamIvImage from "../../images/samIV.jpg";
import SamIvText from "../../images/samIVtext.png";
import { convertCanvasToImg } from "../../utils/convertCanvasToImg";
import { addSamIvImage } from "../../services/user";

const StyledImage = styled.img`
  ${({ height }) => height && `height: ${height};`}
`;

const CanvasWrapper = styled.span`
  margin-left: 3%;
  margin-top: 6%;
`;

const SamIV = () => {
  useEffect(() => {
    const id = localStorage.getItem("id");
    return () => {
      const drawing = convertCanvasToImg(0);
      addSamIvImage(id, drawing).then((res) => console.log(res));
    };
  }, []);

  return (
    <FlexSection
      height="100%"
      justifyContent="space-around"
      alignItems="center"
    >
      <StyledImage src={SamIvImage} alt="SamIV" height="75%" />

      <Flex direction="column">
        <StyledImage src={SamIvText} alt="SamIV" height="300px" />
        <CanvasWrapper>
          <Canvas width="450" height="350" />
        </CanvasWrapper>
      </Flex>
    </FlexSection>
  );
};

export default SamIV;

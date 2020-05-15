import React from "react";

import styled from "styled-components";
import Flex, { FlexSection } from "../../components/styled/Flex";
import Canvas from "../../components/common/Canvas";

const StyledImage = styled.img`
  ${({ width }) => width && `width: ${width};`}
`;

const CanvasWrapper = styled.span`
  margin-left: 3%;
  margin-top: 6%;
`;

const SamIV = ({ canvasSrc, updateUser, SamIvImg, SamIvTextImg }) => {
  return (
    <FlexSection
      height="100%"
      justifyContent="space-around"
      alignItems="center"
    >
      <StyledImage src={SamIvImg} alt="SamIV" height="75%" />

      <Flex direction="column" alignItems="center">
        <StyledImage src={SamIvTextImg} alt="SamIV" width="80%" />
        <CanvasWrapper>
          <Canvas
            width={`${window.innerHeight / 2}`}
            height="38%"
            canvasSrc={canvasSrc}
            updateUser={updateUser}
            parent="samIV"
          />
        </CanvasWrapper>
      </Flex>
    </FlexSection>
  );
};

export default SamIV;

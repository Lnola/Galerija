import React from "react";
import styled from "styled-components";

import { FlexSection } from "../../components/styled/Flex";

const StyledImage = styled.img`
  height: 90%;
`;

const Textarea = styled.textarea`
  position: absolute;
  bottom: 15%;
  left: 47.8%;
  width: 46.8%;
  height: 25.7%;
  resize: none;
  font-size: 22px;
  border-color: transparent;
  background-color: transparent;
  padding: 3px 5px;
  box-sizing: border-box;
`;

const Sun = ({ sunInput, setSunInput, SunImg }) => {
  return (
    <FlexSection
      height="100%"
      justifyContent="center"
      alignItems="center"
      position="relative"
    >
      <StyledImage src={SunImg} alt="U ime ja" />
      <Textarea
        value={sunInput}
        onChange={(e) => setSunInput(e.target.value)}
      />
    </FlexSection>
  );
};

export default Sun;

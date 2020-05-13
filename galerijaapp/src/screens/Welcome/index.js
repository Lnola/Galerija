import React from "react";
import styled from "styled-components";

import Screen from "../../images/Screen.png";
import { FlexSection } from "../../components/styled/Flex";

const ImageScreen = styled.img`
  height: 95%;
`;

const Welcome = () => {
  return (
    <FlexSection height="100%" justifyContent="center" alignItems="center">
      <ImageScreen src={Screen} alt="screen one" />
    </FlexSection>
  );
};

export default Welcome;

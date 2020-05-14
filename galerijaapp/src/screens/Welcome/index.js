import React from "react";
import styled from "styled-components";

import { FlexSection } from "../../components/styled/Flex";

const ImageScreen = styled.img`
  height: 95%;
`;

const Welcome = ({ WelcomeImg }) => {
  return (
    <FlexSection height="100%" justifyContent="center" alignItems="center">
      <ImageScreen src={WelcomeImg} alt="screen one" />
    </FlexSection>
  );
};

export default Welcome;

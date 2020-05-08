import React, { useState } from "react";

import ArtistImg from "../../images/artist.png";
import styled, { css } from "styled-components";
import { FlexSection } from "../../components/styled/Flex";
import LineInput from "../../components/styled/LineInput";

const StyledImage = styled.img`
  height: 90%;
`;

const LineCss = css`
  position: absolute;
  bottom: 7.5%;
  left: 11%;
  width: 69%;
  background-color: transparent;
  border-bottom: none;
`;

const Artist = () => {
  const [input, setInput] = useState("");
  return (
    <FlexSection
      height="100%"
      justifyContent="center"
      alignItems="center"
      position="relative"
    >
      <StyledImage src={ArtistImg} alt="Artist" />
      <LineInput
        width="100%"
        fontSize="22px"
        css={LineCss}
        autoFocus
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </FlexSection>
  );
};

export default Artist;

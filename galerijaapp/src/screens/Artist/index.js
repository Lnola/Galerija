import React, { useState, useEffect } from "react";

import ArtistImg from "../../images/artist.png";
import styled, { css } from "styled-components";
import { FlexSection } from "../../components/styled/Flex";
import LineInput from "../../components/styled/LineInput";
import { addArtistInput } from "../../services/user";

const StyledImage = styled.img`
  height: 90%;
  position: relative;
  ${({ animation }) => animation && `animation: ${animation} 1s;`}
`;

const LineCss = css`
  position: absolute;
  bottom: 7.5%;
  left: 11%;
  width: 69%;
  background-color: transparent;
  border-bottom: none;
`;

const Artist = ({ animation }) => {
  const [input, setInput] = useState("");

  useEffect(() => {
    const id = localStorage.getItem("id");
    return () => {
      addArtistInput(id, input);
      // .then((res) => console.log(res));
    };
  }, []);

  return (
    <FlexSection
      height="100%"
      justifyContent="center"
      alignItems="center"
      position="relative"
    >
      <StyledImage src={ArtistImg} alt="Artist" animation={animation} />
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

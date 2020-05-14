import React from "react";

import GarbageImage from "../../images/garbage.png";
import styled from "styled-components";
import { FlexSection } from "../../components/styled/Flex";
import { ColoredTextSpan } from "../../components/styled/ColoredText";
import LineInput from "../../components/styled/LineInput";

const StyledImage = styled.img`
  width: 96%;
  height: 69%;
  margin-top: 5%;
`;

const Text = styled.span`
  font-size: 28px;
  text-shadow: 0px 0px 0.6px #000;
  margin-top: -5%;
  margin-left: -21%;
`;

const Garbage = ({ garbageInput, setGarbageInput }) => {
  return (
    <FlexSection height="100%" justifyContent="center" wrap="wrap">
      <StyledImage src={GarbageImage} alt="garbage" />

      <Text>
        Ovo je Vrt prošlosti i budućnosti. Posadili smo ga prije pet
        <br />
        godina.
        <ColoredTextSpan color="#5b9bd5" isBold={true} marginLeft="5px">
          Kako ćeš nazvati svoj vrt?
        </ColoredTextSpan>
        <LineInput
          margin="0 0 0 10px"
          width="350px"
          fontSize="22px"
          value={garbageInput}
          onChange={(e) => setGarbageInput(e.target.value)}
        />
      </Text>
    </FlexSection>
  );
};

export default Garbage;

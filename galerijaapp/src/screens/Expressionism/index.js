import React from "react";

import { FlexSection, FlexArticle } from "../../components/styled/Flex";
import styled from "styled-components";
import ColoredText from "../../components/styled/ColoredText";

const StyledImage = styled.img`
  height: 90%;
`;

const Textarea = styled.textarea`
  resize: none;
  font-size: 22px;
  margin-top: 30px;
  border: 0;
  border-bottom: 2px solid #000;
  width: 100%;
  overflow: hidden;
`;

const TextareaWrapper = styled.div`
  position: relative;

  &:after {
    content: "";
    display: inline-block;
    position: absolute;
    top: 48%;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: black;
  }

  &:before {
    content: "";
    display: inline-block;
    position: absolute;
    top: 73%;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: black;
  }
`;

const TextWrapper = styled.span`
  font-size: 160%;
  text-shadow: 0px 0px 0.6px #000;
  margin-bottom: 30px;

  @media screen and (max-height: 750px) {
    font-size: 120%;
  }
`;

const Expressionism = ({
  expressionismInput,
  setExpressionismInput,
  ExpressionismImg,
}) => {
  return (
    <FlexSection
      height="100%"
      alignItems="center"
      justifyContent="space-around"
    >
      <StyledImage src={ExpressionismImg} alt="expressionism" />

      <FlexArticle width="40%" direction="column">
        <TextWrapper>
          Čak je i odraslima teško prepoznati što se sve nalazi na ovoj slici.
          <ColoredText color="#00b050" isBold="true">
            Pokušaj i svoj odgovor napiši na crtu!
          </ColoredText>
          Da igra bude zabavnija, izazovi roditelje, brata ili sestru.
          <br />
          Sretno!
        </TextWrapper>

        <TextareaWrapper>
          <Textarea
            cols="20"
            rows="3"
            value={expressionismInput}
            onChange={(e) => setExpressionismInput(e.target.value)}
          />
        </TextareaWrapper>
      </FlexArticle>
    </FlexSection>
  );
};

export default Expressionism;

import React, { useState, useEffect } from "react";

import { FlexSection, FlexArticle } from "../../components/styled/Flex";
// import LineInput from "../../components/styled/LineInput";
import ExpressionismImage from "../../images/expressionism.png";
import styled from "styled-components";
import ColoredText from "../../components/styled/ColoredText";
import { addExpressionismInput } from "../../services/user";

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
  font-size: 28px;
  text-shadow: 0px 0px 0.6px #000;
  margin-bottom: 30px;
`;

const Expressionism = () => {
  const [textareaInput, setTextareaInput] = useState("");

  useEffect(() => {
    const id = localStorage.getItem("id");
    return () => {
      addExpressionismInput(id, textareaInput);
      // .then((res) => console.log(res));
    };
  }, []);

  return (
    <FlexSection
      height="100%"
      alignItems="center"
      justifyContent="space-around"
    >
      <StyledImage src={ExpressionismImage} alt="expressionism" />

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
            value={textareaInput}
            onChange={(e) => setTextareaInput(e.target.value)}
          />
        </TextareaWrapper>
      </FlexArticle>
    </FlexSection>
  );
};

export default Expressionism;

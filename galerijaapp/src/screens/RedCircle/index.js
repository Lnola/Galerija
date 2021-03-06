import React from "react";

import { ColoredTextSpan } from "../../components/styled/ColoredText";
import LineInput from "../../components/styled/LineInput";
import { FlexSection } from "../../components/styled/Flex";
import styled, { css } from "styled-components";

const imagesCss = css`
  img:first-of-type {
    margin-bottom: 15%;
  }
`;

const textCss = css`
  width: 40%;
  font-size: 160%;

  article:first-of-type {
    margin-bottom: 20px;
  }

  @media screen and (max-height: 750px) {
    font-size: 110%;
  }
`;

const Textarea = styled.textarea`
  width: 98%;
  height: 200px;
  border: 2px solid #000;
  padding: 5px;
  box-sizing: border-box;
  margin-top: 10px;
  font-size: 120%;
`;

const StyledImage = styled.img`
  height: 40%;
`;

const RedCircle = ({
  redCircleLocation,
  setRedCircleLocation,
  redCircleExplanation,
  setRedCircleExplanation,
  RedPeristilImg,
  RedCirclePeristilImg,
}) => {
  const color = "#3792cb";

  return (
    <FlexSection
      height="100%"
      justifyContent="space-around"
      alignItems="center"
    >
      <FlexSection
        height="95%"
        direction="column"
        justifyContent="center"
        css={imagesCss}
      >
        <StyledImage src={RedPeristilImg} alt="" />
        <StyledImage src={RedCirclePeristilImg} alt="" />
      </FlexSection>

      <FlexSection
        height="95%"
        direction="column"
        justifyContent="center"
        css={textCss}
      >
        <article>
          <p>Sigurno prepoznaješ ovo mjesto.</p>
          <ColoredTextSpan color={color} isBold={true}>
            Kako se zove?
          </ColoredTextSpan>
          <LineInput
            fontSize={window.innerHeight < 750 ? "110%" : "160%"}
            width="145px"
            margin="0 0 0 10px"
            type="text"
            value={redCircleLocation}
            onChange={(e) => setRedCircleLocation(e.target.value)}
          />
        </article>

        <article>
          Skupina studenata i učenika dugo je i pomno pripremala svoju akciju. U
          malenom stanu na Peristilu danima su prikupljali boju.
          <br />
          Kupovali su je u malim količinama, tek po jednu kanticu, da nitko ne
          bi posumnjao u to što će s njom napraviti. Jedne noći dok je Split
          polako tonuo u duboki san, družina je uzela kantice crvene boje i
          obojila Peristil u crveno.
          <br />
          <ColoredTextSpan color={color} isBold={true}>
            Što misliš zašto?
          </ColoredTextSpan>
          <Textarea
            value={redCircleExplanation}
            onChange={(e) => setRedCircleExplanation(e.target.value)}
          ></Textarea>
        </article>
      </FlexSection>
    </FlexSection>
  );
};

export default RedCircle;

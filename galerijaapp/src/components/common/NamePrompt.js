import React from "react";
import LineInput from "../styled/LineInput";
import styled, { css } from "styled-components";
import { FlexSection } from "../styled/Flex";

const StyledAside = styled.aside`
  position: fixed;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 130%;
`;

const StyledButton = styled.button`
  margin-top: 10px;
  font-size: 80%;
  padding: 2px;
`;

const sectionCss = css`
  background-color: white;
  padding: 30px 40px;
`;

const handleButtonClick = (setIsNamePromptShown, userName) => {
  if (userName.length >= 2) setIsNamePromptShown(false);
  else alert("Ime mora biti duže od 2 znaka :)");
};

const NamePrompt = ({ setIsNamePromptShown, userName, setUserName }) => {
  return (
    <StyledAside>
      <FlexSection direction="column" css={sectionCss}>
        <LineInput
          placeholder="Upiši nadimak na crtu..."
          type="text"
          fontSize="120%"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <StyledButton
          onClick={() => handleButtonClick(setIsNamePromptShown, userName)}
        >
          Spremi nadimak i kreni!
        </StyledButton>
      </FlexSection>
    </StyledAside>
  );
};

export default NamePrompt;

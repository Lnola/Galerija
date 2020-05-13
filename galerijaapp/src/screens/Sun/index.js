import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { FlexSection } from "../../components/styled/Flex";
import SunImage from "../../images/sun.png";
import { addSunInput } from "../../services/user";

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

const Sun = () => {
  const [input, setInput] = useState("");

  useEffect(() => {
    const id = localStorage.getItem("id");
    return () => {
      addSunInput(id, input).then((res) => console.log(res));
    };
  }, []);

  return (
    <FlexSection
      height="100%"
      justifyContent="center"
      alignItems="center"
      position="relative"
    >
      <StyledImage
        src={SunImage}
        alt="U ime ja"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Textarea />
    </FlexSection>
  );
};

export default Sun;

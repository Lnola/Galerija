import React, { useEffect, useState } from "react";

import styled from "styled-components";
import Start from "./screens/Start";
import Welcome from "./screens/Welcome";
import Selfportrait from "./screens/Selfportrait";
import RedCircle from "./screens/RedCircle";
import Peristil from "./screens/Peristil";
import Expressionism from "./screens/Expressionism";
import Bird from "./screens/Bird";
import Artist from "./screens/Artist";
import SamIV from "./screens/SamIV";
import Sun from "./screens/Sun";
import Dancing from "./screens/Dancing";
import Garbage from "./screens/Garbage";

import "./styles.css";

const StyledMain = styled.main`
  position: relative;
  ${({ width }) => width && `width: ${(window.innerHeight * 4) / 3}px;`}
  ${({ height }) => height && `height: ${window.innerHeight}px;`}
`;

const App = () => {
  const [width, setWidth] = useState((window.innerHeight * 4) / 3);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth((window.innerHeight * 4) / 3);
      setHeight(window.innerHeight);
    });
  }, []);
  return (
    <StyledMain width={width} height={height}>
      {/* <Start /> */}
      {/* <Welcome /> */}
      {/* <Selfportrait /> */}
      {/* <RedCircle /> */}
      {/* <Peristil /> */}
      {/* <Expressionism /> */}
      {/* <Bird /> */}
      {/* <Artist /> */}
      {/* <SamIV /> */}
      <Sun />
      {/* <Dancing /> */}
      {/* <Garbage /> */}
    </StyledMain>
  );
};

export default App;

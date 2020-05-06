import React, { useEffect, useState } from "react";

import styled from "styled-components";
import Start from "./screens/Start";
import Welcome from "./screens/Welcome";
import Selfportrait from "./screens/Selfportrait";

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
      <Selfportrait />
    </StyledMain>
  );
};

export default App;

import React from "react";

import styled from "styled-components";

import "./styles.css";

const StyledMain = styled.main`
  width: ${(window.innerHeight * 4) / 3}px;
  height: ${window.innerHeight}px;
`;

const App = () => {
  return <StyledMain></StyledMain>;
};

export default App;

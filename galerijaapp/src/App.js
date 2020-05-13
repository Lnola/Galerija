import React, { useEffect, useState, useRef } from "react";

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
import { findOrDefaultLS } from "./utils/findOrDefaultLS";

const useKey = (key, callback) => {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  });

  useEffect(() => {
    function handle(event) {
      if (event.keyCode === key) {
        callbackRef.current(event);
      }
    }

    window.addEventListener("keydown", handle);
    return () => window.removeEventListener("keydown", handle);
  }, [key]);
};

const StyledMain = styled.main`
  position: relative;
  ${({ width }) => width && `width: ${(window.innerHeight * 4) / 3}px;`}
  ${({ height }) => height && `height: ${window.innerHeight}px;`}

  &> section {
    position: relative;
    ${({ animation }) => animation && `animation: ${animation} 1s;`};
  }
`;

const App = () => {
  const lsScreenIndex = findOrDefaultLS("screenIndex", 0, true);

  const [width, setWidth] = useState((window.innerHeight * 4) / 3);
  const [height, setHeight] = useState(window.innerHeight);
  const [screenIndex, setScreenIndex] = useState(lsScreenIndex);
  const [animation, setAnimation] = useState("slideFromRight");

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth((window.innerHeight * 4) / 3);
      setHeight(window.innerHeight);
    });
  }, []);

  const handleNextSlide = () => {
    if (screenIndex !== screensArray.length - 1) {
      setScreenIndex(screenIndex + 1);
      setAnimation("slideFromRight");
      localStorage.setItem("screenIndex", screenIndex + 1);
    }
  };

  const handlePreviousSlide = () => {
    if (screenIndex !== 0) {
      setScreenIndex(screenIndex - 1);
      setAnimation("slideFromLeft");
      localStorage.setItem("screenIndex", screenIndex - 1);
    }
  };

  useKey(39, handleNextSlide);
  useKey(37, handlePreviousSlide);

  const screensArray = [
    <Start />,
    <Welcome />,
    <Selfportrait />,
    <RedCircle />,
    <Peristil />,
    <Expressionism />,
    <Bird />,
    <Artist animation={animation} />,
    <SamIV />,
    <Sun />,
    <Dancing />,
    <Garbage />,
  ];

  return (
    <StyledMain width={width} height={height} animation={animation}>
      {screensArray[screenIndex]}
    </StyledMain>
  );
};

export default App;

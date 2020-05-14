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
import {
  addUser,
  getUser,
  addRedCircleLocation,
  addRedCircleExplanation,
  addExpressionismInput,
  addArtistInput,
  addSunInput,
  addGarbageInput,
} from "./services/user";

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
  const [user, setUser] = useState(null);
  const [isUpdateFinished, setIsUpdateFinished] = useState(true);
  // RedCircle state
  const [redCircleLocation, setRedCircleLocation] = useState("");
  const [redCircleExplanation, setRedCircleExplanation] = useState("");
  // Expressionism state
  const [expressionismInput, setExpressionismInput] = useState("");
  // Artist state
  const [artistInput, setArtistInput] = useState("");
  // Sun state
  const [sunInput, setSunInput] = useState("");
  // Garbage state
  const [garbageInput, setGarbageInput] = useState("");

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth((window.innerHeight * 4) / 3);
      setHeight(window.innerHeight);
    });
  }, []);

  useEffect(() => {
    const id = findOrDefaultLS("id", null, true);
    if (!id) {
      addUser(null).then(({ data }) => localStorage.setItem("id", data));
    } else {
      updateUser();
    }
  }, [screenIndex]);

  const updateUser = () => {
    const id = findOrDefaultLS("id", null, true);
    getUser(id).then(({ data }) => {
      setUser(data);
      setRedCircleLocation(data.redCircleLocation);
      setRedCircleExplanation(data.redCircleExplanation);
    });
  };

  const saveInputToDatabase = () => {
    setIsUpdateFinished(false);

    const id = localStorage.getItem("id");
    switch (screenIndex) {
      case 3:
        Promise.all([
          addRedCircleLocation(id, redCircleLocation),
          addRedCircleExplanation(id, redCircleExplanation),
        ])
          .then(() => updateUser())
          .finally(() => {
            setIsUpdateFinished(true);
          });
        break;
      case 5:
        addExpressionismInput(id, expressionismInput)
          .then(() => updateUser())
          .finally(() => {
            setIsUpdateFinished(true);
          });
        break;
      case 7:
        addArtistInput(id, artistInput)
          .then(() => updateUser())
          .finally(() => {
            setIsUpdateFinished(true);
          });
        break;
      case 9:
        addSunInput(id, sunInput)
          .then(() => updateUser())
          .finally(() => {
            setIsUpdateFinished(true);
          });
        break;
      case 11:
        addGarbageInput(id, garbageInput)
          .then(() => updateUser())
          .finally(() => {
            setIsUpdateFinished(true);
          });
        break;

      default:
        setIsUpdateFinished(true);
        break;
    }
  };

  const handleNextSlide = () => {
    if (screenIndex !== screensArray.length - 1 && isUpdateFinished) {
      setScreenIndex(screenIndex + 1);
      setAnimation("slideFromRight");
      localStorage.setItem("screenIndex", screenIndex + 1);
    }
    saveInputToDatabase(screenIndex);
  };

  const handlePreviousSlide = () => {
    if (screenIndex !== 0 && isUpdateFinished) {
      setScreenIndex(screenIndex - 1);
      setAnimation("slideFromLeft");
      localStorage.setItem("screenIndex", screenIndex - 1);
    }
    saveInputToDatabase(screenIndex);
  };

  useKey(39, handleNextSlide);
  useKey(37, handlePreviousSlide);

  const screensArray = [
    <Start
      canvasSrc={user !== null && user.galleryDrawing}
      updateUser={updateUser}
    />,
    <Welcome />,
    <Selfportrait
      canvasSrc={user !== null && user.selfportraitImage}
      updateUser={updateUser}
    />,
    <RedCircle
      redCircleLocation={redCircleLocation}
      redCircleExplanation={redCircleExplanation}
      setRedCircleLocation={setRedCircleLocation}
      setRedCircleExplanation={setRedCircleExplanation}
    />,
    <Peristil
      canvasSrc={user !== null && user.peristilImage}
      updateUser={updateUser}
    />,
    <Expressionism
      expressionismInput={expressionismInput}
      setExpressionismInput={setExpressionismInput}
    />,
    <Bird
      wcanvasSrc={user !== null && user.birdWithBackground}
      wocanvasSrc={user !== null && user.birdWithoutBackground}
      updateUser={updateUser}
    />,
    <Artist
      animation={animation}
      artistInput={artistInput}
      setArtistInput={setArtistInput}
    />,
    <SamIV
      canvasSrc={user !== null && user.samIVImage}
      updateUser={updateUser}
    />,
    <Sun sunInput={sunInput} setSunInput={setSunInput} />,
    <Dancing
      canvasSrc={user !== null && user.dancingImage}
      updateUser={updateUser}
    />,
    <Garbage garbageInput={garbageInput} setGarbageInput={setGarbageInput} />,
  ];

  return (
    <StyledMain width={width} height={height} animation={animation}>
      {screensArray[screenIndex]}
    </StyledMain>
  );
};

export default App;

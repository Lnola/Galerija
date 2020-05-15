import React from "react";
import styled from "styled-components";

import Canvas from "../../components/common/Canvas";
import { FlexSection } from "../../components/styled/Flex";

import "./styles.css";

const ColorCircle = styled.span`
  ${({ color }) => color && `background-color:${color}`};
  display: flex;
  width: ${window.innerHeight / 3.8}px;
  height: ${window.innerHeight / 3.8}px;
  border-radius: 50%;
  box-shadow: -15px 0 30px -10px rgba(0, 0, 0, 0.75);
  color: #fff;
  font-size: 160%;
  text-align: center;
  justify-content: center;
  align-items: center;
  overflow: auto !important;

  span {
    max-width: ${window.innerHeight / 4.5}px;
    font-size: 80%;
  }

  @media screen and (max-height: 750px) {
    font-size: 120%;
    box-shadow: -5px 0 20px -10px rgba(0, 0, 0, 0.75);
  }
`;

const Heading = styled.p`
  ${({ color }) => color && `color: ${color}`};
  ${({ marginBottom }) => marginBottom && `margin-bottom: ${marginBottom}`};
  ${({ isUpperCase }) => isUpperCase && `text-transform: uppercase`};
  flex-basis: 100%;
  font-size: 270%;
  text-align: center;

  @media screen and (max-height: 750px) {
    font-size: 200%;
  }
`;

const Start = ({ canvasSrc, updateUser, RedArrowImg }) => {
  return (
    <FlexSection justifyContent="center" wrap="wrap" height="90%">
      <ColorCircle color="purple" className="purple-circle">
        Nacrtaj Galeriju umjetnina!
      </ColorCircle>
      <ColorCircle color="rgb(51, 204, 51)" className="green-circle">
        <span>
          Ako nikada nisi bio/la u njoj, ne brini!
          <br /> Nacrtaj ju onakvom kakvom ju zamišljaš
        </span>
      </ColorCircle>
      <img className="red-arrow" src={RedArrowImg} alt="Red Arrow" />

      <div className="start-canvas">
        <Canvas
          width={`${(window.innerHeight * 51) / 100}`}
          height="51%"
          borderRadius="60"
          canvasSrc={canvasSrc}
          updateUser={updateUser}
          parent={"start"}
        />
      </div>

      <FlexSection wrap="wrap" justifyContent="center">
        <Heading color="red" isUpperCase={true} marginBottom="4%">
          Galerija umjetnina Split
        </Heading>
        <Heading color="#1b78f5" isUpperCase={true} marginBottom="4%">
          Virtualni dječiji vodič kroz postav sa zadatcima
        </Heading>
        <Heading color="#fde40e" isUpperCase={false}>
          6 i više godina
        </Heading>
      </FlexSection>
    </FlexSection>
  );
};

export default Start;

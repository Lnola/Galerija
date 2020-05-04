import React from "react";
import styled from "styled-components";

import Canvas from "../../components/common/Canvas";
import RedArrow from "../../images/RedArrow.png";
import { FlexSection } from "../../components/styled/Flex";

import "./styles.css";

const ColorCircle = styled.span`
  ${({ color }) => color && `background-color:${color}`};
  display: flex;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  box-shadow: -15px 0 30px -10px rgba(0, 0, 0, 0.75);
  color: #fff;
  font-size: 27px;
  text-align: center;
  justify-content: center;
  align-items: center;

  span {
    max-width: 200px;
    font-size: 22px;
  }
`;

const Heading = styled.p`
  ${({ color }) => color && `color: ${color}`};
  ${({ marginBottom }) => marginBottom && `margin-bottom: ${marginBottom}`};
  ${({ isUpperCase }) => isUpperCase && `text-transform: uppercase`};
  font-size: 50px;
  text-align: center;
`;

const Start = () => {
  return (
    <FlexSection wrap="wrap" justifyContent="center">
      <ColorCircle color="purple" className="purple-circle">
        Nacrtaj Galeriju umjetnina!
      </ColorCircle>
      <ColorCircle color="rgb(51, 204, 51)" className="green-circle">
        <span>
          Ako nikada nisi bio/la u njoj, ne brini!
          <br /> Nacrtaj ju onakvom kakvom ju zamišljaš
        </span>
      </ColorCircle>
      <img className="red-arrow" src={RedArrow} alt="Red Arrow" />

      <div className="start-canvas">
        <Canvas width="500" height="500" borderRadius="100px" />
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

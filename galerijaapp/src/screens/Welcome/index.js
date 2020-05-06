import React from "react";
// import { FlexSection } from "../../components/styled/Flex";
import styled, { css } from "styled-components";

// import BigBadaBoom from "../../images/BigBadaBoom.png";
// import GreenBlock from "../../images/GreenBlock.png";
// import GreenLine from "../../images/GreenLine.png";
// import LineGrey from "../../images/LineGrey.png";
// import LineRed from "../../images/LineRed.png";
// import OrangeRomb from "../../images/OrangeRomb.png";
// import OrangeLine from "../../images/OrangeLine.png";
// import PurpleBridge from "../../images/PurpleBridge.png";
// import SquigglyLine from "../../images/SquigglyLine.png";
// import TrianglePink from "../../images/TrianglePink.png";
// import YellowCircle from "../../images/YellowCircle.png";
// import YellowStep from "../../images/YellowStep.png";

import Screen from "../../images/Screen.png";

// const sectionCss = css`
//   h1 {
//     color: red;
//     font-size: 70px;
//     font-weight: normal;
//     margin-bottom: 6%;
//   }

//   p {
//     margin-bottom: 3%;
//     font-size: 32px;
//     width: 50%;
//   }
// `;

// const Shape = styled.img`
//   position: absolute;
//   ${({ top }) => (top !== undefined ? `top: ${top}px;` : "")}
//   ${({ right }) => (right !== undefined ? `right: ${right}px;` : "")}
//   ${({ bottom }) => (bottom !== undefined ? `bottom: ${bottom}px;` : "")}
//   ${({ left }) => (left !== undefined ? `left: ${left}px` : "")}
// `;

const ImageScreen = styled.img`
  height: 100%;
`;

const Welcome = () => {
  // const shapeArray = [
  //   { img: BigBadaBoom, right: 0, bottom: 0 },
  //   { img: GreenBlock, bottom: 100, left: 120 },
  //   { img: GreenLine, top: 200, right: 20 },
  //   { img: LineGrey, top: 10, left: 0 },
  //   { img: LineRed, bottom: 300, left: 0 },
  //   { img: OrangeRomb, top: 10, right: 0 },
  //   { img: OrangeLine, top: 100, right: 20 },
  //   { img: PurpleBridge, right: 50, bottom: 200 },
  //   { img: SquigglyLine, bottom: 15, left: 0 },
  //   { img: TrianglePink, top: 250, left: 100 },
  //   { img: YellowCircle, top: 20, left: 0 },
  //   { img: YellowStep, right: 0, bottom: 370 },
  // ];

  return (
    // <FlexSection
    //   justifyContent="center"
    //   alignItems="center"
    //   direction="column"
    //   height="100%"
    //   css={sectionCss}
    // >
    //   <h1>Dobrodošao/la!</h1>
    //   <p>
    //     Želimo ti da se koristeći ovu knjižicu zabaviš i ponešto naučiš o
    //     umjetnosti.
    //   </p>
    //   <p>
    //     Crtaj. Slikaj. Piši. Šaraj. Promatraj. Istražuj. Razmišljaj. Otkrivaj.
    //   </p>
    //   <p>P.s. Nadamo se da se uskoro vidimo u Galeriji umjetnina.</p>

    //   {shapeArray.map((shape, index) => (
    //     <Shape
    //       key={index}
    //       src={shape.img}
    //       alt="shape"
    //       top={shape.top}
    //       right={shape.right}
    //       bottom={shape.bottom}
    //       left={shape.left}
    //     />
    //   ))}
    // </FlexSection>
    <ImageScreen src={Screen} alt="screen one" />
  );
};

export default Welcome;

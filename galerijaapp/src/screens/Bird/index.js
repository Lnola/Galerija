import React, { useEffect } from "react";

import Flex, { FlexSection } from "../../components/styled/Flex";
import { ColoredTextSpan } from "../../components/styled/ColoredText";
import { css } from "styled-components";
import Canvas from "../../components/common/Canvas";

import zarptica from "../../images/zarptica.jpg";
import {
  addBirdWithBackground,
  addBirdWithoutBackground,
} from "../../services/user";
import { convertCanvasToImg } from "../../utils/convertCanvasToImg";

const SectionCss = css`
  font-size: 28px;
`;

const Bird = () => {
  useEffect(() => {
    const id = localStorage.getItem("id");
    return () => {
      const birdWithBackground = convertCanvasToImg(0);
      const birdWithoutBackground = convertCanvasToImg(1);
      addBirdWithBackground(id, birdWithBackground).then((res) =>
        console.log(res)
      );
      addBirdWithoutBackground(id, birdWithoutBackground).then((res) =>
        console.log(res)
      );
    };
  }, []);

  return (
    <FlexSection direction="column" margin="4% 0 0 0" css={SectionCss}>
      <p>
        Ovo je plakat Borisa Bućana. Napravio ga je da bi najavio kazališnu
        predstavu Žar Ptica. Vjerujem da si primjetio/la da ova ptica podsjeća
        na čovjeka.
        <ColoredTextSpan color="#c55a11" isBold={true} marginLeft="10px">
          Pronađi i zaokruži sve što pripada čovjeku, a ne ptici? Potom u
          kvadratu nacrtaj svoju pticu iz mašte!
        </ColoredTextSpan>
      </p>

      <Flex justifyContent="space-around" margin="5% 0 0 0">
        <Canvas width="500" height="523" backgroundImage={zarptica} />
        <Canvas width="500" height="523" canvasId={1} />
      </Flex>
    </FlexSection>
  );
};

export default Bird;

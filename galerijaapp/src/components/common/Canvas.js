import React, { useEffect, useState } from "react";
import { HuePicker } from "react-color";

import { canvasSetup } from "../../utils/canvasSetup";
import { strokeSetup } from "../../utils/strokeSetup";
import { FlexSection } from "../styled/Flex";
import styled from "styled-components";

const ColorSpan = styled.span`
  position: absolute;
  display: inline-block;
  width: 15px;
  height: 15px;
  border: 1px solid #000;
  border-radius: 50%;
  animation: easeIn 1.25s;

  ${({ bottom }) => bottom && `bottom: ${bottom};`}
  ${({ backgroundColor }) =>
    backgroundColor && `background-color: ${backgroundColor};`}
`;

const Canvas = ({
  width,
  height,
  borderRadius,
  backgroundImage,
  setIsCanvasClicked,
  canvasId,
}) => {
  const [color, setColor] = useState("#000");
  const [brushWidth, setBrushWidth] = useState("8");
  const [isStrokeVisible, setIsStrokeVisible] = useState(false);

  useEffect(() => {
    canvasSetup(width, height, canvasId === undefined ? 0 : canvasId);
  }, [width, height, canvasId]);

  useEffect(() => {
    strokeSetup(color, brushWidth, canvasId === undefined ? 0 : canvasId);
  }, [color, brushWidth, canvasId]);

  return (
    <FlexSection>
      <canvas
        onMouseDown={
          setIsCanvasClicked !== undefined
            ? () => setIsCanvasClicked(true)
            : null
        }
        style={
          ({ borderRadius: `${borderRadius}px` },
          { backgroundImage: `url(${backgroundImage})` })
        }
      />
      <FlexSection direction="column" margin="5px 0 0 5px" position="relative">
        <span
          className="arrow"
          onClick={() => setIsStrokeVisible(!isStrokeVisible)}
        >
          &#10142;
        </span>

        {isStrokeVisible && (
          <FlexSection className="canvas-picker" direction="column">
            <input
              className="brush-width"
              type="number"
              min="1"
              max="99"
              value={brushWidth}
              onChange={(e) => setBrushWidth(e.target.value)}
            />
            <HuePicker
              onChange={(e) => setColor(e.hex)}
              color={color}
              direction={"vertical"}
              height={"316px"}
              width={"16px"}
            />
            <ColorSpan
              backgroundColor="#fff"
              bottom="-40px"
              onClick={() => {
                setColor("#fff");
              }}
            />
            <ColorSpan
              backgroundColor="#000"
              bottom="-65px"
              onClick={() => {
                setColor("#000");
              }}
            />
          </FlexSection>
        )}
      </FlexSection>
    </FlexSection>
  );
};

export default Canvas;

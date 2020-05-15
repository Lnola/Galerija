import React, { useEffect, useState } from "react";
import { HuePicker } from "react-color";

import { canvasSetup } from "../../utils/canvasSetup";
import { strokeSetup } from "../../utils/strokeSetup";
import { FlexSection } from "../styled/Flex";
import styled from "styled-components";
import {
  addGalleryDrawing,
  addSelfportraitImage,
  addPeristilImage,
  addSamIvImage,
  addDancingImage,
  addBirdWithBackground,
  addBirdWithoutBackground,
} from "../../services/user";

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

// const StyledSpan = styled.span`
//   position: absolut;
//   bottom: -200px;
// `;

const Canvas = ({
  width,
  height,
  borderRadius,
  backgroundImage,
  setIsCanvasClicked,
  canvasId,
  canvasSrc,
  updateUser,
  parent,
}) => {
  const [color, setColor] = useState("#000");
  const [brushWidth, setBrushWidth] = useState("8");
  const [isStrokeVisible, setIsStrokeVisible] = useState(false);

  useEffect(() => {
    canvasSetup(
      width,
      height,
      canvasId === undefined ? 0 : canvasId,
      updateUser,
      parent
    );
  }, [width, height, canvasId]);

  useEffect(() => {
    strokeSetup(color, brushWidth, canvasId === undefined ? 0 : canvasId);
  }, [color, brushWidth, canvasId]);

  useEffect(() => {
    const canvas = document.getElementsByTagName("canvas")[
      canvasId === undefined ? 0 : canvasId
    ];
    const ctx = canvas.getContext("2d");

    const base_image = new Image();
    base_image.src = canvasSrc;
    base_image.onload = () => {
      ctx.drawImage(base_image, 0, 0);
    };
  }, [canvasSrc, canvasId]);

  const clearCanvas = () => {
    const id = localStorage.getItem("id");
    switch (parent) {
      case "start":
        addGalleryDrawing(id, "").then(() => updateUser());
        break;
      case "selfportrait":
        addSelfportraitImage(id, "").then(() => updateUser());
        break;
      case "peristil":
        addPeristilImage(id, "").then(() => updateUser());
        break;
      case "wbird":
        addBirdWithBackground(id, "").then(() => updateUser());
        break;
      case "wobird":
        addBirdWithoutBackground(id, "").then(() => updateUser());
        break;
      case "samIV":
        addSamIvImage(id, "").then(() => updateUser());
        break;
      case "dancing":
        addDancingImage(id, "").then(() => updateUser());
        break;

      default:
        break;
    }
  };

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
            {/* <StyledSpan onClick={clearCanvas}>Izbriši</StyledSpan> */}
          </FlexSection>
        )}
      </FlexSection>
    </FlexSection>
  );
};

export default Canvas;

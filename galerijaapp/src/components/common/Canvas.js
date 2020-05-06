import React, { useEffect, useState } from "react";

import { HuePicker } from "react-color";
import { canvasSetup } from "../../utils/canvasSetup";
import { strokeSetup } from "../../utils/strokeSetup";
import { FlexSection } from "../styled/Flex";

const Canvas = ({ width, height, borderRadius }) => {
  const [color, setColor] = useState("#000");
  const [brushWidth, setBrushWidth] = useState("8");
  const [isStrokeVisible, setIsStrokeVisible] = useState(false);

  useEffect(() => {
    canvasSetup(width, height);
  }, [width, height]);

  useEffect(() => {
    strokeSetup(color, brushWidth);
  }, [color, brushWidth]);

  return (
    <FlexSection>
      <canvas style={{ borderRadius: `${borderRadius}px` }} />
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
          </FlexSection>
        )}
      </FlexSection>
    </FlexSection>
  );
};

export default Canvas;

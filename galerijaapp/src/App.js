import React, { useEffect, useState } from "react";

import { HuePicker } from "react-color";
import { canvasSetup } from "./utils/canvasSetup";
import { strokeSetup } from "./utils/strokeSetup";
import { FlexSection } from "./components/styled/Flex";

import "./styles.css";

const App = () => {
  const [color, setColor] = useState("#ffffff");
  const [brushWidth, setBrushWidth] = useState("8");
  const [isStrokeVisible, setIsStrokeVisible] = useState(false);

  useEffect(() => {
    canvasSetup();
  }, []);

  useEffect(() => {
    strokeSetup(color, brushWidth);
  }, [color, brushWidth]);

  return (
    <>
      <canvas />
      <FlexSection direction="column" margin="5px 0 0 5px">
        <span
          className="arrow"
          onClick={() => setIsStrokeVisible(!isStrokeVisible)}
        >
          &#10142;
        </span>

        {isStrokeVisible && (
          <FlexSection direction="column">
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
    </>
  );
};

export default App;

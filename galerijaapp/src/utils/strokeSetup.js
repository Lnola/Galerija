export const strokeSetup = (color, brushWidth, canvasId) => {
  const canvas = document.getElementsByTagName("canvas")[canvasId];
  const ctx = canvas.getContext("2d");

  ctx.strokeStyle = color;
  ctx.lineWidth = brushWidth;
  ctx.lineCap = "round";
};

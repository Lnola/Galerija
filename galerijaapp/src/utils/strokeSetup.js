export const strokeSetup = (color, brushWidth) => {
  const canvas = document.getElementsByTagName("canvas")[0];
  const ctx = canvas.getContext("2d");

  ctx.strokeStyle = color;
  ctx.lineWidth = brushWidth;
  ctx.lineCap = "round";
};

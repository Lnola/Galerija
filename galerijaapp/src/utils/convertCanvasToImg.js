export const convertCanvasToImg = (canvasId) => {
  const canvas = document.getElementsByTagName("canvas")[canvasId];

  return canvas.toDataURL();
};

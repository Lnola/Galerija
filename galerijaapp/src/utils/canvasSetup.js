export const canvasSetup = (width, height) => {
  const canvas = document.getElementsByTagName("canvas")[0];
  const ctx = canvas.getContext("2d");

  canvas.width = width;
  canvas.height = height;

  let painting = false;

  function startPosition(e) {
    painting = true;
    draw(e);
  }

  function finishedPosition() {
    painting = false;
    ctx.beginPath();
  }

  function draw(e) {
    if (!painting || e.which !== 1) return;

    const canvasBoundingClientRect = canvas.getBoundingClientRect();

    const positionCorrectionX = canvasBoundingClientRect.left;
    const positionCorrectionY = canvasBoundingClientRect.top;

    ctx.lineTo(
      e.clientX - positionCorrectionX,
      e.clientY - positionCorrectionY
    );
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(
      e.clientX - positionCorrectionX,
      e.clientY - positionCorrectionY
    );
  }

  canvas.addEventListener("mousedown", startPosition);
  canvas.addEventListener("mouseup", finishedPosition);
  canvas.addEventListener("mousemove", draw);
};

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

    const positionCorrection =
      (window.innerWidth - (window.innerHeight * 4) / 3) / 2;

    ctx.lineTo(e.clientX - positionCorrection, e.clientY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX - positionCorrection, e.clientY);
  }

  canvas.addEventListener("mousedown", startPosition);
  canvas.addEventListener("mouseup", finishedPosition);
  canvas.addEventListener("mousemove", draw);
};

import {
  addGalleryDrawing,
  addSelfportraitImage,
  addPeristilImage,
  addBirdWithBackground,
  addBirdWithoutBackground,
  addSamIvImage,
  addDancingImage,
} from "../services/user";
import { convertCanvasToImg } from "./convertCanvasToImg";

export const canvasSetup = (width, height, canvasId, updateUser, parent) => {
  const canvas = document.getElementsByTagName("canvas")[canvasId];
  const ctx = canvas.getContext("2d");

  if (width.includes("%")) width = (window.innerWidth * parseInt(width)) / 100;
  if (height.includes("%"))
    height = (window.innerHeight * parseInt(height)) / 100;

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
    const id = localStorage.getItem("id");
    const drawing = convertCanvasToImg(canvasId);

    switch (parent) {
      case "start":
        addGalleryDrawing(id, drawing).then(() => updateUser());
        break;
      case "selfportrait":
        addSelfportraitImage(id, drawing).then(() => updateUser());
        break;
      case "peristil":
        addPeristilImage(id, drawing).then(() => updateUser());
        break;
      case "wbird":
        addBirdWithBackground(id, drawing).then(() => updateUser());
        break;
      case "wobird":
        addBirdWithoutBackground(id, drawing).then(() => updateUser());
        break;
      case "samIV":
        addSamIvImage(id, drawing).then(() => updateUser());
        break;
      case "dancing":
        addDancingImage(id, drawing).then(() => updateUser());
        break;

      default:
        break;
    }
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

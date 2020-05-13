import axios from "axios";

const base = "https://localhost:44373/users";
// const base = "http://api.lnola.com/users";

export const getUser = (id) => {
  return axios.get(`${base}/${id}`);
};

export const getAllUsers = () => {
  return axios.get(`${base}/all`);
};

export const addUser = (name) => {
  return axios.post(`${base}/add-user`, { name });
};

export const addGalleryDrawing = (id, galleryDrawing) => {
  return axios.post(`${base}/add-gallery-drawing`, { id, galleryDrawing });
};

export const addSelfportraitImage = (id, selfportraitImage) => {
  return axios.post(`${base}/add-selfportrait-image`, {
    id,
    selfportraitImage,
  });
};

export const addRedCircleLocation = (id, redCircleLocation) => {
  return axios.post(`${base}/add-red-circle-location`, {
    id,
    redCircleLocation,
  });
};

export const addRedCircleExplanation = (id, redCircleExplanation) => {
  return axios.post(`${base}/add-red-circle-explanation`, {
    id,
    redCircleExplanation,
  });
};

export const addPeristilImage = (id, peristilImage) => {
  return axios.post(`${base}/add-peristil-image`, { id, peristilImage });
};

export const addExpressionismInput = (id, expressionismInput) => {
  return axios.post(`${base}/add-expressionism-input`, {
    id,
    expressionismInput,
  });
};

export const addBirdWithBackground = (id, birdWithBackground) => {
  return axios.post(`${base}/add-bird-with-background`, {
    id,
    birdWithBackground,
  });
};

export const addBirdWithoutBackground = (id, birdWithoutBackground) => {
  return axios.post(`${base}/add-bird-without-background`, {
    id,
    birdWithoutBackground,
  });
};

export const addArtistInput = (id, artistInput) => {
  return axios.post(`${base}/add-artist-input`, { id, artistInput });
};

export const addSamIvImage = (id, samIvImage) => {
  return axios.post(`${base}/add-samiv-image`, { id, samIvImage });
};

export const addSunInput = (id, sunInput) => {
  return axios.post(`${base}/add-sun-input`, { id, sunInput });
};

export const addDancingImage = (id, dancingImage) => {
  return axios.post(`${base}/add-dancing-image`, { id, dancingImage });
};

export const addGarbageInput = (id, garbageInput) => {
  return axios.post(`${base}/add-garbage-input`, { id, garbageInput });
};

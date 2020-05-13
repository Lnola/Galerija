export const findOrDefaultLS = (item, defaultReturn, isInt) => {
  if (isInt)
    return localStorage.getItem(`${item}`) !== null
      ? parseInt(localStorage.getItem(`${item}`))
      : defaultReturn;

  return localStorage.getItem(`${item}`) !== null
    ? localStorage.getItem(`${item}`)
    : defaultReturn;
};

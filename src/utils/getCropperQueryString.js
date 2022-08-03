const roundedNumber = (value) => Math.floor(value);

export const getCropperQueryString = (crop) => {
  if (!crop || Object.keys(crop).length === 0) {
    return '';
  }
  const { imageBox, rotate } = crop;
  const { x, y, height, width } = imageBox;
  return `?x=${roundedNumber(x)}&y=${roundedNumber(y)}&w=${roundedNumber(width)}&h=${roundedNumber(
    height
  )}&rotate=${rotate}`;
};

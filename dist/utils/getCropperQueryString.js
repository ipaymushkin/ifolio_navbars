"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCropperQueryString = void 0;

var roundedNumber = function roundedNumber(value) {
  return Math.floor(value);
};

var getCropperQueryString = function getCropperQueryString(crop) {
  if (!crop || Object.keys(crop).length === 0) {
    return '';
  }

  var imageBox = crop.imageBox,
      rotate = crop.rotate;
  var x = imageBox.x,
      y = imageBox.y,
      height = imageBox.height,
      width = imageBox.width;
  return "?x=".concat(roundedNumber(x), "&y=").concat(roundedNumber(y), "&w=").concat(roundedNumber(width), "&h=").concat(roundedNumber(height), "&rotate=").concat(rotate);
};

exports.getCropperQueryString = getCropperQueryString;
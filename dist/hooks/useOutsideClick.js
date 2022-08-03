"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useOutsideClick = void 0;

var _react = require("react");

var useOutsideClick = function useOutsideClick(callback) {
  var ref = /*#__PURE__*/(0, _react.createRef)();

  var listener = function listener(e) {
    if (ref.current && !(ref !== null && ref !== void 0 && ref.current.contains(e.target))) {
      callback(e, ref.current);
    }
  };

  (0, _react.useEffect)(function () {
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return function () {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  });
  return ref;
};

exports.useOutsideClick = useOutsideClick;
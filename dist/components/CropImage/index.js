"use strict";

var _interopRequireDefault = require("C:/Projects/ifolio_navbars/node_modules/@babel/runtime/helpers/interopRequireDefault.js").default;

var _interopRequireWildcard = require("C:/Projects/ifolio_navbars/node_modules/@babel/runtime/helpers/interopRequireWildcard.js").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("C:/Projects/ifolio_navbars/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3;

var Index = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var height = _ref.height,
      id = _ref.id,
      crop = _ref.crop,
      source = _ref.source,
      alt = _ref.alt,
      ignoreMaxHeight = _ref.ignoreMaxHeight,
      isTurntable = _ref.isTurntable,
      isHero = _ref.isHero;
  var styles = {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  };

  if (!ignoreMaxHeight) {
    styles.maxHeight = '600px';
  }

  return /*#__PURE__*/_react.default.createElement(CropArea, {
    ref: ref,
    isTurntable: isTurntable,
    isHero: isHero,
    height: height,
    id: id
  }, /*#__PURE__*/_react.default.createElement(CropImageWrapper, Object.assign({}, crop.imagePosition, {
    isHero: isHero
  }), /*#__PURE__*/_react.default.createElement("img", {
    src: source,
    alt: alt,
    style: styles
  })));
});

var CropImageWrapper = _styledComponents.default.div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n  position: relative;\n  left: ", "%;\n  top: ", "%;\n  width: ", "%;\n  height: ", "%;\n\n  ", ";\n"])), function (_ref2) {
  var x = _ref2.x;
  return x || 0;
}, function (_ref3) {
  var y = _ref3.y;
  return y || 0;
}, function (_ref4) {
  var width = _ref4.width;
  return width || 100;
}, function (_ref5) {
  var height = _ref5.height;
  return height || 100;
}, function (_ref6) {
  var isHero = _ref6.isHero;
  return isHero && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2.default)(["\n      position: static;\n      img {\n        object-fit: cover;\n        //margin-left: auto;\n        //margin-right: auto;\n        //width: auto !important;\n      }\n    "])));
});

var CropArea = _styledComponents.default.div(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2.default)(["\n  width: 100%;\n  height: ", ";\n  position: relative;\n  background-color: transparent;\n  overflow: hidden;\n"])), function (_ref7) {
  var height = _ref7.height,
      isTurntable = _ref7.isTurntable,
      isHero = _ref7.isHero;
  return isTurntable ? '100%' : isHero ? '100%' : height ? height + 'px' : '100%';
});

Index.defaultProps = {
  id: '',
  alt: '',
  ignoreMaxHeight: false,
  crop: {}
};
var _default = Index;
exports.default = _default;
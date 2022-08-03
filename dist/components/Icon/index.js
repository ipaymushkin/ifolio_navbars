"use strict";

var _interopRequireDefault = require("C:/Projects/ifolio_navbars/node_modules/@babel/runtime/helpers/interopRequireDefault.js").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Icon = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("C:/Projects/ifolio_navbars/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

var Icon = function Icon(_ref) {
  var icon = _ref.icon,
      _ref$opacity = _ref.opacity,
      opacity = _ref$opacity === void 0 ? 1 : _ref$opacity,
      _ref$hoverOpacity = _ref.hoverOpacity,
      hoverOpacity = _ref$hoverOpacity === void 0 ? 1 : _ref$hoverOpacity,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? '#000' : _ref$color,
      _ref$hoverColor = _ref.hoverColor,
      hoverColor = _ref$hoverColor === void 0 ? color : _ref$hoverColor,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 20 : _ref$size,
      rotate = _ref.rotate,
      noCursor = _ref.noCursor,
      _ref$padding = _ref.padding,
      padding = _ref$padding === void 0 ? 0 : _ref$padding,
      width = _ref.width,
      height = _ref.height,
      tableIcon = _ref.tableIcon;
  return /*#__PURE__*/_react.default.createElement(IconWrapper, {
    color: color,
    hoverColor: hoverColor,
    size: size,
    width: width,
    height: height,
    opacity: opacity,
    hoverOpacity: hoverOpacity,
    rotate: rotate,
    noCursor: noCursor,
    padding: padding,
    tableIcon: tableIcon
  }, _renderIcon(icon));
};

exports.Icon = Icon;

var _renderIcon = function _renderIcon(icon) {
  var Icon = icon;

  if (typeof icon === 'function') {
    return /*#__PURE__*/_react.default.createElement(Icon, null);
  } else if (typeof icon === 'string') {
    return icon;
  }

  return null;
};

var IconWrapper = _styledComponents.default.div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n  cursor: ", ";\n  display: ", ";\n  flex: 0 0 auto;\n  align-items: center;\n  font-size: ", ";\n  width: ", "px;\n  height: ", "px;\n  transform: rotate(", "deg);\n  transform-origin: 50% 50%;\n  padding: ", "px;\n\n  :hover {\n    svg {\n      fill: ", ";\n      opacity: ", ";\n    }\n  }\n\n  svg {\n    fill: ", ";\n    opacity: ", ";\n    width: 100%;\n    height: 100%;\n    transition: all ease-in-out 0.3s;\n    vertical-align: ", ";\n  }\n"])), function (_ref2) {
  var noCursor = _ref2.noCursor;
  return noCursor ? 'initial' : 'pointer';
}, function (_ref3) {
  var tableIcon = _ref3.tableIcon;
  return tableIcon ? 'table-cell' : 'flex';
}, function (_ref4) {
  var tableIcon = _ref4.tableIcon;
  return !tableIcon && '0';
}, function (_ref5) {
  var size = _ref5.size,
      width = _ref5.width;
  return width ? width : size;
}, function (_ref6) {
  var size = _ref6.size,
      height = _ref6.height;
  return height ? height : size;
}, function (_ref7) {
  var rotate = _ref7.rotate;
  return rotate;
}, function (_ref8) {
  var padding = _ref8.padding;
  return padding;
}, function (_ref9) {
  var hoverColor = _ref9.hoverColor;
  return hoverColor;
}, function (_ref10) {
  var hoverOpacity = _ref10.hoverOpacity;
  return hoverOpacity;
}, function (_ref11) {
  var color = _ref11.color;
  return color;
}, function (_ref12) {
  var opacity = _ref12.opacity;
  return opacity;
}, function (_ref13) {
  var tableIcon = _ref13.tableIcon;
  return tableIcon && 'middle';
});

Icon.defaultProps = {
  opacity: 1,
  color: '#000',
  size: 20,
  padding: 0,
  rotate: 0,
  noCursor: false,
  tableIcon: false
};
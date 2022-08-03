"use strict";

var _interopRequireDefault = require("C:/Projects/ifolio_navbars/node_modules/@babel/runtime/helpers/interopRequireDefault.js").default;

var _interopRequireWildcard = require("C:/Projects/ifolio_navbars/node_modules/@babel/runtime/helpers/interopRequireWildcard.js").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("C:/Projects/ifolio_navbars/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _openLinkInNewTab = require("../../utils/openLinkInNewTab");

var _templateObject;

var NavBarButton = /*#__PURE__*/(0, _react.memo)(function (_ref) {
  var link = _ref.link,
      disabledRedirect = _ref.disabledRedirect,
      title = _ref.title,
      buttonSettingsRoundCorners = _ref.buttonSettingsRoundCorners,
      buttonSettingsBorderWidth = _ref.buttonSettingsBorderWidth,
      buttonSettingsRegularBorder = _ref.buttonSettingsRegularBorder,
      buttonSettingsRegularFill = _ref.buttonSettingsRegularFill,
      buttonSettingsHorizontalPadding = _ref.buttonSettingsHorizontalPadding,
      buttonSettingsVerticalPadding = _ref.buttonSettingsVerticalPadding,
      buttonSettingsHoverClickedBorder = _ref.buttonSettingsHoverClickedBorder,
      buttonSettingsHoverClickedFill = _ref.buttonSettingsHoverClickedFill,
      buttonSettingsTextColorRegular = _ref.buttonSettingsTextColorRegular,
      buttonSettingsTextColorHover = _ref.buttonSettingsTextColorHover,
      buttonSettingsTextColorClicked = _ref.buttonSettingsTextColorClicked;
  var onClick = (0, _react.useCallback)(function () {
    if (link && !disabledRedirect) {
      (0, _openLinkInNewTab.openLinkInNewTab)(link);
    }
  }, [link, disabledRedirect]);
  return /*#__PURE__*/_react.default.createElement(Wrapper, {
    buttonSettingsRoundCorners: buttonSettingsRoundCorners,
    buttonSettingsBorderWidth: buttonSettingsBorderWidth,
    buttonSettingsRegularBorder: buttonSettingsRegularBorder,
    buttonSettingsRegularFill: buttonSettingsRegularFill,
    buttonSettingsHorizontalPadding: buttonSettingsHorizontalPadding,
    buttonSettingsVerticalPadding: buttonSettingsVerticalPadding,
    buttonSettingsHoverClickedBorder: buttonSettingsHoverClickedBorder,
    buttonSettingsHoverClickedFill: buttonSettingsHoverClickedFill,
    buttonSettingsTextColorRegular: buttonSettingsTextColorRegular,
    buttonSettingsTextColorHover: buttonSettingsTextColorHover,
    buttonSettingsTextColorClicked: buttonSettingsTextColorClicked,
    onClick: onClick
  }, title);
});

var Wrapper = _styledComponents.default.div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n  margin: 10px 0;\n  line-height: normal;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  border-radius: ", "px;\n  border: ", "px solid\n    ", ";\n  background: ", ";\n  padding: ", ";\n  color: ", ";\n\n  &:hover {\n    border: ", "px solid\n      ", ";\n    background: ", ";\n    color: ", ";\n  }\n\n  &:active {\n    border: ", "px solid\n      ", ";\n    background: ", ";\n    color: ", ";\n  }\n"])), function (_ref2) {
  var buttonSettingsRoundCorners = _ref2.buttonSettingsRoundCorners;
  return buttonSettingsRoundCorners;
}, function (_ref3) {
  var buttonSettingsBorderWidth = _ref3.buttonSettingsBorderWidth;
  return buttonSettingsBorderWidth;
}, function (_ref4) {
  var buttonSettingsRegularBorder = _ref4.buttonSettingsRegularBorder;
  return buttonSettingsRegularBorder;
}, function (_ref5) {
  var buttonSettingsRegularFill = _ref5.buttonSettingsRegularFill;
  return buttonSettingsRegularFill;
}, function (_ref6) {
  var buttonSettingsVerticalPadding = _ref6.buttonSettingsVerticalPadding,
      buttonSettingsHorizontalPadding = _ref6.buttonSettingsHorizontalPadding;
  return "".concat(buttonSettingsVerticalPadding, "px ").concat(buttonSettingsHorizontalPadding, "px");
}, function (_ref7) {
  var buttonSettingsTextColorRegular = _ref7.buttonSettingsTextColorRegular;
  return buttonSettingsTextColorRegular;
}, function (_ref8) {
  var buttonSettingsBorderWidth = _ref8.buttonSettingsBorderWidth;
  return buttonSettingsBorderWidth;
}, function (_ref9) {
  var buttonSettingsHoverClickedBorder = _ref9.buttonSettingsHoverClickedBorder;
  return buttonSettingsHoverClickedBorder;
}, function (_ref10) {
  var buttonSettingsHoverClickedFill = _ref10.buttonSettingsHoverClickedFill;
  return buttonSettingsHoverClickedFill;
}, function (_ref11) {
  var buttonSettingsTextColorHover = _ref11.buttonSettingsTextColorHover;
  return buttonSettingsTextColorHover;
}, function (_ref12) {
  var buttonSettingsBorderWidth = _ref12.buttonSettingsBorderWidth;
  return buttonSettingsBorderWidth;
}, function (_ref13) {
  var buttonSettingsHoverClickedBorder = _ref13.buttonSettingsHoverClickedBorder;
  return buttonSettingsHoverClickedBorder;
}, function (_ref14) {
  var buttonSettingsHoverClickedFill = _ref14.buttonSettingsHoverClickedFill;
  return buttonSettingsHoverClickedFill;
}, function (_ref15) {
  var buttonSettingsTextColorClicked = _ref15.buttonSettingsTextColorClicked;
  return buttonSettingsTextColorClicked;
});

var _default = NavBarButton;
exports.default = _default;
"use strict";

var _interopRequireDefault = require("C:/Projects/ifolio_navbars/node_modules/@babel/runtime/helpers/interopRequireDefault.js").default;

var _interopRequireWildcard = require("C:/Projects/ifolio_navbars/node_modules/@babel/runtime/helpers/interopRequireWildcard.js").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("C:/Projects/ifolio_navbars/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"));

var _slicedToArray2 = _interopRequireDefault(require("C:/Projects/ifolio_navbars/node_modules/@babel/runtime/helpers/esm/slicedToArray.js"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _useOutsideClick = require("../../hooks/useOutsideClick");

var _Icon = require("../../components/Icon");

var _ArrowIcon = _interopRequireDefault(require("../../icons/ArrowIcon"));

var _openLinkInNewTab = require("../../utils/openLinkInNewTab");

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

var NavBarPage = /*#__PURE__*/(0, _react.memo)(function (_ref) {
  var disabledRedirect = _ref.disabledRedirect,
      disabledListClick = _ref.disabledListClick,
      link = _ref.link,
      title = _ref.title,
      navBarTextHoverColor = _ref.navBarTextHoverColor,
      navBarTextClickedColor = _ref.navBarTextClickedColor,
      children = _ref.children,
      dropdownSettingsInactiveFill = _ref.dropdownSettingsInactiveFill,
      dropdownSettingsInactiveBorder = _ref.dropdownSettingsInactiveBorder,
      dropdownSettingsHoverClickedFill = _ref.dropdownSettingsHoverClickedFill,
      dropdownSettingsHoverClickedBorder = _ref.dropdownSettingsHoverClickedBorder,
      dropdownSettingsTextColorRegular = _ref.dropdownSettingsTextColorRegular,
      dropdownSettingsTextColorHover = _ref.dropdownSettingsTextColorHover,
      dropdownSettingsTextColorClicked = _ref.dropdownSettingsTextColorClicked,
      dropdownSettingsTextFontFamily = _ref.dropdownSettingsTextFontFamily,
      dropdownSettingsTextFontSize = _ref.dropdownSettingsTextFontSize,
      dropdownSettingsTextBold = _ref.dropdownSettingsTextBold,
      dropdownSettingsTextUnderline = _ref.dropdownSettingsTextUnderline,
      dropdownSettingsTextItalic = _ref.dropdownSettingsTextItalic,
      dropdownSettingsHorizontalPadding = _ref.dropdownSettingsHorizontalPadding,
      dropdownSettingsVerticalPadding = _ref.dropdownSettingsVerticalPadding;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var ref = (0, _useOutsideClick.useOutsideClick)(function () {
    setOpen(false);
  });
  var isDropdown = children.length > 0;
  var onClick = (0, _react.useCallback)(function () {
    if (isDropdown && !disabledListClick) {
      setOpen(function (state) {
        return !state;
      });
    } else if (!isDropdown && !disabledRedirect && link) {
      (0, _openLinkInNewTab.openLinkInNewTab)(link);
    }
  }, [disabledListClick, disabledRedirect, isDropdown, link]);
  return /*#__PURE__*/_react.default.createElement(Container, {
    ref: ref
  }, /*#__PURE__*/_react.default.createElement(Wrapper, {
    navBarTextHoverColor: navBarTextHoverColor,
    navBarTextClickedColor: navBarTextClickedColor,
    onClick: onClick
  }, title, ' ', isDropdown && /*#__PURE__*/_react.default.createElement(IconWrapper, null, open ? /*#__PURE__*/_react.default.createElement(_Icon.Icon, {
    icon: _ArrowIcon.default,
    rotate: -90,
    color: '#ffffff'
  }) : /*#__PURE__*/_react.default.createElement(_Icon.Icon, {
    icon: _ArrowIcon.default,
    rotate: 180,
    color: '#ffffff'
  }))), open && /*#__PURE__*/_react.default.createElement(DropdownWrapper, null, children.map(function (el) {
    return /*#__PURE__*/_react.default.createElement(DropdownElement, {
      key: el.id,
      dropdownSettingsInactiveFill: dropdownSettingsInactiveFill,
      dropdownSettingsInactiveBorder: dropdownSettingsInactiveBorder,
      dropdownSettingsHoverClickedFill: dropdownSettingsHoverClickedFill,
      dropdownSettingsHoverClickedBorder: dropdownSettingsHoverClickedBorder,
      dropdownSettingsTextColorRegular: dropdownSettingsTextColorRegular,
      dropdownSettingsTextColorHover: dropdownSettingsTextColorHover,
      dropdownSettingsTextColorClicked: dropdownSettingsTextColorClicked,
      dropdownSettingsTextFontFamily: dropdownSettingsTextFontFamily,
      dropdownSettingsTextFontSize: dropdownSettingsTextFontSize,
      dropdownSettingsTextBold: dropdownSettingsTextBold,
      dropdownSettingsTextUnderline: dropdownSettingsTextUnderline,
      dropdownSettingsTextItalic: dropdownSettingsTextItalic,
      dropdownSettingsHorizontalPadding: dropdownSettingsHorizontalPadding,
      dropdownSettingsVerticalPadding: dropdownSettingsVerticalPadding,
      onClick: function onClick() {
        if (el.link && !disabledRedirect) {
          (0, _openLinkInNewTab.openLinkInNewTab)(el.link);
          setOpen(false);
        } else {
          setOpen(false);
        }
      }
    }, el.title);
  })));
});

var Container = _styledComponents.default.div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n  position: relative;\n"])));

var Wrapper = _styledComponents.default.div(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2.default)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  height: 100%;\n\n  &:hover {\n    color: ", ";\n  }\n  &:active {\n    color: ", ";\n  }\n"])), function (_ref2) {
  var navBarTextHoverColor = _ref2.navBarTextHoverColor;
  return navBarTextHoverColor;
}, function (_ref3) {
  var navBarTextClickedColor = _ref3.navBarTextClickedColor;
  return navBarTextClickedColor;
});

var DropdownWrapper = _styledComponents.default.div(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2.default)(["\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 100%;\n  left: 0;\n"])));

var IconWrapper = _styledComponents.default.div(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2.default)([""])));

var DropdownElement = _styledComponents.default.div(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2.default)(["\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n  cursor: pointer;\n  background: ", ";\n  border: 2px solid ", ";\n  color: ", ";\n  font-size: ", "px;\n  font-family: ", ";\n  font-weight: ", ";\n  font-style: ", ";\n  text-decoration: ", ";\n  padding: ", ";\n\n  &:hover {\n    background: ", ";\n    border: 2px solid ", ";\n    color: ", ";\n  }\n  &:active {\n    background: ", ";\n    border: 2px solid ", ";\n    color: ", ";\n  }\n"])), function (_ref4) {
  var dropdownSettingsInactiveFill = _ref4.dropdownSettingsInactiveFill;
  return dropdownSettingsInactiveFill;
}, function (_ref5) {
  var dropdownSettingsInactiveBorder = _ref5.dropdownSettingsInactiveBorder;
  return dropdownSettingsInactiveBorder;
}, function (_ref6) {
  var dropdownSettingsTextColorRegular = _ref6.dropdownSettingsTextColorRegular;
  return dropdownSettingsTextColorRegular;
}, function (_ref7) {
  var dropdownSettingsTextFontSize = _ref7.dropdownSettingsTextFontSize;
  return dropdownSettingsTextFontSize;
}, function (_ref8) {
  var dropdownSettingsTextFontFamily = _ref8.dropdownSettingsTextFontFamily;
  return dropdownSettingsTextFontFamily;
}, function (_ref9) {
  var dropdownSettingsTextBold = _ref9.dropdownSettingsTextBold;
  return dropdownSettingsTextBold ? 'bold' : 'normal';
}, function (_ref10) {
  var dropdownSettingsTextItalic = _ref10.dropdownSettingsTextItalic;
  return dropdownSettingsTextItalic ? 'italic' : 'normal';
}, function (_ref11) {
  var dropdownSettingsTextUnderline = _ref11.dropdownSettingsTextUnderline;
  return dropdownSettingsTextUnderline ? 'underline' : 'none';
}, function (_ref12) {
  var dropdownSettingsVerticalPadding = _ref12.dropdownSettingsVerticalPadding,
      dropdownSettingsHorizontalPadding = _ref12.dropdownSettingsHorizontalPadding;
  return "".concat(dropdownSettingsVerticalPadding, "px ").concat(dropdownSettingsHorizontalPadding, "px");
}, function (_ref13) {
  var dropdownSettingsHoverClickedFill = _ref13.dropdownSettingsHoverClickedFill;
  return dropdownSettingsHoverClickedFill;
}, function (_ref14) {
  var dropdownSettingsHoverClickedBorder = _ref14.dropdownSettingsHoverClickedBorder;
  return dropdownSettingsHoverClickedBorder;
}, function (_ref15) {
  var dropdownSettingsTextColorHover = _ref15.dropdownSettingsTextColorHover;
  return dropdownSettingsTextColorHover;
}, function (_ref16) {
  var dropdownSettingsHoverClickedFill = _ref16.dropdownSettingsHoverClickedFill;
  return dropdownSettingsHoverClickedFill;
}, function (_ref17) {
  var dropdownSettingsHoverClickedBorder = _ref17.dropdownSettingsHoverClickedBorder;
  return dropdownSettingsHoverClickedBorder;
}, function (_ref18) {
  var dropdownSettingsTextColorClicked = _ref18.dropdownSettingsTextColorClicked;
  return dropdownSettingsTextColorClicked;
});

var _default = NavBarPage;
exports.default = _default;
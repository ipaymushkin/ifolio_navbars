"use strict";

var _interopRequireDefault = require("C:/Projects/ifolio_navbars/node_modules/@babel/runtime/helpers/interopRequireDefault.js").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("C:/Projects/ifolio_navbars/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _getCropperQueryString = require("../../utils/getCropperQueryString");

var _consts = require("../../consts");

var _Icon = require("../../components/Icon");

var _BurgerIcon = _interopRequireDefault(require("../../icons/BurgerIcon"));

var _CropImage = _interopRequireDefault(require("../../components/CropImage"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

var NavBarMobile = function NavBarMobile(_ref) {
  var config = _ref.config;
  var mobileHeight = config.mobileHeight,
      navBarRegularColor = config.navBarRegularColor,
      mobileLogoAlignment = config.mobileLogoAlignment,
      logoSrc = config.logoSrc,
      logoCropperOptions = config.logoCropperOptions;
  return /*#__PURE__*/_react.default.createElement(Wrapper, {
    height: mobileHeight,
    navBarRegularColor: navBarRegularColor
  }, /*#__PURE__*/_react.default.createElement(IconWrapper, null, /*#__PURE__*/_react.default.createElement(_Icon.Icon, {
    icon: _BurgerIcon.default,
    color: '#ffffff'
  })), /*#__PURE__*/_react.default.createElement(LogoWrapper, {
    mobileLogoAlignment: mobileLogoAlignment
  }, /*#__PURE__*/_react.default.createElement(Logo, null, /*#__PURE__*/_react.default.createElement(_CropImage.default, {
    source: logoSrc + (0, _getCropperQueryString.getCropperQueryString)(logoCropperOptions),
    crop: logoCropperOptions
  }))));
};

var Wrapper = _styledComponents.default.div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n  display: flex;\n  width: 240px;\n  padding: 15px 13px 16px 15px;\n  border-radius: 3px;\n  border: solid 1px rgba(164, 198, 225, 0.39);\n  height: ", "px;\n  background-color: ", ";\n  align-items: center;\n  position: relative;\n"])), function (_ref2) {
  var height = _ref2.height;
  return height;
}, function (_ref3) {
  var navBarRegularColor = _ref3.navBarRegularColor;
  return navBarRegularColor;
});

var LogoWrapper = _styledComponents.default.div(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2.default)(["\n  display: flex;\n  flex: 1 1 auto;\n  justify-content: ", ";\n"])), function (_ref4) {
  var mobileLogoAlignment = _ref4.mobileLogoAlignment;

  if (mobileLogoAlignment === 'center') {
    return 'center';
  } else if (mobileLogoAlignment === 'right') {
    return 'flex-end';
  }

  return '';
});

var Logo = _styledComponents.default.div(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2.default)(["\n  width: ", "px;\n  height: ", "px;\n"])), _consts.logoImageWidth, _consts.logoImageHeight);

var IconWrapper = _styledComponents.default.div(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2.default)(["\n  display: flex;\n  position: absolute;\n"])));

var _default = NavBarMobile;
exports.default = _default;
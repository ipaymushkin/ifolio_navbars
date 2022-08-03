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

var _consts = require("../../consts");

var _getCropperQueryString = require("../../utils/getCropperQueryString");

var _Page = _interopRequireDefault(require("./Page"));

var _Button = _interopRequireDefault(require("./Button"));

var _CropImage = _interopRequireDefault(require("../../components/CropImage"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

var NavBar = function NavBar(_ref) {
  var config = _ref.config,
      _ref$disabledRedirect = _ref.disabledRedirect,
      disabledRedirect = _ref$disabledRedirect === void 0 ? false : _ref$disabledRedirect,
      _ref$disabledListClic = _ref.disabledListClick,
      disabledListClick = _ref$disabledListClic === void 0 ? false : _ref$disabledListClic;
  var height = config.height,
      navBarRegularColor = config.navBarRegularColor,
      logoAlignment = config.logoAlignment,
      logoCropperOptions = config.logoCropperOptions,
      logoSrc = config.logoSrc,
      navBarTextAlignment = config.navBarTextAlignment,
      navBarTextFontSize = config.navBarTextFontSize,
      navBarTextFontFamily = config.navBarTextFontFamily,
      navBarTextBold = config.navBarTextBold,
      navBarTextItalic = config.navBarTextItalic,
      navBarTextUnderline = config.navBarTextUnderline,
      navBarTextRegularColor = config.navBarTextRegularColor,
      structure = config.structure,
      navBarTextHoverColor = config.navBarTextHoverColor,
      navBarTextClickedColor = config.navBarTextClickedColor,
      navBarTextSpacing = config.navBarTextSpacing,
      buttonSettingsRoundCorners = config.buttonSettingsRoundCorners,
      buttonSettingsBorderWidth = config.buttonSettingsBorderWidth,
      buttonSettingsRegularBorder = config.buttonSettingsRegularBorder,
      buttonSettingsRegularFill = config.buttonSettingsRegularFill,
      buttonSettingsHorizontalPadding = config.buttonSettingsHorizontalPadding,
      buttonSettingsVerticalPadding = config.buttonSettingsVerticalPadding,
      buttonSettingsHoverClickedFill = config.buttonSettingsHoverClickedFill,
      buttonSettingsHoverClickedBorder = config.buttonSettingsHoverClickedBorder,
      buttonSettingsTextColorRegular = config.buttonSettingsTextColorRegular,
      buttonSettingsTextColorHover = config.buttonSettingsTextColorHover,
      buttonSettingsTextColorClicked = config.buttonSettingsTextColorClicked,
      navBarBehavior = config.navBarBehavior,
      dropdownSettingsInactiveFill = config.dropdownSettingsInactiveFill,
      dropdownSettingsInactiveBorder = config.dropdownSettingsInactiveBorder,
      dropdownSettingsHoverClickedFill = config.dropdownSettingsHoverClickedFill,
      dropdownSettingsHoverClickedBorder = config.dropdownSettingsHoverClickedBorder,
      dropdownSettingsTextColorRegular = config.dropdownSettingsTextColorRegular,
      dropdownSettingsTextColorHover = config.dropdownSettingsTextColorHover,
      dropdownSettingsTextColorClicked = config.dropdownSettingsTextColorClicked,
      dropdownSettingsTextFontFamily = config.dropdownSettingsTextFontFamily,
      dropdownSettingsTextFontSize = config.dropdownSettingsTextFontSize,
      dropdownSettingsTextBold = config.dropdownSettingsTextBold,
      dropdownSettingsTextUnderline = config.dropdownSettingsTextUnderline,
      dropdownSettingsTextItalic = config.dropdownSettingsTextItalic,
      dropdownSettingsHorizontalPadding = config.dropdownSettingsHorizontalPadding,
      dropdownSettingsVerticalPadding = config.dropdownSettingsVerticalPadding;

  var LogoComponent = /*#__PURE__*/_react.default.createElement(Logo, null, /*#__PURE__*/_react.default.createElement(_CropImage.default, {
    source: logoSrc + (0, _getCropperQueryString.getCropperQueryString)(logoCropperOptions),
    crop: logoCropperOptions
  }));

  return /*#__PURE__*/_react.default.createElement(Wrapper, {
    height: height,
    navBarRegularColor: navBarRegularColor,
    navBarBehavior: navBarBehavior
  }, /*#__PURE__*/_react.default.createElement(Menu, {
    height: height
  }, logoAlignment === 'left' && LogoComponent, /*#__PURE__*/_react.default.createElement(Container, {
    navBarTextAlignment: navBarTextAlignment,
    navBarTextFontSize: navBarTextFontSize,
    navBarTextFontFamily: navBarTextFontFamily,
    navBarTextBold: navBarTextBold,
    navBarTextItalic: navBarTextItalic,
    navBarTextUnderline: navBarTextUnderline,
    navBarTextRegularColor: navBarTextRegularColor,
    navBarTextSpacing: navBarTextSpacing,
    logoAlignment: logoAlignment
  }, (structure || []).map(function (el) {
    var component = null;

    if (el.type === 'button') {
      component = /*#__PURE__*/_react.default.createElement(_Button.default, Object.assign({}, el, {
        disabledRedirect: disabledRedirect,
        buttonSettingsRoundCorners: buttonSettingsRoundCorners,
        buttonSettingsBorderWidth: buttonSettingsBorderWidth,
        buttonSettingsRegularBorder: buttonSettingsRegularBorder,
        buttonSettingsRegularFill: buttonSettingsRegularFill,
        buttonSettingsVerticalPadding: buttonSettingsVerticalPadding,
        buttonSettingsHorizontalPadding: buttonSettingsHorizontalPadding,
        buttonSettingsHoverClickedBorder: buttonSettingsHoverClickedBorder,
        buttonSettingsHoverClickedFill: buttonSettingsHoverClickedFill,
        buttonSettingsTextColorRegular: buttonSettingsTextColorRegular,
        buttonSettingsTextColorHover: buttonSettingsTextColorHover,
        buttonSettingsTextColorClicked: buttonSettingsTextColorClicked
      }));
    } else if (el.type === 'page') {
      component = /*#__PURE__*/_react.default.createElement(_Page.default, Object.assign({}, el, {
        disabledRedirect: disabledRedirect,
        disabledListClick: disabledListClick,
        navBarTextHoverColor: navBarTextHoverColor,
        navBarTextClickedColor: navBarTextClickedColor,
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
        dropdownSettingsVerticalPadding: dropdownSettingsVerticalPadding
      }));
    }

    return /*#__PURE__*/_react.default.createElement(_react.Fragment, {
      key: el.id
    }, component);
  })), logoAlignment === 'right' && LogoComponent));
};

var Wrapper = _styledComponents.default.div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["\n  display: flex;\n  height: ", "px;\n  background-color: ", ";\n  padding: 0 50px;\n  width: 100%;\n  margin: auto;\n  align-items: center;\n  flex-shrink: 0;\n  z-index: 1000;\n\n  ", ";\n"])), function (_ref2) {
  var height = _ref2.height;
  return height;
}, function (_ref3) {
  var navBarRegularColor = _ref3.navBarRegularColor;
  return navBarRegularColor;
}, function (_ref4) {
  var navBarBehavior = _ref4.navBarBehavior;
  return navBarBehavior === 'frozen' && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2.default)(["\n      position: sticky;\n      top: 0;\n    "])));
});

var Logo = _styledComponents.default.div(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2.default)(["\n  width: ", "px;\n  height: ", "px;\n"])), _consts.logoImageWidth, _consts.logoImageHeight);

var Menu = _styledComponents.default.div(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2.default)(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  max-width: 1120px;\n  margin: auto;\n  height: ", "px;\n"])), function (_ref5) {
  var height = _ref5.height;
  return height;
});

var Container = _styledComponents.default.div(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2.default)(["\n  display: flex;\n  flex: 1 1 auto;\n  margin: ", ";\n  justify-content: ", ";\n  font-size: ", "px;\n  font-family: ", ";\n  font-weight: ", ";\n  font-style: ", ";\n  text-decoration: ", ";\n  color: ", ";\n  height: 100%;\n  > div {\n    margin-right: ", "px;\n    &:last-child {\n      margin-right: 0;\n    }\n  }\n"])), function (_ref6) {
  var logoAlignment = _ref6.logoAlignment;

  if (logoAlignment === 'right') {
    return '0 24px 0 0';
  }

  return '0 0 0 24px';
}, function (_ref7) {
  var navBarTextAlignment = _ref7.navBarTextAlignment;
  return navBarTextAlignment;
}, function (_ref8) {
  var navBarTextFontSize = _ref8.navBarTextFontSize;
  return navBarTextFontSize;
}, function (_ref9) {
  var navBarTextFontFamily = _ref9.navBarTextFontFamily;
  return navBarTextFontFamily;
}, function (_ref10) {
  var navBarTextBold = _ref10.navBarTextBold;
  return navBarTextBold ? 'bold' : 'normal';
}, function (_ref11) {
  var navBarTextItalic = _ref11.navBarTextItalic;
  return navBarTextItalic ? 'italic' : 'normal';
}, function (_ref12) {
  var navBarTextUnderline = _ref12.navBarTextUnderline;
  return navBarTextUnderline ? 'underline' : 'none';
}, function (_ref13) {
  var navBarTextRegularColor = _ref13.navBarTextRegularColor;
  return navBarTextRegularColor;
}, function (_ref14) {
  var navBarTextSpacing = _ref14.navBarTextSpacing;
  return navBarTextSpacing;
});

var _default = NavBar;
exports.default = _default;
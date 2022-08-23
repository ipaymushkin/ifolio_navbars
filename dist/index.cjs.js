"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("react"),e=require("styled-components"),n=require("prop-types");function o(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var r=o(t),i=o(e),l=o(n);function a(){return a=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},a.apply(this,arguments)}function d(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function u(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var o,r,i=[],l=!0,a=!1;try{for(n=n.call(t);!(l=(o=n.next()).done)&&(i.push(o.value),!e||i.length!==e);l=!0);}catch(t){a=!0,r=t}finally{try{l||null==n.return||n.return()}finally{if(a)throw r}}return i}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}var s,g=function(t){return Math.floor(t)},f=function(t){if(!t||0===Object.keys(t).length)return"";var e=t.imageBox,n=t.rotate,o=e.x,r=e.y,i=e.height,l=e.width;return"?x=".concat(g(o),"&y=").concat(g(r),"&w=").concat(g(l),"&h=").concat(g(i),"&rotate=").concat(n)},v=function(t){var e=t.icon,n=t.opacity,o=void 0===n?1:n,i=t.hoverOpacity,l=void 0===i?1:i,a=t.color,d=void 0===a?"#000":a,u=t.hoverColor,c=void 0===u?d:u,s=t.size,g=void 0===s?20:s,f=t.rotate,v=t.noCursor,x=t.padding,S=void 0===x?0:x,m=t.width,C=t.height,h=t.tableIcon;return r.default.createElement(b,{color:d,hoverColor:c,size:g,width:m,height:C,opacity:o,hoverOpacity:l,rotate:f,noCursor:v,padding:S,tableIcon:h},p(e))},p=function(t){var e=t;return"function"==typeof t?r.default.createElement(e,null):"string"==typeof t?t:null},b=i.default.div(s||(s=d(["\n  cursor: ",";\n  display: ",";\n  flex: 0 0 auto;\n  align-items: center;\n  font-size: ",";\n  width: ","px;\n  height: ","px;\n  transform: rotate(","deg);\n  transform-origin: 50% 50%;\n  padding: ","px;\n\n  :hover {\n    svg {\n      fill: ",";\n      opacity: ",";\n    }\n  }\n\n  svg {\n    fill: ",";\n    opacity: ",";\n    width: 100%;\n    height: 100%;\n    transition: all ease-in-out 0.3s;\n    vertical-align: ",";\n  }\n"])),(function(t){return t.noCursor?"initial":"pointer"}),(function(t){return t.tableIcon?"table-cell":"flex"}),(function(t){return!t.tableIcon&&"0"}),(function(t){var e=t.size,n=t.width;return n||e}),(function(t){var e=t.size,n=t.height;return n||e}),(function(t){return t.rotate}),(function(t){return t.padding}),(function(t){return t.hoverColor}),(function(t){return t.hoverOpacity}),(function(t){return t.color}),(function(t){return t.opacity}),(function(t){return t.tableIcon&&"middle"}));v.propTypes={color:l.default.string,hoverColor:l.default.string,icon:l.default.oneOfType([l.default.string,l.default.func]),size:l.default.number,padding:l.default.number,opacity:l.default.number,hoverOpacity:l.default.number,rotate:l.default.number,noCursor:l.default.bool,width:l.default.number,height:l.default.number,tableIcon:l.default.bool},v.defaultProps={opacity:1,color:"#000",size:20,padding:0,rotate:0,noCursor:!1,tableIcon:!1};var x,S,m,C,h,T,B=function(){return r.default.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24"},r.default.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),r.default.createElement("path",{d:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"}))},k=function(t){return window.open(t,"_blank","noreferrer noopener")},w=i.default.div(x||(x=d(["\n  margin: 10px 0;\n  line-height: normal;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  border-radius: ","px;\n  border: ","px solid\n    ",";\n  background: ",";\n  padding: ",";\n  color: ",";\n\n  &:hover {\n    border: ","px solid\n      ",";\n    background: ",";\n    color: ",";\n  }\n\n  &:active {\n    border: ","px solid\n      ",";\n    background: ",";\n    color: ",";\n  }\n"])),(function(t){return t.buttonSettingsRoundCorners}),(function(t){return t.buttonSettingsBorderWidth}),(function(t){return t.buttonSettingsRegularBorder}),(function(t){return t.buttonSettingsRegularFill}),(function(t){var e=t.buttonSettingsVerticalPadding,n=t.buttonSettingsHorizontalPadding;return"".concat(e,"px ").concat(n,"px")}),(function(t){return t.buttonSettingsTextColorRegular}),(function(t){return t.buttonSettingsBorderWidth}),(function(t){return t.buttonSettingsHoverClickedBorder}),(function(t){return t.buttonSettingsHoverClickedFill}),(function(t){return t.buttonSettingsTextColorHover}),(function(t){return t.buttonSettingsBorderWidth}),(function(t){return t.buttonSettingsHoverClickedBorder}),(function(t){return t.buttonSettingsHoverClickedFill}),(function(t){return t.buttonSettingsTextColorClicked})),y=i.default.div(S||(S=d([""]))),H=i.default.div(m||(m=d(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  height: 100%;\n\n  &:hover {\n    color: ",";\n  }\n\n  &:active {\n    color: ",";\n  }\n"])),(function(t){return t.navBarTextHoverColor}),(function(t){return t.navBarTextClickedColor})),R=t.memo((function(e){var n=e.disabledRedirect,o=e.disabledListClick,i=e.link,l=e.title,a=e.navBarTextHoverColor,d=e.navBarTextClickedColor,c=e.children,s=e.dropdownSettingsInactiveFill,g=e.dropdownSettingsInactiveBorder,f=e.dropdownSettingsHoverClickedFill,p=e.dropdownSettingsHoverClickedBorder,b=e.dropdownSettingsTextColorRegular,x=e.dropdownSettingsTextColorHover,S=e.dropdownSettingsTextColorClicked,m=e.dropdownSettingsTextFontFamily,C=e.dropdownSettingsTextFontSize,h=e.dropdownSettingsTextBold,T=e.dropdownSettingsTextUnderline,w=e.dropdownSettingsTextItalic,R=e.dropdownSettingsHorizontalPadding,P=e.dropdownSettingsVerticalPadding,I=e.isStatic,A=u(t.useState(I),2),O=A[0],j=A[1],L=function(e){var n=t.createRef(),o=function(t){!n.current||null!=n&&n.current.contains(t.target)||e(t,n.current)};return t.useEffect((function(){return document.addEventListener("mousedown",o),document.addEventListener("touchstart",o),function(){document.removeEventListener("mousedown",o),document.removeEventListener("touchstart",o)}})),n}((function(){j(!1)})),V=c.length>0,W=t.useCallback((function(){V&&!o?j((function(t){return!t})):V||n||!i||k(i)}),[o,n,V,i]);return r.default.createElement(F,{ref:L},r.default.createElement(H,{navBarTextHoverColor:a,navBarTextClickedColor:d,onClick:W,"data-link":V?void 0:i,"data-isdropdown":V},l," ",V&&r.default.createElement(y,{"data-arrow":!0},O?r.default.createElement(v,{icon:B,rotate:I?90:-90,color:"#ffffff"}):r.default.createElement(v,{icon:B,rotate:90,color:"#ffffff"}))),O&&V&&r.default.createElement(E,{"data-list":!0,className:"navbar-list"},c.map((function(t){return r.default.createElement(z,{key:t.id,dropdownSettingsInactiveFill:s,dropdownSettingsInactiveBorder:g,dropdownSettingsHoverClickedFill:f,dropdownSettingsHoverClickedBorder:p,dropdownSettingsTextColorRegular:b,dropdownSettingsTextColorHover:x,dropdownSettingsTextColorClicked:S,dropdownSettingsTextFontFamily:m,dropdownSettingsTextFontSize:C,dropdownSettingsTextBold:h,dropdownSettingsTextUnderline:T,dropdownSettingsTextItalic:w,dropdownSettingsHorizontalPadding:R,dropdownSettingsVerticalPadding:P,onClick:function(){t.link&&!n?(k(t.link),j(!1)):j(!1)},"data-link":t.link},t.title)}))))})),F=i.default.div(C||(C=d(["\n  position: relative;\n"]))),E=i.default.div(h||(h=d(["\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1;\n"]))),z=i.default.div(T||(T=d(["\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n  cursor: pointer;\n  background: ",";\n  border: 2px solid ",";\n  color: ",";\n  font-size: ","px;\n  font-family: ",";\n  font-weight: ",";\n  font-style: ",";\n  text-decoration: ",";\n  padding: ",";\n\n  &:hover {\n    background: ",";\n    border: 2px solid ",";\n    color: ",";\n  }\n\n  &:active {\n    background: ",";\n    border: 2px solid ",";\n    color: ",";\n  }\n"])),(function(t){return t.dropdownSettingsInactiveFill}),(function(t){return t.dropdownSettingsInactiveBorder}),(function(t){return t.dropdownSettingsTextColorRegular}),(function(t){return t.dropdownSettingsTextFontSize}),(function(t){return t.dropdownSettingsTextFontFamily}),(function(t){return t.dropdownSettingsTextBold?"bold":"normal"}),(function(t){return t.dropdownSettingsTextItalic?"italic":"normal"}),(function(t){return t.dropdownSettingsTextUnderline?"underline":"none"}),(function(t){var e=t.dropdownSettingsVerticalPadding,n=t.dropdownSettingsHorizontalPadding;return"".concat(e,"px ").concat(n,"px")}),(function(t){return t.dropdownSettingsHoverClickedFill}),(function(t){return t.dropdownSettingsHoverClickedBorder}),(function(t){return t.dropdownSettingsTextColorHover}),(function(t){return t.dropdownSettingsHoverClickedFill}),(function(t){return t.dropdownSettingsHoverClickedBorder}),(function(t){return t.dropdownSettingsTextColorClicked}));R.propTypes={link:l.default.string,disabledRedirect:l.default.bool,disabledListClick:l.default.bool,title:l.default.string,navBarTextHoverColor:l.default.string,navBarTextClickedColor:l.default.string,children:l.default.array,dropdownSettingsInactiveFill:l.default.string,dropdownSettingsInactiveBorder:l.default.string,dropdownSettingsHoverClickedFill:l.default.string,dropdownSettingsHoverClickedBorder:l.default.string,dropdownSettingsTextColorRegular:l.default.string,dropdownSettingsTextColorHover:l.default.string,dropdownSettingsTextColorClicked:l.default.string,dropdownSettingsTextFontFamily:l.default.string,dropdownSettingsTextFontSize:l.default.number,dropdownSettingsTextBold:l.default.bool,dropdownSettingsTextUnderline:l.default.bool,dropdownSettingsTextItalic:l.default.bool,dropdownSettingsHorizontalPadding:l.default.number,dropdownSettingsVerticalPadding:l.default.number};var P,I,A,O=t.memo((function(e){var n=e.link,o=e.disabledRedirect,i=e.title,l=e.buttonSettingsRoundCorners,a=e.buttonSettingsBorderWidth,d=e.buttonSettingsRegularBorder,u=e.buttonSettingsRegularFill,c=e.buttonSettingsHorizontalPadding,s=e.buttonSettingsVerticalPadding,g=e.buttonSettingsHoverClickedBorder,f=e.buttonSettingsHoverClickedFill,v=e.buttonSettingsTextColorRegular,p=e.buttonSettingsTextColorHover,b=e.buttonSettingsTextColorClicked,x=t.useCallback((function(){n&&!o&&k(n)}),[n,o]);return r.default.createElement(w,{buttonSettingsRoundCorners:l,buttonSettingsBorderWidth:a,buttonSettingsRegularBorder:d,buttonSettingsRegularFill:u,buttonSettingsHorizontalPadding:c,buttonSettingsVerticalPadding:s,buttonSettingsHoverClickedBorder:g,buttonSettingsHoverClickedFill:f,buttonSettingsTextColorRegular:v,buttonSettingsTextColorHover:p,buttonSettingsTextColorClicked:b,onClick:x,"data-link":n},i)}));O.propTypes={disabledRedirect:l.default.bool,title:l.default.string,link:l.default.string,buttonSettingsRoundCorners:l.default.number,buttonSettingsBorderWidth:l.default.number,buttonSettingsRegularBorder:l.default.string,buttonSettingsRegularFill:l.default.string,buttonSettingsVerticalPadding:l.default.number,buttonSettingsHorizontalPadding:l.default.number,buttonSettingsHoverClickedBorder:l.default.string,buttonSettingsHoverClickedFill:l.default.string,buttonSettingsTextColorRegular:l.default.string,buttonSettingsTextColorHover:l.default.string,buttonSettingsTextColorClicked:l.default.string};var j,L,V,W,M,U,N=t.forwardRef((function(t,e){var n=t.height,o=t.id,i=t.crop,l=t.source,d=t.alt,u=t.ignoreMaxHeight,c=t.isTurntable,s=t.isHero,g={width:"100%",height:"100%",objectFit:"cover"};return u||(g.maxHeight="600px"),r.default.createElement(Z,{ref:e,isTurntable:c,isHero:s,height:n,id:o},r.default.createElement(q,a({},i.imagePosition,{isHero:s}),r.default.createElement("img",{src:l,alt:d,style:g})))})),q=i.default.div(P||(P=d(["\n  position: relative;\n  left: ","%;\n  top: ","%;\n  width: ","%;\n  height: ","%;\n\n  ",";\n"])),(function(t){return t.x||0}),(function(t){return t.y||0}),(function(t){return t.width||100}),(function(t){return t.height||100}),(function(t){return t.isHero&&e.css(I||(I=d(["\n      position: static;\n      img {\n        object-fit: cover;\n        //margin-left: auto;\n        //margin-right: auto;\n        //width: auto !important;\n      }\n    "])))})),Z=i.default.div(A||(A=d(["\n  width: 100%;\n  height: ",";\n  position: relative;\n  background-color: transparent;\n  overflow: hidden;\n"])),(function(t){var e=t.height,n=t.isTurntable,o=t.isHero;return n||o?"100%":e?e+"px":"100%"}));N.propTypes={height:l.default.number,id:l.default.string,crop:l.default.object,source:l.default.string.isRequired,alt:l.default.string,ignoreMaxHeight:l.default.bool,isTurntable:l.default.bool,isHero:l.default.bool},N.defaultProps={id:"",alt:"",ignoreMaxHeight:!1,crop:{}};var _=function(e){var n=e.config,o=e.disabledRedirect,i=void 0!==o&&o,l=e.disabledListClick,d=void 0!==l&&l,u=e.stickyOffset,c=void 0===u?0:u,s=e.isStatic,g=void 0!==s&&s,v=e.hideLogo,p=void 0!==v&&v,b=e.isPreview,x=void 0!==b&&b,S=n.height,m=n.navBarRegularColor,C=n.logoAlignment,h=n.logoCropperOptions,T=n.logoSrc,B=n.navBarTextAlignment,k=n.navBarTextFontSize,w=n.navBarTextFontFamily,y=n.navBarTextBold,H=n.navBarTextItalic,F=n.navBarTextUnderline,E=n.navBarTextRegularColor,z=n.structure,P=n.navBarTextHoverColor,I=n.navBarTextClickedColor,A=n.navBarTextSpacing,j=n.buttonSettingsRoundCorners,L=n.buttonSettingsBorderWidth,V=n.buttonSettingsRegularBorder,W=n.buttonSettingsRegularFill,M=n.buttonSettingsHorizontalPadding,U=n.buttonSettingsVerticalPadding,q=n.buttonSettingsHoverClickedFill,Z=n.buttonSettingsHoverClickedBorder,_=n.buttonSettingsTextColorRegular,$=n.buttonSettingsTextColorHover,X=n.buttonSettingsTextColorClicked,Y=n.navBarBehavior,tt=n.dropdownSettingsInactiveFill,et=n.dropdownSettingsInactiveBorder,nt=n.dropdownSettingsHoverClickedFill,ot=n.dropdownSettingsHoverClickedBorder,rt=n.dropdownSettingsTextColorRegular,it=n.dropdownSettingsTextColorHover,lt=n.dropdownSettingsTextColorClicked,at=n.dropdownSettingsTextFontFamily,dt=n.dropdownSettingsTextFontSize,ut=n.dropdownSettingsTextBold,ct=n.dropdownSettingsTextUnderline,st=n.dropdownSettingsTextItalic,gt=n.dropdownSettingsHorizontalPadding,ft=n.dropdownSettingsVerticalPadding,vt=null;return p||(vt=r.default.createElement(J,null,r.default.createElement(N,{source:T+f(h),crop:h}))),r.default.createElement(G,{height:S,navBarRegularColor:m,navBarBehavior:Y,stickyOffset:c,className:"navbar-desktop"},r.default.createElement(K,{height:S},"left"===C&&vt,r.default.createElement(Q,{navBarTextAlignment:B,navBarTextFontSize:k,navBarTextFontFamily:w,navBarTextBold:y,navBarTextItalic:H,navBarTextUnderline:F,navBarTextRegularColor:E,navBarTextSpacing:A,logoAlignment:C},0===(null==z?void 0:z.length)&&x?r.default.createElement(D,null,"Navigation will preview here once created"):r.default.createElement(r.default.Fragment,null,null==z?void 0:z.map((function(e){var n=null;return"button"===e.type?n=r.default.createElement(O,a({},e,{disabledRedirect:i,buttonSettingsRoundCorners:j,buttonSettingsBorderWidth:L,buttonSettingsRegularBorder:V,buttonSettingsRegularFill:W,buttonSettingsVerticalPadding:U,buttonSettingsHorizontalPadding:M,buttonSettingsHoverClickedBorder:Z,buttonSettingsHoverClickedFill:q,buttonSettingsTextColorRegular:_,buttonSettingsTextColorHover:$,buttonSettingsTextColorClicked:X})):"page"===e.type&&(n=r.default.createElement(R,a({},e,{disabledRedirect:i,disabledListClick:d,navBarTextHoverColor:P,navBarTextClickedColor:I,dropdownSettingsInactiveFill:tt,dropdownSettingsInactiveBorder:et,dropdownSettingsHoverClickedFill:nt,dropdownSettingsHoverClickedBorder:ot,dropdownSettingsTextColorRegular:rt,dropdownSettingsTextColorHover:it,dropdownSettingsTextColorClicked:lt,dropdownSettingsTextFontFamily:at,dropdownSettingsTextFontSize:dt,dropdownSettingsTextBold:ut,dropdownSettingsTextUnderline:ct,dropdownSettingsTextItalic:st,dropdownSettingsHorizontalPadding:gt,dropdownSettingsVerticalPadding:ft,isStatic:g}))),r.default.createElement(t.Fragment,{key:e.id},n)})))),"right"===C&&vt))};_.propTypes={config:l.default.object,disabledRedirect:l.default.bool,disabledListClick:l.default.bool,stickyOffset:l.default.number,isStatic:l.default.bool,hideLogo:l.default.bool,isPreview:l.default.bool};var $,D=i.default.div(j||(j=d(["\n  font-family: Montserrat-bold, sans-serif;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  font-size: 15px;\n  letter-spacing: 1.5px;\n  text-transform: uppercase;\n"]))),G=i.default.div(L||(L=d(["\n  display: flex;\n  height: ","px;\n  background-color: ",";\n  padding: 0 50px;\n  width: 100%;\n  margin: auto;\n  align-items: center;\n  flex-shrink: 0;\n  z-index: 1001;\n\n  ",";\n"])),(function(t){return t.height}),(function(t){return t.navBarRegularColor}),(function(t){var n=t.navBarBehavior,o=t.stickyOffset;return"frozen"===n&&e.css(V||(V=d(["\n            position: sticky;\n            top: ","px;\n          "])),o)})),J=i.default.div(W||(W=d(["\n  width: ","px;\n  height: ","px;\n"])),100,50),K=i.default.div(M||(M=d(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  max-width: 1120px;\n  margin: auto;\n  height: ","px;\n"])),(function(t){return t.height})),Q=i.default.div(U||(U=d(["\n  display: flex;\n  flex: 1 1 auto;\n  margin: ",";\n  justify-content: ",";\n  font-size: ","px;\n  font-family: ",";\n  font-weight: ",";\n  font-style: ",";\n  text-decoration: ",";\n  color: ",";\n  height: 100%;\n\n  > div {\n    margin-right: ","px;\n\n    &:last-child {\n      margin-right: 0;\n    }\n  }\n"])),(function(t){return"right"===t.logoAlignment?"0 24px 0 0":"0 0 0 24px"}),(function(t){return t.navBarTextAlignment}),(function(t){return t.navBarTextFontSize}),(function(t){return t.navBarTextFontFamily}),(function(t){return t.navBarTextBold?"bold":"normal"}),(function(t){return t.navBarTextItalic?"italic":"normal"}),(function(t){return t.navBarTextUnderline?"underline":"none"}),(function(t){return t.navBarTextRegularColor}),(function(t){return t.navBarTextSpacing})),X=function(){return r.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"19.94",height:"16.44",viewBox:"0 0 19.94 16.44"},r.default.createElement("path",{d:"M20.41,6.91H3.47a1.5,1.5,0,0,1,0-3H20.41A1.5,1.5,0,0,1,20.41,6.91Z",transform:"translate(-1.97 -3.91)"}),r.default.createElement("path",{d:"M20.41,13.91H3.47a1.5,1.5,0,0,1,0-3H20.41A1.5,1.5,0,0,1,20.41,13.91Z",transform:"translate(-1.97 -3.91)"}),r.default.createElement("path",{d:"M20.41,20.34H3.47a1.5,1.5,0,0,1,0-3H20.41A1.5,1.5,0,0,1,20.41,20.34Z",transform:"translate(-1.97 -3.91)"}))},Y=function(t){var e=t.children,n=t.onClick,o=t.mobileTextAlignment,i=t.link;return r.default.createElement(tt,{onClick:n,mobileTextAlignment:o,"data-link":i},e)},tt=i.default.div($||($=d(["\n    padding: 15px;\n    display: flex;\n    justify-content: ",";\n"])),(function(t){return"center"===t.mobileTextAlignment?"center":"flex-start"}));Y.propTypes={children:l.default.any,onClick:l.default.func,link:l.default.string};var et=t.memo((function(e){var n=e.link,o=e.disabledRedirect,i=e.title,l=e.buttonSettingsRoundCorners,a=e.buttonSettingsBorderWidth,d=e.buttonSettingsRegularBorder,u=e.buttonSettingsRegularFill,c=e.buttonSettingsHorizontalPadding,s=e.buttonSettingsVerticalPadding,g=e.buttonSettingsHoverClickedBorder,f=e.buttonSettingsHoverClickedFill,v=e.buttonSettingsTextColorRegular,p=e.buttonSettingsTextColorHover,b=e.buttonSettingsTextColorClicked,x=e.mobileTextAlignment,S=t.useCallback((function(){n&&!o&&k(n)}),[n,o]);return r.default.createElement(Y,{onClick:S,link:n,mobileTextAlignment:x},r.default.createElement(w,{buttonSettingsRoundCorners:l,buttonSettingsBorderWidth:a,buttonSettingsRegularBorder:d,buttonSettingsRegularFill:u,buttonSettingsHorizontalPadding:c,buttonSettingsVerticalPadding:s,buttonSettingsHoverClickedBorder:g,buttonSettingsHoverClickedFill:f,buttonSettingsTextColorRegular:v,buttonSettingsTextColorHover:p,buttonSettingsTextColorClicked:b},i))}));et.propTypes={disabledRedirect:l.default.bool,title:l.default.string,link:l.default.string,buttonSettingsRoundCorners:l.default.number,buttonSettingsBorderWidth:l.default.number,buttonSettingsRegularBorder:l.default.string,buttonSettingsRegularFill:l.default.string,buttonSettingsVerticalPadding:l.default.number,buttonSettingsHorizontalPadding:l.default.number,buttonSettingsHoverClickedBorder:l.default.string,buttonSettingsHoverClickedFill:l.default.string,buttonSettingsTextColorRegular:l.default.string,buttonSettingsTextColorHover:l.default.string,buttonSettingsTextColorClicked:l.default.string};var nt,ot,rt,it,lt,at,dt,ut,ct=t.memo((function(e){var n=e.disabledRedirect,o=e.disabledListClick,i=e.link,l=e.title,a=e.navBarTextHoverColor,d=e.navBarTextClickedColor,c=e.children,s=e.mobileTextAlignment,g=e.isStatic,f=u(t.useState(g),2),p=f[0],b=f[1],x=c.length>0,S=t.useCallback((function(){x&&!o?b((function(t){return!t})):x||n||!i||k(i)}),[o,n,x,i]);return r.default.createElement(r.default.Fragment,null,r.default.createElement(Y,{link:x?void 0:i,onClick:S,mobileTextAlignment:s},r.default.createElement(H,{navBarTextHoverColor:a,navBarTextClickedColor:d,"data-isdropdown":x},l," ",x&&r.default.createElement(y,{"data-arrow":!0},p?r.default.createElement(v,{icon:B,rotate:g?90:-90,color:"#ffffff"}):r.default.createElement(v,{icon:B,rotate:90,color:"#ffffff"})))),p&&x&&r.default.createElement(r.default.Fragment,null,c.map((function(t){return r.default.createElement(Y,{key:t.id,onClick:function(){t.link&&!n&&k(t.link)},link:t.link,mobileTextAlignment:s},r.default.createElement(H,{navBarTextHoverColor:a,navBarTextClickedColor:d},t.title))}))))}));ct.propTypes={link:l.default.string,disabledRedirect:l.default.bool,disabledListClick:l.default.bool,title:l.default.string,navBarTextHoverColor:l.default.string,navBarTextClickedColor:l.default.string,children:l.default.array,mobileTextAlignment:l.default.string};var st=function(e){var n=e.config,o=e.stickyOffset,i=void 0===o?0:o,l=e.isConstructor,d=void 0!==l&&l,c=e.isStatic,s=void 0!==c&&c,g=e.disabledRedirect,p=void 0!==g&&g,b=e.disabledListClick,x=void 0!==b&&b,S=u(t.useState(d),2),m=S[0],C=S[1],h=n.mobileHeight,T=n.navBarRegularColor,B=n.mobileLogoAlignment,k=n.logoSrc,w=n.logoCropperOptions,y=n.navBarBehavior,H=n.mobileFontSize,R=n.navBarTextFontFamily,F=n.navBarTextBold,E=n.navBarTextItalic,z=n.navBarTextUnderline,P=n.navBarTextRegularColor,I=n.navBarTextSpacing,A=n.buttonSettingsRoundCorners,O=n.buttonSettingsBorderWidth,j=n.buttonSettingsRegularBorder,L=n.buttonSettingsRegularFill,V=n.buttonSettingsHorizontalPadding,W=n.buttonSettingsVerticalPadding,M=n.buttonSettingsHoverClickedFill,U=n.buttonSettingsHoverClickedBorder,q=n.buttonSettingsTextColorRegular,Z=n.buttonSettingsTextColorHover,_=n.buttonSettingsTextColorClicked,$=n.mobileTextAlignment,D=n.navBarTextHoverColor,G=n.navBarTextClickedColor,J=n.structure,K=t.useCallback((function(){d||x||C((function(t){return!t}))}),[d,x]);return r.default.createElement(gt,{className:"navbar-mobile",navBarBehavior:y,stickyOffset:i,isConstructor:d},r.default.createElement(vt,{height:h,navBarRegularColor:T},r.default.createElement(xt,{onClick:K},r.default.createElement(v,{icon:X,color:"#ffffff"})),r.default.createElement(pt,{mobileLogoAlignment:B},r.default.createElement(bt,null,r.default.createElement(N,{source:k+f(w),crop:w})))),r.default.createElement(ft,{mobileHeight:h,offsetTop:i+h,isConstructor:d,open:m,navBarRegularColor:T,mobileFontSize:H,navBarTextFontFamily:R,navBarTextBold:F,navBarTextItalic:E,navBarTextUnderline:z,navBarTextRegularColor:P,navBarTextSpacing:I},null==J?void 0:J.map((function(e){var n="any";return"button"===e.type?n=r.default.createElement(et,a({},e,{mobileTextAlignment:$,disabledRedirect:d,buttonSettingsRoundCorners:A,buttonSettingsBorderWidth:O,buttonSettingsRegularBorder:j,buttonSettingsRegularFill:L,buttonSettingsVerticalPadding:W,buttonSettingsHorizontalPadding:V,buttonSettingsHoverClickedBorder:U,buttonSettingsHoverClickedFill:M,buttonSettingsTextColorRegular:q,buttonSettingsTextColorHover:Z,buttonSettingsTextColorClicked:_})):"page"===e.type&&(n=r.default.createElement(ct,a({},e,{disabledRedirect:p,disabledListClick:x,navBarTextHoverColor:D,navBarTextClickedColor:G,mobileTextAlignment:$,isStatic:s}))),r.default.createElement(t.Fragment,{key:e.id},n)}))))},gt=i.default.div(nt||(nt=d(["\n  z-index: 1001;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  ",";\n"])),(function(t){var n=t.navBarBehavior,o=t.stickyOffset,r=t.isConstructor;return"frozen"===n&&!r&&e.css(ot||(ot=d(["\n            position: sticky;\n            top: ","px;\n          "])),o)})),ft=i.default.div(rt||(rt=d(["\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: ","px;\n  width: 100%;\n  height: ",";\n  transition: height 0.5s ease;\n  background-color: ",";\n  overflow: hidden;\n  font-size: ","px;\n  font-family: ",";\n  font-weight: ",";\n  font-style: ",";\n  text-decoration: ",";\n  color: ",";\n  ",";\n"])),(function(t){return t.mobileHeight}),(function(t){return t.isConstructor?"auto":0}),(function(t){return t.navBarRegularColor}),(function(t){return t.mobileFontSize}),(function(t){return t.navBarTextFontFamily}),(function(t){return t.navBarTextBold?"bold":"normal"}),(function(t){return t.navBarTextItalic?"italic":"normal"}),(function(t){return t.navBarTextUnderline?"underline":"none"}),(function(t){return t.navBarTextRegularColor}),(function(t){var n=t.offsetTop,o=t.open;return!t.isConstructor&&o&&e.css(it||(it=d(["\n            height: calc(100vh - ","px);\n          "])),n)})),vt=i.default.div(lt||(lt=d(["\n  display: flex;\n  width: 100%;\n  padding: 15px 13px 16px 15px;\n  border: solid 1px rgba(164, 198, 225, 0.39);\n  height: ","px;\n  background-color: ",";\n  align-items: center;\n"])),(function(t){return t.height}),(function(t){return t.navBarRegularColor})),pt=i.default.div(at||(at=d(["\n  display: flex;\n  flex: 1 1 auto;\n  justify-content: ",";\n"])),(function(t){var e=t.mobileLogoAlignment;return"center"===e?"center":"right"===e?"flex-end":""})),bt=i.default.div(dt||(dt=d(["\n  width: ","px;\n  height: ","px;\n"])),100,50),xt=i.default.div(ut||(ut=d(["\n  display: flex;\n  position: absolute;\n"])));st.propTypes={config:l.default.object,stickyOffset:l.default.number},exports.NavBar=_,exports.NavBarMobile=st,exports.logoImageHeight=50,exports.logoImageWidth=100;
//# sourceMappingURL=index.cjs.js.map

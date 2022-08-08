import t, { memo, useState, createRef, useEffect, useCallback, forwardRef, Fragment } from 'react';
import a, { css } from 'styled-components';
import c from 'prop-types';

function g(){return g=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);}return t},g.apply(this,arguments)}function s(t,n){return n||(n=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}}))}function p(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==e)return;var o,r,i=[],l=!0,d=!1;try{for(e=e.call(t);!(l=(o=e.next()).done)&&(i.push(o.value),!n||i.length!==n);l=!0);}catch(t){d=!0,r=t;}finally{try{l||null==e.return||e.return();}finally{if(d)throw r}}return i}(t,n)||function(t,n){if(!t)return;if("string"==typeof t)return f(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return f(t,n)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,o=new Array(n);e<n;e++)o[e]=t[e];return o}var v,b=function(t){return Math.floor(t)},x=function(t){if(!t||0===Object.keys(t).length)return "";var n=t.imageBox,e=t.rotate,o=n.x,r=n.y,i=n.height,l=n.width;return "?x=".concat(b(o),"&y=").concat(b(r),"&w=").concat(b(l),"&h=").concat(b(i),"&rotate=").concat(e)},S=function(n){var e=n.icon,o=n.opacity,r=void 0===o?1:o,i=n.hoverOpacity,l=void 0===i?1:i,d=n.color,a=void 0===d?"#000":d,u=n.hoverColor,c=void 0===u?a:u,g=n.size,s=void 0===g?20:g,p=n.rotate,f=n.noCursor,v=n.padding,b=void 0===v?0:v,x=n.width,S=n.height,C=n.tableIcon;return t.createElement(m,{color:a,hoverColor:c,size:s,width:x,height:S,opacity:r,hoverOpacity:l,rotate:p,noCursor:f,padding:b,tableIcon:C},h(e))},h=function(n){var e=n;return "function"==typeof n?t.createElement(e,null):"string"==typeof n?n:null},m=a.div(v||(v=s(["\n  cursor: ",";\n  display: ",";\n  flex: 0 0 auto;\n  align-items: center;\n  font-size: ",";\n  width: ","px;\n  height: ","px;\n  transform: rotate(","deg);\n  transform-origin: 50% 50%;\n  padding: ","px;\n\n  :hover {\n    svg {\n      fill: ",";\n      opacity: ",";\n    }\n  }\n\n  svg {\n    fill: ",";\n    opacity: ",";\n    width: 100%;\n    height: 100%;\n    transition: all ease-in-out 0.3s;\n    vertical-align: ",";\n  }\n"])),(function(t){return t.noCursor?"initial":"pointer"}),(function(t){return t.tableIcon?"table-cell":"flex"}),(function(t){return !t.tableIcon&&"0"}),(function(t){var n=t.size,e=t.width;return e||n}),(function(t){var n=t.size,e=t.height;return e||n}),(function(t){return t.rotate}),(function(t){return t.padding}),(function(t){return t.hoverColor}),(function(t){return t.hoverOpacity}),(function(t){return t.color}),(function(t){return t.opacity}),(function(t){return t.tableIcon&&"middle"}));S.propTypes={color:c.string,hoverColor:c.string,icon:c.oneOfType([c.string,c.func]),size:c.number,padding:c.number,opacity:c.number,hoverOpacity:c.number,rotate:c.number,noCursor:c.bool,width:c.number,height:c.number,tableIcon:c.bool},S.defaultProps={opacity:1,color:"#000",size:20,padding:0,rotate:0,noCursor:!1,tableIcon:!1};var C,w,T,B,y,k,H=function(){return t.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24"},t.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),t.createElement("path",{d:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"}))},F=function(t){return window.open(t,"_blank","noreferrer noopener")},R=memo((function(o){var l=o.disabledRedirect,d=o.disabledListClick,a=o.link,u=o.title,c=o.navBarTextHoverColor,g=o.navBarTextClickedColor,s=o.children,f=o.dropdownSettingsInactiveFill,v=o.dropdownSettingsInactiveBorder,b=o.dropdownSettingsHoverClickedFill,x=o.dropdownSettingsHoverClickedBorder,h=o.dropdownSettingsTextColorRegular,m=o.dropdownSettingsTextColorHover,C=o.dropdownSettingsTextColorClicked,w=o.dropdownSettingsTextFontFamily,T=o.dropdownSettingsTextFontSize,B=o.dropdownSettingsTextBold,y=o.dropdownSettingsTextUnderline,k=o.dropdownSettingsTextItalic,R=o.dropdownSettingsHorizontalPadding,j=o.dropdownSettingsVerticalPadding,A=p(useState(!1),2),L=A[0],V=A[1],M=function(t){var o=createRef(),r=function(n){!o.current||null!=o&&o.current.contains(n.target)||t(n,o.current);};return useEffect((function(){return document.addEventListener("mousedown",r),document.addEventListener("touchstart",r),function(){document.removeEventListener("mousedown",r),document.removeEventListener("touchstart",r);}})),o}((function(){V(!1);})),U=s.length>0,W=useCallback((function(){U&&!d?V((function(t){return !t})):U||l||!a||F(a);}),[d,l,U,a]);return t.createElement(E,{ref:M},t.createElement(z,{navBarTextHoverColor:c,navBarTextClickedColor:g,onClick:W},u," ",U&&t.createElement(P,null,L?t.createElement(S,{icon:H,rotate:-90,color:"#ffffff"}):t.createElement(S,{icon:H,rotate:180,color:"#ffffff"}))),L&&t.createElement(I,null,s.map((function(n){return t.createElement(O,{key:n.id,dropdownSettingsInactiveFill:f,dropdownSettingsInactiveBorder:v,dropdownSettingsHoverClickedFill:b,dropdownSettingsHoverClickedBorder:x,dropdownSettingsTextColorRegular:h,dropdownSettingsTextColorHover:m,dropdownSettingsTextColorClicked:C,dropdownSettingsTextFontFamily:w,dropdownSettingsTextFontSize:T,dropdownSettingsTextBold:B,dropdownSettingsTextUnderline:y,dropdownSettingsTextItalic:k,dropdownSettingsHorizontalPadding:R,dropdownSettingsVerticalPadding:j,onClick:function(){n.link&&!l?(F(n.link),V(!1)):V(!1);}},n.title)}))))})),E=a.div(C||(C=s(["\n  position: relative;\n"]))),z=a.div(w||(w=s(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  height: 100%;\n\n  &:hover {\n    color: ",";\n  }\n  &:active {\n    color: ",";\n  }\n"])),(function(t){return t.navBarTextHoverColor}),(function(t){return t.navBarTextClickedColor})),I=a.div(T||(T=s(["\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 100%;\n  left: 0;\n"]))),P=a.div(B||(B=s([""]))),O=a.div(y||(y=s(["\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n  cursor: pointer;\n  background: ",";\n  border: 2px solid ",";\n  color: ",";\n  font-size: ","px;\n  font-family: ",";\n  font-weight: ",";\n  font-style: ",";\n  text-decoration: ",";\n  padding: ",";\n\n  &:hover {\n    background: ",";\n    border: 2px solid ",";\n    color: ",";\n  }\n  &:active {\n    background: ",";\n    border: 2px solid ",";\n    color: ",";\n  }\n"])),(function(t){return t.dropdownSettingsInactiveFill}),(function(t){return t.dropdownSettingsInactiveBorder}),(function(t){return t.dropdownSettingsTextColorRegular}),(function(t){return t.dropdownSettingsTextFontSize}),(function(t){return t.dropdownSettingsTextFontFamily}),(function(t){return t.dropdownSettingsTextBold?"bold":"normal"}),(function(t){return t.dropdownSettingsTextItalic?"italic":"normal"}),(function(t){return t.dropdownSettingsTextUnderline?"underline":"none"}),(function(t){var n=t.dropdownSettingsVerticalPadding,e=t.dropdownSettingsHorizontalPadding;return "".concat(n,"px ").concat(e,"px")}),(function(t){return t.dropdownSettingsHoverClickedFill}),(function(t){return t.dropdownSettingsHoverClickedBorder}),(function(t){return t.dropdownSettingsTextColorHover}),(function(t){return t.dropdownSettingsHoverClickedFill}),(function(t){return t.dropdownSettingsHoverClickedBorder}),(function(t){return t.dropdownSettingsTextColorClicked}));R.propTypes={link:c.string,disabledRedirect:c.bool,disabledListClick:c.bool,title:c.string,navBarTextHoverColor:c.string,navBarTextClickedColor:c.string,children:c.array,dropdownSettingsInactiveFill:c.string,dropdownSettingsInactiveBorder:c.string,dropdownSettingsHoverClickedFill:c.string,dropdownSettingsHoverClickedBorder:c.string,dropdownSettingsTextColorRegular:c.string,dropdownSettingsTextColorHover:c.string,dropdownSettingsTextColorClicked:c.string,dropdownSettingsTextFontFamily:c.string,dropdownSettingsTextFontSize:c.number,dropdownSettingsTextBold:c.bool,dropdownSettingsTextUnderline:c.bool,dropdownSettingsTextItalic:c.bool,dropdownSettingsHorizontalPadding:c.number,dropdownSettingsVerticalPadding:c.number};var j,A,L,V=memo((function(n){var e=n.link,o=n.disabledRedirect,r=n.title,l=n.buttonSettingsRoundCorners,d=n.buttonSettingsBorderWidth,a=n.buttonSettingsRegularBorder,u=n.buttonSettingsRegularFill,c=n.buttonSettingsHorizontalPadding,g=n.buttonSettingsVerticalPadding,s=n.buttonSettingsHoverClickedBorder,p=n.buttonSettingsHoverClickedFill,f=n.buttonSettingsTextColorRegular,v=n.buttonSettingsTextColorHover,b=n.buttonSettingsTextColorClicked,x=useCallback((function(){e&&!o&&F(e);}),[e,o]);return t.createElement(M,{buttonSettingsRoundCorners:l,buttonSettingsBorderWidth:d,buttonSettingsRegularBorder:a,buttonSettingsRegularFill:u,buttonSettingsHorizontalPadding:c,buttonSettingsVerticalPadding:g,buttonSettingsHoverClickedBorder:s,buttonSettingsHoverClickedFill:p,buttonSettingsTextColorRegular:f,buttonSettingsTextColorHover:v,buttonSettingsTextColorClicked:b,onClick:x},r)})),M=a.div(k||(k=s(["\n  margin: 10px 0;\n  line-height: normal;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  border-radius: ","px;\n  border: ","px solid\n    ",";\n  background: ",";\n  padding: ",";\n  color: ",";\n\n  &:hover {\n    border: ","px solid\n      ",";\n    background: ",";\n    color: ",";\n  }\n\n  &:active {\n    border: ","px solid\n      ",";\n    background: ",";\n    color: ",";\n  }\n"])),(function(t){return t.buttonSettingsRoundCorners}),(function(t){return t.buttonSettingsBorderWidth}),(function(t){return t.buttonSettingsRegularBorder}),(function(t){return t.buttonSettingsRegularFill}),(function(t){var n=t.buttonSettingsVerticalPadding,e=t.buttonSettingsHorizontalPadding;return "".concat(n,"px ").concat(e,"px")}),(function(t){return t.buttonSettingsTextColorRegular}),(function(t){return t.buttonSettingsBorderWidth}),(function(t){return t.buttonSettingsHoverClickedBorder}),(function(t){return t.buttonSettingsHoverClickedFill}),(function(t){return t.buttonSettingsTextColorHover}),(function(t){return t.buttonSettingsBorderWidth}),(function(t){return t.buttonSettingsHoverClickedBorder}),(function(t){return t.buttonSettingsHoverClickedFill}),(function(t){return t.buttonSettingsTextColorClicked}));V.propTypes={disabledRedirect:c.bool,title:c.string,link:c.string,buttonSettingsRoundCorners:c.number,buttonSettingsBorderWidth:c.number,buttonSettingsRegularBorder:c.string,buttonSettingsRegularFill:c.string,buttonSettingsVerticalPadding:c.number,buttonSettingsHorizontalPadding:c.number,buttonSettingsHoverClickedBorder:c.string,buttonSettingsHoverClickedFill:c.string,buttonSettingsTextColorRegular:c.string,buttonSettingsTextColorHover:c.string,buttonSettingsTextColorClicked:c.string};var U,W,Z,q,$,_=forwardRef((function(n,e){var o=n.height,r=n.id,i=n.crop,l=n.source,d=n.alt,a=n.ignoreMaxHeight,u=n.isTurntable,c=n.isHero,s={width:"100%",height:"100%",objectFit:"cover"};return a||(s.maxHeight="600px"),t.createElement(G,{ref:e,isTurntable:u,isHero:c,height:o,id:r},t.createElement(D,g({},i.imagePosition,{isHero:c}),t.createElement("img",{src:l,alt:d,style:s})))})),D=a.div(j||(j=s(["\n  position: relative;\n  left: ","%;\n  top: ","%;\n  width: ","%;\n  height: ","%;\n\n  ",";\n"])),(function(t){return t.x||0}),(function(t){return t.y||0}),(function(t){return t.width||100}),(function(t){return t.height||100}),(function(t){return t.isHero&&css(A||(A=s(["\n      position: static;\n      img {\n        object-fit: cover;\n        //margin-left: auto;\n        //margin-right: auto;\n        //width: auto !important;\n      }\n    "])))})),G=a.div(L||(L=s(["\n  width: 100%;\n  height: ",";\n  position: relative;\n  background-color: transparent;\n  overflow: hidden;\n"])),(function(t){var n=t.height,e=t.isTurntable,o=t.isHero;return e||o?"100%":n?n+"px":"100%"}));_.propTypes={height:c.number,id:c.string,crop:c.object,source:c.string.isRequired,alt:c.string,ignoreMaxHeight:c.bool,isTurntable:c.bool,isHero:c.bool},_.defaultProps={id:"",alt:"",ignoreMaxHeight:!1,crop:{}};var J=function(n){var e=n.config,o=n.disabledRedirect,r=void 0!==o&&o,i=n.disabledListClick,l=void 0!==i&&i,a=n.stickyOffset,u=void 0===a?0:a,c=e.height,s=e.navBarRegularColor,p=e.logoAlignment,f=e.logoCropperOptions,v=e.logoSrc,b=e.navBarTextAlignment,S=e.navBarTextFontSize,h=e.navBarTextFontFamily,m=e.navBarTextBold,C=e.navBarTextItalic,w=e.navBarTextUnderline,T=e.navBarTextRegularColor,B=e.structure,y=e.navBarTextHoverColor,k=e.navBarTextClickedColor,H=e.navBarTextSpacing,F=e.buttonSettingsRoundCorners,E=e.buttonSettingsBorderWidth,z=e.buttonSettingsRegularBorder,I=e.buttonSettingsRegularFill,P=e.buttonSettingsHorizontalPadding,O=e.buttonSettingsVerticalPadding,j=e.buttonSettingsHoverClickedFill,A=e.buttonSettingsHoverClickedBorder,L=e.buttonSettingsTextColorRegular,M=e.buttonSettingsTextColorHover,U=e.buttonSettingsTextColorClicked,W=e.navBarBehavior,Z=e.dropdownSettingsInactiveFill,q=e.dropdownSettingsInactiveBorder,$=e.dropdownSettingsHoverClickedFill,D=e.dropdownSettingsHoverClickedBorder,G=e.dropdownSettingsTextColorRegular,J=e.dropdownSettingsTextColorHover,K=e.dropdownSettingsTextColorClicked,N=e.dropdownSettingsTextFontFamily,Q=e.dropdownSettingsTextFontSize,X=e.dropdownSettingsTextBold,Y=e.dropdownSettingsTextUnderline,rt=e.dropdownSettingsTextItalic,it=e.dropdownSettingsHorizontalPadding,lt=e.dropdownSettingsVerticalPadding,dt=t.createElement(nt,null,t.createElement(_,{source:v+x(f),crop:f}));return t.createElement(tt,{height:c,navBarRegularColor:s,navBarBehavior:W,stickyOffset:u},t.createElement(et,{height:c},"left"===p&&dt,t.createElement(ot,{navBarTextAlignment:b,navBarTextFontSize:S,navBarTextFontFamily:h,navBarTextBold:m,navBarTextItalic:C,navBarTextUnderline:w,navBarTextRegularColor:T,navBarTextSpacing:H,logoAlignment:p},(B||[]).map((function(n){var e=null;return "button"===n.type?e=t.createElement(V,g({},n,{disabledRedirect:r,buttonSettingsRoundCorners:F,buttonSettingsBorderWidth:E,buttonSettingsRegularBorder:z,buttonSettingsRegularFill:I,buttonSettingsVerticalPadding:O,buttonSettingsHorizontalPadding:P,buttonSettingsHoverClickedBorder:A,buttonSettingsHoverClickedFill:j,buttonSettingsTextColorRegular:L,buttonSettingsTextColorHover:M,buttonSettingsTextColorClicked:U})):"page"===n.type&&(e=t.createElement(R,g({},n,{disabledRedirect:r,disabledListClick:l,navBarTextHoverColor:y,navBarTextClickedColor:k,dropdownSettingsInactiveFill:Z,dropdownSettingsInactiveBorder:q,dropdownSettingsHoverClickedFill:$,dropdownSettingsHoverClickedBorder:D,dropdownSettingsTextColorRegular:G,dropdownSettingsTextColorHover:J,dropdownSettingsTextColorClicked:K,dropdownSettingsTextFontFamily:N,dropdownSettingsTextFontSize:Q,dropdownSettingsTextBold:X,dropdownSettingsTextUnderline:Y,dropdownSettingsTextItalic:rt,dropdownSettingsHorizontalPadding:it,dropdownSettingsVerticalPadding:lt}))),t.createElement(Fragment,{key:n.id},e)}))),"right"===p&&dt))};J.propTypes={config:c.object,disabledRedirect:c.bool,disabledListClick:c.bool,stickyOffset:c.number};var K,N,Q,X,Y,tt=a.div(U||(U=s(["\n  display: flex;\n  height: ","px;\n  background-color: ",";\n  padding: 0 50px;\n  width: 100%;\n  margin: auto;\n  align-items: center;\n  flex-shrink: 0;\n  z-index: 1001;\n\n  ",";\n"])),(function(t){return t.height}),(function(t){return t.navBarRegularColor}),(function(t){var n=t.navBarBehavior,e=t.stickyOffset;return "frozen"===n&&css(W||(W=s(["\n      position: sticky;\n      top: ","px;\n    "])),e)})),nt=a.div(Z||(Z=s(["\n  width: ","px;\n  height: ","px;\n"])),100,50),et=a.div(q||(q=s(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  max-width: 1120px;\n  margin: auto;\n  height: ","px;\n"])),(function(t){return t.height})),ot=a.div($||($=s(["\n  display: flex;\n  flex: 1 1 auto;\n  margin: ",";\n  justify-content: ",";\n  font-size: ","px;\n  font-family: ",";\n  font-weight: ",";\n  font-style: ",";\n  text-decoration: ",";\n  color: ",";\n  height: 100%;\n  > div {\n    margin-right: ","px;\n    &:last-child {\n      margin-right: 0;\n    }\n  }\n"])),(function(t){return "right"===t.logoAlignment?"0 24px 0 0":"0 0 0 24px"}),(function(t){return t.navBarTextAlignment}),(function(t){return t.navBarTextFontSize}),(function(t){return t.navBarTextFontFamily}),(function(t){return t.navBarTextBold?"bold":"normal"}),(function(t){return t.navBarTextItalic?"italic":"normal"}),(function(t){return t.navBarTextUnderline?"underline":"none"}),(function(t){return t.navBarTextRegularColor}),(function(t){return t.navBarTextSpacing})),rt=function(){return t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"27.03",height:"16",viewBox:"0 0 27.03 16"},t.createElement("path",{d:"M1.5,6.5a1,1,0,1,0,0,2h25a1,1,0,1,0,0-2H1.5Z",transform:"translate(-0.49 -6.5)"}),t.createElement("path",{d:"M1.5,13.5a1,1,0,1,0,0,2h25a1,1,0,1,0,0-2H1.5Z",transform:"translate(-0.49 -6.5)"}),t.createElement("path",{d:"M1.5,20.5a1,1,0,1,0,0,2h25a1,1,0,1,0,0-2H1.5Z",transform:"translate(-0.49 -6.5)"}))},it=function(n){var e=n.config,o=n.stickyOffset,r=void 0===o?0:o,i=e.mobileHeight,l=e.navBarRegularColor,d=e.mobileLogoAlignment,a=e.logoSrc,u=e.logoCropperOptions,c=e.navBarBehavior;return t.createElement(lt,{height:i,navBarRegularColor:l,navBarBehavior:c,stickyOffset:r},t.createElement(ut,null,t.createElement(S,{icon:rt,color:"#ffffff"})),t.createElement(dt,{mobileLogoAlignment:d},t.createElement(at,null,t.createElement(_,{source:a+x(u),crop:u}))))},lt=a.div(K||(K=s(["\n  z-index: 1001;\n  display: flex;\n  width: 100%;\n  padding: 15px 13px 16px 15px;\n  border-radius: 3px;\n  border: solid 1px rgba(164, 198, 225, 0.39);\n  height: ","px;\n  background-color: ",";\n  align-items: center;\n  position: relative;\n  ",";\n"])),(function(t){return t.height}),(function(t){return t.navBarRegularColor}),(function(t){var n=t.navBarBehavior,e=t.stickyOffset;return "frozen"===n&&css(N||(N=s(["\n            position: sticky;\n            top: ","px;\n          "])),e)})),dt=a.div(Q||(Q=s(["\n  display: flex;\n  flex: 1 1 auto;\n  justify-content: ",";\n"])),(function(t){var n=t.mobileLogoAlignment;return "center"===n?"center":"right"===n?"flex-end":""})),at=a.div(X||(X=s(["\n  width: ","px;\n  height: ","px;\n"])),100,50),ut=a.div(Y||(Y=s(["\n  display: flex;\n  position: absolute;\n"])));it.propTypes={config:c.object,stickyOffset:c.number};

export { J as NavBar, it as NavBarMobile };

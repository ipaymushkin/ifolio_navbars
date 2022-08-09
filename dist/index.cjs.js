"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("react"),n=require("styled-components"),e=require("prop-types");function o(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var r=o(t),i=o(n),l=o(e);function a(){return a=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t},a.apply(this,arguments)}function d(t,n){return n||(n=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}}))}function u(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==e)return;var o,r,i=[],l=!0,a=!1;try{for(e=e.call(t);!(l=(o=e.next()).done)&&(i.push(o.value),!n||i.length!==n);l=!0);}catch(t){a=!0,r=t}finally{try{l||null==e.return||e.return()}finally{if(a)throw r}}return i}(t,n)||function(t,n){if(!t)return;if("string"==typeof t)return c(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return c(t,n)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,o=new Array(n);e<n;e++)o[e]=t[e];return o}var s,g=function(t){return Math.floor(t)},f=function(t){if(!t||0===Object.keys(t).length)return"";var n=t.imageBox,e=t.rotate,o=n.x,r=n.y,i=n.height,l=n.width;return"?x=".concat(g(o),"&y=").concat(g(r),"&w=").concat(g(l),"&h=").concat(g(i),"&rotate=").concat(e)},p=function(t){var n=t.icon,e=t.opacity,o=void 0===e?1:e,i=t.hoverOpacity,l=void 0===i?1:i,a=t.color,d=void 0===a?"#000":a,u=t.hoverColor,c=void 0===u?d:u,s=t.size,g=void 0===s?20:s,f=t.rotate,p=t.noCursor,x=t.padding,S=void 0===x?0:x,h=t.width,m=t.height,C=t.tableIcon;return r.default.createElement(b,{color:d,hoverColor:c,size:g,width:h,height:m,opacity:o,hoverOpacity:l,rotate:f,noCursor:p,padding:S,tableIcon:C},v(n))},v=function(t){var n=t;return"function"==typeof t?r.default.createElement(n,null):"string"==typeof t?t:null},b=i.default.div(s||(s=d(["\n  cursor: ",";\n  display: ",";\n  flex: 0 0 auto;\n  align-items: center;\n  font-size: ",";\n  width: ","px;\n  height: ","px;\n  transform: rotate(","deg);\n  transform-origin: 50% 50%;\n  padding: ","px;\n\n  :hover {\n    svg {\n      fill: ",";\n      opacity: ",";\n    }\n  }\n\n  svg {\n    fill: ",";\n    opacity: ",";\n    width: 100%;\n    height: 100%;\n    transition: all ease-in-out 0.3s;\n    vertical-align: ",";\n  }\n"])),(function(t){return t.noCursor?"initial":"pointer"}),(function(t){return t.tableIcon?"table-cell":"flex"}),(function(t){return!t.tableIcon&&"0"}),(function(t){var n=t.size,e=t.width;return e||n}),(function(t){var n=t.size,e=t.height;return e||n}),(function(t){return t.rotate}),(function(t){return t.padding}),(function(t){return t.hoverColor}),(function(t){return t.hoverOpacity}),(function(t){return t.color}),(function(t){return t.opacity}),(function(t){return t.tableIcon&&"middle"}));p.propTypes={color:l.default.string,hoverColor:l.default.string,icon:l.default.oneOfType([l.default.string,l.default.func]),size:l.default.number,padding:l.default.number,opacity:l.default.number,hoverOpacity:l.default.number,rotate:l.default.number,noCursor:l.default.bool,width:l.default.number,height:l.default.number,tableIcon:l.default.bool},p.defaultProps={opacity:1,color:"#000",size:20,padding:0,rotate:0,noCursor:!1,tableIcon:!1};var x,S,h,m,C,w,T=function(){return r.default.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24"},r.default.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),r.default.createElement("path",{d:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"}))},B=function(t){return window.open(t,"_blank","noreferrer noopener")},k=t.memo((function(n){var e=n.disabledRedirect,o=n.disabledListClick,i=n.link,l=n.title,a=n.navBarTextHoverColor,d=n.navBarTextClickedColor,c=n.children,s=n.dropdownSettingsInactiveFill,g=n.dropdownSettingsInactiveBorder,f=n.dropdownSettingsHoverClickedFill,v=n.dropdownSettingsHoverClickedBorder,b=n.dropdownSettingsTextColorRegular,x=n.dropdownSettingsTextColorHover,S=n.dropdownSettingsTextColorClicked,h=n.dropdownSettingsTextFontFamily,m=n.dropdownSettingsTextFontSize,C=n.dropdownSettingsTextBold,w=n.dropdownSettingsTextUnderline,k=n.dropdownSettingsTextItalic,z=n.dropdownSettingsHorizontalPadding,I=n.dropdownSettingsVerticalPadding,P=n.isStatic,O=u(t.useState(P),2),j=O[0],A=O[1],L=function(n){var e=t.createRef(),o=function(t){!e.current||null!=e&&e.current.contains(t.target)||n(t,e.current)};return t.useEffect((function(){return document.addEventListener("mousedown",o),document.addEventListener("touchstart",o),function(){document.removeEventListener("mousedown",o),document.removeEventListener("touchstart",o)}})),e}((function(){A(!1)})),V=c.length>0,M=t.useCallback((function(){V&&!o?A((function(t){return!t})):V||e||!i||B(i)}),[o,e,V,i]);return r.default.createElement(y,{ref:L},r.default.createElement(H,{navBarTextHoverColor:a,navBarTextClickedColor:d,onClick:M,"data-link":i,"data-isdropdown":V},l," ",V&&r.default.createElement(R,null,j?r.default.createElement(p,{icon:T,rotate:-90,color:"#ffffff"}):r.default.createElement(p,{icon:T,rotate:180,color:"#ffffff"}))),j&&r.default.createElement(F,null,c.map((function(t){return r.default.createElement(E,{key:t.id,dropdownSettingsInactiveFill:s,dropdownSettingsInactiveBorder:g,dropdownSettingsHoverClickedFill:f,dropdownSettingsHoverClickedBorder:v,dropdownSettingsTextColorRegular:b,dropdownSettingsTextColorHover:x,dropdownSettingsTextColorClicked:S,dropdownSettingsTextFontFamily:h,dropdownSettingsTextFontSize:m,dropdownSettingsTextBold:C,dropdownSettingsTextUnderline:w,dropdownSettingsTextItalic:k,dropdownSettingsHorizontalPadding:z,dropdownSettingsVerticalPadding:I,onClick:function(){t.link&&!e?(B(t.link),A(!1)):A(!1)},"data-link":t.link},t.title)}))))})),y=i.default.div(x||(x=d(["\n  position: relative;\n"]))),H=i.default.div(S||(S=d(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  height: 100%;\n\n  &:hover {\n    color: ",";\n  }\n  &:active {\n    color: ",";\n  }\n"])),(function(t){return t.navBarTextHoverColor}),(function(t){return t.navBarTextClickedColor})),F=i.default.div(h||(h=d(["\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 100%;\n  left: 0;\n"]))),R=i.default.div(m||(m=d([""]))),E=i.default.div(C||(C=d(["\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n  cursor: pointer;\n  background: ",";\n  border: 2px solid ",";\n  color: ",";\n  font-size: ","px;\n  font-family: ",";\n  font-weight: ",";\n  font-style: ",";\n  text-decoration: ",";\n  padding: ",";\n\n  &:hover {\n    background: ",";\n    border: 2px solid ",";\n    color: ",";\n  }\n  &:active {\n    background: ",";\n    border: 2px solid ",";\n    color: ",";\n  }\n"])),(function(t){return t.dropdownSettingsInactiveFill}),(function(t){return t.dropdownSettingsInactiveBorder}),(function(t){return t.dropdownSettingsTextColorRegular}),(function(t){return t.dropdownSettingsTextFontSize}),(function(t){return t.dropdownSettingsTextFontFamily}),(function(t){return t.dropdownSettingsTextBold?"bold":"normal"}),(function(t){return t.dropdownSettingsTextItalic?"italic":"normal"}),(function(t){return t.dropdownSettingsTextUnderline?"underline":"none"}),(function(t){var n=t.dropdownSettingsVerticalPadding,e=t.dropdownSettingsHorizontalPadding;return"".concat(n,"px ").concat(e,"px")}),(function(t){return t.dropdownSettingsHoverClickedFill}),(function(t){return t.dropdownSettingsHoverClickedBorder}),(function(t){return t.dropdownSettingsTextColorHover}),(function(t){return t.dropdownSettingsHoverClickedFill}),(function(t){return t.dropdownSettingsHoverClickedBorder}),(function(t){return t.dropdownSettingsTextColorClicked}));k.propTypes={link:l.default.string,disabledRedirect:l.default.bool,disabledListClick:l.default.bool,title:l.default.string,navBarTextHoverColor:l.default.string,navBarTextClickedColor:l.default.string,children:l.default.array,dropdownSettingsInactiveFill:l.default.string,dropdownSettingsInactiveBorder:l.default.string,dropdownSettingsHoverClickedFill:l.default.string,dropdownSettingsHoverClickedBorder:l.default.string,dropdownSettingsTextColorRegular:l.default.string,dropdownSettingsTextColorHover:l.default.string,dropdownSettingsTextColorClicked:l.default.string,dropdownSettingsTextFontFamily:l.default.string,dropdownSettingsTextFontSize:l.default.number,dropdownSettingsTextBold:l.default.bool,dropdownSettingsTextUnderline:l.default.bool,dropdownSettingsTextItalic:l.default.bool,dropdownSettingsHorizontalPadding:l.default.number,dropdownSettingsVerticalPadding:l.default.number};var z,I,P,O=t.memo((function(n){var e=n.link,o=n.disabledRedirect,i=n.title,l=n.buttonSettingsRoundCorners,a=n.buttonSettingsBorderWidth,d=n.buttonSettingsRegularBorder,u=n.buttonSettingsRegularFill,c=n.buttonSettingsHorizontalPadding,s=n.buttonSettingsVerticalPadding,g=n.buttonSettingsHoverClickedBorder,f=n.buttonSettingsHoverClickedFill,p=n.buttonSettingsTextColorRegular,v=n.buttonSettingsTextColorHover,b=n.buttonSettingsTextColorClicked,x=t.useCallback((function(){e&&!o&&B(e)}),[e,o]);return r.default.createElement(j,{buttonSettingsRoundCorners:l,buttonSettingsBorderWidth:a,buttonSettingsRegularBorder:d,buttonSettingsRegularFill:u,buttonSettingsHorizontalPadding:c,buttonSettingsVerticalPadding:s,buttonSettingsHoverClickedBorder:g,buttonSettingsHoverClickedFill:f,buttonSettingsTextColorRegular:p,buttonSettingsTextColorHover:v,buttonSettingsTextColorClicked:b,onClick:x,"data-link":e},i)})),j=i.default.div(w||(w=d(["\n  margin: 10px 0;\n  line-height: normal;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  border-radius: ","px;\n  border: ","px solid\n    ",";\n  background: ",";\n  padding: ",";\n  color: ",";\n\n  &:hover {\n    border: ","px solid\n      ",";\n    background: ",";\n    color: ",";\n  }\n\n  &:active {\n    border: ","px solid\n      ",";\n    background: ",";\n    color: ",";\n  }\n"])),(function(t){return t.buttonSettingsRoundCorners}),(function(t){return t.buttonSettingsBorderWidth}),(function(t){return t.buttonSettingsRegularBorder}),(function(t){return t.buttonSettingsRegularFill}),(function(t){var n=t.buttonSettingsVerticalPadding,e=t.buttonSettingsHorizontalPadding;return"".concat(n,"px ").concat(e,"px")}),(function(t){return t.buttonSettingsTextColorRegular}),(function(t){return t.buttonSettingsBorderWidth}),(function(t){return t.buttonSettingsHoverClickedBorder}),(function(t){return t.buttonSettingsHoverClickedFill}),(function(t){return t.buttonSettingsTextColorHover}),(function(t){return t.buttonSettingsBorderWidth}),(function(t){return t.buttonSettingsHoverClickedBorder}),(function(t){return t.buttonSettingsHoverClickedFill}),(function(t){return t.buttonSettingsTextColorClicked}));O.propTypes={disabledRedirect:l.default.bool,title:l.default.string,link:l.default.string,buttonSettingsRoundCorners:l.default.number,buttonSettingsBorderWidth:l.default.number,buttonSettingsRegularBorder:l.default.string,buttonSettingsRegularFill:l.default.string,buttonSettingsVerticalPadding:l.default.number,buttonSettingsHorizontalPadding:l.default.number,buttonSettingsHoverClickedBorder:l.default.string,buttonSettingsHoverClickedFill:l.default.string,buttonSettingsTextColorRegular:l.default.string,buttonSettingsTextColorHover:l.default.string,buttonSettingsTextColorClicked:l.default.string};var A,L,V,M,U,W=t.forwardRef((function(t,n){var e=t.height,o=t.id,i=t.crop,l=t.source,d=t.alt,u=t.ignoreMaxHeight,c=t.isTurntable,s=t.isHero,g={width:"100%",height:"100%",objectFit:"cover"};return u||(g.maxHeight="600px"),r.default.createElement(N,{ref:n,isTurntable:c,isHero:s,height:e,id:o},r.default.createElement(q,a({},i.imagePosition,{isHero:s}),r.default.createElement("img",{src:l,alt:d,style:g})))})),q=i.default.div(z||(z=d(["\n  position: relative;\n  left: ","%;\n  top: ","%;\n  width: ","%;\n  height: ","%;\n\n  ",";\n"])),(function(t){return t.x||0}),(function(t){return t.y||0}),(function(t){return t.width||100}),(function(t){return t.height||100}),(function(t){return t.isHero&&n.css(I||(I=d(["\n      position: static;\n      img {\n        object-fit: cover;\n        //margin-left: auto;\n        //margin-right: auto;\n        //width: auto !important;\n      }\n    "])))})),N=i.default.div(P||(P=d(["\n  width: 100%;\n  height: ",";\n  position: relative;\n  background-color: transparent;\n  overflow: hidden;\n"])),(function(t){var n=t.height,e=t.isTurntable,o=t.isHero;return e||o?"100%":n?n+"px":"100%"}));W.propTypes={height:l.default.number,id:l.default.string,crop:l.default.object,source:l.default.string.isRequired,alt:l.default.string,ignoreMaxHeight:l.default.bool,isTurntable:l.default.bool,isHero:l.default.bool},W.defaultProps={id:"",alt:"",ignoreMaxHeight:!1,crop:{}};var Z=function(n){var e=n.config,o=n.disabledRedirect,i=void 0!==o&&o,l=n.disabledListClick,d=void 0!==l&&l,u=n.stickyOffset,c=void 0===u?0:u,s=n.isStatic,g=void 0!==s&&s,p=e.height,v=e.navBarRegularColor,b=e.logoAlignment,x=e.logoCropperOptions,S=e.logoSrc,h=e.navBarTextAlignment,m=e.navBarTextFontSize,C=e.navBarTextFontFamily,w=e.navBarTextBold,T=e.navBarTextItalic,B=e.navBarTextUnderline,y=e.navBarTextRegularColor,H=e.structure,F=e.navBarTextHoverColor,R=e.navBarTextClickedColor,E=e.navBarTextSpacing,z=e.buttonSettingsRoundCorners,I=e.buttonSettingsBorderWidth,P=e.buttonSettingsRegularBorder,j=e.buttonSettingsRegularFill,A=e.buttonSettingsHorizontalPadding,L=e.buttonSettingsVerticalPadding,V=e.buttonSettingsHoverClickedFill,M=e.buttonSettingsHoverClickedBorder,U=e.buttonSettingsTextColorRegular,q=e.buttonSettingsTextColorHover,N=e.buttonSettingsTextColorClicked,Z=e.navBarBehavior,_=e.dropdownSettingsInactiveFill,$=e.dropdownSettingsInactiveBorder,D=e.dropdownSettingsHoverClickedFill,G=e.dropdownSettingsHoverClickedBorder,J=e.dropdownSettingsTextColorRegular,tt=e.dropdownSettingsTextColorHover,nt=e.dropdownSettingsTextColorClicked,et=e.dropdownSettingsTextFontFamily,ot=e.dropdownSettingsTextFontSize,rt=e.dropdownSettingsTextBold,it=e.dropdownSettingsTextUnderline,lt=e.dropdownSettingsTextItalic,at=e.dropdownSettingsHorizontalPadding,dt=e.dropdownSettingsVerticalPadding,ut=r.default.createElement(Q,null,r.default.createElement(W,{source:S+f(x),crop:x}));return r.default.createElement(K,{height:p,navBarRegularColor:v,navBarBehavior:Z,stickyOffset:c,className:"navbar-desktop"},r.default.createElement(X,{height:p},"left"===b&&ut,r.default.createElement(Y,{navBarTextAlignment:h,navBarTextFontSize:m,navBarTextFontFamily:C,navBarTextBold:w,navBarTextItalic:T,navBarTextUnderline:B,navBarTextRegularColor:y,navBarTextSpacing:E,logoAlignment:b},(H||[]).map((function(n){var e=null;return"button"===n.type?e=r.default.createElement(O,a({},n,{disabledRedirect:i,buttonSettingsRoundCorners:z,buttonSettingsBorderWidth:I,buttonSettingsRegularBorder:P,buttonSettingsRegularFill:j,buttonSettingsVerticalPadding:L,buttonSettingsHorizontalPadding:A,buttonSettingsHoverClickedBorder:M,buttonSettingsHoverClickedFill:V,buttonSettingsTextColorRegular:U,buttonSettingsTextColorHover:q,buttonSettingsTextColorClicked:N})):"page"===n.type&&(e=r.default.createElement(k,a({},n,{disabledRedirect:i,disabledListClick:d,navBarTextHoverColor:F,navBarTextClickedColor:R,dropdownSettingsInactiveFill:_,dropdownSettingsInactiveBorder:$,dropdownSettingsHoverClickedFill:D,dropdownSettingsHoverClickedBorder:G,dropdownSettingsTextColorRegular:J,dropdownSettingsTextColorHover:tt,dropdownSettingsTextColorClicked:nt,dropdownSettingsTextFontFamily:et,dropdownSettingsTextFontSize:ot,dropdownSettingsTextBold:rt,dropdownSettingsTextUnderline:it,dropdownSettingsTextItalic:lt,dropdownSettingsHorizontalPadding:at,dropdownSettingsVerticalPadding:dt,isStatic:g}))),r.default.createElement(t.Fragment,{key:n.id},e)}))),"right"===b&&ut))};Z.propTypes={config:l.default.object,disabledRedirect:l.default.bool,disabledListClick:l.default.bool,stickyOffset:l.default.number,isStatic:l.default.bool};var _,$,D,G,J,K=i.default.div(A||(A=d(["\n  display: flex;\n  height: ","px;\n  background-color: ",";\n  padding: 0 50px;\n  width: 100%;\n  margin: auto;\n  align-items: center;\n  flex-shrink: 0;\n  z-index: 1001;\n\n  ",";\n"])),(function(t){return t.height}),(function(t){return t.navBarRegularColor}),(function(t){var e=t.navBarBehavior,o=t.stickyOffset;return"frozen"===e&&n.css(L||(L=d(["\n      position: sticky;\n      top: ","px;\n    "])),o)})),Q=i.default.div(V||(V=d(["\n  width: ","px;\n  height: ","px;\n"])),100,50),X=i.default.div(M||(M=d(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  max-width: 1120px;\n  margin: auto;\n  height: ","px;\n"])),(function(t){return t.height})),Y=i.default.div(U||(U=d(["\n  display: flex;\n  flex: 1 1 auto;\n  margin: ",";\n  justify-content: ",";\n  font-size: ","px;\n  font-family: ",";\n  font-weight: ",";\n  font-style: ",";\n  text-decoration: ",";\n  color: ",";\n  height: 100%;\n  > div {\n    margin-right: ","px;\n    &:last-child {\n      margin-right: 0;\n    }\n  }\n"])),(function(t){return"right"===t.logoAlignment?"0 24px 0 0":"0 0 0 24px"}),(function(t){return t.navBarTextAlignment}),(function(t){return t.navBarTextFontSize}),(function(t){return t.navBarTextFontFamily}),(function(t){return t.navBarTextBold?"bold":"normal"}),(function(t){return t.navBarTextItalic?"italic":"normal"}),(function(t){return t.navBarTextUnderline?"underline":"none"}),(function(t){return t.navBarTextRegularColor}),(function(t){return t.navBarTextSpacing})),tt=function(){return r.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"27.03",height:"16",viewBox:"0 0 27.03 16"},r.default.createElement("path",{d:"M1.5,6.5a1,1,0,1,0,0,2h25a1,1,0,1,0,0-2H1.5Z",transform:"translate(-0.49 -6.5)"}),r.default.createElement("path",{d:"M1.5,13.5a1,1,0,1,0,0,2h25a1,1,0,1,0,0-2H1.5Z",transform:"translate(-0.49 -6.5)"}),r.default.createElement("path",{d:"M1.5,20.5a1,1,0,1,0,0,2h25a1,1,0,1,0,0-2H1.5Z",transform:"translate(-0.49 -6.5)"}))},nt=function(t){var n=t.config,e=t.stickyOffset,o=void 0===e?0:e,i=n.mobileHeight,l=n.navBarRegularColor,a=n.mobileLogoAlignment,d=n.logoSrc,u=n.logoCropperOptions,c=n.navBarBehavior;return r.default.createElement(et,{height:i,navBarRegularColor:l,navBarBehavior:c,stickyOffset:o,className:"navbar-mobile"},r.default.createElement(it,null,r.default.createElement(p,{icon:tt,color:"#ffffff"})),r.default.createElement(ot,{mobileLogoAlignment:a},r.default.createElement(rt,null,r.default.createElement(W,{source:d+f(u),crop:u}))))},et=i.default.div(_||(_=d(["\n  z-index: 1001;\n  display: flex;\n  width: 100%;\n  padding: 15px 13px 16px 15px;\n  border-radius: 3px;\n  border: solid 1px rgba(164, 198, 225, 0.39);\n  height: ","px;\n  background-color: ",";\n  align-items: center;\n  position: relative;\n  ",";\n"])),(function(t){return t.height}),(function(t){return t.navBarRegularColor}),(function(t){var e=t.navBarBehavior,o=t.stickyOffset;return"frozen"===e&&n.css($||($=d(["\n            position: sticky;\n            top: ","px;\n          "])),o)})),ot=i.default.div(D||(D=d(["\n  display: flex;\n  flex: 1 1 auto;\n  justify-content: ",";\n"])),(function(t){var n=t.mobileLogoAlignment;return"center"===n?"center":"right"===n?"flex-end":""})),rt=i.default.div(G||(G=d(["\n  width: ","px;\n  height: ","px;\n"])),100,50),it=i.default.div(J||(J=d(["\n  display: flex;\n  position: absolute;\n"])));nt.propTypes={config:l.default.object,stickyOffset:l.default.number},exports.NavBar=Z,exports.NavBarMobile=nt,exports.logoImageHeight=50,exports.logoImageWidth=100;
//# sourceMappingURL=index.cjs.js.map

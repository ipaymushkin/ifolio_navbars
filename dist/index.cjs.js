"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("react"),e=require("styled-components"),n=require("prop-types");function o(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var r=o(t),i=o(e),l=o(n);function a(){return a=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},a.apply(this,arguments)}function d(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function u(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var o,r,i=[],l=!0,a=!1;try{for(n=n.call(t);!(l=(o=n.next()).done)&&(i.push(o.value),!e||i.length!==e);l=!0);}catch(t){a=!0,r=t}finally{try{l||null==n.return||n.return()}finally{if(a)throw r}}return i}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}var s,g=function(t){return Math.floor(t)},f=function(t){if(!t||0===Object.keys(t).length)return"";var e=t.imageBox,n=t.rotate,o=e.x,r=e.y,i=e.height,l=e.width;return"?x=".concat(g(o),"&y=").concat(g(r),"&w=").concat(g(l),"&h=").concat(g(i),"&rotate=").concat(n)},p=function(t){var e=t.icon,n=t.opacity,o=void 0===n?1:n,i=t.hoverOpacity,l=void 0===i?1:i,a=t.color,d=void 0===a?"#000":a,u=t.hoverColor,c=void 0===u?d:u,s=t.size,g=void 0===s?20:s,f=t.rotate,p=t.noCursor,x=t.padding,S=void 0===x?0:x,h=t.width,m=t.height,w=t.tableIcon;return r.default.createElement(b,{color:d,hoverColor:c,size:g,width:h,height:m,opacity:o,hoverOpacity:l,rotate:f,noCursor:p,padding:S,tableIcon:w},v(e))},v=function(t){var e=t;return"function"==typeof t?r.default.createElement(e,null):"string"==typeof t?t:null},b=i.default.div(s||(s=d(["\n  cursor: ",";\n  display: ",";\n  flex: 0 0 auto;\n  align-items: center;\n  font-size: ",";\n  width: ","px;\n  height: ","px;\n  transform: rotate(","deg);\n  transform-origin: 50% 50%;\n  padding: ","px;\n\n  :hover {\n    svg {\n      fill: ",";\n      opacity: ",";\n    }\n  }\n\n  svg {\n    fill: ",";\n    opacity: ",";\n    width: 100%;\n    height: 100%;\n    transition: all ease-in-out 0.3s;\n    vertical-align: ",";\n  }\n"])),(function(t){return t.noCursor?"initial":"pointer"}),(function(t){return t.tableIcon?"table-cell":"flex"}),(function(t){return!t.tableIcon&&"0"}),(function(t){var e=t.size,n=t.width;return n||e}),(function(t){var e=t.size,n=t.height;return n||e}),(function(t){return t.rotate}),(function(t){return t.padding}),(function(t){return t.hoverColor}),(function(t){return t.hoverOpacity}),(function(t){return t.color}),(function(t){return t.opacity}),(function(t){return t.tableIcon&&"middle"}));p.propTypes={color:l.default.string,hoverColor:l.default.string,icon:l.default.oneOfType([l.default.string,l.default.func]),size:l.default.number,padding:l.default.number,opacity:l.default.number,hoverOpacity:l.default.number,rotate:l.default.number,noCursor:l.default.bool,width:l.default.number,height:l.default.number,tableIcon:l.default.bool},p.defaultProps={opacity:1,color:"#000",size:20,padding:0,rotate:0,noCursor:!1,tableIcon:!1};var x,S,h,m,w,C,T=function(){return r.default.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24"},r.default.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),r.default.createElement("path",{d:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"}))},B=function(t){return window.open(t,"_blank","noreferrer noopener")},y=t.memo((function(e){var n=e.disabledRedirect,o=e.disabledListClick,i=e.link,l=e.title,a=e.navBarTextHoverColor,d=e.navBarTextClickedColor,c=e.children,s=e.dropdownSettingsInactiveFill,g=e.dropdownSettingsInactiveBorder,f=e.dropdownSettingsHoverClickedFill,v=e.dropdownSettingsHoverClickedBorder,b=e.dropdownSettingsTextColorRegular,x=e.dropdownSettingsTextColorHover,S=e.dropdownSettingsTextColorClicked,h=e.dropdownSettingsTextFontFamily,m=e.dropdownSettingsTextFontSize,w=e.dropdownSettingsTextBold,C=e.dropdownSettingsTextUnderline,y=e.dropdownSettingsTextItalic,z=e.dropdownSettingsHorizontalPadding,I=e.dropdownSettingsVerticalPadding,P=e.isStatic,O=u(t.useState(P),2),j=O[0],A=O[1],L=function(e){var n=t.createRef(),o=function(t){!n.current||null!=n&&n.current.contains(t.target)||e(t,n.current)};return t.useEffect((function(){return document.addEventListener("mousedown",o),document.addEventListener("touchstart",o),function(){document.removeEventListener("mousedown",o),document.removeEventListener("touchstart",o)}})),n}((function(){A(!1)})),M=c.length>0,V=t.useCallback((function(){M&&!o?A((function(t){return!t})):M||n||!i||B(i)}),[o,n,M,i]);return r.default.createElement(k,{ref:L},r.default.createElement(H,{navBarTextHoverColor:a,navBarTextClickedColor:d,onClick:V,"data-link":M?void 0:i,"data-isdropdown":M},l," ",M&&r.default.createElement(R,{"data-arrow":!0},j?r.default.createElement(p,{icon:T,rotate:P?90:-90,color:"#ffffff"}):r.default.createElement(p,{icon:T,rotate:90,color:"#ffffff"}))),j&&M&&r.default.createElement(F,{"data-list":!0,className:"navbar-list"},c.map((function(t){return r.default.createElement(E,{key:t.id,dropdownSettingsInactiveFill:s,dropdownSettingsInactiveBorder:g,dropdownSettingsHoverClickedFill:f,dropdownSettingsHoverClickedBorder:v,dropdownSettingsTextColorRegular:b,dropdownSettingsTextColorHover:x,dropdownSettingsTextColorClicked:S,dropdownSettingsTextFontFamily:h,dropdownSettingsTextFontSize:m,dropdownSettingsTextBold:w,dropdownSettingsTextUnderline:C,dropdownSettingsTextItalic:y,dropdownSettingsHorizontalPadding:z,dropdownSettingsVerticalPadding:I,onClick:function(){t.link&&!n?(B(t.link),A(!1)):A(!1)},"data-link":t.link},t.title)}))))})),k=i.default.div(x||(x=d(["\n  position: relative;\n"]))),H=i.default.div(S||(S=d(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  height: 100%;\n\n  &:hover {\n    color: ",";\n  }\n  &:active {\n    color: ",";\n  }\n"])),(function(t){return t.navBarTextHoverColor}),(function(t){return t.navBarTextClickedColor})),F=i.default.div(h||(h=d(["\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1;\n"]))),R=i.default.div(m||(m=d([""]))),E=i.default.div(w||(w=d(["\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n  cursor: pointer;\n  background: ",";\n  border: 2px solid ",";\n  color: ",";\n  font-size: ","px;\n  font-family: ",";\n  font-weight: ",";\n  font-style: ",";\n  text-decoration: ",";\n  padding: ",";\n\n  &:hover {\n    background: ",";\n    border: 2px solid ",";\n    color: ",";\n  }\n  &:active {\n    background: ",";\n    border: 2px solid ",";\n    color: ",";\n  }\n"])),(function(t){return t.dropdownSettingsInactiveFill}),(function(t){return t.dropdownSettingsInactiveBorder}),(function(t){return t.dropdownSettingsTextColorRegular}),(function(t){return t.dropdownSettingsTextFontSize}),(function(t){return t.dropdownSettingsTextFontFamily}),(function(t){return t.dropdownSettingsTextBold?"bold":"normal"}),(function(t){return t.dropdownSettingsTextItalic?"italic":"normal"}),(function(t){return t.dropdownSettingsTextUnderline?"underline":"none"}),(function(t){var e=t.dropdownSettingsVerticalPadding,n=t.dropdownSettingsHorizontalPadding;return"".concat(e,"px ").concat(n,"px")}),(function(t){return t.dropdownSettingsHoverClickedFill}),(function(t){return t.dropdownSettingsHoverClickedBorder}),(function(t){return t.dropdownSettingsTextColorHover}),(function(t){return t.dropdownSettingsHoverClickedFill}),(function(t){return t.dropdownSettingsHoverClickedBorder}),(function(t){return t.dropdownSettingsTextColorClicked}));y.propTypes={link:l.default.string,disabledRedirect:l.default.bool,disabledListClick:l.default.bool,title:l.default.string,navBarTextHoverColor:l.default.string,navBarTextClickedColor:l.default.string,children:l.default.array,dropdownSettingsInactiveFill:l.default.string,dropdownSettingsInactiveBorder:l.default.string,dropdownSettingsHoverClickedFill:l.default.string,dropdownSettingsHoverClickedBorder:l.default.string,dropdownSettingsTextColorRegular:l.default.string,dropdownSettingsTextColorHover:l.default.string,dropdownSettingsTextColorClicked:l.default.string,dropdownSettingsTextFontFamily:l.default.string,dropdownSettingsTextFontSize:l.default.number,dropdownSettingsTextBold:l.default.bool,dropdownSettingsTextUnderline:l.default.bool,dropdownSettingsTextItalic:l.default.bool,dropdownSettingsHorizontalPadding:l.default.number,dropdownSettingsVerticalPadding:l.default.number};var z,I,P,O=t.memo((function(e){var n=e.link,o=e.disabledRedirect,i=e.title,l=e.buttonSettingsRoundCorners,a=e.buttonSettingsBorderWidth,d=e.buttonSettingsRegularBorder,u=e.buttonSettingsRegularFill,c=e.buttonSettingsHorizontalPadding,s=e.buttonSettingsVerticalPadding,g=e.buttonSettingsHoverClickedBorder,f=e.buttonSettingsHoverClickedFill,p=e.buttonSettingsTextColorRegular,v=e.buttonSettingsTextColorHover,b=e.buttonSettingsTextColorClicked,x=t.useCallback((function(){n&&!o&&B(n)}),[n,o]);return r.default.createElement(j,{buttonSettingsRoundCorners:l,buttonSettingsBorderWidth:a,buttonSettingsRegularBorder:d,buttonSettingsRegularFill:u,buttonSettingsHorizontalPadding:c,buttonSettingsVerticalPadding:s,buttonSettingsHoverClickedBorder:g,buttonSettingsHoverClickedFill:f,buttonSettingsTextColorRegular:p,buttonSettingsTextColorHover:v,buttonSettingsTextColorClicked:b,onClick:x,"data-link":n},i)})),j=i.default.div(C||(C=d(["\n  margin: 10px 0;\n  line-height: normal;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  border-radius: ","px;\n  border: ","px solid\n    ",";\n  background: ",";\n  padding: ",";\n  color: ",";\n\n  &:hover {\n    border: ","px solid\n      ",";\n    background: ",";\n    color: ",";\n  }\n\n  &:active {\n    border: ","px solid\n      ",";\n    background: ",";\n    color: ",";\n  }\n"])),(function(t){return t.buttonSettingsRoundCorners}),(function(t){return t.buttonSettingsBorderWidth}),(function(t){return t.buttonSettingsRegularBorder}),(function(t){return t.buttonSettingsRegularFill}),(function(t){var e=t.buttonSettingsVerticalPadding,n=t.buttonSettingsHorizontalPadding;return"".concat(e,"px ").concat(n,"px")}),(function(t){return t.buttonSettingsTextColorRegular}),(function(t){return t.buttonSettingsBorderWidth}),(function(t){return t.buttonSettingsHoverClickedBorder}),(function(t){return t.buttonSettingsHoverClickedFill}),(function(t){return t.buttonSettingsTextColorHover}),(function(t){return t.buttonSettingsBorderWidth}),(function(t){return t.buttonSettingsHoverClickedBorder}),(function(t){return t.buttonSettingsHoverClickedFill}),(function(t){return t.buttonSettingsTextColorClicked}));O.propTypes={disabledRedirect:l.default.bool,title:l.default.string,link:l.default.string,buttonSettingsRoundCorners:l.default.number,buttonSettingsBorderWidth:l.default.number,buttonSettingsRegularBorder:l.default.string,buttonSettingsRegularFill:l.default.string,buttonSettingsVerticalPadding:l.default.number,buttonSettingsHorizontalPadding:l.default.number,buttonSettingsHoverClickedBorder:l.default.string,buttonSettingsHoverClickedFill:l.default.string,buttonSettingsTextColorRegular:l.default.string,buttonSettingsTextColorHover:l.default.string,buttonSettingsTextColorClicked:l.default.string};var A,L,M,V,U,W,N=t.forwardRef((function(t,e){var n=t.height,o=t.id,i=t.crop,l=t.source,d=t.alt,u=t.ignoreMaxHeight,c=t.isTurntable,s=t.isHero,g={width:"100%",height:"100%",objectFit:"cover"};return u||(g.maxHeight="600px"),r.default.createElement(Z,{ref:e,isTurntable:c,isHero:s,height:n,id:o},r.default.createElement(q,a({},i.imagePosition,{isHero:s}),r.default.createElement("img",{src:l,alt:d,style:g})))})),q=i.default.div(z||(z=d(["\n  position: relative;\n  left: ","%;\n  top: ","%;\n  width: ","%;\n  height: ","%;\n\n  ",";\n"])),(function(t){return t.x||0}),(function(t){return t.y||0}),(function(t){return t.width||100}),(function(t){return t.height||100}),(function(t){return t.isHero&&e.css(I||(I=d(["\n      position: static;\n      img {\n        object-fit: cover;\n        //margin-left: auto;\n        //margin-right: auto;\n        //width: auto !important;\n      }\n    "])))})),Z=i.default.div(P||(P=d(["\n  width: 100%;\n  height: ",";\n  position: relative;\n  background-color: transparent;\n  overflow: hidden;\n"])),(function(t){var e=t.height,n=t.isTurntable,o=t.isHero;return n||o?"100%":e?e+"px":"100%"}));N.propTypes={height:l.default.number,id:l.default.string,crop:l.default.object,source:l.default.string.isRequired,alt:l.default.string,ignoreMaxHeight:l.default.bool,isTurntable:l.default.bool,isHero:l.default.bool},N.defaultProps={id:"",alt:"",ignoreMaxHeight:!1,crop:{}};var _=function(e){var n=e.config,o=e.disabledRedirect,i=void 0!==o&&o,l=e.disabledListClick,d=void 0!==l&&l,u=e.stickyOffset,c=void 0===u?0:u,s=e.isStatic,g=void 0!==s&&s,p=e.hideLogo,v=void 0!==p&&p,b=e.isPreview,x=void 0!==b&&b,S=n.height,h=n.navBarRegularColor,m=n.logoAlignment,w=n.logoCropperOptions,C=n.logoSrc,T=n.navBarTextAlignment,B=n.navBarTextFontSize,k=n.navBarTextFontFamily,H=n.navBarTextBold,F=n.navBarTextItalic,R=n.navBarTextUnderline,E=n.navBarTextRegularColor,z=n.structure,I=n.navBarTextHoverColor,P=n.navBarTextClickedColor,j=n.navBarTextSpacing,A=n.buttonSettingsRoundCorners,L=n.buttonSettingsBorderWidth,M=n.buttonSettingsRegularBorder,V=n.buttonSettingsRegularFill,U=n.buttonSettingsHorizontalPadding,W=n.buttonSettingsVerticalPadding,q=n.buttonSettingsHoverClickedFill,Z=n.buttonSettingsHoverClickedBorder,_=n.buttonSettingsTextColorRegular,$=n.buttonSettingsTextColorHover,D=n.buttonSettingsTextColorClicked,G=n.navBarBehavior,J=n.dropdownSettingsInactiveFill,K=n.dropdownSettingsInactiveBorder,Q=n.dropdownSettingsHoverClickedFill,X=n.dropdownSettingsHoverClickedBorder,rt=n.dropdownSettingsTextColorRegular,it=n.dropdownSettingsTextColorHover,lt=n.dropdownSettingsTextColorClicked,at=n.dropdownSettingsTextFontFamily,dt=n.dropdownSettingsTextFontSize,ut=n.dropdownSettingsTextBold,ct=n.dropdownSettingsTextUnderline,st=n.dropdownSettingsTextItalic,gt=n.dropdownSettingsHorizontalPadding,ft=n.dropdownSettingsVerticalPadding,pt=null;return v||(pt=r.default.createElement(et,null,r.default.createElement(N,{source:C+f(w),crop:w}))),r.default.createElement(tt,{height:S,navBarRegularColor:h,navBarBehavior:G,stickyOffset:c,className:"navbar-desktop"},r.default.createElement(nt,{height:S},"left"===m&&pt,r.default.createElement(ot,{navBarTextAlignment:T,navBarTextFontSize:B,navBarTextFontFamily:k,navBarTextBold:H,navBarTextItalic:F,navBarTextUnderline:R,navBarTextRegularColor:E,navBarTextSpacing:j,logoAlignment:m},0===(null==z?void 0:z.length)&&x?r.default.createElement(Y,null,"Navigation will preview here once created"):r.default.createElement(r.default.Fragment,null,null==z?void 0:z.map((function(e){var n=null;return"button"===e.type?n=r.default.createElement(O,a({},e,{disabledRedirect:i,buttonSettingsRoundCorners:A,buttonSettingsBorderWidth:L,buttonSettingsRegularBorder:M,buttonSettingsRegularFill:V,buttonSettingsVerticalPadding:W,buttonSettingsHorizontalPadding:U,buttonSettingsHoverClickedBorder:Z,buttonSettingsHoverClickedFill:q,buttonSettingsTextColorRegular:_,buttonSettingsTextColorHover:$,buttonSettingsTextColorClicked:D})):"page"===e.type&&(n=r.default.createElement(y,a({},e,{disabledRedirect:i,disabledListClick:d,navBarTextHoverColor:I,navBarTextClickedColor:P,dropdownSettingsInactiveFill:J,dropdownSettingsInactiveBorder:K,dropdownSettingsHoverClickedFill:Q,dropdownSettingsHoverClickedBorder:X,dropdownSettingsTextColorRegular:rt,dropdownSettingsTextColorHover:it,dropdownSettingsTextColorClicked:lt,dropdownSettingsTextFontFamily:at,dropdownSettingsTextFontSize:dt,dropdownSettingsTextBold:ut,dropdownSettingsTextUnderline:ct,dropdownSettingsTextItalic:st,dropdownSettingsHorizontalPadding:gt,dropdownSettingsVerticalPadding:ft,isStatic:g}))),r.default.createElement(t.Fragment,{key:e.id},n)})))),"right"===m&&pt))};_.propTypes={config:l.default.object,disabledRedirect:l.default.bool,disabledListClick:l.default.bool,stickyOffset:l.default.number,isStatic:l.default.bool,hideLogo:l.default.bool,isPreview:l.default.bool};var $,D,G,J,K,Q,X,Y=i.default.div(A||(A=d(["\n  font-family: Montserrat-bold, sans-serif;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  font-size: 15px;\n  letter-spacing: 1.5px;\n  text-transform: uppercase;\n"]))),tt=i.default.div(L||(L=d(["\n  display: flex;\n  height: ","px;\n  background-color: ",";\n  padding: 0 50px;\n  width: 100%;\n  margin: auto;\n  align-items: center;\n  flex-shrink: 0;\n  z-index: 1001;\n\n  ",";\n"])),(function(t){return t.height}),(function(t){return t.navBarRegularColor}),(function(t){var n=t.navBarBehavior,o=t.stickyOffset;return"frozen"===n&&e.css(M||(M=d(["\n            position: sticky;\n            top: ","px;\n          "])),o)})),et=i.default.div(V||(V=d(["\n  width: ","px;\n  height: ","px;\n"])),100,50),nt=i.default.div(U||(U=d(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  max-width: 1120px;\n  margin: auto;\n  height: ","px;\n"])),(function(t){return t.height})),ot=i.default.div(W||(W=d(["\n  display: flex;\n  flex: 1 1 auto;\n  margin: ",";\n  justify-content: ",";\n  font-size: ","px;\n  font-family: ",";\n  font-weight: ",";\n  font-style: ",";\n  text-decoration: ",";\n  color: ",";\n  height: 100%;\n\n  > div {\n    margin-right: ","px;\n\n    &:last-child {\n      margin-right: 0;\n    }\n  }\n"])),(function(t){return"right"===t.logoAlignment?"0 24px 0 0":"0 0 0 24px"}),(function(t){return t.navBarTextAlignment}),(function(t){return t.navBarTextFontSize}),(function(t){return t.navBarTextFontFamily}),(function(t){return t.navBarTextBold?"bold":"normal"}),(function(t){return t.navBarTextItalic?"italic":"normal"}),(function(t){return t.navBarTextUnderline?"underline":"none"}),(function(t){return t.navBarTextRegularColor}),(function(t){return t.navBarTextSpacing})),rt=function(){return r.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"19.94",height:"16.44",viewBox:"0 0 19.94 16.44"},r.default.createElement("path",{d:"M20.41,6.91H3.47a1.5,1.5,0,0,1,0-3H20.41A1.5,1.5,0,0,1,20.41,6.91Z",transform:"translate(-1.97 -3.91)"}),r.default.createElement("path",{d:"M20.41,13.91H3.47a1.5,1.5,0,0,1,0-3H20.41A1.5,1.5,0,0,1,20.41,13.91Z",transform:"translate(-1.97 -3.91)"}),r.default.createElement("path",{d:"M20.41,20.34H3.47a1.5,1.5,0,0,1,0-3H20.41A1.5,1.5,0,0,1,20.41,20.34Z",transform:"translate(-1.97 -3.91)"}))},it=function(t){var e=t.config,n=t.stickyOffset,o=void 0===n?0:n,i=t.isConstructor,l=void 0!==i&&i,a=e.mobileHeight,d=e.navBarRegularColor,u=e.mobileLogoAlignment,c=e.logoSrc,s=e.logoCropperOptions,g=e.navBarBehavior;return r.default.createElement(lt,{className:"navbar-mobile",navBarBehavior:g,stickyOffset:o,isConstructor:l},r.default.createElement(dt,{height:a,navBarRegularColor:d},r.default.createElement(st,null,r.default.createElement(p,{icon:rt,color:"#ffffff"})),r.default.createElement(ut,{mobileLogoAlignment:u},r.default.createElement(ct,null,r.default.createElement(N,{source:c+f(s),crop:s})))),r.default.createElement(at,{offsetTop:o+a},"wrapper"))},lt=i.default.div($||($=d(["\n  z-index: 1001;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  ",";\n"])),(function(t){var n=t.navBarBehavior,o=t.stickyOffset,r=t.isConstructor;return"frozen"===n&&!r&&e.css(D||(D=d(["\n            position: sticky;\n            top: ","px;\n          "])),o)})),at=i.default.div(G||(G=d(["\n    display: flex;\n    flex-direction: column;\n    position: absolute;\n    top: ","px;\n"])),(function(t){return t.offsetTop})),dt=i.default.div(J||(J=d(["\n  display: flex;\n  width: 100%;\n  padding: 15px 13px 16px 15px;\n  border: solid 1px rgba(164, 198, 225, 0.39);\n  height: ","px;\n  background-color: ",";\n  align-items: center;\n"])),(function(t){return t.height}),(function(t){return t.navBarRegularColor})),ut=i.default.div(K||(K=d(["\n  display: flex;\n  flex: 1 1 auto;\n  justify-content: ",";\n"])),(function(t){var e=t.mobileLogoAlignment;return"center"===e?"center":"right"===e?"flex-end":""})),ct=i.default.div(Q||(Q=d(["\n  width: ","px;\n  height: ","px;\n"])),100,50),st=i.default.div(X||(X=d(["\n  display: flex;\n  position: absolute;\n"])));it.propTypes={config:l.default.object,stickyOffset:l.default.number},exports.NavBar=_,exports.NavBarMobile=it,exports.logoImageHeight=50,exports.logoImageWidth=100;
//# sourceMappingURL=index.cjs.js.map

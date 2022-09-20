"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("react"),e=require("styled-components"),n=require("prop-types"),o=require("react-dom");function r(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var i=r(t),l=r(e),a=r(n),d=r(o);function u(){return u=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},u.apply(this,arguments)}function c(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function s(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var o,r,i=[],l=!0,a=!1;try{for(n=n.call(t);!(l=(o=n.next()).done)&&(i.push(o.value),!e||i.length!==e);l=!0);}catch(t){a=!0,r=t}finally{try{l||null==n.return||n.return()}finally{if(a)throw r}}return i}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return g(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return g(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}var f,v=function(t){return Math.floor(t)},p=function(t){if(!t||0===Object.keys(t).length)return"";var e=t.imageBox,n=t.rotate,o=e.x,r=e.y,i=e.height,l=e.width;return"?x=".concat(v(o),"&y=").concat(v(r),"&w=").concat(v(l),"&h=").concat(v(i),"&rotate=").concat(n)},b=function(t){var e=t.icon,n=t.opacity,o=void 0===n?1:n,r=t.hoverOpacity,l=void 0===r?1:r,a=t.color,d=void 0===a?"#000":a,u=t.hoverColor,c=void 0===u?d:u,s=t.size,g=void 0===s?20:s,f=t.rotate,v=t.noCursor,p=t.padding,b=void 0===p?0:p,C=t.width,m=t.height,h=t.tableIcon;return i.default.createElement(x,{color:d,hoverColor:c,size:g,width:C,height:m,opacity:o,hoverOpacity:l,rotate:f,noCursor:v,padding:b,tableIcon:h},S(e))},S=function(t){var e=t;return"function"==typeof t?i.default.createElement(e,null):"string"==typeof t?t:null},x=l.default.div(f||(f=c(["\n  cursor: ",";\n  display: ",";\n  flex: 0 0 auto;\n  align-items: center;\n  font-size: ",";\n  width: ","px;\n  height: ","px;\n  transform: rotate(","deg);\n  transform-origin: 50% 50%;\n  padding: ","px;\n\n  :hover {\n    svg {\n      fill: ",";\n      opacity: ",";\n    }\n  }\n\n  svg {\n    fill: ",";\n    opacity: ",";\n    width: 100%;\n    height: 100%;\n    transition: all ease-in-out 0.3s;\n    vertical-align: ",";\n  }\n"])),(function(t){return t.noCursor?"initial":"pointer"}),(function(t){return t.tableIcon?"table-cell":"flex"}),(function(t){return!t.tableIcon&&"0"}),(function(t){var e=t.size,n=t.width;return n||e}),(function(t){var e=t.size,n=t.height;return n||e}),(function(t){return t.rotate}),(function(t){return t.padding}),(function(t){return t.hoverColor}),(function(t){return t.hoverOpacity}),(function(t){return t.color}),(function(t){return t.opacity}),(function(t){return t.tableIcon&&"middle"}));b.propTypes={color:a.default.string,hoverColor:a.default.string,icon:a.default.oneOfType([a.default.string,a.default.func]),size:a.default.number,padding:a.default.number,opacity:a.default.number,hoverOpacity:a.default.number,rotate:a.default.number,noCursor:a.default.bool,width:a.default.number,height:a.default.number,tableIcon:a.default.bool},b.defaultProps={opacity:1,color:"#000",size:20,padding:0,rotate:0,noCursor:!1,tableIcon:!1};var C,m,h,T,B,w,k=function(){return i.default.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24"},i.default.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),i.default.createElement("path",{d:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"}))},y=function(t){return window.open(t,"_blank","noreferrer noopener")},H=l.default.div(C||(C=c([""]))),R=l.default.div(m||(m=c(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  height: 100%;\n\n  &:hover {\n    color: ",";\n  }\n\n  &:active {\n    color: ",";\n  }\n"])),(function(t){return t.navBarTextHoverColor}),(function(t){return t.navBarTextClickedColor})),F=t.memo((function(t){var e=t.disabledRedirect,n=t.childs,o=t.dropdownSettingsInactiveFill,r=t.dropdownSettingsInactiveBorder,l=t.dropdownSettingsHoverClickedFill,a=t.dropdownSettingsHoverClickedBorder,u=t.dropdownSettingsTextColorRegular,c=t.dropdownSettingsTextColorHover,s=t.dropdownSettingsTextColorClicked,g=t.dropdownSettingsTextFontFamily,f=t.dropdownSettingsTextFontSize,v=t.dropdownSettingsTextBold,p=t.dropdownSettingsTextUnderline,b=t.dropdownSettingsTextItalic,S=t.dropdownSettingsHorizontalPadding,x=t.dropdownSettingsVerticalPadding,C=t.setOpen,m=t.rootId,h=t.parentRef,T=0,B=0;if(h){T=h.getBoundingClientRect().left;var w=document.querySelector("[data-navbarcontainer]"),k=document.querySelector(".navbar-desktop");if(w){var H=w.getBoundingClientRect().left;T<H&&(T=H)}var R=k.getBoundingClientRect();B=R.top+R.height}var F=i.default.createElement(I,{"data-list":!0,className:"navbar-list",left:T,top:B},n.map((function(t){var n;return i.default.createElement(P,{key:t.id,dropdownSettingsInactiveFill:o,dropdownSettingsInactiveBorder:r,dropdownSettingsHoverClickedFill:l,dropdownSettingsHoverClickedBorder:a,dropdownSettingsTextColorRegular:u,dropdownSettingsTextColorHover:c,dropdownSettingsTextColorClicked:s,dropdownSettingsTextFontFamily:g,dropdownSettingsTextFontSize:f,dropdownSettingsTextBold:v,dropdownSettingsTextUnderline:p,dropdownSettingsTextItalic:b,dropdownSettingsHorizontalPadding:S,dropdownSettingsVerticalPadding:x,onClick:function(){var n;null!==(n=t.link)&&void 0!==n&&n.value&&!e?(y(t.link.value),C(!1)):C(!1)},"data-link":null===(n=t.link)||void 0===n?void 0:n.value},t.title)})));return d.default.createPortal(F,document.getElementById(m))})),E=t.memo((function(e){var n=e.disabledRedirect,o=e.disabledListClick,r=e.link,l=e.title,a=e.navBarTextHoverColor,d=e.navBarTextClickedColor,u=e.children,c=e.dropdownSettingsInactiveFill,g=e.dropdownSettingsInactiveBorder,f=e.dropdownSettingsHoverClickedFill,v=e.dropdownSettingsHoverClickedBorder,p=e.dropdownSettingsTextColorRegular,S=e.dropdownSettingsTextColorHover,x=e.dropdownSettingsTextColorClicked,C=e.dropdownSettingsTextFontFamily,m=e.dropdownSettingsTextFontSize,h=e.dropdownSettingsTextBold,T=e.dropdownSettingsTextUnderline,B=e.dropdownSettingsTextItalic,w=e.dropdownSettingsHorizontalPadding,E=e.dropdownSettingsVerticalPadding,I=e.isStatic,P=e.navBarHoverColor,O=e.navBarClickedColor,A=e.rootId,j=s(t.useState(I),2),V=j[0],L=j[1],W=null==r?void 0:r.value,U=function(e){var n=t.createRef(),o=function(t){!n.current||null!=n&&n.current.contains(t.target)||e(t,n.current)};return t.useEffect((function(){return document.addEventListener("mousedown",o),document.addEventListener("touchstart",o),function(){document.removeEventListener("mousedown",o),document.removeEventListener("touchstart",o)}})),n}((function(){L(!1)})),M=s(t.useState(null),2),q=M[0],N=M[1];t.useEffect((function(){N(U.current)}),[]);var D=u.length>0,Z=t.useCallback((function(){D&&!o?L((function(t){return!t})):D||n||!W||y(W)}),[o,n,D,W]);return i.default.createElement(z,{ref:U,navBarHoverColor:P,navBarClickedColor:O},i.default.createElement(R,{navBarTextHoverColor:a,navBarTextClickedColor:d,onClick:Z,"data-link":D?void 0:W,"data-isdropdown":D},l," ",D&&i.default.createElement(H,{"data-arrow":!0},V?i.default.createElement(b,{icon:k,rotate:I?-90:90,color:"#ffffff"}):i.default.createElement(b,{icon:k,rotate:-90,color:"#ffffff"}))),V&&D&&i.default.createElement(F,{dropdownSettingsInactiveFill:c,dropdownSettingsInactiveBorder:g,dropdownSettingsHoverClickedFill:f,dropdownSettingsHoverClickedBorder:v,dropdownSettingsTextColorRegular:p,dropdownSettingsTextColorHover:S,dropdownSettingsTextColorClicked:x,dropdownSettingsTextFontFamily:C,dropdownSettingsTextFontSize:m,dropdownSettingsTextBold:h,dropdownSettingsTextUnderline:T,dropdownSettingsTextItalic:B,dropdownSettingsHorizontalPadding:w,dropdownSettingsVerticalPadding:E,childs:u,setOpen:L,disabledRedirect:n,rootId:A,parentRef:q}))})),z=l.default.div(h||(h=c(["\n  position: relative;\n  height: 100%;\n\n  &:hover {\n    background: ",";\n  }\n\n  &:active {\n    background: ",";\n  }\n"])),(function(t){return t.navBarHoverColor}),(function(t){return t.navBarClickedColor})),I=l.default.div(T||(T=c(["\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  left: ","px;\n  top: ","px;\n  z-index: 2;\n"])),(function(t){return t.left}),(function(t){return t.top})),P=l.default.div(B||(B=c(["\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n  cursor: pointer;\n  background: ",";\n  border: 2px solid ",";\n  color: ",";\n  font-size: ","px;\n  font-family: ",";\n  font-weight: ",";\n  font-style: ",";\n  text-decoration: ",";\n  padding: ",";\n\n  &:hover {\n    background: ",";\n    border: 2px solid ",";\n    color: ",";\n  }\n\n  &:active {\n    background: ",";\n    border: 2px solid ",";\n    color: ",";\n  }\n"])),(function(t){return t.dropdownSettingsInactiveFill}),(function(t){return t.dropdownSettingsInactiveBorder}),(function(t){return t.dropdownSettingsTextColorRegular}),(function(t){return t.dropdownSettingsTextFontSize}),(function(t){return t.dropdownSettingsTextFontFamily}),(function(t){return t.dropdownSettingsTextBold?"bold":"normal"}),(function(t){return t.dropdownSettingsTextItalic?"italic":"normal"}),(function(t){return t.dropdownSettingsTextUnderline?"underline":"none"}),(function(t){var e=t.dropdownSettingsVerticalPadding,n=t.dropdownSettingsHorizontalPadding;return"".concat(e,"px ").concat(n,"px")}),(function(t){return t.dropdownSettingsHoverClickedFill}),(function(t){return t.dropdownSettingsHoverClickedBorder}),(function(t){return t.dropdownSettingsTextColorHover}),(function(t){return t.dropdownSettingsHoverClickedFill}),(function(t){return t.dropdownSettingsHoverClickedBorder}),(function(t){return t.dropdownSettingsTextColorClicked}));E.propTypes={link:a.default.string,disabledRedirect:a.default.bool,disabledListClick:a.default.bool,title:a.default.string,navBarTextHoverColor:a.default.string,navBarTextClickedColor:a.default.string,children:a.default.array,dropdownSettingsInactiveFill:a.default.string,dropdownSettingsInactiveBorder:a.default.string,dropdownSettingsHoverClickedFill:a.default.string,dropdownSettingsHoverClickedBorder:a.default.string,dropdownSettingsTextColorRegular:a.default.string,dropdownSettingsTextColorHover:a.default.string,dropdownSettingsTextColorClicked:a.default.string,dropdownSettingsTextFontFamily:a.default.string,dropdownSettingsTextFontSize:a.default.number,dropdownSettingsTextBold:a.default.bool,dropdownSettingsTextUnderline:a.default.bool,dropdownSettingsTextItalic:a.default.bool,dropdownSettingsHorizontalPadding:a.default.number,dropdownSettingsVerticalPadding:a.default.number,navBarHoverColor:a.default.string,navBarClickedColor:a.default.string,rootId:a.default.string};var O,A,j,V=t.memo((function(e){var n=e.link,o=e.disabledRedirect,r=e.title,l=e.buttonSettingsRoundCorners,a=e.buttonSettingsBorderWidth,d=e.buttonSettingsRegularBorder,u=e.buttonSettingsRegularFill,c=e.buttonSettingsHorizontalPadding,s=e.buttonSettingsVerticalPadding,g=e.buttonSettingsHoverClickedBorder,f=e.buttonSettingsHoverClickedFill,v=e.buttonSettingsTextColorRegular,p=e.buttonSettingsTextColorHover,b=e.buttonSettingsTextColorClicked,S=e.navBarTextFontSize,x=null==n?void 0:n.value,C=t.useCallback((function(){x&&!o&&y(x)}),[x,o]);return i.default.createElement(L,{buttonSettingsRoundCorners:l,buttonSettingsBorderWidth:a,buttonSettingsRegularBorder:d,buttonSettingsRegularFill:u,buttonSettingsHorizontalPadding:c,buttonSettingsVerticalPadding:s,buttonSettingsHoverClickedBorder:g,buttonSettingsHoverClickedFill:f,buttonSettingsTextColorRegular:v,buttonSettingsTextColorHover:p,buttonSettingsTextColorClicked:b,onClick:C,"data-link":x,navBarTextFontSize:S},r)})),L=l.default.div(w||(w=c(["\n  line-height: normal;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  border-radius: ","px;\n  border: ","px solid ",";\n  background: ",";\n  padding: ",";\n  color: ",";\n  height: ","px;\n\n  &:hover {\n    border: ","px solid ",";\n    background: ",";\n    color: ",";\n  }\n\n  &:active {\n    border: ","px solid ",";\n    background: ",";\n    color: ",";\n  }\n"])),(function(t){return t.buttonSettingsRoundCorners}),(function(t){return t.buttonSettingsBorderWidth}),(function(t){return t.buttonSettingsRegularBorder}),(function(t){return t.buttonSettingsRegularFill}),(function(t){var e=t.buttonSettingsHorizontalPadding;return"0 ".concat(e,"px")}),(function(t){return t.buttonSettingsTextColorRegular}),(function(t){var e=t.buttonSettingsVerticalPadding;return t.navBarTextFontSize+2*(e||0)+2*(t.buttonSettingsBorderWidth||0)}),(function(t){return t.buttonSettingsBorderWidth}),(function(t){return t.buttonSettingsHoverClickedBorder}),(function(t){return t.buttonSettingsHoverClickedFill}),(function(t){return t.buttonSettingsTextColorHover}),(function(t){return t.buttonSettingsBorderWidth}),(function(t){return t.buttonSettingsHoverClickedBorder}),(function(t){return t.buttonSettingsHoverClickedFill}),(function(t){return t.buttonSettingsTextColorClicked}));V.propTypes={disabledRedirect:a.default.bool,title:a.default.string,link:a.default.string,buttonSettingsRoundCorners:a.default.number,buttonSettingsBorderWidth:a.default.number,buttonSettingsRegularBorder:a.default.string,buttonSettingsRegularFill:a.default.string,buttonSettingsVerticalPadding:a.default.number,buttonSettingsHorizontalPadding:a.default.number,buttonSettingsHoverClickedBorder:a.default.string,buttonSettingsHoverClickedFill:a.default.string,buttonSettingsTextColorRegular:a.default.string,buttonSettingsTextColorHover:a.default.string,buttonSettingsTextColorClicked:a.default.string,navBarTextFontSize:a.default.number};var W,U,M,q,N,D,Z=t.forwardRef((function(t,e){var n=t.height,o=t.id,r=t.crop,l=t.source,a=t.alt,d=t.ignoreMaxHeight,c=t.isTurntable,s=t.isHero,g={width:"100%",height:"100%",objectFit:"cover"};return d||(g.maxHeight="600px"),i.default.createElement(Y,{ref:e,isTurntable:c,isHero:s,height:n,id:o},i.default.createElement(_,u({},r.imagePosition,{isHero:s}),i.default.createElement("img",{src:l,alt:a,style:g})))})),_=l.default.div(O||(O=c(["\n  position: relative;\n  left: ","%;\n  top: ","%;\n  width: ","%;\n  height: ","%;\n\n  ",";\n"])),(function(t){return t.x||0}),(function(t){return t.y||0}),(function(t){return t.width||100}),(function(t){return t.height||100}),(function(t){return t.isHero&&e.css(A||(A=c(["\n      position: static;\n      img {\n        object-fit: cover;\n        //margin-left: auto;\n        //margin-right: auto;\n        //width: auto !important;\n      }\n    "])))})),Y=l.default.div(j||(j=c(["\n  width: 100%;\n  height: ",";\n  position: relative;\n  background-color: transparent;\n  overflow: hidden;\n"])),(function(t){var e=t.height,n=t.isTurntable,o=t.isHero;return n||o?"100%":e?e+"px":"100%"}));Z.propTypes={height:a.default.number,id:a.default.string,crop:a.default.object,source:a.default.string.isRequired,alt:a.default.string,ignoreMaxHeight:a.default.bool,isTurntable:a.default.bool,isHero:a.default.bool},Z.defaultProps={id:"",alt:"",ignoreMaxHeight:!1,crop:{}};var $=function(t){var e=t.logoSrc,n=t.logoCropperOptions,o=t.hideElement;return i.default.createElement(tt,{hideElement:o},i.default.createElement(Z,{source:e+p(n),crop:n}))},G=function(e){var n=e.config,o=e.disabledRedirect,r=void 0!==o&&o,l=e.disabledListClick,a=void 0!==l&&l,d=e.stickyOffset,c=void 0===d?0:d,s=e.isStatic,g=void 0!==s&&s,f=e.hideLogo,v=void 0!==f&&f,p=e.isPreview,b=void 0!==p&&p,S=e.rootId,x=void 0===S?"root":S,C=n.height,m=n.navBarRegularColor,h=n.navBarHoverColor,T=n.navBarClickedColor,B=n.logoAlignment,w=n.logoCropperOptions,k=n.logoSrc,y=n.navBarTextAlignment,H=n.navBarTextFontSize,R=n.navBarTextFontFamily,F=n.navBarTextBold,z=n.navBarTextItalic,I=n.navBarTextUnderline,P=n.navBarTextRegularColor,O=n.structure,A=n.navBarTextHoverColor,j=n.navBarTextClickedColor,L=n.navBarTextSpacing,W=n.buttonSettingsRoundCorners,U=n.buttonSettingsBorderWidth,M=n.buttonSettingsRegularBorder,q=n.buttonSettingsRegularFill,N=n.buttonSettingsHorizontalPadding,D=n.buttonSettingsVerticalPadding,Z=n.buttonSettingsHoverClickedFill,_=n.buttonSettingsHoverClickedBorder,Y=n.buttonSettingsTextColorRegular,G=n.buttonSettingsTextColorHover,J=n.buttonSettingsTextColorClicked,K=n.navBarBehavior,tt=n.dropdownSettingsInactiveFill,ot=n.dropdownSettingsInactiveBorder,rt=n.dropdownSettingsHoverClickedFill,it=n.dropdownSettingsHoverClickedBorder,lt=n.dropdownSettingsTextColorRegular,at=n.dropdownSettingsTextColorHover,dt=n.dropdownSettingsTextColorClicked,ut=n.dropdownSettingsTextFontFamily,ct=n.dropdownSettingsTextFontSize,st=n.dropdownSettingsTextBold,gt=n.dropdownSettingsTextUnderline,ft=n.dropdownSettingsTextItalic,vt=n.dropdownSettingsHorizontalPadding,pt=n.dropdownSettingsVerticalPadding;return i.default.createElement(X,{height:C,navBarRegularColor:m,navBarBehavior:K,stickyOffset:c,className:"navbar-desktop"},i.default.createElement(et,{height:C},i.default.createElement($,{logoSrc:k,logoCropperOptions:w,hideElement:v||"left"!==B}),i.default.createElement(nt,{"data-navbarcontainer":!0,navBarTextAlignment:y,navBarTextFontSize:H,navBarTextFontFamily:R,navBarTextBold:F,navBarTextItalic:z,navBarTextUnderline:I,navBarTextRegularColor:P,navBarTextSpacing:L},0===(null==O?void 0:O.length)&&b?i.default.createElement(Q,null,"Navigation will preview here once created"):i.default.createElement(i.default.Fragment,null,null==O?void 0:O.map((function(e){var n=null;return"button"===e.type?n=i.default.createElement(V,u({},e,{disabledRedirect:r,buttonSettingsRoundCorners:W,buttonSettingsBorderWidth:U,buttonSettingsRegularBorder:M,buttonSettingsRegularFill:q,buttonSettingsVerticalPadding:D,buttonSettingsHorizontalPadding:N,buttonSettingsHoverClickedBorder:_,buttonSettingsHoverClickedFill:Z,buttonSettingsTextColorRegular:Y,buttonSettingsTextColorHover:G,buttonSettingsTextColorClicked:J,navBarTextFontSize:H})):"page"===e.type&&(n=i.default.createElement(E,u({},e,{disabledRedirect:r,disabledListClick:a,navBarTextHoverColor:A,navBarTextClickedColor:j,dropdownSettingsInactiveFill:tt,dropdownSettingsInactiveBorder:ot,dropdownSettingsHoverClickedFill:rt,dropdownSettingsHoverClickedBorder:it,dropdownSettingsTextColorRegular:lt,dropdownSettingsTextColorHover:at,dropdownSettingsTextColorClicked:dt,dropdownSettingsTextFontFamily:ut,dropdownSettingsTextFontSize:ct,dropdownSettingsTextBold:st,dropdownSettingsTextUnderline:gt,dropdownSettingsTextItalic:ft,dropdownSettingsHorizontalPadding:vt,dropdownSettingsVerticalPadding:pt,isStatic:g,navBarHoverColor:h,navBarClickedColor:T,rootId:x}))),i.default.createElement(t.Fragment,{key:e.id},n)})))),i.default.createElement($,{logoSrc:k,logoCropperOptions:w,hideElement:v||"right"!==B})))};G.propTypes={config:a.default.object,disabledRedirect:a.default.bool,disabledListClick:a.default.bool,stickyOffset:a.default.number,isStatic:a.default.bool,hideLogo:a.default.bool,isPreview:a.default.bool};var J,K,Q=l.default.div(W||(W=c(["\n  font-family: Montserrat-bold, sans-serif;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  font-size: 15px;\n  letter-spacing: 1.5px;\n  text-transform: uppercase;\n"]))),X=l.default.div(U||(U=c(["\n  display: flex;\n  height: ","px;\n  background-color: ",";\n  padding: 0 50px;\n  width: 100%;\n  margin: auto;\n  align-items: center;\n  flex-shrink: 0;\n  z-index: 1002;\n\n  ",";\n"])),(function(t){return t.height}),(function(t){return t.navBarRegularColor}),(function(t){var n=t.navBarBehavior,o=t.stickyOffset;return"frozen"===n&&e.css(M||(M=c(["\n            position: sticky;\n            top: ","px;\n          "])),o)})),tt=l.default.div(q||(q=c(["\n  width: ","px;\n  height: ","px;\n  opacity: ",";\n"])),100,50,(function(t){return t.hideElement?0:1})),et=l.default.div(N||(N=c(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  max-width: 1120px;\n  margin: auto;\n  height: ","px;\n"])),(function(t){return t.height})),nt=l.default.div(D||(D=c(["\n  display: flex;\n  flex: 1 1 auto;\n  margin: 0 24px;\n  justify-content: ",";\n  font-size: ","px;\n  font-family: ",";\n  font-weight: ",";\n  font-style: ",";\n  text-decoration: ",";\n  color: ",";\n  height: 100%;\n  align-items: center;\n  width: calc(100% - 250px);\n  overflow-x: auto;\n  overflow-y: hidden;\n\n  > div {\n    margin-right: ","px;\n\n    &:last-child {\n      margin-right: 0;\n    }\n  }\n"])),(function(t){return t.navBarTextAlignment}),(function(t){return t.navBarTextFontSize}),(function(t){return t.navBarTextFontFamily}),(function(t){return t.navBarTextBold?"bold":"normal"}),(function(t){return t.navBarTextItalic?"italic":"normal"}),(function(t){return t.navBarTextUnderline?"underline":"none"}),(function(t){return t.navBarTextRegularColor}),(function(t){return t.navBarTextSpacing})),ot=function(){return i.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"19.94",height:"16.44",viewBox:"0 0 19.94 16.44"},i.default.createElement("path",{d:"M20.41,6.91H3.47a1.5,1.5,0,0,1,0-3H20.41A1.5,1.5,0,0,1,20.41,6.91Z",transform:"translate(-1.97 -3.91)"}),i.default.createElement("path",{d:"M20.41,13.91H3.47a1.5,1.5,0,0,1,0-3H20.41A1.5,1.5,0,0,1,20.41,13.91Z",transform:"translate(-1.97 -3.91)"}),i.default.createElement("path",{d:"M20.41,20.34H3.47a1.5,1.5,0,0,1,0-3H20.41A1.5,1.5,0,0,1,20.41,20.34Z",transform:"translate(-1.97 -3.91)"}))},rt=function(t){var e=t.children,n=t.onClick,o=t.mobileTextAlignment,r=t.link,l=t.isDropdown;return i.default.createElement(it,{onClick:n,mobileTextAlignment:o,"data-link":r,"data-isdropdown":l},e)},it=l.default.div(J||(J=c(["\n    padding: 15px;\n    display: flex;\n    justify-content: ",";\n"])),(function(t){return"center"===t.mobileTextAlignment?"center":"flex-start"}));rt.propTypes={children:a.default.any,onClick:a.default.func,link:a.default.string,isDropdown:a.default.bool};var lt,at,dt=t.memo((function(e){var n=e.link,o=e.disabledRedirect,r=e.title,l=e.buttonSettingsRoundCorners,a=e.buttonSettingsBorderWidth,d=e.buttonSettingsRegularBorder,u=e.buttonSettingsRegularFill,c=e.buttonSettingsHorizontalPadding,s=e.buttonSettingsVerticalPadding,g=e.buttonSettingsHoverClickedBorder,f=e.buttonSettingsHoverClickedFill,v=e.buttonSettingsTextColorRegular,p=e.buttonSettingsTextColorHover,b=e.buttonSettingsTextColorClicked,S=e.mobileTextAlignment,x=null==n?void 0:n.value,C=t.useCallback((function(){x&&!o&&y(x)}),[x,o]);return i.default.createElement(rt,{onClick:C,link:x,mobileTextAlignment:S},i.default.createElement(ut,{buttonSettingsRoundCorners:l,buttonSettingsBorderWidth:a,buttonSettingsRegularBorder:d,buttonSettingsRegularFill:u,buttonSettingsHorizontalPadding:c,buttonSettingsVerticalPadding:s,buttonSettingsHoverClickedBorder:g,buttonSettingsHoverClickedFill:f,buttonSettingsTextColorRegular:v,buttonSettingsTextColorHover:p,buttonSettingsTextColorClicked:b},r))})),ut=l.default.div(K||(K=c(["\n  line-height: normal;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  border-radius: ","px;\n  border: ","px solid\n    ",";\n  background: ",";\n  padding: ",";\n  color: ",";\n\n  &:hover {\n    border: ","px solid\n      ",";\n    background: ",";\n    color: ",";\n  }\n\n  &:active {\n    border: ","px solid\n      ",";\n    background: ",";\n    color: ",";\n  }\n"])),(function(t){return t.buttonSettingsRoundCorners}),(function(t){return t.buttonSettingsBorderWidth}),(function(t){return t.buttonSettingsRegularBorder}),(function(t){return t.buttonSettingsRegularFill}),(function(t){var e=t.buttonSettingsVerticalPadding,n=t.buttonSettingsHorizontalPadding;return"".concat(e,"px ").concat(n,"px")}),(function(t){return t.buttonSettingsTextColorRegular}),(function(t){return t.buttonSettingsBorderWidth}),(function(t){return t.buttonSettingsHoverClickedBorder}),(function(t){return t.buttonSettingsHoverClickedFill}),(function(t){return t.buttonSettingsTextColorHover}),(function(t){return t.buttonSettingsBorderWidth}),(function(t){return t.buttonSettingsHoverClickedBorder}),(function(t){return t.buttonSettingsHoverClickedFill}),(function(t){return t.buttonSettingsTextColorClicked}));dt.propTypes={disabledRedirect:a.default.bool,title:a.default.string,link:a.default.string,buttonSettingsRoundCorners:a.default.number,buttonSettingsBorderWidth:a.default.number,buttonSettingsRegularBorder:a.default.string,buttonSettingsRegularFill:a.default.string,buttonSettingsVerticalPadding:a.default.number,buttonSettingsHorizontalPadding:a.default.number,buttonSettingsHoverClickedBorder:a.default.string,buttonSettingsHoverClickedFill:a.default.string,buttonSettingsTextColorRegular:a.default.string,buttonSettingsTextColorHover:a.default.string,buttonSettingsTextColorClicked:a.default.string};var ct,st,gt,ft,vt,pt,bt,St,xt=t.memo((function(e){var n=e.disabledRedirect,o=e.disabledListClick,r=e.link,l=e.title,a=e.navBarTextHoverColor,d=e.navBarTextClickedColor,u=e.children,c=e.mobileTextAlignment,g=e.isStatic,f=null==r?void 0:r.value,v=s(t.useState(g),2),p=v[0],S=v[1],x=u.length>0,C=t.useCallback((function(){x&&!o?S((function(t){return!t})):x||n||!f||y(f)}),[o,n,x,f]);return i.default.createElement(Ct,null,i.default.createElement(rt,{isDropdown:x,link:x?void 0:f,onClick:C,mobileTextAlignment:c},i.default.createElement(R,{navBarTextHoverColor:a,navBarTextClickedColor:d},l," ",x&&i.default.createElement(H,{"data-arrow":!0},p?i.default.createElement(b,{icon:k,rotate:g?-90:90,color:"#ffffff"}):i.default.createElement(b,{icon:k,rotate:-90,color:"#ffffff"})))),p&&x&&i.default.createElement(mt,{"data-mobile-dropdown-list":!0},u.map((function(t){var e;return i.default.createElement(rt,{key:t.id,onClick:function(){var e;null!==(e=t.link)&&void 0!==e&&e.value&&!n&&y(t.link.value)},link:null===(e=t.link)||void 0===e?void 0:e.value,mobileTextAlignment:c},i.default.createElement(R,{navBarTextHoverColor:a,navBarTextClickedColor:d},t.title))}))))})),Ct=l.default.div(lt||(lt=c(["\n  display: flex;\n  flex-direction: column;\n"]))),mt=l.default.div(at||(at=c(["\n  display: flex;\n  flex-direction: column;\n"])));xt.propTypes={link:a.default.string,disabledRedirect:a.default.bool,disabledListClick:a.default.bool,title:a.default.string,navBarTextHoverColor:a.default.string,navBarTextClickedColor:a.default.string,children:a.default.array,mobileTextAlignment:a.default.string};var ht=function(e){var n=e.config,o=e.stickyOffset,r=void 0===o?0:o,l=e.isConstructor,a=void 0!==l&&l,d=e.isStatic,c=void 0!==d&&d,g=e.disabledRedirect,f=void 0!==g&&g,v=e.disabledListClick,S=void 0!==v&&v,x=s(t.useState(a),2),C=x[0],m=x[1];t.useEffect((function(){a||(document.body.style.overflowY=C?"hidden":"auto")}),[a,C]);var h=n.mobileHeight,T=n.navBarRegularColor,B=n.mobileLogoAlignment,w=n.logoSrc,k=n.logoCropperOptions,y=n.navBarBehavior,H=n.mobileFontSize,R=n.navBarTextFontFamily,F=n.navBarTextBold,E=n.navBarTextItalic,z=n.navBarTextUnderline,I=n.navBarTextRegularColor,P=n.navBarTextSpacing,O=n.buttonSettingsRoundCorners,A=n.buttonSettingsBorderWidth,j=n.buttonSettingsRegularBorder,V=n.buttonSettingsRegularFill,L=n.buttonSettingsHorizontalPadding,W=n.buttonSettingsVerticalPadding,U=n.buttonSettingsHoverClickedFill,M=n.buttonSettingsHoverClickedBorder,q=n.buttonSettingsTextColorRegular,N=n.buttonSettingsTextColorHover,D=n.buttonSettingsTextColorClicked,_=n.mobileTextAlignment,Y=n.navBarTextHoverColor,$=n.navBarTextClickedColor,G=n.structure,J=t.useCallback((function(){a||S||m((function(t){return!t}))}),[a,S]);return i.default.createElement(Tt,{className:"navbar-mobile",navBarBehavior:y,stickyOffset:r,isConstructor:a},i.default.createElement(wt,{height:h,navBarRegularColor:T,"data-mobile-header":!0},i.default.createElement(Ht,{onClick:J,"data-mobile-menu-button":!0},i.default.createElement(b,{icon:ot,color:"#ffffff"})),i.default.createElement(kt,{mobileLogoAlignment:B},i.default.createElement(yt,null,i.default.createElement(Z,{source:w+p(k),crop:k})))),i.default.createElement(Bt,{"data-mobile-menu":!0,mobileHeight:h,offsetTop:r+h,isConstructor:a,open:C,navBarRegularColor:T,mobileFontSize:H,navBarTextFontFamily:R,navBarTextBold:F,navBarTextItalic:E,navBarTextUnderline:z,navBarTextRegularColor:I,navBarTextSpacing:P},null==G?void 0:G.map((function(e){var n="any";return"button"===e.type?n=i.default.createElement(dt,u({},e,{mobileTextAlignment:_,disabledRedirect:a,buttonSettingsRoundCorners:O,buttonSettingsBorderWidth:A,buttonSettingsRegularBorder:j,buttonSettingsRegularFill:V,buttonSettingsVerticalPadding:W,buttonSettingsHorizontalPadding:L,buttonSettingsHoverClickedBorder:M,buttonSettingsHoverClickedFill:U,buttonSettingsTextColorRegular:q,buttonSettingsTextColorHover:N,buttonSettingsTextColorClicked:D})):"page"===e.type&&(n=i.default.createElement(xt,u({},e,{disabledRedirect:f,disabledListClick:S,navBarTextHoverColor:Y,navBarTextClickedColor:$,mobileTextAlignment:_,isStatic:c}))),i.default.createElement(t.Fragment,{key:e.id},n)}))))},Tt=l.default.div(ct||(ct=c(["\n  z-index: 1001;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  ",";\n"])),(function(t){var n=t.navBarBehavior,o=t.stickyOffset,r=t.isConstructor;return"frozen"===n&&!r&&e.css(st||(st=c(["\n            position: sticky;\n            top: ","px;\n          "])),o)})),Bt=l.default.div(gt||(gt=c(["\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: ","px;\n  width: 100%;\n  height: ",";\n  transition: height 0.5s ease;\n  background-color: ",";\n  overflow-x: hidden;\n  overflow-y: auto;\n  font-size: ","px;\n  font-family: ",";\n  font-weight: ",";\n  font-style: ",";\n  text-decoration: ",";\n  color: ",";\n  ",";\n"])),(function(t){return t.mobileHeight}),(function(t){return t.isConstructor?"350px":0}),(function(t){return t.navBarRegularColor}),(function(t){return t.mobileFontSize}),(function(t){return t.navBarTextFontFamily}),(function(t){return t.navBarTextBold?"bold":"normal"}),(function(t){return t.navBarTextItalic?"italic":"normal"}),(function(t){return t.navBarTextUnderline?"underline":"none"}),(function(t){return t.navBarTextRegularColor}),(function(t){var n=t.offsetTop,o=t.open;return!t.isConstructor&&o&&e.css(ft||(ft=c(["\n            height: calc(100vh - ","px);\n          "])),n)})),wt=l.default.div(vt||(vt=c(["\n  display: flex;\n  width: 100%;\n  padding: 15px 13px 16px 15px;\n  border: solid 1px rgba(164, 198, 225, 0.39);\n  height: ","px;\n  background-color: ",";\n  align-items: center;\n  overflow: hidden;\n"])),(function(t){return t.height}),(function(t){return t.navBarRegularColor})),kt=l.default.div(pt||(pt=c(["\n  display: flex;\n  flex: 1 1 auto;\n  justify-content: ",";\n"])),(function(t){var e=t.mobileLogoAlignment;return"center"===e?"center":"right"===e?"flex-end":""})),yt=l.default.div(bt||(bt=c(["\n  width: ","px;\n  height: ","px;\n"])),100,50),Ht=l.default.div(St||(St=c(["\n  display: flex;\n  position: absolute;\n"])));ht.propTypes={config:a.default.object,stickyOffset:a.default.number},exports.NavBar=G,exports.NavBarMobile=ht,exports.logoImageHeight=50,exports.logoImageWidth=100;
//# sourceMappingURL=index.cjs.js.map

"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("react"),e=require("styled-components"),n=require("prop-types"),o=require("react-dom");function r(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var i=r(t),l=r(e),d=r(n),a=r(o);function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function c(){return c=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},c.apply(this,arguments)}function s(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function g(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var o,r,i=[],l=!0,d=!1;try{for(n=n.call(t);!(l=(o=n.next()).done)&&(i.push(o.value),!e||i.length!==e);l=!0);}catch(t){d=!0,r=t}finally{try{l||null==n.return||n.return()}finally{if(d)throw r}}return i}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return f(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}var v,p=function(t){return Math.floor(t)},b=function(t){if(!t||0===Object.keys(t).length)return"";var e=t.imageBox,n=t.rotate,o=e.x,r=e.y,i=e.height,l=e.width;return"?x=".concat(p(o),"&y=").concat(p(r),"&w=").concat(p(l),"&h=").concat(p(i),"&rotate=").concat(n)},S=function(t){var e=t.icon,n=t.opacity,o=void 0===n?1:n,r=t.hoverOpacity,l=void 0===r?1:r,d=t.color,a=void 0===d?"#000":d,u=t.hoverColor,c=void 0===u?a:u,s=t.size,g=void 0===s?20:s,f=t.rotate,v=t.noCursor,p=t.padding,b=void 0===p?0:p,S=t.width,m=t.height,h=t.tableIcon;return i.default.createElement(C,{color:a,hoverColor:c,size:g,width:S,height:m,opacity:o,hoverOpacity:l,rotate:f,noCursor:v,padding:b,tableIcon:h},x(e))},x=function(t){var e=t;return"function"==typeof t?i.default.createElement(e,null):"string"==typeof t?t:null},C=l.default.div(v||(v=s(["\n  cursor: ",";\n  display: ",";\n  flex: 0 0 auto;\n  align-items: center;\n  font-size: ",";\n  width: ","px;\n  height: ","px;\n  transform: rotate(","deg);\n  transform-origin: 50% 50%;\n  padding: ","px;\n\n  :hover {\n    svg {\n      fill: ",";\n      opacity: ",";\n    }\n  }\n\n  svg {\n    fill: ",";\n    opacity: ",";\n    width: 100%;\n    height: 100%;\n    transition: all ease-in-out 0.3s;\n    vertical-align: ",";\n  }\n"])),(function(t){return t.noCursor?"initial":"pointer"}),(function(t){return t.tableIcon?"table-cell":"flex"}),(function(t){return!t.tableIcon&&"0"}),(function(t){var e=t.size,n=t.width;return n||e}),(function(t){var e=t.size,n=t.height;return n||e}),(function(t){return t.rotate}),(function(t){return t.padding}),(function(t){return t.hoverColor}),(function(t){return t.hoverOpacity}),(function(t){return t.color}),(function(t){return t.opacity}),(function(t){return t.tableIcon&&"middle"}));S.propTypes={color:d.default.string,hoverColor:d.default.string,icon:d.default.oneOfType([d.default.string,d.default.func]),size:d.default.number,padding:d.default.number,opacity:d.default.number,hoverOpacity:d.default.number,rotate:d.default.number,noCursor:d.default.bool,width:d.default.number,height:d.default.number,tableIcon:d.default.bool},S.defaultProps={opacity:1,color:"#000",size:20,padding:0,rotate:0,noCursor:!1,tableIcon:!1};var m,h,T,w,B,k,y,H=function(){return i.default.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24"},i.default.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),i.default.createElement("path",{d:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"}))},R=function(t){return window.open(t,"_blank","noreferrer noopener")},F=l.default.div(m||(m=s([""]))),E=l.default.div(h||(h=s(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  height: 100%;\n\n  &:hover {\n    color: ",";\n  }\n\n  &:active {\n    color: ",";\n  }\n"])),(function(t){return t.navBarTextHoverColor}),(function(t){return t.navBarTextClickedColor})),z=l.default(E)(T||(T=s(["\n    word-break: break-word;\n"]))),I=t.memo((function(t){var e=t.disabledRedirect,n=t.childs,o=t.dropdownSettingsInactiveFill,r=t.dropdownSettingsInactiveBorder,l=t.dropdownSettingsHoverClickedFill,d=t.dropdownSettingsHoverClickedBorder,c=t.dropdownSettingsTextColorRegular,s=t.dropdownSettingsTextColorHover,g=t.dropdownSettingsTextColorClicked,f=t.dropdownSettingsTextFontFamily,v=t.dropdownSettingsTextFontSize,p=t.dropdownSettingsTextBold,b=t.dropdownSettingsTextUnderline,S=t.dropdownSettingsTextItalic,x=t.dropdownSettingsHorizontalPadding,C=t.dropdownSettingsVerticalPadding,m=t.setOpen,h=t.rootId,T=t.parentRef,w="object"===("undefined"==typeof window?"undefined":u(window)),B=0,k=0;if(w&&T){B=T.getBoundingClientRect().left;var y=T.closest("[data-navbarcontainer]"),H=T.closest(".navbar-desktop");if(y){var F=y.getBoundingClientRect().left;B<F&&(B=F)}if(H){var E=H.getBoundingClientRect();k=E.top+E.height+window.scrollY}}var z=i.default.createElement(A,{"data-list":!0,className:"navbar-list",left:B,top:k,dropdownSettingsInactiveBorder:r},n.map((function(t){var n;return i.default.createElement(j,{key:t.id,dropdownSettingsInactiveFill:o,dropdownSettingsHoverClickedFill:l,dropdownSettingsHoverClickedBorder:d,dropdownSettingsTextColorRegular:c,dropdownSettingsTextColorHover:s,dropdownSettingsTextColorClicked:g,dropdownSettingsTextFontFamily:f,dropdownSettingsTextFontSize:v,dropdownSettingsTextBold:p,dropdownSettingsTextUnderline:b,dropdownSettingsTextItalic:S,dropdownSettingsHorizontalPadding:x,dropdownSettingsVerticalPadding:C,onClick:function(){var n;null!==(n=t.link)&&void 0!==n&&n.value&&!e?(R(t.link.value),m(!1)):m(!1)},"data-link":null===(n=t.link)||void 0===n?void 0:n.value},t.title)})));return w?a.default.createPortal(z,document.getElementById(h)):z})),P=t.memo((function(e){var n=e.disabledRedirect,o=e.disabledListClick,r=e.link,l=e.title,d=e.navBarTextHoverColor,a=e.navBarTextClickedColor,u=e.children,c=e.dropdownSettingsInactiveFill,s=e.dropdownSettingsInactiveBorder,f=e.dropdownSettingsHoverClickedFill,v=e.dropdownSettingsHoverClickedBorder,p=e.dropdownSettingsTextColorRegular,b=e.dropdownSettingsTextColorHover,x=e.dropdownSettingsTextColorClicked,C=e.dropdownSettingsTextFontFamily,m=e.dropdownSettingsTextFontSize,h=e.dropdownSettingsTextBold,T=e.dropdownSettingsTextUnderline,w=e.dropdownSettingsTextItalic,B=e.dropdownSettingsHorizontalPadding,k=e.dropdownSettingsVerticalPadding,y=e.isStatic,z=e.navBarHoverColor,P=e.navBarClickedColor,A=e.rootId,j=g(t.useState(y),2),V=j[0],L=j[1],W=null==r?void 0:r.value,U=function(e){var n=t.createRef(),o=function(t){!n.current||null!=n&&n.current.contains(t.target)||e(t,n.current)};return t.useEffect((function(){return document.addEventListener("mousedown",o),document.addEventListener("touchstart",o),function(){document.removeEventListener("mousedown",o),document.removeEventListener("touchstart",o)}})),n}((function(){L(!1)})),M=g(t.useState(null),2),N=M[0],q=M[1];t.useEffect((function(){q(U.current)}),[]);var D=u.length>0,Z=t.useCallback((function(){D&&!o?L((function(t){return!t})):D||n||!W||R(W)}),[o,n,D,W]);return i.default.createElement(O,{ref:U,navBarHoverColor:z,navBarClickedColor:P},i.default.createElement(E,{navBarTextHoverColor:d,navBarTextClickedColor:a,onClick:Z,"data-link":D?void 0:W,"data-isdropdown":D},l," ",D&&i.default.createElement(F,{"data-arrow":!0},V?i.default.createElement(S,{icon:H,rotate:y?-90:90,color:"#ffffff"}):i.default.createElement(S,{icon:H,rotate:-90,color:"#ffffff"}))),V&&D&&i.default.createElement(I,{dropdownSettingsInactiveFill:c,dropdownSettingsInactiveBorder:s,dropdownSettingsHoverClickedFill:f,dropdownSettingsHoverClickedBorder:v,dropdownSettingsTextColorRegular:p,dropdownSettingsTextColorHover:b,dropdownSettingsTextColorClicked:x,dropdownSettingsTextFontFamily:C,dropdownSettingsTextFontSize:m,dropdownSettingsTextBold:h,dropdownSettingsTextUnderline:T,dropdownSettingsTextItalic:w,dropdownSettingsHorizontalPadding:B,dropdownSettingsVerticalPadding:k,childs:u,setOpen:L,disabledRedirect:n,rootId:A,parentRef:N}))})),O=l.default.div(w||(w=s(["\n  position: relative;\n  height: 100%;\n\n  &:hover {\n    background: ",";\n  }\n\n  &:active {\n    background: ",";\n  }\n"])),(function(t){return t.navBarHoverColor}),(function(t){return t.navBarClickedColor})),A=l.default.div(B||(B=s(["\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  left: ","px;\n  top: ","px;\n  z-index: 2;\n  \n  > div {\n    border-right: 2px solid ",";\n    border-left: 2px solid ",";\n    border-bottom: 2px solid ",";\n  }\n  > div:first-child {\n    border-top: 2px solid ",";\n  }\n"])),(function(t){return t.left}),(function(t){return t.top}),(function(t){return t.dropdownSettingsInactiveBorder}),(function(t){return t.dropdownSettingsInactiveBorder}),(function(t){return t.dropdownSettingsInactiveBorder}),(function(t){return t.dropdownSettingsInactiveBorder})),j=l.default.div(k||(k=s(["\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n  cursor: pointer;\n  background: ",";\n  color: ",";\n  font-size: ","px;\n  font-family: ",";\n  font-weight: ",";\n  font-style: ",";\n  text-decoration: ",";\n  padding: ",";\n\n  &:hover {\n    background: ",";\n    border: 2px solid ",";\n    color: ",";\n  }\n\n  &:active {\n    background: ",";\n    border: 2px solid ",";\n    color: ",";\n  }\n"])),(function(t){return t.dropdownSettingsInactiveFill}),(function(t){return t.dropdownSettingsTextColorRegular}),(function(t){return t.dropdownSettingsTextFontSize}),(function(t){return t.dropdownSettingsTextFontFamily}),(function(t){return t.dropdownSettingsTextBold?"bold":"normal"}),(function(t){return t.dropdownSettingsTextItalic?"italic":"normal"}),(function(t){return t.dropdownSettingsTextUnderline?"underline":"none"}),(function(t){var e=t.dropdownSettingsVerticalPadding,n=t.dropdownSettingsHorizontalPadding;return"".concat(e,"px ").concat(n,"px")}),(function(t){return t.dropdownSettingsHoverClickedFill}),(function(t){return t.dropdownSettingsHoverClickedBorder}),(function(t){return t.dropdownSettingsTextColorHover}),(function(t){return t.dropdownSettingsHoverClickedFill}),(function(t){return t.dropdownSettingsHoverClickedBorder}),(function(t){return t.dropdownSettingsTextColorClicked}));P.propTypes={link:d.default.string,disabledRedirect:d.default.bool,disabledListClick:d.default.bool,title:d.default.string,navBarTextHoverColor:d.default.string,navBarTextClickedColor:d.default.string,children:d.default.array,dropdownSettingsInactiveFill:d.default.string,dropdownSettingsInactiveBorder:d.default.string,dropdownSettingsHoverClickedFill:d.default.string,dropdownSettingsHoverClickedBorder:d.default.string,dropdownSettingsTextColorRegular:d.default.string,dropdownSettingsTextColorHover:d.default.string,dropdownSettingsTextColorClicked:d.default.string,dropdownSettingsTextFontFamily:d.default.string,dropdownSettingsTextFontSize:d.default.number,dropdownSettingsTextBold:d.default.bool,dropdownSettingsTextUnderline:d.default.bool,dropdownSettingsTextItalic:d.default.bool,dropdownSettingsHorizontalPadding:d.default.number,dropdownSettingsVerticalPadding:d.default.number,navBarHoverColor:d.default.string,navBarClickedColor:d.default.string,rootId:d.default.string};var V,L,W,U=t.memo((function(e){var n=e.link,o=e.disabledRedirect,r=e.title,l=e.buttonSettingsRoundCorners,d=e.buttonSettingsBorderWidth,a=e.buttonSettingsRegularBorder,u=e.buttonSettingsRegularFill,c=e.buttonSettingsHorizontalPadding,s=e.buttonSettingsVerticalPadding,g=e.buttonSettingsHoverClickedBorder,f=e.buttonSettingsHoverClickedFill,v=e.buttonSettingsTextColorRegular,p=e.buttonSettingsTextColorHover,b=e.buttonSettingsTextColorClicked,S=e.navBarTextFontSize,x=null==n?void 0:n.value,C=t.useCallback((function(){x&&!o&&R(x)}),[x,o]);return i.default.createElement(M,{buttonSettingsRoundCorners:l,buttonSettingsBorderWidth:d,buttonSettingsRegularBorder:a,buttonSettingsRegularFill:u,buttonSettingsHorizontalPadding:c,buttonSettingsVerticalPadding:s,buttonSettingsHoverClickedBorder:g,buttonSettingsHoverClickedFill:f,buttonSettingsTextColorRegular:v,buttonSettingsTextColorHover:p,buttonSettingsTextColorClicked:b,onClick:C,"data-link":x,navBarTextFontSize:S},r)})),M=l.default.div(y||(y=s(["\n  line-height: normal;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  border-radius: ","px;\n  border: ","px solid ",";\n  background: ",";\n  padding: ",";\n  color: ",";\n  height: ","px;\n\n  &:hover {\n    border: ","px solid ",";\n    background: ",";\n    color: ",";\n  }\n\n  &:active {\n    border: ","px solid ",";\n    background: ",";\n    color: ",";\n  }\n"])),(function(t){return t.buttonSettingsRoundCorners}),(function(t){return t.buttonSettingsBorderWidth}),(function(t){return t.buttonSettingsRegularBorder}),(function(t){return t.buttonSettingsRegularFill}),(function(t){var e=t.buttonSettingsHorizontalPadding;return"0 ".concat(e,"px")}),(function(t){return t.buttonSettingsTextColorRegular}),(function(t){var e=t.buttonSettingsVerticalPadding;return t.navBarTextFontSize+2*(e||0)+2*(t.buttonSettingsBorderWidth||0)}),(function(t){return t.buttonSettingsBorderWidth}),(function(t){return t.buttonSettingsHoverClickedBorder}),(function(t){return t.buttonSettingsHoverClickedFill}),(function(t){return t.buttonSettingsTextColorHover}),(function(t){return t.buttonSettingsBorderWidth}),(function(t){return t.buttonSettingsHoverClickedBorder}),(function(t){return t.buttonSettingsHoverClickedFill}),(function(t){return t.buttonSettingsTextColorClicked}));U.propTypes={disabledRedirect:d.default.bool,title:d.default.string,link:d.default.string,buttonSettingsRoundCorners:d.default.number,buttonSettingsBorderWidth:d.default.number,buttonSettingsRegularBorder:d.default.string,buttonSettingsRegularFill:d.default.string,buttonSettingsVerticalPadding:d.default.number,buttonSettingsHorizontalPadding:d.default.number,buttonSettingsHoverClickedBorder:d.default.string,buttonSettingsHoverClickedFill:d.default.string,buttonSettingsTextColorRegular:d.default.string,buttonSettingsTextColorHover:d.default.string,buttonSettingsTextColorClicked:d.default.string,navBarTextFontSize:d.default.number};var N,q,D,Z,_,Y,$=t.forwardRef((function(t,e){var n=t.height,o=t.id,r=t.crop,l=t.source,d=t.alt,a=t.ignoreMaxHeight,u=t.isTurntable,s=t.isHero,g={width:"100%",height:"100%",objectFit:"cover"};return a||(g.maxHeight="600px"),i.default.createElement(J,{ref:e,isTurntable:u,isHero:s,height:n,id:o},i.default.createElement(G,c({},r.imagePosition,{isHero:s}),i.default.createElement("img",{src:l,alt:d,style:g})))})),G=l.default.div(V||(V=s(["\n  position: relative;\n  left: ","%;\n  top: ","%;\n  width: ","%;\n  height: ","%;\n\n  ",";\n"])),(function(t){return t.x||0}),(function(t){return t.y||0}),(function(t){return t.width||100}),(function(t){return t.height||100}),(function(t){return t.isHero&&e.css(L||(L=s(["\n      position: static;\n      img {\n        object-fit: cover;\n        //margin-left: auto;\n        //margin-right: auto;\n        //width: auto !important;\n      }\n    "])))})),J=l.default.div(W||(W=s(["\n  width: 100%;\n  height: ",";\n  position: relative;\n  background-color: transparent;\n  overflow: hidden;\n"])),(function(t){var e=t.height,n=t.isTurntable,o=t.isHero;return n||o?"100%":e?e+"px":"100%"}));$.propTypes={height:d.default.number,id:d.default.string,crop:d.default.object,source:d.default.string.isRequired,alt:d.default.string,ignoreMaxHeight:d.default.bool,isTurntable:d.default.bool,isHero:d.default.bool},$.defaultProps={id:"",alt:"",ignoreMaxHeight:!1,crop:{}};var K=function(t){var e=t.logoSrc,n=t.logoCropperOptions,o=t.hideElement;return i.default.createElement(ot,{hideElement:o},i.default.createElement($,{source:e+b(n),crop:n}))},Q=function(e){var n=e.config,o=e.disabledRedirect,r=void 0!==o&&o,l=e.disabledListClick,d=void 0!==l&&l,a=e.stickyOffset,u=void 0===a?0:a,s=e.isStatic,g=void 0!==s&&s,f=e.hideLogo,v=void 0!==f&&f,p=e.isPreview,b=void 0!==p&&p,S=e.rootId,x=void 0===S?"root":S,C=n.height,m=n.navBarRegularColor,h=n.navBarHoverColor,T=n.navBarClickedColor,w=n.logoAlignment,B=n.logoCropperOptions,k=n.logoSrc,y=n.navBarTextAlignment,H=n.navBarTextFontSize,R=n.navBarTextFontFamily,F=n.navBarTextBold,E=n.navBarTextItalic,z=n.navBarTextUnderline,I=n.navBarTextRegularColor,O=n.structure,A=n.navBarTextHoverColor,j=n.navBarTextClickedColor,V=n.navBarTextSpacing,L=n.buttonSettingsRoundCorners,W=n.buttonSettingsBorderWidth,M=n.buttonSettingsRegularBorder,N=n.buttonSettingsRegularFill,q=n.buttonSettingsHorizontalPadding,D=n.buttonSettingsVerticalPadding,Z=n.buttonSettingsHoverClickedFill,_=n.buttonSettingsHoverClickedBorder,Y=n.buttonSettingsTextColorRegular,$=n.buttonSettingsTextColorHover,G=n.buttonSettingsTextColorClicked,J=n.navBarBehavior,Q=n.dropdownSettingsInactiveFill,X=n.dropdownSettingsInactiveBorder,tt=n.dropdownSettingsHoverClickedFill,ot=n.dropdownSettingsHoverClickedBorder,lt=n.dropdownSettingsTextColorRegular,dt=n.dropdownSettingsTextColorHover,at=n.dropdownSettingsTextColorClicked,ut=n.dropdownSettingsTextFontFamily,ct=n.dropdownSettingsTextFontSize,st=n.dropdownSettingsTextBold,gt=n.dropdownSettingsTextUnderline,ft=n.dropdownSettingsTextItalic,vt=n.dropdownSettingsHorizontalPadding,pt=n.dropdownSettingsVerticalPadding;return i.default.createElement(nt,{height:C,navBarRegularColor:m,navBarBehavior:J,stickyOffset:u,className:"navbar-desktop"},i.default.createElement(rt,{height:C},i.default.createElement(K,{logoSrc:k,logoCropperOptions:B,hideElement:v||"left"!==w}),i.default.createElement(it,{"data-navbarcontainer":!0,navBarTextAlignment:y,navBarTextFontSize:H,navBarTextFontFamily:R,navBarTextBold:F,navBarTextItalic:E,navBarTextUnderline:z,navBarTextRegularColor:I,navBarTextSpacing:V},0===(null==O?void 0:O.length)&&b?i.default.createElement(et,null,"Navigation will preview here once created"):i.default.createElement(i.default.Fragment,null,null==O?void 0:O.map((function(e){var n=null;return"button"===e.type?n=i.default.createElement(U,c({},e,{disabledRedirect:r,buttonSettingsRoundCorners:L,buttonSettingsBorderWidth:W,buttonSettingsRegularBorder:M,buttonSettingsRegularFill:N,buttonSettingsVerticalPadding:D,buttonSettingsHorizontalPadding:q,buttonSettingsHoverClickedBorder:_,buttonSettingsHoverClickedFill:Z,buttonSettingsTextColorRegular:Y,buttonSettingsTextColorHover:$,buttonSettingsTextColorClicked:G,navBarTextFontSize:H})):"page"===e.type&&(n=i.default.createElement(P,c({},e,{disabledRedirect:r,disabledListClick:d,navBarTextHoverColor:A,navBarTextClickedColor:j,dropdownSettingsInactiveFill:Q,dropdownSettingsInactiveBorder:X,dropdownSettingsHoverClickedFill:tt,dropdownSettingsHoverClickedBorder:ot,dropdownSettingsTextColorRegular:lt,dropdownSettingsTextColorHover:dt,dropdownSettingsTextColorClicked:at,dropdownSettingsTextFontFamily:ut,dropdownSettingsTextFontSize:ct,dropdownSettingsTextBold:st,dropdownSettingsTextUnderline:gt,dropdownSettingsTextItalic:ft,dropdownSettingsHorizontalPadding:vt,dropdownSettingsVerticalPadding:pt,isStatic:g,navBarHoverColor:h,navBarClickedColor:T,rootId:x}))),i.default.createElement(t.Fragment,{key:e.id},n)})))),i.default.createElement(K,{logoSrc:k,logoCropperOptions:B,hideElement:v||"right"!==w})))};Q.propTypes={config:d.default.object,disabledRedirect:d.default.bool,disabledListClick:d.default.bool,stickyOffset:d.default.number,isStatic:d.default.bool,hideLogo:d.default.bool,isPreview:d.default.bool};var X,tt,et=l.default.div(N||(N=s(["\n  font-family: Montserrat-bold, sans-serif;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  font-size: 15px;\n  letter-spacing: 1.5px;\n  text-transform: uppercase;\n"]))),nt=l.default.div(q||(q=s(["\n  display: flex;\n  height: ","px;\n  background-color: ",";\n  padding: 0 50px;\n  width: 100%;\n  margin: auto;\n  align-items: center;\n  flex-shrink: 0;\n  z-index: 1002;\n\n  ",";\n"])),(function(t){return t.height}),(function(t){return t.navBarRegularColor}),(function(t){var n=t.navBarBehavior,o=t.stickyOffset;return"frozen"===n&&e.css(D||(D=s(["\n            position: sticky;\n            top: ","px;\n          "])),o)})),ot=l.default.div(Z||(Z=s(["\n  width: ","px;\n  height: ","px;\n  opacity: ",";\n"])),100,50,(function(t){return t.hideElement?0:1})),rt=l.default.div(_||(_=s(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  max-width: 1120px;\n  margin: auto;\n  height: ","px;\n"])),(function(t){return t.height})),it=l.default.div(Y||(Y=s(["\n  display: flex;\n  flex: 1 1 auto;\n  margin: 0 24px;\n  justify-content: ",";\n  font-size: ","px;\n  font-family: ",";\n  font-weight: ",";\n  font-style: ",";\n  text-decoration: ",";\n  color: ",";\n  height: 100%;\n  align-items: center;\n  width: calc(100% - 250px);\n  overflow-x: auto;\n  overflow-y: hidden;\n\n  > div {\n    margin-right: ","px;\n\n    &:last-child {\n      margin-right: 0;\n    }\n  }\n"])),(function(t){return t.navBarTextAlignment}),(function(t){return t.navBarTextFontSize}),(function(t){return t.navBarTextFontFamily}),(function(t){return t.navBarTextBold?"bold":"normal"}),(function(t){return t.navBarTextItalic?"italic":"normal"}),(function(t){return t.navBarTextUnderline?"underline":"none"}),(function(t){return t.navBarTextRegularColor}),(function(t){return t.navBarTextSpacing})),lt=function(){return i.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"19.94",height:"16.44",viewBox:"0 0 19.94 16.44"},i.default.createElement("path",{d:"M20.41,6.91H3.47a1.5,1.5,0,0,1,0-3H20.41A1.5,1.5,0,0,1,20.41,6.91Z",transform:"translate(-1.97 -3.91)"}),i.default.createElement("path",{d:"M20.41,13.91H3.47a1.5,1.5,0,0,1,0-3H20.41A1.5,1.5,0,0,1,20.41,13.91Z",transform:"translate(-1.97 -3.91)"}),i.default.createElement("path",{d:"M20.41,20.34H3.47a1.5,1.5,0,0,1,0-3H20.41A1.5,1.5,0,0,1,20.41,20.34Z",transform:"translate(-1.97 -3.91)"}))},dt=function(t){var e=t.children,n=t.onClick,o=t.mobileTextAlignment,r=t.link,l=t.isDropdown;return i.default.createElement(at,{onClick:n,mobileTextAlignment:o,"data-link":r,"data-isdropdown":l},e)},at=l.default.div(X||(X=s(["\n    padding: 15px;\n    display: flex;\n    justify-content: ",";\n"])),(function(t){return"center"===t.mobileTextAlignment?"center":"flex-start"}));dt.propTypes={children:d.default.any,onClick:d.default.func,link:d.default.string,isDropdown:d.default.bool};var ut,ct,st=t.memo((function(e){var n=e.link,o=e.disabledRedirect,r=e.title,l=e.buttonSettingsRoundCorners,d=e.buttonSettingsBorderWidth,a=e.buttonSettingsRegularBorder,u=e.buttonSettingsRegularFill,c=e.buttonSettingsHorizontalPadding,s=e.buttonSettingsVerticalPadding,g=e.buttonSettingsHoverClickedBorder,f=e.buttonSettingsHoverClickedFill,v=e.buttonSettingsTextColorRegular,p=e.buttonSettingsTextColorHover,b=e.buttonSettingsTextColorClicked,S=e.mobileTextAlignment,x=null==n?void 0:n.value,C=t.useCallback((function(){x&&!o&&R(x)}),[x,o]);return i.default.createElement(dt,{onClick:C,link:x,mobileTextAlignment:S},i.default.createElement(gt,{buttonSettingsRoundCorners:l,buttonSettingsBorderWidth:d,buttonSettingsRegularBorder:a,buttonSettingsRegularFill:u,buttonSettingsHorizontalPadding:c,buttonSettingsVerticalPadding:s,buttonSettingsHoverClickedBorder:g,buttonSettingsHoverClickedFill:f,buttonSettingsTextColorRegular:v,buttonSettingsTextColorHover:p,buttonSettingsTextColorClicked:b},r))})),gt=l.default.div(tt||(tt=s(["\n  word-break: break-word;\n  line-height: normal;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  border-radius: ","px;\n  border: ","px solid\n    ",";\n  background: ",";\n  padding: ",";\n  color: ",";\n\n  &:hover {\n    border: ","px solid\n      ",";\n    background: ",";\n    color: ",";\n  }\n\n  &:active {\n    border: ","px solid\n      ",";\n    background: ",";\n    color: ",";\n  }\n"])),(function(t){return t.buttonSettingsRoundCorners}),(function(t){return t.buttonSettingsBorderWidth}),(function(t){return t.buttonSettingsRegularBorder}),(function(t){return t.buttonSettingsRegularFill}),(function(t){var e=t.buttonSettingsVerticalPadding,n=t.buttonSettingsHorizontalPadding;return"".concat(e,"px ").concat(n,"px")}),(function(t){return t.buttonSettingsTextColorRegular}),(function(t){return t.buttonSettingsBorderWidth}),(function(t){return t.buttonSettingsHoverClickedBorder}),(function(t){return t.buttonSettingsHoverClickedFill}),(function(t){return t.buttonSettingsTextColorHover}),(function(t){return t.buttonSettingsBorderWidth}),(function(t){return t.buttonSettingsHoverClickedBorder}),(function(t){return t.buttonSettingsHoverClickedFill}),(function(t){return t.buttonSettingsTextColorClicked}));st.propTypes={disabledRedirect:d.default.bool,title:d.default.string,link:d.default.string,buttonSettingsRoundCorners:d.default.number,buttonSettingsBorderWidth:d.default.number,buttonSettingsRegularBorder:d.default.string,buttonSettingsRegularFill:d.default.string,buttonSettingsVerticalPadding:d.default.number,buttonSettingsHorizontalPadding:d.default.number,buttonSettingsHoverClickedBorder:d.default.string,buttonSettingsHoverClickedFill:d.default.string,buttonSettingsTextColorRegular:d.default.string,buttonSettingsTextColorHover:d.default.string,buttonSettingsTextColorClicked:d.default.string};var ft,vt,pt,bt,St,xt,Ct,mt,ht,Tt=t.memo((function(e){var n=e.disabledRedirect,o=e.disabledListClick,r=e.link,l=e.title,d=e.navBarTextHoverColor,a=e.navBarTextClickedColor,u=e.children,c=e.mobileTextAlignment,s=e.isStatic,f=null==r?void 0:r.value,v=g(t.useState(s),2),p=v[0],b=v[1],x=u.length>0,C=t.useCallback((function(){x&&!o?b((function(t){return!t})):x||n||!f||R(f)}),[o,n,x,f]);return i.default.createElement(wt,null,i.default.createElement(dt,{isDropdown:x,link:x?void 0:f,onClick:C,mobileTextAlignment:c},i.default.createElement(z,{navBarTextHoverColor:d,navBarTextClickedColor:a},l," ",x&&i.default.createElement(F,{"data-arrow":!0},p?i.default.createElement(S,{icon:H,rotate:s?-90:90,color:"#ffffff"}):i.default.createElement(S,{icon:H,rotate:-90,color:"#ffffff"})))),p&&x&&i.default.createElement(Bt,{"data-mobile-dropdown-list":!0},u.map((function(t){var e;return i.default.createElement(dt,{key:t.id,onClick:function(){var e;null!==(e=t.link)&&void 0!==e&&e.value&&!n&&R(t.link.value)},link:null===(e=t.link)||void 0===e?void 0:e.value,mobileTextAlignment:c},i.default.createElement(z,{navBarTextHoverColor:d,navBarTextClickedColor:a},t.title))}))))})),wt=l.default.div(ut||(ut=s(["\n  display: flex;\n  flex-direction: column;\n"]))),Bt=l.default.div(ct||(ct=s(["\n  display: flex;\n  flex-direction: column;\n"])));Tt.propTypes={link:d.default.string,disabledRedirect:d.default.bool,disabledListClick:d.default.bool,title:d.default.string,navBarTextHoverColor:d.default.string,navBarTextClickedColor:d.default.string,children:d.default.array,mobileTextAlignment:d.default.string};var kt=function(e){var n=e.config,o=e.stickyOffset,r=void 0===o?0:o,l=e.isConstructor,d=void 0!==l&&l,a=e.isStatic,u=void 0!==a&&a,s=e.disabledRedirect,f=void 0!==s&&s,v=e.disabledListClick,p=void 0!==v&&v,x=g(t.useState(d),2),C=x[0],m=x[1];t.useEffect((function(){d||(document.body.style.overflowY=C?"hidden":"auto")}),[d,C]);var h=n.mobileHeight,T=n.navBarRegularColor,w=n.mobileLogoAlignment,B=n.logoSrc,k=n.logoCropperOptions,y=n.navBarBehavior,H=n.mobileFontSize,R=n.navBarTextFontFamily,F=n.navBarTextBold,E=n.navBarTextItalic,z=n.navBarTextUnderline,I=n.navBarTextRegularColor,P=n.navBarTextSpacing,O=n.buttonSettingsRoundCorners,A=n.buttonSettingsBorderWidth,j=n.buttonSettingsRegularBorder,V=n.buttonSettingsRegularFill,L=n.buttonSettingsHorizontalPadding,W=n.buttonSettingsVerticalPadding,U=n.buttonSettingsHoverClickedFill,M=n.buttonSettingsHoverClickedBorder,N=n.buttonSettingsTextColorRegular,q=n.buttonSettingsTextColorHover,D=n.buttonSettingsTextColorClicked,Z=n.mobileTextAlignment,_=n.navBarTextHoverColor,Y=n.navBarTextClickedColor,G=n.structure,J=t.useCallback((function(){d||p||m((function(t){return!t}))}),[d,p]);return i.default.createElement(yt,{className:"navbar-mobile",navBarBehavior:y,stickyOffset:r,isConstructor:d},i.default.createElement(Rt,{height:h,navBarRegularColor:T,"data-mobile-header":!0},i.default.createElement(zt,{onClick:J,"data-mobile-menu-button":!0},i.default.createElement(S,{icon:lt,color:"#ffffff"})),i.default.createElement(Ft,{mobileLogoAlignment:w},i.default.createElement(Et,null,i.default.createElement($,{source:B+b(k),crop:k})))),i.default.createElement(Ht,{"data-mobile-menu":!0,mobileHeight:h,offsetTop:r+h,isConstructor:d,open:C,navBarRegularColor:T,mobileFontSize:H,navBarTextFontFamily:R,navBarTextBold:F,navBarTextItalic:E,navBarTextUnderline:z,navBarTextRegularColor:I,navBarTextSpacing:P},null==G?void 0:G.map((function(e){var n="any";return"button"===e.type?n=i.default.createElement(st,c({},e,{mobileTextAlignment:Z,disabledRedirect:d,buttonSettingsRoundCorners:O,buttonSettingsBorderWidth:A,buttonSettingsRegularBorder:j,buttonSettingsRegularFill:V,buttonSettingsVerticalPadding:W,buttonSettingsHorizontalPadding:L,buttonSettingsHoverClickedBorder:M,buttonSettingsHoverClickedFill:U,buttonSettingsTextColorRegular:N,buttonSettingsTextColorHover:q,buttonSettingsTextColorClicked:D})):"page"===e.type&&(n=i.default.createElement(Tt,c({},e,{disabledRedirect:f,disabledListClick:p,navBarTextHoverColor:_,navBarTextClickedColor:Y,mobileTextAlignment:Z,isStatic:u}))),i.default.createElement(t.Fragment,{key:e.id},n)}))))},yt=l.default.div(ft||(ft=s(["\n  z-index: 1001;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  ",";\n"])),(function(t){var n=t.navBarBehavior,o=t.stickyOffset,r=t.isConstructor;return"frozen"===n&&!r&&e.css(vt||(vt=s(["\n            position: sticky;\n            top: ","px;\n          "])),o)})),Ht=l.default.div(pt||(pt=s(["\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: ","px;\n  width: 100%;\n  height: ",";\n  ",";\n  transition: height 0.5s ease;\n  background-color: ",";\n  overflow-x: hidden;\n  overflow-y: auto;\n  font-size: ","px;\n  font-family: ",";\n  font-weight: ",";\n  font-style: ",";\n  text-decoration: ",";\n  color: ",";\n  ",";\n"])),(function(t){return t.mobileHeight}),(function(t){return t.isConstructor?"100%":0}),(function(t){return!t.isConstructor&&e.css(bt||(bt=s(["\n            max-height: 350px;\n          "])))}),(function(t){return t.navBarRegularColor}),(function(t){return t.mobileFontSize}),(function(t){return t.navBarTextFontFamily}),(function(t){return t.navBarTextBold?"bold":"normal"}),(function(t){return t.navBarTextItalic?"italic":"normal"}),(function(t){return t.navBarTextUnderline?"underline":"none"}),(function(t){return t.navBarTextRegularColor}),(function(t){var n=t.offsetTop,o=t.open;return!t.isConstructor&&o&&e.css(St||(St=s(["\n            height: calc(100vh - ","px);\n          "])),n)})),Rt=l.default.div(xt||(xt=s(["\n  display: flex;\n  width: 100%;\n  padding: 15px 13px 16px 15px;\n  border: solid 1px rgba(164, 198, 225, 0.39);\n  height: ","px;\n  background-color: ",";\n  align-items: center;\n  overflow: hidden;\n"])),(function(t){return t.height}),(function(t){return t.navBarRegularColor})),Ft=l.default.div(Ct||(Ct=s(["\n  display: flex;\n  flex: 1 1 auto;\n  justify-content: ",";\n"])),(function(t){var e=t.mobileLogoAlignment;return"center"===e?"center":"right"===e?"flex-end":""})),Et=l.default.div(mt||(mt=s(["\n  width: ","px;\n  height: ","px;\n"])),100,50),zt=l.default.div(ht||(ht=s(["\n  display: flex;\n  position: absolute;\n"])));kt.propTypes={config:d.default.object,stickyOffset:d.default.number},exports.NavBar=Q,exports.NavBarMobile=kt,exports.logoImageHeight=50,exports.logoImageWidth=100;
//# sourceMappingURL=index.cjs.js.map

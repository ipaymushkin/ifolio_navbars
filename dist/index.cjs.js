"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("react"),e=require("styled-components"),n=require("prop-types"),o=require("react-dom");function r(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var i=r(t),l=r(e),d=r(n),a=r(o);function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function c(){return c=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},c.apply(this,arguments)}function s(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function g(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var o,r,i=[],l=!0,d=!1;try{for(n=n.call(t);!(l=(o=n.next()).done)&&(i.push(o.value),!e||i.length!==e);l=!0);}catch(t){d=!0,r=t}finally{try{l||null==n.return||n.return()}finally{if(d)throw r}}return i}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return f(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}var v,p=function(t){return Math.floor(t)},b=function(t){if(!t||0===Object.keys(t).length)return"";var e=t.imageBox,n=t.rotate,o=e.x,r=e.y,i=e.height,l=e.width;return"?x=".concat(p(o),"&y=").concat(p(r),"&w=").concat(p(l),"&h=").concat(p(i),"&rotate=").concat(n)},S=function(t){var e=t.icon,n=t.opacity,o=void 0===n?1:n,r=t.hoverOpacity,l=void 0===r?1:r,d=t.color,a=void 0===d?"#000":d,u=t.hoverColor,c=void 0===u?a:u,s=t.size,g=void 0===s?20:s,f=t.rotate,v=t.noCursor,p=t.padding,b=void 0===p?0:p,S=t.width,m=t.height,h=t.tableIcon;return i.default.createElement(C,{color:a,hoverColor:c,size:g,width:S,height:m,opacity:o,hoverOpacity:l,rotate:f,noCursor:v,padding:b,tableIcon:h},x(e))},x=function(t){var e=t;return"function"==typeof t?i.default.createElement(e,null):"string"==typeof t?t:null},C=l.default.div(v||(v=s(["\n  cursor: ",";\n  display: ",";\n  flex: 0 0 auto;\n  align-items: center;\n  font-size: ",";\n  width: ","px;\n  height: ","px;\n  transform: rotate(","deg);\n  transform-origin: 50% 50%;\n  padding: ","px;\n\n  :hover {\n    svg {\n      fill: ",";\n      opacity: ",";\n    }\n  }\n\n  svg {\n    fill: ",";\n    opacity: ",";\n    width: 100%;\n    height: 100%;\n    transition: all ease-in-out 0.3s;\n    vertical-align: ",";\n  }\n"])),(function(t){return t.noCursor?"initial":"pointer"}),(function(t){return t.tableIcon?"table-cell":"flex"}),(function(t){return!t.tableIcon&&"0"}),(function(t){var e=t.size,n=t.width;return n||e}),(function(t){var e=t.size,n=t.height;return n||e}),(function(t){return t.rotate}),(function(t){return t.padding}),(function(t){return t.hoverColor}),(function(t){return t.hoverOpacity}),(function(t){return t.color}),(function(t){return t.opacity}),(function(t){return t.tableIcon&&"middle"}));S.propTypes={color:d.default.string,hoverColor:d.default.string,icon:d.default.oneOfType([d.default.string,d.default.func]),size:d.default.number,padding:d.default.number,opacity:d.default.number,hoverOpacity:d.default.number,rotate:d.default.number,noCursor:d.default.bool,width:d.default.number,height:d.default.number,tableIcon:d.default.bool},S.defaultProps={opacity:1,color:"#000",size:20,padding:0,rotate:0,noCursor:!1,tableIcon:!1};var m,h,T,w,B,k,y,H,R=function(){return i.default.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24"},i.default.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),i.default.createElement("path",{d:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"}))},F=function(t){return window.open(t,"_blank","noreferrer noopener")},E=l.default.div(m||(m=s([""]))),z=l.default.div(h||(h=s(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  height: 100%;\n\n  &:hover {\n    color: ",";\n  }\n\n  &:active {\n    color: ",";\n  }\n"])),(function(t){return t.navBarTextHoverColor}),(function(t){return t.navBarTextClickedColor})),I=l.default(z)(T||(T=s(["\n    padding: 0 10px;\n"]))),P=l.default(z)(w||(w=s(["\n    word-break: break-word;\n"]))),O=t.memo((function(t){var e=t.disabledRedirect,n=t.childs,o=t.dropdownSettingsInactiveFill,r=t.dropdownSettingsInactiveBorder,l=t.dropdownSettingsHoverClickedFill,d=t.dropdownSettingsHoverClickedBorder,c=t.dropdownSettingsTextColorRegular,s=t.dropdownSettingsTextColorHover,g=t.dropdownSettingsTextColorClicked,f=t.dropdownSettingsTextFontFamily,v=t.dropdownSettingsTextFontSize,p=t.dropdownSettingsTextBold,b=t.dropdownSettingsTextUnderline,S=t.dropdownSettingsTextItalic,x=t.dropdownSettingsHorizontalPadding,C=t.dropdownSettingsVerticalPadding,m=t.setOpen,h=t.rootId,T=t.parentRef,w="object"===("undefined"==typeof window?"undefined":u(window)),B=0,k=0;if(w&&T){B=T.getBoundingClientRect().left;var y=T.closest("[data-navbarcontainer]"),H=T.closest(".navbar-desktop");if(y){var R=y.getBoundingClientRect().left;B<R&&(B=R)}if(H){var E=H.getBoundingClientRect();k=E.top+E.height+window.scrollY}}var z=i.default.createElement(L,{"data-list":!0,className:"navbar-list",left:B,top:k,dropdownSettingsInactiveBorder:r},n.map((function(t){var n;return i.default.createElement(V,{key:t.id,dropdownSettingsInactiveFill:o,dropdownSettingsHoverClickedFill:l,dropdownSettingsHoverClickedBorder:d,dropdownSettingsTextColorRegular:c,dropdownSettingsTextColorHover:s,dropdownSettingsTextColorClicked:g,dropdownSettingsTextFontFamily:f,dropdownSettingsTextFontSize:v,dropdownSettingsTextBold:p,dropdownSettingsTextUnderline:b,dropdownSettingsTextItalic:S,dropdownSettingsHorizontalPadding:x,dropdownSettingsVerticalPadding:C,onClick:function(){var n;null!==(n=t.link)&&void 0!==n&&n.value&&!e?(F(t.link.value),m(!1)):m(!1)},"data-link":null===(n=t.link)||void 0===n?void 0:n.value},t.title)})));return w?a.default.createPortal(z,document.getElementById(h)):z})),A=t.memo((function(e){var n=e.disabledRedirect,o=e.disabledListClick,r=e.link,l=e.title,d=e.navBarTextHoverColor,a=e.navBarTextClickedColor,u=e.children,c=e.dropdownSettingsInactiveFill,s=e.dropdownSettingsInactiveBorder,f=e.dropdownSettingsHoverClickedFill,v=e.dropdownSettingsHoverClickedBorder,p=e.dropdownSettingsTextColorRegular,b=e.dropdownSettingsTextColorHover,x=e.dropdownSettingsTextColorClicked,C=e.dropdownSettingsTextFontFamily,m=e.dropdownSettingsTextFontSize,h=e.dropdownSettingsTextBold,T=e.dropdownSettingsTextUnderline,w=e.dropdownSettingsTextItalic,B=e.dropdownSettingsHorizontalPadding,k=e.dropdownSettingsVerticalPadding,y=e.isStatic,H=e.navBarHoverColor,z=e.navBarClickedColor,P=e.rootId,A=g(t.useState(y),2),L=A[0],V=A[1],W=null==r?void 0:r.value,U=function(e){var n=t.createRef(),o=function(t){!n.current||null!=n&&n.current.contains(t.target)||e(t,n.current)};return t.useEffect((function(){return document.addEventListener("mousedown",o),document.addEventListener("touchstart",o),function(){document.removeEventListener("mousedown",o),document.removeEventListener("touchstart",o)}})),n}((function(){V(!1)})),M=g(t.useState(null),2),N=M[0],q=M[1];t.useEffect((function(){q(U.current)}),[]);var D=u.length>0,Z=t.useCallback((function(){D&&!o?V((function(t){return!t})):D||n||!W||F(W)}),[o,n,D,W]);return t.useEffect((function(){var t=function(){V(!1)};return document.body.addEventListener("scroll",t),function(){document.body.removeEventListener("scroll",t)}}),[]),i.default.createElement(j,{ref:U,navBarHoverColor:H,navBarClickedColor:z},i.default.createElement(I,{navBarTextHoverColor:d,navBarTextClickedColor:a,onClick:Z,"data-link":D?void 0:W,"data-isdropdown":D},l," ",D&&i.default.createElement(E,{"data-arrow":!0},L?i.default.createElement(S,{icon:R,rotate:y?-90:90,color:"#ffffff"}):i.default.createElement(S,{icon:R,rotate:-90,color:"#ffffff"}))),L&&D&&i.default.createElement(O,{dropdownSettingsInactiveFill:c,dropdownSettingsInactiveBorder:s,dropdownSettingsHoverClickedFill:f,dropdownSettingsHoverClickedBorder:v,dropdownSettingsTextColorRegular:p,dropdownSettingsTextColorHover:b,dropdownSettingsTextColorClicked:x,dropdownSettingsTextFontFamily:C,dropdownSettingsTextFontSize:m,dropdownSettingsTextBold:h,dropdownSettingsTextUnderline:T,dropdownSettingsTextItalic:w,dropdownSettingsHorizontalPadding:B,dropdownSettingsVerticalPadding:k,childs:u,setOpen:V,disabledRedirect:n,rootId:P,parentRef:N}))})),j=l.default.div(B||(B=s(["\n  position: relative;\n  height: 100%;\n\n  &:hover {\n    background: ",";\n  }\n\n  &:active {\n    background: ",";\n  }\n"])),(function(t){return t.navBarHoverColor}),(function(t){return t.navBarClickedColor})),L=l.default.div(k||(k=s(["\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  left: ","px;\n  top: ","px;\n  z-index: 2;\n  \n  > div {\n    border-right: 2px solid ",";\n    border-left: 2px solid ",";\n    border-bottom: 2px solid ",";\n  }\n  > div:first-child {\n    border-top: 2px solid ",";\n  }\n"])),(function(t){return t.left}),(function(t){return t.top}),(function(t){return t.dropdownSettingsInactiveBorder}),(function(t){return t.dropdownSettingsInactiveBorder}),(function(t){return t.dropdownSettingsInactiveBorder}),(function(t){return t.dropdownSettingsInactiveBorder})),V=l.default.div(y||(y=s(["\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n  cursor: pointer;\n  background: ",";\n  color: ",";\n  font-size: ","px;\n  font-family: ",";\n  font-weight: ",";\n  font-style: ",";\n  text-decoration: ",";\n  padding: ",";\n\n  &:hover {\n    background: ",";\n    border: 2px solid ",";\n    color: ",";\n  }\n\n  &:active {\n    background: ",";\n    border: 2px solid ",";\n    color: ",";\n  }\n"])),(function(t){return t.dropdownSettingsInactiveFill}),(function(t){return t.dropdownSettingsTextColorRegular}),(function(t){return t.dropdownSettingsTextFontSize}),(function(t){return t.dropdownSettingsTextFontFamily}),(function(t){return t.dropdownSettingsTextBold?"bold":"normal"}),(function(t){return t.dropdownSettingsTextItalic?"italic":"normal"}),(function(t){return t.dropdownSettingsTextUnderline?"underline":"none"}),(function(t){var e=t.dropdownSettingsVerticalPadding,n=t.dropdownSettingsHorizontalPadding;return"".concat(e,"px ").concat(n,"px")}),(function(t){return t.dropdownSettingsHoverClickedFill}),(function(t){return t.dropdownSettingsHoverClickedBorder}),(function(t){return t.dropdownSettingsTextColorHover}),(function(t){return t.dropdownSettingsHoverClickedFill}),(function(t){return t.dropdownSettingsHoverClickedBorder}),(function(t){return t.dropdownSettingsTextColorClicked}));A.propTypes={link:d.default.string,disabledRedirect:d.default.bool,disabledListClick:d.default.bool,title:d.default.string,navBarTextHoverColor:d.default.string,navBarTextClickedColor:d.default.string,children:d.default.array,dropdownSettingsInactiveFill:d.default.string,dropdownSettingsInactiveBorder:d.default.string,dropdownSettingsHoverClickedFill:d.default.string,dropdownSettingsHoverClickedBorder:d.default.string,dropdownSettingsTextColorRegular:d.default.string,dropdownSettingsTextColorHover:d.default.string,dropdownSettingsTextColorClicked:d.default.string,dropdownSettingsTextFontFamily:d.default.string,dropdownSettingsTextFontSize:d.default.number,dropdownSettingsTextBold:d.default.bool,dropdownSettingsTextUnderline:d.default.bool,dropdownSettingsTextItalic:d.default.bool,dropdownSettingsHorizontalPadding:d.default.number,dropdownSettingsVerticalPadding:d.default.number,navBarHoverColor:d.default.string,navBarClickedColor:d.default.string,rootId:d.default.string};var W,U,M,N=t.memo((function(e){var n=e.link,o=e.disabledRedirect,r=e.title,l=e.buttonSettingsRoundCorners,d=e.buttonSettingsBorderWidth,a=e.buttonSettingsRegularBorder,u=e.buttonSettingsRegularFill,c=e.buttonSettingsHorizontalPadding,s=e.buttonSettingsVerticalPadding,g=e.buttonSettingsHoverClickedBorder,f=e.buttonSettingsHoverClickedFill,v=e.buttonSettingsTextColorRegular,p=e.buttonSettingsTextColorHover,b=e.buttonSettingsTextColorClicked,S=e.navBarTextFontSize,x=null==n?void 0:n.value,C=t.useCallback((function(){x&&!o&&F(x)}),[x,o]);return i.default.createElement(q,{buttonSettingsRoundCorners:l,buttonSettingsBorderWidth:d,buttonSettingsRegularBorder:a,buttonSettingsRegularFill:u,buttonSettingsHorizontalPadding:c,buttonSettingsVerticalPadding:s,buttonSettingsHoverClickedBorder:g,buttonSettingsHoverClickedFill:f,buttonSettingsTextColorRegular:v,buttonSettingsTextColorHover:p,buttonSettingsTextColorClicked:b,onClick:C,"data-link":x,navBarTextFontSize:S},r)})),q=l.default.div(H||(H=s(["\n  line-height: normal;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  border-radius: ","px;\n  border: ","px solid ",";\n  background: ",";\n  padding: ",";\n  color: ",";\n  height: ","px;\n\n  &:hover {\n    border: ","px solid ",";\n    background: ",";\n    color: ",";\n  }\n\n  &:active {\n    border: ","px solid ",";\n    background: ",";\n    color: ",";\n  }\n"])),(function(t){return t.buttonSettingsRoundCorners}),(function(t){return t.buttonSettingsBorderWidth}),(function(t){return t.buttonSettingsRegularBorder}),(function(t){return t.buttonSettingsRegularFill}),(function(t){var e=t.buttonSettingsHorizontalPadding;return"0 ".concat(e,"px")}),(function(t){return t.buttonSettingsTextColorRegular}),(function(t){var e=t.buttonSettingsVerticalPadding;return t.navBarTextFontSize+2*(e||0)+2*(t.buttonSettingsBorderWidth||0)}),(function(t){return t.buttonSettingsBorderWidth}),(function(t){return t.buttonSettingsHoverClickedBorder}),(function(t){return t.buttonSettingsHoverClickedFill}),(function(t){return t.buttonSettingsTextColorHover}),(function(t){return t.buttonSettingsBorderWidth}),(function(t){return t.buttonSettingsHoverClickedBorder}),(function(t){return t.buttonSettingsHoverClickedFill}),(function(t){return t.buttonSettingsTextColorClicked}));N.propTypes={disabledRedirect:d.default.bool,title:d.default.string,link:d.default.string,buttonSettingsRoundCorners:d.default.number,buttonSettingsBorderWidth:d.default.number,buttonSettingsRegularBorder:d.default.string,buttonSettingsRegularFill:d.default.string,buttonSettingsVerticalPadding:d.default.number,buttonSettingsHorizontalPadding:d.default.number,buttonSettingsHoverClickedBorder:d.default.string,buttonSettingsHoverClickedFill:d.default.string,buttonSettingsTextColorRegular:d.default.string,buttonSettingsTextColorHover:d.default.string,buttonSettingsTextColorClicked:d.default.string,navBarTextFontSize:d.default.number};var D,Z,_,Y,$,G,J=t.forwardRef((function(t,e){var n=t.height,o=t.id,r=t.crop,l=t.source,d=t.alt,a=t.ignoreMaxHeight,u=t.isTurntable,s=t.isHero,g={width:"100%",height:"100%",objectFit:"contain"};return a||(g.maxHeight="600px"),i.default.createElement(Q,{ref:e,isTurntable:u,isHero:s,height:n,id:o},i.default.createElement(K,c({},r.imagePosition,{isHero:s}),i.default.createElement("img",{src:l,alt:d,style:g})))})),K=l.default.div(W||(W=s(["\n  position: relative;\n  left: ","%;\n  top: ","%;\n  width: ","%;\n  height: ","%;\n\n  ",";\n"])),(function(t){return t.x||0}),(function(t){return t.y||0}),(function(t){return t.width||100}),(function(t){return t.height||100}),(function(t){return t.isHero&&e.css(U||(U=s(["\n      position: static;\n      img {\n        object-fit: cover;\n        //margin-left: auto;\n        //margin-right: auto;\n        //width: auto !important;\n      }\n    "])))})),Q=l.default.div(M||(M=s(["\n  width: 100%;\n  height: ",";\n  position: relative;\n  background-color: transparent;\n  overflow: hidden;\n"])),(function(t){var e=t.height,n=t.isTurntable,o=t.isHero;return n||o?"100%":e?e+"px":"100%"}));J.propTypes={height:d.default.number,id:d.default.string,crop:d.default.object,source:d.default.string.isRequired,alt:d.default.string,ignoreMaxHeight:d.default.bool,isTurntable:d.default.bool,isHero:d.default.bool},J.defaultProps={id:"",alt:"",ignoreMaxHeight:!1,crop:{}};var X=function(t){var e=t.logoSrc,n=t.logoCropperOptions,o=t.hideElement,r=t.height;return i.default.createElement(it,{hideElement:o,height:r},i.default.createElement(J,{source:e+b(n),crop:n}))},tt=function(e){var n=e.config,o=e.disabledRedirect,r=void 0!==o&&o,l=e.disabledListClick,d=void 0!==l&&l,a=e.stickyOffset,u=void 0===a?0:a,s=e.isStatic,g=void 0!==s&&s,f=e.hideLogo,v=void 0!==f&&f,p=e.isPreview,b=void 0!==p&&p,S=e.rootId,x=void 0===S?"root":S,C=n.height,m=n.navBarRegularColor,h=n.navBarHoverColor,T=n.navBarClickedColor,w=n.logoAlignment,B=n.logoCropperOptions,k=n.logoSrc,y=n.navBarTextAlignment,H=n.navBarTextFontSize,R=n.navBarTextFontFamily,F=n.navBarTextBold,E=n.navBarTextItalic,z=n.navBarTextUnderline,I=n.navBarTextRegularColor,P=n.structure,O=n.navBarTextHoverColor,j=n.navBarTextClickedColor,L=n.navBarTextSpacing,V=n.buttonSettingsRoundCorners,W=n.buttonSettingsBorderWidth,U=n.buttonSettingsRegularBorder,M=n.buttonSettingsRegularFill,q=n.buttonSettingsHorizontalPadding,D=n.buttonSettingsVerticalPadding,Z=n.buttonSettingsHoverClickedFill,_=n.buttonSettingsHoverClickedBorder,Y=n.buttonSettingsTextColorRegular,$=n.buttonSettingsTextColorHover,G=n.buttonSettingsTextColorClicked,J=n.navBarBehavior,K=n.dropdownSettingsInactiveFill,Q=n.dropdownSettingsInactiveBorder,tt=n.dropdownSettingsHoverClickedFill,et=n.dropdownSettingsHoverClickedBorder,nt=n.dropdownSettingsTextColorRegular,it=n.dropdownSettingsTextColorHover,at=n.dropdownSettingsTextColorClicked,ut=n.dropdownSettingsTextFontFamily,ct=n.dropdownSettingsTextFontSize,st=n.dropdownSettingsTextBold,gt=n.dropdownSettingsTextUnderline,ft=n.dropdownSettingsTextItalic,vt=n.dropdownSettingsHorizontalPadding,pt=n.dropdownSettingsVerticalPadding;return i.default.createElement(rt,{height:C,navBarRegularColor:m,navBarBehavior:J,stickyOffset:u,className:"navbar-desktop"},i.default.createElement(lt,{height:C},i.default.createElement(X,{logoSrc:k,logoCropperOptions:B,hideElement:v||"left"!==w,height:C}),i.default.createElement(dt,{"data-navbarcontainer":!0,navBarTextAlignment:y,navBarTextFontSize:H,navBarTextFontFamily:R,navBarTextBold:F,navBarTextItalic:E,navBarTextUnderline:z,navBarTextRegularColor:I,navBarTextSpacing:L},0===(null==P?void 0:P.length)&&b?i.default.createElement(ot,null,"Navigation will preview here once created"):i.default.createElement(i.default.Fragment,null,null==P?void 0:P.map((function(e){var n=null;return"button"===e.type?n=i.default.createElement(N,c({},e,{disabledRedirect:r,buttonSettingsRoundCorners:V,buttonSettingsBorderWidth:W,buttonSettingsRegularBorder:U,buttonSettingsRegularFill:M,buttonSettingsVerticalPadding:D,buttonSettingsHorizontalPadding:q,buttonSettingsHoverClickedBorder:_,buttonSettingsHoverClickedFill:Z,buttonSettingsTextColorRegular:Y,buttonSettingsTextColorHover:$,buttonSettingsTextColorClicked:G,navBarTextFontSize:H})):"page"===e.type&&(n=i.default.createElement(A,c({},e,{disabledRedirect:r,disabledListClick:d,navBarTextHoverColor:O,navBarTextClickedColor:j,dropdownSettingsInactiveFill:K,dropdownSettingsInactiveBorder:Q,dropdownSettingsHoverClickedFill:tt,dropdownSettingsHoverClickedBorder:et,dropdownSettingsTextColorRegular:nt,dropdownSettingsTextColorHover:it,dropdownSettingsTextColorClicked:at,dropdownSettingsTextFontFamily:ut,dropdownSettingsTextFontSize:ct,dropdownSettingsTextBold:st,dropdownSettingsTextUnderline:gt,dropdownSettingsTextItalic:ft,dropdownSettingsHorizontalPadding:vt,dropdownSettingsVerticalPadding:pt,isStatic:g,navBarHoverColor:h,navBarClickedColor:T,rootId:x}))),i.default.createElement(t.Fragment,{key:e.id},n)})))),i.default.createElement(X,{logoSrc:k,logoCropperOptions:B,hideElement:v||"right"!==w})))};tt.propTypes={config:d.default.object,disabledRedirect:d.default.bool,disabledListClick:d.default.bool,stickyOffset:d.default.number,isStatic:d.default.bool,hideLogo:d.default.bool,isPreview:d.default.bool};var et,nt,ot=l.default.div(D||(D=s(["\n  font-family: Montserrat-bold, sans-serif;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  font-size: 15px;\n  letter-spacing: 1.5px;\n  text-transform: uppercase;\n"]))),rt=l.default.div(Z||(Z=s(["\n  display: flex;\n  height: ","px;\n  background-color: ",";\n  padding: 0 50px;\n  width: 100%;\n  margin: auto;\n  align-items: center;\n  flex-shrink: 0;\n  z-index: 1002;\n\n  ",";\n"])),(function(t){return t.height}),(function(t){return t.navBarRegularColor}),(function(t){var n=t.navBarBehavior,o=t.stickyOffset;return"frozen"===n&&e.css(_||(_=s(["\n            position: sticky;\n            top: ","px;\n          "])),o)})),it=l.default.div(Y||(Y=s(["\n  width: ","px;\n  height: ","px;\n  opacity: ",";\n"])),250,(function(t){return t.height}),(function(t){return t.hideElement?0:1})),lt=l.default.div($||($=s(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  max-width: 1120px;\n  margin: auto;\n  height: ","px;\n"])),(function(t){return t.height})),dt=l.default.div(G||(G=s(["\n  display: flex;\n  flex: 1 1 auto;\n  margin: 0 24px;\n  justify-content: ",";\n  font-size: ","px;\n  font-family: ",";\n  font-weight: ",";\n  font-style: ",";\n  text-decoration: ",";\n  color: ",";\n  height: 100%;\n  align-items: center;\n  width: calc(100% - ","px);\n  overflow-x: auto;\n  overflow-y: hidden;\n\n  > div {\n    margin-right: ","px;\n\n    &:last-child {\n      margin-right: 0;\n    }\n  }\n"])),(function(t){return t.navBarTextAlignment}),(function(t){return t.navBarTextFontSize}),(function(t){return t.navBarTextFontFamily}),(function(t){return t.navBarTextBold?"bold":"normal"}),(function(t){return t.navBarTextItalic?"italic":"normal"}),(function(t){return t.navBarTextUnderline?"underline":"none"}),(function(t){return t.navBarTextRegularColor}),550,(function(t){return t.navBarTextSpacing})),at=function(){return i.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"19.94",height:"16.44",viewBox:"0 0 19.94 16.44"},i.default.createElement("path",{d:"M20.41,6.91H3.47a1.5,1.5,0,0,1,0-3H20.41A1.5,1.5,0,0,1,20.41,6.91Z",transform:"translate(-1.97 -3.91)"}),i.default.createElement("path",{d:"M20.41,13.91H3.47a1.5,1.5,0,0,1,0-3H20.41A1.5,1.5,0,0,1,20.41,13.91Z",transform:"translate(-1.97 -3.91)"}),i.default.createElement("path",{d:"M20.41,20.34H3.47a1.5,1.5,0,0,1,0-3H20.41A1.5,1.5,0,0,1,20.41,20.34Z",transform:"translate(-1.97 -3.91)"}))},ut=function(t){var e=t.children,n=t.onClick,o=t.mobileTextAlignment,r=t.link,l=t.isDropdown;return i.default.createElement(ct,{onClick:n,mobileTextAlignment:o,"data-link":r,"data-isdropdown":l},e)},ct=l.default.div(et||(et=s(["\n    padding: 15px;\n    display: flex;\n    justify-content: ",";\n"])),(function(t){return"center"===t.mobileTextAlignment?"center":"flex-start"}));ut.propTypes={children:d.default.any,onClick:d.default.func,link:d.default.string,isDropdown:d.default.bool};var st,gt,ft=t.memo((function(e){var n=e.link,o=e.disabledRedirect,r=e.title,l=e.buttonSettingsRoundCorners,d=e.buttonSettingsBorderWidth,a=e.buttonSettingsRegularBorder,u=e.buttonSettingsRegularFill,c=e.buttonSettingsHorizontalPadding,s=e.buttonSettingsVerticalPadding,g=e.buttonSettingsHoverClickedBorder,f=e.buttonSettingsHoverClickedFill,v=e.buttonSettingsTextColorRegular,p=e.buttonSettingsTextColorHover,b=e.buttonSettingsTextColorClicked,S=e.mobileTextAlignment,x=null==n?void 0:n.value,C=t.useCallback((function(){x&&!o&&F(x)}),[x,o]);return i.default.createElement(ut,{onClick:C,link:x,mobileTextAlignment:S},i.default.createElement(vt,{buttonSettingsRoundCorners:l,buttonSettingsBorderWidth:d,buttonSettingsRegularBorder:a,buttonSettingsRegularFill:u,buttonSettingsHorizontalPadding:c,buttonSettingsVerticalPadding:s,buttonSettingsHoverClickedBorder:g,buttonSettingsHoverClickedFill:f,buttonSettingsTextColorRegular:v,buttonSettingsTextColorHover:p,buttonSettingsTextColorClicked:b},r))})),vt=l.default.div(nt||(nt=s(["\n  word-break: break-word;\n  line-height: normal;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  border-radius: ","px;\n  border: ","px solid\n    ",";\n  background: ",";\n  padding: ",";\n  color: ",";\n\n  &:hover {\n    border: ","px solid\n      ",";\n    background: ",";\n    color: ",";\n  }\n\n  &:active {\n    border: ","px solid\n      ",";\n    background: ",";\n    color: ",";\n  }\n"])),(function(t){return t.buttonSettingsRoundCorners}),(function(t){return t.buttonSettingsBorderWidth}),(function(t){return t.buttonSettingsRegularBorder}),(function(t){return t.buttonSettingsRegularFill}),(function(t){var e=t.buttonSettingsVerticalPadding,n=t.buttonSettingsHorizontalPadding;return"".concat(e,"px ").concat(n,"px")}),(function(t){return t.buttonSettingsTextColorRegular}),(function(t){return t.buttonSettingsBorderWidth}),(function(t){return t.buttonSettingsHoverClickedBorder}),(function(t){return t.buttonSettingsHoverClickedFill}),(function(t){return t.buttonSettingsTextColorHover}),(function(t){return t.buttonSettingsBorderWidth}),(function(t){return t.buttonSettingsHoverClickedBorder}),(function(t){return t.buttonSettingsHoverClickedFill}),(function(t){return t.buttonSettingsTextColorClicked}));ft.propTypes={disabledRedirect:d.default.bool,title:d.default.string,link:d.default.string,buttonSettingsRoundCorners:d.default.number,buttonSettingsBorderWidth:d.default.number,buttonSettingsRegularBorder:d.default.string,buttonSettingsRegularFill:d.default.string,buttonSettingsVerticalPadding:d.default.number,buttonSettingsHorizontalPadding:d.default.number,buttonSettingsHoverClickedBorder:d.default.string,buttonSettingsHoverClickedFill:d.default.string,buttonSettingsTextColorRegular:d.default.string,buttonSettingsTextColorHover:d.default.string,buttonSettingsTextColorClicked:d.default.string};var pt,bt,St,xt,Ct,mt,ht,Tt,wt,Bt=t.memo((function(e){var n=e.disabledRedirect,o=e.disabledListClick,r=e.link,l=e.title,d=e.navBarTextHoverColor,a=e.navBarTextClickedColor,u=e.children,c=e.mobileTextAlignment,s=e.isStatic,f=null==r?void 0:r.value,v=g(t.useState(s),2),p=v[0],b=v[1],x=u.length>0,C=t.useCallback((function(){x&&!o?b((function(t){return!t})):x||n||!f||F(f)}),[o,n,x,f]);return i.default.createElement(kt,null,i.default.createElement(ut,{isDropdown:x,link:x?void 0:f,onClick:C,mobileTextAlignment:c},i.default.createElement(P,{navBarTextHoverColor:d,navBarTextClickedColor:a},l," ",x&&i.default.createElement(E,{"data-arrow":!0},p?i.default.createElement(S,{icon:R,rotate:s?-90:90,color:"#ffffff"}):i.default.createElement(S,{icon:R,rotate:-90,color:"#ffffff"})))),p&&x&&i.default.createElement(yt,{"data-mobile-dropdown-list":!0},u.map((function(t){var e;return i.default.createElement(ut,{key:t.id,onClick:function(){var e;null!==(e=t.link)&&void 0!==e&&e.value&&!n&&F(t.link.value)},link:null===(e=t.link)||void 0===e?void 0:e.value,mobileTextAlignment:c},i.default.createElement(P,{navBarTextHoverColor:d,navBarTextClickedColor:a},t.title))}))))})),kt=l.default.div(st||(st=s(["\n  display: flex;\n  flex-direction: column;\n"]))),yt=l.default.div(gt||(gt=s(["\n  display: flex;\n  flex-direction: column;\n"])));Bt.propTypes={link:d.default.string,disabledRedirect:d.default.bool,disabledListClick:d.default.bool,title:d.default.string,navBarTextHoverColor:d.default.string,navBarTextClickedColor:d.default.string,children:d.default.array,mobileTextAlignment:d.default.string};var Ht=function(e){var n=e.config,o=e.stickyOffset,r=void 0===o?0:o,l=e.isConstructor,d=void 0!==l&&l,a=e.isStatic,u=void 0!==a&&a,s=e.disabledRedirect,f=void 0!==s&&s,v=e.disabledListClick,p=void 0!==v&&v,x=g(t.useState(d),2),C=x[0],m=x[1];t.useEffect((function(){d||(document.body.style.overflowY=C?"hidden":"auto")}),[d,C]);var h=n.mobileHeight,T=n.navBarRegularColor,w=n.mobileLogoAlignment,B=n.logoSrc,k=n.logoCropperOptions,y=n.navBarBehavior,H=n.mobileFontSize,R=n.navBarTextFontFamily,F=n.navBarTextBold,E=n.navBarTextItalic,z=n.navBarTextUnderline,I=n.navBarTextRegularColor,P=n.navBarTextSpacing,O=n.buttonSettingsRoundCorners,A=n.buttonSettingsBorderWidth,j=n.buttonSettingsRegularBorder,L=n.buttonSettingsRegularFill,V=n.buttonSettingsHorizontalPadding,W=n.buttonSettingsVerticalPadding,U=n.buttonSettingsHoverClickedFill,M=n.buttonSettingsHoverClickedBorder,N=n.buttonSettingsTextColorRegular,q=n.buttonSettingsTextColorHover,D=n.buttonSettingsTextColorClicked,Z=n.mobileTextAlignment,_=n.navBarTextHoverColor,Y=n.navBarTextClickedColor,$=n.structure,G=t.useCallback((function(){d||p||m((function(t){return!t}))}),[d,p]);return i.default.createElement(Rt,{className:"navbar-mobile",navBarBehavior:y,stickyOffset:r,isConstructor:d},i.default.createElement(Et,{height:h,navBarRegularColor:T,"data-mobile-header":!0},i.default.createElement(Pt,{onClick:G,"data-mobile-menu-button":!0},i.default.createElement(S,{icon:at,color:"#ffffff"})),i.default.createElement(zt,{mobileLogoAlignment:w},i.default.createElement(It,null,i.default.createElement(J,{source:B+b(k),crop:k})))),i.default.createElement(Ft,{"data-mobile-menu":!0,mobileHeight:h,offsetTop:r+h,isConstructor:d,open:C,navBarRegularColor:T,mobileFontSize:H,navBarTextFontFamily:R,navBarTextBold:F,navBarTextItalic:E,navBarTextUnderline:z,navBarTextRegularColor:I,navBarTextSpacing:P},null==$?void 0:$.map((function(e){var n="any";return"button"===e.type?n=i.default.createElement(ft,c({},e,{mobileTextAlignment:Z,disabledRedirect:d,buttonSettingsRoundCorners:O,buttonSettingsBorderWidth:A,buttonSettingsRegularBorder:j,buttonSettingsRegularFill:L,buttonSettingsVerticalPadding:W,buttonSettingsHorizontalPadding:V,buttonSettingsHoverClickedBorder:M,buttonSettingsHoverClickedFill:U,buttonSettingsTextColorRegular:N,buttonSettingsTextColorHover:q,buttonSettingsTextColorClicked:D})):"page"===e.type&&(n=i.default.createElement(Bt,c({},e,{disabledRedirect:f,disabledListClick:p,navBarTextHoverColor:_,navBarTextClickedColor:Y,mobileTextAlignment:Z,isStatic:u}))),i.default.createElement(t.Fragment,{key:e.id},n)}))))},Rt=l.default.div(pt||(pt=s(["\n  z-index: 1001;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  ",";\n"])),(function(t){var n=t.navBarBehavior,o=t.stickyOffset,r=t.isConstructor;return"frozen"===n&&!r&&e.css(bt||(bt=s(["\n            position: sticky;\n            top: ","px;\n          "])),o)})),Ft=l.default.div(St||(St=s(["\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: ","px;\n  width: 100%;\n  height: ",";\n  ",";\n  transition: height 0.5s ease;\n  background-color: ",";\n  overflow-x: hidden;\n  overflow-y: auto;\n  font-size: ","px;\n  font-family: ",";\n  font-weight: ",";\n  font-style: ",";\n  text-decoration: ",";\n  color: ",";\n  ",";\n"])),(function(t){return t.mobileHeight}),(function(t){return t.isConstructor?"auto":0}),(function(t){return t.isConstructor&&e.css(xt||(xt=s(["\n            max-height: 350px;\n          "])))}),(function(t){return t.navBarRegularColor}),(function(t){return t.mobileFontSize}),(function(t){return t.navBarTextFontFamily}),(function(t){return t.navBarTextBold?"bold":"normal"}),(function(t){return t.navBarTextItalic?"italic":"normal"}),(function(t){return t.navBarTextUnderline?"underline":"none"}),(function(t){return t.navBarTextRegularColor}),(function(t){var n=t.offsetTop,o=t.open;return!t.isConstructor&&o&&e.css(Ct||(Ct=s(["\n            height: calc(100vh - ","px);\n          "])),n)})),Et=l.default.div(mt||(mt=s(["\n  display: flex;\n  width: 100%;\n  padding: 15px 13px 16px 15px;\n  border: solid 1px rgba(164, 198, 225, 0.39);\n  height: ","px;\n  background-color: ",";\n  align-items: center;\n  overflow: hidden;\n"])),(function(t){return t.height}),(function(t){return t.navBarRegularColor})),zt=l.default.div(ht||(ht=s(["\n  display: flex;\n  flex: 1 1 auto;\n  justify-content: ",";\n"])),(function(t){var e=t.mobileLogoAlignment;return"center"===e?"center":"right"===e?"flex-end":""})),It=l.default.div(Tt||(Tt=s(["\n  width: ","px;\n  height: ","px;\n"])),250,80),Pt=l.default.div(wt||(wt=s(["\n  display: flex;\n  position: absolute;\n"])));Ht.propTypes={config:d.default.object,stickyOffset:d.default.number},exports.NavBar=tt,exports.NavBarMobile=Ht,exports.logoImageHeight=80,exports.logoImageWidth=250;
//# sourceMappingURL=index.cjs.js.map

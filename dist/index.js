import { memo, useState, createRef, useEffect, useCallback, forwardRef, Fragment } from 'react';
import l, { css } from 'styled-components';
import u from 'prop-types';
import { jsxs, jsx } from 'react/jsx-runtime';

function s(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,o);}return e}function p(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?s(Object(e),!0).forEach((function(t){f(n,t,e[t]);})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):s(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t));}));}return n}function f(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function v(n,t){return t||(t=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(t)}}))}function b(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==e)return;var o,r,i=[],d=!0,l=!1;try{for(e=e.call(n);!(d=(o=e.next()).done)&&(i.push(o.value),!t||i.length!==t);d=!0);}catch(n){l=!0,r=n;}finally{try{d||null==e.return||e.return();}finally{if(l)throw r}}return i}(n,t)||function(n,t){if(!n)return;if("string"==typeof n)return h(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);"Object"===e&&n.constructor&&(e=n.constructor.name);if("Map"===e||"Set"===e)return Array.from(n);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return h(n,t)}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,o=new Array(t);e<t;e++)o[e]=n[e];return o}var x,S=function(n){return Math.floor(n)},w=function(n){if(!n||0===Object.keys(n).length)return "";var t=n.imageBox,e=n.rotate,o=t.x,r=t.y,i=t.height,d=t.width;return "?x=".concat(S(o),"&y=").concat(S(r),"&w=").concat(S(d),"&h=").concat(S(i),"&rotate=").concat(e)},C=function(n){var t=n.icon,e=n.opacity,o=void 0===e?1:e,r=n.hoverOpacity,i=void 0===r?1:r,d=n.color,l=void 0===d?"#000":d,a=n.hoverColor,u=void 0===a?l:a,g=n.size,s=void 0===g?20:g,p=n.rotate,f=n.noCursor,v=n.padding,b=void 0===v?0:v,h=n.width,x=n.height,S=n.tableIcon;return jsx(m,{color:l,hoverColor:u,size:s,width:h,height:x,opacity:o,hoverOpacity:i,rotate:p,noCursor:f,padding:b,tableIcon:S,children:T(t)})},T=function(n){return "function"==typeof n?jsx(n,{}):"string"==typeof n?n:null},m=l.div(x||(x=v(["\n  cursor: ",";\n  display: ",";\n  flex: 0 0 auto;\n  align-items: center;\n  font-size: ",";\n  width: ","px;\n  height: ","px;\n  transform: rotate(","deg);\n  transform-origin: 50% 50%;\n  padding: ","px;\n\n  :hover {\n    svg {\n      fill: ",";\n      opacity: ",";\n    }\n  }\n\n  svg {\n    fill: ",";\n    opacity: ",";\n    width: 100%;\n    height: 100%;\n    transition: all ease-in-out 0.3s;\n    vertical-align: ",";\n  }\n"])),(function(n){return n.noCursor?"initial":"pointer"}),(function(n){return n.tableIcon?"table-cell":"flex"}),(function(n){return !n.tableIcon&&"0"}),(function(n){var t=n.size,e=n.width;return e||t}),(function(n){var t=n.size,e=n.height;return e||t}),(function(n){return n.rotate}),(function(n){return n.padding}),(function(n){return n.hoverColor}),(function(n){return n.hoverOpacity}),(function(n){return n.color}),(function(n){return n.opacity}),(function(n){return n.tableIcon&&"middle"}));C.propTypes={color:u.string,hoverColor:u.string,icon:u.oneOfType([u.string,u.func]),size:u.number,padding:u.number,opacity:u.number,hoverOpacity:u.number,rotate:u.number,noCursor:u.bool,width:u.number,height:u.number,tableIcon:u.bool},C.defaultProps={opacity:1,color:"#000",size:20,padding:0,rotate:0,noCursor:!1,tableIcon:!1};var B,y,k,H,F,R,O=function(){return jsxs("svg",{height:"24",viewBox:"0 0 24 24",width:"24",children:[jsx("path",{d:"M0 0h24v24H0V0z",fill:"none"}),jsx("path",{d:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"})]})},z=function(n){return window.open(n,"_blank","noreferrer noopener")},P=memo((function(e){var i=e.disabledRedirect,d=e.disabledListClick,l=e.link,a=e.title,u=e.navBarTextHoverColor,s=e.navBarTextClickedColor,p=e.children,f=e.dropdownSettingsInactiveFill,v=e.dropdownSettingsInactiveBorder,h=e.dropdownSettingsHoverClickedFill,x=e.dropdownSettingsHoverClickedBorder,S=e.dropdownSettingsTextColorRegular,w=e.dropdownSettingsTextColorHover,T=e.dropdownSettingsTextColorClicked,m=e.dropdownSettingsTextFontFamily,B=e.dropdownSettingsTextFontSize,y=e.dropdownSettingsTextBold,k=e.dropdownSettingsTextUnderline,H=e.dropdownSettingsTextItalic,F=e.dropdownSettingsHorizontalPadding,R=e.dropdownSettingsVerticalPadding,P=b(useState(!1),2),M=P[0],U=P[1],W=function(e){var o=createRef(),r=function(n){!o.current||null!=o&&o.current.contains(n.target)||e(n,o.current);};return useEffect((function(){return document.addEventListener("mousedown",r),document.addEventListener("touchstart",r),function(){document.removeEventListener("mousedown",r),document.removeEventListener("touchstart",r);}})),o}((function(){U(!1);})),E=p.length>0,D=useCallback((function(){E&&!d?U((function(n){return !n})):E||i||!l||z(l);}),[d,i,E,l]);return jsxs(I,{ref:W,children:[jsxs(j,{navBarTextHoverColor:u,navBarTextClickedColor:s,onClick:D,children:[a," ",E&&jsx(L,{children:jsx(C,M?{icon:O,rotate:-90,color:"#ffffff"}:{icon:O,rotate:180,color:"#ffffff"})})]}),M&&jsx(A,{children:p.map((function(n){return jsx(V,{dropdownSettingsInactiveFill:f,dropdownSettingsInactiveBorder:v,dropdownSettingsHoverClickedFill:h,dropdownSettingsHoverClickedBorder:x,dropdownSettingsTextColorRegular:S,dropdownSettingsTextColorHover:w,dropdownSettingsTextColorClicked:T,dropdownSettingsTextFontFamily:m,dropdownSettingsTextFontSize:B,dropdownSettingsTextBold:y,dropdownSettingsTextUnderline:k,dropdownSettingsTextItalic:H,dropdownSettingsHorizontalPadding:F,dropdownSettingsVerticalPadding:R,onClick:function(){n.link&&!i?(z(n.link),U(!1)):U(!1);},children:n.title},n.id)}))})]})})),I=l.div(B||(B=v(["\n  position: relative;\n"]))),j=l.div(y||(y=v(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  height: 100%;\n\n  &:hover {\n    color: ",";\n  }\n  &:active {\n    color: ",";\n  }\n"])),(function(n){return n.navBarTextHoverColor}),(function(n){return n.navBarTextClickedColor})),A=l.div(k||(k=v(["\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 100%;\n  left: 0;\n"]))),L=l.div(H||(H=v([""]))),V=l.div(F||(F=v(["\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n  cursor: pointer;\n  background: ",";\n  border: 2px solid ",";\n  color: ",";\n  font-size: ","px;\n  font-family: ",";\n  font-weight: ",";\n  font-style: ",";\n  text-decoration: ",";\n  padding: ",";\n\n  &:hover {\n    background: ",";\n    border: 2px solid ",";\n    color: ",";\n  }\n  &:active {\n    background: ",";\n    border: 2px solid ",";\n    color: ",";\n  }\n"])),(function(n){return n.dropdownSettingsInactiveFill}),(function(n){return n.dropdownSettingsInactiveBorder}),(function(n){return n.dropdownSettingsTextColorRegular}),(function(n){return n.dropdownSettingsTextFontSize}),(function(n){return n.dropdownSettingsTextFontFamily}),(function(n){return n.dropdownSettingsTextBold?"bold":"normal"}),(function(n){return n.dropdownSettingsTextItalic?"italic":"normal"}),(function(n){return n.dropdownSettingsTextUnderline?"underline":"none"}),(function(n){var t=n.dropdownSettingsVerticalPadding,e=n.dropdownSettingsHorizontalPadding;return "".concat(t,"px ").concat(e,"px")}),(function(n){return n.dropdownSettingsHoverClickedFill}),(function(n){return n.dropdownSettingsHoverClickedBorder}),(function(n){return n.dropdownSettingsTextColorHover}),(function(n){return n.dropdownSettingsHoverClickedFill}),(function(n){return n.dropdownSettingsHoverClickedBorder}),(function(n){return n.dropdownSettingsTextColorClicked}));P.propTypes={link:u.string,disabledRedirect:u.bool,disabledListClick:u.bool,title:u.string,navBarTextHoverColor:u.string,navBarTextClickedColor:u.string,children:u.array,dropdownSettingsInactiveFill:u.string,dropdownSettingsInactiveBorder:u.string,dropdownSettingsHoverClickedFill:u.string,dropdownSettingsHoverClickedBorder:u.string,dropdownSettingsTextColorRegular:u.string,dropdownSettingsTextColorHover:u.string,dropdownSettingsTextColorClicked:u.string,dropdownSettingsTextFontFamily:u.string,dropdownSettingsTextFontSize:u.number,dropdownSettingsTextBold:u.bool,dropdownSettingsTextUnderline:u.bool,dropdownSettingsTextItalic:u.bool,dropdownSettingsHorizontalPadding:u.number,dropdownSettingsVerticalPadding:u.number};var M,U,W,E=memo((function(n){var t=n.link,e=n.disabledRedirect,o=n.title,i=n.buttonSettingsRoundCorners,d=n.buttonSettingsBorderWidth,l=n.buttonSettingsRegularBorder,a=n.buttonSettingsRegularFill,u=n.buttonSettingsHorizontalPadding,g=n.buttonSettingsVerticalPadding,s=n.buttonSettingsHoverClickedBorder,p=n.buttonSettingsHoverClickedFill,f=n.buttonSettingsTextColorRegular,v=n.buttonSettingsTextColorHover,b=n.buttonSettingsTextColorClicked,h=useCallback((function(){t&&!e&&z(t);}),[t,e]);return jsx(D,{buttonSettingsRoundCorners:i,buttonSettingsBorderWidth:d,buttonSettingsRegularBorder:l,buttonSettingsRegularFill:a,buttonSettingsHorizontalPadding:u,buttonSettingsVerticalPadding:g,buttonSettingsHoverClickedBorder:s,buttonSettingsHoverClickedFill:p,buttonSettingsTextColorRegular:f,buttonSettingsTextColorHover:v,buttonSettingsTextColorClicked:b,onClick:h,children:o})})),D=l.div(R||(R=v(["\n  margin: 10px 0;\n  line-height: normal;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  border-radius: ","px;\n  border: ","px solid\n    ",";\n  background: ",";\n  padding: ",";\n  color: ",";\n\n  &:hover {\n    border: ","px solid\n      ",";\n    background: ",";\n    color: ",";\n  }\n\n  &:active {\n    border: ","px solid\n      ",";\n    background: ",";\n    color: ",";\n  }\n"])),(function(n){return n.buttonSettingsRoundCorners}),(function(n){return n.buttonSettingsBorderWidth}),(function(n){return n.buttonSettingsRegularBorder}),(function(n){return n.buttonSettingsRegularFill}),(function(n){var t=n.buttonSettingsVerticalPadding,e=n.buttonSettingsHorizontalPadding;return "".concat(t,"px ").concat(e,"px")}),(function(n){return n.buttonSettingsTextColorRegular}),(function(n){return n.buttonSettingsBorderWidth}),(function(n){return n.buttonSettingsHoverClickedBorder}),(function(n){return n.buttonSettingsHoverClickedFill}),(function(n){return n.buttonSettingsTextColorHover}),(function(n){return n.buttonSettingsBorderWidth}),(function(n){return n.buttonSettingsHoverClickedBorder}),(function(n){return n.buttonSettingsHoverClickedFill}),(function(n){return n.buttonSettingsTextColorClicked}));E.propTypes={disabledRedirect:u.bool,title:u.string,link:u.string,buttonSettingsRoundCorners:u.number,buttonSettingsBorderWidth:u.number,buttonSettingsRegularBorder:u.string,buttonSettingsRegularFill:u.string,buttonSettingsVerticalPadding:u.number,buttonSettingsHorizontalPadding:u.number,buttonSettingsHoverClickedBorder:u.string,buttonSettingsHoverClickedFill:u.string,buttonSettingsTextColorRegular:u.string,buttonSettingsTextColorHover:u.string,buttonSettingsTextColorClicked:u.string};var Z,q,$,_,G,J=forwardRef((function(n,t){var e=n.height,o=n.id,r=n.crop,i=n.source,d=n.alt,l=n.ignoreMaxHeight,a=n.isTurntable,u=n.isHero,g={width:"100%",height:"100%",objectFit:"cover"};return l||(g.maxHeight="600px"),jsx(N,{ref:t,isTurntable:a,isHero:u,height:e,id:o,children:jsx(K,p(p({},r.imagePosition),{},{isHero:u,children:jsx("img",{src:i,alt:d,style:g})}))})})),K=l.div(M||(M=v(["\n  position: relative;\n  left: ","%;\n  top: ","%;\n  width: ","%;\n  height: ","%;\n\n  ",";\n"])),(function(n){return n.x||0}),(function(n){return n.y||0}),(function(n){return n.width||100}),(function(n){return n.height||100}),(function(n){return n.isHero&&css(U||(U=v(["\n      position: static;\n      img {\n        object-fit: cover;\n        //margin-left: auto;\n        //margin-right: auto;\n        //width: auto !important;\n      }\n    "])))})),N=l.div(W||(W=v(["\n  width: 100%;\n  height: ",";\n  position: relative;\n  background-color: transparent;\n  overflow: hidden;\n"])),(function(n){var t=n.height,e=n.isTurntable,o=n.isHero;return e||o?"100%":t?t+"px":"100%"}));J.propTypes={height:u.number,id:u.string,crop:u.object,source:u.string.isRequired,alt:u.string,ignoreMaxHeight:u.bool,isTurntable:u.bool,isHero:u.bool},J.defaultProps={id:"",alt:"",ignoreMaxHeight:!1,crop:{}};var Q=function(n){var t=n.config,e=n.disabledRedirect,o=void 0!==e&&e,r=n.disabledListClick,i=void 0!==r&&r,l=n.stickyOffset,a=void 0===l?0:l,u=t.height,s=t.navBarRegularColor,f=t.logoAlignment,v=t.logoCropperOptions,b=t.logoSrc,h=t.navBarTextAlignment,x=t.navBarTextFontSize,S=t.navBarTextFontFamily,C=t.navBarTextBold,T=t.navBarTextItalic,m=t.navBarTextUnderline,B=t.navBarTextRegularColor,y=t.structure,k=t.navBarTextHoverColor,H=t.navBarTextClickedColor,F=t.navBarTextSpacing,R=t.buttonSettingsRoundCorners,O=t.buttonSettingsBorderWidth,z=t.buttonSettingsRegularBorder,I=t.buttonSettingsRegularFill,j=t.buttonSettingsHorizontalPadding,A=t.buttonSettingsVerticalPadding,L=t.buttonSettingsHoverClickedFill,V=t.buttonSettingsHoverClickedBorder,M=t.buttonSettingsTextColorRegular,U=t.buttonSettingsTextColorHover,W=t.buttonSettingsTextColorClicked,D=t.navBarBehavior,Z=t.dropdownSettingsInactiveFill,q=t.dropdownSettingsInactiveBorder,$=t.dropdownSettingsHoverClickedFill,_=t.dropdownSettingsHoverClickedBorder,G=t.dropdownSettingsTextColorRegular,K=t.dropdownSettingsTextColorHover,N=t.dropdownSettingsTextColorClicked,Q=t.dropdownSettingsTextFontFamily,X=t.dropdownSettingsTextFontSize,Y=t.dropdownSettingsTextBold,nn=t.dropdownSettingsTextUnderline,tn=t.dropdownSettingsTextItalic,en=t.dropdownSettingsHorizontalPadding,an=t.dropdownSettingsVerticalPadding,un=jsx(rn,{children:jsx(J,{source:b+w(v),crop:v})});return jsx(on,{height:u,navBarRegularColor:s,navBarBehavior:D,stickyOffset:a,children:jsxs(dn,{height:u,children:["left"===f&&un,jsx(ln,{navBarTextAlignment:h,navBarTextFontSize:x,navBarTextFontFamily:S,navBarTextBold:C,navBarTextItalic:T,navBarTextUnderline:m,navBarTextRegularColor:B,navBarTextSpacing:F,logoAlignment:f,children:(y||[]).map((function(n){var t=null;return "button"===n.type?t=jsx(E,p(p({},n),{},{disabledRedirect:o,buttonSettingsRoundCorners:R,buttonSettingsBorderWidth:O,buttonSettingsRegularBorder:z,buttonSettingsRegularFill:I,buttonSettingsVerticalPadding:A,buttonSettingsHorizontalPadding:j,buttonSettingsHoverClickedBorder:V,buttonSettingsHoverClickedFill:L,buttonSettingsTextColorRegular:M,buttonSettingsTextColorHover:U,buttonSettingsTextColorClicked:W})):"page"===n.type&&(t=jsx(P,p(p({},n),{},{disabledRedirect:o,disabledListClick:i,navBarTextHoverColor:k,navBarTextClickedColor:H,dropdownSettingsInactiveFill:Z,dropdownSettingsInactiveBorder:q,dropdownSettingsHoverClickedFill:$,dropdownSettingsHoverClickedBorder:_,dropdownSettingsTextColorRegular:G,dropdownSettingsTextColorHover:K,dropdownSettingsTextColorClicked:N,dropdownSettingsTextFontFamily:Q,dropdownSettingsTextFontSize:X,dropdownSettingsTextBold:Y,dropdownSettingsTextUnderline:nn,dropdownSettingsTextItalic:tn,dropdownSettingsHorizontalPadding:en,dropdownSettingsVerticalPadding:an}))),jsx(Fragment,{children:t},n.id)}))}),"right"===f&&un]})})};Q.propTypes={config:u.object,disabledRedirect:u.bool,disabledListClick:u.bool,stickyOffset:u.number};var X,Y,nn,tn,en,on=l.div(Z||(Z=v(["\n  display: flex;\n  height: ","px;\n  background-color: ",";\n  padding: 0 50px;\n  width: 100%;\n  margin: auto;\n  align-items: center;\n  flex-shrink: 0;\n  z-index: 1001;\n\n  ",";\n"])),(function(n){return n.height}),(function(n){return n.navBarRegularColor}),(function(n){var t=n.navBarBehavior,e=n.stickyOffset;return "frozen"===t&&css(q||(q=v(["\n      position: sticky;\n      top: ","px;\n    "])),e)})),rn=l.div($||($=v(["\n  width: ","px;\n  height: ","px;\n"])),100,50),dn=l.div(_||(_=v(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  max-width: 1120px;\n  margin: auto;\n  height: ","px;\n"])),(function(n){return n.height})),ln=l.div(G||(G=v(["\n  display: flex;\n  flex: 1 1 auto;\n  margin: ",";\n  justify-content: ",";\n  font-size: ","px;\n  font-family: ",";\n  font-weight: ",";\n  font-style: ",";\n  text-decoration: ",";\n  color: ",";\n  height: 100%;\n  > div {\n    margin-right: ","px;\n    &:last-child {\n      margin-right: 0;\n    }\n  }\n"])),(function(n){return "right"===n.logoAlignment?"0 24px 0 0":"0 0 0 24px"}),(function(n){return n.navBarTextAlignment}),(function(n){return n.navBarTextFontSize}),(function(n){return n.navBarTextFontFamily}),(function(n){return n.navBarTextBold?"bold":"normal"}),(function(n){return n.navBarTextItalic?"italic":"normal"}),(function(n){return n.navBarTextUnderline?"underline":"none"}),(function(n){return n.navBarTextRegularColor}),(function(n){return n.navBarTextSpacing})),an=function(){return jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"27.03",height:"16",viewBox:"0 0 27.03 16",children:[jsx("path",{d:"M1.5,6.5a1,1,0,1,0,0,2h25a1,1,0,1,0,0-2H1.5Z",transform:"translate(-0.49 -6.5)"}),jsx("path",{d:"M1.5,13.5a1,1,0,1,0,0,2h25a1,1,0,1,0,0-2H1.5Z",transform:"translate(-0.49 -6.5)"}),jsx("path",{d:"M1.5,20.5a1,1,0,1,0,0,2h25a1,1,0,1,0,0-2H1.5Z",transform:"translate(-0.49 -6.5)"})]})},un=function(n){var t=n.config,e=n.stickyOffset,o=void 0===e?0:e,r=t.mobileHeight,i=t.navBarRegularColor,d=t.mobileLogoAlignment,l=t.logoSrc,a=t.logoCropperOptions,u=t.navBarBehavior;return jsxs(cn,{height:r,navBarRegularColor:i,navBarBehavior:u,stickyOffset:o,children:[jsx(pn,{children:jsx(C,{icon:an,color:"#ffffff"})}),jsx(gn,{mobileLogoAlignment:d,children:jsx(sn,{children:jsx(J,{source:l+w(a),crop:a})})})]})},cn=l.div(X||(X=v(["\n  z-index: 1001;\n  display: flex;\n  width: 100%;\n  padding: 15px 13px 16px 15px;\n  border-radius: 3px;\n  border: solid 1px rgba(164, 198, 225, 0.39);\n  height: ","px;\n  background-color: ",";\n  align-items: center;\n  position: relative;\n  ",";\n"])),(function(n){return n.height}),(function(n){return n.navBarRegularColor}),(function(n){var t=n.navBarBehavior,e=n.stickyOffset;return "frozen"===t&&css(Y||(Y=v(["\n            position: sticky;\n            top: ","px;\n          "])),e)})),gn=l.div(nn||(nn=v(["\n  display: flex;\n  flex: 1 1 auto;\n  justify-content: ",";\n"])),(function(n){var t=n.mobileLogoAlignment;return "center"===t?"center":"right"===t?"flex-end":""})),sn=l.div(tn||(tn=v(["\n  width: ","px;\n  height: ","px;\n"])),100,50),pn=l.div(en||(en=v(["\n  display: flex;\n  position: absolute;\n"])));un.propTypes={config:u.object,stickyOffset:u.number};

export { Q as NavBar, un as NavBarMobile };

import t,{useEffect as n,createRef as e,memo as o,useState as r,useCallback as i,forwardRef as l,Fragment as d}from"react";import a,{css as u}from"styled-components";import c from"prop-types";import s from"react-dom";function g(t){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},g(t)}function v(){return v=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t},v.apply(this,arguments)}function p(t,n){return n||(n=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}}))}function f(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==e)return;var o,r,i=[],l=!0,d=!1;try{for(e=e.call(t);!(l=(o=e.next()).done)&&(i.push(o.value),!n||i.length!==n);l=!0);}catch(t){d=!0,r=t}finally{try{l||null==e.return||e.return()}finally{if(d)throw r}}return i}(t,n)||function(t,n){if(!t)return;if("string"==typeof t)return b(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return b(t,n)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,o=new Array(n);e<n;e++)o[e]=t[e];return o}var S,x=250,C=80,m=function(t){return Math.floor(t)},h=function(t){if(!t||0===Object.keys(t).length)return"";var n=t.imageBox,e=t.rotate,o=n.x,r=n.y,i=n.height,l=n.width;return"?x=".concat(m(o),"&y=").concat(m(r),"&w=").concat(m(l),"&h=").concat(m(i),"&rotate=").concat(e)},T=function(n){var e=n.icon,o=n.opacity,r=void 0===o?1:o,i=n.hoverOpacity,l=void 0===i?1:i,d=n.color,a=void 0===d?"#000":d,u=n.hoverColor,c=void 0===u?a:u,s=n.size,g=void 0===s?20:s,v=n.rotate,p=n.noCursor,f=n.padding,b=void 0===f?0:f,S=n.width,x=n.height,C=n.tableIcon;return t.createElement(B,{color:a,hoverColor:c,size:g,width:S,height:x,opacity:r,hoverOpacity:l,rotate:v,noCursor:p,padding:b,tableIcon:C},w(e))},w=function(n){var e=n;return"function"==typeof n?t.createElement(e,null):"string"==typeof n?n:null},B=a.div(S||(S=p(["\n  cursor: ",";\n  display: ",";\n  flex: 0 0 auto;\n  align-items: center;\n  font-size: ",";\n  width: ","px;\n  height: ","px;\n  transform: rotate(","deg);\n  transform-origin: 50% 50%;\n  padding: ","px;\n\n  :hover {\n    svg {\n      fill: ",";\n      opacity: ",";\n    }\n  }\n\n  svg {\n    fill: ",";\n    opacity: ",";\n    width: 100%;\n    height: 100%;\n    transition: all ease-in-out 0.3s;\n    vertical-align: ",";\n  }\n"])),(function(t){return t.noCursor?"initial":"pointer"}),(function(t){return t.tableIcon?"table-cell":"flex"}),(function(t){return!t.tableIcon&&"0"}),(function(t){var n=t.size,e=t.width;return e||n}),(function(t){var n=t.size,e=t.height;return e||n}),(function(t){return t.rotate}),(function(t){return t.padding}),(function(t){return t.hoverColor}),(function(t){return t.hoverOpacity}),(function(t){return t.color}),(function(t){return t.opacity}),(function(t){return t.tableIcon&&"middle"}));T.propTypes={color:c.string,hoverColor:c.string,icon:c.oneOfType([c.string,c.func]),size:c.number,padding:c.number,opacity:c.number,hoverOpacity:c.number,rotate:c.number,noCursor:c.bool,width:c.number,height:c.number,tableIcon:c.bool},T.defaultProps={opacity:1,color:"#000",size:20,padding:0,rotate:0,noCursor:!1,tableIcon:!1};var k,y,H,R,F,E,z,I,P=function(){return t.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24"},t.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),t.createElement("path",{d:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"}))},O=function(t){return window.open(t,"_blank","noreferrer noopener")},A=a.div(k||(k=p([""]))),L=a.div(y||(y=p(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  height: 100%;\n\n  &:hover {\n    color: ",";\n  }\n\n  &:active {\n    color: ",";\n  }\n"])),(function(t){return t.navBarTextHoverColor}),(function(t){return t.navBarTextClickedColor})),j=a(L)(H||(H=p(["\n    padding: 0 10px;\n"]))),V=a(L)(R||(R=p(["\n    word-break: break-word;\n"]))),W=o((function(n){var e=n.disabledRedirect,o=n.childs,r=n.dropdownSettingsInactiveFill,i=n.dropdownSettingsInactiveBorder,l=n.dropdownSettingsHoverClickedFill,d=n.dropdownSettingsHoverClickedBorder,a=n.dropdownSettingsTextColorRegular,u=n.dropdownSettingsTextColorHover,c=n.dropdownSettingsTextColorClicked,v=n.dropdownSettingsTextFontFamily,p=n.dropdownSettingsTextFontSize,f=n.dropdownSettingsTextBold,b=n.dropdownSettingsTextUnderline,S=n.dropdownSettingsTextItalic,x=n.dropdownSettingsHorizontalPadding,C=n.dropdownSettingsVerticalPadding,m=n.setOpen,h=n.rootId,T=n.parentRef,w="object"===("undefined"==typeof window?"undefined":g(window)),B=0,k=0;if(w&&T){B=T.getBoundingClientRect().left;var y=T.closest("[data-navbarcontainer]"),H=T.closest(".navbar-desktop");if(y){var R=y.getBoundingClientRect().left;B<R&&(B=R)}if(H){var F=H.getBoundingClientRect();k=F.top+F.height+window.scrollY}}var E=t.createElement(N,{"data-list":!0,className:"navbar-list",left:B,top:k,dropdownSettingsInactiveBorder:i},o.map((function(n){var o;return t.createElement(D,{key:n.id,dropdownSettingsInactiveFill:r,dropdownSettingsHoverClickedFill:l,dropdownSettingsHoverClickedBorder:d,dropdownSettingsTextColorRegular:a,dropdownSettingsTextColorHover:u,dropdownSettingsTextColorClicked:c,dropdownSettingsTextFontFamily:v,dropdownSettingsTextFontSize:p,dropdownSettingsTextBold:f,dropdownSettingsTextUnderline:b,dropdownSettingsTextItalic:S,dropdownSettingsHorizontalPadding:x,dropdownSettingsVerticalPadding:C,onClick:function(){var t;null!==(t=n.link)&&void 0!==t&&t.value&&!e?(O(n.link.value),m(!1)):m(!1)},"data-link":null===(o=n.link)||void 0===o?void 0:o.value},n.title)})));return w?s.createPortal(E,document.getElementById(h)):E})),U=o((function(o){var l=o.disabledRedirect,d=o.disabledListClick,a=o.link,u=o.title,c=o.navBarTextHoverColor,s=o.navBarTextClickedColor,g=o.children,v=o.dropdownSettingsInactiveFill,p=o.dropdownSettingsInactiveBorder,b=o.dropdownSettingsHoverClickedFill,S=o.dropdownSettingsHoverClickedBorder,x=o.dropdownSettingsTextColorRegular,C=o.dropdownSettingsTextColorHover,m=o.dropdownSettingsTextColorClicked,h=o.dropdownSettingsTextFontFamily,w=o.dropdownSettingsTextFontSize,B=o.dropdownSettingsTextBold,k=o.dropdownSettingsTextUnderline,y=o.dropdownSettingsTextItalic,H=o.dropdownSettingsHorizontalPadding,R=o.dropdownSettingsVerticalPadding,F=o.isStatic,E=o.navBarHoverColor,z=o.navBarClickedColor,I=o.rootId,L=f(r(F),2),V=L[0],U=L[1],N=null==a?void 0:a.value,D=function(t){var o=e(),r=function(n){!o.current||null!=o&&o.current.contains(n.target)||t(n,o.current)};return n((function(){return document.addEventListener("mousedown",r),document.addEventListener("touchstart",r),function(){document.removeEventListener("mousedown",r),document.removeEventListener("touchstart",r)}})),o}((function(){U(!1)})),Z=f(r(null),2),Y=Z[0],q=Z[1];n((function(){q(D.current)}),[]);var $=g.length>0,_=i((function(){$&&!d?U((function(t){return!t})):$||l||!N||O(N)}),[d,l,$,N]);return n((function(){var t=function(){U(!1)};return document.body.addEventListener("scroll",t),function(){document.body.removeEventListener("scroll",t)}}),[]),t.createElement(M,{ref:D,navBarHoverColor:E,navBarClickedColor:z},t.createElement(j,{navBarTextHoverColor:c,navBarTextClickedColor:s,onClick:_,"data-link":$?void 0:N,"data-isdropdown":$},u," ",$&&t.createElement(A,{"data-arrow":!0},V?t.createElement(T,{icon:P,rotate:F?-90:90,color:"#ffffff"}):t.createElement(T,{icon:P,rotate:-90,color:"#ffffff"}))),V&&$&&t.createElement(W,{dropdownSettingsInactiveFill:v,dropdownSettingsInactiveBorder:p,dropdownSettingsHoverClickedFill:b,dropdownSettingsHoverClickedBorder:S,dropdownSettingsTextColorRegular:x,dropdownSettingsTextColorHover:C,dropdownSettingsTextColorClicked:m,dropdownSettingsTextFontFamily:h,dropdownSettingsTextFontSize:w,dropdownSettingsTextBold:B,dropdownSettingsTextUnderline:k,dropdownSettingsTextItalic:y,dropdownSettingsHorizontalPadding:H,dropdownSettingsVerticalPadding:R,childs:g,setOpen:U,disabledRedirect:l,rootId:I,parentRef:Y}))})),M=a.div(F||(F=p(["\n  position: relative;\n  height: 100%;\n\n  &:hover {\n    background: ",";\n  }\n\n  &:active {\n    background: ",";\n  }\n"])),(function(t){return t.navBarHoverColor}),(function(t){return t.navBarClickedColor})),N=a.div(E||(E=p(["\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  left: ","px;\n  top: ","px;\n  z-index: 2;\n  \n  > div {\n    border-right: 2px solid ",";\n    border-left: 2px solid ",";\n    border-bottom: 2px solid ",";\n  }\n  > div:first-child {\n    border-top: 2px solid ",";\n  }\n"])),(function(t){return t.left}),(function(t){return t.top}),(function(t){return t.dropdownSettingsInactiveBorder}),(function(t){return t.dropdownSettingsInactiveBorder}),(function(t){return t.dropdownSettingsInactiveBorder}),(function(t){return t.dropdownSettingsInactiveBorder})),D=a.div(z||(z=p(["\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n  cursor: pointer;\n  background: ",";\n  color: ",";\n  font-size: ","px;\n  font-family: ",";\n  font-weight: ",";\n  font-style: ",";\n  text-decoration: ",";\n  padding: ",";\n\n  &:hover {\n    background: ",";\n    border: 2px solid ",";\n    color: ",";\n  }\n\n  &:active {\n    background: ",";\n    border: 2px solid ",";\n    color: ",";\n  }\n"])),(function(t){return t.dropdownSettingsInactiveFill}),(function(t){return t.dropdownSettingsTextColorRegular}),(function(t){return t.dropdownSettingsTextFontSize}),(function(t){return t.dropdownSettingsTextFontFamily}),(function(t){return t.dropdownSettingsTextBold?"bold":"normal"}),(function(t){return t.dropdownSettingsTextItalic?"italic":"normal"}),(function(t){return t.dropdownSettingsTextUnderline?"underline":"none"}),(function(t){var n=t.dropdownSettingsVerticalPadding,e=t.dropdownSettingsHorizontalPadding;return"".concat(n,"px ").concat(e,"px")}),(function(t){return t.dropdownSettingsHoverClickedFill}),(function(t){return t.dropdownSettingsHoverClickedBorder}),(function(t){return t.dropdownSettingsTextColorHover}),(function(t){return t.dropdownSettingsHoverClickedFill}),(function(t){return t.dropdownSettingsHoverClickedBorder}),(function(t){return t.dropdownSettingsTextColorClicked}));U.propTypes={link:c.string,disabledRedirect:c.bool,disabledListClick:c.bool,title:c.string,navBarTextHoverColor:c.string,navBarTextClickedColor:c.string,children:c.array,dropdownSettingsInactiveFill:c.string,dropdownSettingsInactiveBorder:c.string,dropdownSettingsHoverClickedFill:c.string,dropdownSettingsHoverClickedBorder:c.string,dropdownSettingsTextColorRegular:c.string,dropdownSettingsTextColorHover:c.string,dropdownSettingsTextColorClicked:c.string,dropdownSettingsTextFontFamily:c.string,dropdownSettingsTextFontSize:c.number,dropdownSettingsTextBold:c.bool,dropdownSettingsTextUnderline:c.bool,dropdownSettingsTextItalic:c.bool,dropdownSettingsHorizontalPadding:c.number,dropdownSettingsVerticalPadding:c.number,navBarHoverColor:c.string,navBarClickedColor:c.string,rootId:c.string};var Z,Y,q,$=o((function(n){var e=n.link,o=n.disabledRedirect,r=n.title,l=n.buttonSettingsRoundCorners,d=n.buttonSettingsBorderWidth,a=n.buttonSettingsRegularBorder,u=n.buttonSettingsRegularFill,c=n.buttonSettingsHorizontalPadding,s=n.buttonSettingsVerticalPadding,g=n.buttonSettingsHoverClickedBorder,v=n.buttonSettingsHoverClickedFill,p=n.buttonSettingsTextColorRegular,f=n.buttonSettingsTextColorHover,b=n.buttonSettingsTextColorClicked,S=n.navBarTextFontSize,x=null==e?void 0:e.value,C=i((function(){x&&!o&&O(x)}),[x,o]);return t.createElement(_,{buttonSettingsRoundCorners:l,buttonSettingsBorderWidth:d,buttonSettingsRegularBorder:a,buttonSettingsRegularFill:u,buttonSettingsHorizontalPadding:c,buttonSettingsVerticalPadding:s,buttonSettingsHoverClickedBorder:g,buttonSettingsHoverClickedFill:v,buttonSettingsTextColorRegular:p,buttonSettingsTextColorHover:f,buttonSettingsTextColorClicked:b,onClick:C,"data-link":x,navBarTextFontSize:S},r)})),_=a.div(I||(I=p(["\n  line-height: normal;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  border-radius: ","px;\n  border: ","px solid ",";\n  background: ",";\n  padding: ",";\n  color: ",";\n  height: ","px;\n\n  &:hover {\n    border: ","px solid ",";\n    background: ",";\n    color: ",";\n  }\n\n  &:active {\n    border: ","px solid ",";\n    background: ",";\n    color: ",";\n  }\n"])),(function(t){return t.buttonSettingsRoundCorners}),(function(t){return t.buttonSettingsBorderWidth}),(function(t){return t.buttonSettingsRegularBorder}),(function(t){return t.buttonSettingsRegularFill}),(function(t){var n=t.buttonSettingsHorizontalPadding;return"0 ".concat(n,"px")}),(function(t){return t.buttonSettingsTextColorRegular}),(function(t){var n=t.buttonSettingsVerticalPadding;return t.navBarTextFontSize+2*(n||0)+2*(t.buttonSettingsBorderWidth||0)}),(function(t){return t.buttonSettingsBorderWidth}),(function(t){return t.buttonSettingsHoverClickedBorder}),(function(t){return t.buttonSettingsHoverClickedFill}),(function(t){return t.buttonSettingsTextColorHover}),(function(t){return t.buttonSettingsBorderWidth}),(function(t){return t.buttonSettingsHoverClickedBorder}),(function(t){return t.buttonSettingsHoverClickedFill}),(function(t){return t.buttonSettingsTextColorClicked}));$.propTypes={disabledRedirect:c.bool,title:c.string,link:c.string,buttonSettingsRoundCorners:c.number,buttonSettingsBorderWidth:c.number,buttonSettingsRegularBorder:c.string,buttonSettingsRegularFill:c.string,buttonSettingsVerticalPadding:c.number,buttonSettingsHorizontalPadding:c.number,buttonSettingsHoverClickedBorder:c.string,buttonSettingsHoverClickedFill:c.string,buttonSettingsTextColorRegular:c.string,buttonSettingsTextColorHover:c.string,buttonSettingsTextColorClicked:c.string,navBarTextFontSize:c.number};var G,J,K,Q,X,tt,nt=l((function(n,e){var o=n.height,r=n.id,i=n.crop,l=n.source,d=n.alt,a=n.ignoreMaxHeight,u=n.isTurntable,c=n.isHero,s={width:"100%",height:"100%",objectFit:"contain"};return a||(s.maxHeight="600px"),t.createElement(ot,{ref:e,isTurntable:u,isHero:c,height:o,id:r},t.createElement(et,v({},i.imagePosition,{isHero:c}),t.createElement("img",{src:l,alt:d,style:s})))})),et=a.div(Z||(Z=p(["\n  position: relative;\n  left: ","%;\n  top: ","%;\n  width: ","%;\n  height: ","%;\n\n  ",";\n"])),(function(t){return t.x||0}),(function(t){return t.y||0}),(function(t){return t.width||100}),(function(t){return t.height||100}),(function(t){return t.isHero&&u(Y||(Y=p(["\n      position: static;\n      img {\n        object-fit: cover;\n        //margin-left: auto;\n        //margin-right: auto;\n        //width: auto !important;\n      }\n    "])))})),ot=a.div(q||(q=p(["\n  width: 100%;\n  height: ",";\n  position: relative;\n  background-color: transparent;\n  overflow: hidden;\n"])),(function(t){var n=t.height,e=t.isTurntable,o=t.isHero;return e||o?"100%":n?n+"px":"100%"}));nt.propTypes={height:c.number,id:c.string,crop:c.object,source:c.string.isRequired,alt:c.string,ignoreMaxHeight:c.bool,isTurntable:c.bool,isHero:c.bool},nt.defaultProps={id:"",alt:"",ignoreMaxHeight:!1,crop:{}};var rt=function(n){var e=n.logoSrc,o=n.logoCropperOptions,r=n.hideElement,i=n.height;return t.createElement(ct,{hideElement:r,height:i},t.createElement(nt,{source:e+h(o),crop:o}))},it=function(n){var e=n.config,o=n.disabledRedirect,r=void 0!==o&&o,i=n.disabledListClick,l=void 0!==i&&i,a=n.stickyOffset,u=void 0===a?0:a,c=n.isStatic,s=void 0!==c&&c,g=n.hideLogo,p=void 0!==g&&g,f=n.isPreview,b=void 0!==f&&f,S=n.rootId,x=void 0===S?"root":S,C=e.height,m=e.navBarRegularColor,h=e.navBarHoverColor,T=e.navBarClickedColor,w=e.logoAlignment,B=e.logoCropperOptions,k=e.logoSrc,y=e.navBarTextAlignment,H=e.navBarTextFontSize,R=e.navBarTextFontFamily,F=e.navBarTextBold,E=e.navBarTextItalic,z=e.navBarTextUnderline,I=e.navBarTextRegularColor,P=e.structure,O=e.navBarTextHoverColor,A=e.navBarTextClickedColor,L=e.navBarTextSpacing,j=e.buttonSettingsRoundCorners,V=e.buttonSettingsBorderWidth,W=e.buttonSettingsRegularBorder,M=e.buttonSettingsRegularFill,N=e.buttonSettingsHorizontalPadding,D=e.buttonSettingsVerticalPadding,Z=e.buttonSettingsHoverClickedFill,Y=e.buttonSettingsHoverClickedBorder,q=e.buttonSettingsTextColorRegular,_=e.buttonSettingsTextColorHover,G=e.buttonSettingsTextColorClicked,J=e.navBarBehavior,K=e.dropdownSettingsInactiveFill,Q=e.dropdownSettingsInactiveBorder,X=e.dropdownSettingsHoverClickedFill,tt=e.dropdownSettingsHoverClickedBorder,nt=e.dropdownSettingsTextColorRegular,et=e.dropdownSettingsTextColorHover,ot=e.dropdownSettingsTextColorClicked,it=e.dropdownSettingsTextFontFamily,lt=e.dropdownSettingsTextFontSize,dt=e.dropdownSettingsTextBold,ct=e.dropdownSettingsTextUnderline,vt=e.dropdownSettingsTextItalic,pt=e.dropdownSettingsHorizontalPadding,ft=e.dropdownSettingsVerticalPadding;return t.createElement(ut,{height:C,navBarRegularColor:m,navBarBehavior:J,stickyOffset:u,className:"navbar-desktop"},t.createElement(st,{height:C},t.createElement(rt,{logoSrc:k,logoCropperOptions:B,hideElement:p||"left"!==w,height:C}),t.createElement(gt,{"data-navbarcontainer":!0,navBarTextAlignment:y,navBarTextFontSize:H,navBarTextFontFamily:R,navBarTextBold:F,navBarTextItalic:E,navBarTextUnderline:z,navBarTextRegularColor:I,navBarTextSpacing:L},0===(null==P?void 0:P.length)&&b?t.createElement(at,null,"Navigation will preview here once created"):t.createElement(t.Fragment,null,null==P?void 0:P.map((function(n){var e=null;return"button"===n.type?e=t.createElement($,v({},n,{disabledRedirect:r,buttonSettingsRoundCorners:j,buttonSettingsBorderWidth:V,buttonSettingsRegularBorder:W,buttonSettingsRegularFill:M,buttonSettingsVerticalPadding:D,buttonSettingsHorizontalPadding:N,buttonSettingsHoverClickedBorder:Y,buttonSettingsHoverClickedFill:Z,buttonSettingsTextColorRegular:q,buttonSettingsTextColorHover:_,buttonSettingsTextColorClicked:G,navBarTextFontSize:H})):"page"===n.type&&(e=t.createElement(U,v({},n,{disabledRedirect:r,disabledListClick:l,navBarTextHoverColor:O,navBarTextClickedColor:A,dropdownSettingsInactiveFill:K,dropdownSettingsInactiveBorder:Q,dropdownSettingsHoverClickedFill:X,dropdownSettingsHoverClickedBorder:tt,dropdownSettingsTextColorRegular:nt,dropdownSettingsTextColorHover:et,dropdownSettingsTextColorClicked:ot,dropdownSettingsTextFontFamily:it,dropdownSettingsTextFontSize:lt,dropdownSettingsTextBold:dt,dropdownSettingsTextUnderline:ct,dropdownSettingsTextItalic:vt,dropdownSettingsHorizontalPadding:pt,dropdownSettingsVerticalPadding:ft,isStatic:s,navBarHoverColor:h,navBarClickedColor:T,rootId:x}))),t.createElement(d,{key:n.id},e)})))),t.createElement(rt,{logoSrc:k,logoCropperOptions:B,hideElement:p||"right"!==w})))};it.propTypes={config:c.object,disabledRedirect:c.bool,disabledListClick:c.bool,stickyOffset:c.number,isStatic:c.bool,hideLogo:c.bool,isPreview:c.bool};var lt,dt,at=a.div(G||(G=p(["\n  font-family: Montserrat-bold, sans-serif;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  font-size: 15px;\n  letter-spacing: 1.5px;\n  text-transform: uppercase;\n"]))),ut=a.div(J||(J=p(["\n  display: flex;\n  height: ","px;\n  background-color: ",";\n  padding: 0 50px;\n  width: 100%;\n  margin: auto;\n  align-items: center;\n  flex-shrink: 0;\n  z-index: 1002;\n\n  ",";\n"])),(function(t){return t.height}),(function(t){return t.navBarRegularColor}),(function(t){var n=t.navBarBehavior,e=t.stickyOffset;return"frozen"===n&&u(K||(K=p(["\n            position: sticky;\n            top: ","px;\n          "])),e)})),ct=a.div(Q||(Q=p(["\n  width: ","px;\n  height: ","px;\n  opacity: ",";\n"])),250,(function(t){return t.height}),(function(t){return t.hideElement?0:1})),st=a.div(X||(X=p(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  max-width: 1120px;\n  margin: auto;\n  height: ","px;\n"])),(function(t){return t.height})),gt=a.div(tt||(tt=p(["\n  display: flex;\n  flex: 1 1 auto;\n  margin: 0 24px;\n  justify-content: ",";\n  font-size: ","px;\n  font-family: ",";\n  font-weight: ",";\n  font-style: ",";\n  text-decoration: ",";\n  color: ",";\n  height: 100%;\n  align-items: center;\n  width: calc(100% - ","px);\n  overflow-x: auto;\n  overflow-y: hidden;\n\n  > div {\n    margin-right: ","px;\n\n    &:last-child {\n      margin-right: 0;\n    }\n  }\n"])),(function(t){return t.navBarTextAlignment}),(function(t){return t.navBarTextFontSize}),(function(t){return t.navBarTextFontFamily}),(function(t){return t.navBarTextBold?"bold":"normal"}),(function(t){return t.navBarTextItalic?"italic":"normal"}),(function(t){return t.navBarTextUnderline?"underline":"none"}),(function(t){return t.navBarTextRegularColor}),550,(function(t){return t.navBarTextSpacing})),vt=function(){return t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"19.94",height:"16.44",viewBox:"0 0 19.94 16.44"},t.createElement("path",{d:"M20.41,6.91H3.47a1.5,1.5,0,0,1,0-3H20.41A1.5,1.5,0,0,1,20.41,6.91Z",transform:"translate(-1.97 -3.91)"}),t.createElement("path",{d:"M20.41,13.91H3.47a1.5,1.5,0,0,1,0-3H20.41A1.5,1.5,0,0,1,20.41,13.91Z",transform:"translate(-1.97 -3.91)"}),t.createElement("path",{d:"M20.41,20.34H3.47a1.5,1.5,0,0,1,0-3H20.41A1.5,1.5,0,0,1,20.41,20.34Z",transform:"translate(-1.97 -3.91)"}))},pt=function(n){var e=n.children,o=n.onClick,r=n.mobileTextAlignment,i=n.link,l=n.isDropdown;return t.createElement(ft,{onClick:o,mobileTextAlignment:r,"data-link":i,"data-isdropdown":l},e)},ft=a.div(lt||(lt=p(["\n    padding: 15px;\n    display: flex;\n    justify-content: ",";\n"])),(function(t){return"center"===t.mobileTextAlignment?"center":"flex-start"}));pt.propTypes={children:c.any,onClick:c.func,link:c.string,isDropdown:c.bool};var bt,St,xt=o((function(n){var e=n.link,o=n.disabledRedirect,r=n.title,l=n.buttonSettingsRoundCorners,d=n.buttonSettingsBorderWidth,a=n.buttonSettingsRegularBorder,u=n.buttonSettingsRegularFill,c=n.buttonSettingsHorizontalPadding,s=n.buttonSettingsVerticalPadding,g=n.buttonSettingsHoverClickedBorder,v=n.buttonSettingsHoverClickedFill,p=n.buttonSettingsTextColorRegular,f=n.buttonSettingsTextColorHover,b=n.buttonSettingsTextColorClicked,S=n.mobileTextAlignment,x=null==e?void 0:e.value,C=i((function(){x&&!o&&O(x)}),[x,o]);return t.createElement(pt,{onClick:C,link:x,mobileTextAlignment:S},t.createElement(Ct,{buttonSettingsRoundCorners:l,buttonSettingsBorderWidth:d,buttonSettingsRegularBorder:a,buttonSettingsRegularFill:u,buttonSettingsHorizontalPadding:c,buttonSettingsVerticalPadding:s,buttonSettingsHoverClickedBorder:g,buttonSettingsHoverClickedFill:v,buttonSettingsTextColorRegular:p,buttonSettingsTextColorHover:f,buttonSettingsTextColorClicked:b},r))})),Ct=a.div(dt||(dt=p(["\n  word-break: break-word;\n  line-height: normal;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  border-radius: ","px;\n  border: ","px solid\n    ",";\n  background: ",";\n  padding: ",";\n  color: ",";\n\n  &:hover {\n    border: ","px solid\n      ",";\n    background: ",";\n    color: ",";\n  }\n\n  &:active {\n    border: ","px solid\n      ",";\n    background: ",";\n    color: ",";\n  }\n"])),(function(t){return t.buttonSettingsRoundCorners}),(function(t){return t.buttonSettingsBorderWidth}),(function(t){return t.buttonSettingsRegularBorder}),(function(t){return t.buttonSettingsRegularFill}),(function(t){var n=t.buttonSettingsVerticalPadding,e=t.buttonSettingsHorizontalPadding;return"".concat(n,"px ").concat(e,"px")}),(function(t){return t.buttonSettingsTextColorRegular}),(function(t){return t.buttonSettingsBorderWidth}),(function(t){return t.buttonSettingsHoverClickedBorder}),(function(t){return t.buttonSettingsHoverClickedFill}),(function(t){return t.buttonSettingsTextColorHover}),(function(t){return t.buttonSettingsBorderWidth}),(function(t){return t.buttonSettingsHoverClickedBorder}),(function(t){return t.buttonSettingsHoverClickedFill}),(function(t){return t.buttonSettingsTextColorClicked}));xt.propTypes={disabledRedirect:c.bool,title:c.string,link:c.string,buttonSettingsRoundCorners:c.number,buttonSettingsBorderWidth:c.number,buttonSettingsRegularBorder:c.string,buttonSettingsRegularFill:c.string,buttonSettingsVerticalPadding:c.number,buttonSettingsHorizontalPadding:c.number,buttonSettingsHoverClickedBorder:c.string,buttonSettingsHoverClickedFill:c.string,buttonSettingsTextColorRegular:c.string,buttonSettingsTextColorHover:c.string,buttonSettingsTextColorClicked:c.string};var mt,ht,Tt,wt,Bt,kt,yt,Ht,Rt,Ft=o((function(n){var e=n.disabledRedirect,o=n.disabledListClick,l=n.link,d=n.title,a=n.navBarTextHoverColor,u=n.navBarTextClickedColor,c=n.children,s=n.mobileTextAlignment,g=n.isStatic,v=null==l?void 0:l.value,p=f(r(g),2),b=p[0],S=p[1],x=c.length>0,C=i((function(){x&&!o?S((function(t){return!t})):x||e||!v||O(v)}),[o,e,x,v]);return t.createElement(Et,null,t.createElement(pt,{isDropdown:x,link:x?void 0:v,onClick:C,mobileTextAlignment:s},t.createElement(V,{navBarTextHoverColor:a,navBarTextClickedColor:u},d," ",x&&t.createElement(A,{"data-arrow":!0},b?t.createElement(T,{icon:P,rotate:g?-90:90,color:"#ffffff"}):t.createElement(T,{icon:P,rotate:-90,color:"#ffffff"})))),b&&x&&t.createElement(zt,{"data-mobile-dropdown-list":!0},c.map((function(n){var o;return t.createElement(pt,{key:n.id,onClick:function(){var t;null!==(t=n.link)&&void 0!==t&&t.value&&!e&&O(n.link.value)},link:null===(o=n.link)||void 0===o?void 0:o.value,mobileTextAlignment:s},t.createElement(V,{navBarTextHoverColor:a,navBarTextClickedColor:u},n.title))}))))})),Et=a.div(bt||(bt=p(["\n  display: flex;\n  flex-direction: column;\n"]))),zt=a.div(St||(St=p(["\n  display: flex;\n  flex-direction: column;\n"])));Ft.propTypes={link:c.string,disabledRedirect:c.bool,disabledListClick:c.bool,title:c.string,navBarTextHoverColor:c.string,navBarTextClickedColor:c.string,children:c.array,mobileTextAlignment:c.string};var It=function(e){var o=e.config,l=e.stickyOffset,a=void 0===l?0:l,u=e.isConstructor,c=void 0!==u&&u,s=e.isStatic,g=void 0!==s&&s,p=e.disabledRedirect,b=void 0!==p&&p,S=e.disabledListClick,x=void 0!==S&&S,C=f(r(c),2),m=C[0],w=C[1];n((function(){c||(document.body.style.overflowY=m?"hidden":"auto")}),[c,m]);var B=o.mobileHeight,k=o.navBarRegularColor,y=o.mobileLogoAlignment,H=o.logoSrc,R=o.logoCropperOptions,F=o.navBarBehavior,E=o.mobileFontSize,z=o.navBarTextFontFamily,I=o.navBarTextBold,P=o.navBarTextItalic,O=o.navBarTextUnderline,A=o.navBarTextRegularColor,L=o.navBarTextSpacing,j=o.buttonSettingsRoundCorners,V=o.buttonSettingsBorderWidth,W=o.buttonSettingsRegularBorder,U=o.buttonSettingsRegularFill,M=o.buttonSettingsHorizontalPadding,N=o.buttonSettingsVerticalPadding,D=o.buttonSettingsHoverClickedFill,Z=o.buttonSettingsHoverClickedBorder,Y=o.buttonSettingsTextColorRegular,q=o.buttonSettingsTextColorHover,$=o.buttonSettingsTextColorClicked,_=o.mobileTextAlignment,G=o.navBarTextHoverColor,J=o.navBarTextClickedColor,K=o.structure,Q=i((function(){c||x||w((function(t){return!t}))}),[c,x]);return t.createElement(Pt,{className:"navbar-mobile",navBarBehavior:F,stickyOffset:a,isConstructor:c},t.createElement(At,{height:B,navBarRegularColor:k,"data-mobile-header":!0},t.createElement(Vt,{onClick:Q,"data-mobile-menu-button":!0},t.createElement(T,{icon:vt,color:"#ffffff"})),t.createElement(Lt,{mobileLogoAlignment:y},t.createElement(jt,null,t.createElement(nt,{source:H+h(R),crop:R})))),t.createElement(Ot,{"data-mobile-menu":!0,mobileHeight:B,offsetTop:a+B,isConstructor:c,open:m,navBarRegularColor:k,mobileFontSize:E,navBarTextFontFamily:z,navBarTextBold:I,navBarTextItalic:P,navBarTextUnderline:O,navBarTextRegularColor:A,navBarTextSpacing:L},null==K?void 0:K.map((function(n){var e="any";return"button"===n.type?e=t.createElement(xt,v({},n,{mobileTextAlignment:_,disabledRedirect:c,buttonSettingsRoundCorners:j,buttonSettingsBorderWidth:V,buttonSettingsRegularBorder:W,buttonSettingsRegularFill:U,buttonSettingsVerticalPadding:N,buttonSettingsHorizontalPadding:M,buttonSettingsHoverClickedBorder:Z,buttonSettingsHoverClickedFill:D,buttonSettingsTextColorRegular:Y,buttonSettingsTextColorHover:q,buttonSettingsTextColorClicked:$})):"page"===n.type&&(e=t.createElement(Ft,v({},n,{disabledRedirect:b,disabledListClick:x,navBarTextHoverColor:G,navBarTextClickedColor:J,mobileTextAlignment:_,isStatic:g}))),t.createElement(d,{key:n.id},e)}))))},Pt=a.div(mt||(mt=p(["\n  z-index: 1001;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  ",";\n"])),(function(t){var n=t.navBarBehavior,e=t.stickyOffset,o=t.isConstructor;return"frozen"===n&&!o&&u(ht||(ht=p(["\n            position: sticky;\n            top: ","px;\n          "])),e)})),Ot=a.div(Tt||(Tt=p(["\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: ","px;\n  width: 100%;\n  height: ",";\n  ",";\n  transition: height 0.5s ease;\n  background-color: ",";\n  overflow-x: hidden;\n  overflow-y: auto;\n  font-size: ","px;\n  font-family: ",";\n  font-weight: ",";\n  font-style: ",";\n  text-decoration: ",";\n  color: ",";\n  ",";\n"])),(function(t){return t.mobileHeight}),(function(t){return t.isConstructor?"auto":0}),(function(t){return t.isConstructor&&u(wt||(wt=p(["\n            max-height: 350px;\n          "])))}),(function(t){return t.navBarRegularColor}),(function(t){return t.mobileFontSize}),(function(t){return t.navBarTextFontFamily}),(function(t){return t.navBarTextBold?"bold":"normal"}),(function(t){return t.navBarTextItalic?"italic":"normal"}),(function(t){return t.navBarTextUnderline?"underline":"none"}),(function(t){return t.navBarTextRegularColor}),(function(t){var n=t.offsetTop,e=t.open;return!t.isConstructor&&e&&u(Bt||(Bt=p(["\n            height: calc(100vh - ","px);\n          "])),n)})),At=a.div(kt||(kt=p(["\n  display: flex;\n  width: 100%;\n  padding: 15px 13px 16px 15px;\n  border: solid 1px rgba(164, 198, 225, 0.39);\n  height: ","px;\n  background-color: ",";\n  align-items: center;\n  overflow: hidden;\n"])),(function(t){return t.height}),(function(t){return t.navBarRegularColor})),Lt=a.div(yt||(yt=p(["\n  display: flex;\n  flex: 1 1 auto;\n  justify-content: ",";\n"])),(function(t){var n=t.mobileLogoAlignment;return"center"===n?"center":"right"===n?"flex-end":""})),jt=a.div(Ht||(Ht=p(["\n  width: ","px;\n  height: ","px;\n"])),250,80),Vt=a.div(Rt||(Rt=p(["\n  display: flex;\n  position: absolute;\n"])));It.propTypes={config:c.object,stickyOffset:c.number};export{it as NavBar,It as NavBarMobile,C as logoImageHeight,x as logoImageWidth};
//# sourceMappingURL=index.esm.js.map

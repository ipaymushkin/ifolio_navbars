import t,{useEffect as n,createRef as e,memo as o,useState as r,useCallback as i,forwardRef as l,Fragment as a}from"react";import d,{css as u}from"styled-components";import c from"prop-types";function s(){return s=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t},s.apply(this,arguments)}function g(t,n){return n||(n=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}}))}function v(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==e)return;var o,r,i=[],l=!0,a=!1;try{for(e=e.call(t);!(l=(o=e.next()).done)&&(i.push(o.value),!n||i.length!==n);l=!0);}catch(t){a=!0,r=t}finally{try{l||null==e.return||e.return()}finally{if(a)throw r}}return i}(t,n)||function(t,n){if(!t)return;if("string"==typeof t)return b(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return b(t,n)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,o=new Array(n);e<n;e++)o[e]=t[e];return o}var p,f=100,x=50,S=function(t){return Math.floor(t)},C=function(t){if(!t||0===Object.keys(t).length)return"";var n=t.imageBox,e=t.rotate,o=n.x,r=n.y,i=n.height,l=n.width;return"?x=".concat(S(o),"&y=").concat(S(r),"&w=").concat(S(l),"&h=").concat(S(i),"&rotate=").concat(e)},m=function(n){var e=n.icon,o=n.opacity,r=void 0===o?1:o,i=n.hoverOpacity,l=void 0===i?1:i,a=n.color,d=void 0===a?"#000":a,u=n.hoverColor,c=void 0===u?d:u,s=n.size,g=void 0===s?20:s,v=n.rotate,b=n.noCursor,p=n.padding,f=void 0===p?0:p,x=n.width,S=n.height,C=n.tableIcon;return t.createElement(T,{color:d,hoverColor:c,size:g,width:x,height:S,opacity:r,hoverOpacity:l,rotate:v,noCursor:b,padding:f,tableIcon:C},h(e))},h=function(n){var e=n;return"function"==typeof n?t.createElement(e,null):"string"==typeof n?n:null},T=d.div(p||(p=g(["\n  cursor: ",";\n  display: ",";\n  flex: 0 0 auto;\n  align-items: center;\n  font-size: ",";\n  width: ","px;\n  height: ","px;\n  transform: rotate(","deg);\n  transform-origin: 50% 50%;\n  padding: ","px;\n\n  :hover {\n    svg {\n      fill: ",";\n      opacity: ",";\n    }\n  }\n\n  svg {\n    fill: ",";\n    opacity: ",";\n    width: 100%;\n    height: 100%;\n    transition: all ease-in-out 0.3s;\n    vertical-align: ",";\n  }\n"])),(function(t){return t.noCursor?"initial":"pointer"}),(function(t){return t.tableIcon?"table-cell":"flex"}),(function(t){return!t.tableIcon&&"0"}),(function(t){var n=t.size,e=t.width;return e||n}),(function(t){var n=t.size,e=t.height;return e||n}),(function(t){return t.rotate}),(function(t){return t.padding}),(function(t){return t.hoverColor}),(function(t){return t.hoverOpacity}),(function(t){return t.color}),(function(t){return t.opacity}),(function(t){return t.tableIcon&&"middle"}));m.propTypes={color:c.string,hoverColor:c.string,icon:c.oneOfType([c.string,c.func]),size:c.number,padding:c.number,opacity:c.number,hoverOpacity:c.number,rotate:c.number,noCursor:c.bool,width:c.number,height:c.number,tableIcon:c.bool},m.defaultProps={opacity:1,color:"#000",size:20,padding:0,rotate:0,noCursor:!1,tableIcon:!1};var B,k,w,y,H,R,F=function(){return t.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24"},t.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),t.createElement("path",{d:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"}))},E=function(t){return window.open(t,"_blank","noreferrer noopener")},z=d.div(B||(B=g([""]))),P=d.div(k||(k=g(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  height: 100%;\n\n  &:hover {\n    color: ",";\n  }\n\n  &:active {\n    color: ",";\n  }\n"])),(function(t){return t.navBarTextHoverColor}),(function(t){return t.navBarTextClickedColor})),I=o((function(o){var l=o.disabledRedirect,a=o.disabledListClick,d=o.link,u=o.title,c=o.navBarTextHoverColor,s=o.navBarTextClickedColor,g=o.children,b=o.dropdownSettingsInactiveFill,p=o.dropdownSettingsInactiveBorder,f=o.dropdownSettingsHoverClickedFill,x=o.dropdownSettingsHoverClickedBorder,S=o.dropdownSettingsTextColorRegular,C=o.dropdownSettingsTextColorHover,h=o.dropdownSettingsTextColorClicked,T=o.dropdownSettingsTextFontFamily,B=o.dropdownSettingsTextFontSize,k=o.dropdownSettingsTextBold,w=o.dropdownSettingsTextUnderline,y=o.dropdownSettingsTextItalic,H=o.dropdownSettingsHorizontalPadding,R=o.dropdownSettingsVerticalPadding,I=o.isStatic,L=o.navBarHoverColor,V=o.navBarClickedColor,W=v(r(I),2),U=W[0],M=W[1],N=null==d?void 0:d.value,D=function(t){var o=e(),r=function(n){!o.current||null!=o&&o.current.contains(n.target)||t(n,o.current)};return n((function(){return document.addEventListener("mousedown",r),document.addEventListener("touchstart",r),function(){document.removeEventListener("mousedown",r),document.removeEventListener("touchstart",r)}})),o}((function(){M(!1)})),Z=g.length>0,q=i((function(){Z&&!a?M((function(t){return!t})):Z||l||!N||E(N)}),[a,l,Z,N]);return t.createElement(A,{ref:D,navBarHoverColor:L,navBarClickedColor:V},t.createElement(P,{navBarTextHoverColor:c,navBarTextClickedColor:s,onClick:q,"data-link":Z?void 0:N,"data-isdropdown":Z},u," ",Z&&t.createElement(z,{"data-arrow":!0},U?t.createElement(m,{icon:F,rotate:I?-90:90,color:"#ffffff"}):t.createElement(m,{icon:F,rotate:-90,color:"#ffffff"}))),U&&Z&&t.createElement(O,{"data-list":!0,className:"navbar-list"},g.map((function(n){var e;return t.createElement(j,{key:n.id,dropdownSettingsInactiveFill:b,dropdownSettingsInactiveBorder:p,dropdownSettingsHoverClickedFill:f,dropdownSettingsHoverClickedBorder:x,dropdownSettingsTextColorRegular:S,dropdownSettingsTextColorHover:C,dropdownSettingsTextColorClicked:h,dropdownSettingsTextFontFamily:T,dropdownSettingsTextFontSize:B,dropdownSettingsTextBold:k,dropdownSettingsTextUnderline:w,dropdownSettingsTextItalic:y,dropdownSettingsHorizontalPadding:H,dropdownSettingsVerticalPadding:R,onClick:function(){var t;null!==(t=n.link)&&void 0!==t&&t.value&&!l?(E(n.link.value),M(!1)):M(!1)},"data-link":null===(e=n.link)||void 0===e?void 0:e.value},n.title)}))))})),A=d.div(w||(w=g(["\n  position: relative;\n  height: 100%;\n  \n  &:hover {\n    background: ",";\n  }\n\n  &:active {\n    background: ",";\n  }\n"])),(function(t){return t.navBarHoverColor}),(function(t){return t.navBarClickedColor})),O=d.div(y||(y=g(["\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1;\n"]))),j=d.div(H||(H=g(["\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n  cursor: pointer;\n  background: ",";\n  border: 2px solid ",";\n  color: ",";\n  font-size: ","px;\n  font-family: ",";\n  font-weight: ",";\n  font-style: ",";\n  text-decoration: ",";\n  padding: ",";\n\n  &:hover {\n    background: ",";\n    border: 2px solid ",";\n    color: ",";\n  }\n\n  &:active {\n    background: ",";\n    border: 2px solid ",";\n    color: ",";\n  }\n"])),(function(t){return t.dropdownSettingsInactiveFill}),(function(t){return t.dropdownSettingsInactiveBorder}),(function(t){return t.dropdownSettingsTextColorRegular}),(function(t){return t.dropdownSettingsTextFontSize}),(function(t){return t.dropdownSettingsTextFontFamily}),(function(t){return t.dropdownSettingsTextBold?"bold":"normal"}),(function(t){return t.dropdownSettingsTextItalic?"italic":"normal"}),(function(t){return t.dropdownSettingsTextUnderline?"underline":"none"}),(function(t){var n=t.dropdownSettingsVerticalPadding,e=t.dropdownSettingsHorizontalPadding;return"".concat(n,"px ").concat(e,"px")}),(function(t){return t.dropdownSettingsHoverClickedFill}),(function(t){return t.dropdownSettingsHoverClickedBorder}),(function(t){return t.dropdownSettingsTextColorHover}),(function(t){return t.dropdownSettingsHoverClickedFill}),(function(t){return t.dropdownSettingsHoverClickedBorder}),(function(t){return t.dropdownSettingsTextColorClicked}));I.propTypes={link:c.string,disabledRedirect:c.bool,disabledListClick:c.bool,title:c.string,navBarTextHoverColor:c.string,navBarTextClickedColor:c.string,children:c.array,dropdownSettingsInactiveFill:c.string,dropdownSettingsInactiveBorder:c.string,dropdownSettingsHoverClickedFill:c.string,dropdownSettingsHoverClickedBorder:c.string,dropdownSettingsTextColorRegular:c.string,dropdownSettingsTextColorHover:c.string,dropdownSettingsTextColorClicked:c.string,dropdownSettingsTextFontFamily:c.string,dropdownSettingsTextFontSize:c.number,dropdownSettingsTextBold:c.bool,dropdownSettingsTextUnderline:c.bool,dropdownSettingsTextItalic:c.bool,dropdownSettingsHorizontalPadding:c.number,dropdownSettingsVerticalPadding:c.number,navBarHoverColor:c.string,navBarClickedColor:c.string};var L,V,W,U=o((function(n){var e=n.link,o=n.disabledRedirect,r=n.title,l=n.buttonSettingsRoundCorners,a=n.buttonSettingsBorderWidth,d=n.buttonSettingsRegularBorder,u=n.buttonSettingsRegularFill,c=n.buttonSettingsHorizontalPadding,s=n.buttonSettingsVerticalPadding,g=n.buttonSettingsHoverClickedBorder,v=n.buttonSettingsHoverClickedFill,b=n.buttonSettingsTextColorRegular,p=n.buttonSettingsTextColorHover,f=n.buttonSettingsTextColorClicked,x=n.navBarTextFontSize,S=null==e?void 0:e.value,C=i((function(){S&&!o&&E(S)}),[S,o]);return t.createElement(M,{buttonSettingsRoundCorners:l,buttonSettingsBorderWidth:a,buttonSettingsRegularBorder:d,buttonSettingsRegularFill:u,buttonSettingsHorizontalPadding:c,buttonSettingsVerticalPadding:s,buttonSettingsHoverClickedBorder:g,buttonSettingsHoverClickedFill:v,buttonSettingsTextColorRegular:b,buttonSettingsTextColorHover:p,buttonSettingsTextColorClicked:f,onClick:C,"data-link":S,navBarTextFontSize:x},r)})),M=d.div(R||(R=g(["\n  line-height: normal;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  border-radius: ","px;\n  border: ","px solid ",";\n  background: ",";\n  padding: ",";\n  color: ",";\n  height: ","px;\n\n  &:hover {\n    border: ","px solid ",";\n    background: ",";\n    color: ",";\n  }\n\n  &:active {\n    border: ","px solid ",";\n    background: ",";\n    color: ",";\n  }\n"])),(function(t){return t.buttonSettingsRoundCorners}),(function(t){return t.buttonSettingsBorderWidth}),(function(t){return t.buttonSettingsRegularBorder}),(function(t){return t.buttonSettingsRegularFill}),(function(t){var n=t.buttonSettingsHorizontalPadding;return"0 ".concat(n,"px")}),(function(t){return t.buttonSettingsTextColorRegular}),(function(t){var n=t.buttonSettingsVerticalPadding;return t.navBarTextFontSize+2*(n||0)+2*(t.buttonSettingsBorderWidth||0)}),(function(t){return t.buttonSettingsBorderWidth}),(function(t){return t.buttonSettingsHoverClickedBorder}),(function(t){return t.buttonSettingsHoverClickedFill}),(function(t){return t.buttonSettingsTextColorHover}),(function(t){return t.buttonSettingsBorderWidth}),(function(t){return t.buttonSettingsHoverClickedBorder}),(function(t){return t.buttonSettingsHoverClickedFill}),(function(t){return t.buttonSettingsTextColorClicked}));U.propTypes={disabledRedirect:c.bool,title:c.string,link:c.string,buttonSettingsRoundCorners:c.number,buttonSettingsBorderWidth:c.number,buttonSettingsRegularBorder:c.string,buttonSettingsRegularFill:c.string,buttonSettingsVerticalPadding:c.number,buttonSettingsHorizontalPadding:c.number,buttonSettingsHoverClickedBorder:c.string,buttonSettingsHoverClickedFill:c.string,buttonSettingsTextColorRegular:c.string,buttonSettingsTextColorHover:c.string,buttonSettingsTextColorClicked:c.string,navBarTextFontSize:c.number};var N,D,Z,q,Y,$,_=l((function(n,e){var o=n.height,r=n.id,i=n.crop,l=n.source,a=n.alt,d=n.ignoreMaxHeight,u=n.isTurntable,c=n.isHero,g={width:"100%",height:"100%",objectFit:"cover"};return d||(g.maxHeight="600px"),t.createElement(J,{ref:e,isTurntable:u,isHero:c,height:o,id:r},t.createElement(G,s({},i.imagePosition,{isHero:c}),t.createElement("img",{src:l,alt:a,style:g})))})),G=d.div(L||(L=g(["\n  position: relative;\n  left: ","%;\n  top: ","%;\n  width: ","%;\n  height: ","%;\n\n  ",";\n"])),(function(t){return t.x||0}),(function(t){return t.y||0}),(function(t){return t.width||100}),(function(t){return t.height||100}),(function(t){return t.isHero&&u(V||(V=g(["\n      position: static;\n      img {\n        object-fit: cover;\n        //margin-left: auto;\n        //margin-right: auto;\n        //width: auto !important;\n      }\n    "])))})),J=d.div(W||(W=g(["\n  width: 100%;\n  height: ",";\n  position: relative;\n  background-color: transparent;\n  overflow: hidden;\n"])),(function(t){var n=t.height,e=t.isTurntable,o=t.isHero;return e||o?"100%":n?n+"px":"100%"}));_.propTypes={height:c.number,id:c.string,crop:c.object,source:c.string.isRequired,alt:c.string,ignoreMaxHeight:c.bool,isTurntable:c.bool,isHero:c.bool},_.defaultProps={id:"",alt:"",ignoreMaxHeight:!1,crop:{}};var K=function(n){var e=n.config,o=n.disabledRedirect,r=void 0!==o&&o,i=n.disabledListClick,l=void 0!==i&&i,d=n.stickyOffset,u=void 0===d?0:d,c=n.isStatic,g=void 0!==c&&c,v=n.hideLogo,b=void 0!==v&&v,p=n.isPreview,f=void 0!==p&&p,x=e.height,S=e.navBarRegularColor,m=e.navBarHoverColor,h=e.navBarClickedColor,T=e.logoAlignment,B=e.logoCropperOptions,k=e.logoSrc,w=e.navBarTextAlignment,y=e.navBarTextFontSize,H=e.navBarTextFontFamily,R=e.navBarTextBold,F=e.navBarTextItalic,E=e.navBarTextUnderline,z=e.navBarTextRegularColor,P=e.structure,A=e.navBarTextHoverColor,O=e.navBarTextClickedColor,j=e.navBarTextSpacing,L=e.buttonSettingsRoundCorners,V=e.buttonSettingsBorderWidth,W=e.buttonSettingsRegularBorder,M=e.buttonSettingsRegularFill,N=e.buttonSettingsHorizontalPadding,D=e.buttonSettingsVerticalPadding,Z=e.buttonSettingsHoverClickedFill,q=e.buttonSettingsHoverClickedBorder,Y=e.buttonSettingsTextColorRegular,$=e.buttonSettingsTextColorHover,G=e.buttonSettingsTextColorClicked,J=e.navBarBehavior,K=e.dropdownSettingsInactiveFill,Q=e.dropdownSettingsInactiveBorder,X=e.dropdownSettingsHoverClickedFill,it=e.dropdownSettingsHoverClickedBorder,lt=e.dropdownSettingsTextColorRegular,at=e.dropdownSettingsTextColorHover,dt=e.dropdownSettingsTextColorClicked,ut=e.dropdownSettingsTextFontFamily,ct=e.dropdownSettingsTextFontSize,st=e.dropdownSettingsTextBold,gt=e.dropdownSettingsTextUnderline,vt=e.dropdownSettingsTextItalic,bt=e.dropdownSettingsHorizontalPadding,pt=e.dropdownSettingsVerticalPadding,ft=null;return b||(ft=t.createElement(et,null,t.createElement(_,{source:k+C(B),crop:B}))),t.createElement(nt,{height:x,navBarRegularColor:S,navBarBehavior:J,stickyOffset:u,className:"navbar-desktop"},t.createElement(ot,{height:x},"left"===T&&ft,t.createElement(rt,{navBarTextAlignment:w,navBarTextFontSize:y,navBarTextFontFamily:H,navBarTextBold:R,navBarTextItalic:F,navBarTextUnderline:E,navBarTextRegularColor:z,navBarTextSpacing:j,logoAlignment:T},0===(null==P?void 0:P.length)&&f?t.createElement(tt,null,"Navigation will preview here once created"):t.createElement(t.Fragment,null,null==P?void 0:P.map((function(n){var e=null;return"button"===n.type?e=t.createElement(U,s({},n,{disabledRedirect:r,buttonSettingsRoundCorners:L,buttonSettingsBorderWidth:V,buttonSettingsRegularBorder:W,buttonSettingsRegularFill:M,buttonSettingsVerticalPadding:D,buttonSettingsHorizontalPadding:N,buttonSettingsHoverClickedBorder:q,buttonSettingsHoverClickedFill:Z,buttonSettingsTextColorRegular:Y,buttonSettingsTextColorHover:$,buttonSettingsTextColorClicked:G,navBarTextFontSize:y})):"page"===n.type&&(e=t.createElement(I,s({},n,{disabledRedirect:r,disabledListClick:l,navBarTextHoverColor:A,navBarTextClickedColor:O,dropdownSettingsInactiveFill:K,dropdownSettingsInactiveBorder:Q,dropdownSettingsHoverClickedFill:X,dropdownSettingsHoverClickedBorder:it,dropdownSettingsTextColorRegular:lt,dropdownSettingsTextColorHover:at,dropdownSettingsTextColorClicked:dt,dropdownSettingsTextFontFamily:ut,dropdownSettingsTextFontSize:ct,dropdownSettingsTextBold:st,dropdownSettingsTextUnderline:gt,dropdownSettingsTextItalic:vt,dropdownSettingsHorizontalPadding:bt,dropdownSettingsVerticalPadding:pt,isStatic:g,navBarHoverColor:m,navBarClickedColor:h}))),t.createElement(a,{key:n.id},e)})))),"right"===T&&ft))};K.propTypes={config:c.object,disabledRedirect:c.bool,disabledListClick:c.bool,stickyOffset:c.number,isStatic:c.bool,hideLogo:c.bool,isPreview:c.bool};var Q,X,tt=d.div(N||(N=g(["\n  font-family: Montserrat-bold, sans-serif;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  font-size: 15px;\n  letter-spacing: 1.5px;\n  text-transform: uppercase;\n"]))),nt=d.div(D||(D=g(["\n  display: flex;\n  height: ","px;\n  background-color: ",";\n  padding: 0 50px;\n  width: 100%;\n  margin: auto;\n  align-items: center;\n  flex-shrink: 0;\n  z-index: 1002;\n\n  ",";\n"])),(function(t){return t.height}),(function(t){return t.navBarRegularColor}),(function(t){var n=t.navBarBehavior,e=t.stickyOffset;return"frozen"===n&&u(Z||(Z=g(["\n            position: sticky;\n            top: ","px;\n          "])),e)})),et=d.div(q||(q=g(["\n  width: ","px;\n  height: ","px;\n"])),100,50),ot=d.div(Y||(Y=g(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  max-width: 1120px;\n  margin: auto;\n  height: ","px;\n"])),(function(t){return t.height})),rt=d.div($||($=g(["\n  display: flex;\n  flex: 1 1 auto;\n  margin: ",";\n  justify-content: ",";\n  font-size: ","px;\n  font-family: ",";\n  font-weight: ",";\n  font-style: ",";\n  text-decoration: ",";\n  color: ",";\n  height: 100%;\n  align-items: center;\n\n  > div {\n    margin-right: ","px;\n\n    &:last-child {\n      margin-right: 0;\n    }\n  }\n"])),(function(t){return"right"===t.logoAlignment?"0 24px 0 0":"0 0 0 24px"}),(function(t){return t.navBarTextAlignment}),(function(t){return t.navBarTextFontSize}),(function(t){return t.navBarTextFontFamily}),(function(t){return t.navBarTextBold?"bold":"normal"}),(function(t){return t.navBarTextItalic?"italic":"normal"}),(function(t){return t.navBarTextUnderline?"underline":"none"}),(function(t){return t.navBarTextRegularColor}),(function(t){return t.navBarTextSpacing})),it=function(){return t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"19.94",height:"16.44",viewBox:"0 0 19.94 16.44"},t.createElement("path",{d:"M20.41,6.91H3.47a1.5,1.5,0,0,1,0-3H20.41A1.5,1.5,0,0,1,20.41,6.91Z",transform:"translate(-1.97 -3.91)"}),t.createElement("path",{d:"M20.41,13.91H3.47a1.5,1.5,0,0,1,0-3H20.41A1.5,1.5,0,0,1,20.41,13.91Z",transform:"translate(-1.97 -3.91)"}),t.createElement("path",{d:"M20.41,20.34H3.47a1.5,1.5,0,0,1,0-3H20.41A1.5,1.5,0,0,1,20.41,20.34Z",transform:"translate(-1.97 -3.91)"}))},lt=function(n){var e=n.children,o=n.onClick,r=n.mobileTextAlignment,i=n.link,l=n.isDropdown;return t.createElement(at,{onClick:o,mobileTextAlignment:r,"data-link":i,"data-isdropdown":l},e)},at=d.div(Q||(Q=g(["\n    padding: 15px;\n    display: flex;\n    justify-content: ",";\n"])),(function(t){return"center"===t.mobileTextAlignment?"center":"flex-start"}));lt.propTypes={children:c.any,onClick:c.func,link:c.string,isDropdown:c.bool};var dt,ut,ct=o((function(n){var e=n.link,o=n.disabledRedirect,r=n.title,l=n.buttonSettingsRoundCorners,a=n.buttonSettingsBorderWidth,d=n.buttonSettingsRegularBorder,u=n.buttonSettingsRegularFill,c=n.buttonSettingsHorizontalPadding,s=n.buttonSettingsVerticalPadding,g=n.buttonSettingsHoverClickedBorder,v=n.buttonSettingsHoverClickedFill,b=n.buttonSettingsTextColorRegular,p=n.buttonSettingsTextColorHover,f=n.buttonSettingsTextColorClicked,x=n.mobileTextAlignment,S=null==e?void 0:e.value,C=i((function(){S&&!o&&E(S)}),[S,o]);return t.createElement(lt,{onClick:C,link:S,mobileTextAlignment:x},t.createElement(st,{buttonSettingsRoundCorners:l,buttonSettingsBorderWidth:a,buttonSettingsRegularBorder:d,buttonSettingsRegularFill:u,buttonSettingsHorizontalPadding:c,buttonSettingsVerticalPadding:s,buttonSettingsHoverClickedBorder:g,buttonSettingsHoverClickedFill:v,buttonSettingsTextColorRegular:b,buttonSettingsTextColorHover:p,buttonSettingsTextColorClicked:f},r))})),st=d.div(X||(X=g(["\n  line-height: normal;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  border-radius: ","px;\n  border: ","px solid\n    ",";\n  background: ",";\n  padding: ",";\n  color: ",";\n\n  &:hover {\n    border: ","px solid\n      ",";\n    background: ",";\n    color: ",";\n  }\n\n  &:active {\n    border: ","px solid\n      ",";\n    background: ",";\n    color: ",";\n  }\n"])),(function(t){return t.buttonSettingsRoundCorners}),(function(t){return t.buttonSettingsBorderWidth}),(function(t){return t.buttonSettingsRegularBorder}),(function(t){return t.buttonSettingsRegularFill}),(function(t){var n=t.buttonSettingsVerticalPadding,e=t.buttonSettingsHorizontalPadding;return"".concat(n,"px ").concat(e,"px")}),(function(t){return t.buttonSettingsTextColorRegular}),(function(t){return t.buttonSettingsBorderWidth}),(function(t){return t.buttonSettingsHoverClickedBorder}),(function(t){return t.buttonSettingsHoverClickedFill}),(function(t){return t.buttonSettingsTextColorHover}),(function(t){return t.buttonSettingsBorderWidth}),(function(t){return t.buttonSettingsHoverClickedBorder}),(function(t){return t.buttonSettingsHoverClickedFill}),(function(t){return t.buttonSettingsTextColorClicked}));ct.propTypes={disabledRedirect:c.bool,title:c.string,link:c.string,buttonSettingsRoundCorners:c.number,buttonSettingsBorderWidth:c.number,buttonSettingsRegularBorder:c.string,buttonSettingsRegularFill:c.string,buttonSettingsVerticalPadding:c.number,buttonSettingsHorizontalPadding:c.number,buttonSettingsHoverClickedBorder:c.string,buttonSettingsHoverClickedFill:c.string,buttonSettingsTextColorRegular:c.string,buttonSettingsTextColorHover:c.string,buttonSettingsTextColorClicked:c.string};var gt,vt,bt,pt,ft,xt,St,Ct,mt=o((function(n){var e=n.disabledRedirect,o=n.disabledListClick,l=n.link,a=n.title,d=n.navBarTextHoverColor,u=n.navBarTextClickedColor,c=n.children,s=n.mobileTextAlignment,g=n.isStatic,b=null==l?void 0:l.value,p=v(r(g),2),f=p[0],x=p[1],S=c.length>0,C=i((function(){S&&!o?x((function(t){return!t})):S||e||!b||E(b)}),[o,e,S,b]);return t.createElement(ht,null,t.createElement(lt,{isDropdown:S,link:S?void 0:b,onClick:C,mobileTextAlignment:s},t.createElement(P,{navBarTextHoverColor:d,navBarTextClickedColor:u},a," ",S&&t.createElement(z,{"data-arrow":!0},f?t.createElement(m,{icon:F,rotate:g?-90:90,color:"#ffffff"}):t.createElement(m,{icon:F,rotate:-90,color:"#ffffff"})))),f&&S&&t.createElement(Tt,{"data-mobile-dropdown-list":!0},c.map((function(n){var o;return t.createElement(lt,{key:n.id,onClick:function(){var t;null!==(t=n.link)&&void 0!==t&&t.value&&!e&&E(n.link.value)},link:null===(o=n.link)||void 0===o?void 0:o.value,mobileTextAlignment:s},t.createElement(P,{navBarTextHoverColor:d,navBarTextClickedColor:u},n.title))}))))})),ht=d.div(dt||(dt=g(["\n  display: flex;\n  flex-direction: column;\n"]))),Tt=d.div(ut||(ut=g(["\n  display: flex;\n  flex-direction: column;\n"])));mt.propTypes={link:c.string,disabledRedirect:c.bool,disabledListClick:c.bool,title:c.string,navBarTextHoverColor:c.string,navBarTextClickedColor:c.string,children:c.array,mobileTextAlignment:c.string};var Bt=function(e){var o=e.config,l=e.stickyOffset,d=void 0===l?0:l,u=e.isConstructor,c=void 0!==u&&u,g=e.isStatic,b=void 0!==g&&g,p=e.disabledRedirect,f=void 0!==p&&p,x=e.disabledListClick,S=void 0!==x&&x,h=v(r(c),2),T=h[0],B=h[1];n((function(){c||(document.body.style.overflowY=T?"hidden":"auto")}),[c,T]);var k=o.mobileHeight,w=o.navBarRegularColor,y=o.mobileLogoAlignment,H=o.logoSrc,R=o.logoCropperOptions,F=o.navBarBehavior,E=o.mobileFontSize,z=o.navBarTextFontFamily,P=o.navBarTextBold,I=o.navBarTextItalic,A=o.navBarTextUnderline,O=o.navBarTextRegularColor,j=o.navBarTextSpacing,L=o.buttonSettingsRoundCorners,V=o.buttonSettingsBorderWidth,W=o.buttonSettingsRegularBorder,U=o.buttonSettingsRegularFill,M=o.buttonSettingsHorizontalPadding,N=o.buttonSettingsVerticalPadding,D=o.buttonSettingsHoverClickedFill,Z=o.buttonSettingsHoverClickedBorder,q=o.buttonSettingsTextColorRegular,Y=o.buttonSettingsTextColorHover,$=o.buttonSettingsTextColorClicked,G=o.mobileTextAlignment,J=o.navBarTextHoverColor,K=o.navBarTextClickedColor,Q=o.structure,X=i((function(){c||S||B((function(t){return!t}))}),[c,S]);return t.createElement(kt,{className:"navbar-mobile",navBarBehavior:F,stickyOffset:d,isConstructor:c},t.createElement(yt,{height:k,navBarRegularColor:w,"data-mobile-header":!0},t.createElement(Ft,{onClick:X,"data-mobile-menu-button":!0},t.createElement(m,{icon:it,color:"#ffffff"})),t.createElement(Ht,{mobileLogoAlignment:y},t.createElement(Rt,null,t.createElement(_,{source:H+C(R),crop:R})))),t.createElement(wt,{"data-mobile-menu":!0,mobileHeight:k,offsetTop:d+k,isConstructor:c,open:T,navBarRegularColor:w,mobileFontSize:E,navBarTextFontFamily:z,navBarTextBold:P,navBarTextItalic:I,navBarTextUnderline:A,navBarTextRegularColor:O,navBarTextSpacing:j},null==Q?void 0:Q.map((function(n){var e="any";return"button"===n.type?e=t.createElement(ct,s({},n,{mobileTextAlignment:G,disabledRedirect:c,buttonSettingsRoundCorners:L,buttonSettingsBorderWidth:V,buttonSettingsRegularBorder:W,buttonSettingsRegularFill:U,buttonSettingsVerticalPadding:N,buttonSettingsHorizontalPadding:M,buttonSettingsHoverClickedBorder:Z,buttonSettingsHoverClickedFill:D,buttonSettingsTextColorRegular:q,buttonSettingsTextColorHover:Y,buttonSettingsTextColorClicked:$})):"page"===n.type&&(e=t.createElement(mt,s({},n,{disabledRedirect:f,disabledListClick:S,navBarTextHoverColor:J,navBarTextClickedColor:K,mobileTextAlignment:G,isStatic:b}))),t.createElement(a,{key:n.id},e)}))))},kt=d.div(gt||(gt=g(["\n  z-index: 1001;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  ",";\n"])),(function(t){var n=t.navBarBehavior,e=t.stickyOffset,o=t.isConstructor;return"frozen"===n&&!o&&u(vt||(vt=g(["\n            position: sticky;\n            top: ","px;\n          "])),e)})),wt=d.div(bt||(bt=g(["\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: ","px;\n  width: 100%;\n  height: ",";\n  transition: height 0.5s ease;\n  background-color: ",";\n  overflow: hidden;\n  font-size: ","px;\n  font-family: ",";\n  font-weight: ",";\n  font-style: ",";\n  text-decoration: ",";\n  color: ",";\n  ",";\n"])),(function(t){return t.mobileHeight}),(function(t){return t.isConstructor?"auto":0}),(function(t){return t.navBarRegularColor}),(function(t){return t.mobileFontSize}),(function(t){return t.navBarTextFontFamily}),(function(t){return t.navBarTextBold?"bold":"normal"}),(function(t){return t.navBarTextItalic?"italic":"normal"}),(function(t){return t.navBarTextUnderline?"underline":"none"}),(function(t){return t.navBarTextRegularColor}),(function(t){var n=t.offsetTop,e=t.open;return!t.isConstructor&&e&&u(pt||(pt=g(["\n            height: calc(100vh - ","px);\n          "])),n)})),yt=d.div(ft||(ft=g(["\n  display: flex;\n  width: 100%;\n  padding: 15px 13px 16px 15px;\n  border: solid 1px rgba(164, 198, 225, 0.39);\n  height: ","px;\n  background-color: ",";\n  align-items: center;\n"])),(function(t){return t.height}),(function(t){return t.navBarRegularColor})),Ht=d.div(xt||(xt=g(["\n  display: flex;\n  flex: 1 1 auto;\n  justify-content: ",";\n"])),(function(t){var n=t.mobileLogoAlignment;return"center"===n?"center":"right"===n?"flex-end":""})),Rt=d.div(St||(St=g(["\n  width: ","px;\n  height: ","px;\n"])),100,50),Ft=d.div(Ct||(Ct=g(["\n  display: flex;\n  position: absolute;\n"])));Bt.propTypes={config:c.object,stickyOffset:c.number};export{K as NavBar,Bt as NavBarMobile,x as logoImageHeight,f as logoImageWidth};
//# sourceMappingURL=index.esm.js.map

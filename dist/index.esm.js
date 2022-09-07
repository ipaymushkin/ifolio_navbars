import t,{useEffect as n,createRef as e,memo as o,useState as r,useCallback as i,forwardRef as l,Fragment as a}from"react";import d,{css as u}from"styled-components";import c from"prop-types";function s(){return s=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t},s.apply(this,arguments)}function g(t,n){return n||(n=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}}))}function v(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==e)return;var o,r,i=[],l=!0,a=!1;try{for(e=e.call(t);!(l=(o=e.next()).done)&&(i.push(o.value),!n||i.length!==n);l=!0);}catch(t){a=!0,r=t}finally{try{l||null==e.return||e.return()}finally{if(a)throw r}}return i}(t,n)||function(t,n){if(!t)return;if("string"==typeof t)return p(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return p(t,n)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,o=new Array(n);e<n;e++)o[e]=t[e];return o}var b,f=100,S=50,x=function(t){return Math.floor(t)},C=function(t){if(!t||0===Object.keys(t).length)return"";var n=t.imageBox,e=t.rotate,o=n.x,r=n.y,i=n.height,l=n.width;return"?x=".concat(x(o),"&y=").concat(x(r),"&w=").concat(x(l),"&h=").concat(x(i),"&rotate=").concat(e)},m=function(n){var e=n.icon,o=n.opacity,r=void 0===o?1:o,i=n.hoverOpacity,l=void 0===i?1:i,a=n.color,d=void 0===a?"#000":a,u=n.hoverColor,c=void 0===u?d:u,s=n.size,g=void 0===s?20:s,v=n.rotate,p=n.noCursor,b=n.padding,f=void 0===b?0:b,S=n.width,x=n.height,C=n.tableIcon;return t.createElement(T,{color:d,hoverColor:c,size:g,width:S,height:x,opacity:r,hoverOpacity:l,rotate:v,noCursor:p,padding:f,tableIcon:C},h(e))},h=function(n){var e=n;return"function"==typeof n?t.createElement(e,null):"string"==typeof n?n:null},T=d.div(b||(b=g(["\n  cursor: ",";\n  display: ",";\n  flex: 0 0 auto;\n  align-items: center;\n  font-size: ",";\n  width: ","px;\n  height: ","px;\n  transform: rotate(","deg);\n  transform-origin: 50% 50%;\n  padding: ","px;\n\n  :hover {\n    svg {\n      fill: ",";\n      opacity: ",";\n    }\n  }\n\n  svg {\n    fill: ",";\n    opacity: ",";\n    width: 100%;\n    height: 100%;\n    transition: all ease-in-out 0.3s;\n    vertical-align: ",";\n  }\n"])),(function(t){return t.noCursor?"initial":"pointer"}),(function(t){return t.tableIcon?"table-cell":"flex"}),(function(t){return!t.tableIcon&&"0"}),(function(t){var n=t.size,e=t.width;return e||n}),(function(t){var n=t.size,e=t.height;return e||n}),(function(t){return t.rotate}),(function(t){return t.padding}),(function(t){return t.hoverColor}),(function(t){return t.hoverOpacity}),(function(t){return t.color}),(function(t){return t.opacity}),(function(t){return t.tableIcon&&"middle"}));m.propTypes={color:c.string,hoverColor:c.string,icon:c.oneOfType([c.string,c.func]),size:c.number,padding:c.number,opacity:c.number,hoverOpacity:c.number,rotate:c.number,noCursor:c.bool,width:c.number,height:c.number,tableIcon:c.bool},m.defaultProps={opacity:1,color:"#000",size:20,padding:0,rotate:0,noCursor:!1,tableIcon:!1};var B,k,w,y,H,R,F=function(){return t.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24"},t.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),t.createElement("path",{d:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"}))},E=function(t){return window.open(t,"_blank","noreferrer noopener")},z=d.div(B||(B=g([""]))),P=d.div(k||(k=g(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  height: 100%;\n\n  &:hover {\n    color: ",";\n  }\n\n  &:active {\n    color: ",";\n  }\n"])),(function(t){return t.navBarTextHoverColor}),(function(t){return t.navBarTextClickedColor})),I=o((function(o){var l=o.disabledRedirect,a=o.disabledListClick,d=o.link,u=o.title,c=o.navBarTextHoverColor,s=o.navBarTextClickedColor,g=o.children,p=o.dropdownSettingsInactiveFill,b=o.dropdownSettingsInactiveBorder,f=o.dropdownSettingsHoverClickedFill,S=o.dropdownSettingsHoverClickedBorder,x=o.dropdownSettingsTextColorRegular,C=o.dropdownSettingsTextColorHover,h=o.dropdownSettingsTextColorClicked,T=o.dropdownSettingsTextFontFamily,B=o.dropdownSettingsTextFontSize,k=o.dropdownSettingsTextBold,w=o.dropdownSettingsTextUnderline,y=o.dropdownSettingsTextItalic,H=o.dropdownSettingsHorizontalPadding,R=o.dropdownSettingsVerticalPadding,I=o.isStatic,L=o.navBarHoverColor,V=o.navBarClickedColor,W=v(r(I),2),U=W[0],M=W[1],N=null==d?void 0:d.value,D=function(t){var o=e(),r=function(n){!o.current||null!=o&&o.current.contains(n.target)||t(n,o.current)};return n((function(){return document.addEventListener("mousedown",r),document.addEventListener("touchstart",r),function(){document.removeEventListener("mousedown",r),document.removeEventListener("touchstart",r)}})),o}((function(){M(!1)})),Z=g.length>0,q=i((function(){Z&&!a?M((function(t){return!t})):Z||l||!N||E(N)}),[a,l,Z,N]);return t.createElement(A,{ref:D,navBarHoverColor:L,navBarClickedColor:V},t.createElement(P,{navBarTextHoverColor:c,navBarTextClickedColor:s,onClick:q,"data-link":Z?void 0:N,"data-isdropdown":Z},u," ",Z&&t.createElement(z,{"data-arrow":!0},U?t.createElement(m,{icon:F,rotate:I?-90:90,color:"#ffffff"}):t.createElement(m,{icon:F,rotate:-90,color:"#ffffff"}))),U&&Z&&t.createElement(O,{"data-list":!0,className:"navbar-list"},g.map((function(n){var e;return t.createElement(j,{key:n.id,dropdownSettingsInactiveFill:p,dropdownSettingsInactiveBorder:b,dropdownSettingsHoverClickedFill:f,dropdownSettingsHoverClickedBorder:S,dropdownSettingsTextColorRegular:x,dropdownSettingsTextColorHover:C,dropdownSettingsTextColorClicked:h,dropdownSettingsTextFontFamily:T,dropdownSettingsTextFontSize:B,dropdownSettingsTextBold:k,dropdownSettingsTextUnderline:w,dropdownSettingsTextItalic:y,dropdownSettingsHorizontalPadding:H,dropdownSettingsVerticalPadding:R,onClick:function(){var t;null!==(t=n.link)&&void 0!==t&&t.value&&!l?(E(n.link.value),M(!1)):M(!1)},"data-link":null===(e=n.link)||void 0===e?void 0:e.value},n.title)}))))})),A=d.div(w||(w=g(["\n  position: relative;\n  height: 100%;\n  \n  &:hover {\n    background: ",";\n  }\n\n  &:active {\n    background: ",";\n  }\n"])),(function(t){return t.navBarHoverColor}),(function(t){return t.navBarClickedColor})),O=d.div(y||(y=g(["\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1;\n"]))),j=d.div(H||(H=g(["\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n  cursor: pointer;\n  background: ",";\n  border: 2px solid ",";\n  color: ",";\n  font-size: ","px;\n  font-family: ",";\n  font-weight: ",";\n  font-style: ",";\n  text-decoration: ",";\n  padding: ",";\n\n  &:hover {\n    background: ",";\n    border: 2px solid ",";\n    color: ",";\n  }\n\n  &:active {\n    background: ",";\n    border: 2px solid ",";\n    color: ",";\n  }\n"])),(function(t){return t.dropdownSettingsInactiveFill}),(function(t){return t.dropdownSettingsInactiveBorder}),(function(t){return t.dropdownSettingsTextColorRegular}),(function(t){return t.dropdownSettingsTextFontSize}),(function(t){return t.dropdownSettingsTextFontFamily}),(function(t){return t.dropdownSettingsTextBold?"bold":"normal"}),(function(t){return t.dropdownSettingsTextItalic?"italic":"normal"}),(function(t){return t.dropdownSettingsTextUnderline?"underline":"none"}),(function(t){var n=t.dropdownSettingsVerticalPadding,e=t.dropdownSettingsHorizontalPadding;return"".concat(n,"px ").concat(e,"px")}),(function(t){return t.dropdownSettingsHoverClickedFill}),(function(t){return t.dropdownSettingsHoverClickedBorder}),(function(t){return t.dropdownSettingsTextColorHover}),(function(t){return t.dropdownSettingsHoverClickedFill}),(function(t){return t.dropdownSettingsHoverClickedBorder}),(function(t){return t.dropdownSettingsTextColorClicked}));I.propTypes={link:c.string,disabledRedirect:c.bool,disabledListClick:c.bool,title:c.string,navBarTextHoverColor:c.string,navBarTextClickedColor:c.string,children:c.array,dropdownSettingsInactiveFill:c.string,dropdownSettingsInactiveBorder:c.string,dropdownSettingsHoverClickedFill:c.string,dropdownSettingsHoverClickedBorder:c.string,dropdownSettingsTextColorRegular:c.string,dropdownSettingsTextColorHover:c.string,dropdownSettingsTextColorClicked:c.string,dropdownSettingsTextFontFamily:c.string,dropdownSettingsTextFontSize:c.number,dropdownSettingsTextBold:c.bool,dropdownSettingsTextUnderline:c.bool,dropdownSettingsTextItalic:c.bool,dropdownSettingsHorizontalPadding:c.number,dropdownSettingsVerticalPadding:c.number,navBarHoverColor:c.string,navBarClickedColor:c.string};var L,V,W,U=o((function(n){var e=n.link,o=n.disabledRedirect,r=n.title,l=n.buttonSettingsRoundCorners,a=n.buttonSettingsBorderWidth,d=n.buttonSettingsRegularBorder,u=n.buttonSettingsRegularFill,c=n.buttonSettingsHorizontalPadding,s=n.buttonSettingsVerticalPadding,g=n.buttonSettingsHoverClickedBorder,v=n.buttonSettingsHoverClickedFill,p=n.buttonSettingsTextColorRegular,b=n.buttonSettingsTextColorHover,f=n.buttonSettingsTextColorClicked,S=n.navBarTextFontSize,x=null==e?void 0:e.value,C=i((function(){x&&!o&&E(x)}),[x,o]);return t.createElement(M,{buttonSettingsRoundCorners:l,buttonSettingsBorderWidth:a,buttonSettingsRegularBorder:d,buttonSettingsRegularFill:u,buttonSettingsHorizontalPadding:c,buttonSettingsVerticalPadding:s,buttonSettingsHoverClickedBorder:g,buttonSettingsHoverClickedFill:v,buttonSettingsTextColorRegular:p,buttonSettingsTextColorHover:b,buttonSettingsTextColorClicked:f,onClick:C,"data-link":x,navBarTextFontSize:S},r)})),M=d.div(R||(R=g(["\n  line-height: normal;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  border-radius: ","px;\n  border: ","px solid ",";\n  background: ",";\n  padding: ",";\n  color: ",";\n  height: ","px;\n\n  &:hover {\n    border: ","px solid ",";\n    background: ",";\n    color: ",";\n  }\n\n  &:active {\n    border: ","px solid ",";\n    background: ",";\n    color: ",";\n  }\n"])),(function(t){return t.buttonSettingsRoundCorners}),(function(t){return t.buttonSettingsBorderWidth}),(function(t){return t.buttonSettingsRegularBorder}),(function(t){return t.buttonSettingsRegularFill}),(function(t){var n=t.buttonSettingsHorizontalPadding;return"0 ".concat(n,"px")}),(function(t){return t.buttonSettingsTextColorRegular}),(function(t){var n=t.buttonSettingsVerticalPadding;return t.navBarTextFontSize+2*(n||0)+2*(t.buttonSettingsBorderWidth||0)}),(function(t){return t.buttonSettingsBorderWidth}),(function(t){return t.buttonSettingsHoverClickedBorder}),(function(t){return t.buttonSettingsHoverClickedFill}),(function(t){return t.buttonSettingsTextColorHover}),(function(t){return t.buttonSettingsBorderWidth}),(function(t){return t.buttonSettingsHoverClickedBorder}),(function(t){return t.buttonSettingsHoverClickedFill}),(function(t){return t.buttonSettingsTextColorClicked}));U.propTypes={disabledRedirect:c.bool,title:c.string,link:c.string,buttonSettingsRoundCorners:c.number,buttonSettingsBorderWidth:c.number,buttonSettingsRegularBorder:c.string,buttonSettingsRegularFill:c.string,buttonSettingsVerticalPadding:c.number,buttonSettingsHorizontalPadding:c.number,buttonSettingsHoverClickedBorder:c.string,buttonSettingsHoverClickedFill:c.string,buttonSettingsTextColorRegular:c.string,buttonSettingsTextColorHover:c.string,buttonSettingsTextColorClicked:c.string,navBarTextFontSize:c.number};var N,D,Z,q,Y,$,_=l((function(n,e){var o=n.height,r=n.id,i=n.crop,l=n.source,a=n.alt,d=n.ignoreMaxHeight,u=n.isTurntable,c=n.isHero,g={width:"100%",height:"100%",objectFit:"cover"};return d||(g.maxHeight="600px"),t.createElement(J,{ref:e,isTurntable:u,isHero:c,height:o,id:r},t.createElement(G,s({},i.imagePosition,{isHero:c}),t.createElement("img",{src:l,alt:a,style:g})))})),G=d.div(L||(L=g(["\n  position: relative;\n  left: ","%;\n  top: ","%;\n  width: ","%;\n  height: ","%;\n\n  ",";\n"])),(function(t){return t.x||0}),(function(t){return t.y||0}),(function(t){return t.width||100}),(function(t){return t.height||100}),(function(t){return t.isHero&&u(V||(V=g(["\n      position: static;\n      img {\n        object-fit: cover;\n        //margin-left: auto;\n        //margin-right: auto;\n        //width: auto !important;\n      }\n    "])))})),J=d.div(W||(W=g(["\n  width: 100%;\n  height: ",";\n  position: relative;\n  background-color: transparent;\n  overflow: hidden;\n"])),(function(t){var n=t.height,e=t.isTurntable,o=t.isHero;return e||o?"100%":n?n+"px":"100%"}));_.propTypes={height:c.number,id:c.string,crop:c.object,source:c.string.isRequired,alt:c.string,ignoreMaxHeight:c.bool,isTurntable:c.bool,isHero:c.bool},_.defaultProps={id:"",alt:"",ignoreMaxHeight:!1,crop:{}};var K=function(n){var e=n.logoSrc,o=n.logoCropperOptions,r=n.hidden;return t.createElement(ot,{hidden:r},t.createElement(_,{source:e+C(o),crop:o}))},Q=function(n){var e=n.config,o=n.disabledRedirect,r=void 0!==o&&o,i=n.disabledListClick,l=void 0!==i&&i,d=n.stickyOffset,u=void 0===d?0:d,c=n.isStatic,g=void 0!==c&&c,v=n.hideLogo,p=void 0!==v&&v,b=n.isPreview,f=void 0!==b&&b,S=e.height,x=e.navBarRegularColor,C=e.navBarHoverColor,m=e.navBarClickedColor,h=e.logoAlignment,T=e.logoCropperOptions,B=e.logoSrc,k=e.navBarTextAlignment,w=e.navBarTextFontSize,y=e.navBarTextFontFamily,H=e.navBarTextBold,R=e.navBarTextItalic,F=e.navBarTextUnderline,E=e.navBarTextRegularColor,z=e.structure,P=e.navBarTextHoverColor,A=e.navBarTextClickedColor,O=e.navBarTextSpacing,j=e.buttonSettingsRoundCorners,L=e.buttonSettingsBorderWidth,V=e.buttonSettingsRegularBorder,W=e.buttonSettingsRegularFill,M=e.buttonSettingsHorizontalPadding,N=e.buttonSettingsVerticalPadding,D=e.buttonSettingsHoverClickedFill,Z=e.buttonSettingsHoverClickedBorder,q=e.buttonSettingsTextColorRegular,Y=e.buttonSettingsTextColorHover,$=e.buttonSettingsTextColorClicked,_=e.navBarBehavior,G=e.dropdownSettingsInactiveFill,J=e.dropdownSettingsInactiveBorder,Q=e.dropdownSettingsHoverClickedFill,X=e.dropdownSettingsHoverClickedBorder,tt=e.dropdownSettingsTextColorRegular,ot=e.dropdownSettingsTextColorHover,lt=e.dropdownSettingsTextColorClicked,at=e.dropdownSettingsTextFontFamily,dt=e.dropdownSettingsTextFontSize,ut=e.dropdownSettingsTextBold,ct=e.dropdownSettingsTextUnderline,st=e.dropdownSettingsTextItalic,gt=e.dropdownSettingsHorizontalPadding,vt=e.dropdownSettingsVerticalPadding;return t.createElement(et,{height:S,navBarRegularColor:x,navBarBehavior:_,stickyOffset:u,className:"navbar-desktop"},t.createElement(rt,{height:S},t.createElement(K,{logoSrc:B,logoCropperOptions:T,hidden:p||"left"!==h}),t.createElement(it,{navBarTextAlignment:k,navBarTextFontSize:w,navBarTextFontFamily:y,navBarTextBold:H,navBarTextItalic:R,navBarTextUnderline:F,navBarTextRegularColor:E,navBarTextSpacing:O},0===(null==z?void 0:z.length)&&f?t.createElement(nt,null,"Navigation will preview here once created"):t.createElement(t.Fragment,null,null==z?void 0:z.map((function(n){var e=null;return"button"===n.type?e=t.createElement(U,s({},n,{disabledRedirect:r,buttonSettingsRoundCorners:j,buttonSettingsBorderWidth:L,buttonSettingsRegularBorder:V,buttonSettingsRegularFill:W,buttonSettingsVerticalPadding:N,buttonSettingsHorizontalPadding:M,buttonSettingsHoverClickedBorder:Z,buttonSettingsHoverClickedFill:D,buttonSettingsTextColorRegular:q,buttonSettingsTextColorHover:Y,buttonSettingsTextColorClicked:$,navBarTextFontSize:w})):"page"===n.type&&(e=t.createElement(I,s({},n,{disabledRedirect:r,disabledListClick:l,navBarTextHoverColor:P,navBarTextClickedColor:A,dropdownSettingsInactiveFill:G,dropdownSettingsInactiveBorder:J,dropdownSettingsHoverClickedFill:Q,dropdownSettingsHoverClickedBorder:X,dropdownSettingsTextColorRegular:tt,dropdownSettingsTextColorHover:ot,dropdownSettingsTextColorClicked:lt,dropdownSettingsTextFontFamily:at,dropdownSettingsTextFontSize:dt,dropdownSettingsTextBold:ut,dropdownSettingsTextUnderline:ct,dropdownSettingsTextItalic:st,dropdownSettingsHorizontalPadding:gt,dropdownSettingsVerticalPadding:vt,isStatic:g,navBarHoverColor:C,navBarClickedColor:m}))),t.createElement(a,{key:n.id},e)})))),t.createElement(K,{logoSrc:B,logoCropperOptions:T,hidden:p||"right"!==h})))};Q.propTypes={config:c.object,disabledRedirect:c.bool,disabledListClick:c.bool,stickyOffset:c.number,isStatic:c.bool,hideLogo:c.bool,isPreview:c.bool};var X,tt,nt=d.div(N||(N=g(["\n  font-family: Montserrat-bold, sans-serif;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  font-size: 15px;\n  letter-spacing: 1.5px;\n  text-transform: uppercase;\n"]))),et=d.div(D||(D=g(["\n  display: flex;\n  height: ","px;\n  background-color: ",";\n  padding: 0 50px;\n  width: 100%;\n  margin: auto;\n  align-items: center;\n  flex-shrink: 0;\n  z-index: 1002;\n\n  ",";\n"])),(function(t){return t.height}),(function(t){return t.navBarRegularColor}),(function(t){var n=t.navBarBehavior,e=t.stickyOffset;return"frozen"===n&&u(Z||(Z=g(["\n            position: sticky;\n            top: ","px;\n          "])),e)})),ot=d.div(q||(q=g(["\n  width: ","px;\n  height: ","px;\n  opacity: ",";\n"])),100,50,(function(t){return t.hidden?0:1})),rt=d.div(Y||(Y=g(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  max-width: 1120px;\n  margin: auto;\n  height: ","px;\n"])),(function(t){return t.height})),it=d.div($||($=g(["\n  display: flex;\n  flex: 1 1 auto;\n  margin: 0 24px;\n  justify-content: ",";\n  font-size: ","px;\n  font-family: ",";\n  font-weight: ",";\n  font-style: ",";\n  text-decoration: ",";\n  color: ",";\n  height: 100%;\n  align-items: center;\n\n  > div {\n    margin-right: ","px;\n\n    &:last-child {\n      margin-right: 0;\n    }\n  }\n"])),(function(t){return t.navBarTextAlignment}),(function(t){return t.navBarTextFontSize}),(function(t){return t.navBarTextFontFamily}),(function(t){return t.navBarTextBold?"bold":"normal"}),(function(t){return t.navBarTextItalic?"italic":"normal"}),(function(t){return t.navBarTextUnderline?"underline":"none"}),(function(t){return t.navBarTextRegularColor}),(function(t){return t.navBarTextSpacing})),lt=function(){return t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"19.94",height:"16.44",viewBox:"0 0 19.94 16.44"},t.createElement("path",{d:"M20.41,6.91H3.47a1.5,1.5,0,0,1,0-3H20.41A1.5,1.5,0,0,1,20.41,6.91Z",transform:"translate(-1.97 -3.91)"}),t.createElement("path",{d:"M20.41,13.91H3.47a1.5,1.5,0,0,1,0-3H20.41A1.5,1.5,0,0,1,20.41,13.91Z",transform:"translate(-1.97 -3.91)"}),t.createElement("path",{d:"M20.41,20.34H3.47a1.5,1.5,0,0,1,0-3H20.41A1.5,1.5,0,0,1,20.41,20.34Z",transform:"translate(-1.97 -3.91)"}))},at=function(n){var e=n.children,o=n.onClick,r=n.mobileTextAlignment,i=n.link,l=n.isDropdown;return t.createElement(dt,{onClick:o,mobileTextAlignment:r,"data-link":i,"data-isdropdown":l},e)},dt=d.div(X||(X=g(["\n    padding: 15px;\n    display: flex;\n    justify-content: ",";\n"])),(function(t){return"center"===t.mobileTextAlignment?"center":"flex-start"}));at.propTypes={children:c.any,onClick:c.func,link:c.string,isDropdown:c.bool};var ut,ct,st=o((function(n){var e=n.link,o=n.disabledRedirect,r=n.title,l=n.buttonSettingsRoundCorners,a=n.buttonSettingsBorderWidth,d=n.buttonSettingsRegularBorder,u=n.buttonSettingsRegularFill,c=n.buttonSettingsHorizontalPadding,s=n.buttonSettingsVerticalPadding,g=n.buttonSettingsHoverClickedBorder,v=n.buttonSettingsHoverClickedFill,p=n.buttonSettingsTextColorRegular,b=n.buttonSettingsTextColorHover,f=n.buttonSettingsTextColorClicked,S=n.mobileTextAlignment,x=null==e?void 0:e.value,C=i((function(){x&&!o&&E(x)}),[x,o]);return t.createElement(at,{onClick:C,link:x,mobileTextAlignment:S},t.createElement(gt,{buttonSettingsRoundCorners:l,buttonSettingsBorderWidth:a,buttonSettingsRegularBorder:d,buttonSettingsRegularFill:u,buttonSettingsHorizontalPadding:c,buttonSettingsVerticalPadding:s,buttonSettingsHoverClickedBorder:g,buttonSettingsHoverClickedFill:v,buttonSettingsTextColorRegular:p,buttonSettingsTextColorHover:b,buttonSettingsTextColorClicked:f},r))})),gt=d.div(tt||(tt=g(["\n  line-height: normal;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  border-radius: ","px;\n  border: ","px solid\n    ",";\n  background: ",";\n  padding: ",";\n  color: ",";\n\n  &:hover {\n    border: ","px solid\n      ",";\n    background: ",";\n    color: ",";\n  }\n\n  &:active {\n    border: ","px solid\n      ",";\n    background: ",";\n    color: ",";\n  }\n"])),(function(t){return t.buttonSettingsRoundCorners}),(function(t){return t.buttonSettingsBorderWidth}),(function(t){return t.buttonSettingsRegularBorder}),(function(t){return t.buttonSettingsRegularFill}),(function(t){var n=t.buttonSettingsVerticalPadding,e=t.buttonSettingsHorizontalPadding;return"".concat(n,"px ").concat(e,"px")}),(function(t){return t.buttonSettingsTextColorRegular}),(function(t){return t.buttonSettingsBorderWidth}),(function(t){return t.buttonSettingsHoverClickedBorder}),(function(t){return t.buttonSettingsHoverClickedFill}),(function(t){return t.buttonSettingsTextColorHover}),(function(t){return t.buttonSettingsBorderWidth}),(function(t){return t.buttonSettingsHoverClickedBorder}),(function(t){return t.buttonSettingsHoverClickedFill}),(function(t){return t.buttonSettingsTextColorClicked}));st.propTypes={disabledRedirect:c.bool,title:c.string,link:c.string,buttonSettingsRoundCorners:c.number,buttonSettingsBorderWidth:c.number,buttonSettingsRegularBorder:c.string,buttonSettingsRegularFill:c.string,buttonSettingsVerticalPadding:c.number,buttonSettingsHorizontalPadding:c.number,buttonSettingsHoverClickedBorder:c.string,buttonSettingsHoverClickedFill:c.string,buttonSettingsTextColorRegular:c.string,buttonSettingsTextColorHover:c.string,buttonSettingsTextColorClicked:c.string};var vt,pt,bt,ft,St,xt,Ct,mt,ht=o((function(n){var e=n.disabledRedirect,o=n.disabledListClick,l=n.link,a=n.title,d=n.navBarTextHoverColor,u=n.navBarTextClickedColor,c=n.children,s=n.mobileTextAlignment,g=n.isStatic,p=null==l?void 0:l.value,b=v(r(g),2),f=b[0],S=b[1],x=c.length>0,C=i((function(){x&&!o?S((function(t){return!t})):x||e||!p||E(p)}),[o,e,x,p]);return t.createElement(Tt,null,t.createElement(at,{isDropdown:x,link:x?void 0:p,onClick:C,mobileTextAlignment:s},t.createElement(P,{navBarTextHoverColor:d,navBarTextClickedColor:u},a," ",x&&t.createElement(z,{"data-arrow":!0},f?t.createElement(m,{icon:F,rotate:g?-90:90,color:"#ffffff"}):t.createElement(m,{icon:F,rotate:-90,color:"#ffffff"})))),f&&x&&t.createElement(Bt,{"data-mobile-dropdown-list":!0},c.map((function(n){var o;return t.createElement(at,{key:n.id,onClick:function(){var t;null!==(t=n.link)&&void 0!==t&&t.value&&!e&&E(n.link.value)},link:null===(o=n.link)||void 0===o?void 0:o.value,mobileTextAlignment:s},t.createElement(P,{navBarTextHoverColor:d,navBarTextClickedColor:u},n.title))}))))})),Tt=d.div(ut||(ut=g(["\n  display: flex;\n  flex-direction: column;\n"]))),Bt=d.div(ct||(ct=g(["\n  display: flex;\n  flex-direction: column;\n"])));ht.propTypes={link:c.string,disabledRedirect:c.bool,disabledListClick:c.bool,title:c.string,navBarTextHoverColor:c.string,navBarTextClickedColor:c.string,children:c.array,mobileTextAlignment:c.string};var kt=function(e){var o=e.config,l=e.stickyOffset,d=void 0===l?0:l,u=e.isConstructor,c=void 0!==u&&u,g=e.isStatic,p=void 0!==g&&g,b=e.disabledRedirect,f=void 0!==b&&b,S=e.disabledListClick,x=void 0!==S&&S,h=v(r(c),2),T=h[0],B=h[1];n((function(){c||(document.body.style.overflowY=T?"hidden":"auto")}),[c,T]);var k=o.mobileHeight,w=o.navBarRegularColor,y=o.mobileLogoAlignment,H=o.logoSrc,R=o.logoCropperOptions,F=o.navBarBehavior,E=o.mobileFontSize,z=o.navBarTextFontFamily,P=o.navBarTextBold,I=o.navBarTextItalic,A=o.navBarTextUnderline,O=o.navBarTextRegularColor,j=o.navBarTextSpacing,L=o.buttonSettingsRoundCorners,V=o.buttonSettingsBorderWidth,W=o.buttonSettingsRegularBorder,U=o.buttonSettingsRegularFill,M=o.buttonSettingsHorizontalPadding,N=o.buttonSettingsVerticalPadding,D=o.buttonSettingsHoverClickedFill,Z=o.buttonSettingsHoverClickedBorder,q=o.buttonSettingsTextColorRegular,Y=o.buttonSettingsTextColorHover,$=o.buttonSettingsTextColorClicked,G=o.mobileTextAlignment,J=o.navBarTextHoverColor,K=o.navBarTextClickedColor,Q=o.structure,X=i((function(){c||x||B((function(t){return!t}))}),[c,x]);return t.createElement(wt,{className:"navbar-mobile",navBarBehavior:F,stickyOffset:d,isConstructor:c},t.createElement(Ht,{height:k,navBarRegularColor:w,"data-mobile-header":!0},t.createElement(Et,{onClick:X,"data-mobile-menu-button":!0},t.createElement(m,{icon:lt,color:"#ffffff"})),t.createElement(Rt,{mobileLogoAlignment:y},t.createElement(Ft,null,t.createElement(_,{source:H+C(R),crop:R})))),t.createElement(yt,{"data-mobile-menu":!0,mobileHeight:k,offsetTop:d+k,isConstructor:c,open:T,navBarRegularColor:w,mobileFontSize:E,navBarTextFontFamily:z,navBarTextBold:P,navBarTextItalic:I,navBarTextUnderline:A,navBarTextRegularColor:O,navBarTextSpacing:j},null==Q?void 0:Q.map((function(n){var e="any";return"button"===n.type?e=t.createElement(st,s({},n,{mobileTextAlignment:G,disabledRedirect:c,buttonSettingsRoundCorners:L,buttonSettingsBorderWidth:V,buttonSettingsRegularBorder:W,buttonSettingsRegularFill:U,buttonSettingsVerticalPadding:N,buttonSettingsHorizontalPadding:M,buttonSettingsHoverClickedBorder:Z,buttonSettingsHoverClickedFill:D,buttonSettingsTextColorRegular:q,buttonSettingsTextColorHover:Y,buttonSettingsTextColorClicked:$})):"page"===n.type&&(e=t.createElement(ht,s({},n,{disabledRedirect:f,disabledListClick:x,navBarTextHoverColor:J,navBarTextClickedColor:K,mobileTextAlignment:G,isStatic:p}))),t.createElement(a,{key:n.id},e)}))))},wt=d.div(vt||(vt=g(["\n  z-index: 1001;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  ",";\n"])),(function(t){var n=t.navBarBehavior,e=t.stickyOffset,o=t.isConstructor;return"frozen"===n&&!o&&u(pt||(pt=g(["\n            position: sticky;\n            top: ","px;\n          "])),e)})),yt=d.div(bt||(bt=g(["\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: ","px;\n  width: 100%;\n  height: ",";\n  transition: height 0.5s ease;\n  background-color: ",";\n  overflow: hidden;\n  font-size: ","px;\n  font-family: ",";\n  font-weight: ",";\n  font-style: ",";\n  text-decoration: ",";\n  color: ",";\n  ",";\n"])),(function(t){return t.mobileHeight}),(function(t){return t.isConstructor?"auto":0}),(function(t){return t.navBarRegularColor}),(function(t){return t.mobileFontSize}),(function(t){return t.navBarTextFontFamily}),(function(t){return t.navBarTextBold?"bold":"normal"}),(function(t){return t.navBarTextItalic?"italic":"normal"}),(function(t){return t.navBarTextUnderline?"underline":"none"}),(function(t){return t.navBarTextRegularColor}),(function(t){var n=t.offsetTop,e=t.open;return!t.isConstructor&&e&&u(ft||(ft=g(["\n            height: calc(100vh - ","px);\n          "])),n)})),Ht=d.div(St||(St=g(["\n  display: flex;\n  width: 100%;\n  padding: 15px 13px 16px 15px;\n  border: solid 1px rgba(164, 198, 225, 0.39);\n  height: ","px;\n  background-color: ",";\n  align-items: center;\n"])),(function(t){return t.height}),(function(t){return t.navBarRegularColor})),Rt=d.div(xt||(xt=g(["\n  display: flex;\n  flex: 1 1 auto;\n  justify-content: ",";\n"])),(function(t){var n=t.mobileLogoAlignment;return"center"===n?"center":"right"===n?"flex-end":""})),Ft=d.div(Ct||(Ct=g(["\n  width: ","px;\n  height: ","px;\n"])),100,50),Et=d.div(mt||(mt=g(["\n  display: flex;\n  position: absolute;\n"])));kt.propTypes={config:c.object,stickyOffset:c.number};export{Q as NavBar,kt as NavBarMobile,S as logoImageHeight,f as logoImageWidth};
//# sourceMappingURL=index.esm.js.map

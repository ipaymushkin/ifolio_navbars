import t,{useEffect as n,createRef as e,memo as o,useState as r,useCallback as i,forwardRef as l,Fragment as a}from"react";import d,{css as u}from"styled-components";import c from"prop-types";function s(){return s=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t},s.apply(this,arguments)}function g(t,n){return n||(n=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}}))}function v(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==e)return;var o,r,i=[],l=!0,a=!1;try{for(e=e.call(t);!(l=(o=e.next()).done)&&(i.push(o.value),!n||i.length!==n);l=!0);}catch(t){a=!0,r=t}finally{try{l||null==e.return||e.return()}finally{if(a)throw r}}return i}(t,n)||function(t,n){if(!t)return;if("string"==typeof t)return p(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return p(t,n)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,o=new Array(n);e<n;e++)o[e]=t[e];return o}var f,b=100,x=50,S=function(t){return Math.floor(t)},m=function(t){if(!t||0===Object.keys(t).length)return"";var n=t.imageBox,e=t.rotate,o=n.x,r=n.y,i=n.height,l=n.width;return"?x=".concat(S(o),"&y=").concat(S(r),"&w=").concat(S(l),"&h=").concat(S(i),"&rotate=").concat(e)},C=function(n){var e=n.icon,o=n.opacity,r=void 0===o?1:o,i=n.hoverOpacity,l=void 0===i?1:i,a=n.color,d=void 0===a?"#000":a,u=n.hoverColor,c=void 0===u?d:u,s=n.size,g=void 0===s?20:s,v=n.rotate,p=n.noCursor,f=n.padding,b=void 0===f?0:f,x=n.width,S=n.height,m=n.tableIcon;return t.createElement(T,{color:d,hoverColor:c,size:g,width:x,height:S,opacity:r,hoverOpacity:l,rotate:v,noCursor:p,padding:b,tableIcon:m},h(e))},h=function(n){var e=n;return"function"==typeof n?t.createElement(e,null):"string"==typeof n?n:null},T=d.div(f||(f=g(["\n  cursor: ",";\n  display: ",";\n  flex: 0 0 auto;\n  align-items: center;\n  font-size: ",";\n  width: ","px;\n  height: ","px;\n  transform: rotate(","deg);\n  transform-origin: 50% 50%;\n  padding: ","px;\n\n  :hover {\n    svg {\n      fill: ",";\n      opacity: ",";\n    }\n  }\n\n  svg {\n    fill: ",";\n    opacity: ",";\n    width: 100%;\n    height: 100%;\n    transition: all ease-in-out 0.3s;\n    vertical-align: ",";\n  }\n"])),(function(t){return t.noCursor?"initial":"pointer"}),(function(t){return t.tableIcon?"table-cell":"flex"}),(function(t){return!t.tableIcon&&"0"}),(function(t){var n=t.size,e=t.width;return e||n}),(function(t){var n=t.size,e=t.height;return e||n}),(function(t){return t.rotate}),(function(t){return t.padding}),(function(t){return t.hoverColor}),(function(t){return t.hoverOpacity}),(function(t){return t.color}),(function(t){return t.opacity}),(function(t){return t.tableIcon&&"middle"}));C.propTypes={color:c.string,hoverColor:c.string,icon:c.oneOfType([c.string,c.func]),size:c.number,padding:c.number,opacity:c.number,hoverOpacity:c.number,rotate:c.number,noCursor:c.bool,width:c.number,height:c.number,tableIcon:c.bool},C.defaultProps={opacity:1,color:"#000",size:20,padding:0,rotate:0,noCursor:!1,tableIcon:!1};var B,w,k,y,H,R,F=function(){return t.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24"},t.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),t.createElement("path",{d:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"}))},E=function(t){return window.open(t,"_blank","noreferrer noopener")},z=d.div(B||(B=g(["\n  margin: 10px 0;\n  line-height: normal;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  border-radius: ","px;\n  border: ","px solid\n    ",";\n  background: ",";\n  padding: ",";\n  color: ",";\n\n  &:hover {\n    border: ","px solid\n      ",";\n    background: ",";\n    color: ",";\n  }\n\n  &:active {\n    border: ","px solid\n      ",";\n    background: ",";\n    color: ",";\n  }\n"])),(function(t){return t.buttonSettingsRoundCorners}),(function(t){return t.buttonSettingsBorderWidth}),(function(t){return t.buttonSettingsRegularBorder}),(function(t){return t.buttonSettingsRegularFill}),(function(t){var n=t.buttonSettingsVerticalPadding,e=t.buttonSettingsHorizontalPadding;return"".concat(n,"px ").concat(e,"px")}),(function(t){return t.buttonSettingsTextColorRegular}),(function(t){return t.buttonSettingsBorderWidth}),(function(t){return t.buttonSettingsHoverClickedBorder}),(function(t){return t.buttonSettingsHoverClickedFill}),(function(t){return t.buttonSettingsTextColorHover}),(function(t){return t.buttonSettingsBorderWidth}),(function(t){return t.buttonSettingsHoverClickedBorder}),(function(t){return t.buttonSettingsHoverClickedFill}),(function(t){return t.buttonSettingsTextColorClicked})),P=d.div(w||(w=g([""]))),I=d.div(k||(k=g(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  height: 100%;\n\n  &:hover {\n    color: ",";\n  }\n\n  &:active {\n    color: ",";\n  }\n"])),(function(t){return t.navBarTextHoverColor}),(function(t){return t.navBarTextClickedColor})),A=o((function(o){var l=o.disabledRedirect,a=o.disabledListClick,d=o.link,u=o.title,c=o.navBarTextHoverColor,s=o.navBarTextClickedColor,g=o.children,p=o.dropdownSettingsInactiveFill,f=o.dropdownSettingsInactiveBorder,b=o.dropdownSettingsHoverClickedFill,x=o.dropdownSettingsHoverClickedBorder,S=o.dropdownSettingsTextColorRegular,m=o.dropdownSettingsTextColorHover,h=o.dropdownSettingsTextColorClicked,T=o.dropdownSettingsTextFontFamily,B=o.dropdownSettingsTextFontSize,w=o.dropdownSettingsTextBold,k=o.dropdownSettingsTextUnderline,y=o.dropdownSettingsTextItalic,H=o.dropdownSettingsHorizontalPadding,R=o.dropdownSettingsVerticalPadding,z=o.isStatic,A=v(r(z),2),V=A[0],U=A[1],W=function(t){var o=e(),r=function(n){!o.current||null!=o&&o.current.contains(n.target)||t(n,o.current)};return n((function(){return document.addEventListener("mousedown",r),document.addEventListener("touchstart",r),function(){document.removeEventListener("mousedown",r),document.removeEventListener("touchstart",r)}})),o}((function(){U(!1)})),M=g.length>0,N=i((function(){M&&!a?U((function(t){return!t})):M||l||!d||E(d)}),[a,l,M,d]);return t.createElement(O,{ref:W},t.createElement(I,{navBarTextHoverColor:c,navBarTextClickedColor:s,onClick:N,"data-link":M?void 0:d,"data-isdropdown":M},u," ",M&&t.createElement(P,{"data-arrow":!0},V?t.createElement(C,{icon:F,rotate:z?90:-90,color:"#ffffff"}):t.createElement(C,{icon:F,rotate:90,color:"#ffffff"}))),V&&M&&t.createElement(j,{"data-list":!0,className:"navbar-list"},g.map((function(n){return t.createElement(L,{key:n.id,dropdownSettingsInactiveFill:p,dropdownSettingsInactiveBorder:f,dropdownSettingsHoverClickedFill:b,dropdownSettingsHoverClickedBorder:x,dropdownSettingsTextColorRegular:S,dropdownSettingsTextColorHover:m,dropdownSettingsTextColorClicked:h,dropdownSettingsTextFontFamily:T,dropdownSettingsTextFontSize:B,dropdownSettingsTextBold:w,dropdownSettingsTextUnderline:k,dropdownSettingsTextItalic:y,dropdownSettingsHorizontalPadding:H,dropdownSettingsVerticalPadding:R,onClick:function(){n.link&&!l?(E(n.link),U(!1)):U(!1)},"data-link":n.link},n.title)}))))})),O=d.div(y||(y=g(["\n  position: relative;\n"]))),j=d.div(H||(H=g(["\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1;\n"]))),L=d.div(R||(R=g(["\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n  cursor: pointer;\n  background: ",";\n  border: 2px solid ",";\n  color: ",";\n  font-size: ","px;\n  font-family: ",";\n  font-weight: ",";\n  font-style: ",";\n  text-decoration: ",";\n  padding: ",";\n\n  &:hover {\n    background: ",";\n    border: 2px solid ",";\n    color: ",";\n  }\n\n  &:active {\n    background: ",";\n    border: 2px solid ",";\n    color: ",";\n  }\n"])),(function(t){return t.dropdownSettingsInactiveFill}),(function(t){return t.dropdownSettingsInactiveBorder}),(function(t){return t.dropdownSettingsTextColorRegular}),(function(t){return t.dropdownSettingsTextFontSize}),(function(t){return t.dropdownSettingsTextFontFamily}),(function(t){return t.dropdownSettingsTextBold?"bold":"normal"}),(function(t){return t.dropdownSettingsTextItalic?"italic":"normal"}),(function(t){return t.dropdownSettingsTextUnderline?"underline":"none"}),(function(t){var n=t.dropdownSettingsVerticalPadding,e=t.dropdownSettingsHorizontalPadding;return"".concat(n,"px ").concat(e,"px")}),(function(t){return t.dropdownSettingsHoverClickedFill}),(function(t){return t.dropdownSettingsHoverClickedBorder}),(function(t){return t.dropdownSettingsTextColorHover}),(function(t){return t.dropdownSettingsHoverClickedFill}),(function(t){return t.dropdownSettingsHoverClickedBorder}),(function(t){return t.dropdownSettingsTextColorClicked}));A.propTypes={link:c.string,disabledRedirect:c.bool,disabledListClick:c.bool,title:c.string,navBarTextHoverColor:c.string,navBarTextClickedColor:c.string,children:c.array,dropdownSettingsInactiveFill:c.string,dropdownSettingsInactiveBorder:c.string,dropdownSettingsHoverClickedFill:c.string,dropdownSettingsHoverClickedBorder:c.string,dropdownSettingsTextColorRegular:c.string,dropdownSettingsTextColorHover:c.string,dropdownSettingsTextColorClicked:c.string,dropdownSettingsTextFontFamily:c.string,dropdownSettingsTextFontSize:c.number,dropdownSettingsTextBold:c.bool,dropdownSettingsTextUnderline:c.bool,dropdownSettingsTextItalic:c.bool,dropdownSettingsHorizontalPadding:c.number,dropdownSettingsVerticalPadding:c.number};var V,U,W,M=o((function(n){var e=n.link,o=n.disabledRedirect,r=n.title,l=n.buttonSettingsRoundCorners,a=n.buttonSettingsBorderWidth,d=n.buttonSettingsRegularBorder,u=n.buttonSettingsRegularFill,c=n.buttonSettingsHorizontalPadding,s=n.buttonSettingsVerticalPadding,g=n.buttonSettingsHoverClickedBorder,v=n.buttonSettingsHoverClickedFill,p=n.buttonSettingsTextColorRegular,f=n.buttonSettingsTextColorHover,b=n.buttonSettingsTextColorClicked,x=i((function(){e&&!o&&E(e)}),[e,o]);return t.createElement(z,{buttonSettingsRoundCorners:l,buttonSettingsBorderWidth:a,buttonSettingsRegularBorder:d,buttonSettingsRegularFill:u,buttonSettingsHorizontalPadding:c,buttonSettingsVerticalPadding:s,buttonSettingsHoverClickedBorder:g,buttonSettingsHoverClickedFill:v,buttonSettingsTextColorRegular:p,buttonSettingsTextColorHover:f,buttonSettingsTextColorClicked:b,onClick:x,"data-link":e},r)}));M.propTypes={disabledRedirect:c.bool,title:c.string,link:c.string,buttonSettingsRoundCorners:c.number,buttonSettingsBorderWidth:c.number,buttonSettingsRegularBorder:c.string,buttonSettingsRegularFill:c.string,buttonSettingsVerticalPadding:c.number,buttonSettingsHorizontalPadding:c.number,buttonSettingsHoverClickedBorder:c.string,buttonSettingsHoverClickedFill:c.string,buttonSettingsTextColorRegular:c.string,buttonSettingsTextColorHover:c.string,buttonSettingsTextColorClicked:c.string};var N,Z,q,$,_,D,G=l((function(n,e){var o=n.height,r=n.id,i=n.crop,l=n.source,a=n.alt,d=n.ignoreMaxHeight,u=n.isTurntable,c=n.isHero,g={width:"100%",height:"100%",objectFit:"cover"};return d||(g.maxHeight="600px"),t.createElement(K,{ref:e,isTurntable:u,isHero:c,height:o,id:r},t.createElement(J,s({},i.imagePosition,{isHero:c}),t.createElement("img",{src:l,alt:a,style:g})))})),J=d.div(V||(V=g(["\n  position: relative;\n  left: ","%;\n  top: ","%;\n  width: ","%;\n  height: ","%;\n\n  ",";\n"])),(function(t){return t.x||0}),(function(t){return t.y||0}),(function(t){return t.width||100}),(function(t){return t.height||100}),(function(t){return t.isHero&&u(U||(U=g(["\n      position: static;\n      img {\n        object-fit: cover;\n        //margin-left: auto;\n        //margin-right: auto;\n        //width: auto !important;\n      }\n    "])))})),K=d.div(W||(W=g(["\n  width: 100%;\n  height: ",";\n  position: relative;\n  background-color: transparent;\n  overflow: hidden;\n"])),(function(t){var n=t.height,e=t.isTurntable,o=t.isHero;return e||o?"100%":n?n+"px":"100%"}));G.propTypes={height:c.number,id:c.string,crop:c.object,source:c.string.isRequired,alt:c.string,ignoreMaxHeight:c.bool,isTurntable:c.bool,isHero:c.bool},G.defaultProps={id:"",alt:"",ignoreMaxHeight:!1,crop:{}};var Q=function(n){var e=n.config,o=n.disabledRedirect,r=void 0!==o&&o,i=n.disabledListClick,l=void 0!==i&&i,d=n.stickyOffset,u=void 0===d?0:d,c=n.isStatic,g=void 0!==c&&c,v=n.hideLogo,p=void 0!==v&&v,f=n.isPreview,b=void 0!==f&&f,x=e.height,S=e.navBarRegularColor,C=e.logoAlignment,h=e.logoCropperOptions,T=e.logoSrc,B=e.navBarTextAlignment,w=e.navBarTextFontSize,k=e.navBarTextFontFamily,y=e.navBarTextBold,H=e.navBarTextItalic,R=e.navBarTextUnderline,F=e.navBarTextRegularColor,E=e.structure,z=e.navBarTextHoverColor,P=e.navBarTextClickedColor,I=e.navBarTextSpacing,O=e.buttonSettingsRoundCorners,j=e.buttonSettingsBorderWidth,L=e.buttonSettingsRegularBorder,V=e.buttonSettingsRegularFill,U=e.buttonSettingsHorizontalPadding,W=e.buttonSettingsVerticalPadding,N=e.buttonSettingsHoverClickedFill,Z=e.buttonSettingsHoverClickedBorder,q=e.buttonSettingsTextColorRegular,$=e.buttonSettingsTextColorHover,_=e.buttonSettingsTextColorClicked,D=e.navBarBehavior,J=e.dropdownSettingsInactiveFill,K=e.dropdownSettingsInactiveBorder,Q=e.dropdownSettingsHoverClickedFill,X=e.dropdownSettingsHoverClickedBorder,rt=e.dropdownSettingsTextColorRegular,it=e.dropdownSettingsTextColorHover,lt=e.dropdownSettingsTextColorClicked,at=e.dropdownSettingsTextFontFamily,dt=e.dropdownSettingsTextFontSize,ut=e.dropdownSettingsTextBold,ct=e.dropdownSettingsTextUnderline,st=e.dropdownSettingsTextItalic,gt=e.dropdownSettingsHorizontalPadding,vt=e.dropdownSettingsVerticalPadding,pt=null;return p||(pt=t.createElement(nt,null,t.createElement(G,{source:T+m(h),crop:h}))),t.createElement(tt,{height:x,navBarRegularColor:S,navBarBehavior:D,stickyOffset:u,className:"navbar-desktop"},t.createElement(et,{height:x},"left"===C&&pt,t.createElement(ot,{navBarTextAlignment:B,navBarTextFontSize:w,navBarTextFontFamily:k,navBarTextBold:y,navBarTextItalic:H,navBarTextUnderline:R,navBarTextRegularColor:F,navBarTextSpacing:I,logoAlignment:C},0===(null==E?void 0:E.length)&&b?t.createElement(Y,null,"Navigation will preview here once created"):t.createElement(t.Fragment,null,null==E?void 0:E.map((function(n){var e=null;return"button"===n.type?e=t.createElement(M,s({},n,{disabledRedirect:r,buttonSettingsRoundCorners:O,buttonSettingsBorderWidth:j,buttonSettingsRegularBorder:L,buttonSettingsRegularFill:V,buttonSettingsVerticalPadding:W,buttonSettingsHorizontalPadding:U,buttonSettingsHoverClickedBorder:Z,buttonSettingsHoverClickedFill:N,buttonSettingsTextColorRegular:q,buttonSettingsTextColorHover:$,buttonSettingsTextColorClicked:_})):"page"===n.type&&(e=t.createElement(A,s({},n,{disabledRedirect:r,disabledListClick:l,navBarTextHoverColor:z,navBarTextClickedColor:P,dropdownSettingsInactiveFill:J,dropdownSettingsInactiveBorder:K,dropdownSettingsHoverClickedFill:Q,dropdownSettingsHoverClickedBorder:X,dropdownSettingsTextColorRegular:rt,dropdownSettingsTextColorHover:it,dropdownSettingsTextColorClicked:lt,dropdownSettingsTextFontFamily:at,dropdownSettingsTextFontSize:dt,dropdownSettingsTextBold:ut,dropdownSettingsTextUnderline:ct,dropdownSettingsTextItalic:st,dropdownSettingsHorizontalPadding:gt,dropdownSettingsVerticalPadding:vt,isStatic:g}))),t.createElement(a,{key:n.id},e)})))),"right"===C&&pt))};Q.propTypes={config:c.object,disabledRedirect:c.bool,disabledListClick:c.bool,stickyOffset:c.number,isStatic:c.bool,hideLogo:c.bool,isPreview:c.bool};var X,Y=d.div(N||(N=g(["\n  font-family: Montserrat-bold, sans-serif;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  font-size: 15px;\n  letter-spacing: 1.5px;\n  text-transform: uppercase;\n"]))),tt=d.div(Z||(Z=g(["\n  display: flex;\n  height: ","px;\n  background-color: ",";\n  padding: 0 50px;\n  width: 100%;\n  margin: auto;\n  align-items: center;\n  flex-shrink: 0;\n  z-index: 1001;\n\n  ",";\n"])),(function(t){return t.height}),(function(t){return t.navBarRegularColor}),(function(t){var n=t.navBarBehavior,e=t.stickyOffset;return"frozen"===n&&u(q||(q=g(["\n            position: sticky;\n            top: ","px;\n          "])),e)})),nt=d.div($||($=g(["\n  width: ","px;\n  height: ","px;\n"])),100,50),et=d.div(_||(_=g(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  max-width: 1120px;\n  margin: auto;\n  height: ","px;\n"])),(function(t){return t.height})),ot=d.div(D||(D=g(["\n  display: flex;\n  flex: 1 1 auto;\n  margin: ",";\n  justify-content: ",";\n  font-size: ","px;\n  font-family: ",";\n  font-weight: ",";\n  font-style: ",";\n  text-decoration: ",";\n  color: ",";\n  height: 100%;\n\n  > div {\n    margin-right: ","px;\n\n    &:last-child {\n      margin-right: 0;\n    }\n  }\n"])),(function(t){return"right"===t.logoAlignment?"0 24px 0 0":"0 0 0 24px"}),(function(t){return t.navBarTextAlignment}),(function(t){return t.navBarTextFontSize}),(function(t){return t.navBarTextFontFamily}),(function(t){return t.navBarTextBold?"bold":"normal"}),(function(t){return t.navBarTextItalic?"italic":"normal"}),(function(t){return t.navBarTextUnderline?"underline":"none"}),(function(t){return t.navBarTextRegularColor}),(function(t){return t.navBarTextSpacing})),rt=function(){return t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"19.94",height:"16.44",viewBox:"0 0 19.94 16.44"},t.createElement("path",{d:"M20.41,6.91H3.47a1.5,1.5,0,0,1,0-3H20.41A1.5,1.5,0,0,1,20.41,6.91Z",transform:"translate(-1.97 -3.91)"}),t.createElement("path",{d:"M20.41,13.91H3.47a1.5,1.5,0,0,1,0-3H20.41A1.5,1.5,0,0,1,20.41,13.91Z",transform:"translate(-1.97 -3.91)"}),t.createElement("path",{d:"M20.41,20.34H3.47a1.5,1.5,0,0,1,0-3H20.41A1.5,1.5,0,0,1,20.41,20.34Z",transform:"translate(-1.97 -3.91)"}))},it=function(n){var e=n.children,o=n.onClick,r=n.mobileTextAlignment,i=n.link;return t.createElement(lt,{onClick:o,mobileTextAlignment:r,"data-link":i},e)},lt=d.div(X||(X=g(["\n    padding: 15px;\n    display: flex;\n    justify-content: ",";\n"])),(function(t){return"center"===t.mobileTextAlignment?"center":"flex-start"}));it.propTypes={children:c.any,onClick:c.func,link:c.string};var at=o((function(n){var e=n.link,o=n.disabledRedirect,r=n.title,l=n.buttonSettingsRoundCorners,a=n.buttonSettingsBorderWidth,d=n.buttonSettingsRegularBorder,u=n.buttonSettingsRegularFill,c=n.buttonSettingsHorizontalPadding,s=n.buttonSettingsVerticalPadding,g=n.buttonSettingsHoverClickedBorder,v=n.buttonSettingsHoverClickedFill,p=n.buttonSettingsTextColorRegular,f=n.buttonSettingsTextColorHover,b=n.buttonSettingsTextColorClicked,x=n.mobileTextAlignment,S=i((function(){e&&!o&&E(e)}),[e,o]);return t.createElement(it,{onClick:S,link:e,mobileTextAlignment:x},t.createElement(z,{buttonSettingsRoundCorners:l,buttonSettingsBorderWidth:a,buttonSettingsRegularBorder:d,buttonSettingsRegularFill:u,buttonSettingsHorizontalPadding:c,buttonSettingsVerticalPadding:s,buttonSettingsHoverClickedBorder:g,buttonSettingsHoverClickedFill:v,buttonSettingsTextColorRegular:p,buttonSettingsTextColorHover:f,buttonSettingsTextColorClicked:b},r))}));at.propTypes={disabledRedirect:c.bool,title:c.string,link:c.string,buttonSettingsRoundCorners:c.number,buttonSettingsBorderWidth:c.number,buttonSettingsRegularBorder:c.string,buttonSettingsRegularFill:c.string,buttonSettingsVerticalPadding:c.number,buttonSettingsHorizontalPadding:c.number,buttonSettingsHoverClickedBorder:c.string,buttonSettingsHoverClickedFill:c.string,buttonSettingsTextColorRegular:c.string,buttonSettingsTextColorHover:c.string,buttonSettingsTextColorClicked:c.string};var dt,ut,ct,st,gt,vt,pt,ft,bt=o((function(n){var e=n.disabledRedirect,o=n.disabledListClick,l=n.link,a=n.title,d=n.navBarTextHoverColor,u=n.navBarTextClickedColor,c=n.children,s=n.mobileTextAlignment,g=n.isStatic,p=v(r(g),2),f=p[0],b=p[1],x=c.length>0,S=i((function(){x&&!o?b((function(t){return!t})):x||e||!l||E(l)}),[o,e,x,l]);return t.createElement(t.Fragment,null,t.createElement(it,{link:x?void 0:l,onClick:S,mobileTextAlignment:s},t.createElement(I,{navBarTextHoverColor:d,navBarTextClickedColor:u,"data-isdropdown":x},a," ",x&&t.createElement(P,{"data-arrow":!0},f?t.createElement(C,{icon:F,rotate:g?90:-90,color:"#ffffff"}):t.createElement(C,{icon:F,rotate:90,color:"#ffffff"})))),f&&x&&t.createElement(t.Fragment,null,c.map((function(n){return t.createElement(it,{key:n.id,onClick:function(){n.link&&!e&&E(n.link)},link:n.link,mobileTextAlignment:s},t.createElement(I,{navBarTextHoverColor:d,navBarTextClickedColor:u},n.title))}))))}));bt.propTypes={link:c.string,disabledRedirect:c.bool,disabledListClick:c.bool,title:c.string,navBarTextHoverColor:c.string,navBarTextClickedColor:c.string,children:c.array,mobileTextAlignment:c.string};var xt=function(n){var e=n.config,o=n.stickyOffset,l=void 0===o?0:o,d=n.isConstructor,u=void 0!==d&&d,c=n.isStatic,g=void 0!==c&&c,p=n.disabledRedirect,f=void 0!==p&&p,b=n.disabledListClick,x=void 0!==b&&b,S=v(r(u),2),h=S[0],T=S[1],B=e.mobileHeight,w=e.navBarRegularColor,k=e.mobileLogoAlignment,y=e.logoSrc,H=e.logoCropperOptions,R=e.navBarBehavior,F=e.mobileFontSize,E=e.navBarTextFontFamily,z=e.navBarTextBold,P=e.navBarTextItalic,I=e.navBarTextUnderline,A=e.navBarTextRegularColor,O=e.navBarTextSpacing,j=e.buttonSettingsRoundCorners,L=e.buttonSettingsBorderWidth,V=e.buttonSettingsRegularBorder,U=e.buttonSettingsRegularFill,W=e.buttonSettingsHorizontalPadding,M=e.buttonSettingsVerticalPadding,N=e.buttonSettingsHoverClickedFill,Z=e.buttonSettingsHoverClickedBorder,q=e.buttonSettingsTextColorRegular,$=e.buttonSettingsTextColorHover,_=e.buttonSettingsTextColorClicked,D=e.mobileTextAlignment,J=e.navBarTextHoverColor,K=e.navBarTextClickedColor,Q=e.structure,X=i((function(){u||x||T((function(t){return!t}))}),[u,x]);return t.createElement(St,{className:"navbar-mobile",navBarBehavior:R,stickyOffset:l,isConstructor:u},t.createElement(Ct,{height:B,navBarRegularColor:w},t.createElement(Bt,{onClick:X},t.createElement(C,{icon:rt,color:"#ffffff"})),t.createElement(ht,{mobileLogoAlignment:k},t.createElement(Tt,null,t.createElement(G,{source:y+m(H),crop:H})))),t.createElement(mt,{stickyOffset:l,offsetTop:l+B,isConstructor:u,open:h,navBarRegularColor:w,mobileFontSize:F,navBarTextFontFamily:E,navBarTextBold:z,navBarTextItalic:P,navBarTextUnderline:I,navBarTextRegularColor:A,navBarTextSpacing:O},null==Q?void 0:Q.map((function(n){var e="any";return"button"===n.type?e=t.createElement(at,s({},n,{mobileTextAlignment:D,disabledRedirect:u,buttonSettingsRoundCorners:j,buttonSettingsBorderWidth:L,buttonSettingsRegularBorder:V,buttonSettingsRegularFill:U,buttonSettingsVerticalPadding:M,buttonSettingsHorizontalPadding:W,buttonSettingsHoverClickedBorder:Z,buttonSettingsHoverClickedFill:N,buttonSettingsTextColorRegular:q,buttonSettingsTextColorHover:$,buttonSettingsTextColorClicked:_})):"page"===n.type&&(e=t.createElement(bt,s({},n,{disabledRedirect:f,disabledListClick:x,navBarTextHoverColor:J,navBarTextClickedColor:K,mobileTextAlignment:D,isStatic:g}))),t.createElement(a,{key:n.id},e)}))))},St=d.div(dt||(dt=g(["\n  z-index: 1001;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  ",";\n"])),(function(t){var n=t.navBarBehavior,e=t.stickyOffset,o=t.isConstructor;return"frozen"===n&&!o&&u(ut||(ut=g(["\n            position: sticky;\n            top: ","px;\n          "])),e)})),mt=d.div(ct||(ct=g(["\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: ","px;\n  width: 100%;\n  height: ",";\n  transition: height 0.5s ease;\n  background-color: ",";\n  overflow: hidden;\n  font-size: ","px;\n  font-family: ",";\n  font-weight: ",";\n  font-style: ",";\n  text-decoration: ",";\n  color: ",";\n  ",";\n"])),(function(t){return t.stickyOffset}),(function(t){return t.isConstructor?"auto":0}),(function(t){return t.navBarRegularColor}),(function(t){return t.mobileFontSize}),(function(t){return t.navBarTextFontFamily}),(function(t){return t.navBarTextBold?"bold":"normal"}),(function(t){return t.navBarTextItalic?"italic":"normal"}),(function(t){return t.navBarTextUnderline?"underline":"none"}),(function(t){return t.navBarTextRegularColor}),(function(t){var n=t.offsetTop,e=t.open;return!t.isConstructor&&e&&u(st||(st=g(["\n            height: calc(100vh - ","px);\n          "])),n)})),Ct=d.div(gt||(gt=g(["\n  display: flex;\n  width: 100%;\n  padding: 15px 13px 16px 15px;\n  border: solid 1px rgba(164, 198, 225, 0.39);\n  height: ","px;\n  background-color: ",";\n  align-items: center;\n"])),(function(t){return t.height}),(function(t){return t.navBarRegularColor})),ht=d.div(vt||(vt=g(["\n  display: flex;\n  flex: 1 1 auto;\n  justify-content: ",";\n"])),(function(t){var n=t.mobileLogoAlignment;return"center"===n?"center":"right"===n?"flex-end":""})),Tt=d.div(pt||(pt=g(["\n  width: ","px;\n  height: ","px;\n"])),100,50),Bt=d.div(ft||(ft=g(["\n  display: flex;\n  position: absolute;\n"])));xt.propTypes={config:c.object,stickyOffset:c.number};export{Q as NavBar,xt as NavBarMobile,x as logoImageHeight,b as logoImageWidth};
//# sourceMappingURL=index.esm.js.map

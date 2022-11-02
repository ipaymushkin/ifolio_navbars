import t,{useEffect as n,createRef as e,memo as o,useState as r,useCallback as i,forwardRef as l,useRef as d,Fragment as a}from"react";import u,{css as c}from"styled-components";import s from"prop-types";import g from"react-dom";function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function p(){return p=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t},p.apply(this,arguments)}function f(t,n){return n||(n=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}}))}function b(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==e)return;var o,r,i=[],l=!0,d=!1;try{for(e=e.call(t);!(l=(o=e.next()).done)&&(i.push(o.value),!n||i.length!==n);l=!0);}catch(t){d=!0,r=t}finally{try{l||null==e.return||e.return()}finally{if(d)throw r}}return i}(t,n)||function(t,n){if(!t)return;if("string"==typeof t)return S(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return S(t,n)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,o=new Array(n);e<n;e++)o[e]=t[e];return o}(function(n){return t.createElement(ut,n)}).bind({}).args={config:h};var x,C=250,m=80,h={name:"iFOLIO Cloud Nav Bar",height:51,logoSrc:"https://api.ifolio.cloud/medias/IA/BL/IABLlu75QaNFlnKKhHpuOlBnQqkouLacPCGHjqR2.png",structure:[{id:"238dd280-5931-11ed-a28b-ef989d3b3c05",link:null,type:"page",title:"ABOUT",children:[]},{id:"2ccff850-5931-11ed-a28b-ef989d3b3c05",link:null,type:"page",title:"ANALYTICS",children:[]},{id:"3248ba10-5931-11ed-a28b-ef989d3b3c05",link:null,type:"page",title:"CAMPAIGNS",children:[]},{id:"2a5a8b80-5931-11ed-a28b-ef989d3b3c05",link:null,type:"page",title:"PRICING",children:[{id:"37c684e0-5931-11ed-a28b-ef989d3b3c05",link:null,type:"page",title:"CONTACT",children:[]}],expanded:!0},{id:"1d764340-5932-11ed-a28b-ef989d3b3c05",link:null,type:"button",title:"LOG-IN",children:[]}],mobileHeight:67,logoAlignment:"left",mobileFontSize:14,navBarBehavior:"frozen",navBarTextBold:!0,navBarHoverColor:"#ffffff",navBarTextItalic:!1,navBarTextSpacing:10,logoCropperOptions:{x:-3.026,y:-11.141,zoom:.5691982436168481,width:560.456,height:91.483,rotate:0,scaleX:1,scaleY:1,imageBox:{x:0,y:0,width:559,height:68},imgWidth:559,imgHeight:68,imagePosition:{x:.54,y:12.18,width:99.75,height:74.34}},navBarClickedColor:"#41c5c2",navBarRegularColor:"#000",navBarTextFontSize:14,mobileLogoAlignment:"right",mobileTextAlignment:"left",navBarTextAlignment:"right",navBarTextUnderline:!1,navBarTextFontFamily:"Avenir-heavy",navBarTextHoverColor:"#25bec8",navBarTextClickedColor:"#ffffff",navBarTextRegularColor:"#ffffff",dropdownSettingsTextBold:!1,buttonSettingsBorderWidth:2,buttonSettingsRegularFill:"transparent",buttonSettingsRoundCorners:20,dropdownSettingsTextItalic:!1,navBarRegularOnScrollColor:"#1f2741",buttonSettingsRegularBorder:"#fff",buttonSettingsTextColorHover:"#1f2741",dropdownSettingsInactiveFill:"#2cbab7",dropdownSettingsTextFontSize:14,buttonSettingsVerticalPadding:8,dropdownSettingsTextUnderline:!1,buttonSettingsHoverClickedFill:"#ffffff",buttonSettingsTextColorClicked:"#1f2741",buttonSettingsTextColorRegular:"#fff",dropdownSettingsInactiveBorder:"#2cbab7",dropdownSettingsTextColorHover:"#41c5c2",dropdownSettingsTextFontFamily:"Arial",buttonSettingsHorizontalPadding:20,dropdownSettingsVerticalPadding:8,buttonSettingsHoverClickedBorder:"#fff",dropdownSettingsHoverClickedFill:"#eeffff",dropdownSettingsTextColorClicked:"#41c5c2",dropdownSettingsTextColorRegular:"#fff",dropdownSettingsHorizontalPadding:10,dropdownSettingsHoverClickedBorder:"#eeffff"},w=function(t){return Math.floor(t)},T=function(t){if(!t||0===Object.keys(t).length)return"";var n=t.imageBox,e=t.rotate,o=n.x,r=n.y,i=n.height,l=n.width;return"?x=".concat(w(o),"&y=").concat(w(r),"&w=").concat(w(l),"&h=").concat(w(i),"&rotate=").concat(e)},B=function(n){var e=n.icon,o=n.opacity,r=void 0===o?1:o,i=n.hoverOpacity,l=void 0===i?1:i,d=n.color,a=void 0===d?"#000":d,u=n.hoverColor,c=void 0===u?a:u,s=n.size,g=void 0===s?20:s,v=n.rotate,p=n.noCursor,f=n.padding,b=void 0===f?0:f,S=n.width,x=n.height,C=n.tableIcon;return t.createElement(y,{color:a,hoverColor:c,size:g,width:S,height:x,opacity:r,hoverOpacity:l,rotate:v,noCursor:p,padding:b,tableIcon:C},k(e))},k=function(n){var e=n;return"function"==typeof n?t.createElement(e,null):"string"==typeof n?n:null},y=u.div(x||(x=f(["\n  cursor: ",";\n  display: ",";\n  flex: 0 0 auto;\n  align-items: center;\n  font-size: ",";\n  width: ","px;\n  height: ","px;\n  transform: rotate(","deg);\n  transform-origin: 50% 50%;\n  padding: ","px;\n\n  :hover {\n    svg {\n      fill: ",";\n      opacity: ",";\n    }\n  }\n\n  svg {\n    fill: ",";\n    opacity: ",";\n    width: 100%;\n    height: 100%;\n    transition: all ease-in-out 0.3s;\n    vertical-align: ",";\n  }\n"])),(function(t){return t.noCursor?"initial":"pointer"}),(function(t){return t.tableIcon?"table-cell":"flex"}),(function(t){return!t.tableIcon&&"0"}),(function(t){var n=t.size,e=t.width;return e||n}),(function(t){var n=t.size,e=t.height;return e||n}),(function(t){return t.rotate}),(function(t){return t.padding}),(function(t){return t.hoverColor}),(function(t){return t.hoverOpacity}),(function(t){return t.color}),(function(t){return t.opacity}),(function(t){return t.tableIcon&&"middle"}));B.propTypes={color:s.string,hoverColor:s.string,icon:s.oneOfType([s.string,s.func]),size:s.number,padding:s.number,opacity:s.number,hoverOpacity:s.number,rotate:s.number,noCursor:s.bool,width:s.number,height:s.number,tableIcon:s.bool},B.defaultProps={opacity:1,color:"#000",size:20,padding:0,rotate:0,noCursor:!1,tableIcon:!1};var H,R,F,E,z,I,P,A,O=function(){return t.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24"},t.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),t.createElement("path",{d:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"}))},L=function(t){return window.open(t,"_blank","noreferrer noopener")},V=u.div(H||(H=f([""]))),j=u.div(R||(R=f(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  height: 100%;\n  transition: all 300ms ease-out;\n\n  &:hover {\n    color: ",";\n  }\n\n  &:active {\n    color: ",";\n  }\n"])),(function(t){return t.navBarTextHoverColor}),(function(t){return t.navBarTextClickedColor})),W=u(j)(F||(F=f(["\n    padding: 0 10px;\n"]))),U=u(j)(E||(E=f(["\n    word-break: break-word;\n"]))),M=o((function(n){var e=n.disabledRedirect,o=n.childs,r=n.dropdownSettingsInactiveFill,i=n.dropdownSettingsInactiveBorder,l=n.dropdownSettingsHoverClickedFill,d=n.dropdownSettingsHoverClickedBorder,a=n.dropdownSettingsTextColorRegular,u=n.dropdownSettingsTextColorHover,c=n.dropdownSettingsTextColorClicked,s=n.dropdownSettingsTextFontFamily,p=n.dropdownSettingsTextFontSize,f=n.dropdownSettingsTextBold,b=n.dropdownSettingsTextUnderline,S=n.dropdownSettingsTextItalic,x=n.dropdownSettingsHorizontalPadding,C=n.dropdownSettingsVerticalPadding,m=n.setOpen,h=n.rootId,w=n.parentRef,T="object"===("undefined"==typeof window?"undefined":v(window)),B=0,k=0;if(T&&w){B=w.getBoundingClientRect().left;var y=w.closest("[data-navbarcontainer]"),H=w.closest(".navbar-desktop");if(y){var R=y.getBoundingClientRect().left;B<R&&(B=R)}if(H){var F=H.getBoundingClientRect();k=F.top+F.height+window.scrollY}}var E=t.createElement(G,{"data-list":!0,className:"navbar-list",left:B,top:k,dropdownSettingsInactiveBorder:i},o.map((function(n){var o;return t.createElement(q,{key:n.id,dropdownSettingsInactiveFill:r,dropdownSettingsHoverClickedFill:l,dropdownSettingsHoverClickedBorder:d,dropdownSettingsTextColorRegular:a,dropdownSettingsTextColorHover:u,dropdownSettingsTextColorClicked:c,dropdownSettingsTextFontFamily:s,dropdownSettingsTextFontSize:p,dropdownSettingsTextBold:f,dropdownSettingsTextUnderline:b,dropdownSettingsTextItalic:S,dropdownSettingsHorizontalPadding:x,dropdownSettingsVerticalPadding:C,onClick:function(){var t;null!==(t=n.link)&&void 0!==t&&t.value&&!e?(L(n.link.value),m(!1)):m(!1)},"data-link":null===(o=n.link)||void 0===o?void 0:o.value},n.title)})));return T?g.createPortal(E,document.getElementById(h)):E})),N=o((function(o){var l=o.disabledRedirect,d=o.disabledListClick,a=o.link,u=o.title,c=o.navBarTextHoverColor,s=o.navBarTextClickedColor,g=o.children,v=o.dropdownSettingsInactiveFill,p=o.dropdownSettingsInactiveBorder,f=o.dropdownSettingsHoverClickedFill,S=o.dropdownSettingsHoverClickedBorder,x=o.dropdownSettingsTextColorRegular,C=o.dropdownSettingsTextColorHover,m=o.dropdownSettingsTextColorClicked,h=o.dropdownSettingsTextFontFamily,w=o.dropdownSettingsTextFontSize,T=o.dropdownSettingsTextBold,k=o.dropdownSettingsTextUnderline,y=o.dropdownSettingsTextItalic,H=o.dropdownSettingsHorizontalPadding,R=o.dropdownSettingsVerticalPadding,F=o.isStatic,E=o.navBarHoverColor,z=o.navBarClickedColor,I=o.rootId,P=b(r(F),2),A=P[0],j=P[1],U=null==a?void 0:a.value,N=function(t){var o=e(),r=function(n){!o.current||null!=o&&o.current.contains(n.target)||t(n,o.current)};return n((function(){return document.addEventListener("mousedown",r),document.addEventListener("touchstart",r),function(){document.removeEventListener("mousedown",r),document.removeEventListener("touchstart",r)}})),o}((function(){j(!1)})),G=b(r(null),2),q=G[0],D=G[1];n((function(){D(N.current)}),[]);var Z=g.length>0,K=i((function(){Z&&!d?j((function(t){return!t})):Z||l||!U||L(U)}),[d,l,Z,U]);return n((function(){var t=function(){j(!1)};return document.body.addEventListener("scroll",t),function(){document.body.removeEventListener("scroll",t)}}),[]),t.createElement(Y,{ref:N,navBarHoverColor:E,navBarClickedColor:z},t.createElement(W,{navBarTextHoverColor:c,navBarTextClickedColor:s,onClick:K,"data-link":Z?void 0:U,"data-isdropdown":Z},u," ",Z&&t.createElement(V,{"data-arrow":!0},A?t.createElement(B,{icon:O,rotate:F?-90:90,color:"#ffffff"}):t.createElement(B,{icon:O,rotate:-90,color:"#ffffff"}))),A&&Z&&t.createElement(M,{dropdownSettingsInactiveFill:v,dropdownSettingsInactiveBorder:p,dropdownSettingsHoverClickedFill:f,dropdownSettingsHoverClickedBorder:S,dropdownSettingsTextColorRegular:x,dropdownSettingsTextColorHover:C,dropdownSettingsTextColorClicked:m,dropdownSettingsTextFontFamily:h,dropdownSettingsTextFontSize:w,dropdownSettingsTextBold:T,dropdownSettingsTextUnderline:k,dropdownSettingsTextItalic:y,dropdownSettingsHorizontalPadding:H,dropdownSettingsVerticalPadding:R,childs:g,setOpen:j,disabledRedirect:l,rootId:I,parentRef:q}))})),Y=u.div(z||(z=f(["\n  position: relative;\n  height: 100%;\n\n  &:hover {\n    background: ",";\n  }\n\n  &:active {\n    background: ",";\n  }\n"])),(function(t){return t.navBarHoverColor}),(function(t){return t.navBarClickedColor})),G=u.div(I||(I=f(["\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  left: ","px;\n  top: ","px;\n  z-index: 2;\n  \n  > div {\n    border-right: 2px solid ",";\n    border-left: 2px solid ",";\n    border-bottom: 2px solid ",";\n  }\n  > div:first-child {\n    border-top: 2px solid ",";\n  }\n"])),(function(t){return t.left}),(function(t){return t.top}),(function(t){return t.dropdownSettingsInactiveBorder}),(function(t){return t.dropdownSettingsInactiveBorder}),(function(t){return t.dropdownSettingsInactiveBorder}),(function(t){return t.dropdownSettingsInactiveBorder})),q=u.div(P||(P=f(["\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n  cursor: pointer;\n  background: ",";\n  color: ",";\n  font-size: ","px;\n  font-family: ",";\n  font-weight: ",";\n  font-style: ",";\n  text-decoration: ",";\n  padding: ",";\n\n  &:hover {\n    background: ",";\n    border: 2px solid ",";\n    color: ",";\n  }\n\n  &:active {\n    background: ",";\n    border: 2px solid ",";\n    color: ",";\n  }\n"])),(function(t){return t.dropdownSettingsInactiveFill}),(function(t){return t.dropdownSettingsTextColorRegular}),(function(t){return t.dropdownSettingsTextFontSize}),(function(t){return t.dropdownSettingsTextFontFamily}),(function(t){return t.dropdownSettingsTextBold?"bold":"normal"}),(function(t){return t.dropdownSettingsTextItalic?"italic":"normal"}),(function(t){return t.dropdownSettingsTextUnderline?"underline":"none"}),(function(t){var n=t.dropdownSettingsVerticalPadding,e=t.dropdownSettingsHorizontalPadding;return"".concat(n,"px ").concat(e,"px")}),(function(t){return t.dropdownSettingsHoverClickedFill}),(function(t){return t.dropdownSettingsHoverClickedBorder}),(function(t){return t.dropdownSettingsTextColorHover}),(function(t){return t.dropdownSettingsHoverClickedFill}),(function(t){return t.dropdownSettingsHoverClickedBorder}),(function(t){return t.dropdownSettingsTextColorClicked}));N.propTypes={link:s.string,disabledRedirect:s.bool,disabledListClick:s.bool,title:s.string,navBarTextHoverColor:s.string,navBarTextClickedColor:s.string,children:s.array,dropdownSettingsInactiveFill:s.string,dropdownSettingsInactiveBorder:s.string,dropdownSettingsHoverClickedFill:s.string,dropdownSettingsHoverClickedBorder:s.string,dropdownSettingsTextColorRegular:s.string,dropdownSettingsTextColorHover:s.string,dropdownSettingsTextColorClicked:s.string,dropdownSettingsTextFontFamily:s.string,dropdownSettingsTextFontSize:s.number,dropdownSettingsTextBold:s.bool,dropdownSettingsTextUnderline:s.bool,dropdownSettingsTextItalic:s.bool,dropdownSettingsHorizontalPadding:s.number,dropdownSettingsVerticalPadding:s.number,navBarHoverColor:s.string,navBarClickedColor:s.string,rootId:s.string};var D,Z,K=o((function(n){var e=n.link,o=n.disabledRedirect,r=n.title,l=n.buttonSettingsRoundCorners,d=n.buttonSettingsBorderWidth,a=n.buttonSettingsRegularBorder,u=n.buttonSettingsRegularFill,c=n.buttonSettingsHorizontalPadding,s=n.buttonSettingsVerticalPadding,g=n.buttonSettingsHoverClickedBorder,v=n.buttonSettingsHoverClickedFill,p=n.buttonSettingsTextColorRegular,f=n.buttonSettingsTextColorHover,b=n.buttonSettingsTextColorClicked,S=n.navBarTextFontSize,x=null==e?void 0:e.value,C=i((function(){x&&!o&&L(x)}),[x,o]);return t.createElement(Q,{buttonSettingsRoundCorners:l,buttonSettingsBorderWidth:d,buttonSettingsRegularBorder:a,buttonSettingsRegularFill:u,buttonSettingsHorizontalPadding:c,buttonSettingsVerticalPadding:s,buttonSettingsHoverClickedBorder:g,buttonSettingsHoverClickedFill:v,buttonSettingsTextColorRegular:p,buttonSettingsTextColorHover:f,buttonSettingsTextColorClicked:b,onClick:C,"data-link":x,navBarTextFontSize:S},r)})),Q=u.div(A||(A=f(["\n  line-height: normal;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  transition: all 300ms ease-out;\n  border-radius: ","px;\n  border: ","px solid ",";\n  background: ",";\n  padding: ",";\n  color: ",";\n  height: ","px;\n\n  &:hover {\n    border: ","px solid ",";\n    background: ",";\n    color: ",";\n  }\n\n  &:active {\n    border: ","px solid ",";\n    background: ",";\n    color: ",";\n  }\n"])),(function(t){return t.buttonSettingsRoundCorners}),(function(t){return t.buttonSettingsBorderWidth}),(function(t){return t.buttonSettingsRegularBorder}),(function(t){return t.buttonSettingsRegularFill}),(function(t){var n=t.buttonSettingsHorizontalPadding;return"0 ".concat(n,"px")}),(function(t){return t.buttonSettingsTextColorRegular}),(function(t){var n=t.buttonSettingsVerticalPadding;return t.navBarTextFontSize+2*(n||0)+2*(t.buttonSettingsBorderWidth||0)}),(function(t){return t.buttonSettingsBorderWidth}),(function(t){return t.buttonSettingsHoverClickedBorder}),(function(t){return t.buttonSettingsHoverClickedFill}),(function(t){return t.buttonSettingsTextColorHover}),(function(t){return t.buttonSettingsBorderWidth}),(function(t){return t.buttonSettingsHoverClickedBorder}),(function(t){return t.buttonSettingsHoverClickedFill}),(function(t){return t.buttonSettingsTextColorClicked}));K.propTypes={disabledRedirect:s.bool,title:s.string,link:s.string,buttonSettingsRoundCorners:s.number,buttonSettingsBorderWidth:s.number,buttonSettingsRegularBorder:s.string,buttonSettingsRegularFill:s.string,buttonSettingsVerticalPadding:s.number,buttonSettingsHorizontalPadding:s.number,buttonSettingsHoverClickedBorder:s.string,buttonSettingsHoverClickedFill:s.string,buttonSettingsTextColorRegular:s.string,buttonSettingsTextColorHover:s.string,buttonSettingsTextColorClicked:s.string,navBarTextFontSize:s.number};var X,$,_,J,tt,nt,et,ot,rt,it=l((function(n,e){var o=n.height,r=n.id,i=n.crop,l=n.source,d=n.alt,a={width:"100%",height:"100%",objectFit:"contain"};return n.ignoreMaxHeight||(a.maxHeight="600px"),t.createElement(dt,{ref:e,height:o,id:r},t.createElement(lt,i.imagePosition,t.createElement("img",{src:l,alt:d,style:a})))})),lt=u.div(D||(D=f(["\n  position: relative;\n  left: ","%;\n  top: ","%;\n  width: ","%;\n  height: ","%;\n"])),(function(t){return t.x||0}),(function(t){return t.y||0}),(function(t){return t.width||100}),(function(t){return t.height||100})),dt=u.div(Z||(Z=f(["\n  width: 100%;\n  height: ",";\n  position: relative;\n  background-color: transparent;\n  overflow: hidden;\n"])),(function(t){var n=t.height;return n?n+"px":"100%"}));it.propTypes={height:s.number,id:s.string,crop:s.object,source:s.string.isRequired,alt:s.string,ignoreMaxHeight:s.bool},it.defaultProps={id:"",alt:"",ignoreMaxHeight:!1,crop:{}};var at=function(n){var e=n.logoSrc,o=n.logoCropperOptions,r=n.hideElement,i=n.height;return r?null:t.createElement(pt,{hideElement:r,height:i},t.createElement(it,{source:e+T(o),crop:o}))},ut=function(e){var o=e.config,r=e.disabledRedirect,i=void 0!==r&&r,l=e.disabledListClick,u=void 0!==l&&l,c=e.stickyOffset,s=void 0===c?0:c,g=e.isStatic,v=void 0!==g&&g,f=e.hideLogo,b=void 0!==f&&f,S=e.isPreview,x=void 0!==S&&S,C=e.isListView,m=void 0!==C&&C,h=e.rootId,w=void 0===h?"root":h,T=d(),B=o.height,k=o.navBarRegularColor,y=o.navBarHoverColor,H=o.navBarClickedColor,R=o.navBarRegularOnScrollColor,F=o.logoAlignment,E=o.logoCropperOptions,z=o.logoSrc,I=o.navBarTextAlignment,P=o.navBarTextFontSize,A=o.navBarTextFontFamily,O=o.navBarTextBold,L=o.navBarTextItalic,V=o.navBarTextUnderline,j=o.navBarTextRegularColor,W=o.structure,U=o.navBarTextHoverColor,M=o.navBarTextClickedColor,Y=o.navBarTextSpacing,G=o.buttonSettingsRoundCorners,q=o.buttonSettingsBorderWidth,D=o.buttonSettingsRegularBorder,Z=o.buttonSettingsRegularFill,Q=o.buttonSettingsHorizontalPadding,X=o.buttonSettingsVerticalPadding,$=o.buttonSettingsHoverClickedFill,_=o.buttonSettingsHoverClickedBorder,J=o.buttonSettingsTextColorRegular,tt=o.buttonSettingsTextColorHover,nt=o.buttonSettingsTextColorClicked,et=o.navBarBehavior,ot=o.dropdownSettingsInactiveFill,rt=o.dropdownSettingsInactiveBorder,it=o.dropdownSettingsHoverClickedFill,lt=o.dropdownSettingsHoverClickedBorder,dt=o.dropdownSettingsTextColorRegular,ut=o.dropdownSettingsTextColorHover,ct=o.dropdownSettingsTextColorClicked,st=o.dropdownSettingsTextFontFamily,pt=o.dropdownSettingsTextFontSize,xt=o.dropdownSettingsTextBold,Ct=o.dropdownSettingsTextUnderline,mt=o.dropdownSettingsTextItalic,ht=o.dropdownSettingsHorizontalPadding,wt=o.dropdownSettingsVerticalPadding;return n((function(){var t=function(){"transparent"===k&&(T.current.style.backgroundColor=0===window.scrollY?k:R)};return window.addEventListener("scroll",t),function(){window.removeEventListener("scroll",t)}}),[]),t.createElement(vt,{ref:T,height:B,navBarRegularColor:k,isPreview:x,navBarBehavior:et,stickyOffset:s,className:"navbar-desktop","data-color":k,"data-coloronscroll":R,isListView:m},t.createElement(ft,{height:B},t.createElement(at,{logoSrc:z,logoCropperOptions:E,hideElement:b||"left"!==F,height:B}),t.createElement(bt,{"data-navbarcontainer":!0,navBarTextAlignment:I,navBarTextFontSize:P,navBarTextFontFamily:A,navBarTextBold:O,navBarTextItalic:L,navBarTextUnderline:V,navBarTextRegularColor:j,navBarTextSpacing:Y},0===(null==W?void 0:W.length)&&x?t.createElement(gt,null,"Navigation will preview here once created"):t.createElement(t.Fragment,null,null==W?void 0:W.map((function(n){var e=null;return"button"===n.type?e=t.createElement(St,null,t.createElement(K,p({},n,{disabledRedirect:i,buttonSettingsRoundCorners:G,buttonSettingsBorderWidth:q,buttonSettingsRegularBorder:D,buttonSettingsRegularFill:Z,buttonSettingsVerticalPadding:X,buttonSettingsHorizontalPadding:Q,buttonSettingsHoverClickedBorder:_,buttonSettingsHoverClickedFill:$,buttonSettingsTextColorRegular:J,buttonSettingsTextColorHover:tt,buttonSettingsTextColorClicked:nt,navBarTextFontSize:P}))):"page"===n.type&&(e=t.createElement(N,p({},n,{disabledRedirect:i,disabledListClick:u,navBarTextHoverColor:U,navBarTextClickedColor:M,dropdownSettingsInactiveFill:ot,dropdownSettingsInactiveBorder:rt,dropdownSettingsHoverClickedFill:it,dropdownSettingsHoverClickedBorder:lt,dropdownSettingsTextColorRegular:dt,dropdownSettingsTextColorHover:ut,dropdownSettingsTextColorClicked:ct,dropdownSettingsTextFontFamily:st,dropdownSettingsTextFontSize:pt,dropdownSettingsTextBold:xt,dropdownSettingsTextUnderline:Ct,dropdownSettingsTextItalic:mt,dropdownSettingsHorizontalPadding:ht,dropdownSettingsVerticalPadding:wt,isStatic:v,navBarHoverColor:y,navBarClickedColor:H,rootId:w}))),t.createElement(a,{key:n.id},e)})))),t.createElement(at,{logoSrc:z,logoCropperOptions:E,hideElement:b||"right"!==F,height:B})))};ut.propTypes={config:s.object,disabledRedirect:s.bool,disabledListClick:s.bool,stickyOffset:s.number,isStatic:s.bool,hideLogo:s.bool,isPreview:s.bool};var ct,st,gt=u.div(X||(X=f(["\n  font-family: Montserrat-bold, sans-serif;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  font-size: 15px;\n  letter-spacing: 1.5px;\n  text-transform: uppercase;\n"]))),vt=u.div($||($=f(["\n  display: flex;\n  height: ","px;\n  background-color: ",";\n  padding: 0 24px;\n  width: 100%;\n  margin: auto;\n  align-items: center;\n  flex-shrink: 0;\n  z-index: 1002;\n  transition: background-color .2s ease-in-out;\n\n  ","\n"])),(function(t){return t.height}),(function(t){var n=t.navBarRegularColor,e=t.isPreview,o=t.isListView;return(e||o)&&"transparent"===n?"black":n}),(function(t){var n=t.navBarBehavior,e=t.stickyOffset,o=t.navBarRegularColor,r=t.isPreview,i=t.isListView;if(!r&&!i){if("transparent"===o)return c("frozen"===n?_||(_=f(["\n            position: fixed;\n            top: ","px;\n          "])):J||(J=f(["\n          position: absolute;\n          top: ","px;\n        "])),e);if("frozen"===n)return c(tt||(tt=f(["\n          position: sticky;\n          top: ","px;\n        "])),e)}return""})),pt=u.div(nt||(nt=f(["\n  width: ","px;\n  height: ","px;\n  opacity: ",";\n"])),250,(function(t){return t.height}),(function(t){return t.hideElement?0:1})),ft=u.div(et||(et=f(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  max-width: 1367px;\n  margin: auto;\n  height: ","px;\n"])),(function(t){return t.height})),bt=u.div(ot||(ot=f(["\n  display: inline;\n  white-space: nowrap;\n  margin: 0 24px;\n  text-align: ",";\n  font-size: ","px;\n  font-family: ",";\n  font-weight: ",";\n  font-style: ",";\n  text-decoration: ",";\n  color: ",";\n  height: 100%;\n  width: calc(100% - ","px);\n  overflow-x: auto;\n  overflow-y: hidden;\n\n  > div {\n    margin-right: ","px;\n    display: inline-block;\n    vertical-align: middle;\n    transition: all 300ms ease-out;\n\n    &:last-child {\n      margin-right: 0;\n    }\n  }\n"])),(function(t){return t.navBarTextAlignment}),(function(t){return t.navBarTextFontSize}),(function(t){return t.navBarTextFontFamily}),(function(t){return t.navBarTextBold?"bold":"normal"}),(function(t){return t.navBarTextItalic?"italic":"normal"}),(function(t){return t.navBarTextUnderline?"underline":"none"}),(function(t){return t.navBarTextRegularColor}),550,(function(t){return t.navBarTextSpacing})),St=u.div(rt||(rt=f(["\n"]))),xt=function(){return t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"19.94",height:"16.44",viewBox:"0 0 19.94 16.44"},t.createElement("path",{d:"M20.41,6.91H3.47a1.5,1.5,0,0,1,0-3H20.41A1.5,1.5,0,0,1,20.41,6.91Z",transform:"translate(-1.97 -3.91)"}),t.createElement("path",{d:"M20.41,13.91H3.47a1.5,1.5,0,0,1,0-3H20.41A1.5,1.5,0,0,1,20.41,13.91Z",transform:"translate(-1.97 -3.91)"}),t.createElement("path",{d:"M20.41,20.34H3.47a1.5,1.5,0,0,1,0-3H20.41A1.5,1.5,0,0,1,20.41,20.34Z",transform:"translate(-1.97 -3.91)"}))},Ct=function(n){var e=n.children,o=n.onClick,r=n.mobileTextAlignment,i=n.link,l=n.isDropdown;return t.createElement(mt,{onClick:o,mobileTextAlignment:r,"data-link":i,"data-isdropdown":l},e)},mt=u.div(ct||(ct=f(["\n    padding: 15px;\n    display: flex;\n    justify-content: ",";\n"])),(function(t){return"center"===t.mobileTextAlignment?"center":"flex-start"}));Ct.propTypes={children:s.any,onClick:s.func,link:s.string,isDropdown:s.bool};var ht,wt,Tt=o((function(n){var e=n.link,o=n.disabledRedirect,r=n.title,l=n.buttonSettingsRoundCorners,d=n.buttonSettingsBorderWidth,a=n.buttonSettingsRegularBorder,u=n.buttonSettingsRegularFill,c=n.buttonSettingsHorizontalPadding,s=n.buttonSettingsVerticalPadding,g=n.buttonSettingsHoverClickedBorder,v=n.buttonSettingsHoverClickedFill,p=n.buttonSettingsTextColorRegular,f=n.buttonSettingsTextColorHover,b=n.buttonSettingsTextColorClicked,S=n.mobileTextAlignment,x=null==e?void 0:e.value,C=i((function(){x&&!o&&L(x)}),[x,o]);return t.createElement(Ct,{onClick:C,link:x,mobileTextAlignment:S},t.createElement(Bt,{buttonSettingsRoundCorners:l,buttonSettingsBorderWidth:d,buttonSettingsRegularBorder:a,buttonSettingsRegularFill:u,buttonSettingsHorizontalPadding:c,buttonSettingsVerticalPadding:s,buttonSettingsHoverClickedBorder:g,buttonSettingsHoverClickedFill:v,buttonSettingsTextColorRegular:p,buttonSettingsTextColorHover:f,buttonSettingsTextColorClicked:b},r))})),Bt=u.div(st||(st=f(["\n  word-break: break-word;\n  line-height: normal;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  border-radius: ","px;\n  border: ","px solid\n    ",";\n  background: ",";\n  padding: ",";\n  color: ",";\n\n  &:hover {\n    border: ","px solid\n      ",";\n    background: ",";\n    color: ",";\n  }\n\n  &:active {\n    border: ","px solid\n      ",";\n    background: ",";\n    color: ",";\n  }\n"])),(function(t){return t.buttonSettingsRoundCorners}),(function(t){return t.buttonSettingsBorderWidth}),(function(t){return t.buttonSettingsRegularBorder}),(function(t){return t.buttonSettingsRegularFill}),(function(t){var n=t.buttonSettingsVerticalPadding,e=t.buttonSettingsHorizontalPadding;return"".concat(n,"px ").concat(e,"px")}),(function(t){return t.buttonSettingsTextColorRegular}),(function(t){return t.buttonSettingsBorderWidth}),(function(t){return t.buttonSettingsHoverClickedBorder}),(function(t){return t.buttonSettingsHoverClickedFill}),(function(t){return t.buttonSettingsTextColorHover}),(function(t){return t.buttonSettingsBorderWidth}),(function(t){return t.buttonSettingsHoverClickedBorder}),(function(t){return t.buttonSettingsHoverClickedFill}),(function(t){return t.buttonSettingsTextColorClicked}));Tt.propTypes={disabledRedirect:s.bool,title:s.string,link:s.string,buttonSettingsRoundCorners:s.number,buttonSettingsBorderWidth:s.number,buttonSettingsRegularBorder:s.string,buttonSettingsRegularFill:s.string,buttonSettingsVerticalPadding:s.number,buttonSettingsHorizontalPadding:s.number,buttonSettingsHoverClickedBorder:s.string,buttonSettingsHoverClickedFill:s.string,buttonSettingsTextColorRegular:s.string,buttonSettingsTextColorHover:s.string,buttonSettingsTextColorClicked:s.string};var kt,yt,Ht,Rt,Ft,Et,zt,It,Pt,At,Ot,Lt,Vt=o((function(n){var e=n.disabledRedirect,o=n.disabledListClick,l=n.link,d=n.title,a=n.navBarTextHoverColor,u=n.navBarTextClickedColor,c=n.children,s=n.mobileTextAlignment,g=n.isStatic,v=null==l?void 0:l.value,p=b(r(g),2),f=p[0],S=p[1],x=c.length>0,C=i((function(){x&&!o?S((function(t){return!t})):x||e||!v||L(v)}),[o,e,x,v]);return t.createElement(jt,null,t.createElement(Ct,{isDropdown:x,link:x?void 0:v,onClick:C,mobileTextAlignment:s},t.createElement(U,{navBarTextHoverColor:a,navBarTextClickedColor:u},d," ",x&&t.createElement(V,{"data-arrow":!0},f?t.createElement(B,{icon:O,rotate:g?-90:90,color:"#ffffff"}):t.createElement(B,{icon:O,rotate:-90,color:"#ffffff"})))),f&&x&&t.createElement(Wt,{"data-mobile-dropdown-list":!0},c.map((function(n){var o;return t.createElement(Ct,{key:n.id,onClick:function(){var t;null!==(t=n.link)&&void 0!==t&&t.value&&!e&&L(n.link.value)},link:null===(o=n.link)||void 0===o?void 0:o.value,mobileTextAlignment:s},t.createElement(U,{navBarTextHoverColor:a,navBarTextClickedColor:u},n.title))}))))})),jt=u.div(ht||(ht=f(["\n  display: flex;\n  flex-direction: column;\n"]))),Wt=u.div(wt||(wt=f(["\n  display: flex;\n  flex-direction: column;\n"])));Vt.propTypes={link:s.string,disabledRedirect:s.bool,disabledListClick:s.bool,title:s.string,navBarTextHoverColor:s.string,navBarTextClickedColor:s.string,children:s.array,mobileTextAlignment:s.string};var Ut=function(e){var o=e.config,l=e.stickyOffset,u=void 0===l?0:l,c=e.isConstructor,s=void 0!==c&&c,g=e.isStatic,v=void 0!==g&&g,f=e.disabledRedirect,S=void 0!==f&&f,x=e.disabledListClick,C=void 0!==x&&x,m=b(r(s),2),h=m[0],w=m[1],k=d();n((function(){s||(document.body.style.overflowY=h?"hidden":"auto")}),[s,h]);var y=o.mobileHeight,H=o.navBarRegularColor,R=o.navBarRegularOnScrollColor,F=o.mobileLogoAlignment,E=o.logoSrc,z=o.logoCropperOptions,I=o.navBarBehavior,P=o.mobileFontSize,A=o.navBarTextFontFamily,O=o.navBarTextBold,L=o.navBarTextItalic,V=o.navBarTextUnderline,j=o.navBarTextRegularColor,W=o.navBarTextSpacing,U=o.buttonSettingsRoundCorners,M=o.buttonSettingsBorderWidth,N=o.buttonSettingsRegularBorder,Y=o.buttonSettingsRegularFill,G=o.buttonSettingsHorizontalPadding,q=o.buttonSettingsVerticalPadding,D=o.buttonSettingsHoverClickedFill,Z=o.buttonSettingsHoverClickedBorder,K=o.buttonSettingsTextColorRegular,Q=o.buttonSettingsTextColorHover,X=o.buttonSettingsTextColorClicked,$=o.mobileTextAlignment,_=o.navBarTextHoverColor,J=o.navBarTextClickedColor,tt=o.structure,nt=i((function(){s||C||w((function(t){return!t}))}),[s,C]);n((function(){var t=function(){"transparent"===H&&(k.current.style.backgroundColor=0!==window.scrollY||h?R:H)};return"transparent"===H&&(k.current.style.backgroundColor=h?R:H),window.addEventListener("scroll",t),function(){window.removeEventListener("scroll",t)}}),[h]);var et=H;return s&&"transparent"===H?et="#000":h&&(et="transparent"===H?R:H),t.createElement(Mt,{className:"navbar-mobile",navBarBehavior:I,stickyOffset:u,isConstructor:s,navBarRegularColor:H},t.createElement(Yt,{height:y,ref:k,navBarRegularColor:et,"data-mobile-header":!0},t.createElement(Zt,{onClick:nt,"data-mobile-menu-button":!0},t.createElement(B,{icon:xt,color:"#ffffff"})),t.createElement(Gt,{mobileLogoAlignment:F},t.createElement(qt,null,t.createElement(Dt,{height:y},t.createElement(it,{source:E+T(z),crop:z}))))),t.createElement(Nt,{"data-mobile-menu":!0,mobileHeight:y,offsetTop:u+y,isConstructor:s,open:h,navBarRegularColor:"transparent"===H?s?"#000":R:H,mobileFontSize:P,navBarTextFontFamily:A,navBarTextBold:O,navBarTextItalic:L,navBarTextUnderline:V,navBarTextRegularColor:j,navBarTextSpacing:W},null==tt?void 0:tt.map((function(n){var e="any";return"button"===n.type?e=t.createElement(Tt,p({},n,{mobileTextAlignment:$,disabledRedirect:s,buttonSettingsRoundCorners:U,buttonSettingsBorderWidth:M,buttonSettingsRegularBorder:N,buttonSettingsRegularFill:Y,buttonSettingsVerticalPadding:q,buttonSettingsHorizontalPadding:G,buttonSettingsHoverClickedBorder:Z,buttonSettingsHoverClickedFill:D,buttonSettingsTextColorRegular:K,buttonSettingsTextColorHover:Q,buttonSettingsTextColorClicked:X})):"page"===n.type&&(e=t.createElement(Vt,p({},n,{disabledRedirect:S,disabledListClick:C,navBarTextHoverColor:_,navBarTextClickedColor:J,mobileTextAlignment:$,isStatic:v}))),t.createElement(a,{key:n.id},e)}))))},Mt=u.div(kt||(kt=f(["\n  z-index: 1001;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  width: 100%;\n\n  ",""])),(function(t){var n=t.navBarBehavior,e=t.stickyOffset,o=t.isConstructor;return"transparent"!==t.navBarRegularColor||o?"frozen"!==n||o?"":c(Rt||(Rt=f(["\n        position: sticky;\n        top: ","px;\n      "])),e):c("frozen"===n?yt||(yt=f(["\n          position: fixed;\n          top: ","px;\n        "])):Ht||(Ht=f(["\n        position: absolute;\n        top: ","px;\n      "])),e)})),Nt=u.div(Ft||(Ft=f(["\n      display: flex;\n      flex-direction: column;\n      position: absolute;\n      top: ","px;\n      width: 100%;\n      height: ",";\n      ",";\n      transition: height 0.5s ease;\n      background-color: ",";\n      overflow-x: hidden;\n      overflow-y: auto;\n      font-size: ","px;\n      font-family: ",";\n      font-weight: ",";\n      font-style: ",";\n      text-decoration: ",";\n      color: ",";\n      ",";\n    "])),(function(t){return t.mobileHeight}),(function(t){return t.isConstructor?"auto":0}),(function(t){return t.isConstructor&&c(Et||(Et=f(["\n                max-height: 350px;\n              "])))}),(function(t){return t.navBarRegularColor}),(function(t){return t.mobileFontSize}),(function(t){return t.navBarTextFontFamily}),(function(t){return t.navBarTextBold?"bold":"normal"}),(function(t){return t.navBarTextItalic?"italic":"normal"}),(function(t){return t.navBarTextUnderline?"underline":"none"}),(function(t){return t.navBarTextRegularColor}),(function(t){var n=t.offsetTop,e=t.open;return!t.isConstructor&&e&&c(zt||(zt=f(["\n                height: calc(100vh - ","px);\n              "])),n)})),Yt=u.div(It||(It=f(["\n  display: flex;\n  width: 100%;\n  padding: 15px 13px 16px 5px;\n  //border: solid 1px rgba(164, 198, 225, 0.39);\n  height: ","px;\n  background-color: ",";\n  align-items: center;\n  overflow: hidden;\n  justify-content: space-between;\n  transition: background-color .2s ease-in-out;\n"])),(function(t){return t.height}),(function(t){return t.navBarRegularColor})),Gt=u.div(Pt||(Pt=f(["\n  display: flex;\n  width: calc(100% - 57px);\n  justify-content: ",";\n"])),(function(t){var n=t.mobileLogoAlignment;return"center"===n?"center":"right"===n?"flex-end":""})),qt=u.div(At||(At=f(["\n  display: flex;\n  width: 250px;\n"]))),Dt=u.div(Ot||(Ot=f(["\n  width: 100%;\n  height: ","px;\n"])),(function(t){return t.height})),Zt=u.div(Lt||(Lt=f(["\n  display: flex;\n  width: 44px;\n  height: 44px;\n  cursor: pointer;\n  > div {\n    margin: auto;\n  }\n"])));Ut.propTypes={config:s.object,stickyOffset:s.number};export{ut as NavBar,Ut as NavBarMobile,m as logoImageHeight,C as logoImageWidth};
//# sourceMappingURL=index.esm.js.map

"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("react"),e=require("styled-components"),n=require("prop-types"),o=require("react-dom");function r(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var i=r(t),l=r(e),a=r(n),d=r(o);function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function c(){return c=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},c.apply(this,arguments)}function s(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function g(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var o,r,i=[],l=!0,a=!1;try{for(n=n.call(t);!(l=(o=n.next()).done)&&(i.push(o.value),!e||i.length!==e);l=!0);}catch(t){a=!0,r=t}finally{try{l||null==n.return||n.return()}finally{if(a)throw r}}return i}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return f(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}(function(t){return i.default.createElement(rt,t)}).bind({}).args={config:p,isPreview:!0};var v,p={name:"test icon color1",height:58,logoSrc:"https://ifolio-cloud-s3.s3.amazonaws.com/img/navbar_logo250x80.png",structure:[{id:"52ff32c0-5a85-11ed-92af-95478d94f522",link:{name:"Ukhanov CVX",type:"ifolio",value:"http://localhost:3000/download-app"},type:"page",title:"with link",children:[]},{id:"55f7b240-5a85-11ed-92af-95478d94f522",link:null,type:"page",title:"without link",children:[]},{id:"abee9f70-5c1e-11ed-be7e-cb281a8f3f7b",type:"page",title:"inner link here",children:[{id:"cf809c40-5c1e-11ed-be7e-cb281a8f3f7b",type:"page",title:"here",children:[],link:{type:"link",value:"http://localhost:6006/?path=/story/navbar-desktop--primary"}}],link:{type:"link",value:"http://seasonvar.ru/"},expanded:!0},{id:"e1e6b180-5c1e-11ed-be7e-cb281a8f3f7b",type:"button",title:"button link",children:[],link:{type:"link",value:"https://aliexpress.ru/"}}],mobileHeight:65,logoAlignment:"left",mobileFontSize:14,navBarBehavior:"frozen",navBarTextBold:!0,navBarHoverColor:"#41c5c2",navBarTextItalic:!1,navBarTextSpacing:10,logoCropperOptions:{x:0,y:0,zoom:1.4,width:500,height:160,rotate:0,scaleX:1,scaleY:1,imageBox:{x:0,y:0,width:500,height:160},imgWidth:250,imgHeight:80,imagePosition:{x:0,y:0,width:100,height:100}},navBarClickedColor:"#41c5c2",navBarRegularColor:"#41c5c2",navBarTextFontSize:14,mobileLogoAlignment:"right",mobileTextAlignment:"left",navBarTextAlignment:"left",navBarTextUnderline:!1,navBarTextFontFamily:"Arial",navBarTextHoverColor:"#292e50",navBarTextClickedColor:"#292e50",navBarTextRegularColor:"#ffffff",dropdownSettingsTextBold:!1,buttonSettingsBorderWidth:2,buttonSettingsRegularFill:"transparent",buttonSettingsRoundCorners:20,dropdownSettingsTextItalic:!1,navBarRegularOnScrollColor:"#41c5c2",buttonSettingsRegularBorder:"#fff",buttonSettingsTextColorHover:"#fff",dropdownSettingsInactiveFill:"#2cbab7",dropdownSettingsTextFontSize:14,buttonSettingsVerticalPadding:8,dropdownSettingsTextUnderline:!1,buttonSettingsHoverClickedFill:"#292e50",buttonSettingsTextColorClicked:"#fff",buttonSettingsTextColorRegular:"#fff",dropdownSettingsInactiveBorder:"#2cbab7",dropdownSettingsTextColorHover:"#41c5c2",dropdownSettingsTextFontFamily:"Arial",buttonSettingsHorizontalPadding:20,dropdownSettingsVerticalPadding:8,buttonSettingsHoverClickedBorder:"#fff",dropdownSettingsHoverClickedFill:"#eeffff",dropdownSettingsTextColorClicked:"#41c5c2",dropdownSettingsTextColorRegular:"#fff",dropdownSettingsHorizontalPadding:10,dropdownSettingsHoverClickedBorder:"#eeffff"},b=function(t){return Math.floor(t)},S=function(t){if(!t||0===Object.keys(t).length)return"";var e=t.imageBox,n=t.rotate,o=e.x,r=e.y,i=e.height,l=e.width;return"?x=".concat(b(o),"&y=").concat(b(r),"&w=").concat(b(l),"&h=").concat(b(i),"&rotate=").concat(n)},x=function(t){var e=t.icon,n=t.opacity,o=void 0===n?1:n,r=t.hoverOpacity,l=void 0===r?1:r,a=t.color,d=void 0===a?"#000":a,u=t.hoverColor,c=void 0===u?d:u,s=t.size,g=void 0===s?20:s,f=t.rotate,v=t.noCursor,p=t.padding,b=void 0===p?0:p,S=t.width,x=t.height,h=t.tableIcon;return i.default.createElement(m,{color:d,hoverColor:c,size:g,width:S,height:x,opacity:o,hoverOpacity:l,rotate:f,noCursor:v,padding:b,tableIcon:h},C(e))},C=function(t){var e=t;return"function"==typeof t?i.default.createElement(e,null):"string"==typeof t?t:null},m=l.default.div(v||(v=s(["\n  cursor: ",";\n  display: ",";\n  flex: 0 0 auto;\n  align-items: center;\n  font-size: ",";\n  width: ","px;\n  height: ","px;\n  transform: rotate(","deg);\n  transform-origin: 50% 50%;\n  padding: ","px;\n\n  :hover {\n    svg {\n      fill: ",";\n      opacity: ",";\n    }\n  }\n\n  svg {\n    fill: ",";\n    opacity: ",";\n    width: 100%;\n    height: 100%;\n    transition: all ease-in-out 0.3s;\n    vertical-align: ",";\n  }\n"])),(function(t){return t.noCursor?"initial":"pointer"}),(function(t){return t.tableIcon?"table-cell":"flex"}),(function(t){return!t.tableIcon&&"0"}),(function(t){var e=t.size,n=t.width;return n||e}),(function(t){var e=t.size,n=t.height;return n||e}),(function(t){return t.rotate}),(function(t){return t.padding}),(function(t){return t.hoverColor}),(function(t){return t.hoverOpacity}),(function(t){return t.color}),(function(t){return t.opacity}),(function(t){return t.tableIcon&&"middle"}));x.propTypes={color:a.default.string,hoverColor:a.default.string,icon:a.default.oneOfType([a.default.string,a.default.func]),size:a.default.number,padding:a.default.number,opacity:a.default.number,hoverOpacity:a.default.number,rotate:a.default.number,noCursor:a.default.bool,width:a.default.number,height:a.default.number,tableIcon:a.default.bool},x.defaultProps={opacity:1,color:"#000",size:20,padding:0,rotate:0,noCursor:!1,tableIcon:!1};var h,w,B,T,k,y,H,R,F=function(){return i.default.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24"},i.default.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),i.default.createElement("path",{d:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"}))},E=function(t,e){return window.open(t,e?"_blank":"_self","noreferrer noopener")},z=l.default.div(h||(h=s([""]))),P=l.default.div(w||(w=s(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  height: 100%;\n  transition: all 300ms ease-out;\n\n  &:hover {\n    color: ",";\n  }\n\n  &:active {\n    color: ",";\n  }\n"])),(function(t){return t.navBarTextHoverColor}),(function(t){return t.navBarTextClickedColor})),I=l.default(P)(B||(B=s(["\n    padding: 0 10px;\n"]))),A=l.default(P)(T||(T=s(["\n    word-break: break-word;\n"]))),O=t.memo((function(t){var e=t.disabledRedirect,n=t.childs,o=t.dropdownSettingsInactiveFill,r=t.dropdownSettingsInactiveBorder,l=t.dropdownSettingsHoverClickedFill,a=t.dropdownSettingsHoverClickedBorder,c=t.dropdownSettingsTextColorRegular,s=t.dropdownSettingsTextColorHover,g=t.dropdownSettingsTextColorClicked,f=t.dropdownSettingsTextFontFamily,v=t.dropdownSettingsTextFontSize,p=t.dropdownSettingsTextBold,b=t.dropdownSettingsTextUnderline,S=t.dropdownSettingsTextItalic,x=t.dropdownSettingsHorizontalPadding,C=t.dropdownSettingsVerticalPadding,m=t.setOpen,h=t.rootId,w=t.parentRef,B=t.isPreview,T="object"===("undefined"==typeof window?"undefined":u(window)),k=0,y=0;if(T&&w){k=w.getBoundingClientRect().left;var H=w.closest("[data-navbarcontainer]"),R=w.closest(".navbar-desktop");if(H){var F=H.getBoundingClientRect().left;k<F&&(k=F)}if(R){var z=R.getBoundingClientRect();y=z.top+z.height+window.scrollY}}var P=i.default.createElement(j,{"data-list":!0,className:"navbar-list",left:k,top:y,dropdownSettingsInactiveBorder:r},n.map((function(t){var n;return i.default.createElement(W,{key:t.id,dropdownSettingsInactiveFill:o,dropdownSettingsHoverClickedFill:l,dropdownSettingsHoverClickedBorder:a,dropdownSettingsTextColorRegular:c,dropdownSettingsTextColorHover:s,dropdownSettingsTextColorClicked:g,dropdownSettingsTextFontFamily:f,dropdownSettingsTextFontSize:v,dropdownSettingsTextBold:p,dropdownSettingsTextUnderline:b,dropdownSettingsTextItalic:S,dropdownSettingsHorizontalPadding:x,dropdownSettingsVerticalPadding:C,onClick:function(){var n;null!==(n=t.link)&&void 0!==n&&n.value&&!e?(E(t.link.value,B),m(!1)):m(!1)},"data-link":null===(n=t.link)||void 0===n?void 0:n.value},t.title)})));return T?d.default.createPortal(P,document.getElementById(h)):P})),L=t.memo((function(e){var n=e.disabledRedirect,o=e.disabledListClick,r=e.link,l=e.title,a=e.navBarTextHoverColor,d=e.navBarTextClickedColor,u=e.children,c=e.dropdownSettingsInactiveFill,s=e.dropdownSettingsInactiveBorder,f=e.dropdownSettingsHoverClickedFill,v=e.dropdownSettingsHoverClickedBorder,p=e.dropdownSettingsTextColorRegular,b=e.dropdownSettingsTextColorHover,S=e.dropdownSettingsTextColorClicked,C=e.dropdownSettingsTextFontFamily,m=e.dropdownSettingsTextFontSize,h=e.dropdownSettingsTextBold,w=e.dropdownSettingsTextUnderline,B=e.dropdownSettingsTextItalic,T=e.dropdownSettingsHorizontalPadding,k=e.dropdownSettingsVerticalPadding,y=e.isStatic,H=e.navBarHoverColor,R=e.navBarClickedColor,P=e.rootId,A=e.isPreview,L=g(t.useState(y),2),j=L[0],W=L[1],U=null==r?void 0:r.value,M=function(e){var n=t.createRef(),o=function(t){!n.current||null!=n&&n.current.contains(t.target)||e(t,n.current)};return t.useEffect((function(){return document.addEventListener("mousedown",o),document.addEventListener("touchstart",o),function(){document.removeEventListener("mousedown",o),document.removeEventListener("touchstart",o)}})),n}((function(){W(!1)})),N=g(t.useState(null),2),q=N[0],Y=N[1];t.useEffect((function(){Y(M.current)}),[]);var _=u.length>0,D=t.useCallback((function(){_&&!o?W((function(t){return!t})):_||n||!U||E(U,A)}),[o,n,_,U,A]);return t.useEffect((function(){var t=function(){W(!1)};return document.body.addEventListener("scroll",t),function(){document.body.removeEventListener("scroll",t)}}),[]),i.default.createElement(V,{ref:M,navBarHoverColor:H,navBarClickedColor:R},i.default.createElement(I,{navBarTextHoverColor:a,navBarTextClickedColor:d,onClick:D,"data-link":_?void 0:U,"data-isdropdown":_},l," ",_&&i.default.createElement(z,{"data-arrow":!0},j?i.default.createElement(x,{icon:F,rotate:y?-90:90,color:"#ffffff"}):i.default.createElement(x,{icon:F,rotate:-90,color:"#ffffff"}))),j&&_&&i.default.createElement(O,{dropdownSettingsInactiveFill:c,dropdownSettingsInactiveBorder:s,dropdownSettingsHoverClickedFill:f,dropdownSettingsHoverClickedBorder:v,dropdownSettingsTextColorRegular:p,dropdownSettingsTextColorHover:b,dropdownSettingsTextColorClicked:S,dropdownSettingsTextFontFamily:C,dropdownSettingsTextFontSize:m,dropdownSettingsTextBold:h,dropdownSettingsTextUnderline:w,dropdownSettingsTextItalic:B,dropdownSettingsHorizontalPadding:T,dropdownSettingsVerticalPadding:k,childs:u,setOpen:W,disabledRedirect:n,rootId:P,parentRef:q,isPreview:A}))})),V=l.default.div(k||(k=s(["\n  position: relative;\n  height: 100%;\n\n  &:hover {\n    background: ",";\n  }\n\n  &:active {\n    background: ",";\n  }\n"])),(function(t){return t.navBarHoverColor}),(function(t){return t.navBarClickedColor})),j=l.default.div(y||(y=s(["\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  left: ","px;\n  top: ","px;\n  z-index: 2;\n  \n  > div {\n    border-right: 2px solid ",";\n    border-left: 2px solid ",";\n    border-bottom: 2px solid ",";\n  }\n  > div:first-child {\n    border-top: 2px solid ",";\n  }\n"])),(function(t){return t.left}),(function(t){return t.top}),(function(t){return t.dropdownSettingsInactiveBorder}),(function(t){return t.dropdownSettingsInactiveBorder}),(function(t){return t.dropdownSettingsInactiveBorder}),(function(t){return t.dropdownSettingsInactiveBorder})),W=l.default.div(H||(H=s(["\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n  cursor: pointer;\n  background: ",";\n  color: ",";\n  font-size: ","px;\n  font-family: ",";\n  font-weight: ",";\n  font-style: ",";\n  text-decoration: ",";\n  padding: ",";\n\n  &:hover {\n    background: ",";\n    border: 2px solid ",";\n    color: ",";\n  }\n\n  &:active {\n    background: ",";\n    border: 2px solid ",";\n    color: ",";\n  }\n"])),(function(t){return t.dropdownSettingsInactiveFill}),(function(t){return t.dropdownSettingsTextColorRegular}),(function(t){return t.dropdownSettingsTextFontSize}),(function(t){return t.dropdownSettingsTextFontFamily}),(function(t){return t.dropdownSettingsTextBold?"bold":"normal"}),(function(t){return t.dropdownSettingsTextItalic?"italic":"normal"}),(function(t){return t.dropdownSettingsTextUnderline?"underline":"none"}),(function(t){var e=t.dropdownSettingsVerticalPadding,n=t.dropdownSettingsHorizontalPadding;return"".concat(e,"px ").concat(n,"px")}),(function(t){return t.dropdownSettingsHoverClickedFill}),(function(t){return t.dropdownSettingsHoverClickedBorder}),(function(t){return t.dropdownSettingsTextColorHover}),(function(t){return t.dropdownSettingsHoverClickedFill}),(function(t){return t.dropdownSettingsHoverClickedBorder}),(function(t){return t.dropdownSettingsTextColorClicked}));L.propTypes={link:a.default.string,disabledRedirect:a.default.bool,disabledListClick:a.default.bool,title:a.default.string,navBarTextHoverColor:a.default.string,navBarTextClickedColor:a.default.string,children:a.default.array,dropdownSettingsInactiveFill:a.default.string,dropdownSettingsInactiveBorder:a.default.string,dropdownSettingsHoverClickedFill:a.default.string,dropdownSettingsHoverClickedBorder:a.default.string,dropdownSettingsTextColorRegular:a.default.string,dropdownSettingsTextColorHover:a.default.string,dropdownSettingsTextColorClicked:a.default.string,dropdownSettingsTextFontFamily:a.default.string,dropdownSettingsTextFontSize:a.default.number,dropdownSettingsTextBold:a.default.bool,dropdownSettingsTextUnderline:a.default.bool,dropdownSettingsTextItalic:a.default.bool,dropdownSettingsHorizontalPadding:a.default.number,dropdownSettingsVerticalPadding:a.default.number,navBarHoverColor:a.default.string,navBarClickedColor:a.default.string,rootId:a.default.string};var U,M,N=t.memo((function(e){var n=e.link,o=e.disabledRedirect,r=e.title,l=e.buttonSettingsRoundCorners,a=e.buttonSettingsBorderWidth,d=e.buttonSettingsRegularBorder,u=e.buttonSettingsRegularFill,c=e.buttonSettingsHorizontalPadding,s=e.buttonSettingsVerticalPadding,g=e.buttonSettingsHoverClickedBorder,f=e.buttonSettingsHoverClickedFill,v=e.buttonSettingsTextColorRegular,p=e.buttonSettingsTextColorHover,b=e.buttonSettingsTextColorClicked,S=e.navBarTextFontSize,x=e.isPreview,C=null==n?void 0:n.value,m=t.useCallback((function(){C&&!o&&E(C,x)}),[C,o,x]);return i.default.createElement(q,{buttonSettingsRoundCorners:l,buttonSettingsBorderWidth:a,buttonSettingsRegularBorder:d,buttonSettingsRegularFill:u,buttonSettingsHorizontalPadding:c,buttonSettingsVerticalPadding:s,buttonSettingsHoverClickedBorder:g,buttonSettingsHoverClickedFill:f,buttonSettingsTextColorRegular:v,buttonSettingsTextColorHover:p,buttonSettingsTextColorClicked:b,onClick:m,"data-link":C,navBarTextFontSize:S},r)})),q=l.default.div(R||(R=s(["\n  line-height: normal;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  transition: all 300ms ease-out;\n  border-radius: ","px;\n  border: ","px solid ",";\n  background: ",";\n  padding: ",";\n  color: ",";\n  height: ","px;\n\n  &:hover {\n    border: ","px solid ",";\n    background: ",";\n    color: ",";\n  }\n\n  &:active {\n    border: ","px solid ",";\n    background: ",";\n    color: ",";\n  }\n"])),(function(t){return t.buttonSettingsRoundCorners}),(function(t){return t.buttonSettingsBorderWidth}),(function(t){return t.buttonSettingsRegularBorder}),(function(t){return t.buttonSettingsRegularFill}),(function(t){var e=t.buttonSettingsHorizontalPadding;return"0 ".concat(e,"px")}),(function(t){return t.buttonSettingsTextColorRegular}),(function(t){var e=t.buttonSettingsVerticalPadding;return t.navBarTextFontSize+2*(e||0)+2*(t.buttonSettingsBorderWidth||0)}),(function(t){return t.buttonSettingsBorderWidth}),(function(t){return t.buttonSettingsHoverClickedBorder}),(function(t){return t.buttonSettingsHoverClickedFill}),(function(t){return t.buttonSettingsTextColorHover}),(function(t){return t.buttonSettingsBorderWidth}),(function(t){return t.buttonSettingsHoverClickedBorder}),(function(t){return t.buttonSettingsHoverClickedFill}),(function(t){return t.buttonSettingsTextColorClicked}));N.propTypes={disabledRedirect:a.default.bool,title:a.default.string,link:a.default.string,buttonSettingsRoundCorners:a.default.number,buttonSettingsBorderWidth:a.default.number,buttonSettingsRegularBorder:a.default.string,buttonSettingsRegularFill:a.default.string,buttonSettingsVerticalPadding:a.default.number,buttonSettingsHorizontalPadding:a.default.number,buttonSettingsHoverClickedBorder:a.default.string,buttonSettingsHoverClickedFill:a.default.string,buttonSettingsTextColorRegular:a.default.string,buttonSettingsTextColorHover:a.default.string,buttonSettingsTextColorClicked:a.default.string,navBarTextFontSize:a.default.number};var Y,_,D,Z,X,$,G,J,K,Q,tt=t.forwardRef((function(t,e){var n=t.height,o=t.id,r=t.crop,l=t.source,a=t.alt,d={width:"100%",height:"100%",objectFit:"contain"};return t.ignoreMaxHeight||(d.maxHeight="600px"),i.default.createElement(nt,{ref:e,height:n,id:o},i.default.createElement(et,r.imagePosition,i.default.createElement("img",{src:l,alt:a,style:d})))})),et=l.default.div(U||(U=s(["\n  position: relative;\n  left: ","%;\n  top: ","%;\n  width: ","%;\n  height: ","%;\n"])),(function(t){return t.x||0}),(function(t){return t.y||0}),(function(t){return t.width||100}),(function(t){return t.height||100})),nt=l.default.div(M||(M=s(["\n  width: 100%;\n  height: ",";\n  position: relative;\n  background-color: transparent;\n  overflow: hidden;\n"])),(function(t){var e=t.height;return e?e+"px":"100%"}));tt.propTypes={height:a.default.number,id:a.default.string,crop:a.default.object,source:a.default.string.isRequired,alt:a.default.string,ignoreMaxHeight:a.default.bool},tt.defaultProps={id:"",alt:"",ignoreMaxHeight:!1,crop:{}};var ot=function(t){var e=t.logoSrc,n=t.logoCropperOptions,o=t.hideElement,r=t.height;return o?null:i.default.createElement(ut,{hideElement:o,height:r},i.default.createElement(tt,{source:e+S(n),crop:n}))},rt=function(e){var n=e.config,o=e.disabledRedirect,r=void 0!==o&&o,l=e.disabledListClick,a=void 0!==l&&l,d=e.stickyOffset,u=void 0===d?0:d,s=e.isStatic,g=void 0!==s&&s,f=e.hideLogo,v=void 0!==f&&f,p=e.isPreview,b=void 0!==p&&p,S=e.isListView,x=void 0!==S&&S,C=e.rootId,m=void 0===C?"root":C,h=t.useRef(),w=n.height,B=n.navBarRegularColor,T=n.navBarHoverColor,k=n.navBarClickedColor,y=n.navBarRegularOnScrollColor,H=n.logoAlignment,R=n.logoCropperOptions,F=n.logoSrc,E=n.navBarTextAlignment,z=n.navBarTextFontSize,P=n.navBarTextFontFamily,I=n.navBarTextBold,A=n.navBarTextItalic,O=n.navBarTextUnderline,V=n.navBarTextRegularColor,j=n.structure,W=n.navBarTextHoverColor,U=n.navBarTextClickedColor,M=n.navBarTextSpacing,q=n.buttonSettingsRoundCorners,Y=n.buttonSettingsBorderWidth,_=n.buttonSettingsRegularBorder,D=n.buttonSettingsRegularFill,Z=n.buttonSettingsHorizontalPadding,X=n.buttonSettingsVerticalPadding,$=n.buttonSettingsHoverClickedFill,G=n.buttonSettingsHoverClickedBorder,J=n.buttonSettingsTextColorRegular,K=n.buttonSettingsTextColorHover,Q=n.buttonSettingsTextColorClicked,tt=n.navBarBehavior,et=n.dropdownSettingsInactiveFill,nt=n.dropdownSettingsInactiveBorder,rt=n.dropdownSettingsHoverClickedFill,it=n.dropdownSettingsHoverClickedBorder,lt=n.dropdownSettingsTextColorRegular,ut=n.dropdownSettingsTextColorHover,ft=n.dropdownSettingsTextColorClicked,vt=n.dropdownSettingsTextFontFamily,pt=n.dropdownSettingsTextFontSize,bt=n.dropdownSettingsTextBold,St=n.dropdownSettingsTextUnderline,xt=n.dropdownSettingsTextItalic,Ct=n.dropdownSettingsHorizontalPadding,mt=n.dropdownSettingsVerticalPadding;return t.useEffect((function(){var t=function(){if("transparent"===B){var t=y;0===window.scrollY&&(t=b?"#000":B),h.current.style.backgroundColor=t}};return window.addEventListener("scroll",t),function(){window.removeEventListener("scroll",t)}}),[B,y,b]),i.default.createElement(dt,{ref:h,height:w,navBarRegularColor:B,isPreview:b,navBarBehavior:tt,stickyOffset:u,className:"navbar-desktop","data-color":B,"data-coloronscroll":y,isListView:x},i.default.createElement(ct,{height:w},i.default.createElement(ot,{logoSrc:F,logoCropperOptions:R,hideElement:v||"left"!==H,height:w}),i.default.createElement(st,{"data-navbarcontainer":!0,navBarTextAlignment:E,navBarTextFontSize:z,navBarTextFontFamily:P,navBarTextBold:I,navBarTextItalic:A,navBarTextUnderline:O,navBarTextRegularColor:V,navBarTextSpacing:M},0===(null==j?void 0:j.length)&&b?i.default.createElement(at,{navBarTextAlignment:E},"Navigation will preview here once created"):i.default.createElement(i.default.Fragment,null,null==j?void 0:j.map((function(e){var n=null;return"button"===e.type?n=i.default.createElement(gt,null,i.default.createElement(N,c({},e,{disabledRedirect:r,buttonSettingsRoundCorners:q,buttonSettingsBorderWidth:Y,buttonSettingsRegularBorder:_,buttonSettingsRegularFill:D,buttonSettingsVerticalPadding:X,buttonSettingsHorizontalPadding:Z,buttonSettingsHoverClickedBorder:G,buttonSettingsHoverClickedFill:$,buttonSettingsTextColorRegular:J,buttonSettingsTextColorHover:K,buttonSettingsTextColorClicked:Q,navBarTextFontSize:z,isPreview:b}))):"page"===e.type&&(n=i.default.createElement(L,c({},e,{disabledRedirect:r,disabledListClick:a,navBarTextHoverColor:W,navBarTextClickedColor:U,dropdownSettingsInactiveFill:et,dropdownSettingsInactiveBorder:nt,dropdownSettingsHoverClickedFill:rt,dropdownSettingsHoverClickedBorder:it,dropdownSettingsTextColorRegular:lt,dropdownSettingsTextColorHover:ut,dropdownSettingsTextColorClicked:ft,dropdownSettingsTextFontFamily:vt,dropdownSettingsTextFontSize:pt,dropdownSettingsTextBold:bt,dropdownSettingsTextUnderline:St,dropdownSettingsTextItalic:xt,dropdownSettingsHorizontalPadding:Ct,dropdownSettingsVerticalPadding:mt,isStatic:g,navBarHoverColor:T,navBarClickedColor:k,rootId:m,isPreview:b}))),i.default.createElement(t.Fragment,{key:e.id},n)})))),i.default.createElement(ot,{logoSrc:F,logoCropperOptions:R,hideElement:v||"right"!==H,height:w})))};rt.propTypes={config:a.default.object,disabledRedirect:a.default.bool,disabledListClick:a.default.bool,stickyOffset:a.default.number,isStatic:a.default.bool,hideLogo:a.default.bool,isPreview:a.default.bool};var it,lt,at=l.default.div(Y||(Y=s(["\n  font-family: Montserrat-bold, sans-serif;\n  display: flex !important;\n  align-items: center;\n  justify-content: ",";\n  width: auto;\n  font-size: 15px;\n  letter-spacing: 1.5px;\n  text-transform: uppercase;\n  height: 100%;\n"])),(function(t){var e=t.navBarTextAlignment;return"right"===e?"flex-end":"left"===e?"flex-start":"center"})),dt=l.default.div(_||(_=s(["\n  display: flex;\n  height: ","px;\n  background-color: ",";\n  padding: 0 24px;\n  width: 100%;\n  margin: auto;\n  align-items: center;\n  flex-shrink: 0;\n  z-index: 1002;\n  transition: background-color .2s ease-in-out;\n\n  ","\n"])),(function(t){return t.height}),(function(t){var e=t.navBarRegularColor,n=t.isPreview,o=t.isListView;return(n||o)&&"transparent"===e?"black":e}),(function(t){var n=t.navBarBehavior,o=t.stickyOffset,r=t.navBarRegularColor,i=t.isPreview;if(!t.isListView){if("transparent"===r)return"frozen"===n?i?e.css(D||(D=s(["\n              position: sticky;\n              top: ","px;\n            "])),o):e.css(Z||(Z=s(["\n            position: fixed;\n            top: ","px;\n          "])),o):e.css(X||(X=s(["\n          position: absolute;\n          top: ","px;\n        "])),o);if("frozen"===n)return e.css($||($=s(["\n          position: sticky;\n          top: ","px;\n        "])),o)}return""})),ut=l.default.div(G||(G=s(["\n  width: ","px;\n  height: ","px;\n  opacity: ",";\n"])),250,(function(t){return t.height}),(function(t){return t.hideElement?0:1})),ct=l.default.div(J||(J=s(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  max-width: 1367px;\n  margin: auto;\n  height: ","px;\n"])),(function(t){return t.height})),st=l.default.div(K||(K=s(["\n  display: inline;\n  white-space: nowrap;\n  margin: 0 24px;\n  text-align: ",";\n  font-size: ","px;\n  font-family: ",";\n  font-weight: ",";\n  font-style: ",";\n  text-decoration: ",";\n  color: ",";\n  height: 100%;\n  width: calc(100% - ","px);\n  overflow-x: auto;\n  overflow-y: hidden;\n\n  > div {\n    margin-right: ","px;\n    display: inline-block;\n    vertical-align: middle;\n    transition: all 300ms ease-out;\n\n    &:last-child {\n      margin-right: 0;\n    }\n  }\n"])),(function(t){return t.navBarTextAlignment}),(function(t){return t.navBarTextFontSize}),(function(t){return t.navBarTextFontFamily}),(function(t){return t.navBarTextBold?"bold":"normal"}),(function(t){return t.navBarTextItalic?"italic":"normal"}),(function(t){return t.navBarTextUnderline?"underline":"none"}),(function(t){return t.navBarTextRegularColor}),300,(function(t){return t.navBarTextSpacing})),gt=l.default.div(Q||(Q=s(["\n"]))),ft=function(){return i.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"19.94",height:"16.44",viewBox:"0 0 19.94 16.44"},i.default.createElement("path",{d:"M20.41,6.91H3.47a1.5,1.5,0,0,1,0-3H20.41A1.5,1.5,0,0,1,20.41,6.91Z",transform:"translate(-1.97 -3.91)"}),i.default.createElement("path",{d:"M20.41,13.91H3.47a1.5,1.5,0,0,1,0-3H20.41A1.5,1.5,0,0,1,20.41,13.91Z",transform:"translate(-1.97 -3.91)"}),i.default.createElement("path",{d:"M20.41,20.34H3.47a1.5,1.5,0,0,1,0-3H20.41A1.5,1.5,0,0,1,20.41,20.34Z",transform:"translate(-1.97 -3.91)"}))},vt=function(t){var e=t.children,n=t.onClick,o=t.mobileTextAlignment,r=t.link,l=t.isDropdown;return i.default.createElement(pt,{onClick:n,mobileTextAlignment:o,"data-link":r,"data-isdropdown":l},e)},pt=l.default.div(it||(it=s(["\n    padding: 15px;\n    display: flex;\n    justify-content: ",";\n"])),(function(t){return"center"===t.mobileTextAlignment?"center":"flex-start"}));vt.propTypes={children:a.default.any,onClick:a.default.func,link:a.default.string,isDropdown:a.default.bool};var bt,St,xt=t.memo((function(e){var n=e.link,o=e.disabledRedirect,r=e.title,l=e.buttonSettingsRoundCorners,a=e.buttonSettingsBorderWidth,d=e.buttonSettingsRegularBorder,u=e.buttonSettingsRegularFill,c=e.buttonSettingsHorizontalPadding,s=e.buttonSettingsVerticalPadding,g=e.buttonSettingsHoverClickedBorder,f=e.buttonSettingsHoverClickedFill,v=e.buttonSettingsTextColorRegular,p=e.buttonSettingsTextColorHover,b=e.buttonSettingsTextColorClicked,S=e.mobileTextAlignment,x=e.isConstructor,C=null==n?void 0:n.value,m=t.useCallback((function(){C&&!o&&E(C,x)}),[C,o,x]);return i.default.createElement(vt,{onClick:m,link:C,mobileTextAlignment:S},i.default.createElement(Ct,{buttonSettingsRoundCorners:l,buttonSettingsBorderWidth:a,buttonSettingsRegularBorder:d,buttonSettingsRegularFill:u,buttonSettingsHorizontalPadding:c,buttonSettingsVerticalPadding:s,buttonSettingsHoverClickedBorder:g,buttonSettingsHoverClickedFill:f,buttonSettingsTextColorRegular:v,buttonSettingsTextColorHover:p,buttonSettingsTextColorClicked:b},r))})),Ct=l.default.div(lt||(lt=s(["\n  word-break: break-word;\n  line-height: normal;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  border-radius: ","px;\n  border: ","px solid\n    ",";\n  background: ",";\n  padding: ",";\n  color: ",";\n\n  &:hover {\n    border: ","px solid\n      ",";\n    background: ",";\n    color: ",";\n  }\n\n  &:active {\n    border: ","px solid\n      ",";\n    background: ",";\n    color: ",";\n  }\n"])),(function(t){return t.buttonSettingsRoundCorners}),(function(t){return t.buttonSettingsBorderWidth}),(function(t){return t.buttonSettingsRegularBorder}),(function(t){return t.buttonSettingsRegularFill}),(function(t){var e=t.buttonSettingsVerticalPadding,n=t.buttonSettingsHorizontalPadding;return"".concat(e,"px ").concat(n,"px")}),(function(t){return t.buttonSettingsTextColorRegular}),(function(t){return t.buttonSettingsBorderWidth}),(function(t){return t.buttonSettingsHoverClickedBorder}),(function(t){return t.buttonSettingsHoverClickedFill}),(function(t){return t.buttonSettingsTextColorHover}),(function(t){return t.buttonSettingsBorderWidth}),(function(t){return t.buttonSettingsHoverClickedBorder}),(function(t){return t.buttonSettingsHoverClickedFill}),(function(t){return t.buttonSettingsTextColorClicked}));xt.propTypes={disabledRedirect:a.default.bool,title:a.default.string,link:a.default.string,buttonSettingsRoundCorners:a.default.number,buttonSettingsBorderWidth:a.default.number,buttonSettingsRegularBorder:a.default.string,buttonSettingsRegularFill:a.default.string,buttonSettingsVerticalPadding:a.default.number,buttonSettingsHorizontalPadding:a.default.number,buttonSettingsHoverClickedBorder:a.default.string,buttonSettingsHoverClickedFill:a.default.string,buttonSettingsTextColorRegular:a.default.string,buttonSettingsTextColorHover:a.default.string,buttonSettingsTextColorClicked:a.default.string};var mt,ht,wt,Bt,Tt,kt,yt,Ht,Rt,Ft,Et,zt,Pt=t.memo((function(e){var n=e.disabledRedirect,o=e.disabledListClick,r=e.link,l=e.title,a=e.navBarTextHoverColor,d=e.navBarTextClickedColor,u=e.children,c=e.mobileTextAlignment,s=e.isStatic,f=e.isConstructor,v=null==r?void 0:r.value,p=g(t.useState(s),2),b=p[0],S=p[1],C=u.length>0,m=t.useCallback((function(){C&&!o?S((function(t){return!t})):C||n||!v||E(v,f)}),[o,n,C,v,f]);return i.default.createElement(It,null,i.default.createElement(vt,{isDropdown:C,link:C?void 0:v,onClick:m,mobileTextAlignment:c},i.default.createElement(A,{navBarTextHoverColor:a,navBarTextClickedColor:d},l," ",C&&i.default.createElement(z,{"data-arrow":!0},b?i.default.createElement(x,{icon:F,rotate:s?-90:90,color:"#ffffff"}):i.default.createElement(x,{icon:F,rotate:-90,color:"#ffffff"})))),b&&C&&i.default.createElement(At,{"data-mobile-dropdown-list":!0},u.map((function(t){var e;return i.default.createElement(vt,{key:t.id,onClick:function(){var e;null!==(e=t.link)&&void 0!==e&&e.value&&!n&&E(t.link.value,f)},link:null===(e=t.link)||void 0===e?void 0:e.value,mobileTextAlignment:c},i.default.createElement(A,{navBarTextHoverColor:a,navBarTextClickedColor:d},t.title))}))))})),It=l.default.div(bt||(bt=s(["\n  display: flex;\n  flex-direction: column;\n"]))),At=l.default.div(St||(St=s(["\n  display: flex;\n  flex-direction: column;\n"])));Pt.propTypes={link:a.default.string,disabledRedirect:a.default.bool,disabledListClick:a.default.bool,title:a.default.string,navBarTextHoverColor:a.default.string,navBarTextClickedColor:a.default.string,children:a.default.array,mobileTextAlignment:a.default.string};var Ot=function(e){var n=e.config,o=e.stickyOffset,r=void 0===o?0:o,l=e.isConstructor,a=void 0!==l&&l,d=e.isStatic,u=void 0!==d&&d,s=e.disabledRedirect,f=void 0!==s&&s,v=e.disabledListClick,p=void 0!==v&&v,b=g(t.useState(a),2),C=b[0],m=b[1],h=t.useRef();t.useEffect((function(){a||(document.body.style.overflowY=C?"hidden":"auto")}),[a,C]);var w=n.mobileHeight,B=n.navBarRegularColor,T=n.navBarRegularOnScrollColor,k=n.mobileLogoAlignment,y=n.logoSrc,H=n.logoCropperOptions,R=n.navBarBehavior,F=n.mobileFontSize,E=n.navBarTextFontFamily,z=n.navBarTextBold,P=n.navBarTextItalic,I=n.navBarTextUnderline,A=n.navBarTextRegularColor,O=n.navBarTextSpacing,L=n.buttonSettingsRoundCorners,V=n.buttonSettingsBorderWidth,j=n.buttonSettingsRegularBorder,W=n.buttonSettingsRegularFill,U=n.buttonSettingsHorizontalPadding,M=n.buttonSettingsVerticalPadding,N=n.buttonSettingsHoverClickedFill,q=n.buttonSettingsHoverClickedBorder,Y=n.buttonSettingsTextColorRegular,_=n.buttonSettingsTextColorHover,D=n.buttonSettingsTextColorClicked,Z=n.mobileTextAlignment,X=n.navBarTextHoverColor,$=n.navBarTextClickedColor,G=n.structure,J=t.useCallback((function(){a||p||m((function(t){return!t}))}),[a,p]);t.useEffect((function(){var t=function(){"transparent"===B&&(h.current.style.backgroundColor=0!==window.scrollY||C?T:B)};return"transparent"===B&&(h.current.style.backgroundColor=C?T:B),window.addEventListener("scroll",t),function(){window.removeEventListener("scroll",t)}}),[C]);var K=B;return a&&"transparent"===B?K="#000":C&&(K="transparent"===B?T:B),i.default.createElement(Lt,{className:"navbar-mobile",navBarBehavior:R,stickyOffset:r,isConstructor:a,navBarRegularColor:B},i.default.createElement(jt,{height:w,ref:h,navBarRegularColor:K,"data-mobile-header":!0},i.default.createElement(Nt,{onClick:J,"data-mobile-menu-button":!0},i.default.createElement(x,{icon:ft,color:"#ffffff"})),i.default.createElement(Wt,{mobileLogoAlignment:k},i.default.createElement(Ut,null,i.default.createElement(Mt,{height:w},i.default.createElement(tt,{source:y+S(H),crop:H}))))),i.default.createElement(Vt,{"data-mobile-menu":!0,mobileHeight:w,offsetTop:r+w,isConstructor:a,open:C,navBarRegularColor:"transparent"===B?a?"#000":T:B,mobileFontSize:F,navBarTextFontFamily:E,navBarTextBold:z,navBarTextItalic:P,navBarTextUnderline:I,navBarTextRegularColor:A,navBarTextSpacing:O},null==G?void 0:G.map((function(e){var n="any";return"button"===e.type?n=i.default.createElement(xt,c({},e,{mobileTextAlignment:Z,disabledRedirect:a,buttonSettingsRoundCorners:L,buttonSettingsBorderWidth:V,buttonSettingsRegularBorder:j,buttonSettingsRegularFill:W,buttonSettingsVerticalPadding:M,buttonSettingsHorizontalPadding:U,buttonSettingsHoverClickedBorder:q,buttonSettingsHoverClickedFill:N,buttonSettingsTextColorRegular:Y,buttonSettingsTextColorHover:_,buttonSettingsTextColorClicked:D,isConstructor:a})):"page"===e.type&&(n=i.default.createElement(Pt,c({},e,{disabledRedirect:f,disabledListClick:p,navBarTextHoverColor:X,navBarTextClickedColor:$,mobileTextAlignment:Z,isStatic:u,isConstructor:a}))),i.default.createElement(t.Fragment,{key:e.id},n)}))))},Lt=l.default.div(mt||(mt=s(["\n  z-index: 1001;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  width: 100%;\n\n  ",""])),(function(t){var n=t.navBarBehavior,o=t.stickyOffset,r=t.isConstructor;return"transparent"!==t.navBarRegularColor||r?"frozen"!==n||r?"":e.css(Bt||(Bt=s(["\n        position: sticky;\n        top: ","px;\n      "])),o):"frozen"===n?e.css(ht||(ht=s(["\n          position: fixed;\n          top: ","px;\n        "])),o):e.css(wt||(wt=s(["\n        position: absolute;\n        top: ","px;\n      "])),o)})),Vt=l.default.div(Tt||(Tt=s(["\n      display: flex;\n      flex-direction: column;\n      position: absolute;\n      top: ","px;\n      width: 100%;\n      height: ",";\n      ",";\n      transition: height 0.5s ease;\n      background-color: ",";\n      overflow-x: hidden;\n      overflow-y: auto;\n      font-size: ","px;\n      font-family: ",";\n      font-weight: ",";\n      font-style: ",";\n      text-decoration: ",";\n      color: ",";\n      ",";\n    "])),(function(t){return t.mobileHeight}),(function(t){return t.isConstructor?"auto":0}),(function(t){return t.isConstructor&&e.css(kt||(kt=s(["\n                max-height: 350px;\n              "])))}),(function(t){return t.navBarRegularColor}),(function(t){return t.mobileFontSize}),(function(t){return t.navBarTextFontFamily}),(function(t){return t.navBarTextBold?"bold":"normal"}),(function(t){return t.navBarTextItalic?"italic":"normal"}),(function(t){return t.navBarTextUnderline?"underline":"none"}),(function(t){return t.navBarTextRegularColor}),(function(t){var n=t.offsetTop,o=t.open;return!t.isConstructor&&o&&e.css(yt||(yt=s(["\n                height: calc(100vh - ","px);\n              "])),n)})),jt=l.default.div(Ht||(Ht=s(["\n  display: flex;\n  width: 100%;\n  padding: 15px 13px 16px 5px;\n  //border: solid 1px rgba(164, 198, 225, 0.39);\n  height: ","px;\n  background-color: ",";\n  align-items: center;\n  overflow: hidden;\n  justify-content: space-between;\n  transition: background-color .2s ease-in-out;\n"])),(function(t){return t.height}),(function(t){return t.navBarRegularColor})),Wt=l.default.div(Rt||(Rt=s(["\n  display: flex;\n  width: calc(100% - 57px);\n  justify-content: ",";\n"])),(function(t){var e=t.mobileLogoAlignment;return"center"===e?"center":"right"===e?"flex-end":""})),Ut=l.default.div(Ft||(Ft=s(["\n  display: flex;\n  width: 250px;\n"]))),Mt=l.default.div(Et||(Et=s(["\n  width: 100%;\n  height: ","px;\n"])),(function(t){return t.height})),Nt=l.default.div(zt||(zt=s(["\n  display: flex;\n  width: 44px;\n  height: 44px;\n  cursor: pointer;\n  > div {\n    margin: auto;\n  }\n"])));Ot.propTypes={config:a.default.object,stickyOffset:a.default.number},exports.NavBar=rt,exports.NavBarMobile=Ot,exports.logoImageHeight=80,exports.logoImageWidth=250;
//# sourceMappingURL=index.cjs.js.map

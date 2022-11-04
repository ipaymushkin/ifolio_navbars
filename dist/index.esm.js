import t,{useEffect as n,createRef as e,memo as o,useState as r,useCallback as i,forwardRef as l,useRef as a,Fragment as d}from"react";import c,{css as u}from"styled-components";import s from"prop-types";import g from"react-dom";function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function p(){return p=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t},p.apply(this,arguments)}function f(t,n){return n||(n=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}}))}function b(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==e)return;var o,r,i=[],l=!0,a=!1;try{for(e=e.call(t);!(l=(o=e.next()).done)&&(i.push(o.value),!n||i.length!==n);l=!0);}catch(t){a=!0,r=t}finally{try{l||null==e.return||e.return()}finally{if(a)throw r}}return i}(t,n)||function(t,n){if(!t)return;if("string"==typeof t)return S(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return S(t,n)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,o=new Array(n);e<n;e++)o[e]=t[e];return o}(function(n){return t.createElement(ut,n)}).bind({}).args={config:h,isPreview:!0};var x,C=250,m=80,h={name:"test icon color1",height:58,logoSrc:"https://ifolio-cloud-s3.s3.amazonaws.com/img/navbar_logo250x80.png",structure:[{id:"52ff32c0-5a85-11ed-92af-95478d94f522",link:{name:"Ukhanov CVX",type:"ifolio",value:"http://localhost:3000/download-app"},type:"page",title:"with link",children:[]},{id:"55f7b240-5a85-11ed-92af-95478d94f522",link:null,type:"page",title:"without link",children:[]},{id:"abee9f70-5c1e-11ed-be7e-cb281a8f3f7b",type:"page",title:"inner link here",children:[{id:"cf809c40-5c1e-11ed-be7e-cb281a8f3f7b",type:"page",title:"here",children:[],link:{type:"link",value:"http://localhost:6006/?path=/story/navbar-desktop--primary"}}],link:{type:"link",value:"http://seasonvar.ru/"},expanded:!0},{id:"e1e6b180-5c1e-11ed-be7e-cb281a8f3f7b",type:"button",title:"button link",children:[],link:{type:"link",value:"https://aliexpress.ru/"}}],mobileHeight:65,logoAlignment:"left",mobileFontSize:14,navBarBehavior:"frozen",navBarTextBold:!0,navBarHoverColor:"#41c5c2",navBarTextItalic:!1,navBarTextSpacing:10,logoCropperOptions:{x:0,y:0,zoom:1.4,width:500,height:160,rotate:0,scaleX:1,scaleY:1,imageBox:{x:0,y:0,width:500,height:160},imgWidth:250,imgHeight:80,imagePosition:{x:0,y:0,width:100,height:100}},navBarClickedColor:"#41c5c2",navBarRegularColor:"#41c5c2",navBarTextFontSize:14,mobileLogoAlignment:"right",mobileTextAlignment:"left",navBarTextAlignment:"left",navBarTextUnderline:!1,navBarTextFontFamily:"Arial",navBarTextHoverColor:"#292e50",navBarTextClickedColor:"#292e50",navBarTextRegularColor:"#ffffff",dropdownSettingsTextBold:!1,buttonSettingsBorderWidth:2,buttonSettingsRegularFill:"transparent",buttonSettingsRoundCorners:20,dropdownSettingsTextItalic:!1,navBarRegularOnScrollColor:"#41c5c2",buttonSettingsRegularBorder:"#fff",buttonSettingsTextColorHover:"#fff",dropdownSettingsInactiveFill:"#2cbab7",dropdownSettingsTextFontSize:14,buttonSettingsVerticalPadding:8,dropdownSettingsTextUnderline:!1,buttonSettingsHoverClickedFill:"#292e50",buttonSettingsTextColorClicked:"#fff",buttonSettingsTextColorRegular:"#fff",dropdownSettingsInactiveBorder:"#2cbab7",dropdownSettingsTextColorHover:"#41c5c2",dropdownSettingsTextFontFamily:"Arial",buttonSettingsHorizontalPadding:20,dropdownSettingsVerticalPadding:8,buttonSettingsHoverClickedBorder:"#fff",dropdownSettingsHoverClickedFill:"#eeffff",dropdownSettingsTextColorClicked:"#41c5c2",dropdownSettingsTextColorRegular:"#fff",dropdownSettingsHorizontalPadding:10,dropdownSettingsHoverClickedBorder:"#eeffff"},w=function(t){return Math.floor(t)},T=function(t){if(!t||0===Object.keys(t).length)return"";var n=t.imageBox,e=t.rotate,o=n.x,r=n.y,i=n.height,l=n.width;return"?x=".concat(w(o),"&y=").concat(w(r),"&w=").concat(w(l),"&h=").concat(w(i),"&rotate=").concat(e)},B=function(n){var e=n.icon,o=n.opacity,r=void 0===o?1:o,i=n.hoverOpacity,l=void 0===i?1:i,a=n.color,d=void 0===a?"#000":a,c=n.hoverColor,u=void 0===c?d:c,s=n.size,g=void 0===s?20:s,v=n.rotate,p=n.noCursor,f=n.padding,b=void 0===f?0:f,S=n.width,x=n.height,C=n.tableIcon;return t.createElement(y,{color:d,hoverColor:u,size:g,width:S,height:x,opacity:r,hoverOpacity:l,rotate:v,noCursor:p,padding:b,tableIcon:C},k(e))},k=function(n){var e=n;return"function"==typeof n?t.createElement(e,null):"string"==typeof n?n:null},y=c.div(x||(x=f(["\n  cursor: ",";\n  display: ",";\n  flex: 0 0 auto;\n  align-items: center;\n  font-size: ",";\n  width: ","px;\n  height: ","px;\n  transform: rotate(","deg);\n  transform-origin: 50% 50%;\n  padding: ","px;\n\n  :hover {\n    svg {\n      fill: ",";\n      opacity: ",";\n    }\n  }\n\n  svg {\n    fill: ",";\n    opacity: ",";\n    width: 100%;\n    height: 100%;\n    transition: all ease-in-out 0.3s;\n    vertical-align: ",";\n  }\n"])),(function(t){return t.noCursor?"initial":"pointer"}),(function(t){return t.tableIcon?"table-cell":"flex"}),(function(t){return!t.tableIcon&&"0"}),(function(t){var n=t.size,e=t.width;return e||n}),(function(t){var n=t.size,e=t.height;return e||n}),(function(t){return t.rotate}),(function(t){return t.padding}),(function(t){return t.hoverColor}),(function(t){return t.hoverOpacity}),(function(t){return t.color}),(function(t){return t.opacity}),(function(t){return t.tableIcon&&"middle"}));B.propTypes={color:s.string,hoverColor:s.string,icon:s.oneOfType([s.string,s.func]),size:s.number,padding:s.number,opacity:s.number,hoverOpacity:s.number,rotate:s.number,noCursor:s.bool,width:s.number,height:s.number,tableIcon:s.bool},B.defaultProps={opacity:1,color:"#000",size:20,padding:0,rotate:0,noCursor:!1,tableIcon:!1};var H,R,F,E,z,P,I,A,O=function(){return t.createElement("svg",{height:"24",viewBox:"0 0 24 24",width:"24"},t.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),t.createElement("path",{d:"M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"}))},L=function(t,n){return window.open(t,n?"_blank":"_self","noreferrer noopener")},V=c.div(H||(H=f([""]))),j=c.div(R||(R=f(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  height: 100%;\n  transition: all 300ms ease-out;\n\n  &:hover {\n    color: ",";\n  }\n\n  &:active {\n    color: ",";\n  }\n"])),(function(t){return t.navBarTextHoverColor}),(function(t){return t.navBarTextClickedColor})),W=c(j)(F||(F=f(["\n    padding: 0 10px;\n"]))),U=c(j)(E||(E=f(["\n    word-break: break-word;\n"]))),M=o((function(n){var e=n.disabledRedirect,o=n.childs,r=n.dropdownSettingsInactiveFill,i=n.dropdownSettingsInactiveBorder,l=n.dropdownSettingsHoverClickedFill,a=n.dropdownSettingsHoverClickedBorder,d=n.dropdownSettingsTextColorRegular,c=n.dropdownSettingsTextColorHover,u=n.dropdownSettingsTextColorClicked,s=n.dropdownSettingsTextFontFamily,p=n.dropdownSettingsTextFontSize,f=n.dropdownSettingsTextBold,b=n.dropdownSettingsTextUnderline,S=n.dropdownSettingsTextItalic,x=n.dropdownSettingsHorizontalPadding,C=n.dropdownSettingsVerticalPadding,m=n.setOpen,h=n.rootId,w=n.parentRef,T=n.isPreview,B="object"===("undefined"==typeof window?"undefined":v(window)),k=0,y=0;if(B&&w){k=w.getBoundingClientRect().left;var H=w.closest("[data-navbarcontainer]"),R=w.closest(".navbar-desktop");if(H){var F=H.getBoundingClientRect().left;k<F&&(k=F)}if(R){var E=R.getBoundingClientRect();y=E.top+E.height+window.scrollY}}var z=t.createElement(D,{"data-list":!0,className:"navbar-list",left:k,top:y,dropdownSettingsInactiveBorder:i},o.map((function(n){var o;return t.createElement(Z,{key:n.id,dropdownSettingsInactiveFill:r,dropdownSettingsHoverClickedFill:l,dropdownSettingsHoverClickedBorder:a,dropdownSettingsTextColorRegular:d,dropdownSettingsTextColorHover:c,dropdownSettingsTextColorClicked:u,dropdownSettingsTextFontFamily:s,dropdownSettingsTextFontSize:p,dropdownSettingsTextBold:f,dropdownSettingsTextUnderline:b,dropdownSettingsTextItalic:S,dropdownSettingsHorizontalPadding:x,dropdownSettingsVerticalPadding:C,onClick:function(){var t;null!==(t=n.link)&&void 0!==t&&t.value&&!e?(L(n.link.value,T),m(!1)):m(!1)},"data-link":null===(o=n.link)||void 0===o?void 0:o.value},n.title)})));return B?g.createPortal(z,document.getElementById(h)):z})),Y=o((function(o){var l=o.disabledRedirect,a=o.disabledListClick,d=o.link,c=o.title,u=o.navBarTextHoverColor,s=o.navBarTextClickedColor,g=o.children,v=o.dropdownSettingsInactiveFill,p=o.dropdownSettingsInactiveBorder,f=o.dropdownSettingsHoverClickedFill,S=o.dropdownSettingsHoverClickedBorder,x=o.dropdownSettingsTextColorRegular,C=o.dropdownSettingsTextColorHover,m=o.dropdownSettingsTextColorClicked,h=o.dropdownSettingsTextFontFamily,w=o.dropdownSettingsTextFontSize,T=o.dropdownSettingsTextBold,k=o.dropdownSettingsTextUnderline,y=o.dropdownSettingsTextItalic,H=o.dropdownSettingsHorizontalPadding,R=o.dropdownSettingsVerticalPadding,F=o.isStatic,E=o.navBarHoverColor,z=o.navBarClickedColor,P=o.rootId,I=o.isPreview,A=b(r(F),2),j=A[0],U=A[1],Y=null==d?void 0:d.value,D=function(t){var o=e(),r=function(n){!o.current||null!=o&&o.current.contains(n.target)||t(n,o.current)};return n((function(){return document.addEventListener("mousedown",r),document.addEventListener("touchstart",r),function(){document.removeEventListener("mousedown",r),document.removeEventListener("touchstart",r)}})),o}((function(){U(!1)})),Z=b(r(null),2),_=Z[0],X=Z[1];n((function(){X(D.current)}),[]);var q=g.length>0,$=i((function(){q&&!a?U((function(t){return!t})):q||l||!Y||L(Y,I)}),[a,l,q,Y,I]);return n((function(){var t=function(){U(!1)};return document.body.addEventListener("scroll",t),function(){document.body.removeEventListener("scroll",t)}}),[]),t.createElement(N,{ref:D,navBarHoverColor:E,navBarClickedColor:z},t.createElement(W,{navBarTextHoverColor:u,navBarTextClickedColor:s,onClick:$,"data-link":q?void 0:Y,"data-isdropdown":q},c," ",q&&t.createElement(V,{"data-arrow":!0},j?t.createElement(B,{icon:O,rotate:F?-90:90,color:"#ffffff"}):t.createElement(B,{icon:O,rotate:-90,color:"#ffffff"}))),j&&q&&t.createElement(M,{dropdownSettingsInactiveFill:v,dropdownSettingsInactiveBorder:p,dropdownSettingsHoverClickedFill:f,dropdownSettingsHoverClickedBorder:S,dropdownSettingsTextColorRegular:x,dropdownSettingsTextColorHover:C,dropdownSettingsTextColorClicked:m,dropdownSettingsTextFontFamily:h,dropdownSettingsTextFontSize:w,dropdownSettingsTextBold:T,dropdownSettingsTextUnderline:k,dropdownSettingsTextItalic:y,dropdownSettingsHorizontalPadding:H,dropdownSettingsVerticalPadding:R,childs:g,setOpen:U,disabledRedirect:l,rootId:P,parentRef:_,isPreview:I}))})),N=c.div(z||(z=f(["\n  position: relative;\n  height: 100%;\n\n  &:hover {\n    background: ",";\n  }\n\n  &:active {\n    background: ",";\n  }\n"])),(function(t){return t.navBarHoverColor}),(function(t){return t.navBarClickedColor})),D=c.div(P||(P=f(["\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  left: ","px;\n  top: ","px;\n  z-index: 2;\n  \n  > div {\n    border-right: 2px solid ",";\n    border-left: 2px solid ",";\n    border-bottom: 2px solid ",";\n  }\n  > div:first-child {\n    border-top: 2px solid ",";\n  }\n"])),(function(t){return t.left}),(function(t){return t.top}),(function(t){return t.dropdownSettingsInactiveBorder}),(function(t){return t.dropdownSettingsInactiveBorder}),(function(t){return t.dropdownSettingsInactiveBorder}),(function(t){return t.dropdownSettingsInactiveBorder})),Z=c.div(I||(I=f(["\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n  cursor: pointer;\n  background: ",";\n  color: ",";\n  font-size: ","px;\n  font-family: ",";\n  font-weight: ",";\n  font-style: ",";\n  text-decoration: ",";\n  padding: ",";\n\n  &:hover {\n    background: ",";\n    border: 2px solid ",";\n    color: ",";\n  }\n\n  &:active {\n    background: ",";\n    border: 2px solid ",";\n    color: ",";\n  }\n"])),(function(t){return t.dropdownSettingsInactiveFill}),(function(t){return t.dropdownSettingsTextColorRegular}),(function(t){return t.dropdownSettingsTextFontSize}),(function(t){return t.dropdownSettingsTextFontFamily}),(function(t){return t.dropdownSettingsTextBold?"bold":"normal"}),(function(t){return t.dropdownSettingsTextItalic?"italic":"normal"}),(function(t){return t.dropdownSettingsTextUnderline?"underline":"none"}),(function(t){var n=t.dropdownSettingsVerticalPadding,e=t.dropdownSettingsHorizontalPadding;return"".concat(n,"px ").concat(e,"px")}),(function(t){return t.dropdownSettingsHoverClickedFill}),(function(t){return t.dropdownSettingsHoverClickedBorder}),(function(t){return t.dropdownSettingsTextColorHover}),(function(t){return t.dropdownSettingsHoverClickedFill}),(function(t){return t.dropdownSettingsHoverClickedBorder}),(function(t){return t.dropdownSettingsTextColorClicked}));Y.propTypes={link:s.string,disabledRedirect:s.bool,disabledListClick:s.bool,title:s.string,navBarTextHoverColor:s.string,navBarTextClickedColor:s.string,children:s.array,dropdownSettingsInactiveFill:s.string,dropdownSettingsInactiveBorder:s.string,dropdownSettingsHoverClickedFill:s.string,dropdownSettingsHoverClickedBorder:s.string,dropdownSettingsTextColorRegular:s.string,dropdownSettingsTextColorHover:s.string,dropdownSettingsTextColorClicked:s.string,dropdownSettingsTextFontFamily:s.string,dropdownSettingsTextFontSize:s.number,dropdownSettingsTextBold:s.bool,dropdownSettingsTextUnderline:s.bool,dropdownSettingsTextItalic:s.bool,dropdownSettingsHorizontalPadding:s.number,dropdownSettingsVerticalPadding:s.number,navBarHoverColor:s.string,navBarClickedColor:s.string,rootId:s.string};var _,X,q=o((function(n){var e=n.link,o=n.disabledRedirect,r=n.title,l=n.buttonSettingsRoundCorners,a=n.buttonSettingsBorderWidth,d=n.buttonSettingsRegularBorder,c=n.buttonSettingsRegularFill,u=n.buttonSettingsHorizontalPadding,s=n.buttonSettingsVerticalPadding,g=n.buttonSettingsHoverClickedBorder,v=n.buttonSettingsHoverClickedFill,p=n.buttonSettingsTextColorRegular,f=n.buttonSettingsTextColorHover,b=n.buttonSettingsTextColorClicked,S=n.navBarTextFontSize,x=n.isPreview,C=null==e?void 0:e.value,m=i((function(){C&&!o&&L(C,x)}),[C,o,x]);return t.createElement($,{buttonSettingsRoundCorners:l,buttonSettingsBorderWidth:a,buttonSettingsRegularBorder:d,buttonSettingsRegularFill:c,buttonSettingsHorizontalPadding:u,buttonSettingsVerticalPadding:s,buttonSettingsHoverClickedBorder:g,buttonSettingsHoverClickedFill:v,buttonSettingsTextColorRegular:p,buttonSettingsTextColorHover:f,buttonSettingsTextColorClicked:b,onClick:m,"data-link":C,navBarTextFontSize:S},r)})),$=c.div(A||(A=f(["\n  line-height: normal;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  transition: all 300ms ease-out;\n  border-radius: ","px;\n  border: ","px solid ",";\n  background: ",";\n  padding: ",";\n  color: ",";\n  height: ","px;\n\n  &:hover {\n    border: ","px solid ",";\n    background: ",";\n    color: ",";\n  }\n\n  &:active {\n    border: ","px solid ",";\n    background: ",";\n    color: ",";\n  }\n"])),(function(t){return t.buttonSettingsRoundCorners}),(function(t){return t.buttonSettingsBorderWidth}),(function(t){return t.buttonSettingsRegularBorder}),(function(t){return t.buttonSettingsRegularFill}),(function(t){var n=t.buttonSettingsHorizontalPadding;return"0 ".concat(n,"px")}),(function(t){return t.buttonSettingsTextColorRegular}),(function(t){var n=t.buttonSettingsVerticalPadding;return t.navBarTextFontSize+2*(n||0)+2*(t.buttonSettingsBorderWidth||0)}),(function(t){return t.buttonSettingsBorderWidth}),(function(t){return t.buttonSettingsHoverClickedBorder}),(function(t){return t.buttonSettingsHoverClickedFill}),(function(t){return t.buttonSettingsTextColorHover}),(function(t){return t.buttonSettingsBorderWidth}),(function(t){return t.buttonSettingsHoverClickedBorder}),(function(t){return t.buttonSettingsHoverClickedFill}),(function(t){return t.buttonSettingsTextColorClicked}));q.propTypes={disabledRedirect:s.bool,title:s.string,link:s.string,buttonSettingsRoundCorners:s.number,buttonSettingsBorderWidth:s.number,buttonSettingsRegularBorder:s.string,buttonSettingsRegularFill:s.string,buttonSettingsVerticalPadding:s.number,buttonSettingsHorizontalPadding:s.number,buttonSettingsHoverClickedBorder:s.string,buttonSettingsHoverClickedFill:s.string,buttonSettingsTextColorRegular:s.string,buttonSettingsTextColorHover:s.string,buttonSettingsTextColorClicked:s.string,navBarTextFontSize:s.number};var G,J,K,Q,tt,nt,et,ot,rt,it,lt=l((function(n,e){var o=n.height,r=n.id,i=n.crop,l=n.source,a=n.alt,d={width:"100%",height:"100%",objectFit:"contain"};return n.ignoreMaxHeight||(d.maxHeight="600px"),t.createElement(dt,{ref:e,height:o,id:r},t.createElement(at,i.imagePosition,t.createElement("img",{src:l,alt:a,style:d})))})),at=c.div(_||(_=f(["\n  position: relative;\n  left: ","%;\n  top: ","%;\n  width: ","%;\n  height: ","%;\n"])),(function(t){return t.x||0}),(function(t){return t.y||0}),(function(t){return t.width||100}),(function(t){return t.height||100})),dt=c.div(X||(X=f(["\n  width: 100%;\n  height: ",";\n  position: relative;\n  background-color: transparent;\n  overflow: hidden;\n"])),(function(t){var n=t.height;return n?n+"px":"100%"}));lt.propTypes={height:s.number,id:s.string,crop:s.object,source:s.string.isRequired,alt:s.string,ignoreMaxHeight:s.bool},lt.defaultProps={id:"",alt:"",ignoreMaxHeight:!1,crop:{}};var ct=function(n){var e=n.logoSrc,o=n.logoCropperOptions,r=n.hideElement,i=n.height;return r?null:t.createElement(ft,{hideElement:r,height:i},t.createElement(lt,{source:e+T(o),crop:o}))},ut=function(e){var o=e.config,r=e.disabledRedirect,i=void 0!==r&&r,l=e.disabledListClick,c=void 0!==l&&l,u=e.stickyOffset,s=void 0===u?0:u,g=e.isStatic,v=void 0!==g&&g,f=e.hideLogo,b=void 0!==f&&f,S=e.isPreview,x=void 0!==S&&S,C=e.isListView,m=void 0!==C&&C,h=e.rootId,w=void 0===h?"root":h,T=a(),B=o.height,k=o.navBarRegularColor,y=o.navBarHoverColor,H=o.navBarClickedColor,R=o.navBarRegularOnScrollColor,F=o.logoAlignment,E=o.logoCropperOptions,z=o.logoSrc,P=o.navBarTextAlignment,I=o.navBarTextFontSize,A=o.navBarTextFontFamily,O=o.navBarTextBold,L=o.navBarTextItalic,V=o.navBarTextUnderline,j=o.navBarTextRegularColor,W=o.structure,U=o.navBarTextHoverColor,M=o.navBarTextClickedColor,N=o.navBarTextSpacing,D=o.buttonSettingsRoundCorners,Z=o.buttonSettingsBorderWidth,_=o.buttonSettingsRegularBorder,X=o.buttonSettingsRegularFill,$=o.buttonSettingsHorizontalPadding,G=o.buttonSettingsVerticalPadding,J=o.buttonSettingsHoverClickedFill,K=o.buttonSettingsHoverClickedBorder,Q=o.buttonSettingsTextColorRegular,tt=o.buttonSettingsTextColorHover,nt=o.buttonSettingsTextColorClicked,et=o.navBarBehavior,ot=o.dropdownSettingsInactiveFill,rt=o.dropdownSettingsInactiveBorder,it=o.dropdownSettingsHoverClickedFill,lt=o.dropdownSettingsHoverClickedBorder,at=o.dropdownSettingsTextColorRegular,dt=o.dropdownSettingsTextColorHover,ut=o.dropdownSettingsTextColorClicked,st=o.dropdownSettingsTextFontFamily,gt=o.dropdownSettingsTextFontSize,ft=o.dropdownSettingsTextBold,Ct=o.dropdownSettingsTextUnderline,mt=o.dropdownSettingsTextItalic,ht=o.dropdownSettingsHorizontalPadding,wt=o.dropdownSettingsVerticalPadding;return n((function(){var t=function(){if("transparent"===k){var t=R;0===window.scrollY&&(t=x?"#000":k),T.current.style.backgroundColor=t}};return window.addEventListener("scroll",t),function(){window.removeEventListener("scroll",t)}}),[k,R,x]),t.createElement(pt,{ref:T,height:B,navBarRegularColor:k,isPreview:x,navBarBehavior:et,stickyOffset:s,className:"navbar-desktop","data-color":k,"data-coloronscroll":R,isListView:m},t.createElement(bt,{height:B},t.createElement(ct,{logoSrc:z,logoCropperOptions:E,hideElement:b||"left"!==F,height:B}),t.createElement(St,{"data-navbarcontainer":!0,navBarTextAlignment:P,navBarTextFontSize:I,navBarTextFontFamily:A,navBarTextBold:O,navBarTextItalic:L,navBarTextUnderline:V,navBarTextRegularColor:j,navBarTextSpacing:N},0===(null==W?void 0:W.length)&&x?t.createElement(vt,{navBarTextAlignment:P},"Navigation will preview here once created"):t.createElement(t.Fragment,null,null==W?void 0:W.map((function(n){var e=null;return"button"===n.type?e=t.createElement(xt,null,t.createElement(q,p({},n,{disabledRedirect:i,buttonSettingsRoundCorners:D,buttonSettingsBorderWidth:Z,buttonSettingsRegularBorder:_,buttonSettingsRegularFill:X,buttonSettingsVerticalPadding:G,buttonSettingsHorizontalPadding:$,buttonSettingsHoverClickedBorder:K,buttonSettingsHoverClickedFill:J,buttonSettingsTextColorRegular:Q,buttonSettingsTextColorHover:tt,buttonSettingsTextColorClicked:nt,navBarTextFontSize:I,isPreview:x}))):"page"===n.type&&(e=t.createElement(Y,p({},n,{disabledRedirect:i,disabledListClick:c,navBarTextHoverColor:U,navBarTextClickedColor:M,dropdownSettingsInactiveFill:ot,dropdownSettingsInactiveBorder:rt,dropdownSettingsHoverClickedFill:it,dropdownSettingsHoverClickedBorder:lt,dropdownSettingsTextColorRegular:at,dropdownSettingsTextColorHover:dt,dropdownSettingsTextColorClicked:ut,dropdownSettingsTextFontFamily:st,dropdownSettingsTextFontSize:gt,dropdownSettingsTextBold:ft,dropdownSettingsTextUnderline:Ct,dropdownSettingsTextItalic:mt,dropdownSettingsHorizontalPadding:ht,dropdownSettingsVerticalPadding:wt,isStatic:v,navBarHoverColor:y,navBarClickedColor:H,rootId:w,isPreview:x}))),t.createElement(d,{key:n.id},e)})))),t.createElement(ct,{logoSrc:z,logoCropperOptions:E,hideElement:b||"right"!==F,height:B})))};ut.propTypes={config:s.object,disabledRedirect:s.bool,disabledListClick:s.bool,stickyOffset:s.number,isStatic:s.bool,hideLogo:s.bool,isPreview:s.bool};var st,gt,vt=c.div(G||(G=f(["\n  font-family: Montserrat-bold, sans-serif;\n  display: flex !important;\n  align-items: center;\n  justify-content: ",";\n  width: auto;\n  font-size: 15px;\n  letter-spacing: 1.5px;\n  text-transform: uppercase;\n  height: 100%;\n"])),(function(t){var n=t.navBarTextAlignment;return"right"===n?"flex-end":"left"===n?"flex-start":"center"})),pt=c.div(J||(J=f(["\n  display: flex;\n  height: ","px;\n  background-color: ",";\n  padding: 0 24px;\n  width: 100%;\n  margin: auto;\n  align-items: center;\n  flex-shrink: 0;\n  z-index: 1002;\n  transition: background-color .2s ease-in-out;\n\n  ","\n"])),(function(t){return t.height}),(function(t){var n=t.navBarRegularColor,e=t.isPreview,o=t.isListView;return(e||o)&&"transparent"===n?"black":n}),(function(t){var n=t.navBarBehavior,e=t.stickyOffset,o=t.navBarRegularColor,r=t.isPreview;if(!t.isListView){if("transparent"===o)return u("frozen"===n?r?K||(K=f(["\n              position: sticky;\n              top: ","px;\n            "])):Q||(Q=f(["\n            position: fixed;\n            top: ","px;\n          "])):tt||(tt=f(["\n          position: absolute;\n          top: ","px;\n        "])),e);if("frozen"===n)return u(nt||(nt=f(["\n          position: sticky;\n          top: ","px;\n        "])),e)}return""})),ft=c.div(et||(et=f(["\n  width: ","px;\n  height: ","px;\n  opacity: ",";\n"])),250,(function(t){return t.height}),(function(t){return t.hideElement?0:1})),bt=c.div(ot||(ot=f(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  max-width: 1367px;\n  margin: auto;\n  height: ","px;\n"])),(function(t){return t.height})),St=c.div(rt||(rt=f(["\n  display: inline;\n  white-space: nowrap;\n  margin: 0 24px;\n  text-align: ",";\n  font-size: ","px;\n  font-family: ",";\n  font-weight: ",";\n  font-style: ",";\n  text-decoration: ",";\n  color: ",";\n  height: 100%;\n  width: calc(100% - ","px);\n  overflow-x: auto;\n  overflow-y: hidden;\n\n  > div {\n    margin-right: ","px;\n    display: inline-block;\n    vertical-align: middle;\n    transition: all 300ms ease-out;\n\n    &:last-child {\n      margin-right: 0;\n    }\n  }\n"])),(function(t){return t.navBarTextAlignment}),(function(t){return t.navBarTextFontSize}),(function(t){return t.navBarTextFontFamily}),(function(t){return t.navBarTextBold?"bold":"normal"}),(function(t){return t.navBarTextItalic?"italic":"normal"}),(function(t){return t.navBarTextUnderline?"underline":"none"}),(function(t){return t.navBarTextRegularColor}),300,(function(t){return t.navBarTextSpacing})),xt=c.div(it||(it=f(["\n"]))),Ct=function(){return t.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"19.94",height:"16.44",viewBox:"0 0 19.94 16.44"},t.createElement("path",{d:"M20.41,6.91H3.47a1.5,1.5,0,0,1,0-3H20.41A1.5,1.5,0,0,1,20.41,6.91Z",transform:"translate(-1.97 -3.91)"}),t.createElement("path",{d:"M20.41,13.91H3.47a1.5,1.5,0,0,1,0-3H20.41A1.5,1.5,0,0,1,20.41,13.91Z",transform:"translate(-1.97 -3.91)"}),t.createElement("path",{d:"M20.41,20.34H3.47a1.5,1.5,0,0,1,0-3H20.41A1.5,1.5,0,0,1,20.41,20.34Z",transform:"translate(-1.97 -3.91)"}))},mt=function(n){var e=n.children,o=n.onClick,r=n.mobileTextAlignment,i=n.link,l=n.isDropdown;return t.createElement(ht,{onClick:o,mobileTextAlignment:r,"data-link":i,"data-isdropdown":l},e)},ht=c.div(st||(st=f(["\n    padding: 15px;\n    display: flex;\n    justify-content: ",";\n"])),(function(t){return"center"===t.mobileTextAlignment?"center":"flex-start"}));mt.propTypes={children:s.any,onClick:s.func,link:s.string,isDropdown:s.bool};var wt,Tt,Bt=o((function(n){var e=n.link,o=n.disabledRedirect,r=n.title,l=n.buttonSettingsRoundCorners,a=n.buttonSettingsBorderWidth,d=n.buttonSettingsRegularBorder,c=n.buttonSettingsRegularFill,u=n.buttonSettingsHorizontalPadding,s=n.buttonSettingsVerticalPadding,g=n.buttonSettingsHoverClickedBorder,v=n.buttonSettingsHoverClickedFill,p=n.buttonSettingsTextColorRegular,f=n.buttonSettingsTextColorHover,b=n.buttonSettingsTextColorClicked,S=n.mobileTextAlignment,x=n.isConstructor,C=null==e?void 0:e.value,m=i((function(){C&&!o&&L(C,x)}),[C,o,x]);return t.createElement(mt,{onClick:m,link:C,mobileTextAlignment:S},t.createElement(kt,{buttonSettingsRoundCorners:l,buttonSettingsBorderWidth:a,buttonSettingsRegularBorder:d,buttonSettingsRegularFill:c,buttonSettingsHorizontalPadding:u,buttonSettingsVerticalPadding:s,buttonSettingsHoverClickedBorder:g,buttonSettingsHoverClickedFill:v,buttonSettingsTextColorRegular:p,buttonSettingsTextColorHover:f,buttonSettingsTextColorClicked:b},r))})),kt=c.div(gt||(gt=f(["\n  word-break: break-word;\n  line-height: normal;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  border-radius: ","px;\n  border: ","px solid\n    ",";\n  background: ",";\n  padding: ",";\n  color: ",";\n\n  &:hover {\n    border: ","px solid\n      ",";\n    background: ",";\n    color: ",";\n  }\n\n  &:active {\n    border: ","px solid\n      ",";\n    background: ",";\n    color: ",";\n  }\n"])),(function(t){return t.buttonSettingsRoundCorners}),(function(t){return t.buttonSettingsBorderWidth}),(function(t){return t.buttonSettingsRegularBorder}),(function(t){return t.buttonSettingsRegularFill}),(function(t){var n=t.buttonSettingsVerticalPadding,e=t.buttonSettingsHorizontalPadding;return"".concat(n,"px ").concat(e,"px")}),(function(t){return t.buttonSettingsTextColorRegular}),(function(t){return t.buttonSettingsBorderWidth}),(function(t){return t.buttonSettingsHoverClickedBorder}),(function(t){return t.buttonSettingsHoverClickedFill}),(function(t){return t.buttonSettingsTextColorHover}),(function(t){return t.buttonSettingsBorderWidth}),(function(t){return t.buttonSettingsHoverClickedBorder}),(function(t){return t.buttonSettingsHoverClickedFill}),(function(t){return t.buttonSettingsTextColorClicked}));Bt.propTypes={disabledRedirect:s.bool,title:s.string,link:s.string,buttonSettingsRoundCorners:s.number,buttonSettingsBorderWidth:s.number,buttonSettingsRegularBorder:s.string,buttonSettingsRegularFill:s.string,buttonSettingsVerticalPadding:s.number,buttonSettingsHorizontalPadding:s.number,buttonSettingsHoverClickedBorder:s.string,buttonSettingsHoverClickedFill:s.string,buttonSettingsTextColorRegular:s.string,buttonSettingsTextColorHover:s.string,buttonSettingsTextColorClicked:s.string};var yt,Ht,Rt,Ft,Et,zt,Pt,It,At,Ot,Lt,Vt,jt=o((function(n){var e=n.disabledRedirect,o=n.disabledListClick,l=n.link,a=n.title,d=n.navBarTextHoverColor,c=n.navBarTextClickedColor,u=n.children,s=n.mobileTextAlignment,g=n.isStatic,v=n.isConstructor,p=null==l?void 0:l.value,f=b(r(g),2),S=f[0],x=f[1],C=u.length>0,m=i((function(){C&&!o?x((function(t){return!t})):C||e||!p||L(p,v)}),[o,e,C,p,v]);return t.createElement(Wt,null,t.createElement(mt,{isDropdown:C,link:C?void 0:p,onClick:m,mobileTextAlignment:s},t.createElement(U,{navBarTextHoverColor:d,navBarTextClickedColor:c},a," ",C&&t.createElement(V,{"data-arrow":!0},S?t.createElement(B,{icon:O,rotate:g?-90:90,color:"#ffffff"}):t.createElement(B,{icon:O,rotate:-90,color:"#ffffff"})))),S&&C&&t.createElement(Ut,{"data-mobile-dropdown-list":!0},u.map((function(n){var o;return t.createElement(mt,{key:n.id,onClick:function(){var t;null!==(t=n.link)&&void 0!==t&&t.value&&!e&&L(n.link.value,v)},link:null===(o=n.link)||void 0===o?void 0:o.value,mobileTextAlignment:s},t.createElement(U,{navBarTextHoverColor:d,navBarTextClickedColor:c},n.title))}))))})),Wt=c.div(wt||(wt=f(["\n  display: flex;\n  flex-direction: column;\n"]))),Ut=c.div(Tt||(Tt=f(["\n  display: flex;\n  flex-direction: column;\n"])));jt.propTypes={link:s.string,disabledRedirect:s.bool,disabledListClick:s.bool,title:s.string,navBarTextHoverColor:s.string,navBarTextClickedColor:s.string,children:s.array,mobileTextAlignment:s.string};var Mt=function(e){var o=e.config,l=e.stickyOffset,c=void 0===l?0:l,u=e.isConstructor,s=void 0!==u&&u,g=e.isStatic,v=void 0!==g&&g,f=e.disabledRedirect,S=void 0!==f&&f,x=e.disabledListClick,C=void 0!==x&&x,m=b(r(s),2),h=m[0],w=m[1],k=a();n((function(){s||(document.body.style.overflowY=h?"hidden":"auto")}),[s,h]);var y=o.mobileHeight,H=o.navBarRegularColor,R=o.navBarRegularOnScrollColor,F=o.mobileLogoAlignment,E=o.logoSrc,z=o.logoCropperOptions,P=o.navBarBehavior,I=o.mobileFontSize,A=o.navBarTextFontFamily,O=o.navBarTextBold,L=o.navBarTextItalic,V=o.navBarTextUnderline,j=o.navBarTextRegularColor,W=o.navBarTextSpacing,U=o.buttonSettingsRoundCorners,M=o.buttonSettingsBorderWidth,Y=o.buttonSettingsRegularBorder,N=o.buttonSettingsRegularFill,D=o.buttonSettingsHorizontalPadding,Z=o.buttonSettingsVerticalPadding,_=o.buttonSettingsHoverClickedFill,X=o.buttonSettingsHoverClickedBorder,q=o.buttonSettingsTextColorRegular,$=o.buttonSettingsTextColorHover,G=o.buttonSettingsTextColorClicked,J=o.mobileTextAlignment,K=o.navBarTextHoverColor,Q=o.navBarTextClickedColor,tt=o.structure,nt=i((function(){s||C||w((function(t){return!t}))}),[s,C]);n((function(){var t=function(){"transparent"===H&&(k.current.style.backgroundColor=0!==window.scrollY||h?R:H)};return"transparent"===H&&(k.current.style.backgroundColor=h?R:H),window.addEventListener("scroll",t),function(){window.removeEventListener("scroll",t)}}),[h]);var et=H;return s&&"transparent"===H?et="#000":h&&(et="transparent"===H?R:H),t.createElement(Yt,{className:"navbar-mobile",navBarBehavior:P,stickyOffset:c,isConstructor:s,navBarRegularColor:H},t.createElement(Dt,{height:y,ref:k,navBarRegularColor:et,"data-mobile-header":!0},t.createElement(qt,{onClick:nt,"data-mobile-menu-button":!0},t.createElement(B,{icon:Ct,color:"#ffffff"})),t.createElement(Zt,{mobileLogoAlignment:F},t.createElement(_t,null,t.createElement(Xt,{height:y},t.createElement(lt,{source:E+T(z),crop:z}))))),t.createElement(Nt,{"data-mobile-menu":!0,mobileHeight:y,offsetTop:c+y,isConstructor:s,open:h,navBarRegularColor:"transparent"===H?s?"#000":R:H,mobileFontSize:I,navBarTextFontFamily:A,navBarTextBold:O,navBarTextItalic:L,navBarTextUnderline:V,navBarTextRegularColor:j,navBarTextSpacing:W},null==tt?void 0:tt.map((function(n){var e="any";return"button"===n.type?e=t.createElement(Bt,p({},n,{mobileTextAlignment:J,disabledRedirect:s,buttonSettingsRoundCorners:U,buttonSettingsBorderWidth:M,buttonSettingsRegularBorder:Y,buttonSettingsRegularFill:N,buttonSettingsVerticalPadding:Z,buttonSettingsHorizontalPadding:D,buttonSettingsHoverClickedBorder:X,buttonSettingsHoverClickedFill:_,buttonSettingsTextColorRegular:q,buttonSettingsTextColorHover:$,buttonSettingsTextColorClicked:G,isConstructor:s})):"page"===n.type&&(e=t.createElement(jt,p({},n,{disabledRedirect:S,disabledListClick:C,navBarTextHoverColor:K,navBarTextClickedColor:Q,mobileTextAlignment:J,isStatic:v,isConstructor:s}))),t.createElement(d,{key:n.id},e)}))))},Yt=c.div(yt||(yt=f(["\n  z-index: 1001;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  width: 100%;\n\n  ",""])),(function(t){var n=t.navBarBehavior,e=t.stickyOffset,o=t.isConstructor;return"transparent"!==t.navBarRegularColor||o?"frozen"!==n||o?"":u(Ft||(Ft=f(["\n        position: sticky;\n        top: ","px;\n      "])),e):u("frozen"===n?Ht||(Ht=f(["\n          position: fixed;\n          top: ","px;\n        "])):Rt||(Rt=f(["\n        position: absolute;\n        top: ","px;\n      "])),e)})),Nt=c.div(Et||(Et=f(["\n      display: flex;\n      flex-direction: column;\n      position: absolute;\n      top: ","px;\n      width: 100%;\n      height: ",";\n      ",";\n      transition: height 0.5s ease;\n      background-color: ",";\n      overflow-x: hidden;\n      overflow-y: auto;\n      font-size: ","px;\n      font-family: ",";\n      font-weight: ",";\n      font-style: ",";\n      text-decoration: ",";\n      color: ",";\n      ",";\n    "])),(function(t){return t.mobileHeight}),(function(t){return t.isConstructor?"auto":0}),(function(t){return t.isConstructor&&u(zt||(zt=f(["\n                max-height: 350px;\n              "])))}),(function(t){return t.navBarRegularColor}),(function(t){return t.mobileFontSize}),(function(t){return t.navBarTextFontFamily}),(function(t){return t.navBarTextBold?"bold":"normal"}),(function(t){return t.navBarTextItalic?"italic":"normal"}),(function(t){return t.navBarTextUnderline?"underline":"none"}),(function(t){return t.navBarTextRegularColor}),(function(t){var n=t.offsetTop,e=t.open;return!t.isConstructor&&e&&u(Pt||(Pt=f(["\n                height: calc(100vh - ","px);\n              "])),n)})),Dt=c.div(It||(It=f(["\n  display: flex;\n  width: 100%;\n  padding: 15px 13px 16px 5px;\n  //border: solid 1px rgba(164, 198, 225, 0.39);\n  height: ","px;\n  background-color: ",";\n  align-items: center;\n  overflow: hidden;\n  justify-content: space-between;\n  transition: background-color .2s ease-in-out;\n"])),(function(t){return t.height}),(function(t){return t.navBarRegularColor})),Zt=c.div(At||(At=f(["\n  display: flex;\n  width: calc(100% - 57px);\n  justify-content: ",";\n"])),(function(t){var n=t.mobileLogoAlignment;return"center"===n?"center":"right"===n?"flex-end":""})),_t=c.div(Ot||(Ot=f(["\n  display: flex;\n  width: 250px;\n"]))),Xt=c.div(Lt||(Lt=f(["\n  width: 100%;\n  height: ","px;\n"])),(function(t){return t.height})),qt=c.div(Vt||(Vt=f(["\n  display: flex;\n  width: 44px;\n  height: 44px;\n  cursor: pointer;\n  > div {\n    margin: auto;\n  }\n"])));Mt.propTypes={config:s.object,stickyOffset:s.number};export{ut as NavBar,Mt as NavBarMobile,m as logoImageHeight,C as logoImageWidth};
//# sourceMappingURL=index.esm.js.map

"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[804],{2244:(e,t,r)=>{r.d(t,{aH:()=>i,Yq:()=>n,x4:()=>o,st:()=>s,ND:()=>a,jL:()=>c,GV:()=>g,Ls:()=>h,d7:()=>b,D8:()=>x,hS:()=>u,Oj:()=>l});const i={LIMITS:{TITLE_CHAR_LIMIT:40,AUTHOR_CHAR_LIMIT:20,SCROLL_DISTANCE:150,SEARCH_LIMIT:5,SHELF_LIMIT:15,CATEGORIES_LIMIT:3},URLS:{BASE_URL:"https://openlibrary.org",SEARCH_BOOKS:"https://openlibrary.org/search.json",SEARCH_AUTHORS:"https://openlibrary.org/search/authors.json",BOOK:"https://openlibrary.org/books",AUTHOR:"https://openlibrary.org/authors",COVER:"http://covers.openlibrary.org/b/id/",AUTHOR_IMAGE:"https://covers.openlibrary.org/a/olid/",SUBJECTS:"https://openlibrary.org/subjects.json?limit=1000&offset=0"}},a=(0,r(4367).UU)("https://atzvuinguvekmtouviiu.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF0enZ1aW5ndXZla210b3V2aWl1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEzMDUwMzcsImV4cCI6MjA2Njg4MTAzN30.xNZyvIOUL36fArlqUWK-DVliYe8H4YRqQfwv3DkcZqk"),n=e=>new Date(e).toLocaleDateString("ru-RU",{year:"numeric",month:"long",day:"numeric"}),o=(e,t)=>t?`${i.URLS.SEARCH_BOOKS}?q=subject:${e}&first_publish_year:${t}`:`${i.URLS.SEARCH_BOOKS}?q=subject:${e}`;function s(e,t){return r=>r.theme[e][t]}const l=e=>{const t=[];return e.length<8&&t.push("Пароль должен быть не менее 8 символов"),e.includes(" ")&&t.push("Пароль не должен содержать пробелы"),/[а-яё]/i.test(e)&&t.push("Пароль не должен содержать русские символы"),/[<>{}[\]\\|`~]/.test(e)&&t.push("Пароль не должен содержать < > { } [ ] \\ | ` ~"),t};var d=r(1468);const c=()=>(0,d.wA)(),g=d.d4.withTypes();var p=r(6540);const h=(e,t)=>{(0,p.useEffect)(()=>{const r=r=>{let i=!1;e.forEach(e=>{e.current&&e.current.contains(r.target)&&(i=!0)}),i||t()};return document.addEventListener("mousedown",r),()=>document.removeEventListener("mousedown",r)},[e,t])},b=(e,t)=>{const[r,i]=(0,p.useState)(e);return(0,p.useEffect)(()=>{const r=setTimeout(()=>{i(e)},t);return()=>clearTimeout(r)},[e,t]),r},x=()=>{const[e,t]=(0,p.useState)(i.LIMITS.CATEGORIES_LIMIT);return(0,p.useEffect)(()=>{const e=()=>{const e=document.body.scrollHeight;window.scrollY+window.innerHeight>=e&&t(e=>e+i.LIMITS.CATEGORIES_LIMIT)};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}},[]),{categoriesLimit:e}},u=()=>{const[e,t]=(0,p.useState)(!1);return{isModalOpen:e,openModal:()=>t(!0),closeModal:()=>t(!1),toggleModal:()=>t(!e)}}},3882:(e,t,r)=>{r.d(t,{i3:()=>n,uP:()=>s,p8:()=>c,FE:()=>h});var i=r(6540);function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)({}).hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},a.apply(null,arguments)}const n=function(e){return i.createElement("svg",a({xmlns:"http://www.w3.org/2000/svg",xmlSpace:"preserve",width:800,height:800,viewBox:"0 0 512 512"},e),i.createElement("path",{d:"M256 0C114.608 0 0 114.608 0 256c0 141.376 114.608 256 256 256s256-114.624 256-256C512 114.608 397.392 0 256 0",style:{fill:"#2d2d2d"}}),i.createElement("path",{d:"M230.656 111.936 394.016 272l-163.36 160.064-48.8-49.968L294.208 272 181.856 161.904z",style:{opacity:.2}}),i.createElement("path",{d:"M214.656 95.936 378.016 256l-163.36 160.064-48.8-49.968L278.208 256 165.856 145.904z",style:{fill:"#fff"}}))};function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)({}).hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},o.apply(null,arguments)}const s=function(e){return i.createElement("svg",o({xmlns:"http://www.w3.org/2000/svg",xmlSpace:"preserve",width:800,height:800,viewBox:"0 0 55.552 55.552"},e),i.createElement("path",{d:"M49.325 17.554c-.785-3.31-4.095-5.663-7.467-5.382v-.642c0-.575-.251-1.118-.708-1.527-1.41-1.266-4.614-1.068-5.925-.927l-19.072 2.08-2.603-1.465 21.055-2.187a1.5 1.5 0 1 0-.31-2.984L10.023 7.041c-.124-.32-.344-.6-.653-.774l-.564-.317L30.37 3.606a1.5 1.5 0 1 0-.324-2.982L3.407 3.52c-.33.036-.62.18-.847.388C1.162 4.43 0 5.915 0 8.563v27.45c0 3.296 1.903 6.947 4.331 8.313l3.567 2.007c.229.128.482.192.735.192.04 0 .078-.013.118-.016.75 1.271 1.708 2.337 2.783 2.941l3.566 2.006a1.502 1.502 0 0 0 2.235-1.308v-26.56l5.291 25.796c.649 3.166 3.207 5.553 5.949 5.553q.345 0 .692-.05l3.951-.577c.016-.002.03-.009.045-.012q.021-.001.042-.004l17.173-3.556a6.32 6.32 0 0 0 4.084-2.804 6.32 6.32 0 0 0 .812-4.891zM7.134 42.461l-1.332-.749C4.31 40.873 3 38.21 3 36.013V8.563c0-1.056.325-1.883.739-1.883.157 0 .367.07.593.197l2.802 1.575zm7.202 5.125-1.331-.749c-1.493-.84-2.802-3.503-2.802-5.699v-27.45c0-1.056.325-1.883.739-1.883.157 0 .368.069.592.196l2.802 1.576zm3-27.809v-5.731l18.213-1.986c1.626-.175 2.759-.05 3.309.091v.398l-13.686 1.785c-.043.006-.083.02-.125.029-.034.008-.068.009-.102.018l-3.817 1.113c-1.894.554-3.271 2.216-3.792 4.283m11.497 32.141c-1.415.202-2.882-1.252-3.269-3.138l-5.36-26.134c-.394-1.921.414-3.877 1.764-4.271l2.256-.658 6.985 33.854zm23.199-5.595a3.34 3.34 0 0 1-2.162 1.478l-15.703 3.251L27.162 17.1l14.785-1.929c1.957-.256 4.003 1.152 4.459 3.077l6.05 25.489c.213.902.063 1.82-.424 2.586",style:{fill:"#fff"}}),i.createElement("path",{d:"M43.929 19.242a1.5 1.5 0 0 0-1.712-1.108l-11.48 2.006a1.5 1.5 0 0 0-1.212 1.772l1.561 7.802a1.5 1.5 0 0 0 1.706 1.187l11.926-1.895a1.5 1.5 0 0 0 1.219-1.85zm-10.186 8.469-.976-4.881 8.596-1.502 1.261 4.973z",style:{fill:"#fff"}}))};var l;function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)({}).hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},d.apply(null,arguments)}const c=function(e){return i.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",xmlSpace:"preserve",width:800,height:800,viewBox:"0 0 488.4 488.4"},e),l||(l=i.createElement("path",{d:"M0 203.25c0 112.1 91.2 203.2 203.2 203.2 51.6 0 98.8-19.4 134.7-51.2l129.5 129.5c2.4 2.4 5.5 3.6 8.7 3.6s6.3-1.2 8.7-3.6c4.8-4.8 4.8-12.5 0-17.3l-129.6-129.5c31.8-35.9 51.2-83 51.2-134.7C406.4 91.15 315.2.05 203.2.05S0 91.15 0 203.25m381.9 0c0 98.5-80.2 178.7-178.7 178.7s-178.7-80.2-178.7-178.7 80.2-178.7 178.7-178.7 178.7 80.1 178.7 178.7"})))};var g;function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)({}).hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},p.apply(null,arguments)}const h=function(e){return i.createElement("svg",p({xmlns:"http://www.w3.org/2000/svg",width:800,height:800,viewBox:"0 -0.5 33 33"},e),g||(g=i.createElement("path",{fill:"#FF6E6E",fillRule:"evenodd",d:"m26.865 31.83-10.25-5.621-10.153 5.8 2.091-11.647-8.563-8.027 11.542-1.577L16.394 0l5.042 10.672L33 12.047l-8.426 8.173z"})))}},4894:(e,t,r)=>{r.d(t,{dT:()=>v,gh:()=>o,l9:()=>H,kH:()=>P,N4:()=>f,jt:()=>B,UW:()=>g,a5:()=>W,_k:()=>q});var i=r(4848),a=r(2244),n=r(7581);const o=()=>(0,i.jsxs)(s,{children:[(0,i.jsx)(l,{}),(0,i.jsx)(d,{children:"Конец страницы"}),(0,i.jsx)(l,{})]}),s=n.I4.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${(0,a.st)("spacing","md")};
  padding: ${(0,a.st)("spacing","lg")} 0;
`,l=n.I4.div`
  height: 1px;
  background: ${(0,a.st)("colors","secondary")};
  flex: 1;
  max-width: 200px;
`,d=n.I4.span`
  color: ${(0,a.st)("colors","textMuted")};
  font-size: ${(0,a.st)("fontSizes","sm")};
  font-weight: ${(0,a.st)("fontWeights","medium")};
  white-space: nowrap;
`;var c=r(4577);const g=()=>{const e=(0,a.jL)(),t=(0,a.GV)(e=>e.theme);return(0,i.jsx)(p,{children:(0,i.jsx)(h,{onClick:()=>{e((0,c.s)())},$isDark:"dark"===t,children:(0,i.jsx)(b,{$isDark:"dark"===t,children:(0,i.jsx)(x,{$isDark:"dark"===t,children:"light"===t?"☀️":"🌑"})})})})},p=n.I4.div`
  display: flex;
  align-items: center;
`,h=n.I4.button`
  background: transparent;
  border: none;
  cursor: pointer;
  border-radius: ${(0,a.st)("borderRadius","full")};
  transition: ${(0,a.st)("transitions","colors")};
  padding: 4px;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  &:active {
    transform: scale(0.95);
  }
`,b=n.I4.div`
  width: 44px;
  height: 22px;
  background: ${({$isDark:e})=>e?"rgba(255, 255, 255, 0.2)":"rgba(255, 255, 255, 0.3)"};
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: ${(0,a.st)("borderRadius","full")};
  position: relative;
  transition: ${(0,a.st)("transitions","colors")};
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
`,x=n.I4.div`
  position: absolute;
  top: 1px;
  left: ${({$isDark:e})=>e?"23px":"1px"};
  width: 18px;
  height: 18px;
  background: ${(0,a.st)("colors","textWhite")};
  border-radius: ${(0,a.st)("borderRadius","full")};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${(0,a.st)("fontSizes","xs")};
  transition: ${(0,a.st)("transitions","transform")};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  color: ${({$isDark:e})=>e?(0,a.st)("colors","primary"):(0,a.st)("colors","accent")};
`,u=n.i7`
  0% { 
    background-position: 0% 50%;
    filter: hue-rotate(0deg);
  }
  25% { 
    background-position: 100% 50%;
    filter: hue-rotate(90deg);
  }
  50% { 
    background-position: 100% 100%;
    filter: hue-rotate(180deg);
  }
  75% { 
    background-position: 0% 100%;
    filter: hue-rotate(270deg);
  }
  100% { 
    background-position: 0% 50%;
    filter: hue-rotate(360deg);
  }
`,m=n.i7`
  0%, 100% { 
    transform: translateY(0px);
  }
  50% { 
    transform: translateY(-20px);
  }
`,f=()=>(0,i.jsxs)(y,{children:[(0,i.jsx)(w,{size:"large"}),(0,i.jsx)(w,{size:"medium"}),(0,i.jsx)(w,{size:"small"}),(0,i.jsx)(w,{size:"large"}),(0,i.jsx)(w,{size:"medium"}),(0,i.jsx)(w,{size:"small"}),(0,i.jsx)(w,{size:"medium"}),(0,i.jsx)(w,{size:"small"})]}),y=n.Ay.div`
  z-index: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;
  background: ${(0,a.st)("gradients","background")};
  background-size: 400% 400%;
  animation: ${u} 15s ease infinite;
`,w=n.Ay.div`
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  animation: ${m} 4s ease-in-out infinite;

  &:nth-child(1) {
    width: 80px;
    height: 80px;
    top: 15%;
    left: 8%;
  }
  &:nth-child(2) {
    width: 60px;
    height: 60px;
    top: 75%;
    right: 10%;
  }
  &:nth-child(3) {
    width: 40px;
    height: 40px;
    top: 35%;
    left: 25%;
  }
  &:nth-child(4) {
    width: 80px;
    height: 80px;
    top: 85%;
    left: 70%;
  }
  &:nth-child(5) {
    width: 60px;
    height: 60px;
    top: 25%;
    right: 25%;
  }
  &:nth-child(6) {
    width: 40px;
    height: 40px;
    top: 65%;
    left: 45%;
  }
  &:nth-child(7) {
    width: 60px;
    height: 60px;
    top: 5%;
    left: 50%;
  }
  &:nth-child(8) {
    width: 40px;
    height: 40px;
    top: 45%;
    right: 15%;
  }
`,v=()=>(0,i.jsxs)($,{children:[(0,i.jsx)(j,{delay:0}),(0,i.jsx)(j,{delay:.16}),(0,i.jsx)(j,{delay:.32})]}),k=n.i7`
  0%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
`,$=n.Ay.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 20px;
`,j=n.Ay.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${(0,a.st)("colors","accent")};
  animation: ${k} 1.4s ease-in-out infinite;
  animation-delay: ${e=>e.delay}s;
`,I=n.i7`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,z=n.i7`
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.7;
  }
`,S=n.i7`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,L=n.i7`
  0%, 80%, 100% {
    transform: translateY(0) scale(1);
  }
  40% {
    transform: translateY(-20px) scale(1.1);
  }
`,E=n.Ay.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${(0,a.st)("zIndices","modal")};
  animation: ${I} 0.3s ease-out;
`,O=n.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 40px;
  background: ${(0,a.st)("colors","background")};
  backdrop-filter: blur(20px);
  border-radius: ${(0,a.st)("borderRadius","xl")};
  box-shadow: ${(0,a.st)("shadows","modal")};
  border: 1px solid ${(0,a.st)("colors","secondary")};
  animation: ${z} 2s ease-in-out infinite;
`,A=n.Ay.div`
  position: relative;
  width: 80px;
  height: 80px;
`,M=n.Ay.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: ${e=>e.size}px;
  height: ${e=>e.size}px;
  border: 3px solid transparent;
  border-top: 3px solid ${(0,a.st)("colors","primary")};
  border-radius: 50%;
  animation: ${S} 1.5s linear infinite;
  animation-delay: ${e=>e.delay}s;
  transform: translate(-50%, -50%);
`,R=n.Ay.div`
  display: flex;
  gap: 12px;
  align-items: center;
`,T=n.Ay.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: ${(0,a.st)("gradients","primary")};
  animation: ${L} 1.4s ease-in-out infinite;
  animation-delay: ${e=>e.delay}s;
  box-shadow: ${(0,a.st)("shadows","card")};
`,C=n.Ay.div`
  font-size: ${(0,a.st)("fontSizes","md")};
  font-weight: 600;
  color: ${(0,a.st)("colors","textPrimary")};
  text-align: center;
  background: ${(0,a.st)("gradients","primary")};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: 0.5px;
`,D=n.Ay.div`
  font-size: ${(0,a.st)("fontSizes","md")};
  color: ${(0,a.st)("colors","textSecondary")};
  text-align: center;
  margin-top: 5px;
`,H=({text:e="Загрузка...",subText:t="Пожалуйста, подождите",showDots:r=!0})=>(0,i.jsx)(E,{children:(0,i.jsxs)(O,{children:[(0,i.jsxs)(A,{children:[(0,i.jsx)(M,{delay:0,size:80}),(0,i.jsx)(M,{delay:-.5,size:60}),(0,i.jsx)(M,{delay:-1,size:40})]}),r&&(0,i.jsxs)(R,{children:[(0,i.jsx)(T,{delay:0}),(0,i.jsx)(T,{delay:.16}),(0,i.jsx)(T,{delay:.32})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)(C,{children:e}),(0,i.jsx)(D,{children:t})]})]})}),U=n.i7`
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
`,_=n.Ay.div`
  width: ${e=>"number"==typeof e.width?`${e.width}px`:e.width||"100%"};
  height: ${e=>"number"==typeof e.height?`${e.height}px`:e.height||"100%"};
  margin: ${e=>e.margin||"0"};
  padding: ${e=>e.padding||"0"};
  background: ${(0,a.st)("gradients","skeleton")};
  background-size: 200% 100%;
  border-radius: ${(0,a.st)("borderRadius","sm")};
  animation: ${U} 1.5s linear infinite;
  z-index: 999;
`,B=({width:e,height:t,margin:r,padding:a})=>(0,i.jsx)(_,{width:e,height:t,margin:r,padding:a}),Y={breakpoints:{xs:"480px",sm:"640px",md:"768px",lg:"1024px",xl:"1280px",xxl:"1536px"},opacity:{disabled:.4,muted:.6,medium:.8,default:1,overlay:.5,hover:.9},borderRadius:{xs:"2px",sm:"4px",md:"6px",lg:"8px",xl:"12px",full:"9999px"},transitions:{base:"all 0.3s ease",fast:"all 0.15s ease",slow:"all 0.5s ease",colors:"color 0.3s ease, background-color 0.3s ease, border-color 0.3s ease",transform:"transform 0.3s ease"},fontSizes:{xxl:"3rem",xl:"2.25rem",lg:"1.75rem",md:"1rem",sm:"0.875rem",xs:"0.75rem"},lineHeights:{tight:"1.25",normal:"1.5",relaxed:"1.75"},letterSpacing:{tight:"-0.025em",normal:"0",wide:"0.025em",wider:"0.05em"},spacing:{xs:"0.25rem",sm:"0.5rem",md:"1rem",lg:"1.5rem",xl:"2rem",xxl:"3rem"},fontWeights:{thin:100,extraLight:200,light:300,normal:400,medium:500,semiBold:600,bold:700,extraBold:800,black:900},zIndices:{base:0,dropdown:1e3,overlay:1300,modal:1500,toast:1800,tooltip:2e3}},W=Object.assign(Object.assign({},Y),{colors:{primary:"rgb(147, 51, 234)",primaryLight:"rgb(168, 85, 247)",primaryDark:"rgb(126, 34, 206)",secondary:"rgb(156, 163, 175)",secondaryLight:"rgb(209, 213, 219)",secondaryDark:"rgb(107, 114, 128)",accent:"rgb(251, 146, 60)",accentLight:"rgb(253, 186, 116)",accentDark:"rgb(249, 115, 22)",success:"rgb(34, 197, 94)",danger:"rgb(239, 68, 68)",warning:"rgb(251, 191, 36)",info:"rgb(59, 130, 246)",background:"rgb(17, 24, 39)",backgroundSecondary:"rgb(31, 41, 55)",textPrimary:"rgb(249, 250, 251)",textSecondary:"rgb(209, 213, 219)",textMuted:"rgb(156, 163, 175)",textBlack:"rgb(17, 24, 39)",textWhite:"rgb(255, 255, 255)"},shadows:{nav:"0 2px 8px rgba(255, 255, 255, 0.1)",modal:"0 10px 30px rgba(255, 255, 255, 0.15)",card:"0 4px 12px rgba(255, 255, 255, 0.08)",tooltip:"0 2px 6px rgba(255, 255, 255, 0.12)",hoverLift:"0 8px 20px rgba(255, 255, 255, 0.1)"},gradients:{primary:"linear-gradient(90deg, #4c1d95, #581c87)",accent:"linear-gradient(90deg, #92400e, #78350f)",surface:"linear-gradient(180deg, #1f2937 0%, #111827 100%)",blueToAccent:"linear-gradient(135deg, #1e40af, #92400e)",multicolor:"linear-gradient(135deg,#4c1d95 0%,#3730a3 15%,#be185d 30%,#dc2626 45%,#1d4ed8 60%,#0891b2 75%,#4c1d95 100%)",background:"linear-gradient(135deg,#4c1d95 0%,#3730a3 15%,#be185d 30%,#dc2626 45%,#1d4ed8 60%,#0891b2 75%,#4c1d95 100%)",skeleton:"linear-gradient(90deg, #374151 25%, #4b5563 50%, #374151 75%)"}}),P=n.DU`
  html,
  body {
    padding: 0;
    margin: 0;
    background-color: ${(0,a.st)("colors","background")};
    color: ${(0,a.st)("colors","textPrimary")};
    transition: ${(0,a.st)("transitions","colors")};
  }

  html {
    overflow-y: scroll;
    scroll-behavior: smooth;
  }

  button, a, [role="button"] {
    -webkit-tap-highlight-color: transparent; 
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
    transition: ${(0,a.st)("transitions","colors")};
  }

  a:hover {
    opacity: ${(0,a.st)("opacity","hover")};
  }

  button {
    background-color: transparent;
    border-style: none;
    border: 1px solid ${(0,a.st)("colors","textPrimary")};
    cursor: pointer;
    padding: 0;
    transition: ${(0,a.st)("transitions","colors")};
  }

  button:hover {
    opacity: ${(0,a.st)("opacity","hover")};
  }

  * {
    box-sizing: border-box;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: ${(0,a.st)("lineHeights","normal")};
  }

  ::selection {
    background: ${(0,a.st)("colors","primary")};
    color: ${(0,a.st)("colors","textWhite")};
  }

  ::-moz-selection {
    background: ${(0,a.st)("colors","primary")};
    color: ${(0,a.st)("colors","textWhite")};
  }
`,q=Object.assign(Object.assign({},Y),{colors:{primary:"rgb(147, 51, 234)",primaryLight:"rgb(168, 85, 247)",primaryDark:"rgb(126, 34, 206)",secondary:"rgb(107, 114, 128)",secondaryLight:"rgb(156, 163, 175)",secondaryDark:"rgb(75, 85, 99)",accent:"rgb(251, 146, 60)",accentLight:"rgb(253, 186, 116)",accentDark:"rgb(249, 115, 22)",success:"rgb(34, 197, 94)",danger:"rgb(239, 68, 68)",warning:"rgb(251, 191, 36)",info:"rgb(59, 130, 246)",background:"rgb(255, 255, 255)",backgroundSecondary:"rgb(249, 250, 251)",textPrimary:"rgb(17, 24, 39)",textSecondary:"rgb(107, 114, 128)",textMuted:"rgb(156, 163, 175)",textBlack:"rgb(17, 24, 39)",textWhite:"rgb(255, 255, 255)"},shadows:{nav:"0 2px 8px rgba(0, 0, 0, 0.15)",modal:"0 10px 30px rgba(0, 0, 0, 0.3)",card:"0 4px 12px rgba(0, 0, 0, 0.1)",tooltip:"0 2px 6px rgba(0, 0, 0, 0.2)",hoverLift:"0 8px 20px rgba(0, 0, 0, 0.12)"},gradients:{primary:"linear-gradient(90deg, #8b5cf6, #7c3aed)",accent:"linear-gradient(90deg, #f59e0b, #d97706)",surface:"linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)",blueToAccent:"linear-gradient(135deg, #3b82f6, #f59e0b)",multicolor:"linear-gradient(135deg,#8b5cf6 0%,#6366f1 15%,#ec4899 30%,#f43f5e 45%,#60a5fa 60%,#06b6d4 75%,#8b5cf6 100%)",background:"linear-gradient(135deg,#8b5cf6 0%,#6366f1 15%,#ec4899 30%,#f43f5e 45%,#60a5fa 60%,#06b6d4 75%,#8b5cf6 100%)",skeleton:"linear-gradient(90deg, #f1f5f9 25%, #e2e8f0 50%, #f1f5f9 75%)"}})}}]);
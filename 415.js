"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[415],{958:(e,t,o)=>{o.d(t,{$o:()=>S,bV:()=>s,KM:()=>i});var r=o(2244);const i=e=>e.length>r.aH.LIMITS.TITLE_CHAR_LIMIT?e.slice(0,r.aH.LIMITS.TITLE_CHAR_LIMIT)+"...":e,s=e=>e.length>r.aH.LIMITS.AUTHOR_CHAR_LIMIT?e.slice(0,r.aH.LIMITS.AUTHOR_CHAR_LIMIT)+"...":e;var n=o(4848),a=o(6983),l=o(3882),d=o(7581),c=o(6540),h=o(5227),x=o(5920);const p=({book:e})=>{const t=(0,x.Zp)(),{user:o,isLoading:l}=(0,r.GV)(e=>e.user),{data:d}=(0,a.ry)({userId:null==o?void 0:o.id,from:"mybooks",select:"book_id, book_status"}),{addToMyBooks:c,removeFromMyBooks:p}=(()=>{const{user:e}=(0,r.GV)(e=>e.user),[t]=(0,a.J3)();return{addToMyBooks:o=>{o&&(null==e?void 0:e.id)&&t({from:"mybooks",bookId:o,userId:e.id,bookStatus:"will_read",method:"insert"})},removeFromMyBooks:o=>{o&&(null==e?void 0:e.id)&&t({from:"mybooks",bookId:o,userId:e.id,bookStatus:"will_read",method:"delete"})}}})(),y=null==d?void 0:d.some(t=>t.book_id===e.cover_edition_key),$=e=>{t(h.b.LINKS.BOOK(e))};return(0,n.jsx)(m,{children:(0,n.jsxs)(u,{children:[(0,n.jsx)(f,{cover_id:e.cover_id,cover_i:e.cover_i,onClick:()=>$(e.cover_edition_key)}),(0,n.jsxs)(g,{children:[(0,n.jsx)(v,{onClick:()=>$(e.cover_edition_key),children:i(e.title)}),e.author_name&&(0,n.jsx)(b,{onClick:()=>{return o=e.author_key[0],void t(h.b.LINKS.AUTHOR(o));var o},children:s(e.author_name[0])}),y?(0,n.jsx)(k,{filled:!0,onClick:()=>p(e.cover_edition_key)}):o&&!l?(0,n.jsx)(k,{onClick:()=>c(e.cover_edition_key)}):null]})]})})},m=d.I4.div`
  width: 140px;
  flex: 0 0 auto;
  padding: 10px 10px 0 10px;
  scroll-snap-align: center;
  height: min-content;
`,u=d.I4.div`
  border-style: none;
  position: relative;
`,f=(0,d.I4)(a.ln)`
  width: 100%;
  height: 180px;
  cursor: pointer;
  transition: transform 0.15s linear;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
`,g=d.I4.div`
  padding: 10px 10px 0 10px;
`,v=d.I4.h5`
  font-weight: ${(0,r.st)("fontWeights","bold")};
  font-size: ${(0,r.st)("fontSizes","sm")};
  color: ${(0,r.st)("colors","textPrimary")};
  cursor: pointer;
  margin: 0;
  transition: ${(0,r.st)("transitions","colors")};

  &:hover {
    opacity: ${(0,r.st)("opacity","hover")};
  }
`,b=d.I4.p`
  font-size: ${(0,r.st)("fontSizes","sm")};
  color: ${(0,r.st)("colors","textSecondary")};
  margin: 0;
  cursor: pointer;
  transition: ${(0,r.st)("transitions","colors")};

  &:hover {
    opacity: ${(0,r.st)("opacity","hover")};
  }
`,k=(0,d.I4)(l.FE)`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 20px;
  height: 20px;
  cursor: pointer;
  transition: ${(0,r.st)("transitions","colors")};

  path {
    fill: ${({filled:e})=>e?(0,r.st)("colors","accent"):(0,r.st)("colors","textWhite")};
  }

  &:hover {
    opacity: ${(0,r.st)("opacity","hover")};
  }
`;var y=o(4894);const $=()=>(0,n.jsx)(j,{children:Array.from({length:10}).map((e,t)=>(0,n.jsxs)(I,{children:[(0,n.jsx)(w,{children:(0,n.jsx)(y.jt,{height:"180px"})}),(0,n.jsxs)(_,{children:[(0,n.jsx)(y.jt,{height:"1.5rem",margin:"10px 0"}),(0,n.jsx)(y.jt,{height:"1.5rem",margin:"10px 0"})]})]},`skeleton-${t}`))}),j=d.I4.div.attrs(()=>({className:"shelf__container"}))`
  display: flex;
  flex-wrap: nowrap; /* из твоего CSS */
  overflow-x: auto;
  scroll-snap-type: x proximity;
  scroll-behavior: smooth;
  -ms-overflow-style: none; /* IE и Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
`,I=d.I4.div.attrs(()=>({className:"shelf__item"}))`
  width: 150px; /* из твоего CSS */
  flex: 0 0 auto;
  padding: 10px 10px 0 10px;
  scroll-snap-align: center;
  height: 300px;
  position: relative;
`,w=d.I4.div.attrs(()=>({className:"card"}))`
  border-style: none;
`,_=d.I4.div.attrs(()=>({className:"card__description"}))`
  padding: 10px 10px 0 10px;
`,S=({shelfTitle:e,api:t})=>{const{data:o,isLoading:i}=(0,a.TR)(t),{isScrolled:s,isScrollEnd:l,handleScrollRight:d,handleScrollLeft:h,bookshelf:x}=(e=>{const[t,o]=(0,c.useState)(!1),[i,s]=(0,c.useState)(!1),n=(0,c.useRef)(null);return(0,c.useEffect)(()=>{const e=()=>{n.current&&(o(n.current.scrollLeft>0),s(n.current.scrollLeft>n.current.scrollWidth-n.current.clientWidth-1))},t=n.current;return null==t||t.addEventListener("scroll",e),e(),()=>{null==t||t.removeEventListener("scroll",e)}},[e]),{isScrolled:t,isScrollEnd:i,handleScrollRight:()=>{n.current&&n.current.scrollBy({left:r.aH.LIMITS.SCROLL_DISTANCE,behavior:"smooth"})},handleScrollLeft:()=>{n.current&&n.current.scrollBy({left:-r.aH.LIMITS.SCROLL_DISTANCE,behavior:"smooth"})},bookshelf:n}})(i);return(0,n.jsxs)(C,{children:[(0,n.jsx)(L,{children:e}),i?(0,n.jsx)($,{}):(0,n.jsxs)(z,{ref:x,children:[null==o?void 0:o.map(e=>e.cover_edition_key&&(0,n.jsx)(p,{book:e},e.key)),s&&(0,n.jsx)(T,{position:"left",onClick:h,"aria-label":"Scroll Left",children:(0,n.jsx)(M,{})}),!l&&(0,n.jsx)(T,{position:"right",onClick:d,"aria-label":"Scroll Right",children:(0,n.jsx)(M,{})})]})]})},C=d.I4.article`
  margin: ${(0,r.st)("spacing","md")} 0;
  position: relative;
  height: min-content;
`,L=d.I4.h1`
  font-size: ${(0,r.st)("fontSizes","lg")};
  font-weight: ${(0,r.st)("fontWeights","bold")};
  color: ${(0,r.st)("colors","textPrimary")};
  margin: ${(0,r.st)("spacing","sm")} 0;
`,z=d.I4.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-snap-type: x proximity;
  scroll-behavior: smooth;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`,T=d.I4.button`
  position: absolute;
  background-color: transparent;
  width: 35px;
  height: 35px;
  top: 35%;
  border-style: none;
  cursor: pointer;
  z-index: ${(0,r.st)("zIndices","base")};
  transition: ${(0,r.st)("transitions","colors")};

  ${({position:e})=>"right"===e?"right: -15px;":"left: -15px; transform: rotate(180deg);"}

  &:hover {
    opacity: ${(0,r.st)("opacity","hover")};
  }
`,M=(0,d.I4)(l.i3)`
  width: 100%;
  height: 100%;
`},5415:(e,t,o)=>{o.r(t),o.d(t,{MyBooks:()=>y});var r=o(4848),i=o(6983),s=o(6540),n=o(2244),a=o(7581),l=o(5227),d=o(5920),c=o(4894),h=o(958);const x=({bookId:e,bookStatus:t})=>{const{data:o,isLoading:a}=(0,i.iw)(e),[x]=(0,i.J3)(),{user:y}=(0,n.GV)(e=>e.user),$=(0,d.Zp)(),[j,I]=(0,s.useState)(t),w=e=>{$(l.b.LINKS.BOOK(e))},_=o=>{return r=void 0,i=void 0,n=function*(){if(null==y?void 0:y.id){I(o);try{yield x({from:"mybooks",userId:y.id,bookId:e,bookStatus:o,method:"remove"===o?"delete":"update"}).unwrap()}catch(e){I(t),console.error("Failed to update book status:",e)}}},new((s=void 0)||(s=Promise))(function(e,t){function o(e){try{l(n.next(e))}catch(e){t(e)}}function a(e){try{l(n.throw(e))}catch(e){t(e)}}function l(t){var r;t.done?e(t.value):(r=t.value,r instanceof s?r:new s(function(e){e(r)})).then(o,a)}l((n=n.apply(r,i||[])).next())});var r,i,s,n};return(0,s.useEffect)(()=>{I(t)},[t]),(0,r.jsx)(r.Fragment,{children:o&&(0,r.jsxs)(m,{children:[(0,r.jsx)(u,{children:(0,r.jsx)(f,{skeletonHeight:"",cover_id:o.cover_id,cover_i:o.cover_i,onClick:()=>w(o.cover_edition_key)})}),a?(0,r.jsxs)(b,{children:[(0,r.jsx)(c.jt,{height:"20px",width:"100%",margin:"0 0 5px 0"}),(0,r.jsx)(c.jt,{height:"20px",width:"100%",margin:"0 0 5px 0"}),(0,r.jsx)(c.jt,{height:"20px",width:"100%",margin:"0 0 5px 0"}),(0,r.jsxs)(k,{children:[(0,r.jsx)(c.jt,{height:"32px"}),(0,r.jsx)(c.jt,{height:"32px",width:"32px"})]})]}):(0,r.jsxs)(b,{children:[(0,r.jsx)(g,{onClick:()=>w(o.cover_edition_key),children:(0,h.KM)(o.title)}),o.author_name&&(0,r.jsx)(v,{onClick:()=>{return e=o.author_key[0],void $(l.b.LINKS.AUTHOR(e));var e},children:(0,h.bV)(o.author_name[0])}),(0,r.jsxs)(k,{children:["will_read"!==j&&(0,r.jsx)(p,{onClick:()=>_("will_read"),children:"📚"}),"reading"!==j&&(0,r.jsx)(p,{onClick:()=>_("reading"),children:"📖"}),"read"!==j&&(0,r.jsx)(p,{onClick:()=>_("read"),children:"✅"}),"favorite"!==j&&(0,r.jsx)(p,{onClick:()=>_("favorite"),children:"💖"}),(0,r.jsx)(p,{onClick:()=>_("remove"),children:"🗑️"})]})]})]})})},p=a.I4.button`
  all: unset;
  cursor: pointer;
  font-size: ${(0,n.st)("fontSizes","md")};
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background-color: ${({$active:e})=>e?(0,n.st)("colors","accent"):(0,n.st)("colors","backgroundSecondary")};
  color: ${({$active:e})=>e?(0,n.st)("colors","textWhite"):(0,n.st)("colors","textSecondary")};
  box-shadow: ${(0,n.st)("shadows","card")};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ${(0,n.st)("transitions","transform")};

  &:hover {
    transform: scale(1.1);
    background-color: ${(0,n.st)("colors","accent")};
    color: ${(0,n.st)("colors","textWhite")};
  }

  &:active {
    transform: scale(0.95);
  }
`,m=a.I4.div`
  background: ${(0,n.st)("colors","background")};
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: ${(0,n.st)("borderRadius","lg")};
  padding: 1rem;
  transition: ${(0,n.st)("transitions","colors")};
  position: relative;
  overflow: hidden;
  box-shadow: ${(0,n.st)("shadows","card")};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: ${(0,n.st)("breakpoints","md")}) {
    padding-inline: 0.7rem;
  }

  @media (max-width: ${(0,n.st)("breakpoints","sm")}) {
    padding-inline: 0.7rem;
  }

  @media (max-width: ${(0,n.st)("breakpoints","xs")}) {
    padding-inline: 0.7rem;
  }
`,u=a.I4.div`
  position: relative;
  border-radius: ${(0,n.st)("borderRadius","md")};
  width: 130px;
  height: 200px;
  overflow: hidden;
  margin-bottom: 0.8rem;
  box-shadow: ${(0,n.st)("shadows","card")};
`,f=(0,a.I4)(i.ln)`
  width: 130px;
  height: 200px;
  transition: ${(0,n.st)("transitions","transform")};
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`,g=a.I4.h3`
  font-size: ${(0,n.st)("fontSizes","md")};
  font-weight: 600;
  color: ${(0,n.st)("colors","textPrimary")};
  margin-bottom: 0.4rem;
  line-height: 1.3;
  cursor: pointer;
  transition: ${(0,n.st)("transitions","colors")};

  &:hover {
    color: ${(0,n.st)("colors","accent")};
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,v=a.I4.p`
  font-size: ${(0,n.st)("fontSizes","md")};
  color: ${(0,n.st)("colors","textSecondary")};
  margin-bottom: 0.8rem;
  cursor: pointer;
  transition: ${(0,n.st)("transitions","colors")};

  &:hover {
    color: ${(0,n.st)("colors","primary")};
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`,b=a.I4.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
`,k=a.I4.div`
  display: flex;
  gap: 0.5rem;
  margin-top: auto;
  justify-content: center;
  align-items: center;
`,y=()=>{const[e,t]=(0,s.useState)("will_read"),{user:o}=(0,n.GV)(e=>e.user),{data:a,isLoading:l}=(0,i.ry)({userId:null==o?void 0:o.id,from:"mybooks",select:"book_id, book_status"}),d=(0,s.useMemo)(()=>a?a.filter(t=>t.book_status===e):[],[a,e]);return(0,r.jsxs)(j,{children:[(0,r.jsxs)(I,{children:[(0,r.jsxs)(w,{active:"will_read"===e,onClick:()=>t("will_read"),"data-active":"will_read"===e,children:[(0,r.jsx)(_,{children:"📚"}),"Буду читать"]}),(0,r.jsxs)(w,{active:"favorite"===e,onClick:()=>t("favorite"),"data-active":"favorite"===e,children:[(0,r.jsx)(_,{children:"💖"}),"Избранное"]}),(0,r.jsxs)(w,{active:"reading"===e,onClick:()=>t("reading"),"data-active":"reading"===e,children:[(0,r.jsx)(_,{children:"📖"}),"Читаю"]}),(0,r.jsxs)(w,{active:"read"===e,onClick:()=>t("read"),"data-active":"read"===e,children:[(0,r.jsx)(_,{children:"✅"}),"Прочитано"]})]}),(0,r.jsx)(S,{children:l?(0,r.jsxs)(L,{children:[(0,r.jsx)($,{}),(0,r.jsx)(z,{children:"Загружаем ваши книги..."})]}):d&&d.length>0?(0,r.jsx)(C,{children:d.map(e=>(0,r.jsx)(x,{bookId:e.book_id,bookStatus:e.book_status},e.book_id))}):(0,r.jsxs)(T,{children:[(0,r.jsx)(M,{children:"📖"}),(0,r.jsx)(R,{children:"Нет книг"}),(0,r.jsx)(H,{children:"В этой категории пока нет книг. Добавьте книги из поиска!"})]})})]})},$=a.I4.div`
  width: 50px;
  height: 50px;
  border: 4px solid ${(0,n.st)("colors","secondary")};
  border-top: 4px solid ${(0,n.st)("colors","primary")};
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 1rem;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`,j=a.I4.div`
  min-height: 100vh;
  min-height: 100dvh;
  background: ${(0,n.st)("gradients","primary")};
  padding: 1.5rem;

  @media (max-width: ${(0,n.st)("breakpoints","xs")}) {
    padding-inline: 7px;
  }
`,I=a.I4.div`
  display: flex;
  justify-content: center;
  gap: 0.8rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;

  @media (max-width: ${(0,n.st)("breakpoints","md")}) {
    gap: 0.5rem;
  }

  @media (max-width: ${(0,n.st)("breakpoints","md")}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }
`,w=a.I4.button`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.7rem 1.2rem;
  border-radius: ${(0,n.st)("borderRadius","md")};
  border: none;
  font-size: ${(0,n.st)("fontSizes","md")};
  font-weight: 600;
  cursor: pointer;
  transition: ${(0,n.st)("transitions","transform")};
  position: relative;
  overflow: hidden;
  text-align: center;

  @media (max-width: ${(0,n.st)("breakpoints","xs")}) {
    font-size: ${(0,n.st)("fontSizes","sm")};
    padding: 0.5rem 0.9rem;
  }

  background: ${({active:e})=>e?"rgba(255, 255, 255, 0.25)":"rgba(255, 255, 255, 0.1)"};
  color: ${(0,n.st)("colors","textWhite")};
  backdrop-filter: blur(10px);
  border: 1px solid
    ${({active:e})=>e?"rgba(255, 255, 255, 0.4)":"rgba(255, 255, 255, 0.1)"};
  box-shadow: ${({active:e})=>e?"0 8px 25px rgba(255, 255, 255, 0.2)":"0 2px 8px rgba(0, 0, 0, 0.1)"};

  &:hover {
    transform: translateY(-2px);
    background: ${({active:e})=>e?"rgba(255, 255, 255, 0.3)":"rgba(255, 255, 255, 0.2)"};
    box-shadow: ${({active:e})=>e?"0 12px 35px rgba(255, 255, 255, 0.3)":"0 6px 20px rgba(0, 0, 0, 0.2)"};
  }

  &:active {
    transform: translateY(0);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    &:hover {
      transform: none;
    }
  }
`,_=a.I4.span`
  font-size: ${(0,n.st)("fontSizes","md")};
  position: relative;
  z-index: 1;
  transition: ${(0,n.st)("transitions","transform")};

  ${w}:hover & {
    transform: scale(1.1);
  }

  ${w}[data-active="true"] & {
    animation: pulse 2s ease-in-out infinite;
  }

  @keyframes pulse {
    0%,
    100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
  }
`,S=a.I4.div`
  max-width: 1400px;
  margin: 0 auto;
`,C=a.I4.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1rem;

  @media (max-width: ${(0,n.st)("breakpoints","xs")}) {
    gap: 6px;
  }
`,L=a.I4.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
`,z=a.I4.p`
  color: ${(0,n.st)("colors","textWhite")};
  font-size: ${(0,n.st)("fontSizes","md")};
  margin: 0;
  opacity: 0.8;
`,T=a.I4.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  text-align: center;
`,M=a.I4.div`
  font-size: ${(0,n.st)("fontSizes","xxl")};
  margin-bottom: 1rem;
`,R=a.I4.h2`
  font-size: ${(0,n.st)("fontSizes","xl")};
  color: ${(0,n.st)("colors","textWhite")};
  margin-bottom: 1rem;
  font-weight: 600;
`,H=a.I4.p`
  color: ${(0,n.st)("colors","textWhite")};
  font-size: ${(0,n.st)("fontSizes","md")};
  max-width: 400px;
  line-height: 1.6;
  margin: 0;
  opacity: 0.7;
`}}]);
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[619],{619:(o,t,e)=>{e.r(t),e.d(t,{HomePage:()=>a});var i=e(848),r=e(158),s=e(894),l=e(958);const n=[{title:"Новые книги 2025",api:`${r.aH.URLS.SEARCH_BOOKS}?q=first_publish_year:2025`},{title:"Популярное фэнтези",api:(0,r.x4)("fantasy")},{title:"Научная фантастика",api:(0,r.x4)("science fiction")},{title:"Современная проза",api:(0,r.x4)("fiction")},{title:"Саморазвитие",api:(0,r.x4)("self-help")},{title:"Детективы",api:(0,r.x4)("mystery")},{title:"Романтические романы",api:(0,r.x4)("romance")},{title:"Бизнес литература",api:(0,r.x4)("business")},{title:"Исторические романы",api:(0,r.x4)("historical fiction")},{title:"Классическая литература",api:(0,r.x4)("classics")}],a=()=>{const{categoriesLimit:o}=(0,r.Jg)();return(0,i.jsxs)("section",{children:[n.slice(0,o).map((o=>(0,i.jsx)(l.$o,{shelfTitle:o.title,api:o.api},o.title))),n.length>=o&&(0,i.jsx)(s.dT,{}),n.length<o&&(0,i.jsx)(s.gh,{})]})}},958:(o,t,e)=>{e.d(t,{$o:()=>A,bV:()=>s,KM:()=>r});var i=e(158);const r=o=>o.length>i.aH.LIMITS.TITLE_CHAR_LIMIT?o.slice(0,i.aH.LIMITS.TITLE_CHAR_LIMIT)+"...":o,s=o=>o.length>i.aH.LIMITS.AUTHOR_CHAR_LIMIT?o.slice(0,i.aH.LIMITS.AUTHOR_CHAR_LIMIT)+"...":o;var l=e(848),n=e(813),a=e(882),c=e(581),d=e(540),h=e(453),p=e(794);const x=({book:o})=>{const t=(0,p.Zp)(),{user:e,isLoading:a}=(0,i.GV)((o=>o.user)),{data:c}=(0,n.ry)({userId:null==e?void 0:e.id,from:"mybooks",select:"book_id, book_status"}),{addToMyBooks:d,removeFromMyBooks:x}=(()=>{const{user:o}=(0,i.GV)((o=>o.user)),[t]=(0,n.J3)();return{addToMyBooks:e=>{e&&(null==o?void 0:o.id)&&t({from:"mybooks",bookId:e,userId:o.id,bookStatus:"will_read",method:"insert"})},removeFromMyBooks:e=>{e&&(null==o?void 0:o.id)&&t({from:"mybooks",bookId:e,userId:o.id,bookStatus:"will_read",method:"delete"})}}})(),_=null==c?void 0:c.some((t=>t.book_id===o.cover_edition_key)),k=o=>{t(h.b.LINKS.BOOK(o))};return(0,l.jsx)(y,{children:(0,l.jsxs)(u,{children:[(0,l.jsx)(f,{cover_id:o.cover_id,cover_i:o.cover_i,onClick:()=>k(o.cover_edition_key)}),(0,l.jsxs)(m,{children:[(0,l.jsx)(v,{onClick:()=>k(o.cover_edition_key),children:r(o.title)}),o.author_name&&(0,l.jsx)(g,{onClick:()=>{return e=o.author_key[0],void t(h.b.LINKS.AUTHOR(e));var e},children:s(o.author_name[0])}),_?(0,l.jsx)(b,{filled:!0,onClick:()=>x(o.cover_edition_key)}):e&&!a?(0,l.jsx)(b,{onClick:()=>d(o.cover_edition_key)}):null]})]})})},y=c.Ay.div`
  width: 140px;
  flex: 0 0 auto;
  padding: 10px 10px 0 10px;
  scroll-snap-align: center;
  height: min-content;
`,u=c.Ay.div`
  border-style: none;
  position: relative;
`,f=(0,c.Ay)(n.ln)`
  width: 100%;
  height: 180px;
  cursor: pointer;
  transition: transform 0.15s linear;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
`,m=c.Ay.div`
  padding: 10px 10px 0 10px;
`,v=c.Ay.h5`
  font-weight: ${(0,i.st)("fontWeights","bold")};
  font-size: ${(0,i.st)("fontSizes","sm")};
  color: ${(0,i.st)("colors","textPrimary")};
  cursor: pointer;
  margin: 0;
  transition: ${(0,i.st)("transitions","colors")};

  &:hover {
    opacity: ${(0,i.st)("opacity","hover")};
  }
`,g=c.Ay.p`
  font-size: ${(0,i.st)("fontSizes","sm")};
  color: ${(0,i.st)("colors","textSecondary")};
  margin: 0;
  cursor: pointer;
  transition: ${(0,i.st)("transitions","colors")};

  &:hover {
    opacity: ${(0,i.st)("opacity","hover")};
  }
`,b=(0,c.Ay)(a.FE)`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 20px;
  height: 20px;
  cursor: pointer;
  transition: ${(0,i.st)("transitions","colors")};

  path {
    fill: ${({filled:o})=>o?(0,i.st)("colors","accent"):(0,i.st)("colors","textWhite")};
  }

  &:hover {
    opacity: ${(0,i.st)("opacity","hover")};
  }
`;var _=e(894);const k=()=>(0,l.jsx)(S,{children:Array.from({length:10}).map(((o,t)=>(0,l.jsxs)(I,{children:[(0,l.jsx)(j,{children:(0,l.jsx)(_.jt,{height:"180px"})}),(0,l.jsxs)(L,{children:[(0,l.jsx)(_.jt,{height:"1.5rem",margin:"10px 0"}),(0,l.jsx)(_.jt,{height:"1.5rem",margin:"10px 0"})]})]},`skeleton-${t}`)))}),S=c.Ay.div.attrs((()=>({className:"shelf__container"})))`
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
`,I=c.Ay.div.attrs((()=>({className:"shelf__item"})))`
  width: 150px; /* из твоего CSS */
  flex: 0 0 auto;
  padding: 10px 10px 0 10px;
  scroll-snap-align: center;
  height: 300px;
  position: relative;
`,j=c.Ay.div.attrs((()=>({className:"card"})))`
  border-style: none;
`,L=c.Ay.div.attrs((()=>({className:"card__description"})))`
  padding: 10px 10px 0 10px;
`,A=({shelfTitle:o,api:t})=>{const{data:e,isLoading:r}=(0,n.TR)(t),{isScrolled:s,isScrollEnd:a,handleScrollRight:c,handleScrollLeft:h,bookshelf:p}=(o=>{const[t,e]=(0,d.useState)(!1),[r,s]=(0,d.useState)(!1),l=(0,d.useRef)(null);return(0,d.useEffect)((()=>{const o=()=>{l.current&&(e(l.current.scrollLeft>0),s(l.current.scrollLeft>l.current.scrollWidth-l.current.clientWidth-1))},t=l.current;return null==t||t.addEventListener("scroll",o),o(),()=>{null==t||t.removeEventListener("scroll",o)}}),[o]),{isScrolled:t,isScrollEnd:r,handleScrollRight:()=>{l.current&&l.current.scrollBy({left:i.aH.LIMITS.SCROLL_DISTANCE,behavior:"smooth"})},handleScrollLeft:()=>{l.current&&l.current.scrollBy({left:-i.aH.LIMITS.SCROLL_DISTANCE,behavior:"smooth"})},bookshelf:l}})(r);return(0,l.jsxs)(w,{children:[(0,l.jsx)(T,{children:o}),r?(0,l.jsx)(k,{}):(0,l.jsxs)($,{ref:p,children:[null==e?void 0:e.map((o=>o.cover_edition_key&&(0,l.jsx)(x,{book:o},o.key))),s&&(0,l.jsx)(C,{position:"left",onClick:h,"aria-label":"Scroll Left",children:(0,l.jsx)(H,{})}),!a&&(0,l.jsx)(C,{position:"right",onClick:c,"aria-label":"Scroll Right",children:(0,l.jsx)(H,{})})]})]})},w=c.Ay.article`
  margin: ${(0,i.st)("spacing","md")} 0;
  position: relative;
  height: min-content;
`,T=c.Ay.h1`
  font-size: ${(0,i.st)("fontSizes","lg")};
  font-weight: ${(0,i.st)("fontWeights","bold")};
  color: ${(0,i.st)("colors","textPrimary")};
  margin: ${(0,i.st)("spacing","sm")} 0;
`,$=c.Ay.div`
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
`,C=c.Ay.button`
  position: absolute;
  background-color: transparent;
  width: 35px;
  height: 35px;
  top: 35%;
  border-style: none;
  cursor: pointer;
  z-index: ${(0,i.st)("zIndices","base")};
  transition: ${(0,i.st)("transitions","colors")};

  ${({position:o})=>"right"===o?"right: -15px;":"left: -15px; transform: rotate(180deg);"}

  &:hover {
    opacity: ${(0,i.st)("opacity","hover")};
  }
`,H=(0,c.Ay)(a.i3)`
  width: 100%;
  height: 100%;
`}}]);
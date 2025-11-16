"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[619],{958:(o,t,e)=>{e.d(t,{$o:()=>w,bV:()=>s,KM:()=>r});var i=e(2244);const r=o=>o.length>i.aH.LIMITS.TITLE_CHAR_LIMIT?o.slice(0,i.aH.LIMITS.TITLE_CHAR_LIMIT)+"...":o,s=o=>o.length>i.aH.LIMITS.AUTHOR_CHAR_LIMIT?o.slice(0,i.aH.LIMITS.AUTHOR_CHAR_LIMIT)+"...":o;var l=e(4848),n=e(6983),a=e(3882),c=e(7581),d=e(6540),h=e(5227),p=e(5920);const x=({book:o})=>{const t=(0,p.Zp)(),{user:e,isLoading:a}=(0,i.GV)(o=>o.user),{data:c}=(0,n.ry)({userId:null==e?void 0:e.id,from:"mybooks",select:"book_id, book_status"}),{addToMyBooks:d,removeFromMyBooks:x}=(()=>{const{user:o}=(0,i.GV)(o=>o.user),[t]=(0,n.J3)();return{addToMyBooks:e=>{e&&(null==o?void 0:o.id)&&t({from:"mybooks",bookId:e,userId:o.id,bookStatus:"will_read",method:"insert"})},removeFromMyBooks:e=>{e&&(null==o?void 0:o.id)&&t({from:"mybooks",bookId:e,userId:o.id,bookStatus:"will_read",method:"delete"})}}})(),b=null==c?void 0:c.some(t=>t.book_id===o.cover_edition_key),_=o=>{t(h.b.LINKS.BOOK(o))};return(0,l.jsx)(u,{children:(0,l.jsxs)(f,{children:[(0,l.jsx)(m,{cover_id:o.cover_id,cover_i:o.cover_i,onClick:()=>_(o.cover_edition_key)}),(0,l.jsxs)(v,{children:[(0,l.jsx)(g,{onClick:()=>_(o.cover_edition_key),children:r(o.title)}),o.author_name&&(0,l.jsx)(I,{onClick:()=>{return e=o.author_key[0],void t(h.b.LINKS.AUTHOR(e));var e},children:s(o.author_name[0])}),b?(0,l.jsx)(y,{filled:!0,onClick:()=>x(o.cover_edition_key)}):e&&!a?(0,l.jsx)(y,{onClick:()=>d(o.cover_edition_key)}):null]})]})})},u=c.I4.div`
  width: 140px;
  flex: 0 0 auto;
  padding: 10px 10px 0 10px;
  scroll-snap-align: center;
  height: min-content;
`,f=c.I4.div`
  border-style: none;
  position: relative;
`,m=(0,c.I4)(n.ln)`
  width: 100%;
  height: 180px;
  cursor: pointer;
  transition: transform 0.15s linear;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
`,v=c.I4.div`
  padding: 10px 10px 0 10px;
`,g=c.I4.h5`
  font-weight: ${(0,i.st)("fontWeights","bold")};
  font-size: ${(0,i.st)("fontSizes","sm")};
  color: ${(0,i.st)("colors","textPrimary")};
  cursor: pointer;
  margin: 0;
  transition: ${(0,i.st)("transitions","colors")};

  &:hover {
    opacity: ${(0,i.st)("opacity","hover")};
  }
`,I=c.I4.p`
  font-size: ${(0,i.st)("fontSizes","sm")};
  color: ${(0,i.st)("colors","textSecondary")};
  margin: 0;
  cursor: pointer;
  transition: ${(0,i.st)("transitions","colors")};

  &:hover {
    opacity: ${(0,i.st)("opacity","hover")};
  }
`,y=(0,c.I4)(a.FE)`
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
`;var b=e(4894);const _=()=>(0,l.jsx)(k,{children:Array.from({length:10}).map((o,t)=>(0,l.jsxs)(S,{children:[(0,l.jsx)(j,{children:(0,l.jsx)(b.jt,{height:"180px"})}),(0,l.jsxs)(L,{children:[(0,l.jsx)(b.jt,{height:"1.5rem",margin:"10px 0"}),(0,l.jsx)(b.jt,{height:"1.5rem",margin:"10px 0"})]})]},`skeleton-${t}`))}),k=c.I4.div.attrs(()=>({className:"shelf__container"}))`
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
`,S=c.I4.div.attrs(()=>({className:"shelf__item"}))`
  width: 150px; /* из твоего CSS */
  flex: 0 0 auto;
  padding: 10px 10px 0 10px;
  scroll-snap-align: center;
  height: 300px;
  position: relative;
`,j=c.I4.div.attrs(()=>({className:"card"}))`
  border-style: none;
`,L=c.I4.div.attrs(()=>({className:"card__description"}))`
  padding: 10px 10px 0 10px;
`,w=({shelfTitle:o,api:t})=>{const{data:e,isLoading:r}=(0,n.TR)(t),{isScrolled:s,isScrollEnd:a,handleScrollRight:c,handleScrollLeft:h,bookshelf:p}=(o=>{const[t,e]=(0,d.useState)(!1),[r,s]=(0,d.useState)(!1),l=(0,d.useRef)(null);return(0,d.useEffect)(()=>{const o=()=>{l.current&&(e(l.current.scrollLeft>0),s(l.current.scrollLeft>l.current.scrollWidth-l.current.clientWidth-1))},t=l.current;return null==t||t.addEventListener("scroll",o),o(),()=>{null==t||t.removeEventListener("scroll",o)}},[o]),{isScrolled:t,isScrollEnd:r,handleScrollRight:()=>{l.current&&l.current.scrollBy({left:i.aH.LIMITS.SCROLL_DISTANCE,behavior:"smooth"})},handleScrollLeft:()=>{l.current&&l.current.scrollBy({left:-i.aH.LIMITS.SCROLL_DISTANCE,behavior:"smooth"})},bookshelf:l}})(r);return(0,l.jsxs)(T,{children:[(0,l.jsx)($,{children:o}),r?(0,l.jsx)(_,{}):(0,l.jsxs)(C,{ref:p,children:[null==e?void 0:e.map(o=>o.cover_edition_key&&(0,l.jsx)(x,{book:o},o.key)),s&&(0,l.jsx)(H,{position:"left",onClick:h,"aria-label":"Scroll Left",children:(0,l.jsx)(R,{})}),!a&&(0,l.jsx)(H,{position:"right",onClick:c,"aria-label":"Scroll Right",children:(0,l.jsx)(R,{})})]})]})},T=c.I4.article`
  margin: ${(0,i.st)("spacing","md")} 0;
  position: relative;
  height: min-content;
`,$=c.I4.h1`
  font-size: ${(0,i.st)("fontSizes","lg")};
  font-weight: ${(0,i.st)("fontWeights","bold")};
  color: ${(0,i.st)("colors","textPrimary")};
  margin: ${(0,i.st)("spacing","sm")} 0;
`,C=c.I4.div`
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
`,H=c.I4.button`
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
`,R=(0,c.I4)(a.i3)`
  width: 100%;
  height: 100%;
`},2619:(o,t,e)=>{e.r(t),e.d(t,{HomePage:()=>a});var i=e(4848),r=e(2244),s=e(4894),l=e(958);const n=[{title:"Новые книги 2025",api:`${r.aH.URLS.SEARCH_BOOKS}?q=first_publish_year:2025`},{title:"Популярное фэнтези",api:(0,r.x4)("fantasy")},{title:"Научная фантастика",api:(0,r.x4)("science fiction")},{title:"Современная проза",api:(0,r.x4)("fiction")},{title:"Саморазвитие",api:(0,r.x4)("self-help")},{title:"Детективы",api:(0,r.x4)("mystery")},{title:"Романтические романы",api:(0,r.x4)("romance")},{title:"Бизнес литература",api:(0,r.x4)("business")},{title:"Исторические романы",api:(0,r.x4)("historical fiction")},{title:"Классическая литература",api:(0,r.x4)("classics")}],a=()=>{const{categoriesLimit:o}=(0,r.D8)();return(0,i.jsxs)("section",{children:[n.slice(0,o).map(o=>(0,i.jsx)(l.$o,{shelfTitle:o.title,api:o.api},o.title)),n.length>=o&&(0,i.jsx)(s.dT,{}),n.length<o&&(0,i.jsx)(s.gh,{})]})}}}]);
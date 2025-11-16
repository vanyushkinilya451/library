(()=>{"use strict";var e,t,o={1307:(e,t,o)=>{o.d(t,{PA:()=>l,VM:()=>c,Lx:()=>a,y4:()=>d,DY:()=>s,oA:()=>u});var r=o(5307),n=o(2244),i=function(e,t,o,r){return new(o||(o=Promise))(function(n,i){function s(e){try{d(r.next(e))}catch(e){i(e)}}function a(e){try{d(r.throw(e))}catch(e){i(e)}}function d(e){var t;e.done?n(e.value):(t=e.value,t instanceof o?t:new o(function(e){e(t)})).then(s,a)}d((r=r.apply(e,t||[])).next())})};const s=(0,r.zD)("auth/registerUser",(e,t)=>i(void 0,void 0,void 0,function*(){try{const{error:o,data:r}=yield n.ND.auth.signUp({email:e.email,password:e.password});return o?t.rejectWithValue(o):{data:r}}catch(e){return t.rejectWithValue(e)}})),a=(0,r.zD)("auth/loginUser",(e,t)=>i(void 0,void 0,void 0,function*(){try{const{error:o,data:r}=yield n.ND.auth.signInWithPassword({email:e.email,password:e.password});return o?t.rejectWithValue(o):{data:r}}catch(e){return t.rejectWithValue(e)}})),d=(0,r.zD)("auth/logoutUser",()=>i(void 0,void 0,void 0,function*(){const{error:e}=yield n.ND.auth.signOut();return{error:e}})),l=(0,r.zD)("auth/getUserAndSession",(e,t)=>i(void 0,void 0,void 0,function*(){try{const{data:e,error:o}=yield n.ND.auth.getUser(),{data:r,error:i}=yield n.ND.auth.getSession();return o?t.rejectWithValue(o):i?t.rejectWithValue(i):{userData:e,sessionData:r}}catch(e){return t.rejectWithValue(e)}})),c=(0,r.zD)("auth/getUserProfile",(e,t)=>i(void 0,void 0,void 0,function*(){try{const{data:o,error:r}=yield n.ND.from("profiles").select("*").eq("user_id",e);return r?t.rejectWithValue(r):{data:o}}catch(e){return t.rejectWithValue(e)}})),u=(0,r.Z0)({name:"user",initialState:{user:null,session:null,error:"",isLoading:!1,profile:null},reducers:{},extraReducers(e){e.addCase(s.pending,e=>{e.isLoading=!0}),e.addCase(s.fulfilled,(e,t)=>{e.user=t.payload.data.user,e.session=t.payload.data.session,e.isLoading=!1,e.error=""}),e.addCase(s.rejected,(e,t)=>{var o;e.isLoading=!1,e.error=(null===(o=t.error)||void 0===o?void 0:o.message)||"Произошла ошибка при регистрации"}),e.addCase(a.pending,e=>{e.isLoading=!0}),e.addCase(a.fulfilled,(e,t)=>{e.user=t.payload.data.user,e.session=t.payload.data.session,e.isLoading=!1,e.error=""}),e.addCase(a.rejected,(e,t)=>{var o;e.isLoading=!1,e.error=(null===(o=t.error)||void 0===o?void 0:o.message)||"Произошла ошибка при входе"}),e.addCase(d.pending,e=>{e.isLoading=!0}),e.addCase(d.fulfilled,e=>{e.user=null,e.session=null,e.isLoading=!1,e.profile=null,e.error=""}),e.addCase(d.rejected,(e,t)=>{var o;e.isLoading=!1,e.error=(null===(o=t.error)||void 0===o?void 0:o.message)||"Произошла ошибка при выходе",e.profile=null,e.error="",e.profile=null}),e.addCase(l.pending,e=>{e.isLoading=!0}),e.addCase(l.fulfilled,(e,t)=>{e.user=t.payload.userData.user,e.session=t.payload.sessionData.session,e.isLoading=!1,e.error=""}),e.addCase(l.rejected,(e,t)=>{var o;e.isLoading=!1,e.error=(null===(o=t.error)||void 0===o?void 0:o.message)||"Произошла ошибка при получении пользователя и сессии"}),e.addCase(c.pending,e=>{e.isLoading=!0}),e.addCase(c.fulfilled,(e,t)=>{e.profile=t.payload.data[0],e.error="",e.isLoading=!1}),e.addCase(c.rejected,(e,t)=>{var o;e.isLoading=!1,e.profile=null,e.error=(null===(o=t.error)||void 0===o?void 0:o.message)||"Произошла ошибка при получении профиля"})}}).reducer},3196:(e,t,o)=>{var r=o(4848),n=o(6540),i=o(5338),s=o(1468),a=o(2600),d=o(5307),l=o(6983),c=o(4577),u=o(1307);const h=(0,d.U1)({reducer:{user:u.oA,theme:c.Y,[l.W2.reducerPath]:l.W2.reducer,[l.Dp.reducerPath]:l.Dp.reducer},middleware:e=>e().concat(l.W2.middleware).concat(l.Dp.middleware)});var p=o(888),f=o(2244),g=o(4894),m=o(7581);const x=({children:e})=>{const t="light"===(0,f.GV)(e=>e.theme)?g._k:g.a5;return(0,r.jsxs)(m.NP,{theme:t,children:[(0,r.jsx)(g.kH,{theme:t}),(0,r.jsx)(p.l$,{containerStyle:{zIndex:99999}}),e]})};var y=o(5227);i.createRoot(document.getElementById("root")).render((0,r.jsx)(n.StrictMode,{children:(0,r.jsx)(()=>(0,r.jsx)(s.Kq,{store:h,children:(0,r.jsx)(x,{children:(0,r.jsx)(a.p,{router:y.Q})})}),{})}))},3847:(e,t,o)=>{o.d(t,{B:()=>d,H:()=>i});var r=o(6540),n=o(2244);const i=({id:e})=>{const[t,o]=(0,r.useState)(null);return(0,r.useEffect)(()=>{var t,r,i,s;t=void 0,r=void 0,s=function*(){const t=yield fetch(`${n.aH.URLS.AUTHOR}/${e}.json`),r=yield t.json();o(r)},new((i=void 0)||(i=Promise))(function(e,o){function n(e){try{d(s.next(e))}catch(e){o(e)}}function a(e){try{d(s.throw(e))}catch(e){o(e)}}function d(t){var o;t.done?e(t.value):(o=t.value,o instanceof i?o:new i(function(e){e(o)})).then(n,a)}d((s=s.apply(t,r||[])).next())})},[e]),{author:t}};var s=o(4848),a=o(4894);const d=({className:e="cover-image",onClick:t,id:o,coverSize:i="M",skeletonHeight:d="180px",objectFit:l="contain"})=>{const[c,u]=(0,r.useState)(!0),h=(0,r.useRef)(null),p=`${n.aH.URLS.AUTHOR_IMAGE}${o}-${i}.jpg`;return(0,r.useEffect)(()=>{var e,t,o,r;e=void 0,t=void 0,r=function*(){(yield fetch(p,{method:"HEAD"})).ok||u(!1)},new((o=void 0)||(o=Promise))(function(n,i){function s(e){try{d(r.next(e))}catch(e){i(e)}}function a(e){try{d(r.throw(e))}catch(e){i(e)}}function d(e){var t;e.done?n(e.value):(t=e.value,t instanceof o?t:new o(function(e){e(t)})).then(s,a)}d((r=r.apply(e,t||[])).next())})},[p]),(0,s.jsxs)(s.Fragment,{children:[c&&(0,s.jsx)(a.jt,{height:d}),(0,s.jsx)("img",{ref:h,onClick:t,className:e,src:p,alt:"cover",style:{display:c?"none":"block",width:"100%",height:"100%",objectFit:l},onLoad:()=>{if(u(!1),h.current){const e=h.current;if(0===e.naturalWidth||0===e.naturalHeight)return;if(e.naturalWidth<10||e.naturalHeight<10)return}},onError:()=>{u(!1)}})]})}},4577:(e,t,o)=>{o.d(t,{s:()=>a,Y:()=>d});var r=o(5307);const n=localStorage.getItem("theme"),i=null!=n?n:"light",s=(0,r.Z0)({name:"theme",initialState:i,reducers:{switchTheme:e=>{const t="light"===e?"dark":"light";return localStorage.setItem("theme",t),t}}}),{switchTheme:a}=s.actions,d=s.reducer},5227:(e,t,o)=>{o.d(t,{b:()=>ge,Q:()=>ve});var r=o(4848),n=o(5920),i=o(4894),s=o(2244),a=o(7581);const d=a.I4.div`
  height: 100%;
  flex: 0 0 50%;

  @media (max-width: ${(0,s.st)("breakpoints","lg")}) {
    z-index: 0;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
  }
`,l=a.I4.section`
  display: flex;
  position: relative;
  width: 100%;
  height: 100vh;
  height: 100dvh;
  justify-content: center;
  align-items: center;
`,c=a.I4.div`
  z-index: 1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(0,s.st)("colors","background")};

  @media (max-width: ${(0,s.st)("breakpoints","lg")}) {
    width: 100%;
    height: 97%;
  }
`;var u=o(1307),h=o(6540);const p=({children:e})=>{const t=(0,s.jL)();return(0,h.useEffect)(()=>{t((0,u.PA)())},[]),(0,r.jsx)(r.Fragment,{children:e})};var f=o(3882);const g=({debouncedDelay:e=500})=>{const[t,o]=(0,h.useState)(""),[r,n]=(0,h.useState)(),[i,a]=(0,h.useState)(),d=(0,s.d7)(t,e);return(0,h.useEffect)(()=>{if(!d.trim())return;const e=d.toLowerCase().replace(" ","+");!function(){var t,o,r,i;t=this,o=void 0,i=function*(){try{const t=yield fetch(`${s.aH.URLS.SEARCH_BOOKS}?q=${e}&limit=${s.aH.LIMITS.SEARCH_LIMIT}`),o=yield fetch(`${s.aH.URLS.SEARCH_AUTHORS}?q=${e}&limit=${s.aH.LIMITS.SEARCH_LIMIT}`);if(t.ok)if(o.ok){const{docs:e}=yield t.json();n(e);const{docs:r}=yield o.json();a(r)}else console.error("Ошибки поиска авторов",o.text());else console.error("Ошибки поиска книг",t.text())}catch(e){console.error(e)}},new((r=void 0)||(r=Promise))(function(e,n){function s(e){try{d(i.next(e))}catch(e){n(e)}}function a(e){try{d(i.throw(e))}catch(e){n(e)}}function d(t){var o;t.done?e(t.value):(o=t.value,o instanceof r?o:new r(function(e){e(o)})).then(s,a)}d((i=i.apply(t,o||[])).next())})}()},[d]),{handleSearchValue:e=>{o(e.target.value)},search:t,filteredBooks:null==r?void 0:r.filter(e=>e.cover_edition_key),authors:i}};var m=o(3847),x=o(6983);const y=({books:e,authors:t})=>{const o=(0,n.Zp)();return(0,r.jsxs)(w,{children:[e.length?(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(O,{children:e.map(e=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(L,{children:(0,r.jsx)(E,{children:(0,r.jsxs)(C,{onMouseDown:()=>{var t;t=e.cover_edition_key,o(ge.LINKS.BOOK(t))},children:[(0,r.jsxs)(b,{children:[(0,r.jsx)(A,{children:e.title}),(0,r.jsx)(P,{children:e.author_name})]}),e.cover_i?(0,r.jsx)(j,{children:(0,r.jsx)(x.ln,{cover_i:e.cover_i,size:"M",skeletonHeight:"65px"})}):""]})})}),(0,r.jsx)(k,{})]},e.key))})}):null,t.length?(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(v,{children:t.map(e=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(L,{children:(0,r.jsx)(E,{children:(0,r.jsxs)(C,{onMouseDown:()=>{var t;t=e.key,o(ge.LINKS.AUTHOR(t))},children:[(0,r.jsxs)(b,{children:[(0,r.jsx)(A,{children:e.name}),(0,r.jsx)(P,{children:e.personal_name})]}),(0,r.jsx)(j,{children:(0,r.jsx)(m.B,{id:e.key,coverSize:"S",skeletonHeight:"65px",objectFit:"cover"})})]})})}),(0,r.jsx)(k,{})]},e.key))})}):null,e.length||t.length?null:(0,r.jsx)(S,{children:"Ничего не найдено"})]})},v=a.I4.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
`,b=a.I4.div`
  margin-right: 12px;
  width: 100%;
  flex: 1;
`,j=a.I4.div`
  width: 45px;
  height: 65px;
  border-radius: ${(0,s.st)("borderRadius","sm")};
  overflow: hidden;
  box-shadow: ${(0,s.st)("shadows","card")};
`,k=a.I4.hr`
  margin: 0;
  padding: 0;
  width: 100%;
  border: none;
  height: 1px;
  background: ${(0,s.st)("colors","textPrimary")};
  opacity: 0.08;
`,S=a.I4.p`
  border-style: none;
  text-align: center;
  padding: 20px;
  width: 100%;
  color: ${(0,s.st)("colors","textPrimary")};
  opacity: 0.6;
  font-style: italic;
  margin: 0;
`,w=a.I4.div`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: ${(0,s.st)("colors","background")};
  border-radius: ${(0,s.st)("borderRadius","md")};
  z-index: 1000;
  width: 100%;
  box-shadow: ${(0,s.st)("shadows","modal")};

  @media (max-width: ${(0,s.st)("breakpoints","sm")}) {
    width: 85vw;
  }
`,I=a.I4.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
`,$=a.I4.li`
  list-style: none;
`,O=(0,a.I4)(I)``,L=(0,a.I4)($)``,E=(0,a.I4)(I)``,R=(0,a.I4)($)`
  user-select: none;
`,A=(0,a.I4)(R)`
  font-weight: 600;
  font-size: ${(0,s.st)("fontSizes","md")};
  color: ${(0,s.st)("colors","textPrimary")};
  margin-bottom: 4px;
  line-height: 1.3;
`,P=(0,a.I4)(R)`
  font-weight: 500;
  font-style: italic;
  font-size: ${(0,s.st)("fontSizes","md")};
  color: ${(0,s.st)("colors","textSecondary")};
`,C=a.I4.button`
  width: 100%;
  border: none;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  background: transparent;
  cursor: pointer;
  transition: ${(0,s.st)("transitions","colors")};

  &:hover {
    background-color: ${(0,s.st)("colors","backgroundSecondary")};
  }

  &:active {
    background-color: ${(0,s.st)("colors","backgroundSecondary")};
  }
`,_=()=>{const{handleSearchValue:e,search:t,filteredBooks:o,authors:n}=g({debouncedDelay:500}),{isModalOpen:i,openModal:a,closeModal:d}=(0,s.hS)();return(0,r.jsxs)(H,{children:[(0,r.jsx)(T,{}),(0,r.jsx)(N,{placeholder:"Поиск книг...",value:t,onChange:e,onFocus:a,onBlur:d}),(o||n)&&i&&(0,r.jsx)(y,{books:o||[],authors:n||[]})]})},T=(0,a.I4)(f.p8)`
  position: absolute;
  height: 16px;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  width: min-content;
  fill: ${(0,s.st)("colors","textPrimary")};
  opacity: 0.4;
  z-index: 2;
  transition: ${(0,s.st)("transitions","colors")};
`,H=a.I4.div`
  position: relative;
  width: 40%;
  margin: 0 auto;
  height: 36px;

  @media (max-width: ${(0,s.st)("breakpoints","md")}) {
    font-size: ${(0,s.st)("fontSizes","sm")};
    margin: 0 10px;
  }

  @media (max-width: ${(0,s.st)("breakpoints","sm")}) {
    width: 100%;
  }
`,N=a.I4.input`
  min-width: 200px;
  width: 100%;
  height: 100%;
  border: none;
  border-radius: ${(0,s.st)("borderRadius","md")};
  font-size: ${(0,s.st)("fontSizes","md")};
  padding: 8px 12px 8px 40px;
  outline: none;
  color: ${(0,s.st)("colors","textPrimary")};
  background: ${(0,s.st)("colors","background")};
  transition: ${(0,s.st)("transitions","colors")};
  box-shadow: ${(0,s.st)("shadows","card")};

  &:focus {
    border-color: ${(0,s.st)("colors","primary")};
    box-shadow: ${(0,s.st)("shadows","hoverLift")};
    background: ${(0,s.st)("colors","background")};
  }

  &:focus + ${T} {
    fill: ${(0,s.st)("colors","primary")};
  }

  &::placeholder {
    color: ${(0,s.st)("colors","textPrimary")};
  }
`,M=({isLoading:e,user:t})=>{const o=(0,s.jL)(),a=(0,n.Zp)();return!t&&e?(0,r.jsx)(i.jt,{width:"200px",height:"30px",margin:"0 20px"}):t?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(X,{to:ge.LINKS.MYBOOKS,children:"Мои книги"}),(0,r.jsx)(X,{to:ge.LINKS.PROFILE,children:"Профиль"}),(0,r.jsx)(ee,{onClick:()=>{o((0,u.y4)()),a(ge.LINKS.LOGIN)},children:"Выйти"})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(X,{to:ge.LINKS.LOGIN,children:"Войти"}),(0,r.jsx)(X,{to:ge.LINKS.REGISTER,children:"Зарегистрироваться"})]})},D=({isLoading:e,user:t})=>{const o=(0,h.useRef)(null),a=(0,h.useRef)(null),{isModalOpen:d,closeModal:l,toggleModal:c}=(0,s.hS)();(0,s.Ls)([o,a],l);const p=(0,s.jL)(),f=(0,n.Zp)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(G,{onClick:c,ref:a,children:[(0,r.jsx)(K,{line:"first",isDropdown:d}),(0,r.jsx)(K,{line:"second",isDropdown:d}),(0,r.jsx)(K,{line:"third",isDropdown:d})]}),(0,r.jsx)(z,{ref:o,onClick:l,isOpen:d,children:e?(0,r.jsx)(i.jt,{width:"200px",height:"30px",margin:"0 20px"}):t||e?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(F,{to:ge.LINKS.HOME,children:"Главная"}),(0,r.jsx)(F,{to:ge.LINKS.CATEGORIES,children:"Категории"}),(0,r.jsx)(F,{to:ge.LINKS.PROFILE,children:"Профиль"}),(0,r.jsx)(F,{to:ge.LINKS.MYBOOKS,children:"Мои книги"}),(0,r.jsx)(W,{onClick:()=>{p((0,u.y4)()),f(ge.LINKS.LOGIN)},children:"Выйти"})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(F,{to:ge.LINKS.HOME,children:"Главная"}),(0,r.jsx)(F,{to:ge.LINKS.CATEGORIES,children:"Категории"}),(0,r.jsx)(F,{to:ge.LINKS.LOGIN,children:"Войти"}),(0,r.jsx)(F,{to:ge.LINKS.REGISTER,children:"Зарегистрироваться"})]})})]})},z=a.Ay.div`
  position: absolute;
  top: 60px;
  right: 20px;
  width: min-content;
  display: flex;
  flex-direction: column;
  background-color: ${(0,s.st)("colors","background")};
  border-radius: ${(0,s.st)("borderRadius","lg")};
  box-shadow: ${(0,s.st)("shadows","modal")};
  z-index: ${(0,s.st)("zIndices","modal")};
  transition: all 0.2s ease-in-out;
  transform-origin: top right;
  opacity: ${({isOpen:e})=>e?1:0};
  transform: ${({isOpen:e})=>e?"scale(1) translateY(0)":"scale(0.95) translateY(-10px)"};
  pointer-events: ${({isOpen:e})=>e?"auto":"none"};

  @media (max-width: ${(0,s.st)("breakpoints","sm")}) {
    display: flex;
    flex-direction: column;
  }

  :first-child {
    border-top-right-radius: ${(0,s.st)("borderRadius","lg")};
    border-top-left-radius: ${(0,s.st)("borderRadius","lg")};
  }
`,B=a.AH`
  color: ${(0,s.st)("colors","textPrimary")};
  padding: 0.75rem 2.5rem;
  white-space: nowrap;
  text-decoration: none;
  font-weight: ${(0,s.st)("fontWeights","medium")};
  font-size: ${(0,s.st)("fontSizes","md")};
  transition: ${(0,s.st)("transitions","colors")};
  cursor: pointer;
  text-align: left;

  &.active {
    background-color: ${(0,s.st)("colors","primaryLight")};
    color: ${(0,s.st)("colors","textWhite")};
  }

  &:hover {
    background-color: ${(0,s.st)("colors","backgroundSecondary")};
  }
`,F=(0,a.Ay)(n.k2)`
  ${B}
`,W=a.Ay.button`
  ${B}
  border-style: none;
  color: ${(0,s.st)("colors","danger")};
`,G=a.Ay.button`
  display: none;
  width: 32px;
  height: 32px;
  gap: 0.4rem;
  padding: 0;
  background: transparent;
  border: none;
  cursor: pointer;

  @media (max-width: ${(0,s.st)("breakpoints","sm")}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`,K=a.Ay.span`
  width: 24px;
  height: 2px;
  background-color: ${(0,s.st)("colors","textWhite")};
  border-radius: ${(0,s.st)("borderRadius","xs")};
  transition: all 0.3s ease;
  ${({isDropdown:e,line:t})=>e&&"first"===t&&"\n      transform: translateY(8px) rotate(45deg);\n    "}
  ${({isDropdown:e,line:t})=>e&&"second"===t&&"\n      opacity: 0;\n      transform: scaleX(0);\n    "}
    ${({isDropdown:e,line:t})=>e&&"third"===t&&"\n      transform: translateY(-8px) rotate(-45deg);\n    "};
`,q=()=>{const{user:e,isLoading:t}=(0,s.GV)(e=>e.user);return(0,r.jsxs)(U,{children:[(0,r.jsx)(V,{to:ge.LINKS.HOME,children:(0,r.jsx)(Y,{})}),(0,r.jsxs)(Q,{children:[(0,r.jsx)(X,{to:ge.LINKS.HOME,children:"Главная"}),(0,r.jsx)(X,{to:ge.LINKS.CATEGORIES,children:"Категории"})]}),(0,r.jsx)(_,{}),(0,r.jsxs)(Z,{children:[(0,r.jsx)(i.UW,{}),(0,r.jsx)(Q,{children:(0,r.jsx)(M,{isLoading:t,user:e})})]}),(0,r.jsx)(D,{isLoading:t,user:e})]})},U=a.Ay.nav`
  z-index: ${(0,s.st)("zIndices","overlay")};
  background: ${(0,s.st)("gradients","primary")};
  position: sticky;
  top: 0;
  box-shadow: ${(0,s.st)("shadows","nav")};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${(0,s.st)("spacing","sm")} ${(0,s.st)("spacing","md")};
  height: min-content;
  gap: 5px;
  transition: ${(0,s.st)("transitions","colors")};

  @media (max-width: ${(0,s.st)("breakpoints","sm")}) {
    justify-content: left;
  }
`,V=(0,a.Ay)(n.N_)`
  display: block;
  height: 30px;
  width: 30px;

  @media (max-width: ${(0,s.st)("breakpoints","sm")}) {
    display: none;
  }
`,Y=(0,a.Ay)(f.uP)`
  height: 100%;
  width: 100%;
`,Q=a.Ay.div`
  display: flex;
  align-items: center;

  @media (max-width: ${(0,s.st)("breakpoints","sm")}) {
    display: none;
  }
`,Z=a.Ay.div`
  display: flex;
  align-items: center;
  gap: ${(0,s.st)("spacing","md")};
`,J=a.AH`
  color: ${(0,s.st)("colors","textWhite")};
  white-space: nowrap;
  margin: 0 10px;
  font-weight: ${(0,s.st)("fontWeights","medium")};
  font-size: ${(0,s.st)("fontSizes","md")};
  text-decoration: none;
  position: relative;
  transition: ${(0,s.st)("transitions","colors")};

  @media (max-width: ${(0,s.st)("breakpoints","lg")}) {
    font-size: ${(0,s.st)("fontSizes","sm")};
    margin: 0 5px;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 0%;
    height: 2px;
    opacity: 0;
    background: ${(0,s.st)("colors","textWhite")};
    transition: all 0.3s ease;
  }

  &.active {
    &::after {
      width: 80%;
      opacity: 1;
    }
    color: ${(0,s.st)("colors","textWhite")};
  }

  &:hover {
    opacity: ${(0,s.st)("opacity","hover")};
  }
`,X=(0,a.Ay)(n.k2)`
  ${J}
`,ee=a.Ay.button`
  ${J}
  cursor: pointer;
  border-style: none;
`,te=a.I4.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 5%;

  @media (max-width: ${(0,s.st)("breakpoints","lg")}) {
    padding-left: ${(0,s.st)("spacing","md")};
  }
`,oe=(0,h.lazy)(()=>o.e(619).then(o.bind(o,2619)).then(({HomePage:e})=>({default:e}))),re=(0,h.lazy)(()=>o.e(909).then(o.bind(o,7909)).then(({Categories:e})=>({default:e}))),ne=(0,h.lazy)(()=>o.e(703).then(o.bind(o,4703)).then(({BookPage:e})=>({default:e}))),ie=(0,h.lazy)(()=>o.e(724).then(o.bind(o,1724)).then(({AuthorPage:e})=>({default:e}))),se=(0,h.lazy)(()=>o.e(415).then(o.bind(o,5415)).then(({MyBooks:e})=>({default:e}))),ae=(0,h.lazy)(()=>o.e(397).then(o.bind(o,2397)).then(({ProfilePage:e})=>({default:e}))),de=(0,h.lazy)(()=>o.e(235).then(o.bind(o,3235)).then(({NotFoundPage:e})=>({default:e}))),le=(0,h.lazy)(()=>o.e(242).then(o.bind(o,9242)).then(({LoginForm:e})=>({default:e}))),ce=(0,h.lazy)(()=>o.e(242).then(o.bind(o,9242)).then(({RegisterForm:e})=>({default:e}))),ue=(0,h.lazy)(()=>o.e(242).then(o.bind(o,9242)).then(({ChangePasswordForm:e})=>({default:e}))),he=(0,h.lazy)(()=>o.e(242).then(o.bind(o,9242)).then(({ResetPasswordForm:e})=>({default:e}))),pe=(0,h.lazy)(()=>o.e(242).then(o.bind(o,9242)).then(({VerifyEmail:e})=>({default:e}))),fe=(0,h.lazy)(()=>o.e(242).then(o.bind(o,9242)).then(({VerifyResetPassword:e})=>({default:e}))),ge={PATHS:{HOME:"",CATEGORIES:"categories",BOOK:"book/:bookId",AUTHOR:"author/:authorId",MYBOOKS:"mybooks",PROFILE:"profile",LOGIN:"login",REGISTER:"register",VERIFY_EMAIL:"verify-email",VERIFY_RESET_PASSWORD:"verify-reset-password",RESET_PASSWORD:"reset-password",CHANGE_PASSWORD:"change-password"},LINKS:{HOME:"/",CATEGORIES:"/categories",BOOK:(e=":bookId")=>`/book/${e}`,AUTHOR:(e=":authorId")=>`/author/${e}`,MYBOOKS:"/mybooks",PROFILE:"/profile",LOGIN:"/auth/login",REGISTER:"/auth/register",VERIFY_EMAIL:"/auth/verify-email",VERIFY_RESET_PASSWORD:"/auth/verify-reset-password",RESET_PASSWORD:"/auth/reset-password",CHANGE_PASSWORD:"/auth/change-password"}},me=[{index:!0,Component:oe},{path:ge.PATHS.CATEGORIES,Component:re},{path:ge.PATHS.BOOK,Component:ne},{path:ge.PATHS.AUTHOR,Component:ie}],xe=[{path:ge.PATHS.MYBOOKS,Component:se},{path:ge.PATHS.PROFILE,Component:ae}],ye=[{path:ge.PATHS.LOGIN,Component:le},{path:ge.PATHS.REGISTER,Component:ce},{path:ge.PATHS.VERIFY_EMAIL,Component:pe},{path:ge.PATHS.VERIFY_RESET_PASSWORD,Component:fe},{path:ge.PATHS.RESET_PASSWORD,Component:he},{path:ge.PATHS.CHANGE_PASSWORD,Component:ue}],ve=(0,n.Ge)([{path:"/",Component:()=>(0,r.jsxs)(p,{children:[(0,r.jsx)(q,{}),(0,r.jsx)(te,{children:(0,r.jsx)(n.sv,{})})]}),children:[...me,{Component:()=>{const{user:e,isLoading:t}=(0,s.GV)(e=>e.user);return t&&!e?(0,r.jsx)(i.l9,{}):t||e?(0,r.jsx)(n.sv,{}):(0,r.jsx)(n.C5,{to:ge.LINKS.LOGIN,replace:!0})},children:xe}]},{path:"/auth",Component:()=>(0,r.jsxs)(l,{children:[(0,r.jsx)(c,{children:(0,r.jsx)(n.sv,{})}),(0,r.jsx)(d,{children:(0,r.jsx)(i.N4,{})})]}),children:ye},{path:"*",Component:de}])},6983:(e,t,o)=>{o.d(t,{ln:()=>y,W2:()=>s,Dp:()=>u,J3:()=>f,ry:()=>p,iw:()=>d,f0:()=>a,TR:()=>l});var r=o(5816),n=o(9189),i=o(2244);const s=(0,r.xP)({reducerPath:"openlibrary",baseQuery:(0,n.cw)({baseUrl:`${i.aH.URLS.BASE_URL}`}),endpoints:e=>({getBookById:e.query({query:e=>`/books/${e}.json`}),getBookAdditionalInfo:e.query({query:e=>`/search.json?q=${e}`,transformResponse:e=>e.docs[0]}),getBooksByCategory:e.query({query:e=>`${e}&limit=${i.aH.LIMITS.SHELF_LIMIT}`,transformResponse:e=>e.docs})})}),{useGetBookByIdQuery:a,useGetBookAdditionalInfoQuery:d,useGetBooksByCategoryQuery:l}=s;var c=function(e,t,o,r){return new(o||(o=Promise))(function(n,i){function s(e){try{d(r.next(e))}catch(e){i(e)}}function a(e){try{d(r.throw(e))}catch(e){i(e)}}function d(e){var t;e.done?n(e.value):(t=e.value,t instanceof o?t:new o(function(e){e(t)})).then(s,a)}d((r=r.apply(e,t||[])).next())})};const u=(0,r.xP)({reducerPath:"supabaseApi",baseQuery:(0,n.Zl)(),tagTypes:["MyBooks"],endpoints:e=>({getMyBooks:e.query({queryFn:e=>c(void 0,[e],void 0,function*({userId:e,from:t,select:o,bookStatus:r}){const{data:n,error:s}=yield i.ND.from(t).select(o).eq("user_id",e).eq("book_status",r);return s?{error:s.message}:n?{data:n}:{data:[]}}),providesTags:["MyBooks"]}),getAllMyBooks:e.query({queryFn:e=>c(void 0,[e],void 0,function*({userId:e,from:t,select:o}){const{data:r,error:n}=yield i.ND.from(t).select(o).eq("user_id",e);return n?{error:n.message}:r?{data:r}:{data:[]}}),providesTags:["MyBooks"]}),changeMyBooks:e.mutation({queryFn:e=>c(void 0,[e],void 0,function*({from:e,userId:t,bookId:o,bookStatus:r,method:n}){switch(n){case"insert":{const{error:n}=yield i.ND.from(e).insert({book_id:o,user_id:t,book_status:r});return n?{error:n.message}:{data:void 0}}case"update":{const{error:n}=yield i.ND.from(e).update({book_status:r}).eq("book_id",o).eq("user_id",t);return n?{error:n.message}:{data:void 0}}case"delete":{const{error:r}=yield i.ND.from(e).delete().eq("book_id",o).eq("user_id",t);return r?{error:r.message}:{data:void 0}}}}),invalidatesTags:["MyBooks"],onQueryStarted:(e,t)=>c(void 0,void 0,void 0,function*(){var{userId:o,bookStatus:r,method:n}=e,i=function(e,t){var o={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(o[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(o[r[n]]=e[r[n]])}return o}(e,["userId","bookStatus","method"]),s=t.dispatch,a=t.queryFulfilled;const d=s(u.util.updateQueryData("getMyBooks",{from:"mybooks",bookStatus:r,userId:o,select:"book_id"},e=>{if("insert"===n)e.push({book_id:i.bookId,book_status:r});else if("delete"===n){const t=e.findIndex(e=>e.book_id===i.bookId);t>-1&&e.splice(t,1)}})),l=s(u.util.updateQueryData("getAllMyBooks",{from:"mybooks",userId:o,select:"book_id, book_status"},e=>{if("insert"===n)e.push({book_id:i.bookId,book_status:r});else if("update"===n){const t=e.findIndex(e=>e.book_id===i.bookId);t>-1&&(e[t].book_status=r)}else if("delete"===n){const t=e.findIndex(e=>e.book_id===i.bookId);t>-1&&e.splice(t,1)}}));try{yield a}catch(e){d.undo(),l.undo()}})})})}),{useGetMyBooksQuery:h,useGetAllMyBooksQuery:p,useChangeMyBooksMutation:f}=u;var g=o(4848),m=o(6540),x=o(4894);const y=({cover_id:e,cover_i:t,className:o="cover-image",onClick:r,size:n="M",skeletonHeight:s="180px",borderRadius:a="0px"})=>{const[d,l]=(0,m.useState)(!0),c=(0,m.useRef)(null),u=(({id:e,size:t="S"})=>`${i.aH.URLS.COVER}${e}-${t}.jpg`)({id:t||e,size:n});return(0,m.useEffect)(()=>{var e,t,o,r;e=void 0,t=void 0,r=function*(){(yield fetch(u,{method:"HEAD"})).ok||l(!1)},new((o=void 0)||(o=Promise))(function(n,i){function s(e){try{d(r.next(e))}catch(e){i(e)}}function a(e){try{d(r.throw(e))}catch(e){i(e)}}function d(e){var t;e.done?n(e.value):(t=e.value,t instanceof o?t:new o(function(e){e(t)})).then(s,a)}d((r=r.apply(e,t||[])).next())})},[u]),(0,g.jsxs)(g.Fragment,{children:[d&&(0,g.jsx)(x.jt,{height:s}),(0,g.jsx)("img",{ref:c,onClick:r,className:o,src:u,alt:"cover",style:{display:d?"none":"block",borderRadius:a,width:"100%",height:"100%"},onLoad:()=>{l(!1)},onError:()=>{l(!1)}})]})}}},r={};function n(e){var t=r[e];if(void 0!==t)return t.exports;var i=r[e]={exports:{}};return o[e].call(i.exports,i,i.exports,n),i.exports}n.m=o,e=[],n.O=(t,o,r,i)=>{if(!o){var s=1/0;for(c=0;c<e.length;c++){for(var[o,r,i]=e[c],a=!0,d=0;d<o.length;d++)(!1&i||s>=i)&&Object.keys(n.O).every(e=>n.O[e](o[d]))?o.splice(d--,1):(a=!1,i<s&&(s=i));if(a){e.splice(c--,1);var l=r();void 0!==l&&(t=l)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[o,r,i]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce((t,o)=>(n.f[o](e,t),t),[])),n.u=e=>e+".js",n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),t={},n.l=(e,o,r,i)=>{if(t[e])t[e].push(o);else{var s,a;if(void 0!==r)for(var d=document.getElementsByTagName("script"),l=0;l<d.length;l++){var c=d[l];if(c.getAttribute("src")==e){s=c;break}}s||(a=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.src=e),t[e]=[o];var u=(o,r)=>{s.onerror=s.onload=null,clearTimeout(h);var n=t[e];if(delete t[e],s.parentNode&&s.parentNode.removeChild(s),n&&n.forEach(e=>e(r)),o)return o(r)},h=setTimeout(u.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=u.bind(null,s.onerror),s.onload=u.bind(null,s.onload),a&&document.head.appendChild(s)}},n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="./",(()=>{var e={792:0};n.f.j=(t,o)=>{var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((o,n)=>r=e[t]=[o,n]);o.push(r[2]=i);var s=n.p+n.u(t),a=new Error;n.l(s,o=>{if(n.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.src;a.message="Loading chunk "+t+" failed.\n("+i+": "+s+")",a.name="ChunkLoadError",a.type=i,a.request=s,r[1](a)}},"chunk-"+t,t)}},n.O.j=t=>0===e[t];var t=(t,o)=>{var r,i,[s,a,d]=o,l=0;if(s.some(t=>0!==e[t])){for(r in a)n.o(a,r)&&(n.m[r]=a[r]);if(d)var c=d(n)}for(t&&t(o);l<s.length;l++)i=s[l],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(c)},o=self.webpackChunk=self.webpackChunk||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})(),n.nc=void 0;var i=n.O(void 0,[804,96],()=>n(3196));i=n.O(i)})();
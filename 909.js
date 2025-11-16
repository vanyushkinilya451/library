"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[909],{958:(i,t,e)=>{e.d(t,{$o:()=>L,bV:()=>o,KM:()=>l});var a=e(2244);const l=i=>i.length>a.aH.LIMITS.TITLE_CHAR_LIMIT?i.slice(0,a.aH.LIMITS.TITLE_CHAR_LIMIT)+"...":i,o=i=>i.length>a.aH.LIMITS.AUTHOR_CHAR_LIMIT?i.slice(0,a.aH.LIMITS.AUTHOR_CHAR_LIMIT)+"...":i;var r=e(4848),s=e(6983),n=e(3882),p=e(7581),x=e(6540),c=e(5227),h=e(5920);const d=({book:i})=>{const t=(0,h.Zp)(),{user:e,isLoading:n}=(0,a.GV)(i=>i.user),{data:p}=(0,s.ry)({userId:null==e?void 0:e.id,from:"mybooks",select:"book_id, book_status"}),{addToMyBooks:x,removeFromMyBooks:d}=(()=>{const{user:i}=(0,a.GV)(i=>i.user),[t]=(0,s.J3)();return{addToMyBooks:e=>{e&&(null==i?void 0:i.id)&&t({from:"mybooks",bookId:e,userId:i.id,bookStatus:"will_read",method:"insert"})},removeFromMyBooks:e=>{e&&(null==i?void 0:i.id)&&t({from:"mybooks",bookId:e,userId:i.id,bookStatus:"will_read",method:"delete"})}}})(),I=null==p?void 0:p.some(t=>t.book_id===i.cover_edition_key),k=i=>{t(c.b.LINKS.BOOK(i))};return(0,r.jsx)(g,{children:(0,r.jsxs)(m,{children:[(0,r.jsx)(u,{cover_id:i.cover_id,cover_i:i.cover_i,onClick:()=>k(i.cover_edition_key)}),(0,r.jsxs)(y,{children:[(0,r.jsx)(f,{onClick:()=>k(i.cover_edition_key),children:l(i.title)}),i.author_name&&(0,r.jsx)(b,{onClick:()=>{return e=i.author_key[0],void t(c.b.LINKS.AUTHOR(e));var e},children:o(i.author_name[0])}),I?(0,r.jsx)(v,{filled:!0,onClick:()=>d(i.cover_edition_key)}):e&&!n?(0,r.jsx)(v,{onClick:()=>x(i.cover_edition_key)}):null]})]})})},g=p.I4.div`
  width: 140px;
  flex: 0 0 auto;
  padding: 10px 10px 0 10px;
  scroll-snap-align: center;
  height: min-content;
`,m=p.I4.div`
  border-style: none;
  position: relative;
`,u=(0,p.I4)(s.ln)`
  width: 100%;
  height: 180px;
  cursor: pointer;
  transition: transform 0.15s linear;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
`,y=p.I4.div`
  padding: 10px 10px 0 10px;
`,f=p.I4.h5`
  font-weight: ${(0,a.st)("fontWeights","bold")};
  font-size: ${(0,a.st)("fontSizes","sm")};
  color: ${(0,a.st)("colors","textPrimary")};
  cursor: pointer;
  margin: 0;
  transition: ${(0,a.st)("transitions","colors")};

  &:hover {
    opacity: ${(0,a.st)("opacity","hover")};
  }
`,b=p.I4.p`
  font-size: ${(0,a.st)("fontSizes","sm")};
  color: ${(0,a.st)("colors","textSecondary")};
  margin: 0;
  cursor: pointer;
  transition: ${(0,a.st)("transitions","colors")};

  &:hover {
    opacity: ${(0,a.st)("opacity","hover")};
  }
`,v=(0,p.I4)(n.FE)`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 20px;
  height: 20px;
  cursor: pointer;
  transition: ${(0,a.st)("transitions","colors")};

  path {
    fill: ${({filled:i})=>i?(0,a.st)("colors","accent"):(0,a.st)("colors","textWhite")};
  }

  &:hover {
    opacity: ${(0,a.st)("opacity","hover")};
  }
`;var I=e(4894);const k=()=>(0,r.jsx)(w,{children:Array.from({length:10}).map((i,t)=>(0,r.jsxs)(_,{children:[(0,r.jsx)(S,{children:(0,r.jsx)(I.jt,{height:"180px"})}),(0,r.jsxs)(j,{children:[(0,r.jsx)(I.jt,{height:"1.5rem",margin:"10px 0"}),(0,r.jsx)(I.jt,{height:"1.5rem",margin:"10px 0"})]})]},`skeleton-${t}`))}),w=p.I4.div.attrs(()=>({className:"shelf__container"}))`
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
`,_=p.I4.div.attrs(()=>({className:"shelf__item"}))`
  width: 150px; /* из твоего CSS */
  flex: 0 0 auto;
  padding: 10px 10px 0 10px;
  scroll-snap-align: center;
  height: 300px;
  position: relative;
`,S=p.I4.div.attrs(()=>({className:"card"}))`
  border-style: none;
`,j=p.I4.div.attrs(()=>({className:"card__description"}))`
  padding: 10px 10px 0 10px;
`,L=({shelfTitle:i,api:t})=>{const{data:e,isLoading:l}=(0,s.TR)(t),{isScrolled:o,isScrollEnd:n,handleScrollRight:p,handleScrollLeft:c,bookshelf:h}=(i=>{const[t,e]=(0,x.useState)(!1),[l,o]=(0,x.useState)(!1),r=(0,x.useRef)(null);return(0,x.useEffect)(()=>{const i=()=>{r.current&&(e(r.current.scrollLeft>0),o(r.current.scrollLeft>r.current.scrollWidth-r.current.clientWidth-1))},t=r.current;return null==t||t.addEventListener("scroll",i),i(),()=>{null==t||t.removeEventListener("scroll",i)}},[i]),{isScrolled:t,isScrollEnd:l,handleScrollRight:()=>{r.current&&r.current.scrollBy({left:a.aH.LIMITS.SCROLL_DISTANCE,behavior:"smooth"})},handleScrollLeft:()=>{r.current&&r.current.scrollBy({left:-a.aH.LIMITS.SCROLL_DISTANCE,behavior:"smooth"})},bookshelf:r}})(l);return(0,r.jsxs)(T,{children:[(0,r.jsx)($,{children:i}),l?(0,r.jsx)(k,{}):(0,r.jsxs)(C,{ref:h,children:[null==e?void 0:e.map(i=>i.cover_edition_key&&(0,r.jsx)(d,{book:i},i.key)),o&&(0,r.jsx)(M,{position:"left",onClick:c,"aria-label":"Scroll Left",children:(0,r.jsx)(R,{})}),!n&&(0,r.jsx)(M,{position:"right",onClick:p,"aria-label":"Scroll Right",children:(0,r.jsx)(R,{})})]})]})},T=p.I4.article`
  margin: ${(0,a.st)("spacing","md")} 0;
  position: relative;
  height: min-content;
`,$=p.I4.h1`
  font-size: ${(0,a.st)("fontSizes","lg")};
  font-weight: ${(0,a.st)("fontWeights","bold")};
  color: ${(0,a.st)("colors","textPrimary")};
  margin: ${(0,a.st)("spacing","sm")} 0;
`,C=p.I4.div`
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
`,M=p.I4.button`
  position: absolute;
  background-color: transparent;
  width: 35px;
  height: 35px;
  top: 35%;
  border-style: none;
  cursor: pointer;
  z-index: ${(0,a.st)("zIndices","base")};
  transition: ${(0,a.st)("transitions","colors")};

  ${({position:i})=>"right"===i?"right: -15px;":"left: -15px; transform: rotate(180deg);"}

  &:hover {
    opacity: ${(0,a.st)("opacity","hover")};
  }
`,R=(0,p.I4)(n.i3)`
  width: 100%;
  height: 100%;
`},7909:(i,t,e)=>{e.r(t),e.d(t,{Categories:()=>n});var a=e(4848),l=e(2244),o=e(4894),r=e(958);const s=[{title:"Фэнтези",api:(0,l.x4)("fantasy")},{title:"Детективы",api:(0,l.x4)("mystery")},{title:"Романы",api:(0,l.x4)("romance")},{title:"Триллеры",api:(0,l.x4)("thriller")},{title:"Историческая литература",api:(0,l.x4)("historical fiction")},{title:"Биографии",api:(0,l.x4)("biography")},{title:"Научная литература",api:(0,l.x4)("science")},{title:"Психология",api:(0,l.x4)("psychology")},{title:"Поэзия",api:(0,l.x4)("poetry")},{title:"Драма",api:(0,l.x4)("drama")},{title:"Ужасы",api:(0,l.x4)("horror")},{title:"Приключения",api:(0,l.x4)("adventure")},{title:"Комиксы и графические романы",api:(0,l.x4)("graphic novels")},{title:"Детская литература",api:(0,l.x4)("children's literature")},{title:"Философия",api:(0,l.x4)("philosophy")},{title:"Экономика",api:(0,l.x4)("economics")},{title:"Политика",api:(0,l.x4)("politics")},{title:"Технологии",api:(0,l.x4)("technology")},{title:"Искусство",api:(0,l.x4)("art")},{title:"Путешествия",api:(0,l.x4)("travel")},{title:"Научная фантастика",api:(0,l.x4)("science fiction")},{title:"Классическая литература",api:(0,l.x4)("classic literature")},{title:"Современная литература",api:(0,l.x4)("contemporary literature")},{title:"Военная литература",api:(0,l.x4)("military fiction")},{title:"Западная литература",api:(0,l.x4)("western fiction")},{title:"Криминальная литература",api:(0,l.x4)("crime fiction")},{title:"Политический триллер",api:(0,l.x4)("political thriller")},{title:"Медицинский триллер",api:(0,l.x4)("medical thriller")},{title:"Юридический триллер",api:(0,l.x4)("legal thriller")},{title:"Психологический триллер",api:(0,l.x4)("psychological thriller")},{title:"Любовный роман",api:(0,l.x4)("romance novel")},{title:"Исторический роман",api:(0,l.x4)("historical romance")},{title:"Современный роман",api:(0,l.x4)("contemporary romance")},{title:"Паранормальный роман",api:(0,l.x4)("paranormal romance")},{title:"Молодежная литература",api:(0,l.x4)("young adult")},{title:"Подростковая литература",api:(0,l.x4)("teen fiction")},{title:"Детские сказки",api:(0,l.x4)("fairy tales")},{title:"Детские стихи",api:(0,l.x4)("children poetry")},{title:"Образовательная литература",api:(0,l.x4)("educational")},{title:"Учебная литература",api:(0,l.x4)("textbook")},{title:"Словари",api:(0,l.x4)("dictionary")},{title:"Энциклопедии",api:(0,l.x4)("encyclopedia")},{title:"Справочники",api:(0,l.x4)("reference")},{title:"Кулинария",api:(0,l.x4)("cooking")},{title:"Диеты и питание",api:(0,l.x4)("nutrition")},{title:"Здоровье и медицина",api:(0,l.x4)("health")},{title:"Фитнес и спорт",api:(0,l.x4)("fitness")},{title:"Йога",api:(0,l.x4)("yoga")},{title:"Медитация",api:(0,l.x4)("meditation")},{title:"Саморазвитие",api:(0,l.x4)("self-help")},{title:"Мотивация",api:(0,l.x4)("motivation")},{title:"Бизнес",api:(0,l.x4)("business")},{title:"Менеджмент",api:(0,l.x4)("management")},{title:"Маркетинг",api:(0,l.x4)("marketing")},{title:"Предпринимательство",api:(0,l.x4)("entrepreneurship")},{title:"Финансы",api:(0,l.x4)("finance")},{title:"Инвестиции",api:(0,l.x4)("investing")},{title:"Бухгалтерия",api:(0,l.x4)("accounting")},{title:"Право",api:(0,l.x4)("law")},{title:"Конституционное право",api:(0,l.x4)("constitutional law")},{title:"Уголовное право",api:(0,l.x4)("criminal law")},{title:"Гражданское право",api:(0,l.x4)("civil law")},{title:"Международное право",api:(0,l.x4)("international law")},{title:"Социология",api:(0,l.x4)("sociology")},{title:"Антропология",api:(0,l.x4)("anthropology")},{title:"Археология",api:(0,l.x4)("archaeology")},{title:"История",api:(0,l.x4)("history")},{title:"Древняя история",api:(0,l.x4)("ancient history")},{title:"Средневековая история",api:(0,l.x4)("medieval history")},{title:"Новая история",api:(0,l.x4)("modern history")},{title:"Всемирная история",api:(0,l.x4)("world history")},{title:"География",api:(0,l.x4)("geography")},{title:"Климатология",api:(0,l.x4)("climatology")},{title:"Экология",api:(0,l.x4)("ecology")},{title:"Охрана окружающей среды",api:(0,l.x4)("environmental protection")},{title:"Биология",api:(0,l.x4)("biology")},{title:"Генетика",api:(0,l.x4)("genetics")},{title:"Микробиология",api:(0,l.x4)("microbiology")},{title:"Ботаника",api:(0,l.x4)("botany")},{title:"Зоология",api:(0,l.x4)("zoology")},{title:"Химия",api:(0,l.x4)("chemistry")},{title:"Органическая химия",api:(0,l.x4)("organic chemistry")},{title:"Неорганическая химия",api:(0,l.x4)("inorganic chemistry")},{title:"Физика",api:(0,l.x4)("physics")},{title:"Квантовая физика",api:(0,l.x4)("quantum physics")},{title:"Астрофизика",api:(0,l.x4)("astrophysics")},{title:"Астрономия",api:(0,l.x4)("astronomy")},{title:"Космология",api:(0,l.x4)("cosmology")},{title:"Математика",api:(0,l.x4)("mathematics")},{title:"Алгебра",api:(0,l.x4)("algebra")},{title:"Геометрия",api:(0,l.x4)("geometry")},{title:"Тригонометрия",api:(0,l.x4)("trigonometry")},{title:"Исчисление",api:(0,l.x4)("calculus")},{title:"Статистика",api:(0,l.x4)("statistics")},{title:"Теория вероятностей",api:(0,l.x4)("probability theory")},{title:"Информатика",api:(0,l.x4)("computer science")},{title:"Программирование",api:(0,l.x4)("programming")},{title:"Искусственный интеллект",api:(0,l.x4)("artificial intelligence")},{title:"Машинное обучение",api:(0,l.x4)("machine learning")},{title:"Кибербезопасность",api:(0,l.x4)("cybersecurity")},{title:"Веб-разработка",api:(0,l.x4)("web development")},{title:"Мобильная разработка",api:(0,l.x4)("mobile development")},{title:"Базы данных",api:(0,l.x4)("databases")},{title:"Сетевая безопасность",api:(0,l.x4)("network security")},{title:"Операционные системы",api:(0,l.x4)("operating systems")},{title:"Архитектура программного обеспечения",api:(0,l.x4)("software architecture")},{title:"Дизайн пользовательского интерфейса",api:(0,l.x4)("user interface design")},{title:"UX дизайн",api:(0,l.x4)("user experience design")},{title:"Графический дизайн",api:(0,l.x4)("graphic design")},{title:"Веб-дизайн",api:(0,l.x4)("web design")},{title:"Типографика",api:(0,l.x4)("typography")},{title:"Фотография",api:(0,l.x4)("photography")},{title:"Кинематограф",api:(0,l.x4)("cinematography")},{title:"Музыка",api:(0,l.x4)("music")},{title:"Теория музыки",api:(0,l.x4)("music theory")},{title:"Композиция",api:(0,l.x4)("composition")},{title:"Театр",api:(0,l.x4)("theater")},{title:"Актерское мастерство",api:(0,l.x4)("acting")},{title:"Режиссура",api:(0,l.x4)("directing")},{title:"Скульптура",api:(0,l.x4)("sculpture")},{title:"Живопись",api:(0,l.x4)("painting")},{title:"Архитектура",api:(0,l.x4)("architecture")},{title:"Интерьерный дизайн",api:(0,l.x4)("interior design")},{title:"Ландшафтный дизайн",api:(0,l.x4)("landscape design")},{title:"Мода",api:(0,l.x4)("fashion")},{title:"Стиль и красота",api:(0,l.x4)("beauty")},{title:"Косметология",api:(0,l.x4)("cosmetology")},{title:"Парикмахерское искусство",api:(0,l.x4)("hairdressing")},{title:"Спорт",api:(0,l.x4)("sports")},{title:"Футбол",api:(0,l.x4)("football")},{title:"Баскетбол",api:(0,l.x4)("basketball")},{title:"Теннис",api:(0,l.x4)("tennis")},{title:"Бокс",api:(0,l.x4)("boxing")},{title:"Борьба",api:(0,l.x4)("wrestling")},{title:"Плавание",api:(0,l.x4)("swimming")},{title:"Легкая атлетика",api:(0,l.x4)("athletics")},{title:"Гимнастика",api:(0,l.x4)("gymnastics")},{title:"Лыжный спорт",api:(0,l.x4)("skiing")},{title:"Сноуборд",api:(0,l.x4)("snowboarding")},{title:"Серфинг",api:(0,l.x4)("surfing")},{title:"Альпинизм",api:(0,l.x4)("mountaineering")},{title:"Туризм",api:(0,l.x4)("tourism")},{title:"Экотуризм",api:(0,l.x4)("ecotourism")},{title:"Гастрономический туризм",api:(0,l.x4)("culinary tourism")},{title:"Культурный туризм",api:(0,l.x4)("cultural tourism")},{title:"Религия",api:(0,l.x4)("religion")},{title:"Христианство",api:(0,l.x4)("christianity")},{title:"Ислам",api:(0,l.x4)("islam")},{title:"Буддизм",api:(0,l.x4)("buddhism")},{title:"Иудаизм",api:(0,l.x4)("judaism")},{title:"Индуизм",api:(0,l.x4)("hinduism")},{title:"Мифология",api:(0,l.x4)("mythology")},{title:"Эзотерика",api:(0,l.x4)("esotericism")},{title:"Астрология",api:(0,l.x4)("astrology")},{title:"Нумерология",api:(0,l.x4)("numerology")},{title:"Таро",api:(0,l.x4)("tarot")},{title:"Языкознание",api:(0,l.x4)("linguistics")},{title:"Английский язык",api:(0,l.x4)("english language")},{title:"Русский язык",api:(0,l.x4)("russian language")},{title:"Испанский язык",api:(0,l.x4)("spanish language")},{title:"Французский язык",api:(0,l.x4)("french language")},{title:"Немецкий язык",api:(0,l.x4)("german language")},{title:"Китайский язык",api:(0,l.x4)("chinese language")},{title:"Японский язык",api:(0,l.x4)("japanese language")},{title:"Арабский язык",api:(0,l.x4)("arabic language")},{title:"Итальянский язык",api:(0,l.x4)("italian language")},{title:"Португальский язык",api:(0,l.x4)("portuguese language")},{title:"Корейский язык",api:(0,l.x4)("korean language")},{title:"Хинди",api:(0,l.x4)("hindi")},{title:"Перевод",api:(0,l.x4)("translation")},{title:"Лексикография",api:(0,l.x4)("lexicography")},{title:"Фонетика",api:(0,l.x4)("phonetics")},{title:"Морфология",api:(0,l.x4)("morphology")},{title:"Синтаксис",api:(0,l.x4)("syntax")},{title:"Семантика",api:(0,l.x4)("semantics")},{title:"Прагматика",api:(0,l.x4)("pragmatics")},{title:"Педагогика",api:(0,l.x4)("pedagogy")}],n=()=>{const{categoriesLimit:i}=(0,l.D8)();return(0,a.jsxs)("section",{children:[s.slice(0,i).map(i=>(0,a.jsx)(r.$o,{shelfTitle:i.title,api:i.api},i.title)),s.length>=i&&(0,a.jsx)(o.dT,{}),s.length<i&&(0,a.jsx)(o.gh,{})]})}}}]);
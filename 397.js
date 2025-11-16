"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[397],{2397:(t,e,s)=>{s.r(e),s.d(e,{ProfilePage:()=>O});var i=s(4848),o=s(6983),r=s(1307),n=s(6540),a=s(888),d=s(5920),l=s(2244),c=s(4894),x=s(7581),p=s(5227);const m=({closeModal:t})=>{const e=(0,l.GV)(t=>t.user.user),{profile:s}=(0,l.GV)(t=>t.user),[o,a]=(0,n.useState)(!1),[d,c]=(0,n.useState)(!1),x=(0,n.useRef)(null);(0,l.Ls)([x],O);const p=(0,l.jL)(),[m,M]=(0,n.useState)({firstname:(null==s?void 0:s.firstname)||"",lastname:(null==s?void 0:s.lastname)||"",birthdate:(null==s?void 0:s.birthdate)||"",gender:(null==s?void 0:s.gender)||"",patronymic:(null==s?void 0:s.patronymic)||""});function O(){c(!0),setTimeout(()=>{t()},300)}const E=t=>{M(Object.assign(Object.assign({},m),{[t.target.name]:t.target.value}))};return(0,i.jsx)(h,{isClosing:d,children:(0,i.jsxs)(f,{ref:x,onClick:t=>t.stopPropagation(),isClosing:d,children:[(0,i.jsxs)(u,{children:[(0,i.jsx)(g,{children:s?"Редактирование профиля":"Заполнения профиля"}),(0,i.jsx)(b,{onClick:O,children:(0,i.jsx)($,{children:"×"})})]}),(0,i.jsx)(y,{children:(0,i.jsxs)(j,{children:[(0,i.jsxs)(w,{children:[(0,i.jsxs)(v,{children:[(0,i.jsx)(k,{children:"Фамилия"}),(0,i.jsx)(z,{type:"text",placeholder:"Введите фамилию",name:"lastname",value:m.lastname,onChange:E})]}),(0,i.jsxs)(v,{children:[(0,i.jsx)(k,{children:"Имя"}),(0,i.jsx)(z,{type:"text",placeholder:"Введите имя",name:"firstname",value:m.firstname,onChange:E})]}),(0,i.jsxs)(v,{children:[(0,i.jsx)(k,{children:"Отчество"}),(0,i.jsx)(z,{type:"text",placeholder:"Введите отчество",name:"patronymic",value:m.patronymic,onChange:E})]}),(0,i.jsxs)(v,{children:[(0,i.jsx)(k,{children:"Дата рождения"}),(0,i.jsx)(z,{type:"date",name:"birthdate",value:m.birthdate,onChange:E})]})]}),(0,i.jsxs)(v,{children:[(0,i.jsx)(k,{children:"Пол"}),(0,i.jsxs)(S,{children:[(0,i.jsxs)(I,{children:[(0,i.jsx)(C,{type:"radio",name:"gender",value:"male",id:"male",checked:"male"===m.gender,onChange:E}),(0,i.jsxs)(_,{htmlFor:"male",children:[(0,i.jsx)(P,{}),"Мужской"]})]}),(0,i.jsxs)(I,{children:[(0,i.jsx)(C,{type:"radio",name:"gender",value:"female",id:"female",checked:"female"===m.gender,onChange:E}),(0,i.jsxs)(_,{htmlFor:"female",children:[(0,i.jsx)(P,{}),"Женский"]})]})]})]})]})}),(0,i.jsxs)(R,{children:[(0,i.jsx)(Y,{onClick:O,children:"Отмена"}),(0,i.jsx)(L,{onClick:()=>{return t=void 0,s=void 0,o=function*(){try{a(!0);const{error:t}=yield l.ND.from("profiles").upsert({user_id:null==e?void 0:e.id,firstname:m.firstname,lastname:m.lastname,patronymic:m.patronymic,birthdate:m.birthdate,gender:m.gender},{onConflict:"user_id",ignoreDuplicates:!1});t?console.error("Ошибка при сохранении профиля:",t):(O(),e&&p((0,r.VM)(e.id))),a(!1)}catch(t){console.error("Неожиданная ошибка:",t)}},new((i=void 0)||(i=Promise))(function(e,r){function n(t){try{d(o.next(t))}catch(t){r(t)}}function a(t){try{d(o.throw(t))}catch(t){r(t)}}function d(t){var s;t.done?e(t.value):(s=t.value,s instanceof i?s:new i(function(t){t(s)})).then(n,a)}d((o=o.apply(t,s||[])).next())});var t,s,i,o},disabled:o,children:s?"Сохранить изменения":"Сохранить профиль"})]})]})})},h=x.I4.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${(0,l.st)("zIndices","modal")};
  padding: 20px;
  animation: ${({isClosing:t})=>t?"fadeOut 0.3s ease-out":"fadeIn 0.3s ease-out"};

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`,f=x.I4.div`
  background: ${(0,l.st)("colors","background")};
  border-radius: ${(0,l.st)("borderRadius","xl")};
  box-shadow: ${(0,l.st)("shadows","modal")};
  max-width: 600px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  transition: all 0.3s ease-out;
  animation: ${({isClosing:t})=>t?"slideOut 0.3s ease-out":"slideIn 0.3s ease-out"};
  transform-origin: center;

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: scale(0.9) translateY(-20px);
    }
    to {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slideOut {
    from {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
    to {
      opacity: 0;
      transform: scale(0.9) translateY(-20px);
    }
  }
`,u=x.I4.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 30px 20px;
  border-bottom: 1px solid ${(0,l.st)("colors","secondary")};

  @media (max-width: ${(0,l.st)("breakpoints","sm")}) {
    padding: 10px 30px;
  }
`,g=x.I4.h2`
  font-size: ${(0,l.st)("fontSizes","xl")};
  font-weight: 700;
  color: ${(0,l.st)("colors","primaryLight")};
  margin: 0;

  @media (max-width: ${(0,l.st)("breakpoints","sm")}) {
    font-size: ${(0,l.st)("fontSizes","lg")};
  }
`,b=x.I4.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 12px;
  border-radius: 50%;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  min-width: 40px;
  min-height: 40px;

  &:hover {
    transform: scale(1.1);
    background: ${(0,l.st)("colors","backgroundSecondary")};
  }

  &:active {
    transform: scale(0.95);
  }
`,$=x.I4.span`
  font-size: ${(0,l.st)("fontSizes","xl")};
  color: ${(0,l.st)("colors","textSecondary")};
  font-weight: 300;
  line-height: 1;

  @media (max-width: ${(0,l.st)("breakpoints","sm")}) {
    font-size: ${(0,l.st)("fontSizes","lg")};
  }

  ${b}:hover & {
    color: ${(0,l.st)("colors","danger")};
  }
`,y=x.I4.div`
  padding: 30px;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 40px;
  align-items: start;

  @media (max-width: ${(0,l.st)("breakpoints","md")}) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`,j=x.I4.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`,w=x.I4.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;

  @media (max-width: ${(0,l.st)("breakpoints","sm")}) {
    grid-template-columns: 1fr;
    gap: 13px;
  }
`,v=x.I4.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (max-width: ${(0,l.st)("breakpoints","sm")}) {
    gap: 5px;
  }
`,k=x.I4.label`
  font-size: ${(0,l.st)("fontSizes","md")};
  font-weight: 600;
  color: ${(0,l.st)("colors","textPrimary")};
  text-transform: uppercase;
  letter-spacing: 0.5px;

  @media (max-width: ${(0,l.st)("breakpoints","sm")}) {
    font-size: ${(0,l.st)("fontSizes","sm")};
  }
`,z=x.I4.input`
  padding: 12px 16px;
  border: 1px solid ${(0,l.st)("colors","secondary")};
  border-radius: ${(0,l.st)("borderRadius","md")};
  font-size: ${(0,l.st)("fontSizes","md")};
  transition: ${(0,l.st)("transitions","colors")};
  background: ${(0,l.st)("colors","background")};
  color: ${(0,l.st)("colors","textPrimary")};

  @media (max-width: ${(0,l.st)("breakpoints","sm")}) {
    font-size: ${(0,l.st)("fontSizes","sm")};
  }

  &:focus {
    outline: none;
    border-color: ${(0,l.st)("colors","primary")};
    box-shadow: 0 0 0 3px rgba(147, 51, 234, 0.1);
  }

  &::placeholder {
    color: ${(0,l.st)("colors","textMuted")};
  }
`,S=x.I4.div`
  display: flex;
  gap: 20px;
  margin-top: 10px;
`,I=x.I4.div`
  display: flex;
  align-items: center;
`,C=x.I4.input`
  display: none;
`,_=x.I4.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  font-size: ${(0,l.st)("fontSizes","md")};
  color: ${(0,l.st)("colors","textPrimary")};
  transition: ${(0,l.st)("transitions","colors")};

  @media (max-width: ${(0,l.st)("breakpoints","sm")}) {
    font-size: ${(0,l.st)("fontSizes","sm")};
  }

  &:hover {
    color: ${(0,l.st)("colors","primary")};
  }
`,P=x.I4.div`
  width: 20px;
  height: 20px;
  border: 2px solid ${(0,l.st)("colors","secondary")};
  border-radius: 50%;
  position: relative;
  transition: ${(0,l.st)("transitions","colors")};

  input[type="radio"]:checked + label & {
    border-color: ${(0,l.st)("colors","primary")};
    background: ${(0,l.st)("colors","primary")};

    &::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 8px;
      height: 8px;
      background: ${(0,l.st)("colors","textWhite")};
      border-radius: 50%;
    }
  }
`,R=x.I4.div`
  display: flex;
  justify-content: flex-end;
  gap: 15px;
  padding: 20px 30px;
  border-top: 1px solid ${(0,l.st)("colors","secondary")};
  background: ${(0,l.st)("colors","backgroundSecondary")};
  border-radius: 0 0 ${(0,l.st)("borderRadius","xl")} ${(0,l.st)("borderRadius","xl")};

  @media (max-width: ${(0,l.st)("breakpoints","sm")}) {
    justify-content: center;
  }
`,Y=x.I4.button`
  padding: 12px 24px;
  border: 2px solid ${(0,l.st)("colors","secondary")};
  background: ${(0,l.st)("colors","backgroundSecondary")};
  color: ${(0,l.st)("colors","textPrimary")};
  border-radius: ${(0,l.st)("borderRadius","md")};
  font-size: ${(0,l.st)("fontSizes","md")};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: ${(0,l.st)("shadows","card")};
  border-style: none;

  @media (max-width: ${(0,l.st)("breakpoints","sm")}) {
    font-size: ${(0,l.st)("fontSizes","sm")};
  }

  &:hover {
    border-color: ${(0,l.st)("colors","textSecondary")};
    background: ${(0,l.st)("colors","background")};
    transform: translateY(-1px);
    box-shadow: none;
  }

  &:active {
    transform: translateY(0);
    box-shadow: none;
  }
`,L=x.I4.button`
  padding: 12px 24px;
  border: none;
  background: ${(0,l.st)("gradients","primary")};
  color: ${(0,l.st)("colors","textWhite")};
  border-radius: ${(0,l.st)("borderRadius","md")};
  font-size: ${(0,l.st)("fontSizes","md")};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: ${(0,l.st)("breakpoints","sm")}) {
    font-size: ${(0,l.st)("fontSizes","sm")};
  }

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: ${(0,l.st)("shadows","hoverLift")};
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    opacity: ${(0,l.st)("opacity","disabled")};
    cursor: not-allowed;
    transform: none;
  }
`;var M=function(t,e,s,i){return new(s||(s=Promise))(function(o,r){function n(t){try{d(i.next(t))}catch(t){r(t)}}function a(t){try{d(i.throw(t))}catch(t){r(t)}}function d(t){var e;t.done?o(t.value):(e=t.value,e instanceof s?e:new s(function(t){t(e)})).then(n,a)}d((i=i.apply(t,e||[])).next())})};const O=()=>{const{user:t,profile:e,isLoading:s}=(0,l.GV)(t=>t.user),{isModalOpen:x,openModal:h,closeModal:f}=(0,l.hS)(),[u,g]=(0,n.useState)(!1),{data:b,isLoading:$}=(0,o.ry)({userId:null==t?void 0:t.id,from:"mybooks",select:"book_id, book_status"}),y=(0,n.useMemo)(()=>b?b.reduce((t,e)=>(t[e.book_status]++,t),{read:0,reading:0,will_read:0,favorite:0}):{read:0,reading:0,will_read:0,favorite:0},[b]),j=(0,l.jL)(),w=(0,d.Zp)();return(0,n.useEffect)(()=>{!function(){M(this,void 0,void 0,function*(){t&&(yield j((0,r.VM)(t.id)))})}()},[t,j]),(0,i.jsxs)(E,{children:[u&&(0,i.jsx)(c.l9,{text:"Сброс пароля...",subText:"Пожалуйста, подождите..."}),(0,i.jsx)(V,{children:(0,i.jsxs)(F,{children:[(0,i.jsx)(W,{children:(0,i.jsxs)(D,{children:[(0,i.jsx)(T,{children:s?(0,i.jsx)(c.jt,{width:"300px",height:"40px"}):e?`${e.lastname} ${e.firstname} ${e.patronymic}`:t?t.email:"Пользователь"}),(0,i.jsx)(q,{children:s?(0,i.jsx)(c.jt,{width:"300px",height:"40px"}):t?t.email:"Пользователь"})]})}),(0,i.jsxs)(G,{children:[(0,i.jsxs)(N,{children:[(0,i.jsx)(A,{children:$?(0,i.jsx)(c.jt,{width:"30px",height:"30px"}):y.read}),(0,i.jsx)(K,{children:"Прочитано книг"})]}),(0,i.jsxs)(N,{children:[(0,i.jsx)(A,{children:$?(0,i.jsx)(c.jt,{width:"30px",height:"30px"}):y.reading}),(0,i.jsx)(K,{children:"В процессе"})]}),(0,i.jsxs)(N,{children:[(0,i.jsx)(A,{children:$?(0,i.jsx)(c.jt,{width:"30px",height:"30px"}):y.favorite}),(0,i.jsx)(K,{children:"В избранном"})]})]}),s?(0,i.jsx)(c.jt,{width:"100%",height:"300px",margin:"20px 0"}):(0,i.jsxs)(Z,{children:[(0,i.jsx)(B,{children:"Информация о профиле"}),(0,i.jsxs)(H,{children:[e&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(J,{children:[(0,i.jsx)(Q,{children:"Дата рождения"}),(0,i.jsx)(U,{children:(0,l.Yq)(e.birthdate)})]}),(0,i.jsxs)(J,{children:[(0,i.jsx)(Q,{children:"Пол"}),(0,i.jsx)(U,{children:"male"===e.gender?"Мужской":"Женский"})]})]}),(0,i.jsxs)(J,{children:[(0,i.jsx)(Q,{children:"Email"}),(0,i.jsx)(U,{children:null==t?void 0:t.email})]}),(0,i.jsxs)(J,{children:[(0,i.jsx)(Q,{children:"Статус"}),(0,i.jsx)(U,{children:(0,i.jsx)(X,{children:"Подтвержден"})})]}),(0,i.jsxs)(J,{children:[(0,i.jsx)(Q,{children:"Дата регистрации"}),(0,i.jsx)(U,{children:(null==t?void 0:t.created_at)?(0,l.Yq)(t.created_at):"Не указана"})]}),(0,i.jsxs)(J,{children:[(0,i.jsx)(Q,{children:"Последний вход"}),(0,i.jsx)(U,{children:(null==t?void 0:t.last_sign_in_at)?(0,l.Yq)(t.last_sign_in_at):"Не указан"})]})]})]}),(0,i.jsxs)(tt,{children:[(0,i.jsxs)(et,{onClick:h,primary:!0,disabled:s,children:[(0,i.jsx)(st,{children:"✏️"}),e?"Редактировать профиль":"Заполнить профиль"]}),(0,i.jsxs)(et,{onClick:()=>M(void 0,void 0,void 0,function*(){if(g(!0),t&&t.email){const{error:e}=yield l.ND.auth.resetPasswordForEmail(t.email,{redirectTo:"http://localhost:8080/auth/reset-password"});e?a.Ay.error("Произошла ошибка при сбросе пароля"):w(p.b.LINKS.VERIFY_RESET_PASSWORD)}g(!1)}),disabled:s,children:[(0,i.jsx)(st,{children:"🔒"}),"Изменить пароль"]})]})]})}),x&&(0,i.jsx)(m,{closeModal:f})]})},E=x.I4.div`
  position: relative;
  height: 100%;
  padding: 20px;
`,V=x.I4.div`
  position: relative;
  z-index: ${(0,l.st)("zIndices","base")};
  max-width: 800px;
  margin: 0 auto;
`,F=x.I4.div`
  background: ${(0,l.st)("colors","background")};
  backdrop-filter: blur(10px);
  border-radius: ${(0,l.st)("borderRadius","xl")};
  padding: 40px;
  box-shadow: ${(0,l.st)("shadows","card")};
  transition: ${(0,l.st)("transitions","colors")};
`,W=x.I4.div`
  display: flex;
  align-items: center;
  gap: 30px;
  margin-bottom: 20px;
  padding-bottom: 30px;
`,D=x.I4.div`
  flex: 1;
`,T=x.I4.h1`
  font-size: ${(0,l.st)("fontSizes","xl")};
  font-weight: 700;
  margin: 0 0 10px 0;
  color: ${(0,l.st)("colors","primaryLight")};

  @media (max-width: ${(0,l.st)("breakpoints","md")}) {
    font-size: ${(0,l.st)("fontSizes","lg")};
  }
`,q=x.I4.div`
  font-size: ${(0,l.st)("fontSizes","md")};
  color: ${(0,l.st)("colors","textSecondary")};
  margin: 0 0 15px 0;

  @media (max-width: ${(0,l.st)("breakpoints","md")}) {
    font-size: ${(0,l.st)("fontSizes","sm")};
  }
`,G=x.I4.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-template-rows: 1fr;
  gap: 20px;
  margin-bottom: 30px;

  @media (max-width: ${(0,l.st)("breakpoints","sm")}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 10px;
  }
`,N=x.I4.div`
  background: ${(0,l.st)("colors","backgroundSecondary")};
  color: ${(0,l.st)("colors","textPrimary")};
  padding: 25px;
  border-radius: ${(0,l.st)("borderRadius","lg")};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: ${(0,l.st)("transitions","transform")};
  box-shadow: ${(0,l.st)("shadows","card")};

  @media (max-width: ${(0,l.st)("breakpoints","md")}) {
    padding: 15px;
  }
`,A=x.I4.div`
  font-size: ${(0,l.st)("fontSizes","xl")};
  font-weight: 700;
  margin-bottom: 8px;
  color: ${(0,l.st)("colors","accent")};

  @media (max-width: ${(0,l.st)("breakpoints","md")}) {
    font-size: ${(0,l.st)("fontSizes","lg")};
  }
`,K=x.I4.div`
  font-size: ${(0,l.st)("fontSizes","md")};
  font-weight: 500;

  @media (max-width: ${(0,l.st)("breakpoints","md")}) {
    font-size: ${(0,l.st)("fontSizes","sm")};
  }
`,Z=x.I4.div`
  margin-bottom: 30px;
`,B=x.I4.h2`
  font-size: ${(0,l.st)("fontSizes","lg")};
  font-weight: 600;
  color: ${(0,l.st)("colors","textPrimary")};
  margin: 0 0 25px 0;
  padding-bottom: 10px;
  @media (max-width: ${(0,l.st)("breakpoints","md")}) {
    font-size: ${(0,l.st)("fontSizes","md")};
  }
`,H=x.I4.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;

  @media (max-width: ${(0,l.st)("breakpoints","sm")}) {
    grid-template-columns: 1fr 1fr;
    width: 100%;
  }

  @media (max-width: ${(0,l.st)("breakpoints","sm")}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 10px;
  }
`,J=x.I4.div`
  padding: 15px;
  background: ${(0,l.st)("colors","backgroundSecondary")};
  border-radius: ${(0,l.st)("borderRadius","md")};
  border-left: 4px solid ${(0,l.st)("colors","primary")};
  transition: ${(0,l.st)("transitions","colors")};

  @media (max-width: ${(0,l.st)("breakpoints","sm")}) {
    width: 100%;
  }
`,Q=x.I4.div`
  font-size: ${(0,l.st)("fontSizes","md")};
  color: ${(0,l.st)("colors","textMuted")};
  font-weight: 500;
  margin-bottom: 5px;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  @media (max-width: ${(0,l.st)("breakpoints","md")}) {
    font-size: ${(0,l.st)("fontSizes","sm")};
  }
`,U=x.I4.div`
  font-size: ${(0,l.st)("fontSizes","md")};
  color: ${(0,l.st)("colors","textPrimary")};
  font-weight: 500;

  @media (max-width: ${(0,l.st)("breakpoints","md")}) {
    font-size: ${(0,l.st)("fontSizes","sm")};
  }
`,X=x.I4.span`
  background: ${(0,l.st)("colors","success")};
  color: ${(0,l.st)("colors","textWhite")};
  padding: 4px 12px;
  border-radius: ${(0,l.st)("borderRadius","full")};
  font-size: ${(0,l.st)("fontSizes","sm")};
  font-weight: 500;
`,tt=x.I4.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;

  :disabled {
    opacity: 0.5;
    cursor: not-allowed;

    &:hover {
      transform: none;
      box-shadow: none;
    }
  }
`,et=x.I4.button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 20px;
  border: none;
  border-radius: ${(0,l.st)("borderRadius","full")};
  font-size: ${(0,l.st)("fontSizes","sm")};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  background: ${({primary:t})=>t?(0,l.st)("gradients","primary"):(0,l.st)("colors","backgroundSecondary")};
  color: ${({primary:t})=>t?(0,l.st)("colors","textWhite"):(0,l.st)("colors","textPrimary")};
  box-shadow: ${(0,l.st)("shadows","card")};
  white-space: nowrap;
  min-width: fit-content;

  @media (max-width: ${(0,l.st)("breakpoints","sm")}) {
    font-size: ${(0,l.st)("fontSizes","xs")};
    padding: 10px 16px;
    gap: 8px;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${(0,l.st)("shadows","hoverLift")};
  }

  &:active {
    transform: translateY(0);
  }

  :disabled {
    opacity: ${(0,l.st)("opacity","disabled")};
    cursor: not-allowed;

    &:hover {
      transform: none;
      box-shadow: none;
    }
  }
`,st=x.I4.span`
  font-size: ${(0,l.st)("fontSizes","sm")};
  flex-shrink: 0;

  @media (max-width: ${(0,l.st)("breakpoints","sm")}) {
    font-size: ${(0,l.st)("fontSizes","xs")};
  }
`}}]);
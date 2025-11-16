"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[242],{9242:(t,e,s)=>{s.r(e),s.d(e,{ChangePasswordForm:()=>S,LoginForm:()=>v,RegisterForm:()=>$,ResetPasswordForm:()=>k,VerifyEmail:()=>J,VerifyResetPassword:()=>Q});var n=s(4848),i=s(5227),r=s(1307),o=s(6540),a=s(5920),d=s(2244),c=s(888),l=s(7581);const p=l.I4.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 ${(0,d.st)("spacing","md")};
`,h=l.I4.h1`
  font-size: ${(0,d.st)("fontSizes","xxl")};
  color: ${(0,d.st)("colors","textPrimary")};
  font-weight: ${(0,d.st)("fontWeights","black")};
  margin: 0;
  text-align: center;
  user-select: none;
  white-space: nowrap;

  @media (max-width: ${(0,d.st)("breakpoints","sm")}),
    (max-height: ${(0,d.st)("breakpoints","sm")}) {
    font-size: ${(0,d.st)("fontSizes","xl")};
  }
`,x=l.I4.h2`
  font-size: ${(0,d.st)("fontSizes","md")};
  color: ${(0,d.st)("colors","textMuted")};
  user-select: none;
  font-weight: ${(0,d.st)("fontWeights","normal")};
  text-align: center;
  margin: 30px 0 5px 0;

  @media (max-width: ${(0,d.st)("breakpoints","sm")}),
    (max-height: ${(0,d.st)("breakpoints","sm")}) {
    font-size: ${(0,d.st)("fontSizes","sm")};
    margin: ${(0,d.st)("spacing","sm")} 0;
  }
`,m=l.I4.h3`
  font-size: ${(0,d.st)("fontSizes","md")};
  color: ${(0,d.st)("colors","textMuted")};
  margin: 0;
  font-style: italic;
  font-weight: ${(0,d.st)("fontWeights","normal")};
  text-align: center;
  user-select: none;

  @media (max-width: ${(0,d.st)("breakpoints","sm")}),
    (max-height: ${(0,d.st)("breakpoints","sm")}) {
    font-size: ${(0,d.st)("fontSizes","sm")};
  }
`,u=l.I4.input`
  font-size: ${(0,d.st)("fontSizes","sm")};
  color: ${(0,d.st)("colors","textPrimary")};
  font-weight: ${(0,d.st)("fontWeights","normal")};
  padding: 17px 12px;
  border: 1px solid ${(0,d.st)("colors","secondary")};
  border-radius: ${(0,d.st)("borderRadius","md")};
  background: transparent;
  width: 100%;
  margin-top: 18px;
  transition: ${(0,d.st)("transitions","colors")};

  @media (max-width: ${(0,d.st)("breakpoints","sm")}),
    (max-height: ${(0,d.st)("breakpoints","sm")}) {
    font-size: ${(0,d.st)("fontSizes","xs")};
    margin-top: 5px;
    padding: 10px 10px;
  }

  &::placeholder {
    color: ${(0,d.st)("colors","textMuted")};
    font-style: italic;
  }

  &:focus {
    outline: 2px solid ${(0,d.st)("colors","primary")};
    border-color: ${(0,d.st)("colors","primary")};
  }
`,f=l.I4.div`
  display: flex;
  width: 100%;
  margin-top: 16px;
  justify-content: space-between;

  @media (max-width: ${(0,d.st)("breakpoints","sm")}),
    (max-height: ${(0,d.st)("breakpoints","sm")}) {
    font-size: ${(0,d.st)("fontSizes","xs")};
    margin-top: 5px;
  }
`,g=l.I4.div`
  display: flex;
  align-items: center;
`,b=l.I4.label`
  font-size: ${(0,d.st)("fontSizes","sm")};
  color: ${(0,d.st)("colors","textMuted")};
  user-select: none;
  display: flex;
  align-items: center;
  gap: 5px;

  @media (max-width: ${(0,d.st)("breakpoints","sm")}),
    (max-height: ${(0,d.st)("breakpoints","sm")}) {
    font-size: ${(0,d.st)("fontSizes","xs")};
  }
`,y=(0,l.I4)(a.N_)`
  font-size: ${(0,d.st)("fontSizes","sm")};
  color: ${(0,d.st)("colors","accent")};
  transition: ${(0,d.st)("transitions","colors")};

  @media (max-width: ${(0,d.st)("breakpoints","sm")}),
    (max-height: ${(0,d.st)("breakpoints","sm")}) {
    font-size: ${(0,d.st)("fontSizes","xs")};
  }

  &:hover {
    opacity: ${(0,d.st)("opacity","hover")};
  }
`,w=l.I4.button`
  font-size: ${(0,d.st)("fontSizes","sm")};
  border-radius: ${(0,d.st)("borderRadius","md")};
  border-style: none;
  background: ${(0,d.st)("colors","primaryDark")};
  color: ${(0,d.st)("colors","textWhite")};
  width: 100%;
  padding: 10px 0;
  margin-top: 22px;
  transition: ${(0,d.st)("transitions","colors")};

  @media (max-width: ${(0,d.st)("breakpoints","sm")}),
    (max-height: ${(0,d.st)("breakpoints","sm")}) {
    font-size: ${(0,d.st)("fontSizes","xs")};
  }

  &:hover {
    opacity: ${(0,d.st)("opacity","hover")};
  }

  &:disabled {
    opacity: ${(0,d.st)("opacity","disabled")};
    cursor: not-allowed;
  }
`,j=l.I4.span`
  font-size: ${(0,d.st)("fontSizes","sm")};
  color: ${(0,d.st)("colors","textPrimary")};
  margin-top: 11px;

  @media (max-width: ${(0,d.st)("breakpoints","sm")}),
    (max-height: ${(0,d.st)("breakpoints","sm")}) {
    font-size: ${(0,d.st)("fontSizes","xs")};
  }
`;const v=()=>{const[t,e]=(0,o.useState)({email:"",password:""}),[s,l]=(0,o.useState)(!1),{login:v,error:$,passwordErrors:S,isLoading:k}=(()=>{const[t,e]=(0,o.useState)(null),[s,n]=(0,o.useState)([]),c=(0,a.Zp)(),l=(0,d.jL)(),{isLoading:p}=(0,d.GV)(t=>t.user);return{login:t=>{return s=void 0,o=void 0,p=function*(){if(e(null),""===t.email||""===t.password)return void e("Пожалуйста, заполните все поля");const s=(0,d.Oj)(t.password);if(s.length>0)return void n(s);const o=yield l((0,r.Lx)(t));"fulfilled"==o.meta.requestStatus&&c(i.b.LINKS.HOME),"rejected"==o.meta.requestStatus&&e("Неверный логин или пароль")},new((a=void 0)||(a=Promise))(function(t,e){function n(t){try{r(p.next(t))}catch(t){e(t)}}function i(t){try{r(p.throw(t))}catch(t){e(t)}}function r(e){var s;e.done?t(e.value):(s=e.value,s instanceof a?s:new a(function(t){t(s)})).then(n,i)}r((p=p.apply(s,o||[])).next())});var s,o,a,p},error:t,passwordErrors:s,isLoading:p}})(),z=t=>{e(e=>Object.assign(Object.assign({},e),{[t.target.name]:t.target.value}))};return(0,o.useEffect)(()=>{$&&c.Ay.error($),S.length>0&&S.forEach(t=>c.Ay.error(t))},[$,S]),(0,n.jsxs)(p,{onSubmit:e=>(e=>{return s=void 0,n=void 0,r=function*(){e.preventDefault(),v(t)},new((i=void 0)||(i=Promise))(function(t,e){function o(t){try{d(r.next(t))}catch(t){e(t)}}function a(t){try{d(r.throw(t))}catch(t){e(t)}}function d(e){var s;e.done?t(e.value):(s=e.value,s instanceof i?s:new i(function(t){t(s)})).then(o,a)}d((r=r.apply(s,n||[])).next())});var s,n,i,r})(e),children:[(0,n.jsx)(h,{children:"С возвращением"}),(0,n.jsx)(x,{children:"Привет! Рады снова Вас видеть!"}),(0,n.jsx)(m,{children:"Введите ваш логин и пароль, чтобы войти в приложение"}),(0,n.jsx)(u,{type:"email",onChange:z,placeholder:"Почта",name:"email",value:t.email}),(0,n.jsx)(u,{type:s?"text":"password",onChange:z,placeholder:"Пароль",name:"password",value:t.password}),(0,n.jsxs)(f,{children:[(0,n.jsx)(g,{children:(0,n.jsxs)(b,{children:[(0,n.jsx)("input",{type:"checkbox",onChange:()=>{l(t=>!t)}}),"Показать пароль"]})}),(0,n.jsx)(y,{to:i.b.LINKS.RESET_PASSWORD,children:"Забыли пароль?"})]}),(0,n.jsx)(w,{type:"submit",disabled:k,children:k?"Загрузка...":"Войти"}),(0,n.jsxs)(j,{children:["Впервые здесь?"," ",(0,n.jsx)(y,{to:i.b.LINKS.REGISTER,children:"Зарегистрируйте Ваш аккаунт"})]})]})};const $=()=>{const[t,e]=(0,o.useState)({email:"",password:""}),[s,l]=(0,o.useState)(!1),{register:v,error:$,passwordErrors:S,isLoading:k}=(()=>{const[t,e]=(0,o.useState)(null),[s,n]=(0,o.useState)([]),c=(0,a.Zp)(),l=(0,d.jL)(),{isLoading:p}=(0,d.GV)(t=>t.user);return{register:t=>{return s=void 0,o=void 0,p=function*(){if(e(null),""===t.email||""===t.password)return void e("Пожалуйста, заполните все поля");const s=(0,d.Oj)(t.password);if(s.length>0)return void n(s);const o=yield l((0,r.DY)(t));"fulfilled"==o.meta.requestStatus&&c(i.b.LINKS.HOME),"rejected"==o.meta.requestStatus&&e("Произошла ошибка при регистрации")},new((a=void 0)||(a=Promise))(function(t,e){function n(t){try{r(p.next(t))}catch(t){e(t)}}function i(t){try{r(p.throw(t))}catch(t){e(t)}}function r(e){var s;e.done?t(e.value):(s=e.value,s instanceof a?s:new a(function(t){t(s)})).then(n,i)}r((p=p.apply(s,o||[])).next())});var s,o,a,p},error:t,passwordErrors:s,isLoading:p}})(),z=s=>{e(Object.assign(Object.assign({},t),{[s.target.name]:s.target.value}))};return(0,o.useEffect)(()=>{$&&c.Ay.error($),S.length>0&&S.forEach(t=>c.Ay.error(t))},[$,S]),(0,n.jsxs)(p,{onSubmit:e=>(e=>{return s=void 0,n=void 0,r=function*(){e.preventDefault(),v(t)},new((i=void 0)||(i=Promise))(function(t,e){function o(t){try{d(r.next(t))}catch(t){e(t)}}function a(t){try{d(r.throw(t))}catch(t){e(t)}}function d(e){var s;e.done?t(e.value):(s=e.value,s instanceof i?s:new i(function(t){t(s)})).then(o,a)}d((r=r.apply(s,n||[])).next())});var s,n,i,r})(e),children:[(0,n.jsx)(h,{children:"Добро пожаловать"}),(0,n.jsx)(x,{children:"Станьте частью большого сообщества"}),(0,n.jsx)(m,{children:"Создайте аккаунт и получите доступ к функциям приложения"}),(0,n.jsx)(u,{type:"email",onChange:z,name:"email",placeholder:"Почта",value:t.email}),(0,n.jsx)(u,{type:s?"text":"password",onChange:z,name:"password",placeholder:"Пароль",value:t.password}),(0,n.jsxs)(f,{children:[(0,n.jsx)(g,{children:(0,n.jsxs)(b,{children:[(0,n.jsx)("input",{type:"checkbox",onChange:()=>{l(!s)}}),"Показать пароль"]})}),(0,n.jsx)(y,{to:i.b.LINKS.RESET_PASSWORD,children:"Забыли пароль?"})]}),(0,n.jsx)(w,{type:"submit",disabled:k,children:k?"Загрузка...":"Зарегистрироваться"}),(0,n.jsxs)(j,{children:["Уже есть аккаунт? ",(0,n.jsx)(y,{to:i.b.LINKS.LOGIN,children:"Войти"})]})]})};const S=()=>{const[t,e]=(0,o.useState)({email:"",password:"",passwordConfirm:""}),[s,r]=(0,o.useState)(!1),{changePassword:l,isLoading:m,error:v,passwordErrors:$,isSuccess:S}=(()=>{const[t,e]=(0,o.useState)(!1),[s,n]=(0,o.useState)(null),[r,c]=(0,o.useState)([]),l=(0,a.Zp)();return{changePassword:t=>{return s=void 0,r=void 0,a=function*(){if(e(!0),n(null),""===t.email||""===t.password||""===t.passwordConfirm)return void n("Пожалуйста, заполните все поля");if(t.password!==t.passwordConfirm)return void n("Пароли должны совпадать");const s=(0,d.Oj)(t.password);c(s);const{error:r}=yield d.ND.auth.updateUser({password:t.password});r?n(r.message):(l(i.b.LINKS.LOGIN),e(!1))},new((o=void 0)||(o=Promise))(function(t,e){function n(t){try{d(a.next(t))}catch(t){e(t)}}function i(t){try{d(a.throw(t))}catch(t){e(t)}}function d(e){var s;e.done?t(e.value):(s=e.value,s instanceof o?s:new o(function(t){t(s)})).then(n,i)}d((a=a.apply(s,r||[])).next())});var s,r,o,a},isLoading:t,error:s,passwordErrors:r,isSuccess:!0}})(),k=s=>{e(Object.assign(Object.assign({},t),{[s.target.name]:s.target.value}))};return(0,o.useEffect)(()=>{v&&c.Ay.error(v),$.length>0&&$.forEach(t=>c.Ay.error(t)),S&&c.Ay.success("Пароль успешно сброшен")},[v,$,S]),(0,n.jsxs)(p,{onSubmit:e=>(e=>{return s=void 0,n=void 0,r=function*(){e.preventDefault(),l(t)},new((i=void 0)||(i=Promise))(function(t,e){function o(t){try{d(r.next(t))}catch(t){e(t)}}function a(t){try{d(r.throw(t))}catch(t){e(t)}}function d(e){var s;e.done?t(e.value):(s=e.value,s instanceof i?s:new i(function(t){t(s)})).then(o,a)}d((r=r.apply(s,n||[])).next())});var s,n,i,r})(e),children:[(0,n.jsx)(h,{children:"Сброс пароля"}),(0,n.jsx)(x,{children:"Введите вашу почту и новый пароль"}),(0,n.jsx)(u,{type:"email",onChange:k,name:"email",placeholder:"Почта",value:t.email}),(0,n.jsx)(u,{type:s?"text":"password",onChange:k,name:"password",placeholder:"Новый пароль",value:t.password}),(0,n.jsx)(u,{type:s?"text":"password",onChange:k,name:"passwordConfirm",placeholder:"Повторите пароль",value:t.passwordConfirm}),(0,n.jsx)(f,{children:(0,n.jsx)(g,{children:(0,n.jsxs)(b,{children:[(0,n.jsx)("input",{type:"checkbox",onChange:()=>{r(!s)}}),"Показать пароль"]})})}),(0,n.jsx)(w,{type:"submit",disabled:m,children:m?"Загрузка...":"Изменить пароль"}),(0,n.jsxs)(j,{children:["Вспомнили пароль? ",(0,n.jsx)(y,{to:i.b.LINKS.LOGIN,children:"Войти"})]})]})};const k=()=>{const[t,e]=(0,o.useState)(""),{resetPassword:s,isLoading:r,error:l}=(()=>{const[t,e]=(0,o.useState)(!1),[s,n]=(0,o.useState)(null),r=(0,a.Zp)();return{resetPassword:t=>{return s=void 0,o=void 0,c=function*(){if(e(!0),n(null),""===t)return n("Пожалуйста, заполните все поля"),void e(!1);const{error:s}=yield d.ND.auth.resetPasswordForEmail(t,{redirectTo:"http://localhost:8080/auth/change-password"});s?n(s.message):(e(!1),r(i.b.LINKS.RESET_PASSWORD))},new((a=void 0)||(a=Promise))(function(t,e){function n(t){try{r(c.next(t))}catch(t){e(t)}}function i(t){try{r(c.throw(t))}catch(t){e(t)}}function r(e){var s;e.done?t(e.value):(s=e.value,s instanceof a?s:new a(function(t){t(s)})).then(n,i)}r((c=c.apply(s,o||[])).next())});var s,o,a,c},isLoading:t,error:s}})();return(0,o.useEffect)(()=>{l&&c.Ay.error(l)},[l]),(0,n.jsxs)(p,{onSubmit:e=>(e=>{e.preventDefault(),s(t)})(e),children:[(0,n.jsx)(h,{children:"Сброс пароля"}),(0,n.jsx)(x,{children:"Введите вашу почту для сброса пароля"}),(0,n.jsx)(m,{children:"Мы отправим вам ссылку для сброса пароля на вашу почту"}),(0,n.jsx)(u,{type:"email",onChange:t=>{e(t.target.value)},name:"email",placeholder:"Почта",value:t}),(0,n.jsx)(f,{}),(0,n.jsx)(w,{type:"submit",disabled:r,children:r?"Загрузка...":"Сбросить пароль"}),(0,n.jsxs)(j,{children:["Вспомнили пароль? ",(0,n.jsx)(y,{to:i.b.LINKS.LOGIN,children:"Войти"})]})]})},z=l.i7`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(3deg); }
`,A=l.i7`
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-8px); }
  60% { transform: translateY(-4px); }
`,L=l.i7`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`,I=l.i7`
  from { 
    opacity: 0; 
    transform: translateY(30px); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0); 
  }
`,E=l.i7`
  from { opacity: 0; }
  to { opacity: 1; }
`,C=l.Ay.div`
  position: relative;
  height: 100vh;
  height: 100dvh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: ${(0,d.st)("gradients","primary")};
`,P=l.Ay.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    radial-gradient(
      circle at 30% 20%,
      ${(0,d.st)("colors","accent")} 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 70% 80%,
      ${(0,d.st)("colors","primaryDark")} 0%,
      transparent 50%
    );
  opacity: 0.3;
  animation: ${L} 4s ease-in-out infinite;
`,O=l.Ay.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
`,N=l.Ay.div`
  position: absolute;
  width: 40px;
  height: 30px;
  animation: ${z} 4s ease-in-out infinite;
  animation-delay: ${t=>t.delay}s;

  &:nth-child(1) {
    top: 15%;
    left: 10%;
  }
  &:nth-child(2) {
    top: 25%;
    right: 15%;
  }
  &:nth-child(3) {
    top: 65%;
    left: 5%;
  }
  &:nth-child(4) {
    top: 75%;
    right: 10%;
  }
  &:nth-child(5) {
    top: 45%;
    left: 20%;
  }

  @media (max-width: ${(0,d.st)("breakpoints","sm")}) {
    &:nth-child(5) {
      display: none;
    }
  }
`,R=l.Ay.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: ${(0,d.st)("gradients","multicolor")};
  border-radius: 2px;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2);
  opacity: 0.3;
`,D=l.Ay.div`
  position: absolute;
  top: -10px;
  left: 0;
  width: 100%;
  height: 10px;
  background: ${(0,d.st)("gradients","blueToAccent")};
  clip-path: polygon(0 100%, 50% 0, 100% 100%);
  opacity: 0.4;
`,K=l.Ay.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 12px;
  height: 12px;
  background: ${(0,d.st)("colors","accent")};
  border-radius: 50%;
  opacity: 0.6;
`,Y=l.Ay.div`
  text-align: center;
  z-index: 10;
  animation: ${I} 1s ease-out;
  max-width: 600px;
  padding: 0 20px;
`,M=l.Ay.div`
  margin-bottom: 30px;
  animation: ${A} 2s ease-in-out infinite;

  @media (max-width: ${(0,d.st)("breakpoints","md")}),
    (max-height: ${(0,d.st)("breakpoints","md")}) {
    display: none;
  }
`,W=l.Ay.div`
  display: inline-block;
  padding: 20px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.2);
`,G=l.Ay.div`
  font-size: ${(0,d.st)("fontSizes","xxl")};
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
`,T=l.Ay.h1`
  font-size: ${(0,d.st)("fontSizes","xl")};
  font-weight: 700;
  color: white;
  margin: 0 0 20px 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: ${(0,d.st)("breakpoints","md")}),
    (max-height: ${(0,d.st)("breakpoints","md")}) {
    margin-bottom: 5px;
  }
`,Z=l.Ay.p`
  font-size: ${(0,d.st)("fontSizes","md")};
  color: white;
  line-height: 1.6;
  margin: 0 0 30px 0;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: ${(0,d.st)("breakpoints","md")}),
    (max-height: ${(0,d.st)("breakpoints","md")}) {
    margin-bottom: 10px;
  }
`,F=l.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  background: rgba(255, 255, 255, 0.1);
  padding: 16px 20px;
  border-radius: 12px;
  margin: 0 0 30px 0;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  animation: ${E} 1.5s ease-out;

  @media (max-width: ${(0,d.st)("breakpoints","md")}),
    (max-height: ${(0,d.st)("breakpoints","md")}) {
    margin-bottom: 25px;
    padding: 10px;
  }
`,q=l.Ay.span`
  font-size: ${(0,d.st)("fontSizes","md")};
  flex-shrink: 0;
`,H=l.Ay.span`
  font-size: ${(0,d.st)("fontSizes","md")};
  color: white;
  text-align: left;
`,V=l.Ay.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 25px;
`,_=l.Ay.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-size: ${(0,d.st)("fontSizes","md")};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  min-width: 160px;
  justify-content: center;

  &:hover {
    transform: translateY(-2px);
    background: ${(0,d.st)("gradients","accent")};
  }
`,U=(0,l.Ay)(_)`
  background: ${(0,d.st)("colors","primary")};
  color: white;

  &:hover {
    background: ${(0,d.st)("gradients","accent")};
    opacity: ${(0,d.st)("opacity","hover")};
  }
`,B=l.Ay.span`
  font-size: ${(0,d.st)("fontSizes","md")};
`,J=()=>{const t=(0,a.Zp)();return(0,n.jsxs)(C,{children:[(0,n.jsx)(P,{}),(0,n.jsx)(O,{children:[...Array(5)].map((t,e)=>(0,n.jsxs)(N,{delay:.3*e,children:[(0,n.jsx)(R,{}),(0,n.jsx)(D,{}),(0,n.jsx)(K,{})]},e))}),(0,n.jsxs)(Y,{children:[(0,n.jsx)(M,{children:(0,n.jsx)(W,{children:(0,n.jsx)(G,{children:"✉️"})})}),(0,n.jsx)(T,{children:"Проверьте вашу почту"}),(0,n.jsx)(Z,{children:"Мы отправили письмо с подтверждением на ваш email адрес. Пожалуйста, проверьте почту и перейдите по ссылке для завершения регистрации."}),(0,n.jsxs)(F,{children:[(0,n.jsx)(q,{children:"💡"}),(0,n.jsx)(H,{children:'Не получили письмо? Проверьте папку "Спам"'})]}),(0,n.jsx)(V,{children:(0,n.jsxs)(U,{onClick:()=>{t(i.b.LINKS.HOME)},children:[(0,n.jsx)(B,{children:"🏠"}),"Вернуться домой"]})})]})]})},Q=()=>{const t=(0,a.Zp)();return(0,n.jsxs)(C,{children:[(0,n.jsx)(P,{}),(0,n.jsx)(O,{children:[...Array(5)].map((t,e)=>(0,n.jsxs)(N,{delay:.3*e,children:[(0,n.jsx)(R,{}),(0,n.jsx)(D,{}),(0,n.jsx)(K,{})]},e))}),(0,n.jsxs)(Y,{children:[(0,n.jsx)(M,{children:(0,n.jsx)(W,{children:(0,n.jsx)(G,{children:"✉️"})})}),(0,n.jsx)(T,{children:"Проверьте вашу почту"}),(0,n.jsx)(Z,{children:"Мы отправили письмо с подтверждением на ваш email адрес. Пожалуйста, проверьте почту и перейдите по ссылке для сброса пароля."}),(0,n.jsxs)(F,{children:[(0,n.jsx)(q,{children:"💡"}),(0,n.jsx)(H,{children:'Не получили письмо? Проверьте папку "Спам"'})]}),(0,n.jsx)(V,{children:(0,n.jsxs)(U,{onClick:()=>{t(i.b.LINKS.HOME)},children:[(0,n.jsx)(B,{children:"🏠"}),"Вернуться домой"]})})]})]})}}}]);
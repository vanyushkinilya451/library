"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[235],{3235:(t,i,n)=>{n.r(i),n.d(i,{NotFoundPage:()=>l});var o=n(4848),e=n(5227),s=n(5920),a=n(2244),r=n(7581);const l=()=>{const t=(0,s.Zp)();return(0,o.jsxs)(m,{children:[(0,o.jsx)(f,{}),(0,o.jsx)(y,{children:[...Array(6)].map((t,i)=>(0,o.jsxs)(g,{delay:.5*i,children:[(0,o.jsx)(b,{}),(0,o.jsx)(u,{})]},i))}),(0,o.jsxs)($,{children:[(0,o.jsxs)(j,{children:[(0,o.jsx)(v,{children:"4"}),(0,o.jsx)(A,{children:(0,o.jsx)(k,{children:"0"})}),(0,o.jsx)(v,{children:"4"})]}),(0,o.jsx)(w,{children:"Страница потерялась в библиотеке"}),(0,o.jsx)(Y,{children:"Похоже, эта книга была перемещена или еще не добавлена в нашу коллекцию"}),(0,o.jsxs)(z,{children:[(0,o.jsxs)(C,{onClick:()=>{t(e.b.LINKS.HOME)},children:[(0,o.jsx)(D,{children:"🏠"}),"Вернуться домой"]}),(0,o.jsxs)(N,{onClick:()=>{window.history.back()},children:[(0,o.jsx)(D,{children:"←"}),"Назад"]})]}),(0,o.jsx)(E,{children:"Попробуйте найти нужную книгу через поиск"})]})]})},c=r.i7`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
`,d=r.i7`
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-10px); }
  60% { transform: translateY(-5px); }
`,p=r.i7`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`,h=r.i7`
  from { 
    opacity: 0; 
    transform: translateY(30px); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0); 
  }
`,x=r.i7`
  from { opacity: 0; }
  to { opacity: 1; }
`,m=r.Ay.div`
  position: relative;
  height: 100vh;
  height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: ${(0,a.st)("gradients","primary")};
`,f=r.Ay.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    radial-gradient(
      circle at 30% 20%,
      ${(0,a.st)("colors","accent")} 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 70% 80%,
      ${(0,a.st)("colors","primaryDark")} 0%,
      transparent 50%
    );
  opacity: 0.3;
  animation: ${p} 4s ease-in-out infinite;
`,y=r.Ay.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
`,g=r.Ay.div`
  position: absolute;
  width: 40px;
  height: 60px;
  animation: ${c} 3s ease-in-out infinite;
  animation-delay: ${t=>t.delay}s;

  &:nth-child(1) {
    top: 10%;
    left: 10%;
  }
  &:nth-child(2) {
    top: 20%;
    right: 15%;
  }
  &:nth-child(3) {
    top: 60%;
    left: 5%;
  }
  &:nth-child(4) {
    top: 70%;
    right: 10%;
  }
  &:nth-child(5) {
    top: 40%;
    left: 20%;
  }
  &:nth-child(6) {
    top: 80%;
    right: 25%;
  }

  @media (max-width: ${(0,a.st)("breakpoints","sm")}) {
    &:nth-child(3),
    &:nth-child(5) {
      display: none;
    }

    &:nth-child(4) {
      top: 65%;
    }

    &:nth-child(6) {
      top: 80%;
      left: 25%;
    }
  }
`,b=r.Ay.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 8px;
  height: 100%;
  background: ${(0,a.st)("gradients","accent")};
  border-radius: 2px;
`,u=r.Ay.div`
  position: absolute;
  left: 8px;
  top: 0;
  width: 32px;
  height: 100%;
  background: ${(0,a.st)("gradients","multicolor")};
  border-radius: 0 4px 4px 0;
  box-shadow: 2px 2px 8px;
  opacity: 0.2;
`,$=r.Ay.div`
  text-align: center;
  z-index: 10;
  animation: ${h} 1s ease-out;
`,j=r.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  gap: 10px;
`,v=r.Ay.span`
  font-size: 120px;
  font-weight: 900;
  color: ${(0,a.st)("colors","textWhite")};
  animation: ${d} 2s ease-in-out infinite;

  &:first-child {
    animation-delay: 0s;
  }

  &:last-child {
    animation-delay: 0.5s;
  }
`,A=r.Ay.div`
  position: relative;
  display: inline-block;
`,k=r.Ay.span`
  font-size: 120px;
  font-weight: 900;
  color: ${(0,a.st)("colors","textWhite")};
  animation: ${d} 2s ease-in-out infinite;
  animation-delay: 0.25s;
`,w=r.Ay.h1`
  font-size: 32px;
  font-weight: 700;
  color: ${(0,a.st)("colors","textWhite")};
  margin-bottom: 15px;
  opacity: 0.3;
  animation: ${x} 1s ease-out 0.5s both;
`,Y=r.Ay.p`
  font-size: 18px;
  color: ${(0,a.st)("colors","textWhite")};
  opacity: 0.9;
  margin-bottom: 40px;
  max-width: 500px;
  line-height: 1.6;
  animation: ${x} 1s ease-out 0.7s both;
`,z=r.Ay.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-bottom: 30px;
  animation: ${x} 1s ease-out 0.9s both;
`,W=r.Ay.button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 15px 25px;
  border: none;
  border-radius: 50px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  transition: ${(0,a.st)("transitions","base")};

  &:hover {
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`,C=(0,r.Ay)(W)`
  background: ${(0,a.st)("gradients","primary")};
  color: ${(0,a.st)("colors","textWhite")};
  transition: ${(0,a.st)("transitions","base")};

  &:hover {
    background: ${(0,a.st)("gradients","accent")};
  }
`,N=(0,r.Ay)(W)`
  background: ${(0,a.st)("gradients","primary")};
  color: ${(0,a.st)("colors","textWhite")};
  backdrop-filter: blur(10px);
  transition: ${(0,a.st)("transitions","base")};

  &:hover {
    background: ${(0,a.st)("gradients","accent")};
  }
`,D=r.Ay.span`
  font-size: 18px;
`,E=r.Ay.p`
  font-size: 14px;
  color: ${(0,a.st)("colors","textWhite")};
  opacity: 0.7;
  animation: ${x} 1s ease-out 1.1s both;
`}}]);
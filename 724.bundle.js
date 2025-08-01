"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[724],{724:(t,i,e)=>{e.r(i),e.d(i,{AuthorPage:()=>r});var s=e(848),n=e(847),a=e(794),d=e(158),o=e(581);const r=()=>{const{authorId:t}=(0,a.g)(),{author:i}=(0,n.H)({id:t});return i&&(0,s.jsx)(h,{children:(0,s.jsxs)(p,{children:[i.photos?(0,s.jsx)(m,{children:(0,s.jsx)(n.B,{id:(()=>{const t=null==i?void 0:i.key.lastIndexOf("/");return t?null==i?void 0:i.key.slice(t+1):null==i?void 0:i.key})(),coverSize:"L",skeletonHeight:"450px",objectFit:"cover"})}):(0,s.jsx)(f,{}),(0,s.jsxs)(l,{children:[(0,s.jsx)(x,{children:i.name}),i.alternate_names&&(0,s.jsxs)("div",{children:[(0,s.jsx)(w,{children:1===i.alternate_names.length?"Псевдоним: ":"Псевдонимы: "}),i.alternate_names.map(((t,e)=>(0,s.jsxs)(g,{children:[t,e!==i.alternate_names.length-1&&", "]},t)))]}),i.personal_name&&(0,s.jsxs)("div",{children:[(0,s.jsx)(w,{children:"Имя: "}),(0,s.jsx)(g,{children:i.personal_name})]}),i.birth_date&&(0,s.jsxs)("div",{children:[(0,s.jsx)(w,{children:"Дата рождения: "}),(0,s.jsx)(g,{children:i.birth_date})]})]}),(0,s.jsx)(c,{children:i.bio&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(w,{children:"Биография: "}),"string"==typeof i.bio?i.bio:i.bio.value]})})]})})},h=o.Ay.div`
  margin: 30px 15%;

  @media (max-width: ${(0,d.st)("breakpoints","md")}) {
    margin: 30px 10%;
  }

  @media (max-width: ${(0,d.st)("breakpoints","sm")}) {
    margin: 30px 5%;
  }
`,x=o.Ay.h1`
  font-size: ${(0,d.st)("fontSizes","lg")};
  font-weight: 900;

  @media (max-width: ${(0,d.st)("breakpoints","sm")}) {
    font-size: ${(0,d.st)("fontSizes","md")};
  }
`,m=o.Ay.div`
  float: right;
  width: 300px;
  height: 450px;
  margin-left: 30px;
  margin-bottom: 10px;
  box-shadow: ${(0,d.st)("shadows","card")};
  border-radius: ${(0,d.st)("borderRadius","md")};

  @media (max-width: ${(0,d.st)("breakpoints","lg")}) {
    width: 250px;
    height: 375px;
  }

  @media (max-width: ${(0,d.st)("breakpoints","md")}) {
    width: 210px;
    height: 312px;
  }

  @media (max-width: ${(0,d.st)("breakpoints","sm")}) {
    width: 175px;
    height: 260px;
  }

  @media (max-width: ${(0,d.st)("breakpoints","xs")}) {
    width: 145px;
    height: 216px;
  }
`,p=o.Ay.div``,l=o.Ay.div``,c=o.Ay.p`
  margin-top: 15px;
  text-align: justify;
  width: 100%;

  font-size: ${(0,d.st)("fontSizes","md")};

  @media (max-width: ${(0,d.st)("breakpoints","sm")}) {
    font-size: ${(0,d.st)("fontSizes","sm")};
  }
`,g=o.Ay.span`
  color: ${(0,d.st)("colors","primaryLight")};
  font-size: ${(0,d.st)("fontSizes","md")};

  @media (max-width: ${(0,d.st)("breakpoints","sm")}) {
    font-size: ${(0,d.st)("fontSizes","sm")};
  }
`,w=o.Ay.span`
  font-weight: 600;
  font-size: ${(0,d.st)("fontSizes","md")};

  @media (max-width: ${(0,d.st)("breakpoints","sm")}) {
    font-size: ${(0,d.st)("fontSizes","sm")};
  }
`,f=o.Ay.div`
  float: right;
  width: 300px;
  height: 450px;
  margin-left: 30px;
  margin-bottom: 10px;
  box-shadow: ${(0,d.st)("shadows","card")};
  border-radius: ${(0,d.st)("borderRadius","md")};
  background: ${(0,d.st)("colors","backgroundSecondary")};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${(0,d.st)("colors","textSecondary")};
  font-size: ${(0,d.st)("fontSizes","md")};
  text-align: center;
  gap: 15px;

  @media (max-width: ${(0,d.st)("breakpoints","lg")}) {
    width: 250px;
    height: 375px;
  }

  @media (max-width: ${(0,d.st)("breakpoints","md")}) {
    width: 210px;
    height: 312px;
  }

  @media (max-width: ${(0,d.st)("breakpoints","sm")}) {
    width: 175px;
    height: 260px;
  }

  @media (max-width: ${(0,d.st)("breakpoints","xs")}) {
    width: 145px;
    height: 216px;
  }

  &::before {
    content: '';
    width: 150px;
    height: 150px;
    background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%236c757d'%3E%3Cpath d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'/%3E%3C/svg%3E")
      no-repeat center;
    background-size: contain;
    opacity: 0.6;
  }

  &::after {
    content: 'Фото автора отсутствует';
    font-weight: 500;
    font-size: ${(0,d.st)("fontSizes","md")};
  }
`}}]);
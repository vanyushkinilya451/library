"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[703],{703:(s,i,e)=>{e.r(i),e.d(i,{BookPage:()=>o});var t=e(848),n=e(813),d=e(794),a=e(158),r=e(581);const o=()=>{const{bookId:s}=(0,d.g)(),{data:i}=(0,n.f0)(s),{data:e}=(0,n.iw)(s);return i&&e&&(0,t.jsx)(h,{children:(0,t.jsxs)(p,{children:[(0,t.jsx)(m,{children:(0,t.jsx)(n.ln,{cover_id:i.covers[0],cover_i:i.covers[0],size:"L",skeletonHeight:"100%"})}),(0,t.jsxs)(c,{children:[(0,t.jsx)(l,{children:i.title}),i.subtitle&&(0,t.jsx)(x,{children:i.subtitle}),(null==e?void 0:e.author_name)&&(0,t.jsx)("div",{children:null==e?void 0:e.author_name.map(((s,i)=>(0,t.jsxs)("div",{children:[1===(null==e?void 0:e.author_name.length)?(0,t.jsx)(j,{children:"Автор: "}):(0,t.jsx)(j,{children:"Авторы: "}),(0,t.jsx)(f,{children:s}),i!==(null==e?void 0:e.author_name.length)-1&&", "]},s)))}),i.series&&(0,t.jsx)("div",{children:i.series.map(((s,e)=>(0,t.jsxs)("div",{children:[(0,t.jsx)(j,{children:"Серия: "}),(0,t.jsx)(f,{children:s}),e!==i.series.length-1&&", "]},s)))}),(0,t.jsxs)("div",{children:[(0,t.jsx)(j,{children:"Дата публикации: "}),(0,t.jsx)(f,{children:i.publish_date})]}),i.publishers&&(0,t.jsxs)("div",{children:[(0,t.jsx)(j,{children:"Издательство: "}),i.publishers.map(((s,e)=>(0,t.jsxs)(f,{children:[s,e!==i.publishers.length-1&&", "]},s)))]}),i.number_of_pages&&(0,t.jsxs)("div",{children:[(0,t.jsx)(j,{children:"Количество страниц: "}),(0,t.jsx)(f,{children:i.number_of_pages})]}),(null==e?void 0:e.language)&&(0,t.jsxs)("div",{children:[(0,t.jsx)(j,{children:"Языки: "}),null==e?void 0:e.language.map(((s,i)=>(0,t.jsxs)(f,{children:[s,i!==(null==e?void 0:e.language.length)-1&&", "]},s)))]})]}),(0,t.jsx)(g,{children:i.description&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(j,{children:"О книге: "}),i.description.value]})}),i.subjects&&(0,t.jsx)(u,{children:i.subjects.map((s=>(0,t.jsx)(b,{children:s},s)))})]})})},h=r.Ay.div`
  margin: 30px 15%;

  @media (max-width: ${(0,a.st)("breakpoints","md")}) {
    margin: 30px 10%;
  }

  @media (max-width: ${(0,a.st)("breakpoints","sm")}) {
    margin: 30px 5%;
  }
`,l=r.Ay.h1`
  font-size: ${(0,a.st)("fontSizes","lg")};
  font-weight: 900;

  @media (max-width: ${(0,a.st)("breakpoints","sm")}) {
    font-size: ${(0,a.st)("fontSizes","md")};
  }
`,x=r.Ay.h2`
  font-size: ${(0,a.st)("fontSizes","md")};
  font-weight: 300;
  font-style: italic;

  @media (max-width: ${(0,a.st)("breakpoints","sm")}) {
    font-size: ${(0,a.st)("fontSizes","sm")};
  }
`,m=r.Ay.div`
  float: right;
  width: 300px;
  height: 450px;
  margin-left: 30px;
  margin-bottom: 10px;
  box-shadow: ${(0,a.st)("shadows","card")};
  border-radius: ${(0,a.st)("borderRadius","md")};

  @media (max-width: ${(0,a.st)("breakpoints","lg")}) {
    width: 250px;
    height: 375px;
  }

  @media (max-width: ${(0,a.st)("breakpoints","md")}) {
    width: 210px;
    height: 312px;
  }

  @media (max-width: ${(0,a.st)("breakpoints","sm")}) {
    width: 175px;
    height: 260px;
  }

  @media (max-width: ${(0,a.st)("breakpoints","xs")}) {
    width: 145px;
    height: 216px;
  }
`,p=r.Ay.div``,c=r.Ay.div``,g=r.Ay.p`
  margin-top: 15px;
  text-align: justify;
  width: 100%;

  font-size: ${(0,a.st)("fontSizes","md")};

  @media (max-width: ${(0,a.st)("breakpoints","sm")}) {
    font-size: ${(0,a.st)("fontSizes","sm")};
  }
`,f=r.Ay.span`
  color: ${(0,a.st)("colors","primaryLight")};
  font-size: ${(0,a.st)("fontSizes","md")};

  @media (max-width: ${(0,a.st)("breakpoints","sm")}) {
    font-size: ${(0,a.st)("fontSizes","sm")};
  }
`,j=r.Ay.span`
  font-weight: 600;
  font-size: ${(0,a.st)("fontSizes","md")};

  @media (max-width: ${(0,a.st)("breakpoints","sm")}) {
    font-size: ${(0,a.st)("fontSizes","sm")};
  }
`,u=r.Ay.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-bottom: 10px;
`,b=r.Ay.span`
  background-color: ${(0,a.st)("colors","accent")};
  padding: 5px 10px;
  border-radius: 5px;
  font-size: ${(0,a.st)("fontSizes","md")};
  font-weight: 500;

  @media (max-width: ${(0,a.st)("breakpoints","sm")}) {
    font-size: ${(0,a.st)("fontSizes","sm")};
  }
`}}]);
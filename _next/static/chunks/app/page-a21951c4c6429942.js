(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{6006:function(e,t,l){Promise.resolve().then(l.bind(l,7899))},8905:function(e,t,l){"use strict";var s=l(7437);let r=e=>{let{context:t,action:l}=e;return(0,s.jsx)("div",{className:"flex justify-center items-center px-6 py-3  rounded shadow-sm bg-blue-600 hover:bg-blue-900 transition-all duration-500 cursor-pointer",onClick:()=>l&&l(),children:(0,s.jsx)("p",{className:"text-white max-sm:text-xs",children:t})})},i=e=>{let{context:t,action:l}=e;return(0,s.jsx)("div",{className:"flex justify-center items-center px-6  py-3 rounded-full shadow-sm bg-blue-600 hover:bg-blue-900 transition-all duration-500 cursor-pointer",onClick:()=>l&&l(),children:(0,s.jsx)("p",{className:"text-white max-sm:text-xs",children:t})})},a=e=>{let{context:t,action:l}=e;return(0,s.jsx)("div",{className:"flex justify-center items-center px-6 py-3  border border-blue-600 rounded shadow-sm bg-transparent hover:bg-blue-100 transition-all duration-500 cursor-pointer",onClick:()=>l&&l(),children:(0,s.jsx)("p",{className:"text-blue-600 max-sm:text-xs",children:t})})};t.Z=e=>{let{type:t,context:l,action:n}=e;return"primary"===t?(0,s.jsx)(r,{context:l,action:n}):"primary-rounded"===t?(0,s.jsx)(i,{context:l,action:n}):(0,s.jsx)(a,{context:l,action:n})}},7899:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return F}});var s=l(7437),r=l(2265),i=l(6523);function a(e){let{handleQuickMove:t}=e;return(0,s.jsxs)("div",{className:"fixed top-0 left-0 flex justify-between items-center p-6 max-sm:p-3 w-full h-full max-h-16 z-20",children:[(0,s.jsx)("div",{onClick:()=>{t(0)},children:(0,s.jsx)("p",{className:"font-medium text-xl max-sm:text-sm cursor-pointer",children:"김준현 개발자 포트폴리오"})}),(0,s.jsx)("div",{className:"flex gap-6 max-sm:gap-2 max-sm:text-xs",children:["소개","기술 스택","경험","프로젝트","연락처"].map((e,l)=>(0,s.jsx)(n,{index:l+1,context:e,handleQuickMove:t},l))})]})}let n=e=>{let{index:t,context:l,handleQuickMove:r}=e;return(0,s.jsx)("a",{onClick:()=>r(t),className:"p-3 max-sm:p-0 text-gray-500 hover:text-black hover:scale-110 transition cursor-pointer",children:l})};var c=l(6648);let o=e=>{let{title:t,desc:l,isRight:r}=e;return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:"w-1/2 h-full sm:blur-sm hover:blur-none sm:backdrop-blur-sm hover:backdrop-blur-none transition-all z-10",children:(0,s.jsxs)("div",{className:"flex flex-col justify-center max-sm:-translate-y-48 w-full h-full p-6 ".concat(r?"items-end text-right":"items-start",' "'),children:[(0,s.jsx)("p",{className:"text-7xl max-sm:text-3xl font-medium",children:t}),(0,s.jsx)("p",{className:"text-xl max-sm:text-sm mt-6 max-w-420 break-keep",children:l})]})})})};var x=e=>{let{sectionRef:t}=e;return(0,s.jsxs)("div",{ref:t,className:"flex w-full h-svh",children:[(0,s.jsxs)("div",{className:"absolute top-0 left-0 w-full h-svh overflow-hidden",children:[(0,s.jsx)(c.default,{src:"/profile-image.png",alt:"main-profile-image",width:0,height:0,className:"relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 sm:scale-90 w-full h-full object-contain"}),(0,s.jsx)("p",{className:"max-sm:hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-64 text-9xl font-medium -z-10",children:"PORTFOLIO"})]}),(0,s.jsx)(o,{title:"designer",desc:"보고 듣는 모든 경험에서 영감을 얻어 저만의 디자인을 다양한 프로젝트에 적용시켰습니다.",isRight:!1}),(0,s.jsx)(o,{title:"<coder />",desc:"깔끔하고 효율적인 코드 작성과 생각하는 것을 좋아하는 주니어 개발자입니다.",isRight:!0})]})},d=e=>{let{context:t}=e;return(0,s.jsxs)("p",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 text-9xl max-sm:text-6xl text-center text-gray-300 font-medium opacity-50",children:[t,"."]})};let m=e=>{let{item_key:t,wrapperRef:l,child:r}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{ref:l,className:"w-1/2 opacity-0 transition-all duration-1000",children:r}),0!==t&&t%2==1?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"w-1/2"}),(0,s.jsx)("div",{className:"w-1/2"})]}):null]})},u=e=>{let{header:t,content:l,isRight:r}=e;return(0,s.jsxs)("div",{className:"flex flex-col p-3 ".concat(r?"text-left":"text-right"),children:[(0,s.jsx)("p",{className:"font-medium text-lg max-sm:text-sm",children:t?"".concat(r?"<"+t+" />":t+""):null}),l.map((e,t)=>(0,s.jsx)("p",{className:"max-sm:text-xs break-keep",children:""===e?(0,s.jsx)("br",{}):e},t))]})};var p=e=>{let{script:t,sectionRef:l}=e,i=t.about_desc,[a,n]=(0,r.useState)(0),c=(0,r.useRef)(null),o=(0,r.useRef)(null),x=(0,r.useRef)(null),p=(0,r.useRef)(null),f=(0,r.useRef)(null),h=r.useMemo(()=>[c,o,x,p,f],[]);return(0,r.useEffect)(()=>{let e;let t=100/h.length;e=new IntersectionObserver(e=>{let[l]=e,s=l.target;l.isIntersecting&&(s.style.opacity="1",n(a+t))},{threshold:.5}),h.map((l,s)=>{l.current&&a===s*t&&e.observe(l.current)})},[h,a]),(0,s.jsx)("div",{ref:l,className:"relative w-full max-w-screen h-full p-20 max-sm:p-1",children:(0,s.jsxs)("div",{className:"flex flex-row flex-wrap justify-start items-center w-full max-w-screen h-full",children:[(0,s.jsx)("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full border border-transparent py-10 max-sm:py-5",children:(0,s.jsx)("div",{className:"relative top-0 left-0 border border-black transition-all duration-1000",style:{height:"".concat(a,"%")}})}),(0,s.jsx)(d,{context:"About Me"}),(0,s.jsx)("div",{className:"w-1/2 max-sm:w-1/2"}),Object.keys(i).map((e,t)=>{var l;return(0,s.jsx)(m,{wrapperRef:h[t],item_key:t,child:(0,s.jsx)(u,{header:(null===(l=i[e])||void 0===l?void 0:l.header)||"",content:i[e].content,isRight:i[e].isRight})},t)})]})})},f=l(5785),h=l(9726);let j=e=>{let{stack_desc_key:t,context:l}=e;return(0,s.jsxs)("div",{className:"flex flex-col",children:[(0,s.jsx)("p",{className:"text-lg max-sm:text-base font-medium",children:t}),(0,s.jsx)("div",{className:"flex flex-col",children:l[t].map((e,t)=>(0,s.jsx)("p",{className:"max-sm:text-xs",children:e},t))})]})};var v=e=>{let{script:t,sectionRef:l}=e,i=t.stack_desc,a=t.stack_badge,n=Object.keys(i),[o,x]=(0,r.useState)(0),m=e=>{var t;"left"===e?x((t=o-1)<0?n.length-1:t):x(t=(o+1)%n.length)};return(0,s.jsxs)("div",{ref:l,className:"relative flex justify-center items-center w-screen h-apple max-sm:min-h-sm-apple py-20 max-sm:py-10",children:[(0,s.jsx)(d,{context:"Stack"}),(0,s.jsxs)("div",{className:"flex justify-center items-start w-full max-sm:max-w-full sm:gap-3",children:[(0,s.jsx)("div",{className:"pl-2 cursor-pointer pt-10 max-sm:pt-4",children:(0,s.jsx)(h.yKR,{size:40,onClick:()=>{m("left")},className:"text-white bg-black rounded-full hover:scale-110 transition opacity-50 hover:opacity-100"})}),(0,s.jsxs)("div",{className:"flex flex-col justify-center items-start w-full max-w-7xl max-sm:w-full h-full p-3",children:[(0,s.jsxs)("div",{className:"flex gap-3",children:[(0,s.jsx)("div",{className:"flex justify-center items-center",children:(0,s.jsx)(c.default,{src:"/stack/".concat(n[o],".svg"),alt:"",width:40,height:40})}),(0,s.jsx)("p",{className:"text-3xl max-sm:text-2xl font-medium",children:i[n[o]].title})]}),(0,s.jsx)("div",{className:"flex flex-row flex-wrap gap-3 mt-3 mb-6",children:Object.keys(a).map((e,t)=>{if(i[n[o]].level>t)return(0,s.jsx)(f.Z,{icon:null,iconSize:null,bgColor:"bg-blue-600",fontSize:"text-sm",fontColor:"text-white",context:a[Number(e)]},t)})}),(0,s.jsx)("div",{className:"flex flex-col flex-wrap gap-3  break-keep",children:Object.keys(i[n[o]].points).map((e,t)=>(0,s.jsx)(j,{stack_desc_key:e,context:i[n[o]].points},t))})]}),(0,s.jsx)("div",{className:"pr-2 cursor-pointer pt-10 max-sm:pt-4",children:(0,s.jsx)(h.UKx,{size:40,onClick:()=>{m("right")},className:"text-white bg-black rounded-full hover:scale-110 transition opacity-50 hover:opacity-100"})})]})]})},b=l(3872),g=l(7476);let y=e=>{let{title:t,period:l,summary:r,location:i,task:a,url:n,keyword:c,accordian:o,accordianIndex:x,handleAccordian:d}=e;return(0,s.jsxs)("div",{className:"flex flex-col w-full max-w-7xl max-sm:w-full max-sm:min-h-14 border px-3 py-1 rounded shadow-sm bg-white overflow-hidden transition-all duration-1000 cursor-pointer ".concat(o[x]?"max-h-screen":"max-h-16"),onClick:()=>{d(x)},children:[(0,s.jsxs)("div",{className:"flex justify-between items-center mb-6",children:[(0,s.jsxs)("div",{className:"flex flex-col break-keep max-sm:w-4/5 transition-all duration-700 ".concat(o[x]?"text-black":"text-gray-400"),children:[(0,s.jsx)("p",{className:"text-lg max-sm:text-sm font-bold",children:t}),(0,s.jsx)("p",{className:"text-sm max-sm:text-xs truncate",children:r})]}),(0,s.jsx)("div",{className:"flex max-sm:flex-col gap-3 max-sm:gap-1",children:(0,s.jsx)("div",{className:"flex justify-center items-center",children:o[x]?(0,s.jsx)(h.L2V,{size:20}):(0,s.jsx)(h.qhg,{size:20})})})]}),(0,s.jsxs)("div",{className:"flex flex-col",children:[(0,s.jsxs)("div",{className:"flex gap-3 mb-3 flex-wrap",children:[(0,s.jsx)(f.Z,{icon:null,iconSize:"1em",bgColor:"bg-slate-600",fontSize:"text-sm",fontColor:"text-white",context:l}),(0,s.jsx)(f.Z,{icon:b.GUT,iconSize:"1em",bgColor:"bg-blue-600",fontSize:"text-sm",fontColor:"text-white",context:i}),(0,s.jsx)("a",{href:n[1],target:"_blank",children:(0,s.jsx)(f.Z,{icon:g.AlO,iconSize:"1em",bgColor:"bg-blue-600",fontSize:"text-sm",fontColor:"text-white",context:n[0]})})]}),Object.keys(a).map((e,t)=>(0,s.jsxs)("div",{className:"flex flex-col gap-1 w-full mb-3",children:[(0,s.jsx)("p",{className:"text-lg max-sm:text-base font-medium",children:a[e].title}),a[e].content.map((e,t)=>(0,s.jsx)("div",{className:"",children:(0,s.jsxs)("p",{className:"break-keep text-sm max-sm:text-xs",children:["\xb7 ",e]})},t))]},t)),(0,s.jsxs)("div",{className:"flex flex-wrap gap-3 my-3",children:[(0,s.jsx)("p",{className:"font-medium",children:"키워드"}),c.map((e,t)=>(0,s.jsx)(f.Z,{icon:null,iconSize:null,bgColor:"bg-blue-600",fontColor:"text-white",fontSize:"text-sm",context:e},t))]})]})]})};var w=e=>{let{script:t,sectionRef:l}=e,i=t.exp_desc,[a,n]=(0,r.useState)(Array(Object.keys(i).length).fill(!1)),c=e=>{let t=[...a];t[e]=!t[e],n(t)};return(0,s.jsxs)("div",{ref:l,className:"relative flex flex-col gap-3 justify-center items-center w-full h-full sm:min-h-sm-apple p-20 max-sm:p-3 max-sm:mb-20",children:[(0,s.jsx)(d,{context:"Work Experience"}),Object.keys(i).map((e,t)=>(0,s.jsx)(y,{title:e,period:i[e].period,summary:i[e].summary,location:i[e].location,task:i[e].task,url:i[e].url,keyword:i[e].keyword,accordian:a,accordianIndex:t,handleAccordian:c},t))]})},N=l(6463),S=l(9522),k=l(8905),O=e=>{let{sectionRef:t,script:l}=e,r=(0,N.useRouter)(),i=l.project_desc,a=S.m,n=Object.keys(a).length,c=Object.keys(i.paper).length,o=Object.keys(i.award).length;return(0,s.jsxs)("div",{ref:t,className:"relative flex flex-col w-full max-w-screen h-full min-h-sm-apple p-20 max-sm:p-3 max-sm:text-xs",children:[(0,s.jsx)(d,{context:"Project"}),(0,s.jsxs)("div",{className:"flex max-sm:flex-col max-sm:gap-16 justify-around items-start max-sm:items-end",children:[(0,s.jsxs)("div",{className:"flex flex-col justify-around items-end gap-3 text-right",children:[(0,s.jsxs)("div",{className:"flex justify-around items-center text-right gap-6",children:[(0,s.jsx)("p",{className:"text-7xl font-bold",children:n}),(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{children:"지금까지"}),(0,s.jsx)("p",{children:"개의 프로젝트를"}),(0,s.jsx)("p",{children:"진행했습니다."})]})]}),(0,s.jsx)("div",{className:"flex flex-col gap-3",children:Object.keys(a).map((e,t)=>(0,s.jsx)("div",{children:(0,s.jsxs)("div",{className:"w-full flex justify-end items-center gap-3",children:[a[e].detail.demo?(0,s.jsx)(f.Z,{icon:null,iconSize:null,bgColor:"bg-green-500",fontColor:"text-white",fontSize:"text-sm",context:"배포됨"}):null,(0,s.jsx)("p",{children:a[e].title})]})},t))})]}),(0,s.jsxs)("div",{className:"flex flex-col justify-around items-end gap-3 text-right",children:[(0,s.jsxs)("div",{className:"flex justify-around items-center gap-6",children:[(0,s.jsx)("p",{className:"text-7xl font-bold",children:c}),(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{children:"지금까지"}),(0,s.jsx)("p",{children:"개의 논문을"}),(0,s.jsx)("p",{children:"투고했습니다."})]})]}),(0,s.jsx)("div",{className:"flex flex-col gap-3",children:Object.keys(i.paper).map((e,t)=>(0,s.jsx)("div",{className:"cursor-pointer",onClick:()=>null!==i.paper[e].url?r.push(i.paper[e].url||""):alert("참조하는 페이지가 없습니다."),children:(0,s.jsxs)("div",{className:"w-full flex justify-end items-center gap-3",children:[(0,s.jsx)("p",{className:"truncate",children:i.paper[e].title}),(0,s.jsx)(f.Z,{icon:null,iconSize:null,bgColor:"bg-gray-500",fontColor:"text-white",fontSize:"text-sm",context:i.paper[e].tag||""})]})},t))})]}),(0,s.jsxs)("div",{className:"flex flex-col justify-around items-end gap-3 text-right",children:[(0,s.jsxs)("div",{className:"flex justify-around items-center gap-6 ",children:[(0,s.jsx)("p",{className:"text-7xl font-bold",children:o}),(0,s.jsxs)("div",{children:[(0,s.jsx)("p",{children:"지금까지"}),(0,s.jsx)("p",{children:"개의 상장을"}),(0,s.jsx)("p",{children:"수여받았습니다."})]})]}),(0,s.jsx)("div",{className:"flex flex-col gap-3",children:Object.keys(i.award).map((e,t)=>(0,s.jsx)("div",{children:(0,s.jsxs)("div",{className:"w-full flex justify-end items-center gap-3",children:[(0,s.jsx)("p",{children:i.award[e].title}),(0,s.jsx)(f.Z,{icon:null,iconSize:null,bgColor:"bg-blue-500",fontColor:"text-white",fontSize:"text-sm",context:i.award[e].tag||""})]})},t))})]})]}),(0,s.jsxs)("div",{className:"flex flex-col justify-center items-center mt-10 gap-3",children:[(0,s.jsxs)("p",{className:"text-lg max-sm:text-base",children:["프로젝트에 대한 ",(0,s.jsx)("span",{className:"font-medium",children:"기술서 및 명세서"}),"가 궁금하신가요?"]}),(0,s.jsx)("p",{children:"또는"}),(0,s.jsxs)("p",{className:"text-lg max-sm:text-base",children:[(0,s.jsx)("span",{className:"font-medium",children:"논문이나 상장"}),"에 대해 더 알고싶으신가요?"]}),(0,s.jsx)(k.Z,{type:"secondary",context:"프로젝트 보러가기",action:()=>{r.push("/portfolio/work")}})]})]})};let C=e=>{let{src:t,alt:l,width:r,height:i,url:a}=e,n=()=>{window.open(a,"_blank")};return(0,s.jsx)("div",{className:"opacity-50 cursor-pointer hover:opacity-100 transition-all",onClick:()=>{n()},children:(0,s.jsx)(c.default,{src:t,alt:l,width:r,height:i})})};var R=e=>{let{sectionRef:t}=e;return(0,s.jsx)("div",{ref:t,className:"flex justify-center items-center w-full h-20 border-t",children:(0,s.jsxs)("div",{className:"flex justify-between items-center w-2/3 max-sm:w-full h-full max-sm:px-2 max-sm:text-xs text-gray-800",children:[(0,s.jsxs)("div",{className:"flex flex-col",children:[(0,s.jsx)("p",{children:"@2024 Junhyeon Kim."}),(0,s.jsx)("p",{children:"All rights reserved"})]}),(0,s.jsxs)("div",{className:"flex gap-2 max-sm:w-1/4",children:[(0,s.jsx)(C,{src:"/Github.png",alt:"github",width:40,height:40,url:"https://github.com/itsjh1242"}),(0,s.jsx)(C,{src:"/Blog.png",alt:"github",width:40,height:40,url:"https://jundev717.tistory.com/"}),(0,s.jsx)(C,{src:"/Email.png",alt:"github",width:40,height:40,url:"mailto:itsjh@kakao.com"})]}),(0,s.jsxs)("div",{className:"flex flex-col items-end",children:[(0,s.jsx)("p",{children:"@Designed & Developed by"}),(0,s.jsx)("p",{children:"김준현"})]})]})})};let P={intro:{header:"intro",content:["안녕하세요, 주니어 개발자 김준현입니다.","동서대학교 컴퓨터공학부에서 소프트웨어공학을 전공했습니다.","","소프트웨어 공학과 데이터베이스 구축을 집중적으로 깊이 있게 공부했으며,","API 구축을 통해 사용자와 시스템 간의 상호작용이 가능한 다양한 웹/앱 서비스를 개발했습니다."],isRight:!0},motto:{header:"motto",content:["높은 완성도의 서비스 기반 프로젝트를 개발하는 것은 효율적이고 클린한 코드를 작성하는 것뿐만 아니라, 나타내고자 하는 핵심 내용을 직관적이고 유연하게 표현하는 것도 중요한 가치라고 생각합니다.","","제게 코드는 붓과 물감이고, 웹/앱은 캔버스입니다.","평소에 보고 듣는 모든 경험을 디자인 요소로 가공하여 다양한 프로젝트에 녹여냈습니다."],isRight:!1},lab:{header:"lab",content:["학부생 때, UbSE(Ubiquitous SW Engineering) 연구실에서 AI+X 연구원으로 활동하며,","개발 역량을 키우기 위해 선후배들과의 멘토링에 집중했고, 다양한 프로젝트와 공모전 경험을 쌓을 수 있었습니다.","","특히, 주간 업무 보고 세미나를 통해 한 주간 수행한 개인 공부 및 프로젝트 진행 상황 등을 보고하면서, 업무 수행 능력을 자가진단하고 자기 객관화하며 성장할 수 있었습니다.","","또한, 팀 프로젝트에서 팀원 간의 배려를 통한 원활한 의사소통이 정해진 시간 내에 프로젝트를 완성시키는 중요한 요소임을 깨달았습니다."],isRight:!0},strength:{header:"strength",content:["성공과 실패는 다르면서도 같은 의미를 가진다고 생각합니다.","저에게 있어서 실패란 도전하지 않는 것입니다.","긍정적인 사고를 통해 동료와 함께 시너지를 발휘하는 것을 좋아합니다.","","끊임없이 생각하고 지치지 않는 열정으로 상승불패하며,","함께 일하고 싶은 동료 개발자가 되겠습니다."],isRight:!1},certificate:{header:"정보처리기사 자격증 취득",content:["2024년 1회차"],isRight:!0}},E={react:{title:"React(리액트)",level:3,points:{"React 생태계의 다양한 라이브러리 활용":["React를 사용하여 프로젝트를 개발할 때 다양한 라이브러리를 활용하여 개발 생산성을 높입니다.","React Router를 사용하여 페이지 라우팅을 구현하고, Axios를 사용하여 HTTP 요청을 처리하며, Styled Components를 활용한 CSS-in-JS 스타일링 등을 자유롭게 사용합니다."],"Custom Hook 활용":["함수형 컴포넌트 문법에 익숙하며, 재사용을 위해 컴포넌트 로직을 함수로 뽑아냅니다.","컴포넌트 기반 아키텍처에 대한 이해를 바탕으로, 가독성이 낮고 유지보수가 어려운 코드를 재사용 가능한 작은 조각으로 나누어 각 조각을 독립적으로 활용하는 데 능숙합니다."],"React 성능 최적화":["React를 사용하여 프로젝트를 진행할 때, 가상 DOM을 통한 성능 최적화를 고려합니다.","Redux를 활용하여 전역 상태 관리를 하고, React.memo 등 다양한 성능 최적화 기법을 공부하고 적용하고자 합니다."]}},next:{title:"Next.js",level:3,points:{"서버 사이드 렌더링(SSR)":["Next.js를 사용하여 서버 사이드 렌더링(SSR)과 정적 사이트 생성(SSG)을 구현한 경험이 있습니다."],"라우팅 및 코드 스플리팅":["내장된 라우팅 시스템을 활용하여 페이지 간의 이동을 관리할 수 있고, 컴포넌트간의 복잡한 로직으로 인한 성능 저하 문제를 코드 스플리팅을 통해 동적으로 할당하여 처리할 수 있습니다."],"CSS 모듈 사용(Tailwind CSS)":["Next.js를 사용하여 프로젝트를 개발하면서 Tailwind CSS를 처음 접하게 되었고, Tailwind의 강력한 커스터마이징 기능을 적극 활용하여 CSS 작성시간을 절약했습니다."]}},node:{title:"Node.js",level:3,points:{"서버 개발":["Node.js를 사용하여 서버 사이드 개발을 수행한 경험이 있습니다. Express와 함께 사용하여 RESTful API를 설계하고 구현했습니다.","ejs를 활용한 프론트를 구현하는데 있어서도 능숙합니다."],"실시간 웹 소켓 통신":["Socket.IO를 활용하여 웹 소켓을 구현하고 실시간으로 데이터를 주고받는 서비스를 개발한 경험이 있습니다."],"비동기 프로그래밍":["Node.js의 비동기 특성을 활용하여 서버를 개발하고, Callback, Promise, async/await 등의 패턴을 사용하여 코드를 작성할 수 있습니다."],"배포 경험":["npm을 사용하여 패키지를 관리하고, AWS와 PM2를 사용하여 서비스를 배포한 경험이 있습니다."]}},ts:{title:"TypeScript(타입스크립트)",level:3,points:{"타입스크립트 활용":["TypeScript를 활용하여 React, Next.js 등의 웹 애플리케이션을 개발한 경험이 있습니다."],"타입스크립트 이해":["TypeScript에 대한 이해도를 가지고 있으며, 코드의 가독성과 유지보수성 향상에 대해 신경을 써서 코딩합니다."]}},javascript:{title:"JavaScript(자바스크립트)",level:3,points:{"웹 개발":["JavaScript를 사용하여 동적이고 상호작용적인 웹 애플리케이션을 개발한 경험이 있습니다.","React와 Next.js 등을 사용하여 프론트엔드 개발을 수행했습니다."],"서버 개발":["Node.js를 활용하여 JavaScript를 서버 사이드에서 사용하여 백엔드 로직을 개발하고 RESTful API를 구현했습니다."],"데이터 처리":["JavaScript와 라이브러리 및 도구를 함께 사용하여 Json과 Excel등의 다양한 데이터를 처리한 경험이 있습니다."],"웹 애니메이션":["JavaScript를 사용하여 웹 페이지에 동적인 애니메이션을 구현하는 것을 좋아합니다."]}},html:{title:"HTML5",level:3,points:{"기본적인 이해":["HTML을 사용하여 웹 페이지의 구조를 정의하는 기본적인 이해도를 가지고 있습니다."],"웹 표준":["HTML을 사용하여 프로젝트 개발을 할 때, 웹 표준을 지키려 노력합니다."],"검색엔진 최적화":["문법에 맞는 HTML을 작성하고자 하며, 메타 태그 등을 활용하여 검색엔진 최적화를 수행한 경험이 있습니다."]}},tw:{title:"Tailwind CSS",level:3,points:{"TailWind CSS에 대한 이해":["Tailwind CSS의 기본 문법을 숙지하고 있으며, 다양한 디자인 및 레이아웃 등을 구현할 수 있습니다."],"커스텀 스타일":["Tailwind CSS가 제공하는 한정적인 문법 외에도 필요한 디자인이나 레이아웃 등에 따라 유연하게 여러 스타일을 커스텀하여 사용할 수 있습니다."],"반응형 디자인":["사용자 디바이스(데스크톱, 태블릿, 모바일)에 따라 적절하게 디자인 요소를 배치할 수 있습니다."]}},css:{title:"CSS(Cascading Style Sheets)",level:3,points:{"레이아웃 디자인":["CSS를 사용하여 웹 페이지의 레이아웃을 디자인하는데 능숙합니다.","Grid와 Flex를 상황에 따라 적절히 사용할 수 있습니다."],스타일링:["CSS 기본 문법에 대한 이해도를 가지고 있으며, 디지털 정부서비스 UI/UX 가이드라인 등의 디자인 표준을 참고하여 웹 페이지를 구현할 수 있습니다."],애니메이션:["CSS를 사용하여 다양한 애니메이션 효과를 구현한 경험이 있습니다."],"반응형 웹 디자인":["반응형 웹 디자인을 위해 미디어 쿼리를 활용하여 다양한 화면 크기에 유연하게 대응하는 스타일을 적용시킬 수 있습니다."],SCSS:["CSS보다 간단한 표기법으로 CSS를 구조화하여 SCSS를 활용해 개발한 경험이 있습니다."]}},flutter:{title:"Flutter(플러터)",level:2,points:{"크로스 플랫폼 개발":["Flutter를 사용하여 안드로이드 및 iOS 플랫폼을 대상으로 한 모바일 애플리케이션을 개발한 경험이 있습니다.","하나의 코드베이스로 여러 플랫폼을 대응하여 개발 생산성을 높였습니다."],"위젯에 대한 이해도":["Flutter의 다양한 위젯을 활용하여 UI/UX를 디자인하고 구현한 경험이 있습니다."]}},mysql:{title:"MySQL",level:3,points:{"데이터베이스 설계 및 모델링":["MySQL을 사용하여 프로젝트에 필요한 데이터베이스를 구축하고 설계 및 모델링한 경험이 있습니다.","기본적인 정규화의 개념을 이해하고 효율적인 데이터 구조를 구축하여 데이터 관리 및 검색 성능을 최적화했습니다."],"CRUD 쿼리 작성 및 최적화":["데이터베이스 조작을 위한 Create, Read, Update, Delete에 대한 기본적인 문법을 숙지하고 있으며, 복잡한 쿼리도 구현 가능합니다.","피할 수 없는 상황에서의 다중 JOIN으로 인한 복잡한 쿼리를 작성하고 실행하여 데이터 전달을 수행한 경험이 있습니다."]}},firebase:{title:"Firebase",level:3,points:{"데이터베이스 설계 및 모델링":["Firebase를 사용하여 프로젝트에 필요한 데이터베이스를 구축하고 설계 및 모델링한 경험이 있습니다.","Firebase가 가지고있는 NoSQL의 개념을 이해하고 있으며, 상황에 따라 적절한 데이터베이스 구조를 만들어봤습니다.","Firebase의 Collection, Document의 개념을 이해하고 있습니다."],"CRUD 쿼리 작성":["데이터베이스 조작을 위한 Create, Read, Update, Delete에 대한 기본적인 문법을 숙지하고 있으며, 복잡한 쿼리도 구현 가능합니다."]}},python:{title:"Python",level:3,points:{"웹 개발":["Python 웹 프레임워크인 Flask를 사용하여 웹 애플리케이션을 개발한 경험이 있습니다."],"NLP & BERT":["자연어 처리를 위해 KoNLPy와, 텍스트 기반 데이터에서 감정을 추출하기 위해 KoBERT를 사용하여 프로젝트를 개발한 경험이 있습니다.","해당 프로젝트에서 KoBERT를 활용하여 텍스트 데이터를 학습시켰으며, 해당 모델과 GPT를 사용하여 감정 분석 기반 AI 챗봇 시스템을 개발한 경험이 있습니다."],"웹 스크래핑":["Beautiful Soup와 같은 라이브러리를 사용하여 웹 스크래핑 및 데이터 수집 프로젝트를 진행한 경험이 있습니다.","웹페이지에서 데이터를 추출하고 구조화하여 분석 및 활용할 수 있도록 처리했습니다."]}},figma:{title:"Figma",level:3,points:{"UI/UX 디자인":["Figma를 사용하여 사용자 인터페이스와 사용자 경험을 설계한 경험이 있습니다.","다양한 프로젝트에서 와이어프레임, 프로토타입, 및 고해상도 디자인을 제작했습니다."],협업:["Figma를 사용하여 디자인 팀과 협업할 수 있습니다."],"디자인 시스템 구축":["일관된 디자인을 유지하기 위해 디자인 시스템을 구축하고 관리한 경험이 있습니다.","컴포넌트와 스타일 가이드를 사용하여 일관성 있는 디자인을 구현했습니다."]}},android:{title:"Android(안드로이드)",level:2,points:{"안드로이드 개발 경험":["Android Studio와 같은 통합 개발 환경과 Java를 사용하여 안드로이드 애플리케이션 개발을 진행한 경험이 있습니다."],"데이터베이스 연동":["안드로이드의 보안상의 이유로 인해 외부 데이터베이스(MySQL)에 직접적으로 접근하지 못해서 Retrofit2를 활용한 경험이 있습니다.","안드로이드와 Node.js를 연결하여 데이터베이스(MySQL)와 간접적으로 데이터를 주고받는 방식을 사용했습니다."]}},arduino:{title:"Arduino(아두이노)",level:2,points:{"프로젝트 경험":["아두이노의 지문인식 센서 등 다양한 모듈을 사용하여 Node.js와 연동한 프로젝트를 개발한 경험이 있습니다."],"데이터 통신":["Wi-Fi와 블루투스를 활용하여 데이터를 전송한 경험이 있습니다."]}},aws:{title:"AWS",level:2,points:{"EC2 인스턴스 관리":["Amazon EC2를 사용하여 웹 애플리케이션의 서버를 관리하고, EC2 인스턴스 구성, 탄력적 IP 등의 경험이 있습니다."]}},github:{title:"Github",level:3,points:{형상관리:["프로젝트 진행 시 Github을 사용하여 형상관리하는 것에 능숙합니다."],"프로젝트 관리":["Git을 사용하여 전반적으로 프로젝트를 관리하며, 브랜치를 나누고 합치는 협업을 한 경험이 있습니다."],"Github을 통한 배포":["Github-pages를 사용하여 웹 애플리케이션을 배포한 경험이 있습니다."]}}},I={1:"기본적인 이해도를 갖추고 있어요",2:"프로젝트 경험이 있어요",3:"능숙하게 사용할 수 있어요"},A={"AI+X 융합연구원":{period:"2023.03~12",summary:"학부생을 중심으로 운영되는 융합기술 연구소에서 1년간 연구원으로 활동했습니다.",location:"Busan, Korea",task:{motion:{title:"모션인식 기반 이중암호 인증방안",content:["사용자의 행동 패턴 분석을 기반으로 한 암호 인증 시스템을 개발했습니다.","휴대폰에 내장된 자이로센서를 활용해 x, y, z축을 -1부터 1까지 0.5 단위로 구분하여 사용자의 행동 패턴을 분석하는 방식을 고안했습니다.","크로스 플랫폼인 Flutter를 사용하여 앱을 개발했으며, Node.js를 서버로 두어 API를 구축하고 데이터 통신을 했습니다.","본 연구를 통해 학술대회 구두 발표 및 포스터 발표를 경험할 수 있었습니다."]},attendance:{title:"지문인식 센서를 활용한 연구실 근태 관리 시스템",content:["연구원들의 연구실 입퇴실을 효율적으로 관리하기 위해 지문인식 센서를 활용한 근태 관리 시스템을 개발했습니다.","아두이노 모듈을 활용하여 지문을 인식하는 하드웨어를 제작하고, Node.js를 활용해 근태를 확인할 수 있는 프론트 웹과 아두이노 모듈 통신 및 근태 관리 데이터 전송을 위한 백엔드를 개발했습니다."]}},url:["aisw.dongseo.ac.kr","https://aisw.dongseo.ac.kr/comm/comm_01_view.html?kind=1&seq=8&page=1&keyword="],keyword:["동서대학교 소프트웨어중심대학 사업단","행위기반인증","지문인식 근태관리 시스템"]},"R&D 전문기업 에핀(EPIN) 인턴십":{period:"2022.06~08",summary:"에핀(EPIN)에서 개발 중이던 '테니스 대진표 자동화 프로젝트'에 참여했습니다.",location:"Busan, Korea",task:{epin:{title:"테니스 대진표 자동화 프로젝트",content:["프로젝트에 참여하면서 크로스플랫폼인 Flutter를 활용한 웹 애플리케이션 개발에 대한 이해를 높였습니다.","Node.js를 서버로 두어 구축된 API를 리팩토링 했습니다.","팀 매칭 시 발생할 수 있는 오류에 대한 가능한 많은 테스트 케이스를 만들어 테스트를 했습니다."]}},url:["epin.co.kr","https://epin.co.kr/"],keyword:["동서대학교 산학협력단","테니스 대진표 자동화 프로젝트","Flutter"]}},_={paper:{"ksci-2023-07":{title:"GPT-3와 KoBERT를 활용한 감정 분석 기반 AI 챗봇 시스템",period:"2023.07",tag:"KSCI",url:"https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE11528265"},"kics-2024-01":{title:"긍정적 감정 유발을 위한 AI챗봇기반 일기 작성 시스템",period:"2024.02",tag:"KIECS",url:"https://scienceon.kisti.re.kr/commons/util/originalView.do?cn=JAKO202408943326275&oCn=JAKO202408943326275&dbt=JAKO&journal=NJOU00304070"},"10-2023-0178771":{title:"특허 출원 (10-2023-0178771)",period:"2023-12",tag:"특허",url:null}},award:{"award-reddot-2022":{title:"2022 Red Dot Design Award",period:"Germany, 1 August 2022",tag:"Best of the Best",url:null},"award-ksci-2023-07":{title:"2023 한국컴퓨터정보학회(KSCI)",period:"2023.07",tag:"우수논문상",url:null},"award-dsu-2023-052":{title:"2023 쇼미더동서AI 경진대회",period:"2023.11",tag:"우수상",url:null},"award-dsu-2023-062":{title:"2023 쇼미더동서AI 경진대회",period:"2023.11",tag:"특별상",url:null},"award-dsu-2023-0027":{title:"2023 PCCP 성적우수(코딩테스트)",period:"2023.09",tag:"성적우수 증서",url:null},"award-dev-contest-2023":{title:"2023 BDIA 잡페어 DEV CONTEST",period:"2023.11",tag:"장려상",url:null}}};var z=l(7449),T=l.n(z),F=()=>{let e=(0,r.useRef)(null),t=(0,r.useRef)(null),l=(0,r.useRef)(null),n=(0,r.useRef)(null),c=(0,r.useRef)(null),o=(0,r.useRef)(null),d=[e,t,l,n,c,o];return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(T(),{children:[(0,s.jsx)("title",{children:"김준현 개발자 포트폴리오"}),(0,s.jsx)("meta",{name:"description",content:"김준현 개발자의 포트폴리오 사이트입니다."},"desc")]}),(0,s.jsx)(a,{handleQuickMove:e=>{var t;null===(t=d[e].current)||void 0===t||t.scrollIntoView({behavior:"smooth"})}}),(0,s.jsxs)("div",{className:"flex flex-col w-full h-full",children:[(0,s.jsx)(x,{sectionRef:e,prefix:i.O}),(0,s.jsx)(p,{script:{about_desc:P},sectionRef:t,prefix:i.O}),(0,s.jsx)(v,{script:{stack_desc:E,stack_badge:I},sectionRef:l,prefix:i.O}),(0,s.jsx)(w,{script:{exp_desc:A},sectionRef:n,prefix:i.O}),(0,s.jsx)(O,{script:{project_desc:_},sectionRef:c,prefix:i.O}),(0,s.jsx)(R,{sectionRef:o,prefix:i.O})]})]})}},6523:function(e,t,l){"use strict";l.d(t,{O:function(){return s}});let s="/portfolio"},6463:function(e,t,l){"use strict";var s=l(1169);l.o(s,"useRouter")&&l.d(t,{useRouter:function(){return s.useRouter}})},7449:function(e,t){"use strict";function l(){return null}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1810:function(e,t,l){"use strict";l.d(t,{w_:function(){return x}});var s=l(2265),r={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=s.createContext&&s.createContext(r),a=["attr","size","title"];function n(){return(n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s])}return e}).apply(this,arguments)}function c(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),l.push.apply(l,s)}return l}function o(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?c(Object(l),!0).forEach(function(t){var s,r;s=t,r=l[t],(s=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var l=e[Symbol.toPrimitive];if(void 0!==l){var s=l.call(e,t||"default");if("object"!=typeof s)return s;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(s))in e?Object.defineProperty(e,s,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[s]=r}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):c(Object(l)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))})}return e}function x(e){return t=>s.createElement(d,n({attr:o({},e.attr)},t),function e(t){return t&&t.map((t,l)=>s.createElement(t.tag,o({key:l},t.attr),e(t.child)))}(e.child))}function d(e){var t=t=>{var l,{attr:r,size:i,title:c}=e,x=function(e,t){if(null==e)return{};var l,s,r=function(e,t){if(null==e)return{};var l={};for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){if(t.indexOf(s)>=0)continue;l[s]=e[s]}return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)l=i[s],!(t.indexOf(l)>=0)&&Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}(e,a),d=i||t.size||"1em";return t.className&&(l=t.className),e.className&&(l=(l?l+" ":"")+e.className),s.createElement("svg",n({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,x,{className:l,style:o(o({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),c&&s.createElement("title",null,c),e.children)};return void 0!==i?s.createElement(i.Consumer,null,e=>t(e)):t(r)}}},function(e){e.O(0,[217,956,240,648,344,971,23,744],function(){return e(e.s=6006)}),_N_E=e.O()}]);
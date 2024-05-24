(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{3419:function(e,t,s){Promise.resolve().then(s.bind(s,9817))},5785:function(e,t,s){"use strict";var l=s(7437),i=s(2265);t.Z=e=>{let{icon:t,bgColor:s,fontColor:a,fontSize:r,context:n}=e;return(0,l.jsxs)("div",{className:"flex justify-center items-center gap-1 px-2 py-1 rounded-3xl ".concat(s," ").concat(a," ").concat(r),children:[t&&(0,l.jsx)("div",{className:"flex justify-center items-center",children:i.createElement(t,{size:"1em"})}),(0,l.jsx)("p",{className:"max-sm:text-xs",children:n})]})}},9817:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return F}});var l=s(7437),i=s(2265),a=s(6523);function r(e){let{handleQuickMove:t}=e;return(0,l.jsxs)("div",{className:"fixed top-0 left-0 flex justify-between items-center p-6 max-sm:p-3 w-full h-full max-h-16 z-20",children:[(0,l.jsx)("div",{onClick:()=>{t(0)},children:(0,l.jsx)("p",{className:"font-medium text-xl max-sm:text-sm cursor-pointer",children:"김준현 개발자 포트폴리오"})}),(0,l.jsx)("div",{className:"flex gap-6 max-sm:gap-2 max-sm:text-xs",children:["About","Stack","Experience","Work","Contact"].map((e,s)=>(0,l.jsx)(n,{index:s+1,context:e,handleQuickMove:t},s))})]})}let n=e=>{let{index:t,context:s,handleQuickMove:i}=e;return(0,l.jsx)("a",{onClick:()=>i(t),className:"p-3 max-sm:p-0 text-gray-500 hover:text-black hover:scale-110 transition cursor-pointer",children:s})};var c=s(6648);let o=e=>{let{title:t,desc:s,isRight:i}=e;return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{className:"w-1/2 h-full sm:blur-sm hover:blur-none sm:backdrop-blur-sm hover:backdrop-blur-none transition-all z-10",children:(0,l.jsxs)("div",{className:"flex flex-col justify-center max-sm:-translate-y-48 w-full h-full p-6 ".concat(i?"items-end text-right":"items-start",' "'),children:[(0,l.jsx)("p",{className:"text-7xl max-sm:text-3xl font-medium",children:t}),(0,l.jsx)("p",{className:"text-xl max-sm:text-sm mt-6 max-w-420 break-keep",children:s})]})})})};var x=e=>{let{sectionRef:t}=e;return(0,l.jsxs)("div",{ref:t,className:"flex w-full h-svh",children:[(0,l.jsxs)("div",{className:"absolute top-0 left-0 w-full h-svh overflow-hidden",children:[(0,l.jsx)(c.default,{src:"/profile-image.png",alt:"main-profile-image",width:0,height:0,className:"relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 sm:scale-90 w-full h-full object-contain"}),(0,l.jsx)("p",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-64 max-sm:-translate-y-80 text-9xl max-sm:text-3xl font-medium -z-10",children:"PORTFOLIO"})]}),(0,l.jsx)(o,{title:"designer",desc:"보고 듣는 모든 경험에서 영감을 얻어 저만의 디자인을 다양한 프로젝트에 적용시켰습니다.",isRight:!1}),(0,l.jsx)(o,{title:"<coder />",desc:"깔끔하고 효율적인 코드 작성과 생각하는 것을 좋아하는 주니어 개발자입니다.",isRight:!0})]})},m=e=>{let{context:t}=e;return(0,l.jsxs)("p",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 text-9xl max-sm:text-6xl text-center text-gray-300 font-medium opacity-50",children:[t,"."]})};let d=e=>{let{item_key:t,wrapperRef:s,child:i}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{ref:s,className:"w-1/2 opacity-0 transition-all duration-1000",children:i}),0!==t&&t%2==1?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:"w-1/2"}),(0,l.jsx)("div",{className:"w-1/2"})]}):null]})},u=e=>{let{header:t,content:s,isRight:i}=e;return(0,l.jsxs)("div",{className:"flex flex-col p-3 ".concat(i?"text-left":"text-right"),children:[(0,l.jsx)("p",{className:"font-medium text-lg max-sm:text-sm",children:t?"".concat(i?"<"+t+" />":t+""):null}),s.map((e,t)=>(0,l.jsx)("p",{className:"max-sm:text-xs break-keep",children:""===e?(0,l.jsx)("br",{}):e},t))]})};var f=e=>{let{script:t,sectionRef:s}=e,a=t.about_dsec,[r,n]=(0,i.useState)(0),c=(0,i.useRef)(null),o=(0,i.useRef)(null),x=(0,i.useRef)(null),f=(0,i.useRef)(null),h=(0,i.useRef)(null),p=i.useMemo(()=>[c,o,x,f,h],[]);return(0,i.useEffect)(()=>{let e;let t=100/p.length;e=new IntersectionObserver(e=>{let[s]=e,l=s.target;s.isIntersecting&&(l.style.opacity="1",n(r+t))},{threshold:.5}),p.map((s,l)=>{s.current&&r===l*t&&e.observe(s.current)})},[p,r]),(0,l.jsx)("div",{ref:s,className:"relative w-full max-w-screen h-full p-20 max-sm:p-1",children:(0,l.jsxs)("div",{className:"flex flex-row flex-wrap justify-start items-center w-full max-w-screen h-full",children:[(0,l.jsx)("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full border border-transparent py-10 max-sm:py-5",children:(0,l.jsx)("div",{className:"relative top-0 left-0 border border-black transition-all duration-1000",style:{height:"".concat(r,"%")}})}),(0,l.jsx)(m,{context:"About Me"}),(0,l.jsx)("div",{className:"w-1/2 max-sm:w-1/2"}),Object.keys(a).map((e,t)=>{var s;return(0,l.jsx)(d,{wrapperRef:p[t],item_key:t,child:(0,l.jsx)(u,{header:(null===(s=a[e])||void 0===s?void 0:s.header)||"",content:a[e].content,isRight:a[e].isRight})},t)})]})})},h=s(5785),p=s(9726);let j=e=>{let{stack_desc_key:t,context:s}=e;return(0,l.jsxs)("div",{className:"flex flex-col",children:[(0,l.jsx)("p",{className:"text-lg max-sm:text-base font-medium",children:t}),(0,l.jsx)("div",{className:"flex flex-col",children:s[t].map((e,t)=>(0,l.jsx)("p",{className:"max-sm:text-xs",children:e},t))})]})};var v=e=>{let{script:t,sectionRef:s}=e,a=t.stack_desc,r=t.stack_badge,n=Object.keys(a),[o,x]=(0,i.useState)(0),d=e=>{var t;"left"===e?x((t=o-1)<0?n.length-1:t):x(t=(o+1)%n.length)};return(0,l.jsxs)("div",{ref:s,className:"relative flex justify-center items-center w-full max-w-screen h-apple max-sm:min-h-sm-apple py-20 max-sm:py-10",children:[(0,l.jsx)(m,{context:"Stack"}),(0,l.jsxs)("div",{className:"flex justify-center items-center w-2/3 max-sm:w-full sm:gap-3",children:[(0,l.jsx)("div",{className:"cursor-pointer",children:(0,l.jsx)(p.yKR,{size:40,onClick:()=>{d("left")}})}),(0,l.jsxs)("div",{className:"flex flex-col justify-center items-start w-full max-sm:w-full h-full p-3",children:[(0,l.jsxs)("div",{className:"flex gap-3",children:[(0,l.jsx)("div",{className:"flex justify-center items-center",children:(0,l.jsx)(c.default,{src:"/stack/".concat(n[o],".svg"),alt:"",width:40,height:40})}),(0,l.jsx)("p",{className:"text-3xl max-sm:text-2xl font-medium",children:a[n[o]].title})]}),(0,l.jsx)("div",{className:"flex flex-row flex-wrap gap-3 mt-3 mb-6",children:Object.keys(r).map((e,t)=>{if(a[n[o]].level>t)return(0,l.jsx)(h.Z,{icon:null,iconSize:null,bgColor:"bg-blue-600",fontSize:"text-sm",fontColor:"text-white",context:r[Number(e)]},t)})}),(0,l.jsx)("div",{className:"flex flex-col flex-wrap gap-3  break-keep",children:Object.keys(a[n[o]].points).map((e,t)=>(0,l.jsx)(j,{stack_desc_key:e,context:a[n[o]].points},t))})]}),(0,l.jsx)("div",{className:"cursor-pointer",children:(0,l.jsx)(p.UKx,{size:40,onClick:()=>{d("right")}})})]})]})},b=s(3872),N=s(7476);let g=e=>{let{title:t,period:s,summary:i,location:a,task:r,url:n,keyword:c,accordian:o,accordianIndex:x,handleAccordian:m}=e;return(0,l.jsxs)("div",{className:"flex flex-col w-2/3 max-sm:w-full max-sm:min-h-14 border px-3 py-1 rounded shadow-sm bg-white overflow-hidden transition-all duration-1000 ".concat(o[x]?"max-h-screen":"max-h-16"),children:[(0,l.jsxs)("div",{className:"flex justify-between items-center mb-6",children:[(0,l.jsxs)("div",{className:"flex flex-col break-keep max-sm:w-4/5 transition-all duration-700 ".concat(o[x]?"text-black":"text-gray-400"),children:[(0,l.jsx)("p",{className:"text-lg max-sm:text-sm font-medium",children:t}),(0,l.jsx)("p",{className:"max-sm:text-xs",children:i})]}),(0,l.jsxs)("div",{className:"flex max-sm:flex-col gap-3 max-sm:gap-1",children:[(0,l.jsx)(h.Z,{icon:null,iconSize:"1em",bgColor:"bg-slate-600",fontSize:"text-sm",fontColor:"text-white",context:s}),(0,l.jsx)("div",{className:"flex justify-center items-center cursor-pointer",onClick:()=>{m(x)},children:o[x]?(0,l.jsx)(p.L2V,{size:20}):(0,l.jsx)(p.qhg,{size:20})})]})]}),(0,l.jsxs)("div",{className:"flex flex-col",children:[(0,l.jsxs)("div",{className:"flex gap-3 mb-3",children:[(0,l.jsx)(h.Z,{icon:b.GUT,iconSize:"1em",bgColor:"bg-blue-600",fontSize:"text-sm",fontColor:"text-white",context:a}),(0,l.jsx)("a",{href:n[1],target:"_blank",children:(0,l.jsx)(h.Z,{icon:N.AlO,iconSize:"1em",bgColor:"bg-blue-600",fontSize:"text-sm",fontColor:"text-white",context:n[0]})})]}),Object.keys(r).map((e,t)=>(0,l.jsxs)("div",{className:"flex flex-col gap-1 w-full mb-3",children:[(0,l.jsx)("p",{className:"text-lg max-sm:text-base font-medium",children:r[e].title}),r[e].content.map((e,t)=>(0,l.jsx)("div",{className:"",children:(0,l.jsxs)("p",{className:"break-keep max-sm:text-xs",children:["\xb7 ",e]})},t))]},t)),(0,l.jsxs)("div",{className:"flex flex-wrap gap-3 my-3",children:[(0,l.jsx)("p",{className:"font-medium",children:"키워드"}),c.map((e,t)=>(0,l.jsx)(h.Z,{icon:null,iconSize:null,bgColor:"bg-blue-600",fontColor:"text-white",fontSize:"text-sm",context:e},t))]})]})]})};var y=e=>{let{script:t,sectionRef:s}=e,a=t.exp_desc,[r,n]=(0,i.useState)(Array(Object.keys(a).length).fill(!1)),c=e=>{let t=[...r];t[e]=!t[e],n(t)};return(0,l.jsxs)("div",{ref:s,className:"relative flex flex-col gap-3 justify-center items-center w-full max-w-screen h-full sm:min-h-sm-apple p-20 max-sm:p-3 max-sm:mb-20",children:[(0,l.jsx)(m,{context:"Work Experience"}),Object.keys(a).map((e,t)=>(0,l.jsx)(g,{title:e,period:a[e].period,summary:a[e].summary,location:a[e].location,task:a[e].task,url:a[e].url,keyword:a[e].keyword,accordian:r,accordianIndex:t,handleAccordian:c},t))]})},w=s(6463);let S=e=>{let{context:t,action:s}=e;return(0,l.jsx)("div",{className:"flex justify-center items-center px-6 max-sm:px-3 py-3 max-sm:py-1 rounded shadow-sm bg-blue-600 hover:bg-blue-900 transition-all duration-500 cursor-pointer",onClick:()=>s&&s(),children:(0,l.jsx)("p",{className:"text-white max-sm:text-xs",children:t})})},k=e=>{let{context:t,action:s}=e;return(0,l.jsx)("div",{className:"flex justify-center items-center px-6 max-sm:px-3 py-3 max-sm:py-1 rounded-full shadow-sm bg-blue-600 hover:bg-blue-900 transition-all duration-500 cursor-pointer",onClick:()=>s&&s(),children:(0,l.jsx)("p",{className:"text-white max-sm:text-xs",children:t})})},R=e=>{let{context:t,action:s}=e;return(0,l.jsx)("div",{className:"flex justify-center items-center px-6 max-sm:px-3 py-3 max-sm:py-1 border border-blue-600 rounded shadow-sm bg-transparent hover:bg-blue-100 transition-all duration-500 cursor-pointer",onClick:()=>s&&s(),children:(0,l.jsx)("p",{className:"text-blue-600 max-sm:text-xs",children:t})})};var C=e=>{let{type:t,context:s,action:i}=e;return"primary"===t?(0,l.jsx)(S,{context:s,action:i}):"primary-rounded"===t?(0,l.jsx)(k,{context:s,action:i}):(0,l.jsx)(R,{context:s,action:i})},T=e=>{let{script:t,sectionRef:s}=e,a=t.banner_desc,r=(0,w.useRouter)(),[n]=(0,i.useState)(Object.keys(a)),[o,x]=(0,i.useState)(0),d=e=>{let t;"left"===e?x((t=o-1)<0?n.length-1:t):x(t=(o+1)%n.length)};return(0,l.jsxs)("div",{ref:s,className:"relative flex flex-col w-full max-w-screen h-full max-sm:min-h-sm-apple p-20 max-sm:p-3",children:[(0,l.jsx)(m,{context:"Work Banner"}),(0,l.jsxs)("div",{className:"flex justify-center items-center",children:[(0,l.jsx)("div",{className:"cursor-pointer",onClick:()=>{d("left")},children:(0,l.jsx)(p.yKR,{size:50})}),(0,l.jsxs)("div",{className:"flex flex-col max-sm:flex-col gap-3 border w-2/3 max-sm:w-full h-full max-sm:h-full p-3 rounded shadow-sm",children:[(0,l.jsxs)("div",{className:"flex",children:[(0,l.jsx)("div",{className:"flex flex-col justify-between items-start w-2/3 max-sm:w-full",children:(0,l.jsxs)("div",{children:[(0,l.jsx)("p",{className:"text-lg max-sm:text-sm font-medium",children:a[n[o]].title}),(0,l.jsx)("p",{className:"max-sm:text-xs",children:a[n[o]].summary})]})}),(0,l.jsx)("div",{className:"w-1/3 max-sm:hidden",children:(0,l.jsx)("div",{className:"flex justify-start items-start w-full h-full",children:(0,l.jsx)(c.default,{src:"/banner/".concat(n[o],".png"),alt:"",width:400,height:400})})})]}),(0,l.jsxs)("div",{className:"flex flex-wrap gap-3 my-3",children:[(0,l.jsx)("p",{className:"font-medium",children:"키워드"}),a[n[o]].keyword.map((e,t)=>(0,l.jsx)(h.Z,{icon:null,iconSize:null,bgColor:"bg-blue-600",fontColor:"text-white",fontSize:"text-sm",context:e},t))]})]}),(0,l.jsx)("div",{className:"cursor-pointer",onClick:()=>{d("right")},children:(0,l.jsx)(p.UKx,{size:50})})]}),(0,l.jsx)("div",{className:"flex justify-center items-center mt-3",children:(0,l.jsx)(C,{type:"secondary",context:"프로젝트 보기",action:()=>{r.push("/portfolio/work")}})})]})};let O=e=>{let{src:t,alt:s,width:i,height:a,url:r}=e,n=()=>{window.open(r,"_blank")};return(0,l.jsx)("div",{className:"opacity-50 cursor-pointer hover:opacity-100 transition-all",onClick:()=>{n()},children:(0,l.jsx)(c.default,{src:t,alt:s,width:i,height:a})})};var z=e=>{let{sectionRef:t}=e;return(0,l.jsx)("div",{ref:t,className:"flex justify-center items-center w-full h-20 border-t",children:(0,l.jsxs)("div",{className:"flex justify-between items-center w-2/3 max-sm:w-full h-full max-sm:px-2 max-sm:text-xs text-gray-800",children:[(0,l.jsxs)("div",{className:"flex flex-col",children:[(0,l.jsx)("p",{children:"@2024 Junhyeon Kim."}),(0,l.jsx)("p",{children:"All rights reserved"})]}),(0,l.jsxs)("div",{className:"flex gap-2 max-sm:w-1/4",children:[(0,l.jsx)(O,{src:"/Github.png",alt:"github",width:40,height:40,url:"https://github.com/itsjh1242"}),(0,l.jsx)(O,{src:"/Blog.png",alt:"github",width:40,height:40,url:"https://jundev717.tistory.com/"}),(0,l.jsx)(O,{src:"/Email.png",alt:"github",width:40,height:40,url:"mailto:itsjh@kakao.com"})]}),(0,l.jsxs)("div",{className:"flex flex-col items-end",children:[(0,l.jsx)("p",{children:"@Designed & Developed by"}),(0,l.jsx)("p",{children:"김준현"})]})]})})};let A={intro:{header:"intro",content:["안녕하세요, 주니어 개발자 김준현입니다.","동서대학교 컴퓨터공학부에서 소프트웨어공학을 전공했습니다.","","소프트웨어 공학과 데이터베이스 구축을 집중적으로 깊이있게 공부할 수 있었고,","API 구축을 통해 사용자와 시스템간의 상호작용이 가능한 서비스 기반의 다양한 웹/앱 개발을 했습니다."],isRight:!0},motto:{header:"motto",content:["높은 완성도의 서비스 기반의 프로젝트를 개발하는 것은 효율적이고 클린한 코드를 적는 것 뿐만 아니라 나타내고자하는 핵심 내용을 직관적이고 유연성있게 표현하는 것도 중요한 가치로 생각하고 있습니다.","","제게 코드는 붓과 물감이고, 웹/앱은 캔버스입니다.","평소에 보고 듣는 모든 경험을 디자인 요소로 가공하여 다양한 프로젝트에 녹여냈습니다."],isRight:!1},lab:{header:"lab",content:["학부생 때, UbSE(Ubiquitous SW Engineering) 연구실에서 AI+X 연구원으로 활동하며","개발 역량을 키우기 위해 선후배들과의 멘토링에 집중했고, 다양한 프로젝트와 공모전 경험을 쌓을 수 있었습니다.","","특히, 주간 업무 보고 세미나를 하면서 한 주간 수행한 개인 공부 및 프로젝트 진행상황 등을 보고하는 경험을 통해 업무 수행 능력을 자가진단하고 자기 객관화하며 나를 성장시켰습니다.","","또한, 팀 프로젝트에서 팀원 상호간의 배려를 통한 원활한 의사소통이 정해진 시간 내에 프로젝트를 완성시킬 수 있는 중요한 부분이라는 것을 깨달았습니다."],isRight:!0},strength:{header:"strength",content:["성공과 실패는 다른 것 같으면서도 동일한 의미라고 생각합니다.","저에게 있어서 실패란 도전하지 않는 것입니다.","긍정적인 사고를 통해 동료와 함께 시너지를 발휘하는 것을 좋아합니다.","","끊임없이 생각하며 지치지 않는 열정으로 상승불패하며","함께 하고싶은 동료 개발자가 되겠습니다."],isRight:!1},certificate:{header:"정보처리기사",content:["2024년 4월 취득"],isRight:!0}},I={react:{title:"React(리액트)",level:3,points:{"React 생태계의 다양한 라이브러리 활용":["React를 사용하여 프로젝트를 개발할 때 다양한 라이브러리를 활용하여 개발 생산성을 높일 수 있습니다.","React Router를 사용하여 페이지 라우팅 구현과 Axios를 사용하여 HTTP 요청 처리, Styled Components를 활용한 CSS-in-JS 스타일링 등을 자유롭게 사용합니다."],"Custom Hook 활용":["함수형 컴포넌트 문법에 익숙하고, 재사용을 위해 컴포넌트 로직을 함수로 뽑아내어 재사용합니다.","컴포넌트 기반 아키텍처에 대한 이해를하고 중복되어 있어 가독성이 낮고 유지보수가 어려운 코드를 재사용 가능한 작은 조각으로 나누고, 각 조각을 독립적으로 활용하는데 능숙합니다."],"React 성능 최적화":["React를 사용하여 프로젝트를 진행할 때, 가상 DOM을 통한 성능 최적화에 대해 고려를 합니다.","Redux를 활용하여 전역 상태관리를 할 수 있고, React.memo 등 여러 성능 최적화 라이브러리에 대해 공부합니다."]}},next:{title:"Next.js",level:3,points:{"서버 사이드 렌더링(SSR)":["Next.js를 사용하여 서버 사이드 렌더링(SSR)과 정적 사이트 생성(SSG)을 구현한 경험이 있습니다."],"라우팅 및 코드 스플리팅":["내장된 라우팅 시스템을 활용하여 페이지 간의 이동을 관리할 수 있고, 컴포넌트간의 복잡한 로직으로 인한 성능 저하 문제를 코드 스플리팅을 통해 동적으로 할당하여 처리할 수 있습니다."],"CSS 모듈 사용(Tailwind CSS)":["Next.js를 사용하여 프로젝트를 개발하면서 Tailwind CSS를 처음 접하게 되었고, Tailwind의 강력한 커스터마이징 기능을 적극 활용하여 CSS 작성시간을 절약했습니다."]}},node:{title:"Node.js",level:3,points:{"서버 개발":["Node.js를 사용하여 서버 사이드 개발을 수행한 경험이 있습니다. Express와 함께 사용하여 RESTful API를 설계하고 구현했습니다.","ejs를 활용한 프론트를 구현하는데 있어서도 능숙합니다."],"실시간 웹 소켓 통신":["Socket.IO를 활용하여 웹 소켓을 구현하고 실시간으로 데이터를 주고받는 서비스를 개발한 경험이 있습니다."],"비동기 프로그래밍":["Node.js의 비동기 특성을 활용하여 서버를 개발하고, Callback, Promise, async/await 등의 패턴을 사용하여 코드를 작성할 수 있습니다."],"배포 경험":["npm을 사용하여 패키지를 관리하고, AWS와 PM2를 사용하여 서비스를 배포한 경험이 있습니다."]}},ts:{title:"TypeScript(타입스크립트)",level:3,points:{"타입스크립트 활용":["TypeScript를 활용하여 React, Next.js 등의 웹 애플리케이션을 개발한 경험이 있습니다."],"타입스크립트 이해":["TypeScript에 대한 이해도를 가지고 있으며, 코드의 가독성과 유지보수성 향상에 대해 신경을 써서 코딩합니다."]}},javascript:{title:"JavaScript(자바스크립트)",level:3,points:{"웹 개발":["JavaScript를 사용하여 동적이고 상호작용적인 웹 애플리케이션을 개발한 경험이 있습니다.","React와 Next.js 등을 사용하여 프론트엔드 개발을 수행했습니다."],"서버 개발":["Node.js를 활용하여 JavaScript를 서버 사이드에서 사용하여 백엔드 로직을 개발하고 RESTful API를 구현했습니다."],"데이터 처리":["JavaScript와 라이브러리 및 도구를 함께 사용하여 Json과 Excel등의 다양한 데이터를 처리한 경험이 있습니다."],"웹 애니메이션":["JavaScript를 사용하여 웹 페이지에 동적인 애니메이션을 구현하는 것을 좋아합니다."]}},html:{title:"HTML5",level:3,points:{"기본적인 이해":["HTML을 사용하여 웹 페이지의 구조를 정의하는 기본적인 이해도를 가지고 있습니다."],"웹 표준":["HTML을 사용하여 프로젝트 개발을 할 때, 웹 표준을 지키려 노력합니다."],"검색엔진 최적화":["문법에 맞는 HTML을 작성하고자 하며, 메타 태그 등을 활용하여 검색엔진 최적화를 수행한 경험이 있습니다."]}},tw:{title:"Tailwind CSS",level:3,points:{"TailWind CSS에 대한 이해":["Tailwind CSS의 기본 문법을 숙지하고 있으며, 다양한 디자인 및 레이아웃 등을 구현할 수 있습니다."],"커스텀 스타일":["Tailwind CSS가 제공하는 한정적인 문법 외에도 필요한 디자인이나 레이아웃 등에 따라 유연하게 여러 스타일을 커스텀하여 사용할 수 있습니다."],"반응형 디자인":["사용자 디바이스(데스크톱, 태블릿, 모바일)에 따라 적절하게 디자인 요소를 배치할 수 있습니다."]}},css:{title:"CSS(Cascading Style Sheets)",level:3,points:{"레이아웃 디자인":["CSS를 사용하여 웹 페이지의 레이아웃을 디자인하는데 능숙합니다.","Grid와 Flex를 상황에 따라 적절히 사용할 수 있습니다."],스타일링:["CSS 기본 문법에 대한 이해도를 가지고 있으며, 디지털 정부서비스 UI/UX 가이드라인 등의 디자인 표준을 참고하여 웹 페이지를 구현할 수 있습니다."],애니메이션:["CSS를 사용하여 다양한 애니메이션 효과를 구현한 경험이 있습니다."],"반응형 웹 디자인":["반응형 웹 디자인을 위해 미디어 쿼리를 활용하여 다양한 화면 크기에 유연하게 대응하는 스타일을 적용시킬 수 있습니다."],SCSS:["CSS보다 간단한 표기법으로 CSS를 구조화하여 SCSS를 활용해 개발한 경험이 있습니다."]}},flutter:{title:"Flutter(플러터)",level:2,points:{"크로스 플랫폼 개발":["Flutter를 사용하여 안드로이드 및 iOS 플랫폼을 대상으로 한 모바일 애플리케이션을 개발한 경험이 있습니다.","하나의 코드베이스로 여러 플랫폼을 대응하여 개발 생산성을 높였습니다."],"위젯에 대한 이해도":["Flutter의 다양한 위젯을 활용하여 UI/UX를 디자인하고 구현한 경험이 있습니다."]}},mysql:{title:"MySQL",level:3,points:{"데이터베이스 설계 및 모델링":["MySQL을 사용하여 프로젝트에 필요한 데이터베이스를 구축하고 설계 및 모델링한 경험이 있습니다.","기본적인 정규화의 개념을 이해하고 효율적인 데이터 구조를 구축하여 데이터 관리 및 검색 성능을 최적화했습니다."],"CRUD 쿼리 작성 및 최적화":["데이터베이스 조작을 위한 Create, Read, Update, Delete에 대한 기본적인 문법을 숙지하고 있으며, 복잡한 쿼리도 구현 가능합니다.","피할 수 없는 상황에서의 다중 JOIN으로 인한 복잡한 쿼리를 작성하고 실행하여 데이터 전달을 수행한 경험이 있습니다."]}},firebase:{title:"Firebase",level:3,points:{"데이터베이스 설계 및 모델링":["Firebase를 사용하여 프로젝트에 필요한 데이터베이스를 구축하고 설계 및 모델링한 경험이 있습니다.","Firebase가 가지고있는 NoSQL의 개념을 이해하고 있으며, 상황에 따라 적절한 데이터베이스 구조를 만들어봤습니다.","Firebase의 Collection, Document의 개념을 이해하고 있습니다."],"CRUD 쿼리 작성":["데이터베이스 조작을 위한 Create, Read, Update, Delete에 대한 기본적인 문법을 숙지하고 있으며, 복잡한 쿼리도 구현 가능합니다."]}},python:{title:"Python",level:3,points:{"웹 개발":["Python 웹 프레임워크인 Flask를 사용하여 웹 애플리케이션을 개발한 경험이 있습니다."],"NLP & BERT":["자연어 처리를 위해 KoNLPy와, 텍스트 기반 데이터에서 감정을 추출하기 위해 KoBERT를 사용하여 프로젝트를 개발한 경험이 있습니다.","해당 프로젝트에서 KoBERT를 활용하여 텍스트 데이터를 학습시켰으며, 해당 모델과 GPT를 사용하여 감정 분석 기반 AI 챗봇 시스템을 개발한 경험이 있습니다."],"웹 스크래핑":["Beautiful Soup와 같은 라이브러리를 사용하여 웹 스크래핑 및 데이터 수집 프로젝트를 진행한 경험이 있습니다.","웹페이지에서 데이터를 추출하고 구조화하여 분석 및 활용할 수 있도록 처리했습니다."]}},android:{title:"Android(안드로이드)",level:2,points:{"안드로이드 개발 경험":["Android Studio와 같은 통합 개발 환경과 Java를 사용하여 안드로이드 애플리케이션 개발을 진행한 경험이 있습니다."],"데이터베이스 연동":["안드로이드의 보안상의 이유로 인해 외부 데이터베이스(MySQL)에 직접적으로 접근하지 못해서 Retrofit2를 활용한 경험이 있습니다.","안드로이드와 Node.js를 연결하여 데이터베이스(MySQL)와 간접적으로 데이터를 주고받는 방식을 사용했습니다."]}},arduino:{title:"Arduino(아두이노)",level:2,points:{"프로젝트 경험":["아두이노의 지문인식 센서 등 다양한 모듈을 사용하여 Node.js와 연동한 프로젝트를 개발한 경험이 있습니다."],"데이터 통신":["Wi-Fi와 블루투스를 활용하여 데이터를 전송한 경험이 있습니다."]}},aws:{title:"AWS",level:2,points:{"EC2 인스턴스 관리":["Amazon EC2를 사용하여 웹 애플리케이션의 서버를 관리하고, EC2 인스턴스 구성, 탄력적 IP 등의 경험이 있습니다."]}},github:{title:"Github",level:3,points:{형상관리:["프로젝트 진행 시 Github을 사용하여 형상관리하는 것에 능숙합니다."],"프로젝트 관리":["Git을 사용하여 전반적으로 프로젝트를 관리하며, 브랜치를 나누고 합치는 협업을 한 경험이 있습니다."],"Github을 통한 배포":["Github-pages를 사용하여 웹 애플리케이션을 배포한 경험이 있습니다."]}}},_={1:"기본적인 이해도를 갖추고 있어요",2:"프로젝트 경험이 있어요",3:"능숙하게 사용할 수 있어요"},E={"AI+X 융합연구원":{period:"2023.03~12",summary:"학부생을 중심으로 운영되는 융합기술 연구소에서 1년간 연구원으로 활동했습니다.",location:"Busan, Korea",task:{motion:{title:"모션인식 기반 이중암호 인증방안",content:["사용자의 행동 패턴 분석을 기반으로 한 암호 인증 시스템을 개발했습니다.","휴대폰에 내장된 자이로센서를 활용해 x, y, z축을 -1부터 1까지 0.5 단위로 구분하여 사용자의 행동 패턴을 분석하는 방식을 고안했습니다.","크로스 플랫폼인 Flutter를 사용하여 앱을 개발했으며, Node.js를 서버로 두어 API를 구축하고 데이터 통신을 했습니다.","본 연구를 통해 학술대회 구두 발표 및 포스터 발표를 경험할 수 있었습니다."]},attendance:{title:"지문인식 센서를 활용한 연구실 근태 관리 시스템",content:["연구원들의 연구실 입퇴실을 효율적으로 관리하기 위해 지문인식 센서를 활용한 근태 관리 시스템을 개발했습니다.","아두이노 모듈을 활용하여 지문을 인식하는 하드웨어를 제작하고, Node.js를 활용해 근태를 확인할 수 있는 프론트 웹과 아두이노 모듈 통신 및 근태 관리 데이터 전송을 위한 백엔드를 개발했습니다."]}},url:["aisw.dongseo.ac.kr","https://aisw.dongseo.ac.kr/comm/comm_01_view.html?kind=1&seq=8&page=1&keyword="],keyword:["동서대학교 소프트웨어중심대학 사업단","행위기반인증","지문인식 근태관리 시스템"]},"R&D 전문기업 에핀(EPIN) 인턴십":{period:"2022.06~08",summary:"에핀(EPIN)에서 개발 중이던 '테니스 대진표 자동화 프로젝트'에 참여했습니다.",location:"Busan, Korea",task:{epin:{title:"테니스 대진표 자동화 프로젝트",content:["프로젝트에 참여하면서 크로스플랫폼인 Flutter를 활용한 웹 애플리케이션 개발에 대한 이해를 높였습니다.","Node.js를 서버로 두어 구축된 API를 리팩토링 했습니다.","팀 매칭 시 발생할 수 있는 오류에 대한 가능한 많은 테스트 케이스를 만들어 테스트를 했습니다."]}},url:["epin.co.kr","https://epin.co.kr/"],keyword:["동서대학교 산학협력단","테니스 대진표 자동화 프로젝트","Flutter"]}},P={chatbot:{title:"긍정적 감정 유발을 위한 AI챗봇 기반 일기 작성 시스템",summary:"AI_Hub의 데이터셋을 활용하여 KoBERT모델을 학습 시켰고, GPT-3 Turbo모델을 활용한 챗봇과의 대화를 통해 정제된 텍스트를 기반으로 감정 추출 및 분석, 일기생성을 하는 시스템을 개발했습니다. 수기로 일기를 작성하는 것이 아니라 챗봇과 대화를 하면 자동으로 일기가 생성되고, 일기를 분석하여 나의 감정분포도를 확인할 수 있습니다.",keyword:["2023 한국 컴퓨터정보학회 우수논문상","10-2023-0178771 특허 출원","졸업 작품"]},motion:{title:"모션인식 기반 이중암호 인증방안",summary:"전통적인 암호 인증 방법의 취약점 증가\xb7사이버 공격의 지속적인 진화 및 새로운 위협의 등장으로 보안 강화의 필요성이 증가함에따라, 새로운 암호 인증 방안을 제안합니다. 모션 인식 기반의 이중 암호 인증은 사용자의 동작 패턴과 숫자 패스워드를 결합하여 보다 강력한 보안성을 제공합니다.",keyword:["AI+X 융합연구","행동기반 인증"]},attendance:{title:"연구실 근태 관리 시스템",summary:"AI+X 융합연구소의 연구원들의 근태를 관리하기 위한 시스템으로, 아두이노와 지문인식 센서를 활용하여 입퇴실 시간을 자동으로 기록하고, Node.js와 MySQL을 활용하여 데이터를 관리하였습니다. 또한, 연구원들의 근태를 관리하기 위한 웹 페이지를 개발했습니다.",keyword:["지문인식 센서","근태 관리 웹 페이지"]}};var F=()=>{let e=(0,i.useRef)(null),t=(0,i.useRef)(null),s=(0,i.useRef)(null),n=(0,i.useRef)(null),c=(0,i.useRef)(null),o=(0,i.useRef)(null),m=[e,t,s,n,c,o];return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r,{handleQuickMove:e=>{var t;null===(t=m[e].current)||void 0===t||t.scrollIntoView({behavior:"smooth"})}}),(0,l.jsxs)("div",{className:"flex flex-col w-full h-full",children:[(0,l.jsx)(x,{sectionRef:e,prefix:a.O}),(0,l.jsx)(f,{script:{about_dsec:A},sectionRef:t,prefix:a.O}),(0,l.jsx)(v,{script:{stack_desc:I,stack_badge:_},sectionRef:s,prefix:a.O}),(0,l.jsx)(y,{script:{exp_desc:E},sectionRef:n,prefix:a.O}),(0,l.jsx)(T,{script:{banner_desc:P},sectionRef:c,prefix:a.O}),(0,l.jsx)(z,{sectionRef:o,prefix:a.O})]})]})}},638:function(e,t,s){"use strict";function l(e){let{src:t,width:s,quality:l}=e;return"https://itsjh1242.github.io/portfolio/".concat(t,"?w=").concat(s,"&q=").concat(l||75)}s.r(t),s.d(t,{default:function(){return l}})},6523:function(e,t,s){"use strict";s.d(t,{O:function(){return l}});let l="/portfolio"},6463:function(e,t,s){"use strict";var l=s(1169);s.o(l,"useRouter")&&s.d(t,{useRouter:function(){return l.useRouter}})}},function(e){e.O(0,[217,956,240,49,971,23,744],function(){return e(e.s=3419)}),_N_E=e.O()}]);
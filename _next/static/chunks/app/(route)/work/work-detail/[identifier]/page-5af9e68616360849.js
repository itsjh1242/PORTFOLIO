(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[780],{5959:function(e,l,s){Promise.resolve().then(s.bind(s,7277))},5785:function(e,l,s){"use strict";var t=s(7437),a=s(2265);l.Z=e=>{let{icon:l,bgColor:s,fontColor:i,fontSize:c,context:r}=e;return(0,t.jsxs)("div",{className:"flex justify-center items-center gap-1 px-2 py-1 rounded-3xl ".concat(s," ").concat(i," ").concat(c),children:[l&&(0,t.jsx)("div",{className:"flex justify-center items-center",children:a.createElement(l,{size:"1em"})}),(0,t.jsx)("p",{className:"max-sm:text-xs",children:r})]})}},7277:function(e,l,s){"use strict";s.d(l,{WorkDetailPage:function(){return p}});var t=s(7437),a=s(2265),i=s(6648),c=s(4839),r=s(6164);function n(){for(var e=arguments.length,l=Array(e),s=0;s<e;s++)l[s]=arguments[s];return(0,r.m6)((0,c.W)(l))}let d=e=>{let{className:l,children:s}=e;return(0,t.jsx)("div",{className:n("flex justify-center items-center",l),children:s})},o=e=>{let{className:l,children:s}=e;return(0,t.jsx)("div",{className:n("w-2/3 max-sm:w-full max-sm:px-3",l),children:s})},m=e=>{let{className:l,children:s}=e;return(0,t.jsx)("div",{className:n("flex flex-row w-full",l),children:s})},x=e=>{let{className:l,children:s}=e;return(0,t.jsx)("div",{className:n("w-1/2",l),children:s})},h=e=>{let{className:l,children:s}=e;return(0,t.jsx)("p",{className:n("text-3xl font-medium max-sm:text-base",l),children:s})};var u=s(5785),j=s(9522),f=s(9726);let p=e=>{var l,s;let{params:c}=e,r=j.m[c.identifier],[n,p]=(0,a.useState)(0),N=r.detail.func,v=Object.keys(r.detail.func),g=e=>{let l;"left"===e?p((l=n-1)<0?v.length-1:l):"right"===e?p(l=(n+1)%v.length):p(parseInt(e))},w=e=>{if(""===e)return alert("준비되지 않았거나 실행할 수 없습니다.");window.open(e,"_blank")};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"w-screen h-580 max-sm:w-390 sm:rounded-3xl overflow-hidden mb-8",children:(0,t.jsx)(i.default,{src:"workall/detail_main/".concat(r.pid,"_detail_main.svg"),alt:r.pid,width:0,height:0,className:"w-full h-full"})}),(0,t.jsxs)(d,{className:"flex-col w-full p-6 max-sm:p-3 text-gray-800",children:[(0,t.jsxs)(o,{children:[(0,t.jsx)(h,{className:"text-4xl font-bold mb-4",children:r.title}),(0,t.jsx)(b,{}),(0,t.jsxs)(m,{className:"gap-6 max-sm:flex-col",children:[(0,t.jsx)(x,{className:"max-sm:w-full",children:(0,t.jsx)("table",{className:"w-full text-left",children:(0,t.jsx)("tbody",{children:Object.keys(r.detail.header).map((e,l)=>(0,t.jsxs)("tr",{className:"align-top",children:[(0,t.jsx)("th",{className:"pr-4 pb-2 font-medium break-keep",children:r.detail.header[e].title}),(0,t.jsx)("td",{className:"pb-2",children:r.detail.header[e].content.map((e,l)=>(0,t.jsx)("p",{children:e},l))})]},l))})})}),(0,t.jsxs)(x,{className:"max-sm:w-full",children:[(0,t.jsx)("p",{className:"text-xl font-semibold mb-2",children:"개요"}),r.detail.long_summary.map((e,l)=>(0,t.jsx)("p",{className:"mb-2",children:e},l))]})]})]}),(0,t.jsxs)(o,{className:"mt-8",children:[(0,t.jsx)(h,{className:"text-3xl font-bold mb-4",children:"구현 기능"}),(0,t.jsx)(b,{}),(0,t.jsx)("table",{className:"w-full text-left mb-4",children:(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{className:"align-top",children:[(0,t.jsx)("th",{className:"pr-2 pb-2 font-medium w-12",children:"명칭"}),(0,t.jsx)("td",{className:"pb-2",children:N[v[n]].name})]}),(0,t.jsxs)("tr",{className:"align-top",children:[(0,t.jsx)("th",{className:"pr-2 pb-2 font-medium",children:"설명"}),(0,t.jsx)("td",{className:"pb-2",children:N[v[n]].desc})]}),N[v[n]].func?(0,t.jsxs)("tr",{className:"align-top",children:[(0,t.jsx)("th",{className:"pr-2 pb-2 font-medium",children:"기능"}),(0,t.jsx)("td",{className:"pb-2",children:null===(s=N[v[n]])||void 0===s?void 0:null===(l=s.func)||void 0===l?void 0:l.map((e,l)=>(0,t.jsx)("p",{children:"\xb7 "+e},l))})]}):null]})})]}),(0,t.jsxs)("div",{className:"relative flex justify-center items-center mb-6 max-w-screen-xl h-full",children:[(0,t.jsx)("div",{className:"absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer opacity-50 hover:opacity-100 transition",onClick:()=>g("left"),children:(0,t.jsx)(f.yKR,{size:30,className:"text-gray-600 hover:text-black"})}),(0,t.jsx)(i.default,{src:N[v[n]].ui?"/workall/".concat(r.pid,"/").concat(v[n],".png"):"",alt:r.pid,width:1280,height:658,className:"rounded-xl shadow-lg"}),(0,t.jsx)("div",{className:"absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer opacity-50 hover:opacity-100 transition",onClick:()=>g("right"),children:(0,t.jsx)(f.UKx,{size:30,className:"text-gray-600 hover:text-black"})})]}),(0,t.jsx)("div",{className:"flex justify-center items-center gap-2",children:v.map((e,l)=>(0,t.jsx)("div",{className:"cursor-pointer",onClick:()=>g(l.toString()),children:l===n?(0,t.jsx)(f.O6Y,{size:15,className:"text-gray-600"}):(0,t.jsx)(f.Vjj,{size:15,className:"text-gray-400"})},l))}),0!==Object.keys(r.detail.trouble).length&&(0,t.jsxs)(o,{className:"mt-8",children:[(0,t.jsx)(h,{className:"text-3xl font-bold mb-4",children:"트러블 슈팅"}),(0,t.jsx)(b,{}),Object.keys(r.detail.trouble).map((e,l)=>{var s,a,i,c,n,d;return(0,t.jsxs)("div",{className:"flex flex-col gap-4 mb-4",children:[(0,t.jsx)("p",{className:"text-xl font-bold",children:e}),(0,t.jsxs)("div",{className:"flex flex-col",children:[(0,t.jsx)("p",{className:"text-lg font-medium",children:"문제점"}),r.detail.trouble[e].problem.map((e,l)=>(0,t.jsxs)("p",{className:"pl-4",children:["\xb7 ",e]},l))]}),(0,t.jsxs)("div",{className:"flex flex-col",children:[(0,t.jsx)("p",{className:"text-lg font-medium",children:(null===(s=r.detail.trouble[e])||void 0===s?void 0:s.solve)!==null&&"해결 방안"}),null===(i=r.detail.trouble[e])||void 0===i?void 0:null===(a=i.solve)||void 0===a?void 0:a.map((e,l)=>(0,t.jsxs)("p",{className:"pl-4",children:["\xb7 ",e]},l))]}),(0,t.jsxs)("div",{className:"flex flex-col",children:[(0,t.jsx)("p",{className:"text-lg font-medium",children:(null===(c=r.detail.trouble[e])||void 0===c?void 0:c.result)!==null&&"결과"}),null===(d=r.detail.trouble[e])||void 0===d?void 0:null===(n=d.result)||void 0===n?void 0:n.map((e,l)=>(0,t.jsxs)("p",{className:"pl-4",children:["\xb7 ",e]},l))]})]},l)})]}),(0,t.jsxs)(o,{className:"mt-8",children:[(0,t.jsx)(h,{className:"text-3xl font-bold mb-4",children:"회고"}),(0,t.jsx)(b,{}),r.detail.review.map((e,l)=>(0,t.jsx)("p",{className:"mb-4",children:e},l))]}),(0,t.jsxs)(o,{className:"mt-8 mb-6",children:[(0,t.jsx)(h,{className:"text-3xl font-bold mb-4",children:"링크"}),(0,t.jsx)(b,{}),(0,t.jsxs)(m,{className:"gap-4",children:[(0,t.jsx)("div",{className:" ".concat(r.detail.github?"cursor-pointer":"cursor-not-allowed"),onClick:()=>w(r.detail.github),children:(0,t.jsx)(u.Z,{icon:f.s2,iconSize:"50",bgColor:"bg-black",fontColor:"text-white",fontSize:"text-base",context:"Github 레포지토리 "})}),(0,t.jsx)("div",{className:" ".concat(r.detail.demo?"cursor-pointer":"cursor-not-allowed"),onClick:()=>w(r.detail.demo),children:(0,t.jsx)(u.Z,{icon:f.$XF,iconSize:"50",bgColor:"bg-blue-500",fontColor:"text-white",fontSize:"text-base",context:"Demo 사이트 "})})]})]})]})]})},b=()=>(0,t.jsx)("div",{className:"w-full border-b-2 border-gray-300 my-6"})}},function(e){e.O(0,[217,49,868,415,971,23,744],function(){return e(e.s=5959)}),_N_E=e.O()}]);
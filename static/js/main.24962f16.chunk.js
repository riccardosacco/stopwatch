(this.webpackJsonpstopwatch=this.webpackJsonpstopwatch||[]).push([[0],{12:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(3),r=n.n(s),l=n(4),b=n.n(l),i=(n(9),n(10),n.p+"static/media/data.8d4a7db4.csv"),d=n(0);var j=()=>{const[e,t]=Object(c.useState)(!1),[n,a]=Object(c.useState)(0),[s,r]=Object(c.useState)(0),[l,j]=Object(c.useState)(0),[o,h]=Object(c.useState)([]),[p,O]=Object(c.useState)([]),m=Object(c.useRef)(null);Object(c.useEffect)((()=>{b.a.parse(i,{download:!0,header:!0,skipEmptyLines:!0,complete:e=>{const t=e.data.map((e=>({T:parseFloat(e.T),B:parseInt(e.B)})));O(t)}})}),[]);const u=e=>{const t=parseFloat((e/1e3).toFixed(3)),n=p.find((e=>e.T===t));return n?n.B:null},x=e=>(e/1e3).toFixed(3).replace(".",",");return Object(d.jsxs)("div",{className:"app",children:[Object(d.jsx)("nav",{className:"navbar navbar-expand-sm navbar-dark bg-primary mb-3",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("a",{className:"navbar-brand",href:"/",children:"Gambling Stopwatch"})})}),Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("p",{className:"h1",children:x(n-s)}),Object(d.jsxs)("div",{className:"buttons d-flex",style:{gap:10},children:[!1===e?Object(d.jsx)("button",{className:"btn btn-primary btn-lg",onClick:()=>{t(!0),r(Date.now()),j(Date.now()),m.current=setInterval((()=>{a(Date.now())}),1)},children:"Start"}):Object(d.jsx)("button",{className:"btn btn-success btn-lg",onClick:()=>{h([...o,{time:n-l,prediction:u(n-l)}]),j(Date.now())},children:"Lap"}),Object(d.jsx)("button",{className:"btn btn-danger btn-lg",onClick:()=>{clearInterval(m.current),t(!1)},children:"Stop"}),Object(d.jsx)("button",{className:"btn btn-warning btn-lg",onClick:()=>{r(0),a(0),j(0),clearInterval(m.current),t(!1),h([])},children:"Reset"})]}),Object(d.jsxs)("table",{className:"table table-sm mt-2",style:{maxWidth:250},children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Lap"}),Object(d.jsx)("th",{children:"Time"}),Object(d.jsx)("th",{children:"Prediction"})]})}),Object(d.jsx)("tbody",{children:o.map(((e,t)=>Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:t+1}),Object(d.jsx)("td",{children:x(e.time)}),Object(d.jsx)("td",{children:null!==e.prediction?e.prediction:""})]},t)))})]})]})]})};var o=e=>{e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((t=>{let{getCLS:n,getFID:c,getFCP:a,getLCP:s,getTTFB:r}=t;n(e),c(e),a(e),s(e),r(e)}))};r.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(j,{})}),document.getElementById("root")),o()},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.24962f16.chunk.js.map
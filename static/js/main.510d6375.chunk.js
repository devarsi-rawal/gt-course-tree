(this["webpackJsonpgt-course-tree"]=this["webpackJsonpgt-course-tree"]||[]).push([[0],{14:function(e,t,c){},15:function(e,t,c){},16:function(e,t,c){},18:function(e,t,c){},19:function(e,t,c){},20:function(e,t,c){},36:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),s=c(2),a=c.n(s),i=(c(14),c(15),c(16),c(1)),o=function(){return Object(i.jsx)("header",{children:"GT Course Tree Visualizer"})},l=(c(18),function(){return Object(i.jsxs)("footer",{children:["Made by Devarsi Rawal",Object(i.jsx)("a",{href:"https://github.com/devarsi-rawal/gt-course-tree",target:"_blank",rel:"noreferrer noopener",children:Object(i.jsx)("svg",{className:"icon",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:Object(i.jsx)("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",stroke:"white",fill:"white"})})})]})}),j=c(3),d=function(e,t){fetch(e,{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){t(e)}))},u=(c(19),function(){for(var e=arguments.length,t=new Array(e),c=0;c<e;c++)t[c]=arguments[c];return t.filter((function(e){return e})).join(" ")}),b=function e(t){var c,n=t.data;return 0!==n.length?Array.isArray(n)?Object(i.jsx)("ul",{className:"prereq-tree",children:Object(i.jsxs)("li",{className:"branch",children:[Object(i.jsx)("div",{className:u("node","conditional"),children:(c=n[0],"or"===c?"one of":"all of")}),Object(i.jsx)("ul",{className:"prereq-tree",children:n.slice(1).map((function(t,c){return Object(i.jsx)("li",{className:"branch",children:Object(i.jsx)(e,{data:t})},c)}))})]})}):Object(i.jsx)("div",{className:u("node","prereq-node"),children:n.id}):Object(i.jsx)("div",{className:u("node","prereq-node"),children:"No prereqs"})},h=function(e){var t=e.course,c=e.prereqData,n=e.postreqData;return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"container",children:[n&&(n.length>0?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("ul",{className:"prereq-tree",children:n.map((function(e){return Object(i.jsx)("li",{className:u("branch","prereq-branch"),children:Object(i.jsx)("div",{className:u("node","postreq-node"),children:e})},e)}))}),Object(i.jsx)("div",{className:u("node","conditional"),children:"needs"})]}):Object(i.jsx)("ul",{className:"prereq-tree",children:Object(i.jsx)("li",{className:u("branch","prereq-branch"),children:Object(i.jsx)("div",{className:u("node","postreq-node"),children:"No postreqs"})})})),Object(i.jsx)("ul",{className:u("tree","root"),children:Object(i.jsxs)("li",{className:"branch",children:[Object(i.jsx)("div",{className:u("node","course-node"),children:t}),c&&Object(i.jsx)(b,{data:c})]})})]})})},O=c(9),x=(c(20),"data/prereqs.json"),p=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)([]),a=Object(j.a)(s,2),o=a[0],l=a[1],u=Object(n.useState)([]),b=Object(j.a)(u,2),p=b[0],f=b[1],m=Object(n.useState)(""),v=Object(j.a)(m,2),N=v[0],g=v[1],q=function(e){f(Object.keys(e).map((function(e){return{value:e,label:e}})))};return Object(n.useEffect)((function(){d(x,r),d("data/postreqs.json",l),d(x,q)}),[]),Object(i.jsxs)("div",{className:"content",children:[Object(i.jsx)(O.a,{className:"react-select-container",classNamePrefix:"react-select",options:p,onChange:function(e,t){return g(e.value)}}),Object(i.jsx)("div",{className:"visualization",children:N?Object(i.jsx)(h,{course:N,prereqData:c[N],postreqData:o[N]}):Object(i.jsx)("p",{className:"welcome-msg",children:"Welcome! Choose a class to view its course tree!"})})]})};var f=function(){return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(o,{}),Object(i.jsx)(p,{course:"CS 4510"}),Object(i.jsx)(l,{})]})})},m=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,37)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),n(e),r(e),s(e),a(e)}))};a.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(f,{})}),document.getElementById("root")),m()}},[[36,1,2]]]);
//# sourceMappingURL=main.510d6375.chunk.js.map
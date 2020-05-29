(this["webpackJsonpdfa-minimizer"]=this["webpackJsonpdfa-minimizer"]||[]).push([[0],{24:function(e,t,a){e.exports=a(43)},30:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(10),i=a.n(r),c=(a(29),a(30),a(45)),o=a(44),s=function(){return l.a.createElement("header",null,l.a.createElement(o.a,{className:"text-white",style:{backgroundColor:"#4052B6",paddingBottom:"150px",borderRadius:"0px"}},l.a.createElement(c.a,null,l.a.createElement("h1",{className:"display-3 text-center"},"DFA Minimizer"),l.a.createElement("hr",{className:"bg-white"}),l.a.createElement("p",{className:"lead text-center"},"Minimize a DFA using Equivalence Theorem. You just need to input the state transition table for the original DFA that you want to minimize and our algorithm with compute and visualize everything else for you."))))},u=a(8),m=a(7),f=function(e){var t=e.type,a=e.msg;return l.a.createElement("div",{className:"alert alert-".concat(t)},l.a.createElement("i",{className:"fas fa-info-circle"})," ",a)},p=a(63),h=a(46),g=a(47),E=a(48),b=a(49),d=a(50),v=a(51),S=a(52),y=a(22),j=a(16),O=a.n(j),w=function(e){console.log("----------------- Original DFA -----------------"),console.log("Original DFA:",O.a.inspect(e,{showHidden:!1,depth:null})),console.log("----------------- DFA Minimization -----------------");var t=[],a=0;!function e(n,l){console.log("******************* ".concat(a,"-Equivalence ***********************"));var r=[];if(0===a){var i=n.states.filter((function(e){return!n.acceptingStates.includes(e)}));r=[i,n.acceptingStates],t.push(r),console.log(r)}else{for(var c=0;c<l.length;c++){var o=l[c],s=!1,u=[];if(o.length>1)for(var m=function(e){p=[];var t=o[e];u.includes(t)||(p.push(t),u.push(t));for(var a=function(e){var a=o[e];n.alphabet.forEach((function(e){var r=n.transitions.filter((function(a){return a.fromState===t&&a.symbol===e}))[0],i=n.transitions.filter((function(t){return t.fromState===a&&t.symbol===e}))[0];if(r.toStates[0]===i.toStates[0])s=!0;else for(var c=0;c<l.length;c++){var o=l[c];if(o.includes(r.toStates[0])&&o.includes(i.toStates[0])){s=!0;break}s=!1}})),s?console.log("Matching ".concat(t," and ").concat(a," (Equivalent)")):console.log("Matching ".concat(t," and ").concat(a," (Non Equivalent)")),s&&!u.includes(a)&&(u.push(a),p.push(a)),s=!1},i=e+1;i<o.length;i++)a(i);p.length&&r.push(p)},f=0;f<o.length;f++){var p;m(f)}else r.push(o)}t.push(r),console.log(r)}(function e(t,a){var n=Object.prototype.toString.call(t);if(n!==Object.prototype.toString.call(a))return!1;if(["[object Array]","[object Object]"].indexOf(n)<0)return!1;var l="[object Array]"===n?t.length:Object.keys(t).length;if(l!==("[object Array]"===n?a.length:Object.keys(a).length))return!1;var r=function(t,a){var n=Object.prototype.toString.call(t);if(["[object Array]","[object Object]"].indexOf(n)>=0){if(!e(t,a))return!1}else{if(n!==Object.prototype.toString.call(a))return!1;if("[object Function]"===n){if(t.toString()!==a.toString())return!1}else if(t!==a)return!1}};if("[object Array]"===n){for(var i=0;i<l;i++)if(!1===r(t[i],a[i]))return!1}else for(var c in t)if(t.hasOwnProperty(c)&&!1===r(t[c],a[c]))return!1;return!0})(l,r)||(a+=1,e(n,r))}(e);var n=[];t.forEach((function(e){n.push(e.sort((function(e,t){return t.length-e.length})))})),console.log("\n\n----------------- Computed Equivalences -----------------"),n.forEach((function(e,t){console.log("".concat(t,"-Equivalence:"),e)}));var l={states:[],alphabet:e.alphabet,initialState:null,acceptingStates:[],transitions:[]},r=[];return n[n.length-1].forEach((function(e){l.states.push(e.join("")),r.push(e.join(","))})),l.initialState=n[n.length-1].filter((function(t){return t.includes(e.initialState)}))[0].join(""),l.acceptingStates=n[n.length-1].filter((function(t){return t.includes.apply(t,Object(y.a)(e.acceptingStates))})),l.acceptingStates=l.acceptingStates.map((function(e){return e.join("")})),r.forEach((function(t){var a=t.replace(/(^\s*,)|(,\s*$)/g,"").split(",")[0];e.transitions.filter((function(e){return e.fromState===a})).forEach((function(e){var a=e.toStates[0],n=r.filter((function(e){return e.replace(/(^\s*,)|(,\s*$)/g,"").split(",").includes(a)}));n[0]=n[0].replace(/,/g,""),l.transitions.push({fromState:t.replace(/,/g,""),toStates:n,symbol:e.symbol})})),console.log(a)})),console.log("Minimized DFA:",O.a.inspect(l,{showHidden:!1,depth:null})),{minimizedAutomaton:l,equivalences:n}},A=function(e){var t=e.automaton,a=e.setIsSubmitted,r=Object(n.useState)(!0),i=Object(m.a)(r,2),c=i[0],o=i[1],s=Object(n.useState)(""),u=Object(m.a)(s,2),f=u[0],y=u[1],j=Object(n.useState)(null),O=Object(m.a)(j,2),A=O[0],k=O[1],q=Object(n.useState)(""),z=Object(m.a)(q,2),x=z[0],M=z[1],F=Object(n.useState)(null),N=Object(m.a)(F,2),C=N[0],D=N[1],T=function(e){var t=window.noam.fsm.printDotFormat(e);return window.Viz(t,"svg")};Object(n.useEffect)((function(){!function(e){y(T(e));var t=w(e);k(t.minimizedAutomaton),M(T(t.minimizedAutomaton)),D(t.equivalences)}(t)}),[]);var I=function(){o(!c),a(!1)};return l.a.createElement(p.a,{isOpen:c,toggle:I,size:"lg",style:{width:"80vw",maxWidth:"100%",margin:"auto"}},l.a.createElement(h.a,{toggle:I},"Minimized Result"),l.a.createElement(g.a,null,l.a.createElement("div",null,l.a.createElement(E.a,null,l.a.createElement(b.a,{md:"6"},l.a.createElement("h6",null,"Original State Transition Table"),l.a.createElement(d.a,{responsive:!0,bordered:!0},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"States"),t.alphabet.map((function(e){return l.a.createElement("th",{key:e},e)})))),l.a.createElement("tbody",null,t.states.map((function(e){return l.a.createElement("tr",{key:"transition-".concat(e,"}")},l.a.createElement("th",{scope:"row"},e),t.alphabet.map((function(a){return l.a.createElement("td",{key:"".concat(e,"-").concat(a)},t.transitions.map((function(t){if(t.symbol===a&&t.fromState===e)return t.toStates[0]})))})))})))),l.a.createElement("h6",null,"Original Automaton Graph"),l.a.createElement("div",{className:"automaton-graphs",dangerouslySetInnerHTML:{__html:f}})),l.a.createElement(b.a,{sm:"6"},l.a.createElement("h6",null,"Minimized State Transition Table"),A&&l.a.createElement(d.a,{responsive:!0,bordered:!0},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"States"),A.alphabet.map((function(e){return l.a.createElement("th",{key:e},e)})))),l.a.createElement("tbody",null,A.states.map((function(e){return l.a.createElement("tr",{key:"transition-".concat(e,"}")},l.a.createElement("th",{scope:"row"},e),A.alphabet.map((function(t){return l.a.createElement("td",{key:"".concat(e,"-").concat(t)},A.transitions.map((function(a){if(a.symbol===t&&a.fromState===e)return a.toStates[0]})))})))})))),l.a.createElement("h6",null,"Computed Equivalences"),C&&C.map((function(e,t){return l.a.createElement("p",null,"".concat(t,"-Equivalence: ").concat(function(e){return JSON.stringify(e).replace(/\[/g,"{").replace(/\]/g,"}").replace(/,/g,", ")}(e)))})),l.a.createElement("h6",null,"Minimized Automaton Graph"),l.a.createElement("div",{className:"automaton-graphs",dangerouslySetInnerHTML:{__html:x}}))))),l.a.createElement(v.a,null,l.a.createElement(S.a,{color:"danger",onClick:I},"Close")))},k=a(23),q=a(53),z=a(54),x=a(55),M=a(56),F=a(57),N=a(58),C=a(59),D=a(60),T=a(61),I=a(62),_=function(){var e=Object(n.useState)({states:[],alphabet:[],initialState:null,acceptingStates:[],transitions:[]}),t=Object(m.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)([]),c=Object(m.a)(i,2),o=c[0],s=c[1];Object(n.useEffect)((function(){H()}),[o]);var p=Object(n.useState)([]),h=Object(m.a)(p,2),g=h[0],E=h[1],b=Object(n.useState)(!1),v=Object(m.a)(b,2),y=v[0],j=v[1],O=Object(n.useState)(!1),w=Object(m.a)(O,2),_=w[0],B=w[1],H=function(){var e=[];o.forEach((function(t){e.push(t.value)})),r(Object(u.a)(Object(u.a)({},a),{},{acceptingStates:e}))},$=function(e){var t;if("states"===e.target.name){if(""===(t=e.target.value.replace(/(^\s*,)|(,\s*$)/g,"")))return void E([]);var n=t.split(",");r(Object(u.a)(Object(u.a)({},a),{},{states:n,initialState:null,acceptingStates:[]}));var l=[];n.forEach((function(e){l.push({label:e,value:e})})),s([]),E(l)}else if("initial-state"===e.target.name)t=e.target.value,r(Object(u.a)(Object(u.a)({},a),{},{initialState:t}));else if("inputs"===e.target.name){var i=(t=e.target.value.replace(/(^\s*,)|(,\s*$)/g,"")).split(",");r(Object(u.a)(Object(u.a)({},a),{},{alphabet:i}))}else{var c=e.target.name.split("-"),o=c[0],m=[e.target.value],f=c[c.length-1],p=a.transitions,h=!1;p.forEach((function(e){if(e.symbol===f&&e.fromState===o)return e.toStates=m,void(h=!0)})),!1===h&&p.push({fromState:o,toStates:m,symbol:f}),r(Object(u.a)(Object(u.a)({},a),{},{transitions:p}))}};return l.a.createElement(l.a.Fragment,null,l.a.createElement(q.a,{className:"shadow-sm"},l.a.createElement(z.a,null,"Input Automaton"),l.a.createElement(x.a,null,l.a.createElement(M.a,null,"Use the form below to input data for your automaton"),_&&l.a.createElement(f,{type:"danger",msg:"All fields below are required. Please make sure that you have filled all the fields before submitting the form again."}),l.a.createElement(F.a,{onSubmit:function(e){e.preventDefault(),H(),function(){var e=a.states,t=a.alphabet,n=a.initialState,l=a.acceptingStates,r=a.transitions;return!(e.length<1||t.length<1||null==n||l.length<1||r.length<1)||(B(!0),window.scrollTo(0,0),setTimeout((function(){B(!1)}),6e3),!1)}()&&(B(!1),j(!0))}},l.a.createElement(N.a,null,l.a.createElement(C.a,{for:"states"},"Enter states separated by commas:"),l.a.createElement(D.a,{onChange:$,type:"text",name:"states",id:"states",required:!0,placeholder:"e.g. q1,q2,q3,q4 or s1,s2,s3,s4 etc."}),l.a.createElement(T.a,null,"All Spaces and trailing commas will be ignored")),l.a.createElement(N.a,null,l.a.createElement(C.a,{for:"inputs"},"Enter alphabet inputs separated by commas:"),l.a.createElement(D.a,{onChange:$,type:"text",name:"inputs",required:!0,id:"inputs",placeholder:"e.g. a,b or 0,1"}),l.a.createElement(T.a,null,"All Spaces and trailing commas will be ignored")),g.length>0&&l.a.createElement(N.a,null,l.a.createElement(C.a,{for:"initial-state"},"Select initial state:"),l.a.createElement(D.a,{required:!0,type:"select",name:"initial-state",id:"initial-state",onChange:$,value:a.initialState?a.initialState:""},l.a.createElement("option",{value:""},"Select..."),g.map((function(e){return l.a.createElement("option",{key:e.value,value:e.value},e.value)})))),g.length>0&&l.a.createElement(N.a,null,l.a.createElement(C.a,{for:"final-states"},"Select final states:"),l.a.createElement(k.a,{required:!0,id:"final-states",options:g,value:o,onChange:s,labelledBy:"Select"})),a.states.length>0&&a.alphabet.length>0&&l.a.createElement(N.a,null,l.a.createElement(C.a,null,"Transitions"),l.a.createElement(d.a,{responsive:!0,bordered:!0},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"States"),a.alphabet.map((function(e){return l.a.createElement("th",{key:e},e)})))),l.a.createElement("tbody",null,a.states.map((function(e){return l.a.createElement("tr",{key:"transition-".concat(e,"}")},l.a.createElement("th",{scope:"row"},e),a.alphabet.map((function(t){return l.a.createElement("td",{key:"".concat(e,"-").concat(t)},l.a.createElement(D.a,{required:!0,bsSize:"sm",type:"select",onChange:$,name:"".concat(e,"-").concat(t)},l.a.createElement("option",{value:""},"State"),g.map((function(e){return l.a.createElement("option",{key:e.value,value:e.value},e.value)}))))})))}))))),l.a.createElement(S.a,{type:"submit",style:{backgroundColor:"#4052B6"}},"Minimize DFA"))),l.a.createElement(I.a,{className:"d-flex flex-column flex-md-row flex-lg-row align-items-center justify-content-between"},l.a.createElement("span",null,"Developed by"," ",l.a.createElement("a",{href:"http://www.aswadali.me",target:"_blank",rel:"noopener noreferrer"},"Aswad Ali")," ","&"," ",l.a.createElement("a",{href:"https://www.linkedin.com/in/haris-manzoor-789b77190/",target:"_blank",rel:"noopener noreferrer"},"Haris Manzoor")),l.a.createElement("span",null,"University of South Asia"))),y&&l.a.createElement(A,{automaton:a,setIsSubmitted:j}))};var B=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(s,null),l.a.createElement(c.a,{style:{position:"relative",bottom:"150px"}},l.a.createElement(_,null)))};i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(B,null)),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.01f0e6d5.chunk.js.map
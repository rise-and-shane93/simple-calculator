(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{18:function(t,e,r){t.exports=r(29)},27:function(t,e,r){},28:function(t,e,r){},29:function(t,e,r){"use strict";r.r(e);var n=r(0),a=r.n(n),o=r(11),c=r(10),l=r(2),u=r(1),m="POWER_BUTTON",s="OPERATOR_BUTTON",b="EQUAL_BUTTON",i="NUMBER_BTN",p="MEMORY_BTN",y={result:"",currentItem:"",displayNum:0,firstCalc:!0,operatorSymbol:"",memoryNum:[]};var f=Object(l.b)({calculate:function(){var t,e,r,n,a,o,c,l,f=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,d=arguments.length>1?arguments[1]:void 0,N=parseFloat(f.result),C=parseFloat(f.currentItem),O=f.memoryNum;switch(d.type){case i:return Object(u.a)({},f,{result:f.result,currentItem:f.currentItem+=d.num,displayNum:f.currentItem,firstCalc:f.firstCalc});case s:if("+"===d.symbol)return f.firstCalc?(e="string"===typeof f.result?f.currentItem:f.result,Object(u.a)({},f,{result:e,currentItem:"",displayNum:f.result,firstCalc:!f.firstCalc,operatorSymbol:"+"})):("-"===f.operatorSymbol||""===f.operatorSymbol?t=N-C:"+"===f.operatorSymbol||""===f.operatorSymbol?t=N+C:"x"===f.operatorSymbol||""===f.operatorSymbol?t=N*C:"/"!==f.operatorSymbol&&""!==f.operatorSymbol||(t=N/C),Object(u.a)({},f,{result:t,currentItem:"",displayNum:t,firstCalc:f.firstCalc,operatorSymbol:"+"}));if("-"===d.symbol)return f.firstCalc?(t=N-C,e="string"===typeof f.result?f.currentItem:f.result,Object(u.a)({},f,{result:e,currentItem:"",displayNum:f.result,firstCalc:!f.firstCalc,operatorSymbol:"-"})):("+"===f.operatorSymbol||""===f.operatorSymbol?t=N+C:"-"===f.operatorSymbol?t=N-C:"x"===f.operatorSymbol?t=N*C:"/"===f.operatorSymbol&&(t=N/C),Object(u.a)({},f,{result:t,currentItem:"",displayNum:t,firstCalc:f.firstCalc,operatorSymbol:"-"}));if("x"===d.symbol)return f.firstCalc?(t=N*C,e="string"===typeof f.result?f.currentItem:f.result,Object(u.a)({},f,{result:e,currentItem:"",displayNum:f.result,firstCalc:!f.firstCalc,operatorSymbol:"x"})):("+"===f.operatorSymbol?t=N+C:"-"===f.operatorSymbol?t=N-C:"x"===f.operatorSymbol?t=N*C:"/"===f.operatorSymbol&&(t=N/C),Object(u.a)({},f,{result:t,currentItem:"",displayNum:t,firstCalc:f.firstCalc,operatorSymbol:"x"}));if("/"===d.symbol)return f.firstCalc?(t=N/C,e="string"===typeof f.result?f.currentItem:f.result,Object(u.a)({},f,{result:e,currentItem:"",displayNum:f.result,firstCalc:!f.firstCalc,operatorSymbol:"/"})):("+"===f.operatorSymbol?t=N+C:"-"===f.operatorSymbol?t=N-C:"x"===f.operatorSymbol?t=N*C:"/"===f.operatorSymbol&&(t=N/C),Object(u.a)({},f,{result:t,currentItem:"",displayNum:t,firstCalc:f.firstCalc,operatorSymbol:"/"}));if("%"===d.symbol)return f.firstCalc?(n="string"===typeof f.result?C/100:N/100,Object(u.a)({},f,{result:n,currentItem:"",displayNum:n,firstCalc:f.firstCalc,operatorSymbol:""})):(n=C/100,Object(u.a)({},f,{currentItem:n,displayNum:n}));if("1/x"===d.symbol)return f.firstCalc?(a="string"===typeof f.result?1/C:1/N,Object(u.a)({},f,{result:a,currentItem:"",displayNum:a,firstCalc:f.firstCalc,operatorSymbol:""})):(a=1/C,Object(u.a)({},f,{currentItem:a,displayNum:a}));if("\u221a"===d.symbol)return f.firstCalc?(o="string"===typeof f.result?Math.sqrt(C):Math.sqrt(N),Object(u.a)({},f,{result:o,currentItem:"",displayNum:o,firstCalc:f.firstCalc,operatorSymbol:""})):(o=Math.sqrt(C),Object(u.a)({},f,{currentItem:o,displayNum:o}));case b:return"+"===f.operatorSymbol?(t=N+C,r="+"):"-"===f.operatorSymbol?(t=N-C,r="-"):"x"===f.operatorSymbol?(t=N*C,r="x"):"/"===f.operatorSymbol&&(t=N/C,r="/"),Object(u.a)({},f,{result:t,currentItem:f.currentItem,displayNum:t,firstCalc:!0,operatorSymbol:r});case m:return Object(u.a)({},f,{result:"",currentItem:"",displayNum:0,firstCalc:!0,operatorSymbol:""});case p:if("M+"===d.symbol)return c=f.firstCalc&&"string"===typeof f.result?parseFloat(f.currentItem):parseFloat(f.result),O.push(c),Object(u.a)({},f,{currentItem:"",memoryNum:O});if("M-"===d.symbol)return c=f.firstCalc&&"string"===typeof f.result?-1*parseFloat(f.currentItem):-1*parseFloat(f.result),O.push(c),Object(u.a)({},f,{currentItem:"",memoryNum:O});if("MR"===d.symbol)return l=O.reduce((function(t,e){return t+e}),0),Object(u.a)({},f,{displayNum:l});if("MC"===d.symbol)return Object(u.a)({},f,{displayNum:0,memoryNum:[]});default:return f}}}),d=(r(27),r(4)),N=r(5),C=r(7),O=r(6),E=r(8),j=function(t){function e(){return Object(d.a)(this,e),Object(C.a)(this,Object(O.a)(e).apply(this,arguments))}return Object(E.a)(e,t),Object(N.a)(e,[{key:"render",value:function(){var t=this;return a.a.createElement("article",{id:"calc-buttons"},a.a.createElement("button",{className:"btn calc-btn",onClick:function(){return t.props.addSymbol("/")}},"\xf7"),a.a.createElement("button",{className:"btn calc-btn",onClick:function(){return t.props.addSymbol("\u221a")}},"\u221a"),a.a.createElement("button",{className:"btn calc-btn",onClick:function(){return t.props.addSymbol("x")}},"\xd7"),a.a.createElement("button",{className:"btn calc-btn",onClick:function(){return t.props.addSymbol("%")}},"%"),a.a.createElement("button",{className:"btn calc-btn",onClick:function(){return t.props.addSymbol("-")}},"-"),a.a.createElement("button",{className:"btn calc-btn",onClick:function(){return t.props.addSymbol("1/x")}},a.a.createElement("sup",null,"1"),"/",a.a.createElement("sub",null,"x")),a.a.createElement("button",{className:"btn calc-btn",onClick:function(){return t.props.addSymbol("+")}},"+"),a.a.createElement("button",{className:"btn calc-btn",onClick:function(){return t.props.equalSymbol()}},"="))}}]),e}(n.Component),S=function(t){function e(){return Object(d.a)(this,e),Object(C.a)(this,Object(O.a)(e).apply(this,arguments))}return Object(E.a)(e,t),Object(N.a)(e,[{key:"render",value:function(){var t=this;return a.a.createElement("article",{id:"memory-buttons"},a.a.createElement("button",{className:"btn memory-btn",onClick:function(){return t.props.memoryButton("MC")}},"MC"),a.a.createElement("button",{className:"btn memory-btn",onClick:function(){return t.props.memoryButton("MR")}},"MR"),a.a.createElement("button",{className:"btn memory-btn",onClick:function(){return t.props.memoryButton("M+")}},"M+"),a.a.createElement("button",{className:"btn memory-btn",onClick:function(){return t.props.memoryButton("M-")}},"M-"),a.a.createElement("button",{className:"btn power-btn",onClick:function(){return t.props.powerButton()}},"CE"))}}]),e}(n.Component),h=function(t){function e(){return Object(d.a)(this,e),Object(C.a)(this,Object(O.a)(e).apply(this,arguments))}return Object(E.a)(e,t),Object(N.a)(e,[{key:"render",value:function(){var t=this.props.displayNum;return console.log(t),a.a.createElement("article",{id:"screen"},a.a.createElement("h2",{className:"screenText"},t))}}]),e}(n.Component),k=Object(c.b)((function(t){return{displayNum:t.calculate.displayNum}}))(h),I=function(t){return a.a.createElement("article",{id:"number-buttons"},a.a.createElement("button",{className:"btn number-btn",onClick:function(){return t.addNumber("7")}},"7"),a.a.createElement("button",{className:"btn number-btn",onClick:function(){return t.addNumber("8")}},"8"),a.a.createElement("button",{className:"btn number-btn",onClick:function(){return t.addNumber("9")}},"9"),a.a.createElement("button",{className:"btn number-btn",onClick:function(){return t.addNumber("4")}},"4"),a.a.createElement("button",{className:"btn number-btn",onClick:function(){return t.addNumber("5")}},"5"),a.a.createElement("button",{className:"btn number-btn",onClick:function(){return t.addNumber("6")}},"6"),a.a.createElement("button",{className:"btn number-btn",onClick:function(){return t.addNumber("1")}},"1"),a.a.createElement("button",{className:"btn number-btn",onClick:function(){return t.addNumber("2")}},"2"),a.a.createElement("button",{className:"btn number-btn",onClick:function(){return t.addNumber("3")}},"3"),a.a.createElement("button",{className:"btn number-btn",onClick:function(){return t.addNumber("0")}},"0"),a.a.createElement("button",{className:"btn number-btn",onClick:function(){return t.addNumber(".")}},"."),a.a.createElement("button",{className:"btn number-btn"},a.a.createElement("sup",null,"+"),"/",a.a.createElement("sub",null,"-")))},v=function(t){return{type:i,num:t}},x=function(t){return{type:s,symbol:t}},M=function(t){return{type:p,symbol:t}},g=function(){return{type:m}},w=function(){return{type:b}},B=(r(28),function(t){function e(){return Object(d.a)(this,e),Object(C.a)(this,Object(O.a)(e).apply(this,arguments))}return Object(E.a)(e,t),Object(N.a)(e,[{key:"render",value:function(){var t=this.props.dispatch,e=Object(l.a)(v,t),r=Object(l.a)(x,t),n=Object(l.a)(w,t),o=Object(l.a)(g,t),c=Object(l.a)(M,t);return a.a.createElement("section",{id:"calculator"},a.a.createElement(k,null),a.a.createElement("div",{className:"calcInner"},a.a.createElement(S,{powerButton:o,memoryButton:c}),a.a.createElement("div",{className:"flex-container",style:{display:"flex"}},a.a.createElement(I,{addNumber:e}),a.a.createElement(j,{addSymbol:r,equalSymbol:n}))))}}]),e}(n.Component)),T=Object(c.b)((function(t){return{state:t}}))(B);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var R=Object(l.c)(f,window.devToolsExtension&&window.devToolsExtension());Object(o.render)(a.a.createElement(c.a,{store:R},a.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[18,1,2]]]);
//# sourceMappingURL=main.0e0916d9.chunk.js.map
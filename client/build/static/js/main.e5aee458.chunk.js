(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},25:function(e,t,n){e.exports=n(57)},31:function(e,t,n){},32:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(21),u=n.n(c),o=(n(31),n(6)),s=n(7),i=n(10),l=n(8),h=n(11),p=n(22),d=n.n(p),m=(n(32),n(60)),f=n(59),v=n(61),x=function(){return r.a.createElement("div",null,"Im some other page!",r.a.createElement(f.a,{to:"/"},"Go back home"))},b=n(5),E=n.n(b),w=n(12),g=n(13),y=n.n(g),k=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(i.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={seenIndexes:[],values:{},index:""},n.handleSubmit=function(){var e=Object(w.a)(E.a.mark(function e(t){return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,y.a.post("/api/values",{index:n.state.index});case 3:n.setState({index:""});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.fetchValues(),this.fetchIndexes()}},{key:"fetchValues",value:function(){var e=Object(w.a)(E.a.mark(function e(){var t;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("/api/values/current");case 2:t=e.sent,this.setState({values:t.data});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"fetchIndexes",value:function(){var e=Object(w.a)(E.a.mark(function e(){var t;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("/api/values/all");case 2:t=e.sent,this.setState({seenIndexes:t.data});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"renderSeenIndexes",value:function(){return this.state.seenIndexes.map(function(e){return e.number}).join(", ")}},{key:"renderValues",value:function(){var e=[];for(var t in this.state.values)e.push(r.a.createElement("div",{key:t},"For index ",t," I calculated ",this.state.values[t]));return e}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("label",null,"Enter your index:"),r.a.createElement("input",{value:this.state.index,onChange:function(t){return e.setState({index:t.target.value})}}),r.a.createElement("button",null,"Submit")),r.a.createElement("h3",null,"Indexes I have seen:"),this.renderSeenIndexes(),r.a.createElement("h3",null,"Calculated Values:"),this.renderValues())}}]),t}(a.Component),j=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(m.a,null,r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:d.a,className:"App-logo",alt:"logo"}),r.a.createElement(f.a,{to:"/"},"Home"),r.a.createElement(f.a,{to:"/otherpage"},"Other page")),r.a.createElement("div",null,r.a.createElement(v.a,{exact:!0,path:"/",component:k}),r.a.createElement(v.a,{path:"/otherpage",component:x}))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,1,2]]]);
//# sourceMappingURL=main.e5aee458.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports=n(21)},,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(3),o=n.n(c),s=n(1),l=n.n(s),u=n(4),i=n(5),m=n(6),h=n(8),d=n(7),p=n(9),f=(n(17),n(18),function(e){return a.a.createElement("div",{className:"card-container"},a.a.createElement("img",{alt:"monster",src:"https://robohash.org/".concat(e.monster.id,"?set=set2&size=180x180")}),a.a.createElement("h1",null,e.monster.name),a.a.createElement("p",null,e.monster.email))}),v=(n(19),function(e){return a.a.createElement("div",{className:"card-list"},e.monsters.map(function(e){return a.a.createElement(f,{key:e.id,monster:e})}))}),E=(n(20),function(e){var t=e.placeholder,n=e.handleChange;return a.a.createElement("input",{className:"search",type:"search",placeholder:t,onChange:n})}),w=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=Object(h.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(a)))).state={monsters:[],searchField:""},n}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(u.a)(l.a.mark(function e(){var t=this;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(e){return t.setState({monsters:e})});case 2:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,n=t.monsters,r=t.searchField,c=n.filter(function(e){return e.name.toLowerCase().includes(r.toLowerCase())});return a.a.createElement("div",null,a.a.createElement("h1",{class:"header"},"Monster Rolodex"),a.a.createElement(E,{placeholder:"search monsters",handleChange:function(t){return e.setState({searchField:t.target.value})}}),a.a.createElement(v,{monsters:c}))}}]),t}(a.a.Component);o.a.render(a.a.createElement(w,null),document.querySelector("#root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.221993f8.chunk.js.map
(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),o=n(6),l=n.n(o),i=n(1),r=n(2),s=n(4),u=n(3),m=function(t){Object(s.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={date:(new Date).toLocaleTimeString()},t}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.interval=setInterval((function(){t.setState({date:(new Date).toLocaleTimeString()}),console.log(t.state.date)}),1e3)}},{key:"componentDidUpdate",value:function(t,e){t.name!==this.props.name&&console.log("The Clock was renamed from ".concat(t.name," ")+"to ".concat(this.props.name))}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return c.a.createElement("p",null,"Current time: ".concat(this.state.date))}}]),n}(c.a.Component),k=(n(12),function(t){Object(s.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={isClockVisible:!0,clockName:"1"},t.showClock=function(){t.setState({isClockVisible:!0})},t.hideClock=function(){t.setState({isClockVisible:!1})},t.renameClock=function(){t.setState({clockName:"".concat(Math.round(10*Math.random()))})},t}return Object(r.a)(n,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement("h1",null,"React clock"),this.state.isClockVisible&&c.a.createElement(m,{name:this.state.clockName}),c.a.createElement("button",{type:"button",onClick:this.showClock},"Show Clock"),c.a.createElement("button",{type:"button",onClick:this.hideClock},"Hide Clock"),c.a.createElement("button",{type:"button",onClick:this.renameClock},"Raname Clock"))}}]),n}(c.a.Component));l.a.render(c.a.createElement(k,null),document.getElementById("root"))},7:function(t,e,n){t.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.e31d3b93.chunk.js.map
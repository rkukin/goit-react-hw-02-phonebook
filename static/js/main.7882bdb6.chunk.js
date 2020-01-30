(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{20:function(e,t,n){e.exports=n(32)},32:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),o=n.n(c),u=n(16),i=n(8),l=n(9),m=n(10),f=n(17),d=n(11),h=n(18),s=n(12),b=n(1),p=n(2);function v(){var e=Object(b.a)(["\nmax-width: 30%;\nborder-radius: 5px;\n"]);return v=function(){return e},e}function x(){var e=Object(b.a)(["\nmax-width: 40%;\nmargin-top: 10px;\nmargin-bottom: 30px;\n"]);return x=function(){return e},e}function g(){var e=Object(b.a)(["\nmax-width: 40%;\nfont-size: 20px;\n"]);return g=function(){return e},e}function E(){var e=Object(b.a)(["\nborder: 2px solid black;\nmax-width: 400px;\npadding: 10px;\ndisplay: flex;\nflex-direction: column;\n"]);return E=function(){return e},e}var w=p.a.form(E()),C=p.a.label(g()),O=p.a.input(x()),j=p.a.button(v());function y(e){var t=e.handleSubmit;return r.a.createElement(w,{onSubmit:t},r.a.createElement(C,{htmlFor:"name"},"Name"),r.a.createElement(O,{type:"text",name:"name",id:"name",autoComplete:"off"}),r.a.createElement(C,{htmlFor:"number"},"Number"),r.a.createElement(O,{type:"tel",name:"number",id:"number",autoComplete:"off"}),r.a.createElement(j,{type:"submit"},"Add contact"))}function k(){var e=Object(b.a)(["\nmax-width: 50%;\nborder-radius: 5px;\n"]);return k=function(){return e},e}function S(){var e=Object(b.a)(["\nmargin-right: 30px;\nmax-width: 50%;\n"]);return S=function(){return e},e}var D=p.a.li(S()),F=p.a.button(k());function L(e){var t=e.handleDelete,n=e.contact,a=n.id,c=n.name,o=n.number;return r.a.createElement(r.a.Fragment,null,r.a.createElement(D,{key:a},c,": ",o," "),r.a.createElement(F,{onClick:function(){return t(a)}},"Delete"))}function q(){var e=Object(b.a)(["\nmax-width: 400px;\ndisplay: flex;\nflex-direction: row;\n"]);return q=function(){return e},e}var A=p.a.ul(q());function B(e){var t=e.children;return r.a.createElement(A,null,t)}function J(){var e=Object(b.a)(["\nmax-width: 40%;\nmargin-top: 10px;\nmargin-bottom: 30px;\n"]);return J=function(){return e},e}var N=p.a.input(J());function P(e){var t=e.handleChange;return r.a.createElement(N,{type:"text",onChange:t,name:"filter",autoComplete:"off"})}var z=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(f.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={contacts:[],filter:""},n.handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(i.a)({},a,r))},n.handleSubmit=function(e){e.preventDefault();var t=e.target,a=t.querySelector("[name='name']").value,r=t.querySelector("[name='number']").value,c=n.state.contacts;""===a||""===r?alert("Please fill all fields!"):c.find((function(e){return e.name.toLowerCase()===a.toLowerCase()}))?alert("This contact already added!"):(n.setState((function(e){return{contacts:[].concat(Object(u.a)(e.contacts),[{id:Object(s.uuid)(),name:a,number:r}])}})),n.setState({name:"",number:""}),t.reset())},n.handleDelete=function(e){var t=n.state.contacts.filter((function(t){return t.id!==e}));n.setState({contacts:t})},n}return Object(h.a)(t,e),Object(m.a)(t,[{key:"getFilteredContacts",value:function(){var e=this.state,t=e.contacts,n=e.filter,a=t.filter((function(e){return-1!==e.name.toLowerCase().indexOf(n.toLowerCase())}));return""===n?t:a.length?a:[]}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"PhoneBook"),r.a.createElement(y,{handleSubmit:this.handleSubmit}),r.a.createElement("h3",null,"Contacts"),r.a.createElement(P,{handleChange:this.handleChange}),r.a.createElement(B,null,this.getFilteredContacts().map((function(t){return r.a.createElement(L,{key:t.id,contact:t,handleDelete:e.handleDelete})}))))}}]),t}(a.Component);o.a.render(r.a.createElement(z,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.7882bdb6.chunk.js.map
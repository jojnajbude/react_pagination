(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{10:function(e,a,t){},12:function(e,a,t){"use strict";t.r(a);var c=t(5),n=t.n(c),i=t(3),r=t(1);t(10);var l=t(2),s=t.n(l),o=t(0),j=function(e){var a=e.total,t=e.perPage,c=e.currentPage,n=e.onPageChange;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("ul",{className:"pagination",children:[Object(o.jsx)("li",{className:s()("page-item",{disabled:0===c}),children:Object(o.jsx)("a",{"data-cy":"prevLink",className:"page-link",href:"#prev","aria-disabled":0===c,onClick:function(){0!==c&&n(c-1)},children:"\xab"})}),Array(Math.ceil(a/t)).fill(null).map((function(e,a){return Object(o.jsx)("li",{className:s()("page-item",{active:c===a}),children:Object(o.jsx)("a",{"data-cy":"pageLink",className:"page-link",href:"#".concat(a+1),onClick:function(){return n(a)},children:a+1})},Math.random().toString().slice(-8))})),Object(o.jsx)("li",{className:s()("page-item",{disabled:c===Math.ceil(a/t)-1}),children:Object(o.jsx)("a",{"data-cy":"nextLink",className:"page-link",href:"#next","aria-disabled":c===Math.ceil(a/t)-1,onClick:function(){c!==Math.ceil(a/t)-1&&n(c+1)},children:"\xbb"})})]}),Object(o.jsx)("ul",{children:Array(t).fill(null).map((function(e,a){return Object(o.jsx)("li",{"data-cy":"item",children:"Item ".concat(c*t+a+1)},"item ".concat(Math.random().toString().slice(-4)))})).filter((function(e,n){return c*t+n<a}))})]})},d=function(e,a){for(var t=[],c=e;c<=a;c+=1)t.push(c);return t}(1,42).map((function(e){return"Item ".concat(e)})),u=[3,5,10,20],h=function(){var e=Object(r.useState)(d.length),a=Object(i.a)(e,1)[0],t=Object(r.useState)(5),c=Object(i.a)(t,2),n=c[0],l=c[1],s=Object(r.useState)(0),h=Object(i.a)(s,2),m=h[0],b=h[1],g=m*n+n<a?m*n+n:a;return Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("h1",{children:"Items with Pagination"}),Object(o.jsx)("p",{className:"lead","data-cy":"info",children:"Page ".concat(m+1," (items ").concat(m*n+1," - ").concat(g," of ").concat(a,")")}),Object(o.jsxs)("div",{className:"form-group row",children:[Object(o.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(o.jsx)("select",{"data-cy":"perPageSelector",id:"perPageSelector",value:n,className:"form-control",onChange:function(e){l(+e.target.value),b(0)},children:u.map((function(e){return Object(o.jsx)("option",{value:e,children:e},e)}))})}),Object(o.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(o.jsx)(j,{total:a,perPage:n,currentPage:m,onPageChange:function(e){b(e)}})]})};n.a.render(Object(o.jsx)(h,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.ca65636c.chunk.js.map
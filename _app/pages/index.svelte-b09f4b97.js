import{S as h,i as v,s as $,f,m as l,q as u,n as m,o as g,e as x,a as P,b as p,d,g as b,E as k}from"../chunks/vendor-8899c02f.js";import{b as _}from"../chunks/paths-28a87002.js";import{J as L,P as j}from"../chunks/Pagination-2a5afa94.js";function y(o,e,a){const n=o.slice();return n[2]=e[a],n}function w(o){let e;return{c(){e=x("div"),e.innerHTML=`<div class="text-xl font-medium text-indigo-800">Name</div> 
            <div class="text-gray-800">Desc</div>`,P(e,"class","p-5 md:rounded shadow bg-white")},m(a,n){p(a,e,n)},d(a){a&&d(e)}}}function q(o){let e,a,n,r=Array(20),s=[];for(let t=0;t<r.length;t+=1)s[t]=w(y(o,r,t));return a=new j({props:{prevLink:o[0],nextLink:o[1]}}),{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=b(),f(a.$$.fragment)},m(t,c){for(let i=0;i<s.length;i+=1)s[i].m(t,c);p(t,e,c),l(a,t,c),n=!0},p(t,c){const i={};c&1&&(i.prevLink=t[0]),c&2&&(i.nextLink=t[1]),a.$set(i)},i(t){n||(u(a.$$.fragment,t),n=!0)},o(t){m(a.$$.fragment,t),n=!1},d(t){k(s,t),t&&d(e),g(a,t)}}}function J(o){let e,a;return e=new L({props:{$$slots:{default:[q]},$$scope:{ctx:o}}}),{c(){f(e.$$.fragment)},m(n,r){l(e,n,r),a=!0},p(n,[r]){const s={};r&35&&(s.$$scope={dirty:r,ctx:n}),e.$set(s)},i(n){a||(u(e.$$.fragment,n),a=!0)},o(n){m(e.$$.fragment,n),a=!1},d(n){g(e,n)}}}const E=()=>({props:{prevPage:_+"/",nextPage:_+"/1"}});function S(o,e,a){let{prevPage:n,nextPage:r}=e;return o.$$set=s=>{"prevPage"in s&&a(0,n=s.prevPage),"nextPage"in s&&a(1,r=s.nextPage)},[n,r]}class H extends h{constructor(e){super();v(this,e,S,J,$,{prevPage:0,nextPage:1})}}export{H as default,E as load};

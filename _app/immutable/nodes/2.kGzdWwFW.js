import{a as z,t as ke,n as Q,c as Ve}from"../chunks/disclose-version.CUIVM28i.js";import{k as Z,m as xe,N as Xe,Z as Ke,l as We,j as Ze,i as Je,X as He,H as Qe,r as Ne,n as Ee,u as fe,R as ea,aa as me,p as Pe,q as ze,t as aa,L as Be,e as we,ab as Ae,ac as $e,ad as Te,ae as ta,W as ra,af as sa,A as ia,ag as qe,I as Ue,ah as na,ai as la,s as Se,aj as oa,P as fa,ak as ca,h as va,al as ua,E as _a,am as da,an as ha,ao as pa,y as ya,ap as ga,aq as ma,z as ce,ar as wa,as as ba,F as Ce,G as je,B as xa,d as t,at as re,C as pe,a6 as C,D as Ea,c as j,a7 as W,a9 as B,a8 as G,au as N,a4 as Ma}from"../chunks/runtime.BkFPzvde.js";import{a as Ia,e as ie,s as Re}from"../chunks/render.BOG3znNa.js";import{p as q,i as ye}from"../chunks/if.DDn2pu0e.js";import{o as ka}from"../chunks/index-client.CB66icju.js";function ve(r,e){return e}function Aa(r,e,a,s){for(var _=[],g=e.length,m=0;m<g;m++)ta(e[m].e,_,!0);var y=g>0&&_.length===0&&a!==null;if(y){var A=a.parentNode;ra(A),A.append(a),s.clear(),J(r,e[0].prev,e[g-1].next)}sa(_,()=>{for(var v=0;v<g;v++){var f=e[v];y||(s.delete(f.k),J(r,f.prev,f.next)),ia(f.e,!y)}})}function ue(r,e,a,s,_,g=null){var m=r,y={flags:e,items:new Map,first:null},A=(e&qe)!==0;if(A){var v=r;m=Z?xe(Xe(v)):v.appendChild(Ke())}Z&&We();var f=null,I=!1;Ze(()=>{var o=a(),n=Je(o)?o:o==null?[]:He(o),c=n.length;if(I&&c===0)return;I=c===0;let i=!1;if(Z){var b=m.data===Qe;b!==(c===0)&&(m=Ne(),xe(m),Ee(!1),i=!0)}if(Z){for(var x=null,h,E=0;E<c;E++){if(fe.nodeType===8&&fe.data===ea){m=fe,i=!0,Ee(!1);break}var R=n[E],w=s(R,E);h=Ye(fe,y,x,null,R,w,E,_,e),y.items.set(w,h),x=h}c>0&&xe(Ne())}if(!Z){var M=Ue;Ta(n,y,m,_,e,(M.f&me)!==0,s)}g!==null&&(c===0?f?Pe(f):f=ze(()=>g(m)):f!==null&&aa(f,()=>{f=null})),i&&Ee(!0),a()}),Z&&(m=fe)}function Ta(r,e,a,s,_,g,m,y){var he,l,p,d;var A=(_&na)!==0,v=(_&(Ae|Te))!==0,f=r.length,I=e.items,o=e.first,n=o,c,i=null,b,x=[],h=[],E,R,w,M;if(A)for(M=0;M<f;M+=1)E=r[M],R=m(E,M),w=I.get(R),w!==void 0&&((he=w.a)==null||he.measure(),(b??(b=new Set)).add(w));for(M=0;M<f;M+=1){if(E=r[M],R=m(E,M),w=I.get(R),w===void 0){var ee=n?n.e.nodes_start:a;i=Ye(ee,e,i,i===null?e.first:i.next,E,R,M,s,_),I.set(R,i),x=[],h=[],n=i.next;continue}if(v&&Na(w,E,M,_),w.e.f&me&&(Pe(w.e),A&&((l=w.a)==null||l.unfix(),(b??(b=new Set)).delete(w))),w!==n){if(c!==void 0&&c.has(w)){if(x.length<h.length){var H=h[0],F;i=H.prev;var _e=x[0],le=x[x.length-1];for(F=0;F<x.length;F+=1)Oe(x[F],H,a);for(F=0;F<h.length;F+=1)c.delete(h[F]);J(e,_e.prev,le.next),J(e,i,_e),J(e,le,H),n=H,i=le,M-=1,x=[],h=[]}else c.delete(w),Oe(w,n,a),J(e,w.prev,w.next),J(e,w,i===null?e.first:i.next),J(e,i,w),i=w;continue}for(x=[],h=[];n!==null&&n.k!==R;)(g||!(n.e.f&me))&&(c??(c=new Set)).add(n),h.push(n),n=n.next;if(n===null)continue;w=n}x.push(w),i=w,n=w.next}if(n!==null||c!==void 0){for(var K=c===void 0?[]:He(c);n!==null;)(g||!(n.e.f&me))&&K.push(n),n=n.next;var oe=K.length;if(oe>0){var de=_&qe&&f===0?a:null;if(A){for(M=0;M<oe;M+=1)(p=K[M].a)==null||p.measure();for(M=0;M<oe;M+=1)(d=K[M].a)==null||d.fix()}Aa(e,K,de,I)}}A&&Be(()=>{var S;if(b!==void 0)for(w of b)(S=w.a)==null||S.apply()}),we.first=e.first&&e.first.e,we.last=i&&i.e}function Na(r,e,a,s){s&Ae&&$e(r.v,e),s&Te?$e(r.i,a):r.i=a}function Ye(r,e,a,s,_,g,m,y,A,v){var f=(A&Ae)!==0,I=(A&oa)===0,o=f?I?la(_):Se(_):_,n=A&Te?Se(m):m,c={i:n,v:o,k:g,a:null,e:null,prev:a,next:s};try{return c.e=ze(()=>y(r,o,n),Z),c.e.prev=a&&a.e,c.e.next=s&&s.e,a===null?e.first=c:(a.next=c,a.e.next=c.e),s!==null&&(s.prev=c,s.e.prev=c.e),c}finally{}}function Oe(r,e,a){for(var s=r.next?r.next.e.nodes_start:a,_=e?e.e.nodes_start:a,g=r.e.nodes_start;g!==s;){var m=fa(g);_.before(g),g=m}}function J(r,e,a){e===null?r.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}function u(r,e,a,s){var _=r.__attributes??(r.__attributes={});Z&&(_[e]=r.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&r.nodeName==="LINK")||_[e]!==(_[e]=a)&&(e==="style"&&"__styles"in r&&(r.__styles={}),e==="loading"&&(r[ca]=a),a==null?r.removeAttribute(e):typeof a!="string"&&$a(r).includes(e)?r[e]=a:r.setAttribute(e,a))}var Fe=new Map;function $a(r){var e=Fe.get(r.nodeName);if(e)return e;Fe.set(r.nodeName,e=[]);for(var a,s=r,_=Element.prototype;_!==s;){a=ua(s);for(var g in a)a[g].set&&e.push(g);s=va(s)}return e}const Sa=()=>performance.now(),X={tick:r=>requestAnimationFrame(r),now:()=>Sa(),tasks:new Set};function Ge(){const r=X.now();X.tasks.forEach(e=>{e.c(r)||(X.tasks.delete(e),e.f())}),X.tasks.size!==0&&X.tick(Ge)}function Ca(r){let e;return X.tasks.size===0&&X.tick(Ge),{promise:new Promise(a=>{X.tasks.add(e={c:r,f:a})}),abort(){X.tasks.delete(e)}}}function ge(r,e){r.dispatchEvent(new CustomEvent(e))}function ja(r){if(r==="float")return"cssFloat";if(r==="offset")return"cssOffset";if(r.startsWith("--"))return r;const e=r.split("-");return e.length===1?e[0]:e[0]+e.slice(1).map(a=>a[0].toUpperCase()+a.slice(1)).join("")}function Le(r){const e={},a=r.split(";");for(const s of a){const[_,g]=s.split(":");if(!_||g===void 0)break;const m=ja(_.trim());e[m]=g.trim()}return e}const Ra=r=>r;function V(r,e,a,s){var _=(r&ga)!==0,g=(r&wa)!==0,m=_&&g,y=(r&ba)!==0,A=m?"both":_?"in":"out",v,f=e.inert,I=e.style.overflow,o,n;function c(){var E=Ue,R=we;Ce(null),je(null);try{return v??(v=a()(e,(s==null?void 0:s())??{},{direction:A}))}finally{Ce(E),je(R)}}var i={is_global:y,in(){var E;if(e.inert=f,!_){n==null||n.abort(),(E=n==null?void 0:n.reset)==null||E.call(n);return}g||o==null||o.abort(),ge(e,"introstart"),o=Ie(e,c(),n,1,()=>{ge(e,"introend"),o==null||o.abort(),o=v=void 0,e.style.overflow=I})},out(E){if(!g){E==null||E(),v=void 0;return}e.inert=!0,ge(e,"outrostart"),n=Ie(e,c(),o,0,()=>{ge(e,"outroend"),E==null||E()})},stop:()=>{o==null||o.abort(),n==null||n.abort()}},b=we;if((b.transitions??(b.transitions=[])).push(i),_&&Ia){var x=y;if(!x){for(var h=b.parent;h&&h.f&_a;)for(;(h=h.parent)&&!(h.f&da););x=!h||(h.f&ha)!==0}x&&pa(()=>{ya(()=>i.in())})}}function Ie(r,e,a,s,_){var g=s===1;if(ma(e)){var m,y=!1;return Be(()=>{if(!y){var b=e({direction:g?"in":"out"});m=Ie(r,b,a,s,_)}}),{abort:()=>{y=!0,m==null||m.abort()},deactivate:()=>m.deactivate(),reset:()=>m.reset(),t:()=>m.t()}}if(a==null||a.deactivate(),!(e!=null&&e.duration))return _(),{abort:ce,deactivate:ce,reset:ce,t:()=>s};const{delay:A=0,css:v,tick:f,easing:I=Ra}=e;var o=[];if(g&&a===void 0&&(f&&f(0,1),v)){var n=Le(v(0,1));o.push(n,n)}var c=()=>1-s,i=r.animate(o,{duration:A});return i.onfinish=()=>{var b=(a==null?void 0:a.t())??1-s;a==null||a.abort();var x=s-b,h=e.duration*Math.abs(x),E=[];if(h>0){var R=!1;if(v)for(var w=Math.ceil(h/16.666666666666668),M=0;M<=w;M+=1){var ee=b+x*I(M/w),H=Le(v(ee,1-ee));E.push(H),R||(R=H.overflow==="hidden")}R&&(r.style.overflow="hidden"),c=()=>{var F=i.currentTime;return b+x*I(F/h)},f&&Ca(()=>{if(i.playState!=="running")return!1;var F=c();return f(F,1-F),!0})}i=r.animate(E,{duration:h,fill:"forwards"}),i.onfinish=()=>{c=()=>s,f==null||f(s,1-s),_()}},{abort:()=>{i&&(i.cancel(),i.effect=null,i.onfinish=ce)},deactivate:()=>{_=ce},reset:()=>{s===0&&(f==null||f(1,0))},t:()=>c()}}const Oa=r=>r;function Fa(r){const e=r-1;return e*e*e+1}function De(r){const e=typeof r=="string"&&r.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[r,"px"]}function ne(r,{delay:e=0,duration:a=400,easing:s=Oa}={}){const _=+getComputedStyle(r).opacity;return{delay:e,duration:a,easing:s,css:g=>`opacity: ${g*_}`}}function Me(r,{delay:e=0,duration:a=400,easing:s=Fa,x:_=0,y:g=0,opacity:m=0}={}){const y=getComputedStyle(r),A=+y.opacity,v=y.transform==="none"?"":y.transform,f=A*(1-m),[I,o]=De(_),[n,c]=De(g);return{delay:e,duration:a,easing:s,css:(i,b)=>`
			transform: ${v} translate(${(1-i)*I}${o}, ${(1-i)*n}${c});
			opacity: ${A-f*b}`}}var La=Q('<circle class="svelte-jbey0l"></circle>'),Da=Q('<g class="svelte-jbey0l"><line stroke="grey" stroke-linecap="round" class="svelte-jbey0l"></line><circle opacity="0%" class="svelte-jbey0l"></circle></g>'),Ha=Q("<!><!>",1),Pa=Q('<circle class="svelte-jbey0l"></circle>'),za=Q('<circle class="svelte-jbey0l"></circle>'),Ba=Q('<polygon fill="black"></polygon><polygon fill="black"></polygon><g class="svelte-jbey0l"><text text-anchor="middle" dominant-baseline="mathematical" font-size="0.09" class="svelte-jbey0l">FLIP</text><rect class="svelte-jbey0l"></rect></g><g class="svelte-jbey0l"><text text-anchor="middle" dominant-baseline="mathematical" font-size="0.09" class="svelte-jbey0l">SMUSH</text><rect class="svelte-jbey0l"></rect></g>',1),qa=Q('<g class="svelte-jbey0l"><text text-anchor="middle" font-size="0.1" class="svelte-jbey0l">NEXT</text><rect class="svelte-jbey0l"></rect></g>'),Ua=Q("<g><!><!><!></g>"),Ya=ke("<span> </span>"),Ga=ke('<div class="wheel-text svelte-jbey0l"></div>'),Va=ke('<svg class="game-window svelte-jbey0l"><!></svg> <!> <div class="move_counter svelte-jbey0l"> </div>',1);function Qa(r,e){xa(e,!0);const a={wheel:0,smush:1,display:2};let s=re(-1);const _=40;function g(l,p,d){let S=171*l%30269,L=172*p%30307,T=170*d%30323;return[(S/30269+L/30307+T/30323)%1,S,L,T]}function m(l,p,d,S){let L=0;for(let T=l.length-1;T>=0;T--){[L,p,d,S]=g(p,d,S);const P=Math.floor(L*(T+1));[l[T],l[P]]=[l[P],l[T]]}return l}var y=[];for(let l=0;l<_;l++)y.push(l<_/2);let A=new Date;y=m(y,A.getDate(),A.getMonth()+1,A.getFullYear());let v=re(1),f=1,I=.5*(Math.sqrt(t(v)**2+f**2)/4),o=Ma(()=>.6*Math.PI*I/y.length);var n=[];for(let l=0;l<y.length;l++)n.push((2*l+1)*Math.PI/y.length);let c=re(null);var i=re(q([[]]));let b=re(0),x=re(q([])),h=[];var E=re(0);function R(l){if(t(c)==null){j(c,q(l));return}if(l==t(c)){j(c,null);return}let p=l>t(c)?t(c):l,d=l>t(c)?l:t(c);j(i,q([y.slice(p+1,d+1),y.slice(d+1).concat(y.slice(0,p+1))])),N(i)[1].length>N(i)[0].length&&j(i,q(N(i).reverse())),j(c,null),M(a.smush)}function w(){j(x,q([Array(N(i)[0].length),Array(N(i)[1].length)]));let l=0,p=0;if(t(b)>=0){h=N(i)[0].slice(0,t(b)),l=t(b),p=0;for(let d=0;d<t(b);d++)t(x)[0][d]=d}else{h=N(i)[1].slice(0,-t(b)),l=0,p=-t(b);for(let d=0;d<-t(b);d++)t(x)[1][d]=d}for(;p<N(i)[1].length&&l<N(i)[0].length;)t(x)[0][l]=h.length,h.push(N(i)[0][l]),t(x)[1][p]=h.length,h.push(N(i)[1][p]),p+=1,l+=1;for(let d=l;d<N(i)[0].length;d++)t(x)[0][d]=h.length+d-l;for(let d=p;d<N(i)[1].length;d++)t(x)[1][d]=h.length+d-p;h=h.concat(N(i)[1].slice(p)),h=h.concat(N(i)[0].slice(l)),console.log(t(x)),y=h,j(s,q(a.display))}function M(l){if(l==a.wheel){let p=setInterval(()=>{j(v,.75),clearInterval(p)},500);j(s,q(a.wheel))}else if(l==a.smush){j(b,0);const p=t(v);let d=0,S=20,L=setInterval(()=>{d+=1,j(v,d*(4*t(o)*y.length-p)/S+p),d==S&&clearInterval(L)},20);j(s,q(a.smush))}else l==a.display&&j(s,q(a.display))}ka(()=>{j(v,.75),j(s,q(a.wheel))});var ee=Va(),H=pe(ee),F=W(H);{var _e=l=>{var p=Ha(),d=pe(p);ue(d,17,()=>y,ve,(L,T,P)=>{var k=La();C(()=>u(k,"cx",I*Math.cos(2*Math.PI*P/y.length))),C(()=>u(k,"cy",I*Math.sin(2*Math.PI*P/y.length))),C(()=>{u(k,"r",t(o)),u(k,"fill",t(T)?"red":"black")}),V(6,k,()=>ne,()=>({delay:100,duration:200})),V(5,k,()=>ne,()=>({delay:550,duration:200})),z(L,k)});var S=B(d);ue(S,17,()=>n,ve,(L,T,P)=>{var k=Da(),O=W(k);C(()=>u(O,"x1",(I-2*t(o))*Math.cos(t(T)))),C(()=>u(O,"y1",(I-2*t(o))*Math.sin(t(T)))),C(()=>u(O,"x2",(I+2*t(o))*Math.cos(t(T)))),C(()=>u(O,"y2",(I+2*t(o))*Math.sin(t(T))));var D=B(O);C(()=>u(D,"cx",I*Math.cos(t(T)))),C(()=>u(D,"cy",I*Math.sin(t(T)))),G(k),C(()=>{u(k,"opacity",P==t(c)?100:0),u(O,"stroke-width",t(o)/2),u(D,"r",2.5*t(o))}),V(6,k,()=>ne,()=>({duration:100})),ie("click",k,()=>{R(P)}),z(L,k)}),z(l,p)},le=l=>{var p=Ua(),d=W(p);ue(d,17,()=>N(i)[0],ve,(k,O,D)=>{var $=Pa();C(()=>u($,"cx",t(s)==a.smush?4*t(o)*(D-Math.floor(N(i)[0].length/2)):3*t(o)*(t(x)[0][D]-Math.floor(y.length/2)))),C(()=>{u($,"r",t(o)),u($,"cy",t(s)==a.smush?-t(o):0),u($,"fill",t(O)?"red":"black")}),V(6,$,()=>Me,()=>({y:2*t(o),duration:500})),z(k,$)});var S=B(d);ue(S,17,()=>N(i)[1],ve,(k,O,D)=>{var $=za();C(()=>u($,"cx",t(s)==a.smush?4*t(o)*(t(b)+D-Math.floor(N(i)[0].length/2)+.5):3*t(o)*(t(x)[1][D]-Math.floor(y.length/2)))),C(()=>{u($,"r",t(o)),u($,"cy",t(s)==a.smush?t(o):0),u($,"fill",t(O)?"red":"black")}),V(6,$,()=>Me,()=>({y:2*t(o),duration:500})),z(k,$)});var L=B(S);{var T=k=>{var O=Ba(),D=pe(O),$=B(D),ae=B($),te=W(ae),U=B(te);G(ae);var Y=B(ae),be=W(Y),se=B(be);G(Y),C(()=>{u(D,"points",`${-.4*t(v)},${.35*f} ${-.3*t(v)},${.4*f} ${-.3*t(v)},${.3*f}`),u($,"points",`${.4*t(v)},${.35*f} ${.3*t(v)},${.4*f} ${.3*t(v)},${.3*f}`),u(te,"y",.346*f),u(te,"x",-.16*t(v)),u(U,"width",.2*t(v)),u(U,"height",.1*f),u(U,"x",-.26*t(v)),u(U,"y",.3*f),u(U,"rx",t(o)),u(be,"y",.346*f),u(be,"x",.11*t(v)),u(se,"width",.3*t(v)),u(se,"height",.1*f),u(se,"x",-.04*t(v)),u(se,"y",.3*f),u(se,"rx",t(o))}),ie("click",D,()=>{j(b,t(b)-1)}),ie("click",$,()=>{j(b,t(b)+1)}),ie("click",U,()=>{N(i)[1]=N(i)[1].reverse()}),ie("click",se,w),z(k,O)},P=k=>{var O=Ve(),D=pe(O);{var $=ae=>{var te=qa(),U=W(te),Y=B(U);G(te),C(()=>{u(U,"y",.385*f),u(U,"x",0*t(v)),u(Y,"width",.25*t(v)),u(Y,"height",.1*f),u(Y,"x",-.125*t(v)),u(Y,"y",.3*f),u(Y,"rx",t(o))}),ie("click",Y,()=>{M(a.wheel),j(E,N(E)+1)}),z(ae,te)};ye(D,ae=>{t(s)==a.display&&ae($)},!0)}z(k,O)};ye(L,k=>{t(s)==a.smush?k(T):k(P,!1)})}G(p),V(1,p,()=>ne,()=>({delay:500,duration:800})),V(2,p,()=>ne,()=>({y:2*t(o),duration:500})),z(l,p)};ye(F,l=>{t(s)==a.wheel?l(_e):l(le,!1)})}G(H);var K=B(H,2);{var oe=l=>{var p=Ga();ue(p,20,()=>"Select two points on the wheel",ve,(d,S,L)=>{var T=Ya(),P=W(T,!0);G(T),C(()=>Re(P,S)),V(5,T,()=>ne,()=>({delay:5e3+L*50,duration:800})),z(d,T)}),G(p),V(2,p,()=>Me,()=>({y:-20,duration:200})),z(l,p)};ye(K,l=>{t(s)==a.wheel&&l(oe)})}var de=B(K,2),he=W(de);G(de),C(()=>{u(H,"viewBox",`-${.5*t(v)} -${.5*t(v)} ${t(v)??""} ${t(v)??""}`),Re(he,`MOVES: ${N(E)??""}`)}),z(r,ee),Ea()}export{Qa as component};

import{a as H,t as xe,n as J,c as Ue}from"../chunks/disclose-version.CUIVM28i.js";import{k as W,m as ge,N as Ge,Z as Ve,l as Xe,j as Ye,i as Ke,X as Le,H as We,r as Me,n as me,u as oe,R as Ze,aa as he,p as Fe,q as He,t as Je,L as De,e as pe,ab as Ee,ac as ke,ad as Ie,ae as Qe,W as ea,af as aa,A as ta,ag as Pe,I as ze,ah as ra,ai as sa,s as Ae,aj as ia,P as na,ak as la,h as oa,al as fa,E as ca,am as va,an as ua,ao as _a,y as da,ap as ha,aq as pa,z as fe,ar as ya,as as ga,F as Te,G as Ne,B as ma,at as ae,C as ue,a6 as C,D as wa,c as j,d as a,a7 as K,a9 as D,a8 as V,au as A,a4 as $e}from"../chunks/runtime.BkFPzvde.js";import{a as ba,e as se,s as Se}from"../chunks/render.BOG3znNa.js";import{p as z,i as _e}from"../chunks/if.DDn2pu0e.js";import{o as xa}from"../chunks/index-client.CB66icju.js";function ce(r,e){return e}function Ea(r,e,t,i){for(var s=[],l=e.length,c=0;c<l;c++)Qe(e[c].e,s,!0);var m=l>0&&s.length===0&&t!==null;if(m){var v=t.parentNode;ea(v),v.append(t),i.clear(),Z(r,e[0].prev,e[l-1].next)}aa(s,()=>{for(var M=0;M<l;M++){var u=e[M];m||(i.delete(u.k),Z(r,u.prev,u.next)),ta(u.e,!m)}})}function ve(r,e,t,i,s,l=null){var c=r,m={flags:e,items:new Map,first:null},v=(e&Pe)!==0;if(v){var M=r;c=W?ge(Ge(M)):M.appendChild(Ve())}W&&Xe();var u=null,d=!1;Ye(()=>{var h=t(),n=Ke(h)?h:h==null?[]:Le(h),o=n.length;if(d&&o===0)return;d=o===0;let p=!1;if(W){var T=c.data===We;T!==(o===0)&&(c=Me(),ge(c),me(!1),p=!0)}if(W){for(var k=null,E,b=0;b<o;b++){if(oe.nodeType===8&&oe.data===Ze){c=oe,p=!0,me(!1);break}var N=n[b],w=i(N,b);E=Be(oe,m,k,null,N,w,b,s,e),m.items.set(w,E),k=E}o>0&&ge(Me())}if(!W){var x=ze;Ia(n,m,c,s,e,(x.f&he)!==0,i)}l!==null&&(o===0?u?Fe(u):u=He(()=>l(c)):u!==null&&Je(u,()=>{u=null})),p&&me(!0),t()}),W&&(c=oe)}function Ia(r,e,t,i,s,l,c,m){var P,q,S,F;var v=(s&ra)!==0,M=(s&(Ee|Ie))!==0,u=r.length,d=e.items,h=e.first,n=h,o,p=null,T,k=[],E=[],b,N,w,x;if(v)for(x=0;x<u;x+=1)b=r[x],N=c(b,x),w=d.get(N),w!==void 0&&((P=w.a)==null||P.measure(),(T??(T=new Set)).add(w));for(x=0;x<u;x+=1){if(b=r[x],N=c(b,x),w=d.get(N),w===void 0){var te=n?n.e.nodes_start:t;p=Be(te,e,p,p===null?e.first:p.next,b,N,x,i,s),d.set(N,p),k=[],E=[],n=p.next;continue}if(M&&Ma(w,b,x,s),w.e.f&he&&(Fe(w.e),v&&((q=w.a)==null||q.unfix(),(T??(T=new Set)).delete(w))),w!==n){if(o!==void 0&&o.has(w)){if(k.length<E.length){var B=E[0],O;p=B.prev;var ne=k[0],le=k[k.length-1];for(O=0;O<k.length;O+=1)Ce(k[O],B,t);for(O=0;O<E.length;O+=1)o.delete(E[O]);Z(e,ne.prev,le.next),Z(e,p,ne),Z(e,le,B),n=B,p=le,x-=1,k=[],E=[]}else o.delete(w),Ce(w,n,t),Z(e,w.prev,w.next),Z(e,w,p===null?e.first:p.next),Z(e,p,w),p=w;continue}for(k=[],E=[];n!==null&&n.k!==N;)(l||!(n.e.f&he))&&(o??(o=new Set)).add(n),E.push(n),n=n.next;if(n===null)continue;w=n}k.push(w),p=w,n=w.next}if(n!==null||o!==void 0){for(var _=o===void 0?[]:Le(o);n!==null;)(l||!(n.e.f&he))&&_.push(n),n=n.next;var y=_.length;if(y>0){var g=s&Pe&&u===0?t:null;if(v){for(x=0;x<y;x+=1)(S=_[x].a)==null||S.measure();for(x=0;x<y;x+=1)(F=_[x].a)==null||F.fix()}Ea(e,_,g,d)}}v&&De(()=>{var I;if(T!==void 0)for(w of T)(I=w.a)==null||I.apply()}),pe.first=e.first&&e.first.e,pe.last=p&&p.e}function Ma(r,e,t,i){i&Ee&&ke(r.v,e),i&Ie?ke(r.i,t):r.i=t}function Be(r,e,t,i,s,l,c,m,v,M){var u=(v&Ee)!==0,d=(v&ia)===0,h=u?d?sa(s):Ae(s):s,n=v&Ie?Ae(c):c,o={i:n,v:h,k:l,a:null,e:null,prev:t,next:i};try{return o.e=He(()=>m(r,h,n),W),o.e.prev=t&&t.e,o.e.next=i&&i.e,t===null?e.first=o:(t.next=o,t.e.next=o.e),i!==null&&(i.prev=o,i.e.prev=o.e),o}finally{}}function Ce(r,e,t){for(var i=r.next?r.next.e.nodes_start:t,s=e?e.e.nodes_start:t,l=r.e.nodes_start;l!==i;){var c=na(l);s.before(l),l=c}}function Z(r,e,t){e===null?r.first=t:(e.next=t,e.e.next=t&&t.e),t!==null&&(t.prev=e,t.e.prev=e&&e.e)}function f(r,e,t,i){var s=r.__attributes??(r.__attributes={});W&&(s[e]=r.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&r.nodeName==="LINK")||s[e]!==(s[e]=t)&&(e==="style"&&"__styles"in r&&(r.__styles={}),e==="loading"&&(r[la]=t),t==null?r.removeAttribute(e):typeof t!="string"&&ka(r).includes(e)?r[e]=t:r.setAttribute(e,t))}var Re=new Map;function ka(r){var e=Re.get(r.nodeName);if(e)return e;Re.set(r.nodeName,e=[]);for(var t,i=r,s=Element.prototype;s!==i;){t=fa(i);for(var l in t)t[l].set&&e.push(l);i=oa(i)}return e}const Aa=()=>performance.now(),Y={tick:r=>requestAnimationFrame(r),now:()=>Aa(),tasks:new Set};function qe(){const r=Y.now();Y.tasks.forEach(e=>{e.c(r)||(Y.tasks.delete(e),e.f())}),Y.tasks.size!==0&&Y.tick(qe)}function Ta(r){let e;return Y.tasks.size===0&&Y.tick(qe),{promise:new Promise(t=>{Y.tasks.add(e={c:r,f:t})}),abort(){Y.tasks.delete(e)}}}function de(r,e){r.dispatchEvent(new CustomEvent(e))}function Na(r){if(r==="float")return"cssFloat";if(r==="offset")return"cssOffset";if(r.startsWith("--"))return r;const e=r.split("-");return e.length===1?e[0]:e[0]+e.slice(1).map(t=>t[0].toUpperCase()+t.slice(1)).join("")}function je(r){const e={},t=r.split(";");for(const i of t){const[s,l]=i.split(":");if(!s||l===void 0)break;const c=Na(s.trim());e[c]=l.trim()}return e}const $a=r=>r;function X(r,e,t,i){var s=(r&ha)!==0,l=(r&ya)!==0,c=s&&l,m=(r&ga)!==0,v=c?"both":s?"in":"out",M,u=e.inert,d=e.style.overflow,h,n;function o(){var b=ze,N=pe;Te(null),Ne(null);try{return M??(M=t()(e,(i==null?void 0:i())??{},{direction:v}))}finally{Te(b),Ne(N)}}var p={is_global:m,in(){var b;if(e.inert=u,!s){n==null||n.abort(),(b=n==null?void 0:n.reset)==null||b.call(n);return}l||h==null||h.abort(),de(e,"introstart"),h=be(e,o(),n,1,()=>{de(e,"introend"),h==null||h.abort(),h=M=void 0,e.style.overflow=d})},out(b){if(!l){b==null||b(),M=void 0;return}e.inert=!0,de(e,"outrostart"),n=be(e,o(),h,0,()=>{de(e,"outroend"),b==null||b()})},stop:()=>{h==null||h.abort(),n==null||n.abort()}},T=pe;if((T.transitions??(T.transitions=[])).push(p),s&&ba){var k=m;if(!k){for(var E=T.parent;E&&E.f&ca;)for(;(E=E.parent)&&!(E.f&va););k=!E||(E.f&ua)!==0}k&&_a(()=>{da(()=>p.in())})}}function be(r,e,t,i,s){var l=i===1;if(pa(e)){var c,m=!1;return De(()=>{if(!m){var T=e({direction:l?"in":"out"});c=be(r,T,t,i,s)}}),{abort:()=>{m=!0,c==null||c.abort()},deactivate:()=>c.deactivate(),reset:()=>c.reset(),t:()=>c.t()}}if(t==null||t.deactivate(),!(e!=null&&e.duration))return s(),{abort:fe,deactivate:fe,reset:fe,t:()=>i};const{delay:v=0,css:M,tick:u,easing:d=$a}=e;var h=[];if(l&&t===void 0&&(u&&u(0,1),M)){var n=je(M(0,1));h.push(n,n)}var o=()=>1-i,p=r.animate(h,{duration:v});return p.onfinish=()=>{var T=(t==null?void 0:t.t())??1-i;t==null||t.abort();var k=i-T,E=e.duration*Math.abs(k),b=[];if(E>0){var N=!1;if(M)for(var w=Math.ceil(E/16.666666666666668),x=0;x<=w;x+=1){var te=T+k*d(x/w),B=je(M(te,1-te));b.push(B),N||(N=B.overflow==="hidden")}N&&(r.style.overflow="hidden"),o=()=>{var O=p.currentTime;return T+k*d(O/E)},u&&Ta(()=>{if(p.playState!=="running")return!1;var O=o();return u(O,1-O),!0})}p=r.animate(b,{duration:E,fill:"forwards"}),p.onfinish=()=>{o=()=>i,u==null||u(i,1-i),s()}},{abort:()=>{p&&(p.cancel(),p.effect=null,p.onfinish=fe)},deactivate:()=>{s=fe},reset:()=>{i===0&&(u==null||u(1,0))},t:()=>o()}}const Sa=r=>r;function Ca(r){const e=r-1;return e*e*e+1}function Oe(r){const e=typeof r=="string"&&r.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[r,"px"]}function ie(r,{delay:e=0,duration:t=400,easing:i=Sa}={}){const s=+getComputedStyle(r).opacity;return{delay:e,duration:t,easing:i,css:l=>`opacity: ${l*s}`}}function we(r,{delay:e=0,duration:t=400,easing:i=Ca,x:s=0,y:l=0,opacity:c=0}={}){const m=getComputedStyle(r),v=+m.opacity,M=m.transform==="none"?"":m.transform,u=v*(1-c),[d,h]=Oe(s),[n,o]=Oe(l);return{delay:e,duration:t,easing:i,css:(p,T)=>`
			transform: ${M} translate(${(1-p)*d}${h}, ${(1-p)*n}${o});
			opacity: ${v-u*T}`}}var Ra=J('<circle class="svelte-jbey0l"></circle>'),ja=J('<g class="svelte-jbey0l"><line stroke="grey" stroke-linecap="round" class="svelte-jbey0l"></line><circle opacity="0%" class="svelte-jbey0l"></circle></g>'),Oa=J("<!><!>",1),La=J('<circle class="svelte-jbey0l"></circle>'),Fa=J('<circle class="svelte-jbey0l"></circle>'),Ha=J('<polygon fill="black"></polygon><polygon fill="black"></polygon><g class="svelte-jbey0l"><text text-anchor="middle" font-size="0.1" class="svelte-jbey0l">FLIP</text><rect class="svelte-jbey0l"></rect></g><g class="svelte-jbey0l"><text text-anchor="middle" font-size="0.1" class="svelte-jbey0l">SMUSH</text><rect class="svelte-jbey0l"></rect></g>',1),Da=J('<g class="svelte-jbey0l"><text text-anchor="middle" font-size="0.1" class="svelte-jbey0l">NEXT</text><rect class="svelte-jbey0l"></rect></g>'),Pa=J("<g><!><!><!></g>"),za=xe("<span> </span>"),Ba=xe('<div class="wheel-text svelte-jbey0l"></div>'),qa=xe('<svg class="game-window svelte-jbey0l"><!></svg> <!> <div class="move_counter svelte-jbey0l"> </div>',1);function Ka(r,e){ma(e,!0);const t={wheel:0,smush:1,display:2};let i=ae(null),s=ae(1),l=1,c=$e(()=>.5*(Math.sqrt(a(s)**2+l**2)/4)),m=Array.from({length:40},()=>Math.random()<.5),v=$e(()=>.5*Math.PI*a(c)/m.length);var M=[];for(let _=0;_<m.length;_++)M.push((2*_+1)*Math.PI/m.length);let u=ae(null);var d=ae(z([[]]));let h=ae(0),n=ae(z([])),o=[];var p=ae(0);function T(_){if(a(u)==null){j(u,z(_));return}if(_==a(u)){j(u,null);return}let y=_>a(u)?a(u):_,g=_>a(u)?_:a(u);j(d,z([m.slice(y+1,g+1),m.slice(g+1).concat(m.slice(0,y+1))])),A(d)[1].length>A(d)[0].length&&j(d,z(A(d).reverse())),j(u,null),E(t.smush)}function k(){j(n,z([Array(A(d)[0].length),Array(A(d)[1].length)]));let _=0,y=0;if(a(h)>=0){o=A(d)[0].slice(0,a(h)),_=a(h),y=0;for(let g=0;g<a(h);g++)a(n)[0][g]=g}else{o=A(d)[1].slice(0,-a(h)),_=0,y=-a(h);for(let g=0;g<-a(h);g++)a(n)[1][g]=g}for(;y<A(d)[1].length&&_<A(d)[0].length;)a(n)[0][_]=o.length,o.push(A(d)[0][_]),a(n)[1][y]=o.length,o.push(A(d)[1][y]),y+=1,_+=1;for(let g=_;g<A(d)[0].length;g++)a(n)[0][g]=o.length+g-_;for(let g=y;g<A(d)[1].length;g++)a(n)[1][g]=o.length+g-y;o=o.concat(A(d)[1].slice(y)),o=o.concat(A(d)[0].slice(_)),console.log(a(n)),m=o,j(i,z(t.display))}function E(_){if(_==t.wheel){let y=setInterval(()=>{j(s,1),clearInterval(y)},500);j(i,z(t.wheel))}else if(_==t.smush){let y=0,g=20,P=setInterval(()=>{y+=1,j(s,y*(4*a(v)*m.length-1)/g+1),y==g&&clearInterval(P)},20);j(i,z(t.smush))}else _==t.display&&j(i,z(t.display))}xa(()=>{j(i,z(t.wheel))});var b=qa(),N=ue(b),w=K(N);{var x=_=>{var y=Oa(),g=ue(y);ve(g,17,()=>m,ce,(q,S,F)=>{var I=Ra();C(()=>f(I,"cx",a(c)*Math.cos(2*Math.PI*F/m.length))),C(()=>f(I,"cy",a(c)*Math.sin(2*Math.PI*F/m.length))),C(()=>{f(I,"r",a(v)),f(I,"fill",a(S)?"red":"black")}),X(6,I,()=>ie,()=>({delay:100,duration:200})),X(5,I,()=>ie,()=>({delay:550,duration:200})),H(q,I)});var P=D(g);ve(P,17,()=>M,ce,(q,S,F)=>{var I=ja(),R=K(I);C(()=>f(R,"x1",(a(c)-2*a(v))*Math.cos(a(S)))),C(()=>f(R,"y1",(a(c)-2*a(v))*Math.sin(a(S)))),C(()=>f(R,"x2",(a(c)+2*a(v))*Math.cos(a(S)))),C(()=>f(R,"y2",(a(c)+2*a(v))*Math.sin(a(S))));var L=D(R);C(()=>f(L,"cx",a(c)*Math.cos(a(S)))),C(()=>f(L,"cy",a(c)*Math.sin(a(S)))),V(I),C(()=>{f(I,"opacity",F==a(u)?100:0),f(R,"stroke-width",a(v)/2),f(L,"r",2.5*a(v))}),X(6,I,()=>ie,()=>({duration:100})),se("click",I,()=>{T(F)}),H(q,I)}),H(_,y)},te=_=>{var y=Pa(),g=K(y);ve(g,17,()=>A(d)[0],ce,(I,R,L)=>{var $=La();C(()=>f($,"cx",a(i)==t.smush?4*a(v)*(L-Math.floor(A(d)[0].length/2)):3*a(v)*(a(n)[0][L]-Math.floor(m.length/2)))),C(()=>{f($,"r",a(v)),f($,"cy",a(i)==t.smush?-a(v):0),f($,"fill",a(R)?"red":"black")}),X(6,$,()=>we,()=>({y:2*a(v),duration:500})),H(I,$)});var P=D(g);ve(P,17,()=>A(d)[1],ce,(I,R,L)=>{var $=Fa();C(()=>f($,"cx",a(i)==t.smush?4*a(v)*(a(h)+L-Math.floor(A(d)[0].length/2)+.5):3*a(v)*(a(n)[1][L]-Math.floor(m.length/2)))),C(()=>{f($,"r",a(v)),f($,"cy",a(i)==t.smush?a(v):0),f($,"fill",a(R)?"red":"black")}),X(6,$,()=>we,()=>({y:2*a(v),duration:500})),H(I,$)});var q=D(P);{var S=I=>{var R=Ha(),L=ue(R),$=D(L),Q=D($),ee=K(Q),U=D(ee);V(Q);var G=D(Q),ye=K(G),re=D(ye);V(G),C(()=>{f(L,"points",`${-.4*a(s)},${.35*l} ${-.3*a(s)},${.4*l} ${-.3*a(s)},${.3*l}`),f($,"points",`${.4*a(s)},${.35*l} ${.3*a(s)},${.4*l} ${.3*a(s)},${.3*l}`),f(ee,"y",.385*l),f(ee,"x",-.16*a(s)),f(U,"width",.2*a(s)),f(U,"height",.1*l),f(U,"x",-.26*a(s)),f(U,"y",.3*l),f(U,"rx",a(v)),f(ye,"y",.385*l),f(ye,"x",.11*a(s)),f(re,"width",.3*a(s)),f(re,"height",.1*l),f(re,"x",-.04*a(s)),f(re,"y",.3*l),f(re,"rx",a(v))}),se("click",L,()=>{j(h,a(h)-1)}),se("click",$,()=>{j(h,a(h)+1)}),se("click",U,()=>{A(d)[1]=A(d)[1].reverse()}),se("click",re,k),H(I,R)},F=I=>{var R=Ue(),L=ue(R);{var $=Q=>{var ee=Da(),U=K(ee),G=D(U);V(ee),C(()=>{f(U,"y",.385*l),f(U,"x",0*a(s)),f(G,"width",.25*a(s)),f(G,"height",.1*l),f(G,"x",-.125*a(s)),f(G,"y",.3*l),f(G,"rx",a(v))}),se("click",G,()=>{E(t.wheel),j(p,A(p)+1)}),H(Q,ee)};_e(L,Q=>{a(i)==t.display&&Q($)},!0)}H(I,R)};_e(q,I=>{a(i)==t.smush?I(S):I(F,!1)})}V(y),X(1,y,()=>ie,()=>({delay:500,duration:800})),X(2,y,()=>ie,()=>({y:2*a(v),duration:500})),H(_,y)};_e(w,_=>{a(i)==t.wheel?_(x):_(te,!1)})}V(N);var B=D(N,2);{var O=_=>{var y=Ba();ve(y,20,()=>"Select two points on the wheel",ce,(g,P,q)=>{var S=za(),F=K(S,!0);V(S),C(()=>Se(F,P)),X(5,S,()=>ie,()=>({delay:5e3+q*50,duration:800})),H(g,S)}),V(y),X(2,y,()=>we,()=>({y:-20,duration:200})),H(_,y)};_e(B,_=>{a(i)==t.wheel&&_(O)})}var ne=D(B,2),le=K(ne);V(ne),C(()=>{f(N,"viewBox",`-${.5*a(s)} -${.5*l} ${a(s)??""} ${l}`),Se(le,`MOVES: ${A(p)??""}`)}),H(r,b),wa()}export{Ka as component};

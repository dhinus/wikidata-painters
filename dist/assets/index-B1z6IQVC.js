var de=Object.defineProperty;var he=(e,t,n)=>t in e?de(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var T=(e,t,n)=>he(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function y(){}function le(e){return e()}function X(){return Object.create(null)}function M(e){e.forEach(le)}function ce(e){return typeof e=="function"}function F(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let R;function B(e,t){return e===t?!0:(R||(R=document.createElement("a")),R.href=t,e===R.href)}function pe(e){return Object.keys(e).length===0}function I(e,t){e.appendChild(t)}function w(e,t,n){e.insertBefore(t,n||null)}function _(e){e.parentNode&&e.parentNode.removeChild(e)}function ge(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function E(e){return document.createElement(e)}function z(e){return document.createTextNode(e)}function O(){return z(" ")}function me(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function b(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function _e(e){return Array.from(e.childNodes)}function U(e,t){t=""+t,e.data!==t&&(e.data=t)}function D(e,t,n){e.classList.toggle(t,!!n)}function we(e,t,{bubbles:n=!1,cancelable:r=!1}={}){return new CustomEvent(e,{detail:t,bubbles:n,cancelable:r})}let q;function S(e){q=e}function ve(){if(!q)throw new Error("Function called outside component initialization");return q}function be(){const e=ve();return(t,n,{cancelable:r=!1}={})=>{const i=e.$$.callbacks[t];if(i){const o=we(t,n,{cancelable:r});return i.slice().forEach(l=>{l.call(e,o)}),!o.defaultPrevented}return!0}}const x=[],Z=[];let C=[];const ee=[],ye=Promise.resolve();let H=!1;function $e(){H||(H=!0,ye.then(ue))}function W(e){C.push(e)}const j=new Set;let k=0;function ue(){if(k!==0)return;const e=q;do{try{for(;k<x.length;){const t=x[k];k++,S(t),Ee(t.$$)}}catch(t){throw x.length=0,k=0,t}for(S(null),x.length=0,k=0;Z.length;)Z.pop()();for(let t=0;t<C.length;t+=1){const n=C[t];j.has(n)||(j.add(n),n())}C.length=0}while(x.length);for(;ee.length;)ee.pop()();H=!1,j.clear(),S(e)}function Ee(e){if(e.fragment!==null){e.update(),M(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(W)}}function Le(e){const t=[],n=[];C.forEach(r=>e.indexOf(r)===-1?t.push(r):n.push(r)),n.forEach(r=>r()),C=t}const Q=new Set;let P;function te(){P={r:0,c:[],p:P}}function ne(){P.r||M(P.c),P=P.p}function N(e,t){e&&e.i&&(Q.delete(e),e.i(t))}function A(e,t,n,r){if(e&&e.o){if(Q.has(e))return;Q.add(e),P.c.push(()=>{Q.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}function re(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function fe(e){e&&e.c()}function V(e,t,n){const{fragment:r,after_update:i}=e.$$;r&&r.m(t,n),W(()=>{const o=e.$$.on_mount.map(le).filter(ce);e.$$.on_destroy?e.$$.on_destroy.push(...o):M(o),e.$$.on_mount=[]}),i.forEach(W)}function K(e,t){const n=e.$$;n.fragment!==null&&(Le(n.after_update),M(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Ne(e,t){e.$$.dirty[0]===-1&&(x.push(e),$e(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Y(e,t,n,r,i,o,l=null,g=[-1]){const f=q;S(e);const u=e.$$={fragment:null,ctx:[],props:o,update:y,not_equal:i,bound:X(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(f?f.$$.context:[])),callbacks:X(),dirty:g,skip_bound:!1,root:t.target||f.$$.root};l&&l(u.root);let v=!1;if(u.ctx=n?n(e,t.props||{},(c,h,...p)=>{const $=p.length?p[0]:h;return u.ctx&&i(u.ctx[c],u.ctx[c]=$)&&(!u.skip_bound&&u.bound[c]&&u.bound[c]($),v&&Ne(e,c)),h}):[],u.update(),v=!0,M(u.before_update),u.fragment=r?r(u.ctx):!1,t.target){if(t.hydrate){const c=_e(t.target);u.fragment&&u.fragment.l(c),c.forEach(_)}else u.fragment&&u.fragment.c();t.intro&&N(e.$$.fragment),V(e,t.target,t.anchor),ue()}S(f)}class G{constructor(){T(this,"$$");T(this,"$$set")}$destroy(){K(this,1),this.$destroy=y}$on(t,n){if(!ce(n))return y;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const i=r.indexOf(n);i!==-1&&r.splice(i,1)}}$set(t){this.$$set&&!pe(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Pe="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Pe);function ke(e){let t,n,r,i;return{c(){t=E("button"),n=z(e[0]),b(t,"class","svelte-n144wh"),D(t,"right",e[1]==="right"),D(t,"wrong",e[1]==="wrong")},m(o,l){w(o,t,l),I(t,n),r||(i=me(t,"click",e[2]),r=!0)},p(o,[l]){l&1&&U(n,o[0]),l&2&&D(t,"right",o[1]==="right"),l&2&&D(t,"wrong",o[1]==="wrong")},i:y,o:y,d(o){o&&_(t),r=!1,i()}}}function xe(e,t,n){let{artistName:r,correct:i,index:o}=t;const l=be();function g(){l("message",{index:o})}return e.$$set=f=>{"artistName"in f&&n(0,r=f.artistName),"correct"in f&&n(1,i=f.correct),"index"in f&&n(3,o=f.index)},[r,i,g,o]}class Ae extends G{constructor(t){super(),Y(this,t,xe,ke,F,{artistName:0,correct:1,index:3})}}const Ce="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20version='1.1'%20viewBox='0%200%2048%2031'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:cc='http://creativecommons.org/ns%23'%20xmlns:dc='http://purl.org/dc/elements/1.1/'%20xmlns:rdf='http://www.w3.org/1999/02/22-rdf-syntax-ns%23'%3e%3cpath%20d='m0%2031h1.7778v-31h-1.7778zm3.5556%200h5.3334v-31h-5.3334zm7.1112-31v31h5.3334v-31z'%20fill='%23900'/%3e%3cpath%20d='m42.667%2031h1.7778v-31h-1.7778zm3.5556-31v31h1.7778v-31zm-28.444%2031h1.7778v-31h-1.7778zm3.5556-31v31h1.7778v-31z'%20fill='%23396'/%3e%3cpath%20d='m24.889%2031h5.3334v-31h-5.3334v31zm7.1112%200h1.7778v-31h-1.7778v31zm3.5556-31v31h5.3334v-31h-5.3334z'%20fill='%23069'/%3e%3c/svg%3e";function Ie(e){let t,n;return{c(){t=E("img"),b(t,"class","loading svelte-7mzcxr"),B(t.src,n=Ce)||b(t,"src",n),b(t,"alt","Loading")},m(r,i){w(r,t,i)},p:y,i:y,o:y,d(r){r&&_(t)}}}class Oe extends G{constructor(t){super(),Y(this,t,null,Ie,F,{})}}class ze{constructor(t){this.endpoint=t}query(t){const n=this.endpoint+"?query="+encodeURIComponent(t)+"&ts="+Date.now();return fetch(n,{headers:{Accept:"application/sparql-results+json"}}).then(i=>i.json())}}const Se="https://query.wikidata.org/sparql",qe=`SELECT ?painterLabel ?painting ?paintingLabel ?image WITH {
  SELECT ?painter ?painting ?image WHERE {
    ?painting wdt:P18 ?image .
    ?painting wdt:P31 wd:Q3305213 . # instance of (P31) painting (Q3305213)
    ?painting wdt:P170 ?painter .   # created by (P170)
    ?painter wdt:P106 wd:Q1028181 . # give me all people with occupation (P106) painter (Q1028181)
    ?painter wdt:P135 wd:Q40415 .   # who belonged to the impressionist (Q40415) movement (P135)
    BIND(MD5(CONCAT(str(?painting),str(RAND()))) as ?random)
  }
  ORDER BY ?random
  LIMIT 5
} AS %results WHERE {
  INCLUDE %results.
  SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
}`,Me=new ze(Se);function ie(e,t,n){const r=e.slice();return r[8]=t[n],r[10]=n,r}function Re(e){let t,n;return{c(){t=E("img"),B(t.src,n=e[1])||b(t,"src",n),b(t,"alt","A random painting"),b(t,"class","svelte-1ltrjst")},m(r,i){w(r,t,i)},p(r,i){i&2&&!B(t.src,n=r[1])&&b(t,"src",n)},i:y,o:y,d(r){r&&_(t)}}}function De(e){let t,n;return t=new Oe({}),{c(){fe(t.$$.fragment)},m(r,i){V(t,r,i),n=!0},p:y,i(r){n||(N(t.$$.fragment,r),n=!0)},o(r){A(t.$$.fragment,r),n=!1},d(r){K(t,r)}}}function oe(e){let t,n,r=e[2].painterLabel.value+"",i,o,l=e[2].paintingLabel.value+"",g,f,u,v;return{c(){t=E("p"),n=E("a"),i=z(r),o=z(` -
      `),g=z(l),u=O(),v=E("p"),v.innerHTML='<button onclick="window.location.reload();"><strong>Play again</strong></button>',b(n,"href",f=e[2].painting.value),b(n,"target","_blank")},m(c,h){w(c,t,h),I(t,n),I(n,i),I(n,o),I(n,g),w(c,u,h),w(c,v,h)},p(c,h){h&4&&r!==(r=c[2].painterLabel.value+"")&&U(i,r),h&4&&l!==(l=c[2].paintingLabel.value+"")&&U(g,l),h&4&&f!==(f=c[2].painting.value)&&b(n,"href",f)},d(c){c&&(_(t),_(u),_(v))}}}function se(e){let t,n,r;return n=new Ae({props:{index:e[10],artistName:e[8].painterLabel.value,correct:e[8].correct}}),n.$on("message",e[5]),{c(){t=E("p"),fe(n.$$.fragment)},m(i,o){w(i,t,o),V(n,t,null),r=!0},p(i,o){const l={};o&1&&(l.artistName=i[8].painterLabel.value),o&1&&(l.correct=i[8].correct),n.$set(l)},i(i){r||(N(n.$$.fragment,i),r=!0)},o(i){A(n.$$.fragment,i),r=!1},d(i){i&&_(t),K(n)}}}function Qe(e){let t,n,r,i,o,l,g,f,u;const v=[De,Re],c=[];function h(s,a){return s[4]?0:1}r=h(e),i=c[r]=v[r](e);let p=e[3]&&oe(e),$=re(e[0]),d=[];for(let s=0;s<$.length;s+=1)d[s]=se(ie(e,$,s));const ae=s=>A(d[s],1,1,()=>{d[s]=null});return{c(){t=E("h1"),t.textContent="Who painted this?",n=O(),i.c(),o=O(),p&&p.c(),l=O();for(let s=0;s<d.length;s+=1)d[s].c();g=O(),f=E("p"),f.innerHTML=`Powered by <a href="https://www.wikidata.org/">Wikidata</a>.
  Source code is <a href="https://github.com/dhinus/wikidata-painters/">here</a>.`,b(f,"class","notes svelte-1ltrjst")},m(s,a){w(s,t,a),w(s,n,a),c[r].m(s,a),w(s,o,a),p&&p.m(s,a),w(s,l,a);for(let L=0;L<d.length;L+=1)d[L]&&d[L].m(s,a);w(s,g,a),w(s,f,a),u=!0},p(s,[a]){let L=r;if(r=h(s),r===L?c[r].p(s,a):(te(),A(c[L],1,1,()=>{c[L]=null}),ne(),i=c[r],i?i.p(s,a):(i=c[r]=v[r](s),i.c()),N(i,1),i.m(o.parentNode,o)),s[3]?p?p.p(s,a):(p=oe(s),p.c(),p.m(l.parentNode,l)):p&&(p.d(1),p=null),a&33){$=re(s[0]);let m;for(m=0;m<$.length;m+=1){const J=ie(s,$,m);d[m]?(d[m].p(J,a),N(d[m],1)):(d[m]=se(J),d[m].c(),N(d[m],1),d[m].m(g.parentNode,g))}for(te(),m=$.length;m<d.length;m+=1)ae(m);ne()}},i(s){if(!u){N(i);for(let a=0;a<$.length;a+=1)N(d[a]);u=!0}},o(s){A(i),d=d.filter(Boolean);for(let a=0;a<d.length;a+=1)A(d[a]);u=!1},d(s){s&&(_(t),_(n),_(o),_(l),_(g),_(f)),c[r].d(s),p&&p.d(s),ge(d,s)}}}function Te(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e)+e)}function je(e,t,n){let r=[],i,o,l,g,f=!0;Me.query(qe).then(c=>{n(4,f=!1),n(0,r=c.results.bindings),o=Te(0,5),n(2,l=r[o]),n(1,i=l.image.value)});function u(){n(3,g=!0),r.forEach(c=>{c.correct!=="right"&&(c.correct="wrong")})}function v(c){const h=c.detail.index;h===o?(n(0,r[h].correct="right",r),u()):n(0,r[h].correct="wrong",r)}return[r,i,l,g,f,v]}class Be extends G{constructor(t){super(),Y(this,t,je,Qe,F,{})}}new Be({target:document.getElementById("app")});
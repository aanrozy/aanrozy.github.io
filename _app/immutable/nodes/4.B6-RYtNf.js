import{c as fe}from"../chunks/LOcFq8hi.js";import{c as q,a as l,f as p,t as me}from"../chunks/C_raZX0X.js";import{i as ue}from"../chunks/Bg-_FaKv.js";import{f as F,w as S,z as i,aQ as G,A as s,y as k,aD as xe,e as u,o as e,aC as H,ao as N,p as J,u as m,x as B,a0 as U,aR as _e,aS as he,g as ye,$ as be}from"../chunks/Dhz9NlS8.js";import{I as we,s as $e,d as X,f as Y,c as Z,j as De,g as I,e as Q,i as R,h as Se}from"../chunks/BXIz9OhW.js";import{l as ke,s as Pe,r as ee,p as O}from"../chunks/B6XUqdQ_.js";import{s as w}from"../chunks/N-39NA05.js";import{i as M}from"../chunks/hptRDdNK.js";import{b as W}from"../chunks/CKCFScfH.js";import{S as Ce,F as ze}from"../chunks/DgIa7Etg.js";function Te(v,t){const n=ke(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.563.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const a=[["path",{d:"m12 19-7-7 7-7"}],["path",{d:"M19 12H5"}]];we(v,Pe({name:"arrow-left"},()=>n,{get iconNode(){return a},children:(r,g)=>{var c=q(),x=F(c);$e(x,t,"default",{}),l(r,c)},$$slots:{default:!0}}))}const je=async()=>({devlogs:await fe.fetch(`*[_type == "devlog"] | order(date desc) {
    "id": _id,
    title,
    date,
    content,
    category,
    tags
  }`)}),st=Object.freeze(Object.defineProperty({__proto__:null,load:je},Symbol.toStringTag,{value:"Module"})),Le="rounded-xl border bg-card text-card-foreground shadow";var Ae=p("<div><!></div>");function Be(v,t){S(t,!0);let n=ee(t,["$$slots","$$events","$$legacy","class","children"]);var a=Ae();X(a,g=>({class:g,...n}),[()=>Y(Le,t.class)]);var r=i(a);Z(r,()=>t.children??G),s(a),l(v,a),k()}const Ie=De("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});var Me=p("<div><!></div>");function Fe(v,t){S(t,!0);let n=O(t,"variant",3,"default"),a=ee(t,["$$slots","$$events","$$legacy","class","variant","children"]);var r=Me();X(r,c=>({class:c,...a}),[()=>Y(Ie({variant:n()}),t.class)]);var g=i(r);Z(g,()=>t.children??G),s(r),l(v,r),k()}var He=p('<span class="text-[10px] text-white/40 bg-white/5 px-2 py-1 rounded"> </span>'),Ne=p('<div class="px-6 pb-6 flex flex-wrap gap-2"></div>'),Oe=p(`<div class="p-6 space-y-4 flex-grow"><div class="flex justify-between items-start"><span class="text-yellow-200/60 text-xs font-mono"> </span> <!></div> <h4 class="text-xl font-bold text-white font-['Playfair_Display']"> </h4> <p class="text-white/60 text-sm leading-relaxed line-clamp-4"> </p></div> <!>`,1),Ve=p('<div class="log-card"><!></div>'),Ee=p('<div class="col-span-full text-center py-12"><p class="text-white/40 italic">Belum ada catatan log saat ini.</p></div>'),Ke=p(`<section id="devlogs" class="bg-black py-24 relative overflow-hidden"><div class="container mx-auto px-4 relative z-10"><div class="max-w-3xl mx-auto text-center mb-16 space-y-4"><div class="text-yellow-200/80 text-sm font-bold tracking-[0.2em] uppercase">Development Activity</div> <h3 class="text-3xl md:text-5xl font-extrabold text-white leading-tight font-['Playfair_Display']">Dev Logs</h3> <p class="text-sm md:text-lg text-white/60 leading-relaxed">Catatan aktivitas pengembangan dan pembaruan sistem secara real-time.</p></div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"><!></div></div></section>`);function Qe(v,t){S(t,!1),I.registerPlugin(Ce.ScrollTrigger);let n=O(t,"devlogs",24,()=>[]),a=H(),r=H();xe(()=>{I.from(e(a).children,{scrollTrigger:{trigger:e(a),start:"top 85%"},y:30,opacity:0,duration:.8,stagger:.2,ease:"power3.out"}),I.from(".log-card",{scrollTrigger:{trigger:e(r),start:"top 80%"},y:50,opacity:0,duration:.8,stagger:.15,ease:"power3.out"})});function g(d){return new Date(d).toLocaleDateString("id-ID",{year:"numeric",month:"long",day:"numeric"})}ue();var c=Ke(),x=i(c),_=i(x);W(_,d=>N(a,d),()=>e(a));var h=u(_,2),y=i(h);{var P=d=>{var $=q(),ae=F($);Q(ae,1,n,R,(re,o)=>{var C=Ve(),se=i(C);Be(se,{class:"bg-white/5 border-white/10 hover:border-yellow-200/30 transition-all duration-300 h-full flex flex-col",children:(oe,qe)=>{var V=Oe(),z=F(V),T=i(z),j=i(T),ie=i(j,!0);s(j);var ne=u(j,2);{var le=f=>{Fe(f,{variant:"outline",class:"border-yellow-200/20 text-yellow-200 text-[10px] uppercase tracking-wider",children:(b,K)=>{U();var D=me();B(()=>w(D,(e(o),m(()=>e(o).category)))),l(b,D)},$$slots:{default:!0}})};M(ne,f=>{e(o),m(()=>e(o).category)&&f(le)})}s(T);var L=u(T,2),de=i(L,!0);s(L);var E=u(L,2),ce=i(E,!0);s(E),s(z);var ve=u(z,2);{var ge=f=>{var b=Ne();Q(b,5,()=>(e(o),m(()=>e(o).tags)),R,(K,D)=>{var A=He(),pe=i(A);s(A),B(()=>w(pe,`#${e(D)??""}`)),l(K,A)}),s(b),l(f,b)};M(ve,f=>{e(o),m(()=>e(o).tags&&e(o).tags.length>0)&&f(ge)})}B(f=>{w(ie,f),w(de,(e(o),m(()=>e(o).title))),w(ce,(e(o),m(()=>e(o).content)))},[()=>(e(o),m(()=>g(e(o).date)))]),l(oe,V)},$$slots:{default:!0}}),s(C),l(re,C)}),l(d,$)},te=d=>{var $=Ee();l(d,$)};M(y,d=>{J(n()),m(()=>n()&&n().length>0)?d(P):d(te,!1)})}s(h),W(h,d=>N(r,d),()=>e(r)),s(x),s(c),l(v,c),k()}var Re=p('<meta name="description" content="Catatan aktivitas pengembangan dan pembaruan sistem secara real-time."/>'),We=p('<main class="bg-black min-h-screen pt-24"><div class="container mx-auto px-4 mb-8"><a href="/" class="inline-flex items-center gap-2 text-white/60 hover:text-yellow-200 transition-colors group"><!> <span>Kembali ke Beranda</span></a></div> <!> <!></main>');function ot(v,t){S(t,!1);const n=H();let a=O(t,"data",8);_e(()=>(e(n),J(a())),()=>{(y=>{N(n,y.devlogs)})(a())}),he();var r=We();Se("tuyez0",y=>{var P=Re();ye(()=>{be.title="Dev Logs - Penak Dev"}),l(y,P)});var g=i(r),c=i(g),x=i(c);Te(x,{size:20,class:"group-hover:-translate-x-1 transition-transform"}),U(2),s(c),s(g);var _=u(g,2);Qe(_,{get devlogs(){return e(n)}});var h=u(_,2);ze(h,{}),s(r),l(v,r),k()}export{ot as component,st as universal};

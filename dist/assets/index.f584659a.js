import{j as h,_ as p,r as l,C as d,R as y,a as b}from"./vendor.7551ddd8.js";const g=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}};g();const r=h.exports.jsx,a=h.exports.jsxs;function v(){let{width:i,height:n}=p();const o=["cousin","mentor","teacher","developer","friend","role model","genius"],[c,e]=l.exports.useState(o[0]),[t,s]=l.exports.useState(0),[u,x]=l.exports.useState([r(d,{confettiSource:{x:0,y:n/3,w:1,h:30},wind:.02,numberOfPieces:100}),r(d,{confettiSource:{x:i,y:n/3,w:1,h:30},wind:-.02,numberOfPieces:100})]);return a("div",{children:[u,a("button",{className:"fixed top-20 left-1/2 -translate-x-1/2 font-bold text-9xl z-30 hover:scale-125 transition-transform focus-visible:outline-none focus:outline-none",onClick:w=>{const f=()=>{const m=Math.floor(Math.random()*o.length);return m===t?f:m};s(f()),e(o[t]),x([...u,r(d,{confettiSource:{x:Math.random()*i,y:Math.random()*n,w:1,h:30},numberOfPieces:20,wind:.02})])},children:["\u{1F389}",r("br",{}),r("div",{className:"text-sm",children:"click"})]}),r("div",{className:"flex h-screen justify-center items-center text-3xl text-center",children:a("div",{children:["Happy birthday to ",r("span",{className:"font-bold text-5xl underline",children:"Patrick"})]})})]})}y.render(r(b.StrictMode,{children:r(v,{})}),document.getElementById("root"));
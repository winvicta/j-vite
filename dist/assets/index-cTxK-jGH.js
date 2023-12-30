(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function i(n){let o=0;const r=s=>{o=s,n.innerHTML=`count is ${o}`};n.addEventListener("click",()=>r(o+1)),r(0)}document.querySelector("#app").innerHTML=`
  <div>
    <h1 class="text-nord0">Hello Vite!</h1>
    <h1 class="text-nord1">Hello Vite!</h1>
    <h1 class="text-nord2">Hello Vite!</h1>
    <h1 class="text-nord3">Hello Vite!</h1>
    <h1 class="text-nord4">Hello Vite!</h1>
    <h1 class="text-nord5">Hello Vite!</h1>
    <h1 class="text-nord6">Hello Vite!</h1>
    <h1 class="text-nord7">Hello Vite!</h1>
    <h1 class="text-nord8">Hello Vite!</h1>
    <h1 class="text-nord9">Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;i(document.querySelector("#counter"));

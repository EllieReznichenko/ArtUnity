import{S as c,N as d,P as u,a as p}from"./assets/vendor-Cd4_IiPO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const f=document.querySelector("[data-header-open]"),m=document.querySelector("[data-menu]"),g=document.querySelector("[data-menu-close]");f.addEventListener("click",l);g.addEventListener("click",l);function l(){m.classList.toggle("is-open")}function h(s){return Math.round(s)}function v(s){return s.map(r=>({...r,roundedRating:h(r.rating)}))}const y=async(s=3)=>{try{const a=(await p.get("https://sound-wave.b.goit.study/api/feedbacks")).data.data,i=[],e=new Set;for(;i.length<s&&e.size<a.length;){const t=Math.floor(Math.random()*a.length);e.has(t)||(e.add(t),i.push(a[t]))}return i}catch(r){return console.error("Не вдалося отримати відгуки:",r),[]}};document.addEventListener("DOMContentLoaded",()=>{new c(".swiper",{direction:"horizontal",loop:!1,modules:[d,u],pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},scrollbar:{el:".swiper-scrollbar"},simulateTouch:!0,grabCursor:!0,keyboard:{enabled:!0,pageUpDown:!0,onlyInViewport:!0},mousewheel:{eventsTarget:".swiper"}})});(async()=>{try{const s=await y(3);console.log("RAW:",s);const r=v(s),a=document.querySelector(".swiper-wrapper");a.innerHTML="",r.forEach(i=>{const{name:e,descr:t,rating:o}=i,n=document.createElement("div");n.className="swiper-slide",n.innerHTML=`
          <div class="feedback-card">
            <div class="rating large star-icon direction-rtl value-${o} half label-hidden">
   <div class="label-value">1.5</div>
    <div class="star-container">
        <div class="star">
            <i class="star-empty"></i>
            <i class="star-half"></i>
            <i class="star-filled"></i>
        </div>
        <div class="star">
            <i class="star-empty"></i>
            <i class="star-half"></i>
            <i class="star-filled"></i>
        </div>
        <div class="star">
            <i class="star-empty"></i>
            <i class="star-half"></i>
            <i class="star-filled"></i>
        </div>
        <div class="star">
            <i class="star-empty"></i>
            <i class="star-half"></i>
            <i class="star-filled"></i>
        </div>
        <div class="star">
            <i class="star-empty"></i>
            <i class="star-half"></i>
            <i class="star-filled"></i>
        </div>
    </div>
</div>
            <p>${t}</p>
            <h3>${e}</h3>
          </div>
        `,a.appendChild(n)})}catch(s){console.error("Помилка під час обробки відгуків:",s)}})();
//# sourceMappingURL=index.js.map

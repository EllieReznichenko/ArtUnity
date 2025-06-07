import{S as d,N as u,P as p,a as f}from"./assets/vendor-Cd4_IiPO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const m=document.querySelector("[data-header-open]"),c=document.querySelector("[data-menu]"),g=document.querySelector("[data-menu-close]");m.addEventListener("click",l);g.addEventListener("click",l);function l(){c.classList.toggle("is-open")}document.addEventListener("keydown",h);function h(s){s.key==="Escape"&&c.classList.contains("is-open")&&c.classList.remove("is-open")}function v(s){return Math.round(s)}function y(s){return s.map(r=>({...r,roundedRating:v(r.rating)}))}const b=async(s=3)=>{try{const a=(await f.get("https://sound-wave.b.goit.study/api/feedbacks")).data.data,i=[],e=new Set;for(;i.length<s&&e.size<a.length;){const t=Math.floor(Math.random()*a.length);e.has(t)||(e.add(t),i.push(a[t]))}return i}catch(r){return console.error("Не вдалося отримати відгуки:",r),[]}};document.addEventListener("DOMContentLoaded",()=>{new d(".swiper",{direction:"horizontal",loop:!1,modules:[u,p],pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},scrollbar:{el:".swiper-scrollbar"},simulateTouch:!0,grabCursor:!0,keyboard:{enabled:!0,pageUpDown:!0,onlyInViewport:!0},mousewheel:{eventsTarget:".swiper"}})});(async()=>{try{const s=await b(3);console.log("RAW:",s);const r=y(s),a=document.querySelector(".swiper-wrapper");a.innerHTML="",r.forEach(i=>{const{name:e,descr:t,rating:n}=i,o=document.createElement("div");o.className="swiper-slide",o.innerHTML=`
          <div class="feedback-card">
            <div class="rating large star-icon direction-rtl value-${n} half label-hidden">
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
        `,a.appendChild(o)})}catch(s){console.error("Помилка під час обробки відгуків:",s)}})();
//# sourceMappingURL=index.js.map

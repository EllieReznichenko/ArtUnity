import{S as c,N as l,P as d,a as u}from"./assets/vendor-Cd4_IiPO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();(()=>{const s=document.querySelector("[data-header-open]"),r=document.querySelector("[data-menu-close]"),i=document.querySelector("[data-menu]"),a=i.querySelectorAll(".mob-nav-link");s.addEventListener("click",()=>{i.classList.add("is-open"),document.body.style.overflow="hidden"}),r.addEventListener("click",()=>{i.classList.remove("is-open"),document.body.style.overflow=""}),a.forEach(e=>{e.addEventListener("click",t=>{t.preventDefault();const o=e.getAttribute("href").substring(1),n=document.getElementById(o);n&&(i.classList.remove("is-open"),document.body.style.overflow="",n.scrollIntoView({behavior:"smooth"}))})})})();document.addEventListener("keydown",p);function p(s){s.key==="Escape"&&mobileMenu.classList.contains("is-open")&&mobileMenu.classList.remove("is-open")}function f(s){return Math.round(s)}function m(s){return s.map(r=>({...r,roundedRating:f(r.rating)}))}const v=async(s=3)=>{try{const i=(await u.get("https://sound-wave.b.goit.study/api/feedbacks")).data.data,a=[],e=new Set;for(;a.length<s&&e.size<i.length;){const t=Math.floor(Math.random()*i.length);e.has(t)||(e.add(t),a.push(i[t]))}return a}catch(r){return console.error("Не вдалося отримати відгуки:",r),[]}};document.addEventListener("DOMContentLoaded",()=>{new c(".swiper",{direction:"horizontal",loop:!1,modules:[l,d],pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},scrollbar:{el:".swiper-scrollbar"},simulateTouch:!0,grabCursor:!0,keyboard:{enabled:!0,pageUpDown:!0,onlyInViewport:!0},mousewheel:{eventsTarget:".swiper"}})});(async()=>{try{const s=await v(3);console.log("RAW:",s);const r=m(s),i=document.querySelector(".swiper-wrapper");i.innerHTML="",r.forEach(a=>{const{name:e,descr:t,rating:o}=a,n=document.createElement("div");n.className="swiper-slide",n.innerHTML=`
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
        `,i.appendChild(n)})}catch(s){console.error("Помилка під час обробки відгуків:",s)}})();
//# sourceMappingURL=index.js.map

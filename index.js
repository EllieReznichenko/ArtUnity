import{S as l,N as c,P as d,a as u}from"./assets/vendor-Cd4_IiPO.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();function p(t){return Math.round(t)}function f(t){return t.map(r=>({...r,roundedRating:p(r.rating)}))}const h=async(t=3)=>{try{const a=(await u.get("https://sound-wave.b.goit.study/api/feedbacks")).data.data,i=[],e=new Set;for(;i.length<t&&e.size<a.length;){const s=Math.floor(Math.random()*a.length);e.has(s)||(e.add(s),i.push(a[s]))}return i}catch(r){return console.error("Не вдалося отримати відгуки:",r),[]}};document.addEventListener("DOMContentLoaded",()=>{new l(".swiper",{direction:"horizontal",loop:!1,modules:[c,d],pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},scrollbar:{el:".swiper-scrollbar"},simulateTouch:!0,grabCursor:!0,keyboard:{enabled:!0,pageUpDown:!0,onlyInViewport:!0},mousewheel:{eventsTarget:".swiper"}})});(async()=>{try{const t=await h(3);console.log("RAW:",t);const r=f(t),a=document.querySelector(".swiper-wrapper");a.innerHTML="",r.forEach(i=>{const{name:e,descr:s,rating:o}=i,n=document.createElement("div");n.className="swiper-slide",n.innerHTML=`
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
            <p>${s}</p>
            <h3>${e}</h3>
          </div>
        `,a.appendChild(n)})}catch(t){console.error("Помилка під час обробки відгуків:",t)}})();
//# sourceMappingURL=index.js.map

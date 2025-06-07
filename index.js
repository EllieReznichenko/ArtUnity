import{a as m,S as M,N as k,P as S}from"./assets/vendor-Cd4_IiPO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function o(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(s){if(s.ep)return;s.ep=!0;const n=o(s);fetch(s.href,n)}})();const q=document.querySelector("[data-header-open]"),u=document.querySelector("[data-menu]"),A=document.querySelector("[data-menu-close]");q.addEventListener("click",v);A.addEventListener("click",v);function v(){u.classList.toggle("is-open")}document.addEventListener("keydown",H);function H(e){e.key==="Escape"&&u.classList.contains("is-open")&&u.classList.remove("is-open")}menuLinks.forEach(e=>{e.addEventListener("click",t=>{t.preventDefault();const o=e.getAttribute("href").substring(1),r=document.getElementById(o);r&&(u.classList.remove("is-open"),document.body.style.overflow="",r.scrollIntoView({behavior:"smooth"}))})});const l=document.querySelector(".modal"),c=l.querySelector(".modal-content"),h=document.querySelector(".loader");let p=[];function I(){l.classList.add("is-open"),document.body.style.overflow="hidden"}function f(){l.classList.remove("is-open"),document.body.style.overflow="",c.innerHTML="",O()}function O(){p.forEach(({element:e,handler:t})=>{e.removeEventListener("click",t)}),p=[]}function T(){c.querySelectorAll(".youtube-btn").forEach(t=>{const o=()=>{const r=t.dataset.youtube;r&&window.open(r,"_blank")};t.addEventListener("click",o),p.push({element:t,handler:o})})}function C(e){var g,y;const t=e.yearFormed?e.yearDisbanded?`${e.yearFormed} - ${e.yearDisbanded}`:`${e.yearFormed} - present`:"information missing",o=e.gender||"information missing",r=e.membersCount||"information missing",s=e.country||"information missing",n=e.biography||"information missing",i=(g=e.genres)!=null&&g.length?e.genres.join(", "):"information missing",a=e.imageUrl||"",w=(y=e.albums)!=null&&y.length?e.albums.map(b=>{const L=`
            <tr>
              <th>Назва композиції</th>
              <th>Тривалість</th>
              <th>Посилання</th>
            </tr>`,$=b.tracks.map(d=>{const E=d.youtubeUrl?`<button class="youtube-btn" data-youtube="${d.youtubeUrl}">▶️</button>`:"";return`
                <tr>
                  <td>${d.title}</td>
                  <td>${d.duration}</td>
                  <td>${E}</td>
                </tr>`}).join("");return`
            <div class="album">
              <h3>${b.title}</h3>
              <table>
                <thead>${L}</thead>
                <tbody>${$}</tbody>
              </table>
            </div>`}).join(""):"<p>Albums information missing</p>";c.innerHTML=`
    <button class="button-close">Закрити</button>
    <h2>${e.name}</h2>
    ${a?`<img src="${a}" alt="${e.name}" style="width: 576px; height: 354px;">`:""}
    <p><strong>Роки існування:</strong> ${t}</p>
    <p><strong>Стать:</strong> ${o}</p>
    <p><strong>Кількість учасників:</strong> ${r}</p>
    <p><strong>Країна походження:</strong> ${s}</p>
    <p><strong>Біографія:</strong> ${n}</p>
    <p><strong>Жанри:</strong> ${i}</p>
    <div class="albums">
      <h3>Альбоми</h3>
      ${w}
    </div>`,c.querySelector(".button-close").addEventListener("click",f),T()}async function F(e){try{h.style.display="block",c.innerHTML="",I();const o=(await m.get(`https://sound-wave.b.goit.study/api/artists/${e}`)).data,s=(await m.get("https://sound-wave.b.goit.study/api/albums")).data;o.albums=s.filter(n=>n.artistId===e),C(o)}catch(t){c.innerHTML="<p>Помилка завантаження даних</p>",console.error(t)}finally{h.style.display="none"}}document.querySelector(".artist-list").addEventListener("click",e=>{const t=e.target.closest(".artist-card");if(!t)return;const o=t.dataset.id;F(o)});l.addEventListener("click",e=>{e.target===l&&f()});window.addEventListener("keydown",e=>{e.key==="Escape"&&f()});function R(e){return Math.round(e)}function N(e){return e.map(t=>({...t,roundedRating:R(t.rating)}))}const P=async(e=3)=>{try{const o=(await m.get("https://sound-wave.b.goit.study/api/feedbacks")).data.data,r=[],s=new Set;for(;r.length<e&&s.size<o.length;){const n=Math.floor(Math.random()*o.length);s.has(n)||(s.add(n),r.push(o[n]))}return r}catch(t){return console.error("Не вдалося отримати відгуки:",t),[]}};document.addEventListener("DOMContentLoaded",()=>{new M(".swiper",{direction:"horizontal",loop:!1,modules:[k,S],pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},scrollbar:{el:".swiper-scrollbar"},simulateTouch:!0,grabCursor:!0,keyboard:{enabled:!0,pageUpDown:!0,onlyInViewport:!0},mousewheel:{eventsTarget:".swiper"}})});(async()=>{try{const e=await P(3);console.log("RAW:",e);const t=N(e),o=document.querySelector(".swiper-wrapper");o.innerHTML="",t.forEach(r=>{const{name:s,descr:n,rating:i}=r,a=document.createElement("div");a.className="swiper-slide",a.innerHTML=`
          <div class="feedback-card">
            <div class="rating large star-icon direction-rtl value-${i} half label-hidden">
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
            <p>${n}</p>
            <h3>${s}</h3>
          </div>
        `,o.appendChild(a)})}catch(e){console.error("Помилка під час обробки відгуків:",e)}})();
//# sourceMappingURL=index.js.map

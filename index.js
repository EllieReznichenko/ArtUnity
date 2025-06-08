import{a as p,S as A,N as q,P as T}from"./assets/vendor-Cd4_IiPO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();const H=document.querySelector("[data-header-open]"),u=document.querySelector("[data-menu]"),I=document.querySelector("[data-menu-close]");H.addEventListener("click",L);I.addEventListener("click",L);function L(){u.classList.toggle("is-open")}document.addEventListener("keydown",C);function C(e){e.key==="Escape"&&u.classList.contains("is-open")&&u.classList.remove("is-open")}menuLinks.forEach(e=>{e.addEventListener("click",t=>{t.preventDefault();const n=e.getAttribute("href").substring(1),r=document.getElementById(n);r&&(u.classList.remove("is-open"),document.body.style.overflow="",r.scrollIntoView({behavior:"smooth"}))})});const l=document.querySelector(".modal"),c=l.querySelector(".modal-content"),v=document.querySelector(".loader");let m=[];function O(){l.classList.add("is-open"),document.body.style.overflow="hidden"}function g(){l.classList.remove("is-open"),document.body.style.overflow="",c.innerHTML="",P()}function P(){m.forEach(({element:e,handler:t})=>{e.removeEventListener("click",t)}),m=[]}function B(){c.querySelectorAll(".youtube-btn").forEach(t=>{const n=()=>{const r=t.dataset.youtube;r&&window.open(r,"_blank")};t.addEventListener("click",n),m.push({element:t,handler:n})})}function F(e){var y,h;const t=e.yearFormed?e.yearDisbanded?`${e.yearFormed} - ${e.yearDisbanded}`:`${e.yearFormed} - present`:"information missing",n=e.gender||"information missing",r=e.membersCount||"information missing",s=e.country||"information missing",o=e.biography||"information missing",a=(y=e.genres)!=null&&y.length?e.genres.join(", "):"information missing",i=e.imageUrl||"",E=(h=e.albums)!=null&&h.length?e.albums.map(b=>{const M=`
            <tr>
              <th>Назва композиції</th>
              <th>Тривалість</th>
              <th>Посилання</th>
            </tr>`,k=b.tracks.map(d=>{const S=d.youtubeUrl?`<button class="youtube-btn" data-youtube="${d.youtubeUrl}">▶️</button>`:"";return`
                <tr>
                  <td>${d.title}</td>
                  <td>${d.duration}</td>
                  <td>${S}</td>
                </tr>`}).join("");return`
            <div class="album">
              <h3>${b.title}</h3>
              <table>
                <thead>${M}</thead>
                <tbody>${k}</tbody>
              </table>
            </div>`}).join(""):"<p>Albums information missing</p>";c.innerHTML=`
    <button class="button-close">Закрити</button>
    <h2>${e.name}</h2>
    ${i?`<img src="${i}" alt="${e.name}" style="width: 576px; height: 354px;">`:""}
    <p><strong>Роки існування:</strong> ${t}</p>
    <p><strong>Стать:</strong> ${n}</p>
    <p><strong>Кількість учасників:</strong> ${r}</p>
    <p><strong>Країна походження:</strong> ${s}</p>
    <p><strong>Біографія:</strong> ${o}</p>
    <p><strong>Жанри:</strong> ${a}</p>
    <div class="albums">
      <h3>Альбоми</h3>
      ${E}
    </div>`,c.querySelector(".button-close").addEventListener("click",g),B()}async function R(e){try{v.style.display="block",c.innerHTML="",O();const n=(await p.get(`https://sound-wave.b.goit.study/api/artists/${e}`)).data,s=(await p.get("https://sound-wave.b.goit.study/api/albums")).data;n.albums=s.filter(o=>o.artistId===e),F(n)}catch(t){c.innerHTML="<p>Помилка завантаження даних</p>",console.error(t)}finally{v.style.display="none"}}document.querySelector(".artist-list").addEventListener("click",e=>{const t=e.target.closest(".artist-card");if(!t)return;const n=t.dataset.id;R(n)});l.addEventListener("click",e=>{e.target===l&&g()});window.addEventListener("keydown",e=>{e.key==="Escape"&&g()});function j(e){return Math.round(e)}function N(e){return e.map(t=>({...t,roundedRating:j(t.rating)}))}const x=async(e=3)=>{try{const n=(await p.get("https://sound-wave.b.goit.study/api/feedbacks")).data.data,r=[],s=new Set;for(;r.length<e&&s.size<n.length;){const o=Math.floor(Math.random()*n.length);s.has(o)||(s.add(o),r.push(n[o]))}return r}catch(t){return console.error("Не вдалося отримати відгуки:",t),[]}};document.addEventListener("DOMContentLoaded",()=>{new A(".swiper",{direction:"horizontal",loop:!1,modules:[q,T],pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},scrollbar:{el:".swiper-scrollbar"},simulateTouch:!0,grabCursor:!0,keyboard:{enabled:!0,pageUpDown:!0,onlyInViewport:!0},mousewheel:{eventsTarget:".swiper"}})});(async()=>{try{const e=await x(3);console.log("RAW:",e);const t=N(e),n=document.querySelector(".swiper-wrapper");n.innerHTML="",t.forEach(r=>{const{name:s,descr:o,rating:a}=r,i=document.createElement("div");i.className="swiper-slide",i.innerHTML=`
          <div class="feedback-card">
            <div class="rating large star-icon direction-rtl value-${a} half label-hidden">
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
            <p>${o}</p>
            <h3>${s}</h3>
          </div>
        `,n.appendChild(i)})}catch(e){console.error("Помилка під час обробки відгуків:",e)}})();const D="https://sound-wave.b.goit.study/api";let f=1;const w=8;function U(e){alert(e)}async function z(e=1,t=8){const n=await fetch(`${D}/artists?page=${e}&limit=${t}`);if(!n.ok)throw new Error("Не вдалося завантажити артистів");return await n.json()}async function $(){showLoader();try{const e=await z(f,w),t=e.artists.map(createCard).join("");container.insertAdjacentHTML("beforeend",t),f*w>=e.total&&(loadMoreBtn.style.display="none")}catch(e){console.error(e),U("⚠️ Помилка завантаження артистів. Спробуйте пізніше.")}finally{hideLoader()}}loadMoreBtn.addEventListener("click",()=>{f++,$()});$();
//# sourceMappingURL=index.js.map

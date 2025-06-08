import{a as g,S as q,N as O,P as I,R as T}from"./assets/vendor-BuJqGh_H.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(n){if(n.ep)return;n.ep=!0;const r=o(n);fetch(n.href,r)}})();const H=document.querySelector("[data-header-open]"),p=document.querySelector("[data-menu]"),R=document.querySelector("[data-menu-close]");H.addEventListener("click",E);R.addEventListener("click",E);function E(){p.classList.toggle("is-open")}document.addEventListener("keydown",C);function C(e){e.key==="Escape"&&p.classList.contains("is-open")&&p.classList.remove("is-open")}menuLinks.forEach(e=>{e.addEventListener("click",t=>{t.preventDefault();const o=e.getAttribute("href").substring(1),s=document.getElementById(o);s&&(p.classList.remove("is-open"),document.body.style.overflow="",s.scrollIntoView({behavior:"smooth"}))})});const d=document.querySelector(".modal"),c=d.querySelector(".modal-content"),v=document.querySelector(".loader");let f=[];function P(){d.classList.add("is-open"),document.body.style.overflow="hidden"}function b(){d.classList.remove("is-open"),document.body.style.overflow="",c.innerHTML="",B()}function B(){f.forEach(({element:e,handler:t})=>{e.removeEventListener("click",t)}),f=[]}function F(){c.querySelectorAll(".youtube-btn").forEach(t=>{const o=()=>{const s=t.dataset.youtube;s&&window.open(s,"_blank")};t.addEventListener("click",o),f.push({element:t,handler:o})})}function j(e){var i,h;const t=e.yearFormed?e.yearDisbanded?`${e.yearFormed} - ${e.yearDisbanded}`:`${e.yearFormed} - present`:"information missing",o=e.gender||"information missing",s=e.membersCount||"information missing",n=e.country||"information missing",r=e.biography||"information missing",a=(i=e.genres)!=null&&i.length?e.genres.join(", "):"information missing",l=e.imageUrl||"",m=(h=e.albums)!=null&&h.length?e.albums.map(w=>{const M=`
            <tr>
              <th>Назва композиції</th>
              <th>Тривалість</th>
              <th>Посилання</th>
            </tr>`,S=w.tracks.map(u=>{const A=u.youtubeUrl?`<button class="youtube-btn" data-youtube="${u.youtubeUrl}">▶️</button>`:"";return`
                <tr>
                  <td>${u.title}</td>
                  <td>${u.duration}</td>
                  <td>${A}</td>
                </tr>`}).join("");return`
            <div class="album">
              <h3>${w.title}</h3>
              <table>
                <thead>${M}</thead>
                <tbody>${S}</tbody>
              </table>
            </div>`}).join(""):"<p>Albums information missing</p>";c.innerHTML=`
    <button class="button-close">Закрити</button>
    <h2>${e.name}</h2>
    ${l?`<img src="${l}" alt="${e.name}" style="width: 576px; height: 354px;">`:""}
    <p><strong>Роки існування:</strong> ${t}</p>
    <p><strong>Стать:</strong> ${o}</p>
    <p><strong>Кількість учасників:</strong> ${s}</p>
    <p><strong>Країна походження:</strong> ${n}</p>
    <p><strong>Біографія:</strong> ${r}</p>
    <p><strong>Жанри:</strong> ${a}</p>
    <div class="albums">
      <h3>Альбоми</h3>
      ${m}
    </div>`,c.querySelector(".button-close").addEventListener("click",b),F()}async function x(e){try{v.style.display="block",c.innerHTML="",P();const o=(await g.get(`https://sound-wave.b.goit.study/api/artists/${e}`)).data,n=(await g.get("https://sound-wave.b.goit.study/api/albums")).data;o.albums=n.filter(r=>r.artistId===e),j(o)}catch(t){c.innerHTML="<p>Помилка завантаження даних</p>",console.error(t)}finally{v.style.display="none"}}document.querySelector(".artist-list").addEventListener("click",e=>{const t=e.target.closest(".artist-card");if(!t)return;const o=t.dataset.id;x(o)});d.addEventListener("click",e=>{e.target===d&&b()});window.addEventListener("keydown",e=>{e.key==="Escape"&&b()});function $(e){return Math.round(e)}function N(e){return e.map(t=>({...t,roundedRating:$(t.rating)}))}console.log($);const D=async(e=3)=>{try{const o=(await g.get("https://sound-wave.b.goit.study/api/feedbacks")).data.data,s=[],n=new Set;for(;s.length<e&&n.size<o.length;){const r=Math.floor(Math.random()*o.length);n.has(r)||(n.add(r),s.push(o[r]))}return s}catch(t){return console.error("Не вдалося отримати відгуки:",t),[]}};document.addEventListener("DOMContentLoaded",()=>{(async()=>{try{const e=await D(3),t=N(e),o=document.querySelector(".swiper-wrapper");o.innerHTML="",t.forEach((n,r)=>{const{name:a,descr:l,roundedRating:m}=n,i=document.createElement("div");i.className="swiper-slide",i.innerHTML=`
          <div class="feedback-card">
            <div class="rating" data-score="${m}"></div>
            <p class="feedback_description">${l}</p>
            <h3 class="feedback_name">${a}</h3>
          </div>
        `,o.appendChild(i)}),new q(".swiper",{direction:"horizontal",loop:!1,modules:[O,I],pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},simulateTouch:!0,grabCursor:!0,keyboard:{enabled:!0,pageUpDown:!0,onlyInViewport:!0},mousewheel:{eventsTarget:".swiper"}}),document.querySelectorAll(".rating").forEach(n=>{const r=parseInt(n.dataset.score,10);new T(n,{starOn:"/img/feedback/star-filled.png",starOff:"/img/feedback/star-empty.png",score:r,readOnly:!0}).init()})}catch(e){console.error("Помилка під час обробки відгуків:",e)}})()});const U="https://sound-wave.b.goit.study/api";let y=1;const L=8;function _(e){alert(e)}async function z(e=1,t=8){const o=await fetch(`${U}/artists?page=${e}&limit=${t}`);if(!o.ok)throw new Error("Не вдалося завантажити артистів");return await o.json()}async function k(){showLoader();try{const e=await z(y,L),t=e.artists.map(createCard).join("");container.insertAdjacentHTML("beforeend",t),y*L>=e.total&&(loadMoreBtn.style.display="none")}catch(e){console.error(e),_("⚠️ Помилка завантаження артистів. Спробуйте пізніше.")}finally{hideLoader()}}loadMoreBtn.addEventListener("click",()=>{y++,k()});k();
//# sourceMappingURL=index.js.map

import{a as A,S as O,N,P as j,R as H}from"./assets/vendor-BuJqGh_H.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function r(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(n){if(n.ep)return;n.ep=!0;const o=r(n);fetch(n.href,o)}})();const F="https://sound-wave.b.goit.study/api",I=8;function V(e){alert(e)}async function R(){const e=await fetch(`${F}/artists`);if(!e.ok)throw new Error("Не вдалося завантажити артистів для hero");return await e.json()}async function P(e=1,t=8){const r=await fetch(`${F}/artists?page=${e}&limit=${t}`);if(!r.ok)throw new Error("Не вдалося завантажити артистів");return await r.json()}const U="https://sound-wave.b.goit.study/api/feedbacks";async function Q(){try{const e=await fetch(U);if(!e.ok)throw new Error("Failed to load feedbacks");return(await e.json()).data}catch(e){return console.error(e),[]}}async function G(e){try{return(await A.post(U,e)).data}catch(t){throw console.error("Помилка при відправці фідбеку:",t),t}}const B=document.querySelector(".column-left"),$=document.querySelector(".column-right");async function K(){try{const t=(await R()).artists,r=10;for(let s=0;s<r;s++)t.forEach((n,o)=>{var d,m,u;const c=((d=n.strArtistThumb)==null?void 0:d.trim())||((m=n.image)==null?void 0:m.trim())||((u=n.photoUrl)==null?void 0:u.trim())||null;if(!c)return;const a=n.strArtist||n.name||"Unknown Artist";if(!c)return;const i=document.createElement("img");i.src=c,i.alt=a,i.classList.add("hero-img"),o%2===0?B.appendChild(i.cloneNode(!0)):$.appendChild(i.cloneNode(!0))});B.classList.add("animate-up"),$.classList.add("animate-down")}catch(e){console.error("Error loading hero artists:",e)}}K();const X="/ArtUnity/assets/sprite-ItzP6nrU.svg",f={artistCardsContainer:document.querySelector("#artists-grid"),loadMoreBtn:document.getElementById("load-more-btn")};function W({_id:e,strArtist:t,genres:r,strArtistThumb:s,strBiographyEN:n}){const o=(r||[]).map(i=>`<span class="genre">${i}</span>`).join(""),c=(n==null?void 0:n.length)>100?n.slice(0,100)+"...":n||"",a=s&&typeof s=="string"&&s.trim()!==""?s:"/img/artists/Placeholder_Image.jpg";return`
    <li class="artist-cards" data-id="${e}">
      <img class="img" src="${a}" alt="${t}" />
      <div class="genres">${o}</div>
      <h3 class="artist-name">${t}</h3>
      <p class="description">${c}</p>
      <button class="learn-more" data-id="${e}">
        Learn More
        <svg class="icon" width="24" height="24">
          <use href="${X}#icon-caret-right-learn-more"></use>
        </svg>
      </button>
    </li>
  `}let w=1;async function q(){try{const e=await P(w,I);if(!e.artists||!Array.isArray(e.artists))throw new Error("Немає артистів у відповіді");const t=e.artists.map(W).join("");f.artistCardsContainer.insertAdjacentHTML("beforeend",t),w*I>=e.total?f.loadMoreBtn.style.display="none":f.loadMoreBtn.style.display="block",w++}catch(e){console.error(e),V("Помилка завантаження артистів"),f.loadMoreBtn.style.display="none"}}f.loadMoreBtn.addEventListener("click",q);document.addEventListener("DOMContentLoaded",()=>{q()});const g=document.querySelector(".modal"),p=g.querySelector(".modal-content"),x=document.querySelector(".loader");let L=[];function z(){g.classList.add("is-open"),document.body.style.overflow="hidden"}function E(){g.classList.remove("is-open"),document.body.style.overflow="",p.innerHTML="",Z()}function Z(){L.forEach(({element:e,handler:t})=>{e.removeEventListener("click",t)}),L=[]}function J(){p.querySelectorAll(".youtube-link").forEach(e=>{const t=r=>{r.preventDefault(),window.open(e.href,"_blank")};e.addEventListener("click",t),L.push({element:e,handler:t})})}function _(e){let t=e.genres??e.genre??e.tags;return t?Array.from(new Set((Array.isArray(t)?t:[t]).flatMap(r=>r.split(",")).map(r=>r.trim()).filter(Boolean))):["information missing"]}function ee(e){return e[0]==="information missing"?'<span class="genre">information missing</span>':e.map(t=>`<span class="genre">${t}</span>`).join(" ")}function te(e){return e.map(t=>`
      <tr>
        <td>${t.title}</td>
        <td>${t.duration}</td>
        <td>${t.youtubeUrl?`<a href="${t.youtubeUrl}" class="youtube-link" target="_blank" rel="noopener noreferrer" title="Open on YouTube">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" style="vertical-align:middle;"><path d="M23.498 6.186a2.994 2.994 0 0 0-2.112-2.12C19.228 3.5 12 3.5 12 3.5s-7.228 0-9.386.566A2.994 2.994 0 0 0 .502 6.186C0 8.344 0 12 0 12s0 3.656.502 5.814a2.994 2.994 0 0 0 2.112 2.12C4.772 20.5 12 20.5 12 20.5s7.228 0 9.386-.566a2.994 2.994 0 0 0 2.112-2.12C24 15.656 24 12 24 12s0-3.656-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>`:""}</td>
      </tr>`).join("")}function re(e){return e!=null&&e.length?`<div class="albums-grid">${e.map(t=>`
      <div class="album">
        <h3>${t.title}</h3>
        <table>
          <thead>
            <tr>
              <th>Track</th>
              <th>Time</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            ${te(t.tracks)}
          </tbody>
        </table>
      </div>`).join("")}</div>`:"<p>Albums information missing</p>"}function ne(e){const t=e.yearFormed?e.yearDisbanded?`${e.yearFormed} - ${e.yearDisbanded}`:`${e.yearFormed} - present`:"information missing",r=_(e),s=ee(r),n=e.imageUrl||"",o=re(e.albums);p.innerHTML=`
    <div class="modal-header">
      <h2 class="artist-mod-title">${e.name}</h2>
      <button class="button-close" aria-label="Close">
        <svg class="artist-modal-close-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          <path d="M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </button>
    </div>
    <div class="artist-main-info">
      <img class="artist-image" src="${n}" alt="${e.name}">
      <div class="artist-info">
        <div class="artist-info-grid2">
          <div class="info-col">
            <div class="info-block"><span class="info-label">Years active</span><span class="info-value">${t}</span></div>
            <div class="info-block"><span class="info-label">Members</span><span class="info-value">${e.membersCount||"information missing"}</span></div>
          </div>
          <div class="info-col">
            <div class="info-block"><span class="info-label">Sex</span><span class="info-value">${e.gender||"information missing"}</span></div>
            <div class="info-block"><span class="info-label">Country</span><span class="info-value">${e.country||"information missing"}</span></div>
          </div>
        </div>
        <strong>Biography</strong>
        <p class="biography">
  ${e.biography||"information missing"}
</p>
        <div class="genres genres-artist"><strong>Genres</strong> ${s}</div>
      </div>
    </div>
    <div class="albums">
      <h3 class="title_album">Albums</h3>
      ${o}
    </div>`,p.querySelector(".button-close").addEventListener("click",E),J()}async function se(e){var t;try{x.style.display="flex",p.innerHTML="",z();const{data:r}=await A.get(`https://sound-wave.b.goit.study/api/artists/${e}`);let{data:s}=await A.get("https://sound-wave.b.goit.study/api/artists"),n=((t=s.artists.find(a=>a._id===e))==null?void 0:t.genres)||r.genres||[],o=[];if(Array.isArray(r.albumsList))o=r.albumsList;else{const{data:a}=await A.get(`https://sound-wave.b.goit.study/api/artists/${e}/albums`);o=Array.isArray(a)?a:Array.isArray(a.albums)?a.albums:Array.isArray(a.albumsList)?a.albumsList:Array.isArray(a.results)?a.results:[]}const c={name:r.strArtist||r.name||"No name",imageUrl:r.strArtistThumb||r.image||"",yearFormed:r.intFormedYear||r.yearFormed||"",yearDisbanded:r.intDiedYear&&r.intDiedYear!=="null"?r.intDiedYear:"",gender:r.strGender||r.gender||"",membersCount:r.intMembers||r.membersCount||"",country:r.strCountry||r.country||"",biography:r.strBiographyEN||r.bio||"",genres:n,genre:r.genre,tags:r.tags,albums:o.map(a=>({title:a.strAlbum||a.title||"No title",tracks:Array.isArray(a.tracks)?a.tracks.map(i=>({title:i.strTrack||i.title||"No title",duration:i.intDuration?Math.floor(i.intDuration/6e4)+":"+String(Math.floor(i.intDuration%6e4/1e3)).padStart(2,"0"):"",youtubeUrl:i.movie&&i.movie!=="null"?i.movie:""})):[]}))};ne(c)}catch(r){p.innerHTML="<p>Помилка завантаження даних</p>",console.error(r)}finally{x.style.display="none"}}const D=document.querySelector("#artists-grid");D&&D.addEventListener("click",e=>{const t=e.target.closest(".learn-more");if(!t)return;const r=t.closest(".artist-cards");if(!r)return;const s=r.dataset.id;se(s)});g.addEventListener("click",e=>{e.target===g&&E()});window.addEventListener("keydown",e=>{e.key==="Escape"&&E()});const T="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGPSURBVHgBrVQ7UsMwEN1dh9D6Bjg3CDVFBA1tOAHDCYiHCdAldExgxgkcgHAEOmjAFS2+AeYGrjNEYpU4HmPFtvi8GY+l1dvV7tNKABboi9vjs72bwIaLdYSeCLwm0rseSyV3r0M/rOIT1GCTnEG2O0G3jo+22aVIZkq2xqGfwG8y3AAQBZPbJOhV+VQGRKSBYVR0WOnDZblNzkTx7vqjxd/ZYjE8BCVK/CKlMEKYf0iWgXVL2Df+5K/BGr0xwdNirgTlQFCDNqJq6wIp8wHgxBJSSj7AfwHlxHmNnx53vH1kwQT8BSgvRs/+MGubExF0HaQ7HrrwMyRcpX8V+tNF3PzKOfedRHrhoWcXC2IOdsDBopXhW9tchn48593AFsvMorzJ6EO0z07D4BoBiZwOWALNm7TmpqjSZjapSJ3KgHxruFmNU471s8XiH+lxYc3tL30yNAoTkZsmLPpkBjDOvS7TUxEMIXfH07LXnzKl2SlQISm5PQr9YfGp0jZea/Fm90sulD5lkJbtgSXWcb8AOwmLEyrUuDIAAAAASUVORK5CYII=",Y="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADuSURBVHgBrZOBEYIwDEVTJsAJ7AhsYN2AEXAC2UA28NzAFZzAFdwAnEA2qImEEwJXwpV397lS0t9QPgAKvPdn1BW2AI2s/+OW6hNY5jIY5xCD6I74oFKI6NCJezIrIaLD2k+pQ2sMv4Lj3XvtURamHfa8WG9Uy2pIhne0sA0tneEDtuP2u2KXlY+nGlnjRM6xWAutKWb79V3u6hVmVJsFD4E71TL5c+aCbUGP1RgeQI+TE0ZO0CFDF24NrTFmN5xIhFk2Y9agjqgTj4ekwY+CD0sRB8pnKmpkZsuQYV/8pAgF6ihed64tIETISFP7BVsQmECc0IB0AAAAAElFTkSuQmCC";function oe(e){return Math.round(e)}function ae(e){return e.map(t=>({...t,roundedRating:oe(t.rating)}))}const ie=async()=>{try{const e=await Q();if(e.length===0)return[];const t=e[0],r=e[e.length-1];let s=null;if(e.length>2){let o;do o=Math.floor(Math.random()*e.length);while(o===0||o===e.length-1);s=e[o]}const n=[t];return s&&n.push(s),e.length>1&&n.push(r),n}catch(e){return console.error("Не вдалося отримати відгуки:",e),[]}};document.addEventListener("DOMContentLoaded",()=>{(async()=>{try{const e=await ie(1),t=ae(e),r=document.querySelector(".swiper-wrapper");r.innerHTML="",t.forEach((n,o)=>{const{name:c,descr:a,roundedRating:i}=n,d=document.createElement("div");d.className="swiper-slide",d.innerHTML=`
          <div class="feedback-card">
            <div class="rating" data-score="${i}"></div>
            <p class="feedback_description">${a}</p>
            <h3 class="feedback_name">${c}</h3>
          </div>
        `,r.appendChild(d)}),new O(".swiper",{direction:"horizontal",loop:!1,modules:[N,j],pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},simulateTouch:!0,grabCursor:!0,keyboard:{enabled:!0,pageUpDown:!0,onlyInViewport:!0},mousewheel:{eventsTarget:".swiper"}}),document.querySelectorAll(".rating").forEach(n=>{const o=parseInt(n.dataset.score,10);new H(n,{starOn:T,starOff:Y,score:o,readOnly:!0}).init()})}catch(e){console.error("Помилка під час обробки відгуків:",e)}})()});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector("[data-feedback-modal]"),t=document.querySelector("[data-feedback-modal-open]"),r=document.querySelector("[data-feedback-modal-close]"),s=document.getElementById("feedback-star-rating"),n=e.querySelector(".feedback-modal-form");function o(){document.body.classList.add("body-lock")}function c(){document.body.classList.remove("body-lock")}t==null||t.addEventListener("click",()=>{e.classList.remove("is-hidden"),o()}),r==null||r.addEventListener("click",()=>{e.classList.add("is-hidden"),c()}),e==null||e.addEventListener("click",d=>{d.target===e&&(e.classList.add("is-hidden"),c())}),document.addEventListener("keydown",d=>{d.key==="Escape"&&!e.classList.contains("is-hidden")&&(e.classList.add("is-hidden"),c())});let a=0;function i(d){s.innerHTML="";for(let m=1;m<=5;m++){const u=document.createElement("img");u.src=m<=d?T:Y,u.alt=`Star ${m}`,u.dataset.value=m,u.style.cursor="pointer",u.addEventListener("click",()=>{a=m,i(a)}),s.appendChild(u)}}i(0),n.setAttribute("novalidate",!0),n.addEventListener("submit",async d=>{d.preventDefault(),n.querySelectorAll("input, textarea").forEach(l=>{l.classList.remove("input-error");const M=l.parentElement.querySelector(".error-text");M&&M.remove()});let u=!1;const y=n.querySelector("#user-name"),h=y.value.trim();if(h.length<2||h.length>16){y.classList.add("input-error");const l=document.createElement("div");l.classList.add("error-text"),l.textContent="Please enter a valid name (2-16 characters)",y.parentElement.appendChild(l),u=!0}const v=n.querySelector("#user-message"),b=v.value.trim();if(b.length<10||b.length>512){v.classList.add("input-error");const l=document.createElement("div");l.classList.add("error-text"),l.textContent="Please enter a message (10-512 characters)",v.parentElement.appendChild(l),u=!0}const S=s.querySelector(".error-text");if(S&&S.remove(),a===0){s.classList.add("input-error");const l=document.createElement("div");l.classList.add("error-text"),l.textContent="Please choose a rating",s.appendChild(l),u=!0}else s.classList.remove("input-error");if(!u)try{await G({name:h,rating:a,descr:b}),e.classList.add("is-hidden"),c(),n.reset(),a=0,i(a)}catch(l){alert("Помилка при відправці фідбеку. Спробуйте пізніше."),console.error(l)}})});const ce=document.querySelector("[data-header-open]"),k=document.querySelector("[data-menu]"),le=document.querySelector("[data-menu-close]"),de=document.querySelectorAll(".mob-nav-link");function ue(){k.classList.add("is-open"),document.body.classList.add("no-scroll"),document.addEventListener("keydown",C)}function C(e){e.type==="keydown"&&e.key!=="Escape"||(k.classList.remove("is-open"),document.body.classList.remove("no-scroll"),document.removeEventListener("keydown",C))}ce.addEventListener("click",ue);le.addEventListener("click",C);de.forEach(e=>{e.addEventListener("click",t=>{t.preventDefault();const r=e.getAttribute("href").substring(1),s=document.getElementById(r);s&&(k.classList.remove("is-open"),document.body.style.overflow="",s.scrollIntoView({behavior:"smooth"}))})});
//# sourceMappingURL=index.js.map

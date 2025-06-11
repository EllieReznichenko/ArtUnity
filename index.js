import{a as A,S as N,N as O,P as j,R as H}from"./assets/vendor-BuJqGh_H.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function r(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(n){if(n.ep)return;n.ep=!0;const a=r(n);fetch(n.href,a)}})();const x="https://sound-wave.b.goit.study/api",M=8;function V(e){alert(e)}async function R(){const e=await fetch(`${x}/artists`);if(!e.ok)throw new Error("Не вдалося завантажити артистів для hero");return await e.json()}async function P(e=1,t=8){const r=await fetch(`${x}/artists?page=${e}&limit=${t}`);if(!r.ok)throw new Error("Не вдалося завантажити артистів");return await r.json()}const F="https://sound-wave.b.goit.study/api/feedbacks";async function Q(){try{const e=await fetch(F);if(!e.ok)throw new Error("Failed to load feedbacks");return(await e.json()).data}catch(e){return console.error(e),[]}}async function G(e){try{return(await A.post(F,e)).data}catch(t){throw console.error("Помилка при відправці фідбеку:",t),t}}const B=document.querySelector(".column-left"),I=document.querySelector(".column-right");async function K(){try{const t=(await R()).artists,r=10;for(let s=0;s<r;s++)t.forEach((n,a)=>{var d,m,u;const c=((d=n.strArtistThumb)==null?void 0:d.trim())||((m=n.image)==null?void 0:m.trim())||((u=n.photoUrl)==null?void 0:u.trim())||null;if(!c)return;const o=n.strArtist||n.name||"Unknown Artist";if(!c)return;const i=document.createElement("img");i.src=c,i.alt=o,i.classList.add("hero-img"),a%2===0?B.appendChild(i.cloneNode(!0)):I.appendChild(i.cloneNode(!0))});B.classList.add("animate-up"),I.classList.add("animate-down")}catch(e){console.error("Error loading hero artists:",e)}}K();const X="/ArtUnity/assets/sprite-DkNmmkW8.svg",g={artistCardsContainer:document.querySelector("#artists-grid"),loadMoreBtn:document.getElementById("load-more-btn")};function W({_id:e,strArtist:t,genres:r,strArtistThumb:s,strBiographyEN:n}){const a=(r||[]).map(i=>`<span class="genre">${i}</span>`).join(""),c=(n==null?void 0:n.length)>100?n.slice(0,100)+"...":n||"",o=s&&typeof s=="string"&&s.trim()!==""?s:"/img/artists/Placeholder_Image.jpg";return`
    <li class="artist-cards" data-id="${e}">
      <img class="img" src="${o}" alt="${t}" />
      <div class="genres">${a}</div>
      <h3 class="artist-name">${t}</h3>
      <p class="description">${c}</p>
      <button class="learn-more" data-id="${e}">
        Learn More
        <svg class="icon" width="24" height="24">
          <use href="${X}#icon-caret-right-learn-more"></use>
        </svg>
      </button>
    </li>
  `}let L=1;async function U(){try{const e=await P(L,M);if(!e.artists||!Array.isArray(e.artists))throw new Error("Немає артистів у відповіді");const t=e.artists.map(W).join("");g.artistCardsContainer.insertAdjacentHTML("beforeend",t),L*M>=e.total?g.loadMoreBtn.style.display="none":g.loadMoreBtn.style.display="block",L++}catch(e){console.error(e),V("Помилка завантаження артистів"),g.loadMoreBtn.style.display="none"}}g.loadMoreBtn.addEventListener("click",U);document.addEventListener("DOMContentLoaded",()=>{U()});const f=document.querySelector(".modal"),p=f.querySelector(".modal-content"),$=document.querySelector(".loader");let E=[];function z(){f.classList.add("is-open"),document.body.style.overflow="hidden"}function k(){f.classList.remove("is-open"),document.body.style.overflow="",p.innerHTML="",Z()}function Z(){E.forEach(({element:e,handler:t})=>{e.removeEventListener("click",t)}),E=[]}function J(){p.querySelectorAll(".youtube-link").forEach(e=>{const t=r=>{r.preventDefault(),window.open(e.href,"_blank")};e.addEventListener("click",t),E.push({element:e,handler:t})})}function _(e){let t=e.genres??e.genre??e.tags;return t?Array.from(new Set((Array.isArray(t)?t:[t]).flatMap(r=>r.split(",")).map(r=>r.trim()).filter(Boolean))):["information missing"]}function ee(e){return e[0]==="information missing"?'<span class="genre">information missing</span>':e.map(t=>`<span class="genre">${t}</span>`).join(" ")}function te(e){return e.map(t=>`
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
      </div>`).join("")}</div>`:"<p>Albums information missing</p>"}function ne(e){const t=e.yearFormed?e.yearDisbanded?`${e.yearFormed} - ${e.yearDisbanded}`:`${e.yearFormed} - present`:"information missing",r=_(e),s=ee(r),n=e.imageUrl||"",a=re(e.albums);p.innerHTML=`
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
      ${a}
    </div>`,p.querySelector(".button-close").addEventListener("click",k),J()}async function se(e){var t;try{$.style.display="flex",p.innerHTML="",z();const{data:r}=await A.get(`https://sound-wave.b.goit.study/api/artists/${e}`);let{data:s}=await A.get("https://sound-wave.b.goit.study/api/artists"),n=((t=s.artists.find(o=>o._id===e))==null?void 0:t.genres)||r.genres||[],a=[];if(Array.isArray(r.albumsList))a=r.albumsList;else{const{data:o}=await A.get(`https://sound-wave.b.goit.study/api/artists/${e}/albums`);a=Array.isArray(o)?o:Array.isArray(o.albums)?o.albums:Array.isArray(o.albumsList)?o.albumsList:Array.isArray(o.results)?o.results:[]}const c={name:r.strArtist||r.name||"No name",imageUrl:r.strArtistThumb||r.image||"",yearFormed:r.intFormedYear||r.yearFormed||"",yearDisbanded:r.intDiedYear&&r.intDiedYear!=="null"?r.intDiedYear:"",gender:r.strGender||r.gender||"",membersCount:r.intMembers||r.membersCount||"",country:r.strCountry||r.country||"",biography:r.strBiographyEN||r.bio||"",genres:n,genre:r.genre,tags:r.tags,albums:a.map(o=>({title:o.strAlbum||o.title||"No title",tracks:Array.isArray(o.tracks)?o.tracks.map(i=>({title:i.strTrack||i.title||"No title",duration:i.intDuration?Math.floor(i.intDuration/6e4)+":"+String(Math.floor(i.intDuration%6e4/1e3)).padStart(2,"0"):"",youtubeUrl:i.movie&&i.movie!=="null"?i.movie:""})):[]}))};ne(c)}catch(r){p.innerHTML="<p>Помилка завантаження даних</p>",console.error(r)}finally{$.style.display="none"}}const D=document.querySelector("#artists-grid");D&&D.addEventListener("click",e=>{const t=e.target.closest(".learn-more");if(!t)return;const r=t.closest(".artist-cards");if(!r)return;const s=r.dataset.id;se(s)});f.addEventListener("click",e=>{e.target===f&&k()});window.addEventListener("keydown",e=>{e.key==="Escape"&&k()});const q="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGPSURBVHgBrVQ7UsMwEN1dh9D6Bjg3CDVFBA1tOAHDCYiHCdAldExgxgkcgHAEOmjAFS2+AeYGrjNEYpU4HmPFtvi8GY+l1dvV7tNKABboi9vjs72bwIaLdYSeCLwm0rseSyV3r0M/rOIT1GCTnEG2O0G3jo+22aVIZkq2xqGfwG8y3AAQBZPbJOhV+VQGRKSBYVR0WOnDZblNzkTx7vqjxd/ZYjE8BCVK/CKlMEKYf0iWgXVL2Df+5K/BGr0xwdNirgTlQFCDNqJq6wIp8wHgxBJSSj7AfwHlxHmNnx53vH1kwQT8BSgvRs/+MGubExF0HaQ7HrrwMyRcpX8V+tNF3PzKOfedRHrhoWcXC2IOdsDBopXhW9tchn48593AFsvMorzJ6EO0z07D4BoBiZwOWALNm7TmpqjSZjapSJ3KgHxruFmNU471s8XiH+lxYc3tL30yNAoTkZsmLPpkBjDOvS7TUxEMIXfH07LXnzKl2SlQISm5PQr9YfGp0jZea/Fm90sulD5lkJbtgSXWcb8AOwmLEyrUuDIAAAAASUVORK5CYII=",T="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADuSURBVHgBrZOBEYIwDEVTJsAJ7AhsYN2AEXAC2UA28NzAFZzAFdwAnEA2qImEEwJXwpV397lS0t9QPgAKvPdn1BW2AI2s/+OW6hNY5jIY5xCD6I74oFKI6NCJezIrIaLD2k+pQ2sMv4Lj3XvtURamHfa8WG9Uy2pIhne0sA0tneEDtuP2u2KXlY+nGlnjRM6xWAutKWb79V3u6hVmVJsFD4E71TL5c+aCbUGP1RgeQI+TE0ZO0CFDF24NrTFmN5xIhFk2Y9agjqgTj4ekwY+CD0sRB8pnKmpkZsuQYV/8pAgF6ihed64tIETISFP7BVsQmECc0IB0AAAAAElFTkSuQmCC";function oe(e){return Math.round(e)}function ae(e){return e.map(t=>({...t,roundedRating:oe(t.rating)}))}const ie=async(e=3)=>{try{const t=await Q(),r=[],s=new Set;for(;r.length<e&&s.size<t.length;){const n=Math.floor(Math.random()*t.length);s.has(n)||(s.add(n),r.push(t[n]))}return r}catch(t){return console.error("Не вдалося отримати відгуки:",t),[]}};document.addEventListener("DOMContentLoaded",()=>{(async()=>{try{const e=await ie(3),t=ae(e),r=document.querySelector(".swiper-wrapper");r.innerHTML="",t.forEach((n,a)=>{const{name:c,descr:o,roundedRating:i}=n,d=document.createElement("div");d.className="swiper-slide",d.innerHTML=`
          <div class="feedback-card">
            <div class="rating" data-score="${i}"></div>
            <p class="feedback_description">${o}</p>
            <h3 class="feedback_name">${c}</h3>
          </div>
        `,r.appendChild(d)}),new N(".swiper",{direction:"horizontal",loop:!1,modules:[O,j],pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},simulateTouch:!0,grabCursor:!0,keyboard:{enabled:!0,pageUpDown:!0,onlyInViewport:!0},mousewheel:{eventsTarget:".swiper"}}),document.querySelectorAll(".rating").forEach(n=>{const a=parseInt(n.dataset.score,10);new H(n,{starOn:q,starOff:T,score:a,readOnly:!0}).init()})}catch(e){console.error("Помилка під час обробки відгуків:",e)}})()});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector("[data-feedback-modal]"),t=document.querySelector("[data-feedback-modal-open]"),r=document.querySelector("[data-feedback-modal-close]"),s=document.getElementById("feedback-star-rating"),n=e.querySelector(".feedback-modal-form");function a(){document.body.classList.add("body-lock")}function c(){document.body.classList.remove("body-lock")}t==null||t.addEventListener("click",()=>{e.classList.remove("is-hidden"),a()}),r==null||r.addEventListener("click",()=>{e.classList.add("is-hidden"),c()}),e==null||e.addEventListener("click",d=>{d.target===e&&(e.classList.add("is-hidden"),c())}),document.addEventListener("keydown",d=>{d.key==="Escape"&&!e.classList.contains("is-hidden")&&(e.classList.add("is-hidden"),c())});let o=0;function i(d){s.innerHTML="";for(let m=1;m<=5;m++){const u=document.createElement("img");u.src=m<=d?q:T,u.alt=`Star ${m}`,u.dataset.value=m,u.style.cursor="pointer",u.addEventListener("click",()=>{o=m,i(o)}),s.appendChild(u)}}i(0),n.setAttribute("novalidate",!0),n.addEventListener("submit",async d=>{d.preventDefault(),n.querySelectorAll("input, textarea").forEach(l=>{l.classList.remove("input-error");const S=l.parentElement.querySelector(".error-text");S&&S.remove()});let u=!1;const h=n.querySelector("#user-name"),v=h.value.trim();if(v.length<2||v.length>16){h.classList.add("input-error");const l=document.createElement("div");l.classList.add("error-text"),l.textContent="Please enter a valid name (2-16 characters)",h.parentElement.appendChild(l),u=!0}const b=n.querySelector("#user-message"),w=b.value.trim();if(w.length<10||w.length>512){b.classList.add("input-error");const l=document.createElement("div");l.classList.add("error-text"),l.textContent="Please enter a message (10-512 characters)",b.parentElement.appendChild(l),u=!0}const C=s.querySelector(".error-text");if(C&&C.remove(),o===0){s.classList.add("input-error");const l=document.createElement("div");l.classList.add("error-text"),l.textContent="Please choose a rating",s.appendChild(l),u=!0}else s.classList.remove("input-error");if(!u)try{await G({name:v,rating:o,descr:w}),e.classList.add("is-hidden"),c(),n.reset(),o=0,i(o)}catch(l){alert("Помилка при відправці фідбеку. Спробуйте пізніше."),console.error(l)}})});const ce=document.querySelector("[data-header-open]"),y=document.querySelector("[data-menu]"),le=document.querySelector("[data-menu-close]"),de=document.querySelectorAll(".mob-nav-link");ce.addEventListener("click",Y);le.addEventListener("click",Y);function Y(){y.classList.toggle("is-open")}document.addEventListener("keydown",ue);function ue(e){e.key==="Escape"&&y.classList.contains("is-open")&&y.classList.remove("is-open")}de.forEach(e=>{e.addEventListener("click",t=>{t.preventDefault();const r=e.getAttribute("href").substring(1),s=document.getElementById(r);s&&(y.classList.remove("is-open"),document.body.style.overflow="",s.scrollIntoView({behavior:"smooth"}))})});
//# sourceMappingURL=index.js.map

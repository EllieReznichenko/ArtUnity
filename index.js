import{a as A,S as O,N as T,P as R,R as U}from"./assets/vendor-BuJqGh_H.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function r(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(n){if(n.ep)return;n.ep=!0;const a=r(n);fetch(n.href,a)}})();const j="https://sound-wave.b.goit.study/api",M=8;function V(e){alert(e)}async function H(e=1,t=8){const r=await fetch(`${j}/artists?page=${e}&limit=${t}`);if(!r.ok)throw new Error("Не вдалося завантажити артистів");return await r.json()}const D="https://sound-wave.b.goit.study/api/feedbacks";async function P(){try{const e=await fetch(D);if(!e.ok)throw new Error("Failed to load feedbacks");return(await e.json()).data}catch(e){return console.error(e),[]}}async function Q(e){try{return(await A.post(D,e)).data}catch(t){throw console.error("Помилка при відправці фідбеку:",t),t}}const I=document.querySelector(".column-left"),B=document.querySelector(".column-right");fetch("https://sound-wave.b.goit.study/api/artists").then(e=>e.json()).then(e=>{e.forEach((r,s)=>{const n=document.createElement("img");n.src=r.photoUrl,n.alt=r.name,s%2===0?(I.appendChild(n.cloneNode()),I.appendChild(n.cloneNode())):(B.appendChild(n.cloneNode()),B.appendChild(n.cloneNode()))})}).catch(e=>console.error("Error loading artists:",e));const g={artistCardsContainer:document.querySelector("#artists-grid"),loadMoreBtn:document.getElementById("load-more-btn")};function G({_id:e,strArtist:t,genres:r,strArtistThumb:s,strBiographyEN:n}){const a=(r||[]).map(i=>`<span class="genre">${i}</span>`).join(""),l=(n==null?void 0:n.length)>100?n.slice(0,100)+"...":n||"",o=s&&typeof s=="string"&&s.trim()!==""?s:"/img/artists/Placeholder_Image.jpg";return`
    <li class="artist-cards" data-id="${e}">
      <img class="img" src="${o}" alt="${t}" />
      <div class="genres">${a}</div>
      <h3 class="artist-name">${t}</h3>
      <p class="description">${l}</p>
      <button class="learn-more" data-id="${e}">
        Learn More
        <svg class="icon" width="24" height="24">
          <use href="/img/sprite.svg#icon-caret-right-learn-more"></use>
        </svg>
      </button>
    </li>
  `}let L=1;async function F(){try{const e=await H(L,M);if(!e.artists||!Array.isArray(e.artists))throw new Error("Немає артистів у відповіді");const t=e.artists.map(G).join("");g.artistCardsContainer.insertAdjacentHTML("beforeend",t),L*M>=e.total?g.loadMoreBtn.style.display="none":g.loadMoreBtn.style.display="block",L++}catch(e){console.error(e),V("Помилка завантаження артистів"),g.loadMoreBtn.style.display="none"}}g.loadMoreBtn.addEventListener("click",F);document.addEventListener("DOMContentLoaded",()=>{F()});const f=document.querySelector(".modal"),p=f.querySelector(".modal-content"),$=document.querySelector(".loader");let E=[];function K(){f.classList.add("is-open"),document.body.style.overflow="hidden"}function C(){f.classList.remove("is-open"),document.body.style.overflow="",p.innerHTML="",X()}function X(){E.forEach(({element:e,handler:t})=>{e.removeEventListener("click",t)}),E=[]}function W(){p.querySelectorAll(".youtube-link").forEach(e=>{const t=r=>{r.preventDefault(),window.open(e.href,"_blank")};e.addEventListener("click",t),E.push({element:e,handler:t})})}function z(e){let t=e.genres??e.genre??e.tags;return t?Array.from(new Set((Array.isArray(t)?t:[t]).flatMap(r=>r.split(",")).map(r=>r.trim()).filter(Boolean))):["information missing"]}function Z(e){return e[0]==="information missing"?'<span class="genre">information missing</span>':e.map(t=>`<span class="genre">${t}</span>`).join(" ")}function J(e){return e.map(t=>`
      <tr>
        <td>${t.title}</td>
        <td>${t.duration}</td>
        <td>${t.youtubeUrl?`<a href="${t.youtubeUrl}" class="youtube-link" target="_blank" rel="noopener noreferrer" title="Open on YouTube">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" style="vertical-align:middle;"><path d="M23.498 6.186a2.994 2.994 0 0 0-2.112-2.12C19.228 3.5 12 3.5 12 3.5s-7.228 0-9.386.566A2.994 2.994 0 0 0 .502 6.186C0 8.344 0 12 0 12s0 3.656.502 5.814a2.994 2.994 0 0 0 2.112 2.12C4.772 20.5 12 20.5 12 20.5s7.228 0 9.386-.566a2.994 2.994 0 0 0 2.112-2.12C24 15.656 24 12 24 12s0-3.656-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>`:""}</td>
      </tr>`).join("")}function _(e){return e!=null&&e.length?`<div class="albums-grid">${e.map(t=>`
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
            ${J(t.tracks)}
          </tbody>
        </table>
      </div>`).join("")}</div>`:"<p>Albums information missing</p>"}function ee(e){const t=e.yearFormed?e.yearDisbanded?`${e.yearFormed} - ${e.yearDisbanded}`:`${e.yearFormed} - present`:"information missing",r=z(e),s=Z(r),n=e.imageUrl||"",a=_(e.albums);p.innerHTML=`
    <div class="modal-header">
      <h2 class="artist-mod-title">${e.name}</h2>
      <button class="button-close" aria-label="Close">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        <p class="biography"><strong>Biography</strong> ${e.biography||"information missing"}</p>
        <div class="genres"><strong>Genres</strong> ${s}</div>
      </div>
    </div>
    <div class="albums">
      <h3 class="title_album">Albums</h3>
      ${a}
    </div>`,p.querySelector(".button-close").addEventListener("click",C),W()}async function te(e){var t;try{$.style.display="flex",p.innerHTML="",K();const{data:r}=await A.get(`https://sound-wave.b.goit.study/api/artists/${e}`);let{data:s}=await A.get("https://sound-wave.b.goit.study/api/artists"),n=((t=s.artists.find(o=>o._id===e))==null?void 0:t.genres)||r.genres||[],a=[];if(Array.isArray(r.albumsList))a=r.albumsList;else{const{data:o}=await A.get(`https://sound-wave.b.goit.study/api/artists/${e}/albums`);a=Array.isArray(o)?o:Array.isArray(o.albums)?o.albums:Array.isArray(o.albumsList)?o.albumsList:Array.isArray(o.results)?o.results:[]}const l={name:r.strArtist||r.name||"No name",imageUrl:r.strArtistThumb||r.image||"",yearFormed:r.intFormedYear||r.yearFormed||"",yearDisbanded:r.intDiedYear&&r.intDiedYear!=="null"?r.intDiedYear:"",gender:r.strGender||r.gender||"",membersCount:r.intMembers||r.membersCount||"",country:r.strCountry||r.country||"",biography:r.strBiographyEN||r.bio||"",genres:n,genre:r.genre,tags:r.tags,albums:a.map(o=>({title:o.strAlbum||o.title||"No title",tracks:Array.isArray(o.tracks)?o.tracks.map(i=>({title:i.strTrack||i.title||"No title",duration:i.intDuration?Math.floor(i.intDuration/6e4)+":"+String(Math.floor(i.intDuration%6e4/1e3)).padStart(2,"0"):"",youtubeUrl:i.movie&&i.movie!=="null"?i.movie:""})):[]}))};ee(l)}catch(r){p.innerHTML="<p>Помилка завантаження даних</p>",console.error(r)}finally{$.style.display="none"}}const x=document.querySelector("#artists-grid");x&&x.addEventListener("click",e=>{const t=e.target.closest(".learn-more");if(!t)return;const r=t.closest(".artist-cards");if(!r)return;const s=r.dataset.id;te(s)});f.addEventListener("click",e=>{e.target===f&&C()});window.addEventListener("keydown",e=>{e.key==="Escape"&&C()});const q="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGPSURBVHgBrVQ7UsMwEN1dh9D6Bjg3CDVFBA1tOAHDCYiHCdAldExgxgkcgHAEOmjAFS2+AeYGrjNEYpU4HmPFtvi8GY+l1dvV7tNKABboi9vjs72bwIaLdYSeCLwm0rseSyV3r0M/rOIT1GCTnEG2O0G3jo+22aVIZkq2xqGfwG8y3AAQBZPbJOhV+VQGRKSBYVR0WOnDZblNzkTx7vqjxd/ZYjE8BCVK/CKlMEKYf0iWgXVL2Df+5K/BGr0xwdNirgTlQFCDNqJq6wIp8wHgxBJSSj7AfwHlxHmNnx53vH1kwQT8BSgvRs/+MGubExF0HaQ7HrrwMyRcpX8V+tNF3PzKOfedRHrhoWcXC2IOdsDBopXhW9tchn48593AFsvMorzJ6EO0z07D4BoBiZwOWALNm7TmpqjSZjapSJ3KgHxruFmNU471s8XiH+lxYc3tL30yNAoTkZsmLPpkBjDOvS7TUxEMIXfH07LXnzKl2SlQISm5PQr9YfGp0jZea/Fm90sulD5lkJbtgSXWcb8AOwmLEyrUuDIAAAAASUVORK5CYII=",N="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADuSURBVHgBrZOBEYIwDEVTJsAJ7AhsYN2AEXAC2UA28NzAFZzAFdwAnEA2qImEEwJXwpV397lS0t9QPgAKvPdn1BW2AI2s/+OW6hNY5jIY5xCD6I74oFKI6NCJezIrIaLD2k+pQ2sMv4Lj3XvtURamHfa8WG9Uy2pIhne0sA0tneEDtuP2u2KXlY+nGlnjRM6xWAutKWb79V3u6hVmVJsFD4E71TL5c+aCbUGP1RgeQI+TE0ZO0CFDF24NrTFmN5xIhFk2Y9agjqgTj4ekwY+CD0sRB8pnKmpkZsuQYV/8pAgF6ihed64tIETISFP7BVsQmECc0IB0AAAAAElFTkSuQmCC";function re(e){return Math.round(e)}function ne(e){return e.map(t=>({...t,roundedRating:re(t.rating)}))}const se=async(e=3)=>{try{const t=await P(),r=[],s=new Set;for(;r.length<e&&s.size<t.length;){const n=Math.floor(Math.random()*t.length);s.has(n)||(s.add(n),r.push(t[n]))}return r}catch(t){return console.error("Не вдалося отримати відгуки:",t),[]}};document.addEventListener("DOMContentLoaded",()=>{(async()=>{try{const e=await se(3),t=ne(e),r=document.querySelector(".swiper-wrapper");r.innerHTML="",t.forEach((n,a)=>{const{name:l,descr:o,roundedRating:i}=n,d=document.createElement("div");d.className="swiper-slide",d.innerHTML=`
          <div class="feedback-card">
            <div class="rating" data-score="${i}"></div>
            <p class="feedback_description">${o}</p>
            <h3 class="feedback_name">${l}</h3>
          </div>
        `,r.appendChild(d)}),new O(".swiper",{direction:"horizontal",loop:!1,modules:[T,R],pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},simulateTouch:!0,grabCursor:!0,keyboard:{enabled:!0,pageUpDown:!0,onlyInViewport:!0},mousewheel:{eventsTarget:".swiper"}}),document.querySelectorAll(".rating").forEach(n=>{const a=parseInt(n.dataset.score,10);new U(n,{starOn:q,starOff:N,score:a,readOnly:!0}).init()})}catch(e){console.error("Помилка під час обробки відгуків:",e)}})()});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector("[data-feedback-modal]"),t=document.querySelector("[data-feedback-modal-open]"),r=document.querySelector("[data-feedback-modal-close]"),s=document.getElementById("feedback-star-rating"),n=e.querySelector(".feedback-modal-form");function a(){document.body.classList.add("body-lock")}function l(){document.body.classList.remove("body-lock")}t==null||t.addEventListener("click",()=>{e.classList.remove("is-hidden"),a()}),r==null||r.addEventListener("click",()=>{e.classList.add("is-hidden"),l()}),e==null||e.addEventListener("click",d=>{d.target===e&&(e.classList.add("is-hidden"),l())}),document.addEventListener("keydown",d=>{d.key==="Escape"&&!e.classList.contains("is-hidden")&&(e.classList.add("is-hidden"),l())});let o=0;function i(d){s.innerHTML="";for(let m=1;m<=5;m++){const u=document.createElement("img");u.src=m<=d?q:N,u.alt=`Star ${m}`,u.dataset.value=m,u.style.cursor="pointer",u.addEventListener("click",()=>{o=m,i(o)}),s.appendChild(u)}}i(0),n.setAttribute("novalidate",!0),n.addEventListener("submit",async d=>{d.preventDefault(),n.querySelectorAll("input, textarea").forEach(c=>{c.classList.remove("input-error");const S=c.parentElement.querySelector(".error-text");S&&S.remove()});let u=!1;const h=n.querySelector("#user-name"),v=h.value.trim();if(v.length<2||v.length>16){h.classList.add("input-error");const c=document.createElement("div");c.classList.add("error-text"),c.textContent="Please enter a valid name (2-16 characters)",h.parentElement.appendChild(c),u=!0}const b=n.querySelector("#user-message"),w=b.value.trim();if(w.length<10||w.length>512){b.classList.add("input-error");const c=document.createElement("div");c.classList.add("error-text"),c.textContent="Please enter a message (10-512 characters)",b.parentElement.appendChild(c),u=!0}const k=s.querySelector(".error-text");if(k&&k.remove(),o===0){s.classList.add("input-error");const c=document.createElement("div");c.classList.add("error-text"),c.textContent="Please choose a rating",s.appendChild(c),u=!0}else s.classList.remove("input-error");if(!u)try{await Q({name:v,rating:o,descr:w}),e.classList.add("is-hidden"),l(),n.reset(),o=0,i(o)}catch(c){alert("Помилка при відправці фідбеку. Спробуйте пізніше."),console.error(c)}})});const oe=document.querySelector("[data-header-open]"),y=document.querySelector("[data-menu]"),ae=document.querySelector("[data-menu-close]"),ie=document.querySelectorAll(".mob-nav-link");oe.addEventListener("click",Y);ae.addEventListener("click",Y);function Y(){y.classList.toggle("is-open")}document.addEventListener("keydown",ce);function ce(e){e.key==="Escape"&&y.classList.contains("is-open")&&y.classList.remove("is-open")}ie.forEach(e=>{e.addEventListener("click",t=>{t.preventDefault();const r=e.getAttribute("href").substring(1),s=document.getElementById(r);s&&(y.classList.remove("is-open"),document.body.style.overflow="",s.scrollIntoView({behavior:"smooth"}))})});
//# sourceMappingURL=index.js.map

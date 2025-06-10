import{a as w,S as R,N as Y,P as T,R as U}from"./assets/vendor-BuJqGh_H.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))t(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function o(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function t(s){if(s.ep)return;s.ep=!0;const l=o(s);fetch(s.href,l)}})();const j="https://sound-wave.b.goit.study/api",B=8;function V(e){alert(e)}async function H(e=1,n=8){const o=await fetch(`${j}/artists?page=${e}&limit=${n}`);if(!o.ok)throw new Error("Не вдалося завантажити артистів");return await o.json()}const x="https://sound-wave.b.goit.study/api/feedbacks";async function P(){try{const e=await fetch(x);if(!e.ok)throw new Error("Failed to load feedbacks");return(await e.json()).data}catch(e){return console.error(e),[]}}async function Q(e){try{return(await w.post(x,e)).data}catch(n){throw console.error("Помилка при відправці фідбеку:",n),n}}const I=document.querySelector(".column-left"),$=document.querySelector(".column-right");fetch("https://sound-wave.b.goit.study/api/artist").then(e=>e.json()).then(e=>{e.forEach((o,t)=>{const s=document.createElement("img");s.src=o.photoUrl,s.alt=o.name,t%2===0?(I.appendChild(s.cloneNode()),I.appendChild(s.cloneNode())):($.appendChild(s.cloneNode()),$.appendChild(s.cloneNode()))})}).catch(e=>console.error("Error loading artists:",e));const h={artistCardsContainer:document.querySelector("#artists-grid"),loadMoreBtn:document.getElementById("load-more-btn")};function G({_id:e,strArtist:n,genres:o,strArtistThumb:t,strBiographyEN:s}){const l=(o||[]).map(d=>`<span class="genre">${d}</span>`).join(""),i=(s==null?void 0:s.length)>100?s.slice(0,100)+"...":s||"",a=t&&typeof t=="string"&&t.trim()!==""?t:"/img/artists/Placeholder_Image.jpg";return`
    <li class="artist-cards" data-id="${e}">
      <img class="img" src="${a}" alt="${n}" />
      <div class="genres">${l}</div>
      <h3 class="artist-name">${n}</h3>
      <p class="description">${i}</p>
      <button class="learn-more" data-id="${e}">
        Learn More
        <svg class="icon" width="24" height="24">
          <use href="/img/sprite.svg#icon-caret-right-learn-more"></use>
        </svg>
      </button>
    </li>
  `}let E=1;async function F(){try{const e=await H(E,B);if(!e.artists||!Array.isArray(e.artists))throw new Error("Немає артистів у відповіді");const n=e.artists.map(G).join("");h.artistCardsContainer.insertAdjacentHTML("beforeend",n),E*B>=e.total?h.loadMoreBtn.style.display="none":h.loadMoreBtn.style.display="block",E++}catch(e){console.error(e),V("Помилка завантаження артистів"),h.loadMoreBtn.style.display="none"}}h.loadMoreBtn.addEventListener("click",F);document.addEventListener("DOMContentLoaded",()=>{F()});const b=document.querySelector(".modal"),A=b.querySelector(".modal-content"),k=document.querySelector(".loader");k||console.warn("Loader element not found in DOM!");let C=[];function K(){b.classList.add("is-open"),document.body.style.overflow="hidden"}function S(){b.classList.remove("is-open"),document.body.style.overflow="",A.innerHTML="",X()}function X(){C.forEach(({element:e,handler:n})=>{e.removeEventListener("click",n)}),C=[]}function W(){A.querySelectorAll(".youtube-btn").forEach(n=>{const o=()=>{const t=n.dataset.youtube;t&&window.open(t,"_blank")};n.addEventListener("click",o),C.push({element:n,handler:o})})}function z(e){var m;const n=e.yearFormed?e.yearDisbanded?`${e.yearFormed} - ${e.yearDisbanded}`:`${e.yearFormed} - present`:"information missing",o=e.gender||"information missing",t=e.membersCount||"information missing",s=e.country||"information missing",l=e.biography||"information missing";let i=typeof e.genres<"u"?e.genres:typeof e.genre<"u"?e.genre:typeof e.tags<"u"?e.tags:void 0,a=[];Array.isArray(i)?i.length===1&&typeof i[0]=="string"&&i[0].includes(",")?a=i[0].split(",").map(c=>c.trim()).filter(Boolean):a=i.flatMap(c=>typeof c=="string"&&c.includes(",")?c.split(",").map(f=>f.trim()):[typeof c=="string"?c.trim():c]).filter(Boolean):typeof i=="string"&&(a=i.split(",").map(c=>c.trim()).filter(Boolean)),a=Array.from(new Set(a)),console.log("MODAL genresArr:",a,"artist.genres:",e.genres,"artist.genre:",e.genre,"artist.tags:",e.tags);const d=a.length?a.map(c=>`<span class="genre">${c}</span>`).join(" "):'<span class="genre">information missing</span>',r=e.imageUrl||"",p=(m=e.albums)!=null&&m.length?`<div class="albums-grid">${e.albums.map(c=>{const f=`
            <tr>
              <th>Track</th>
              <th>Time</th>
              <th>Link</th>
            </tr>`,y=c.tracks.map(g=>{const v=g.youtubeUrl?`<a href="${g.youtubeUrl}" class="youtube-link" target="_blank" rel="noopener noreferrer" title="Open on YouTube">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" style="vertical-align:middle;"><path d="M23.498 6.186a2.994 2.994 0 0 0-2.112-2.12C19.228 3.5 12 3.5 12 3.5s-7.228 0-9.386.566A2.994 2.994 0 0 0 .502 6.186C0 8.344 0 12 0 12s0 3.656.502 5.814a2.994 2.994 0 0 0 2.112 2.12C4.772 20.5 12 20.5 12 20.5s7.228 0 9.386-.566a2.994 2.994 0 0 0 2.112-2.12C24 15.656 24 12 24 12s0-3.656-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  </a>`:"";return`
                <tr>
                  <td>${g.title}</td>
                  <td>${g.duration}</td>
                  <td>${v}</td>
                </tr>`}).join("");return`
            <div class="album">
              <h3>${c.title}</h3>
              <table>
                <thead>${f}</thead>
                <tbody>${y}</tbody>
              </table>
            </div>`}).join("")}</div>`:"<p>Albums information missing</p>";A.innerHTML=`
    <div class="modal-header">
      <h2 class="artist-mod-title">${e.name}</h2>
      <button class="button-close" aria-label="Close">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">Add commentMore actions
          <path d="M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          <path d="M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </button>
    </div>
    <div class="artist-main-info">
      <img class="artist-image" src="${r}" alt="${e.name}">
      <div class="artist-info">
        <div class="artist-info-grid2">
          <div class="info-col">
            <div class="info-block">
              <span class="info-label">Years active</span>
              <span class="info-value">${n}</span>
            </div>
            <div class="info-block">
              <span class="info-label">Members</span>
              <span class="info-value">${t}</span>
            </div>
          </div>
          <div class="info-col">
            <div class="info-block">
              <span class="info-label">Sex</span>
              <span class="info-value">${o}</span>
            </div>
            <div class="info-block">
              <span class="info-label">Country</span>
              <span class="info-value">${s}</span>
            </div>
          </div>
        </div>
        <p class="biography"><strong>Biography</strong> ${l}</p>
        <div class="genres">
          <strong>Genres</strong> ${d}
        </div>
      </div>
    </div>
    <div class="albums">
      <h3 class="title_album">Albums</h3>
      ${p}
    </div>`,A.querySelector(".button-close").addEventListener("click",S),W()}async function Z(e){var n;try{k.style.display="flex",A.innerHTML="",K();const t=(await w.get(`https://sound-wave.b.goit.study/api/artists/${e}`)).data,l=((n=(await w.get("https://sound-wave.b.goit.study/api/artists")).data.artists.find(d=>d._id===e))==null?void 0:n.genres)||[];!l&&typeof t.genres<"u"&&(l=t.genres);const i={name:t.strArtist||t.name||"No name",imageUrl:t.strArtistThumb||t.image||"",yearFormed:t.intFormedYear||t.yearFormed||"",yearDisbanded:t.intDiedYear&&t.intDiedYear!=="null"?t.intDiedYear:"",gender:t.strGender||t.gender||"",membersCount:t.intMembers||t.membersCount||"",country:t.strCountry||t.country||"",biography:t.strBiographyEN||t.bio||"",genres:l.join(", ")||"information missing",genre:t.genre,tags:t.tags,albums:[]};let a=[];if(t.albumsList&&Array.isArray(t.albumsList))a=t.albumsList;else{const r=(await w.get(`https://sound-wave.b.goit.study/api/artists/${e}/albums`)).data;console.log("allAlbums:",r),Array.isArray(r)?a=r:r&&Array.isArray(r.albums)?a=r.albums:r&&Array.isArray(r.albumsList)?a=r.albumsList:r&&Array.isArray(r.results)?a=r.results:(console.warn("Unknown albums structure:",r),a=[])}console.log("albumsArray:",a),i.albums=a.map(d=>({title:d.strAlbum||d.title||"No title",tracks:Array.isArray(d.tracks)?d.tracks.map(r=>({title:r.strTrack||r.title||"No title",duration:r.intDuration?Math.floor(r.intDuration/6e4)+":"+String(Math.floor(r.intDuration%6e4/1e3)).padStart(2,"0"):"",youtubeUrl:r.movie&&r.movie!=="null"?r.movie:""})):[]})),z(i)}catch(o){A.innerHTML="<p>Помилка завантаження даних</p>",console.error(o)}finally{k.style.display="none"}}const D=document.querySelector("#artists-grid");D&&D.addEventListener("click",e=>{const n=e.target.closest(".learn-more");if(!n)return;const o=n.closest(".artist-cards");if(!o)return;const t=o.dataset.id;Z(t)});b.addEventListener("click",e=>{e.target===b&&S()});window.addEventListener("keydown",e=>{e.key==="Escape"&&S()});const O="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGPSURBVHgBrVQ7UsMwEN1dh9D6Bjg3CDVFBA1tOAHDCYiHCdAldExgxgkcgHAEOmjAFS2+AeYGrjNEYpU4HmPFtvi8GY+l1dvV7tNKABboi9vjs72bwIaLdYSeCLwm0rseSyV3r0M/rOIT1GCTnEG2O0G3jo+22aVIZkq2xqGfwG8y3AAQBZPbJOhV+VQGRKSBYVR0WOnDZblNzkTx7vqjxd/ZYjE8BCVK/CKlMEKYf0iWgXVL2Df+5K/BGr0xwdNirgTlQFCDNqJq6wIp8wHgxBJSSj7AfwHlxHmNnx53vH1kwQT8BSgvRs/+MGubExF0HaQ7HrrwMyRcpX8V+tNF3PzKOfedRHrhoWcXC2IOdsDBopXhW9tchn48593AFsvMorzJ6EO0z07D4BoBiZwOWALNm7TmpqjSZjapSJ3KgHxruFmNU471s8XiH+lxYc3tL30yNAoTkZsmLPpkBjDOvS7TUxEMIXfH07LXnzKl2SlQISm5PQr9YfGp0jZea/Fm90sulD5lkJbtgSXWcb8AOwmLEyrUuDIAAAAASUVORK5CYII=",q="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADuSURBVHgBrZOBEYIwDEVTJsAJ7AhsYN2AEXAC2UA28NzAFZzAFdwAnEA2qImEEwJXwpV397lS0t9QPgAKvPdn1BW2AI2s/+OW6hNY5jIY5xCD6I74oFKI6NCJezIrIaLD2k+pQ2sMv4Lj3XvtURamHfa8WG9Uy2pIhne0sA0tneEDtuP2u2KXlY+nGlnjRM6xWAutKWb79V3u6hVmVJsFD4E71TL5c+aCbUGP1RgeQI+TE0ZO0CFDF24NrTFmN5xIhFk2Y9agjqgTj4ekwY+CD0sRB8pnKmpkZsuQYV/8pAgF6ihed64tIETISFP7BVsQmECc0IB0AAAAAElFTkSuQmCC";function J(e){return Math.round(e)}function _(e){return e.map(n=>({...n,roundedRating:J(n.rating)}))}const ee=async(e=3)=>{try{const n=await P(),o=[],t=new Set;for(;o.length<e&&t.size<n.length;){const s=Math.floor(Math.random()*n.length);t.has(s)||(t.add(s),o.push(n[s]))}return o}catch(n){return console.error("Не вдалося отримати відгуки:",n),[]}};document.addEventListener("DOMContentLoaded",()=>{(async()=>{try{const e=await ee(3),n=_(e),o=document.querySelector(".swiper-wrapper");o.innerHTML="",n.forEach((s,l)=>{const{name:i,descr:a,roundedRating:d}=s,r=document.createElement("div");r.className="swiper-slide",r.innerHTML=`
          <div class="feedback-card">
            <div class="rating" data-score="${d}"></div>
            <p class="feedback_description">${a}</p>
            <h3 class="feedback_name">${i}</h3>
          </div>
        `,o.appendChild(r)}),new R(".swiper",{direction:"horizontal",loop:!1,modules:[Y,T],pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},simulateTouch:!0,grabCursor:!0,keyboard:{enabled:!0,pageUpDown:!0,onlyInViewport:!0},mousewheel:{eventsTarget:".swiper"}}),document.querySelectorAll(".rating").forEach(s=>{const l=parseInt(s.dataset.score,10);new U(s,{starOn:O,starOff:q,score:l,readOnly:!0}).init()})}catch(e){console.error("Помилка під час обробки відгуків:",e)}})()});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector("[data-feedback-modal]"),n=document.querySelector("[data-feedback-modal-open]"),o=document.querySelector("[data-feedback-modal-close]"),t=document.getElementById("feedback-star-rating"),s=e.querySelector(".feedback-modal-form");function l(){document.body.classList.add("body-lock")}function i(){document.body.classList.remove("body-lock")}n==null||n.addEventListener("click",()=>{e.classList.remove("is-hidden"),l()}),o==null||o.addEventListener("click",()=>{e.classList.add("is-hidden"),i()}),e==null||e.addEventListener("click",r=>{r.target===e&&(e.classList.add("is-hidden"),i())}),document.addEventListener("keydown",r=>{r.key==="Escape"&&!e.classList.contains("is-hidden")&&(e.classList.add("is-hidden"),i())});let a=0;function d(r){t.innerHTML="";for(let p=1;p<=5;p++){const m=document.createElement("img");m.src=p<=r?O:q,m.alt=`Star ${p}`,m.dataset.value=p,m.style.cursor="pointer",m.addEventListener("click",()=>{a=p,d(a)}),t.appendChild(m)}}d(0),s.setAttribute("novalidate",!0),s.addEventListener("submit",async r=>{r.preventDefault(),s.querySelectorAll("input, textarea").forEach(u=>{u.classList.remove("input-error");const M=u.parentElement.querySelector(".error-text");M&&M.remove()});let m=!1;const c=s.querySelector("#user-name"),f=c.value.trim();if(f.length<2||f.length>16){c.classList.add("input-error");const u=document.createElement("div");u.classList.add("error-text"),u.textContent="Please enter a valid name (2-16 characters)",c.parentElement.appendChild(u),m=!0}const y=s.querySelector("#user-message"),g=y.value.trim();if(g.length<10||g.length>512){y.classList.add("input-error");const u=document.createElement("div");u.classList.add("error-text"),u.textContent="Please enter a message (10-512 characters)",y.parentElement.appendChild(u),m=!0}const v=t.querySelector(".error-text");if(v&&v.remove(),a===0){t.classList.add("input-error");const u=document.createElement("div");u.classList.add("error-text"),u.textContent="Please choose a rating",t.appendChild(u),m=!0}else t.classList.remove("input-error");if(!m)try{await Q({name:f,rating:a,descr:g}),e.classList.add("is-hidden"),i(),s.reset(),a=0,d(a)}catch(u){alert("Помилка при відправці фідбеку. Спробуйте пізніше."),console.error(u)}})});const te=document.querySelector("[data-header-open]"),L=document.querySelector("[data-menu]"),ne=document.querySelector("[data-menu-close]"),se=document.querySelectorAll(".mob-nav-link");te.addEventListener("click",N);ne.addEventListener("click",N);function N(){L.classList.toggle("is-open")}document.addEventListener("keydown",re);function re(e){e.key==="Escape"&&L.classList.contains("is-open")&&L.classList.remove("is-open")}se.forEach(e=>{e.addEventListener("click",n=>{n.preventDefault();const o=e.getAttribute("href").substring(1),t=document.getElementById(o);t&&(L.classList.remove("is-open"),document.body.style.overflow="",t.scrollIntoView({behavior:"smooth"}))})});
//# sourceMappingURL=index.js.map

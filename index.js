import{a as E,S as N,N as Y,P as T,R as U}from"./assets/vendor-BuJqGh_H.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function t(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(n){if(n.ep)return;n.ep=!0;const a=t(n);fetch(n.href,a)}})();const j="https://sound-wave.b.goit.study/api",B=8;function V(e){alert(e)}async function H(e=1,s=8){const t=await fetch(`${j}/artists?page=${e}&limit=${s}`);if(!t.ok)throw new Error("Не вдалося завантажити артистів");return await t.json()}const O="https://sound-wave.b.goit.study/api/feedbacks";async function P(){try{const e=await fetch(O);if(!e.ok)throw new Error("Failed to load feedbacks");return(await e.json()).data}catch(e){return console.error(e),[]}}async function Q(e){try{return(await E.post(O,e)).data}catch(s){throw console.error("Помилка при відправці фідбеку:",s),s}}const I=document.querySelector(".column-left"),D=document.querySelector(".column-right");fetch("https://sound-wave.b.goit.study/api/artist").then(e=>e.json()).then(e=>{e.forEach((t,o)=>{const n=document.createElement("img");n.src=t.photoUrl,n.alt=t.name,o%2===0?(I.appendChild(n.cloneNode()),I.appendChild(n.cloneNode())):(D.appendChild(n.cloneNode()),D.appendChild(n.cloneNode()))})}).catch(e=>console.error("Error loading artists:",e));const h={artistCardsContainer:document.querySelector("#artists-grid"),loadMoreBtn:document.getElementById("load-more-btn")};function G({_id:e,strArtist:s,genres:t,strArtistThumb:o,strBiographyEN:n}){const a=(t||[]).map(m=>`<span class="genre">${m}</span>`).join(""),i=(n==null?void 0:n.length)>100?n.slice(0,100)+"...":n||"",r=o&&typeof o=="string"&&o.trim()!==""?o:"/img/artists/Placeholder_Image.jpg";return`
    <li class="artist-cards" data-id="${e}">
      <img class="img" src="${r}" alt="${s}" />
      <div class="genres">${a}</div>
      <h3 class="artist-name">${s}</h3>
      <p class="description">${i}</p>
      <button class="learn-more" data-id="${e}">
        Learn More
        <svg class="icon" width="24" height="24">
          <use href="/img/sprite.svg#icon-caret-right-learn-more"></use>
        </svg>
      </button>
    </li>
  `}let L=1;async function x(){try{const e=await H(L,B);if(!e.artists||!Array.isArray(e.artists))throw new Error("Немає артистів у відповіді");const s=e.artists.map(G).join("");h.artistCardsContainer.insertAdjacentHTML("beforeend",s),L*B>=e.total?h.loadMoreBtn.style.display="none":h.loadMoreBtn.style.display="block",L++}catch(e){console.error(e),V("Помилка завантаження артистів"),h.loadMoreBtn.style.display="none"}}h.loadMoreBtn.addEventListener("click",x);document.addEventListener("DOMContentLoaded",()=>{x()});const b=document.querySelector(".modal"),A=b.querySelector(".modal-content"),k=document.querySelector(".loader");k||console.warn("Loader element not found in DOM!");let C=[];function K(){b.classList.add("is-open"),document.body.style.overflow="hidden"}function S(){b.classList.remove("is-open"),document.body.style.overflow="",A.innerHTML="",X()}function X(){C.forEach(({element:e,handler:s})=>{e.removeEventListener("click",s)}),C=[]}function W(){A.querySelectorAll(".youtube-btn").forEach(s=>{const t=()=>{const o=s.dataset.youtube;o&&window.open(o,"_blank")};s.addEventListener("click",t),C.push({element:s,handler:t})})}function z(e){var d;const s=e.yearFormed?e.yearDisbanded?`${e.yearFormed} - ${e.yearDisbanded}`:`${e.yearFormed} - present`:"information missing",t=e.gender||"information missing",o=e.membersCount||"information missing",n=e.country||"information missing",a=e.biography||"information missing";let i=typeof e.genres<"u"?e.genres:typeof e.genre<"u"?e.genre:typeof e.tags<"u"?e.tags:void 0,r=[];Array.isArray(i)?i.length===1&&typeof i[0]=="string"&&i[0].includes(",")?r=i[0].split(",").map(l=>l.trim()).filter(Boolean):r=i.flatMap(l=>typeof l=="string"&&l.includes(",")?l.split(",").map(f=>f.trim()):[typeof l=="string"?l.trim():l]).filter(Boolean):typeof i=="string"&&(r=i.split(",").map(l=>l.trim()).filter(Boolean)),r=Array.from(new Set(r)),console.log("MODAL genresArr:",r,"artist.genres:",e.genres,"artist.genre:",e.genre,"artist.tags:",e.tags);const m=r.length?r.map(l=>`<span class="genre">${l}</span>`).join(" "):'<span class="genre">information missing</span>',u=e.imageUrl||"",p=(d=e.albums)!=null&&d.length?`<div class="albums-grid">${e.albums.map(l=>{const f=`
            <tr>
              <th>Track</th>
              <th>Time</th>
              <th>Link</th>
            </tr>`,y=l.tracks.map(g=>{const v=g.youtubeUrl?`<a href="${g.youtubeUrl}" class="youtube-link" target="_blank" rel="noopener noreferrer" title="Open on YouTube">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" style="vertical-align:middle;"><path d="M23.498 6.186a2.994 2.994 0 0 0-2.112-2.12C19.228 3.5 12 3.5 12 3.5s-7.228 0-9.386.566A2.994 2.994 0 0 0 .502 6.186C0 8.344 0 12 0 12s0 3.656.502 5.814a2.994 2.994 0 0 0 2.112 2.12C4.772 20.5 12 20.5 12 20.5s7.228 0 9.386-.566a2.994 2.994 0 0 0 2.112-2.12C24 15.656 24 12 24 12s0-3.656-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  </a>`:"";return`
                <tr>
                  <td>${g.title}</td>
                  <td>${g.duration}</td>
                  <td>${v}</td>
                </tr>`}).join("");return`
            <div class="album">
              <h3>${l.title}</h3>
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
      <img class="artist-image" src="${u}" alt="${e.name}">
      <div class="artist-info">
        <div class="artist-info-grid2">
          <div class="info-col">
            <div class="info-block">
              <span class="info-label">Years active</span>
              <span class="info-value">${s}</span>
            </div>
            <div class="info-block">
              <span class="info-label">Members</span>
              <span class="info-value">${o}</span>
            </div>
          </div>
          <div class="info-col">
            <div class="info-block">
              <span class="info-label">Sex</span>
              <span class="info-value">${t}</span>
            </div>
            <div class="info-block">
              <span class="info-label">Country</span>
              <span class="info-value">${n}</span>
            </div>
          </div>
        </div>
        <p class="biography"><strong>Biography</strong> ${a}</p>
        <div class="genres">
          <strong>Genres</strong> ${m}
        </div>
      </div>
    </div>
    <div class="albums">
      <h3 class="title_album">Albums</h3>
      ${p}
    </div>`,A.querySelector(".button-close").addEventListener("click",S),W()}async function Z(e){try{k.style.display="flex",A.innerHTML="",K();const t=(await E.get(`https://sound-wave.b.goit.study/api/artists/${e}`)).data;console.log("MODAL artistRaw:",t,"id:",t._id,"name:",t.strArtist||t.name),console.log("MODAL artistRaw.genres:",t.genres,"typeof:",typeof t.genres);let o=t.genres;!o&&typeof t.genres<"u"&&(o=t.genres),console.log("MODAL genres for artist:",o,"typeof:",typeof o,"id:",t._id,"name:",t.strArtist||t.name);const n={name:t.strArtist||t.name||"No name",imageUrl:t.strArtistThumb||t.image||"",yearFormed:t.intFormedYear||t.yearFormed||"",yearDisbanded:t.intDiedYear&&t.intDiedYear!=="null"?t.intDiedYear:"",gender:t.strGender||t.gender||"",membersCount:t.intMembers||t.membersCount||"",country:t.strCountry||t.country||"",biography:t.strBiographyEN||t.bio||"",genres:t.genres,genre:t.genre,tags:t.tags,albums:[]};console.log("MODAL artist.genres before modal:",n.genres,"typeof:",typeof n.genres,"id:",t._id,"name:",t.strArtist||t.name);let a=[];if(t.albumsList&&Array.isArray(t.albumsList))a=t.albumsList;else{const r=(await E.get(`https://sound-wave.b.goit.study/api/artists/${e}/albums`)).data;console.log("allAlbums:",r),Array.isArray(r)?a=r:r&&Array.isArray(r.albums)?a=r.albums:r&&Array.isArray(r.albumsList)?a=r.albumsList:r&&Array.isArray(r.results)?a=r.results:(console.warn("Unknown albums structure:",r),a=[])}console.log("albumsArray:",a),n.albums=a.map(i=>({title:i.strAlbum||i.title||"No title",tracks:Array.isArray(i.tracks)?i.tracks.map(r=>({title:r.strTrack||r.title||"No title",duration:r.intDuration?Math.floor(r.intDuration/6e4)+":"+String(Math.floor(r.intDuration%6e4/1e3)).padStart(2,"0"):"",youtubeUrl:r.movie&&r.movie!=="null"?r.movie:""})):[]})),z(n)}catch(s){A.innerHTML="<p>Помилка завантаження даних</p>",console.error(s)}finally{k.style.display="none"}}const $=document.querySelector("#artists-grid");$&&$.addEventListener("click",e=>{const s=e.target.closest(".learn-more");if(!s)return;const t=s.closest(".artist-cards");if(!t)return;const o=t.dataset.id;Z(o)});b.addEventListener("click",e=>{e.target===b&&S()});window.addEventListener("keydown",e=>{e.key==="Escape"&&S()});const F="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGPSURBVHgBrVQ7UsMwEN1dh9D6Bjg3CDVFBA1tOAHDCYiHCdAldExgxgkcgHAEOmjAFS2+AeYGrjNEYpU4HmPFtvi8GY+l1dvV7tNKABboi9vjs72bwIaLdYSeCLwm0rseSyV3r0M/rOIT1GCTnEG2O0G3jo+22aVIZkq2xqGfwG8y3AAQBZPbJOhV+VQGRKSBYVR0WOnDZblNzkTx7vqjxd/ZYjE8BCVK/CKlMEKYf0iWgXVL2Df+5K/BGr0xwdNirgTlQFCDNqJq6wIp8wHgxBJSSj7AfwHlxHmNnx53vH1kwQT8BSgvRs/+MGubExF0HaQ7HrrwMyRcpX8V+tNF3PzKOfedRHrhoWcXC2IOdsDBopXhW9tchn48593AFsvMorzJ6EO0z07D4BoBiZwOWALNm7TmpqjSZjapSJ3KgHxruFmNU471s8XiH+lxYc3tL30yNAoTkZsmLPpkBjDOvS7TUxEMIXfH07LXnzKl2SlQISm5PQr9YfGp0jZea/Fm90sulD5lkJbtgSXWcb8AOwmLEyrUuDIAAAAASUVORK5CYII=",R="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADuSURBVHgBrZOBEYIwDEVTJsAJ7AhsYN2AEXAC2UA28NzAFZzAFdwAnEA2qImEEwJXwpV397lS0t9QPgAKvPdn1BW2AI2s/+OW6hNY5jIY5xCD6I74oFKI6NCJezIrIaLD2k+pQ2sMv4Lj3XvtURamHfa8WG9Uy2pIhne0sA0tneEDtuP2u2KXlY+nGlnjRM6xWAutKWb79V3u6hVmVJsFD4E71TL5c+aCbUGP1RgeQI+TE0ZO0CFDF24NrTFmN5xIhFk2Y9agjqgTj4ekwY+CD0sRB8pnKmpkZsuQYV/8pAgF6ihed64tIETISFP7BVsQmECc0IB0AAAAAElFTkSuQmCC";function J(e){return Math.round(e)}function _(e){return e.map(s=>({...s,roundedRating:J(s.rating)}))}const ee=async(e=3)=>{try{const s=await P(),t=[],o=new Set;for(;t.length<e&&o.size<s.length;){const n=Math.floor(Math.random()*s.length);o.has(n)||(o.add(n),t.push(s[n]))}return t}catch(s){return console.error("Не вдалося отримати відгуки:",s),[]}};document.addEventListener("DOMContentLoaded",()=>{(async()=>{try{const e=await ee(3),s=_(e),t=document.querySelector(".swiper-wrapper");t.innerHTML="",s.forEach((n,a)=>{const{name:i,descr:r,roundedRating:m}=n,u=document.createElement("div");u.className="swiper-slide",u.innerHTML=`
          <div class="feedback-card">
            <div class="rating" data-score="${m}"></div>
            <p class="feedback_description">${r}</p>
            <h3 class="feedback_name">${i}</h3>
          </div>
        `,t.appendChild(u)}),new N(".swiper",{direction:"horizontal",loop:!1,modules:[Y,T],pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},simulateTouch:!0,grabCursor:!0,keyboard:{enabled:!0,pageUpDown:!0,onlyInViewport:!0},mousewheel:{eventsTarget:".swiper"}}),document.querySelectorAll(".rating").forEach(n=>{const a=parseInt(n.dataset.score,10);new U(n,{starOn:F,starOff:R,score:a,readOnly:!0}).init()})}catch(e){console.error("Помилка під час обробки відгуків:",e)}})()});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector("[data-feedback-modal]"),s=document.querySelector("[data-feedback-modal-open]"),t=document.querySelector("[data-feedback-modal-close]"),o=document.getElementById("feedback-star-rating"),n=e.querySelector(".feedback-modal-form");function a(){document.body.classList.add("body-lock")}function i(){document.body.classList.remove("body-lock")}s==null||s.addEventListener("click",()=>{e.classList.remove("is-hidden"),a()}),t==null||t.addEventListener("click",()=>{e.classList.add("is-hidden"),i()}),e==null||e.addEventListener("click",u=>{u.target===e&&(e.classList.add("is-hidden"),i())}),document.addEventListener("keydown",u=>{u.key==="Escape"&&!e.classList.contains("is-hidden")&&(e.classList.add("is-hidden"),i())});let r=0;function m(u){o.innerHTML="";for(let p=1;p<=5;p++){const d=document.createElement("img");d.src=p<=u?F:R,d.alt=`Star ${p}`,d.dataset.value=p,d.style.cursor="pointer",d.addEventListener("click",()=>{r=p,m(r)}),o.appendChild(d)}}m(0),n.setAttribute("novalidate",!0),n.addEventListener("submit",async u=>{u.preventDefault(),n.querySelectorAll("input, textarea").forEach(c=>{c.classList.remove("input-error");const M=c.parentElement.querySelector(".error-text");M&&M.remove()});let d=!1;const l=n.querySelector("#user-name"),f=l.value.trim();if(f.length<2||f.length>16){l.classList.add("input-error");const c=document.createElement("div");c.classList.add("error-text"),c.textContent="Please enter a valid name (2-16 characters)",l.parentElement.appendChild(c),d=!0}const y=n.querySelector("#user-message"),g=y.value.trim();if(g.length<10||g.length>512){y.classList.add("input-error");const c=document.createElement("div");c.classList.add("error-text"),c.textContent="Please enter a message (10-512 characters)",y.parentElement.appendChild(c),d=!0}const v=o.querySelector(".error-text");if(v&&v.remove(),r===0){o.classList.add("input-error");const c=document.createElement("div");c.classList.add("error-text"),c.textContent="Please choose a rating",o.appendChild(c),d=!0}else o.classList.remove("input-error");if(!d)try{await Q({name:f,rating:r,descr:g}),e.classList.add("is-hidden"),i(),n.reset(),r=0,m(r)}catch(c){alert("Помилка при відправці фідбеку. Спробуйте пізніше."),console.error(c)}})});const te=document.querySelector("[data-header-open]"),w=document.querySelector("[data-menu]"),ne=document.querySelector("[data-menu-close]"),se=document.querySelectorAll(".mob-nav-link");te.addEventListener("click",q);ne.addEventListener("click",q);function q(){w.classList.toggle("is-open")}document.addEventListener("keydown",re);function re(e){e.key==="Escape"&&w.classList.contains("is-open")&&w.classList.remove("is-open")}se.forEach(e=>{e.addEventListener("click",s=>{s.preventDefault();const t=e.getAttribute("href").substring(1),o=document.getElementById(t);o&&(w.classList.remove("is-open"),document.body.style.overflow="",o.scrollIntoView({behavior:"smooth"}))})});
//# sourceMappingURL=index.js.map

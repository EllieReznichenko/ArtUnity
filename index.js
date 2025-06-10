import{a as C,S as F,N as R,P as N,R as Y}from"./assets/vendor-BuJqGh_H.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function t(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(n){if(n.ep)return;n.ep=!0;const a=t(n);fetch(n.href,a)}})();const U="https://sound-wave.b.goit.study/api",L=8;function T(e){alert(e)}async function j(e=1,s=8){const t=await fetch(`${U}/artists?page=${e}&limit=${s}`);if(!t.ok)throw new Error("Не вдалося завантажити артистів");return await t.json()}const x="https://sound-wave.b.goit.study/api/feedbacks";async function H(){try{const e=await fetch(x);if(!e.ok)throw new Error("Failed to load feedbacks");return(await e.json()).data}catch(e){return console.error(e),[]}}const E=document.querySelector(".column-left"),M=document.querySelector(".column-right");fetch("https://sound-wave.b.goit.study/api/artist").then(e=>e.json()).then(e=>{e.forEach((t,o)=>{const n=document.createElement("img");n.src=t.photoUrl,n.alt=t.name,o%2===0?(E.appendChild(n.cloneNode()),E.appendChild(n.cloneNode())):(M.appendChild(n.cloneNode()),M.appendChild(n.cloneNode()))})}).catch(e=>console.error("Error loading artists:",e));const m={artistCardsContainer:document.querySelector("#artists-grid"),loadMoreBtn:document.getElementById("load-more-btn")};function V({_id:e,strArtist:s,genres:t,strArtistThumb:o,strBiographyEN:n}){const a=(t||[]).map(d=>`<span class="genre">${d}</span>`).join(""),i=(n==null?void 0:n.length)>100?n.slice(0,100)+"...":n||"",r=o&&typeof o=="string"&&o.trim()!==""?o:"/img/artists/Placeholder_Image.jpg";return`
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
  `}let y=1;async function k(){try{const e=await j(y,L);if(!e.artists||!Array.isArray(e.artists))throw new Error("Немає артистів у відповіді");const s=e.artists.map(V).join("");m.artistCardsContainer.insertAdjacentHTML("beforeend",s),y*L>=e.total?m.loadMoreBtn.style.display="none":m.loadMoreBtn.style.display="block",y++}catch(e){console.error(e),T("Помилка завантаження артистів"),m.loadMoreBtn.style.display="none"}}m.loadMoreBtn.addEventListener("click",k);document.addEventListener("DOMContentLoaded",()=>{k()});const g=document.querySelector(".modal"),c=g.querySelector(".modal-content"),b=document.querySelector(".loader");b||console.warn("Loader element not found in DOM!");let h=[];function q(){g.classList.add("is-open"),document.body.style.overflow="hidden"}function v(){g.classList.remove("is-open"),document.body.style.overflow="",c.innerHTML="",Q()}function Q(){h.forEach(({element:e,handler:s})=>{e.removeEventListener("click",s)}),h=[]}function P(){c.querySelectorAll(".youtube-btn").forEach(s=>{const t=()=>{const o=s.dataset.youtube;o&&window.open(o,"_blank")};s.addEventListener("click",t),h.push({element:s,handler:t})})}function G(e){var w;const s=e.yearFormed?e.yearDisbanded?`${e.yearFormed} - ${e.yearDisbanded}`:`${e.yearFormed} - present`:"information missing",t=e.gender||"information missing",o=e.membersCount||"information missing",n=e.country||"information missing",a=e.biography||"information missing";let i=typeof e.genres<"u"?e.genres:typeof e.genre<"u"?e.genre:typeof e.tags<"u"?e.tags:void 0,r=[];Array.isArray(i)?i.length===1&&typeof i[0]=="string"&&i[0].includes(",")?r=i[0].split(",").map(l=>l.trim()).filter(Boolean):r=i.flatMap(l=>typeof l=="string"&&l.includes(",")?l.split(",").map(f=>f.trim()):[typeof l=="string"?l.trim():l]).filter(Boolean):typeof i=="string"&&(r=i.split(",").map(l=>l.trim()).filter(Boolean)),r=Array.from(new Set(r)),console.log("MODAL genresArr:",r,"artist.genres:",e.genres,"artist.genre:",e.genre,"artist.tags:",e.tags);const d=r.length?r.map(l=>`<span class="genre">${l}</span>`).join(" "):'<span class="genre">information missing</span>',u=e.imageUrl||"",D=(w=e.albums)!=null&&w.length?`<div class="albums-grid">${e.albums.map(l=>{const f=`
            <tr>
              <th>Track</th>
              <th>Time</th>
              <th>Link</th>
            </tr>`,$=l.tracks.map(p=>{const O=p.youtubeUrl?`<a href="${p.youtubeUrl}" class="youtube-link" target="_blank" rel="noopener noreferrer" title="Open on YouTube">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" style="vertical-align:middle;"><path d="M23.498 6.186a2.994 2.994 0 0 0-2.112-2.12C19.228 3.5 12 3.5 12 3.5s-7.228 0-9.386.566A2.994 2.994 0 0 0 .502 6.186C0 8.344 0 12 0 12s0 3.656.502 5.814a2.994 2.994 0 0 0 2.112 2.12C4.772 20.5 12 20.5 12 20.5s7.228 0 9.386-.566a2.994 2.994 0 0 0 2.112-2.12C24 15.656 24 12 24 12s0-3.656-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  </a>`:"";return`
                <tr>
                  <td>${p.title}</td>
                  <td>${p.duration}</td>
                  <td>${O}</td>
                </tr>`}).join("");return`
            <div class="album">
              <h3>${l.title}</h3>
              <table>
                <thead>${f}</thead>
                <tbody>${$}</tbody>
              </table>
            </div>`}).join("")}</div>`:"<p>Albums information missing</p>";c.innerHTML=`
    <div class="modal-header">
      <h2 class="artist-mod-title">${e.name}</h2>
      <button class="button-close" aria-label="Close">
        <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M20.5933 2.20301C20.4794 1.78041 20.2568 1.39501 19.9477 1.08518C19.6386 0.775338 19.2537 0.551868 18.8313 0.437007C17.2653 0.00700739 11.0003 7.59651e-06 11.0003 7.59651e-06C11.0003 7.59651e-06 4.73633 -0.00699261 3.16933 0.404007C2.74725 0.524154 2.36315 0.750785 2.0539 1.06214C1.74464 1.3735 1.52062 1.75913 1.40333 2.18201C0.99033 3.74801 0.98633 6.99601 0.98633 6.99601C0.98633 6.99601 0.98233 10.26 1.39233 11.81C1.62233 12.667 2.29733 13.344 3.15533 13.575C4.73733 14.005 10.9853 14.012 10.9853 14.012C10.9853 14.012 17.2503 14.019 18.8163 13.609C19.2388 13.4943 19.6241 13.2714 19.934 12.9622C20.2439 12.653 20.4677 12.2682 20.5833 11.846C20.9973 10.281 21.0003 7.03401 21.0003 7.03401C21.0003 7.03401 21.0203 3.76901 20.5933 2.20301ZM8.99633 10.005L9.00133 4.00501L14.2083 7.01001L8.99633 10.005Z" fill="white" />
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
          <strong>Genres</strong> ${d}
        </div>
      </div>
    </div>
    <div class="albums">
      <h3>Albums</h3>
      ${D}
    </div>`,c.querySelector(".button-close").addEventListener("click",v),P()}async function K(e){try{b.style.display="flex",c.innerHTML="",q();const t=(await C.get(`https://sound-wave.b.goit.study/api/artists/${e}`)).data;console.log("MODAL artistRaw:",t,"id:",t._id,"name:",t.strArtist||t.name),console.log("MODAL artistRaw.genres:",t.genres,"typeof:",typeof t.genres);let o=t.genres;!o&&typeof t.genres<"u"&&(o=t.genres),console.log("MODAL genres for artist:",o,"typeof:",typeof o,"id:",t._id,"name:",t.strArtist||t.name);const n={name:t.strArtist||t.name||"No name",imageUrl:t.strArtistThumb||t.image||"",yearFormed:t.intFormedYear||t.yearFormed||"",yearDisbanded:t.intDiedYear&&t.intDiedYear!=="null"?t.intDiedYear:"",gender:t.strGender||t.gender||"",membersCount:t.intMembers||t.membersCount||"",country:t.strCountry||t.country||"",biography:t.strBiographyEN||t.bio||"",genres:t.genres,genre:t.genre,tags:t.tags,albums:[]};console.log("MODAL artist.genres before modal:",n.genres,"typeof:",typeof n.genres,"id:",t._id,"name:",t.strArtist||t.name);let a=[];if(t.albumsList&&Array.isArray(t.albumsList))a=t.albumsList;else{const r=(await C.get(`https://sound-wave.b.goit.study/api/artists/${e}/albums`)).data;console.log("allAlbums:",r),Array.isArray(r)?a=r:r&&Array.isArray(r.albums)?a=r.albums:r&&Array.isArray(r.albumsList)?a=r.albumsList:r&&Array.isArray(r.results)?a=r.results:(console.warn("Unknown albums structure:",r),a=[])}console.log("albumsArray:",a),n.albums=a.map(i=>({title:i.strAlbum||i.title||"No title",tracks:Array.isArray(i.tracks)?i.tracks.map(r=>({title:r.strTrack||r.title||"No title",duration:r.intDuration?Math.floor(r.intDuration/6e4)+":"+String(Math.floor(r.intDuration%6e4/1e3)).padStart(2,"0"):"",youtubeUrl:r.movie&&r.movie!=="null"?r.movie:""})):[]})),G(n)}catch(s){c.innerHTML="<p>Помилка завантаження даних</p>",console.error(s)}finally{b.style.display="none"}}const S=document.querySelector("#artists-grid");S&&S.addEventListener("click",e=>{const s=e.target.closest(".learn-more");if(!s)return;const t=s.closest(".artist-card");if(!t)return;const o=t.dataset.id;K(o)});g.addEventListener("click",e=>{e.target===g&&v()});window.addEventListener("keydown",e=>{e.key==="Escape"&&v()});const X="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGPSURBVHgBrVQ7UsMwEN1dh9D6Bjg3CDVFBA1tOAHDCYiHCdAldExgxgkcgHAEOmjAFS2+AeYGrjNEYpU4HmPFtvi8GY+l1dvV7tNKABboi9vjs72bwIaLdYSeCLwm0rseSyV3r0M/rOIT1GCTnEG2O0G3jo+22aVIZkq2xqGfwG8y3AAQBZPbJOhV+VQGRKSBYVR0WOnDZblNzkTx7vqjxd/ZYjE8BCVK/CKlMEKYf0iWgXVL2Df+5K/BGr0xwdNirgTlQFCDNqJq6wIp8wHgxBJSSj7AfwHlxHmNnx53vH1kwQT8BSgvRs/+MGubExF0HaQ7HrrwMyRcpX8V+tNF3PzKOfedRHrhoWcXC2IOdsDBopXhW9tchn48593AFsvMorzJ6EO0z07D4BoBiZwOWALNm7TmpqjSZjapSJ3KgHxruFmNU471s8XiH+lxYc3tL30yNAoTkZsmLPpkBjDOvS7TUxEMIXfH07LXnzKl2SlQISm5PQr9YfGp0jZea/Fm90sulD5lkJbtgSXWcb8AOwmLEyrUuDIAAAAASUVORK5CYII=",Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADuSURBVHgBrZOBEYIwDEVTJsAJ7AhsYN2AEXAC2UA28NzAFZzAFdwAnEA2qImEEwJXwpV397lS0t9QPgAKvPdn1BW2AI2s/+OW6hNY5jIY5xCD6I74oFKI6NCJezIrIaLD2k+pQ2sMv4Lj3XvtURamHfa8WG9Uy2pIhne0sA0tneEDtuP2u2KXlY+nGlnjRM6xWAutKWb79V3u6hVmVJsFD4E71TL5c+aCbUGP1RgeQI+TE0ZO0CFDF24NrTFmN5xIhFk2Y9agjqgTj4ekwY+CD0sRB8pnKmpkZsuQYV/8pAgF6ihed64tIETISFP7BVsQmECc0IB0AAAAAElFTkSuQmCC";function B(e){return Math.round(e)}function W(e){return e.map(s=>({...s,roundedRating:B(s.rating)}))}console.log(B);const z=async(e=3)=>{try{const s=await H(),t=[],o=new Set;for(;t.length<e&&o.size<s.length;){const n=Math.floor(Math.random()*s.length);o.has(n)||(o.add(n),t.push(s[n]))}return t}catch(s){return console.error("Не вдалося отримати відгуки:",s),[]}};document.addEventListener("DOMContentLoaded",()=>{(async()=>{try{const e=await z(3),s=W(e),t=document.querySelector(".swiper-wrapper");t.innerHTML="",s.forEach((n,a)=>{const{name:i,descr:r,roundedRating:d}=n,u=document.createElement("div");u.className="swiper-slide",u.innerHTML=`
          <div class="feedback-card">
            <div class="rating" data-score="${d}"></div>
            <p class="feedback_description">${r}</p>
            <h3 class="feedback_name">${i}</h3>
          </div>
        `,t.appendChild(u)}),new F(".swiper",{direction:"horizontal",loop:!1,modules:[R,N],pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},simulateTouch:!0,grabCursor:!0,keyboard:{enabled:!0,pageUpDown:!0,onlyInViewport:!0},mousewheel:{eventsTarget:".swiper"}}),document.querySelectorAll(".rating").forEach(n=>{const a=parseInt(n.dataset.score,10);new Y(n,{starOn:X,starOff:Z,score:a,readOnly:!0}).init()})}catch(e){console.error("Помилка під час обробки відгуків:",e)}})()});const J=document.querySelector("[data-header-open]"),A=document.querySelector("[data-menu]"),_=document.querySelector("[data-menu-close]"),ee=document.querySelectorAll(".mob-nav-link");J.addEventListener("click",I);_.addEventListener("click",I);function I(){A.classList.toggle("is-open")}document.addEventListener("keydown",te);function te(e){e.key==="Escape"&&A.classList.contains("is-open")&&A.classList.remove("is-open")}ee.forEach(e=>{e.addEventListener("click",s=>{s.preventDefault();const t=e.getAttribute("href").substring(1),o=document.getElementById(t);o&&(A.classList.remove("is-open"),document.body.style.overflow="",o.scrollIntoView({behavior:"smooth"}))})});
//# sourceMappingURL=index.js.map

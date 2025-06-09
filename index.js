import{a as v,S as $,N as D,P as O,R as F}from"./assets/vendor-BuJqGh_H.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function t(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(n){if(n.ep)return;n.ep=!0;const a=t(n);fetch(n.href,a)}})();const Y="https://sound-wave.b.goit.study/api",L=8;function R(e){alert(e)}async function T(e=1,r=8){const t=await fetch(`${Y}/artists?page=${e}&limit=${r}`);if(!t.ok)throw new Error("Не вдалося завантажити артистів");return await t.json()}const U="https://sound-wave.b.goit.study/api/feedbacks";async function N(){try{const e=await fetch(U);if(!e.ok)throw new Error("Failed to load feedbacks");return(await e.json()).data}catch(e){return console.error(e),[]}}const m={artistCardsContainer:document.querySelector("#artists-grid"),loadMoreBtn:document.getElementById("load-more-btn")};function j({_id:e,strArtist:r,genres:t,strArtistThumb:s,strBiographyEN:n}){const a=(t||[]).map(l=>`<span class="genre">${l}</span>`).join(""),i=(n==null?void 0:n.length)>100?n.slice(0,100)+"...":n||"",o=s&&typeof s=="string"&&s.trim()!==""?s:"/img/artists/Placeholder_Image.jpg";return`
    <li class="artist-card" data-id="${e}">
      <img src="${o}" alt="${r}" />
      <div class="genres">${a}</div>
      <h3 class="artist-name">${r}</h3>
      <p class="description">${i}</p>
      <button class="learn-more" data-id="${e}">
        Learn More
        <svg class="icon" width="24" height="24">
          <use href="/img/sprite.svg#icon-caret-right-learn-more"></use>
        </svg>
      </button>
    </li>
  `}let f=1;async function M(){try{const e=await T(f,L);if(!e.artists||!Array.isArray(e.artists))throw new Error("Немає артистів у відповіді");const r=e.artists.map(j).join("");m.artistCardsContainer.insertAdjacentHTML("beforeend",r),f*L>=e.total?m.loadMoreBtn.style.display="none":m.loadMoreBtn.style.display="block",f++}catch(e){console.error(e),R("Помилка завантаження артистів"),m.loadMoreBtn.style.display="none"}}m.loadMoreBtn.addEventListener("click",M);document.addEventListener("DOMContentLoaded",()=>{M()});const A=document.querySelector(".modal"),d=A.querySelector(".modal-content"),y=document.querySelector(".loader");y||console.warn("Loader element not found in DOM!");let b=[];function x(){A.classList.add("is-open"),document.body.style.overflow="hidden"}function h(){A.classList.remove("is-open"),document.body.style.overflow="",d.innerHTML="",H()}function H(){b.forEach(({element:e,handler:r})=>{e.removeEventListener("click",r)}),b=[]}function V(){d.querySelectorAll(".youtube-btn").forEach(r=>{const t=()=>{const s=r.dataset.youtube;s&&window.open(s,"_blank")};r.addEventListener("click",t),b.push({element:r,handler:t})})}function q(e){var w;const r=e.yearFormed?e.yearDisbanded?`${e.yearFormed} - ${e.yearDisbanded}`:`${e.yearFormed} - present`:"information missing",t=e.gender||"information missing",s=e.membersCount||"information missing",n=e.country||"information missing",a=e.biography||"information missing";let i=[];Array.isArray(e.genres)?i=e.genres.filter(Boolean):typeof e.genres=="string"&&(i=e.genres.split(",").map(c=>c.trim()).filter(Boolean));const o=i.length?i.map(c=>`<span class="genre">${c}</span>`).join(" "):"information missing",l=e.imageUrl||"",u=(w=e.albums)!=null&&w.length?`<div class="albums-grid">${e.albums.map(c=>{const S=`
            <tr>
              <th>Track</th>
              <th>Time</th>
              <th>Link</th>
            </tr>`,B=c.tracks.map(g=>{const I=g.youtubeUrl?`<a href="${g.youtubeUrl}" target="_blank" rel="noopener noreferrer">YouTube</a>`:"";return`
                <tr>
                  <td>${g.title}</td>
                  <td>${g.duration}</td>
                  <td>${I}</td>
                </tr>`}).join("");return`
            <div class="album">
              <h3>${c.title}</h3>
              <table>
                <thead>${S}</thead>
                <tbody>${B}</tbody>
              </table>
            </div>`}).join("")}</div>`:"<p>Albums information missing</p>";d.innerHTML=`
    <button class="button-close" aria-label="Close">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        <path d="M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      </svg>
    </button>
    <h2 class="artist-mod-title">${e.name}</h2>
    ${l?`<img class="artist-image" src="${l}" alt="${e.name}" style="width: 576px; height: 354px;">`:""}
    <div class="artist-info">
      <p><strong>Years active</strong> ${r}</p>
      <p><strong>Sex</strong> ${t}</p>
      <p><strong>Members</strong> ${s}</p>
      <p><strong>Country</strong> ${n}</p>
      <p class="biography"><strong>Biography</strong> ${a}</p>
      <div class="genres">
        <strong>Genres</strong> ${o}
      </div>
    </div>
    <div class="albums">
      <h3>Albums</h3>
      ${u}
    </div>`,d.querySelector(".button-close").addEventListener("click",h),V()}async function Q(e){try{y.style.display="block",d.innerHTML="",x();const t=(await v.get(`https://sound-wave.b.goit.study/api/artists/${e}`)).data;console.log("MODAL artistRaw:",t,"id:",t._id,"name:",t.strArtist||t.name),console.log("MODAL artistRaw.genres:",t.genres,"typeof:",typeof t.genres);let s=t.genres;!s&&typeof t.genres<"u"&&(s=t.genres),console.log("MODAL genres for artist:",s,"typeof:",typeof s,"id:",t._id,"name:",t.strArtist||t.name);const n={name:t.strArtist||t.name||"No name",imageUrl:t.strArtistThumb||t.image||"",yearFormed:t.intFormedYear||t.yearFormed||"",yearDisbanded:t.intDiedYear&&t.intDiedYear!=="null"?t.intDiedYear:"",gender:t.strGender||t.gender||"",membersCount:t.intMembers||t.membersCount||"",country:t.strCountry||t.country||"",biography:t.strBiographyEN||t.bio||"",genres:s,albums:[]};console.log("MODAL artist.genres before modal:",n.genres,"typeof:",typeof n.genres,"id:",t._id,"name:",t.strArtist||t.name);let a=[];if(t.albumsList&&Array.isArray(t.albumsList))a=t.albumsList;else{const o=(await v.get(`https://sound-wave.b.goit.study/api/artists/${e}/albums`)).data;console.log("allAlbums:",o),Array.isArray(o)?a=o:o&&Array.isArray(o.albums)?a=o.albums:o&&Array.isArray(o.albumsList)?a=o.albumsList:o&&Array.isArray(o.results)?a=o.results:(console.warn("Unknown albums structure:",o),a=[])}console.log("albumsArray:",a),n.albums=a.map(i=>({title:i.strAlbum||i.title||"No title",tracks:Array.isArray(i.tracks)?i.tracks.map(o=>({title:o.strTrack||o.title||"No title",duration:o.intDuration?Math.floor(o.intDuration/6e4)+":"+String(Math.floor(o.intDuration%6e4/1e3)).padStart(2,"0"):"",youtubeUrl:o.movie&&o.movie!=="null"?o.movie:""})):[]})),q(n)}catch(r){d.innerHTML="<p>Помилка завантаження даних</p>",console.error(r)}finally{y.style.display="none"}}const E=document.querySelector(".artists-grid");E&&E.addEventListener("click",e=>{const r=e.target.closest(".learn-more");if(!r)return;const t=r.closest(".artist-card");if(!t)return;const s=t.dataset.id;Q(s)});A.addEventListener("click",e=>{e.target===A&&h()});window.addEventListener("keydown",e=>{e.key==="Escape"&&h()});const P="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGPSURBVHgBrVQ7UsMwEN1dh9D6Bjg3CDVFBA1tOAHDCYiHCdAldExgxgkcgHAEOmjAFS2+AeYGrjNEYpU4HmPFtvi8GY+l1dvV7tNKABboi9vjs72bwIaLdYSeCLwm0rseSyV3r0M/rOIT1GCTnEG2O0G3jo+22aVIZkq2xqGfwG8y3AAQBZPbJOhV+VQGRKSBYVR0WOnDZblNzkTx7vqjxd/ZYjE8BCVK/CKlMEKYf0iWgXVL2Df+5K/BGr0xwdNirgTlQFCDNqJq6wIp8wHgxBJSSj7AfwHlxHmNnx53vH1kwQT8BSgvRs/+MGubExF0HaQ7HrrwMyRcpX8V+tNF3PzKOfedRHrhoWcXC2IOdsDBopXhW9tchn48593AFsvMorzJ6EO0z07D4BoBiZwOWALNm7TmpqjSZjapSJ3KgHxruFmNU471s8XiH+lxYc3tL30yNAoTkZsmLPpkBjDOvS7TUxEMIXfH07LXnzKl2SlQISm5PQr9YfGp0jZea/Fm90sulD5lkJbtgSXWcb8AOwmLEyrUuDIAAAAASUVORK5CYII=",G="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADuSURBVHgBrZOBEYIwDEVTJsAJ7AhsYN2AEXAC2UA28NzAFZzAFdwAnEA2qImEEwJXwpV397lS0t9QPgAKvPdn1BW2AI2s/+OW6hNY5jIY5xCD6I74oFKI6NCJezIrIaLD2k+pQ2sMv4Lj3XvtURamHfa8WG9Uy2pIhne0sA0tneEDtuP2u2KXlY+nGlnjRM6xWAutKWb79V3u6hVmVJsFD4E71TL5c+aCbUGP1RgeQI+TE0ZO0CFDF24NrTFmN5xIhFk2Y9agjqgTj4ekwY+CD0sRB8pnKmpkZsuQYV/8pAgF6ihed64tIETISFP7BVsQmECc0IB0AAAAAElFTkSuQmCC";function C(e){return Math.round(e)}function K(e){return e.map(r=>({...r,roundedRating:C(r.rating)}))}console.log(C);const X=async(e=3)=>{try{const r=await N(),t=[],s=new Set;for(;t.length<e&&s.size<r.length;){const n=Math.floor(Math.random()*r.length);s.has(n)||(s.add(n),t.push(r[n]))}return t}catch(r){return console.error("Не вдалося отримати відгуки:",r),[]}};document.addEventListener("DOMContentLoaded",()=>{(async()=>{try{const e=await X(3),r=K(e),t=document.querySelector(".swiper-wrapper");t.innerHTML="",r.forEach((n,a)=>{const{name:i,descr:o,roundedRating:l}=n,u=document.createElement("div");u.className="swiper-slide",u.innerHTML=`
          <div class="feedback-card">
            <div class="rating" data-score="${l}"></div>
            <p class="feedback_description">${o}</p>
            <h3 class="feedback_name">${i}</h3>
          </div>
        `,t.appendChild(u)}),new $(".swiper",{direction:"horizontal",loop:!1,modules:[D,O],pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},simulateTouch:!0,grabCursor:!0,keyboard:{enabled:!0,pageUpDown:!0,onlyInViewport:!0},mousewheel:{eventsTarget:".swiper"}}),document.querySelectorAll(".rating").forEach(n=>{const a=parseInt(n.dataset.score,10);new F(n,{starOn:P,starOff:G,score:a,readOnly:!0}).init()})}catch(e){console.error("Помилка під час обробки відгуків:",e)}})()});const W=document.querySelector("[data-header-open]"),p=document.querySelector("[data-menu]"),Z=document.querySelector("[data-menu-close]"),J=document.querySelectorAll(".mob-nav-link");W.addEventListener("click",k);Z.addEventListener("click",k);function k(){p.classList.toggle("is-open")}document.addEventListener("keydown",z);function z(e){e.key==="Escape"&&p.classList.contains("is-open")&&p.classList.remove("is-open")}J.forEach(e=>{e.addEventListener("click",r=>{r.preventDefault();const t=e.getAttribute("href").substring(1),s=document.getElementById(t);s&&(p.classList.remove("is-open"),document.body.style.overflow="",s.scrollIntoView({behavior:"smooth"}))})});
//# sourceMappingURL=index.js.map

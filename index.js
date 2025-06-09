import{a as k,S as C,N as S,P as R,R as z}from"./assets/vendor-BuJqGh_H.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();const B=document.querySelector("[data-header-open]"),h=document.querySelector("[data-menu]"),T=document.querySelector("[data-menu-close]"),_=document.querySelectorAll(".mob-nav-link");B.addEventListener("click",E);T.addEventListener("click",E);function E(){h.classList.toggle("is-open")}document.addEventListener("keydown",H);function H(e){e.key==="Escape"&&h.classList.contains("is-open")&&h.classList.remove("is-open")}_.forEach(e=>{e.addEventListener("click",n=>{n.preventDefault();const t=e.getAttribute("href").substring(1),r=document.getElementById(t);r&&(h.classList.remove("is-open"),document.body.style.overflow="",r.scrollIntoView({behavior:"smooth"}))})});const i={artistCardsContainer:document.querySelector(".artists-grid"),modal:document.getElementById("artist-modal"),modalName:document.getElementById("modal-artist-name"),modalImage:document.getElementById("modal-artist-image"),modalGenres:document.getElementById("modal-artist-genres"),modalBio:document.getElementById("modal-artist-bio"),modalClose:document.getElementById("modal-close"),loadMoreBtn:document.getElementById("load-more-btn")},y=[{id:"1",name:"Ren",genres:["Alternative","Pop","Rock","Indie"],image:"/img/artists/Placeholder_Image.jpg",bio:"Ren Eryn Gill, known professionally as Ren, is a multi-award-winning..."},{id:"2",name:"Unlike Pluto",genres:["Alternative","Pop","Rock","Indie"],image:"/img/artists/Placeholder_Image1.jpg",bio:"A look at the influential figures who shaped jazz music history."},{id:"3",name:"Sleepy Hallow",genres:["Alternative","Pop","Rock","Indie"],image:"/img/artists/Placeholder_Image2.jpg",bio:"A look at the influential figures who shaped jazz music history."},{id:"4",name:"Samara Cyn",genres:["Alternative","Pop","Rock","Indie"],image:"/img/artists/Placeholder_Image3.jpg",bio:"A look at the influential figures who shaped jazz music history."},{id:"5",name:"Oliver Tree",genres:["Alternative","Pop","Rock","Indie"],image:"/img/artists/Placeholder_Image4.jpg",bio:"A look at the influential figures who shaped jazz music history."},{id:"6",name:"Logic",genres:["Alternative","Pop","Rock","Indie"],image:"/img/artists/Placeholder_Image5.jpg",bio:"A look at the influential figures who shaped jazz music history."},{id:"7",name:"Mother Mother",genres:["Alternative","Pop","Rock","Indie"],image:"/img/artists/Placeholder_Image6.jpg",bio:"A look at the influential figures who shaped jazz music history."},{id:"8",name:"Livingston",genres:["Alternative","Pop","Rock","Indie"],image:"/img/artists/Placeholder_Image7.jpg",bio:"A look at the influential figures who shaped jazz music history."},{id:"9",name:"Sleepy Hallow",genres:["Alternative","Pop","Rock","Indie"],image:"/img/artists/Placeholder_Image2.jpg",bio:"A look at the influential figures who shaped jazz music history."},{id:"10",name:"Sleepy Hallow",genres:["Alternative","Pop","Rock","Indie"],image:"/img/artists/Placeholder_Image2.jpg",bio:"A look at the influential figures who shaped jazz music history."},{id:"11",name:"Sleepy Hallow",genres:["Alternative","Pop","Rock","Indie"],image:"/img/artists/Placeholder_Image2.jpg",bio:"A look at the influential figures who shaped jazz music history."},{id:"12",name:"Sleepy Hallow",genres:["Alternative","Pop","Rock","Indie"],image:"/img/artists/Placeholder_Image2.jpg",bio:"A look at the influential figures who shaped jazz music history."}];let p=0;const L=8;function A(){const n=y.slice(p,p+L).map(({id:t,name:r,genres:o,image:a,bio:s})=>{const d=o.map(l=>`<span class="genre">${l}</span>`).join(""),m=s.length>100?s.slice(0,100)+"...":s;return`
        <li class="artist-card" data-id="${t}">
          <img src="${a}" alt="${r}" />
          <div class="genres">${d}</div>
          <h3 class="artist-name">${r}</h3>
          <p class="description">${m}</p>
          <button class="learn-more" data-id="${t}">
            Learn More
            <svg class="icon" width="24" height="24">
              <use href="/img/sprite.svg#icon-caret-right-learn-more"></use>
            </svg>
          </button>
        </li>
      `}).join("");i.artistCardsContainer.insertAdjacentHTML("beforeend",n),p+=L,p>=y.length&&(i.loadMoreBtn.style.display="none")}document.addEventListener("DOMContentLoaded",()=>{A(),i.loadMoreBtn.addEventListener("click",A),i.artistCardsContainer.addEventListener("click",e=>{const n=e.target.closest(".learn-more");if(!n)return;const t=n.dataset.id,r=y.find(o=>o.id===t);r&&(i.modalName.textContent=r.name,i.modalImage.src=r.image,i.modalImage.alt=r.name,i.modalGenres.innerHTML=r.genres.map(o=>`<span class="genre">${o}</span>`).join(""),i.modalBio.textContent=r.bio,i.modal.classList.remove("hidden"))}),document.addEventListener("keydown",e=>{e.key==="Escape"&&!i.modal.classList.contains("hidden")&&i.modal.classList.add("hidden")})});const u=document.querySelector(".modal"),c=u.querySelector(".modal-content"),q=document.querySelector(".loader");let f=[];function x(){u.classList.add("is-open"),document.body.style.overflow="hidden"}function b(){u.classList.remove("is-open"),document.body.style.overflow="",c.innerHTML="",D()}function D(){f.forEach(({element:e,handler:n})=>{e.removeEventListener("click",n)}),f=[]}function F(){c.querySelectorAll(".youtube-btn").forEach(n=>{const t=()=>{const r=n.dataset.youtube;r&&window.open(r,"_blank")};n.addEventListener("click",t),f.push({element:n,handler:t})})}function O(e){var l,v;const n=e.yearFormed?e.yearDisbanded?`${e.yearFormed} - ${e.yearDisbanded}`:`${e.yearFormed} - present`:"information missing",t=e.gender||"information missing",r=e.membersCount||"information missing",o=e.country||"information missing",a=e.biography||"information missing",s=(l=e.genres)!=null&&l.length?e.genres.join(", "):"information missing",d=e.imageUrl||"",m=(v=e.albums)!=null&&v.length?e.albums.map(w=>{const $=`
            <tr>
              <th>Track</th>
              <th>Time</th>
              <th>Link</th>
            </tr>`,P=w.tracks.map(g=>{const j=g.youtubeUrl?`<a href="${g.youtubeUrl}" target="_blank" rel="noopener noreferrer">YouTube</a>`:"";return`
                <tr>
                  <td>${g.title}</td>
                  <td>${g.duration}</td>
                  <td>${j}</td>
                </tr>`}).join("");return`
            <div class="album">
              <h3>${w.title}</h3>
              <table>
                <thead>${$}</thead>
                <tbody>${P}</tbody>
              </table>
            </div>`}).join(""):"<p>Albums information missing</p>";c.innerHTML=`
    <button class="button-close" aria-label="Close">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        <path d="M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      </svg>
    </button>
    <h2 class="artist-mod-title">${e.name}</h2>
    ${d?`<img class="artist-image" src="${d}" alt="${e.name}" style="width: 576px; height: 354px;">`:""}
    <div class="artist-info">
      <p><strong>Years active</strong> ${n}</p>
      <p><strong>Sex</strong> ${t}</p>
      <p><strong>Members</strong> ${r}</p>
      <p><strong>Country</strong> ${o}</p>
      <p class="biography"><strong>Biography</strong> ${a}</p>
      <div class="genres">
        <strong>Genres</strong> ${s}
      </div>
    </div>
    <div class="albums">
      <h3>Albums</h3>
      ${m}
    </div>`,c.querySelector(".button-close").addEventListener("click",b),F()}async function N(e){try{q.style.display="block",c.innerHTML="",x();const t=(await k.get(`https://sound-wave.b.goit.study/api/artists/${e}`)).data,r={name:t.strArtist||t.name||"No name",imageUrl:t.strArtistThumb||t.image||"",yearFormed:t.intFormedYear||t.yearFormed||"",yearDisbanded:t.intDiedYear&&t.intDiedYear!=="null"?t.intDiedYear:"",gender:t.strGender||t.gender||"",membersCount:t.intMembers||t.membersCount||"",country:t.strCountry||t.country||"",biography:t.strBiographyEN||t.bio||"",genres:t.genres||[],albums:[]};let o=[];if(t.albumsList&&Array.isArray(t.albumsList))o=t.albumsList;else{const s=(await k.get(`https://sound-wave.b.goit.study/api/artists/${e}/albums`)).data;o=Array.isArray(s)?s:s.albums||[]}r.albums=o.map(a=>({title:a.strAlbum||a.title||"No title",tracks:(a.tracks||[]).map(s=>({title:s.strTrack||s.title||"No title",duration:s.intDuration?Math.floor(s.intDuration/6e4)+":"+String(Math.floor(s.intDuration%6e4/1e3)).padStart(2,"0"):"",youtubeUrl:s.movie&&s.movie!=="null"?s.movie:""}))})),O(r)}catch(n){c.innerHTML="<p>Помилка завантаження даних</p>",console.error(n)}finally{}}const I=document.querySelector(".artists-grid");I&&I.addEventListener("click",e=>{const n=e.target.closest(".learn-more");if(!n)return;const t=n.closest(".artist-card");if(!t)return;const r=t.dataset.id;N(r)});u.addEventListener("click",e=>{e.target===u&&b()});window.addEventListener("keydown",e=>{e.key==="Escape"&&b()});const U="https://sound-wave.b.goit.study/api/feedbacks";async function Y(){try{const e=await fetch(U);if(!e.ok)throw new Error("Failed to load feedbacks");return(await e.json()).data}catch(e){return console.error(e),[]}}function M(e){return Math.round(e)}function G(e){return e.map(n=>({...n,roundedRating:M(n.rating)}))}console.log(M);const K=async(e=3)=>{try{const n=await Y(),t=[],r=new Set;for(;t.length<e&&r.size<n.length;){const o=Math.floor(Math.random()*n.length);r.has(o)||(r.add(o),t.push(n[o]))}return t}catch(n){return console.error("Не вдалося отримати відгуки:",n),[]}};document.addEventListener("DOMContentLoaded",()=>{(async()=>{try{const e=await K(3),n=G(e),t=document.querySelector(".swiper-wrapper");t.innerHTML="",n.forEach((o,a)=>{const{name:s,descr:d,roundedRating:m}=o,l=document.createElement("div");l.className="swiper-slide",l.innerHTML=`
          <div class="feedback-card">
            <div class="rating" data-score="${m}"></div>
            <p class="feedback_description">${d}</p>
            <h3 class="feedback_name">${s}</h3>
          </div>
        `,t.appendChild(l)}),new C(".swiper",{direction:"horizontal",loop:!1,modules:[S,R],pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},simulateTouch:!0,grabCursor:!0,keyboard:{enabled:!0,pageUpDown:!0,onlyInViewport:!0},mousewheel:{eventsTarget:".swiper"}}),document.querySelectorAll(".rating").forEach(o=>{const a=parseInt(o.dataset.score,10);new z(o,{starOn:"/img/feedback/star-filled.png",starOff:"/img/feedback/star-empty.png",score:a,readOnly:!0}).init()})}catch(e){console.error("Помилка під час обробки відгуків:",e)}})()});
//# sourceMappingURL=index.js.map

import{a as k,S as C,N as S,P as R,R as z}from"./assets/vendor-BuJqGh_H.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();const B="https://sound-wave.b.goit.study/api/feedbacks";async function T(){try{const e=await fetch(B);if(!e.ok)throw new Error("Failed to load feedbacks");return(await e.json()).data}catch(e){return console.error(e),[]}}const i={artistCardsContainer:document.querySelector(".artists-grid"),modal:document.getElementById("artist-modal"),modalName:document.getElementById("modal-artist-name"),modalImage:document.getElementById("modal-artist-image"),modalGenres:document.getElementById("modal-artist-genres"),modalBio:document.getElementById("modal-artist-bio"),modalClose:document.getElementById("modal-close"),loadMoreBtn:document.getElementById("load-more-btn")},y=[{id:"1",name:"Ren",genres:["Alternative","Pop","Rock","Indie"],image:"/img/artists/Placeholder_Image.jpg",bio:"Ren Eryn Gill, known professionally as Ren, is a multi-award-winning..."},{id:"2",name:"Unlike Pluto",genres:["Alternative","Pop","Rock","Indie"],image:"/img/artists/Placeholder_Image1.jpg",bio:"A look at the influential figures who shaped jazz music history."},{id:"3",name:"Sleepy Hallow",genres:["Alternative","Pop","Rock","Indie"],image:"/img/artists/Placeholder_Image2.jpg",bio:"A look at the influential figures who shaped jazz music history."},{id:"4",name:"Samara Cyn",genres:["Alternative","Pop","Rock","Indie"],image:"/img/artists/Placeholder_Image3.jpg",bio:"A look at the influential figures who shaped jazz music history."},{id:"5",name:"Oliver Tree",genres:["Alternative","Pop","Rock","Indie"],image:"/img/artists/Placeholder_Image4.jpg",bio:"A look at the influential figures who shaped jazz music history."},{id:"6",name:"Logic",genres:["Alternative","Pop","Rock","Indie"],image:"/img/artists/Placeholder_Image5.jpg",bio:"A look at the influential figures who shaped jazz music history."},{id:"7",name:"Mother Mother",genres:["Alternative","Pop","Rock","Indie"],image:"/img/artists/Placeholder_Image6.jpg",bio:"A look at the influential figures who shaped jazz music history."},{id:"8",name:"Livingston",genres:["Alternative","Pop","Rock","Indie"],image:"/img/artists/Placeholder_Image7.jpg",bio:"A look at the influential figures who shaped jazz music history."},{id:"9",name:"Sleepy Hallow",genres:["Alternative","Pop","Rock","Indie"],image:"/img/artists/Placeholder_Image2.jpg",bio:"A look at the influential figures who shaped jazz music history."},{id:"10",name:"Sleepy Hallow",genres:["Alternative","Pop","Rock","Indie"],image:"/img/artists/Placeholder_Image2.jpg",bio:"A look at the influential figures who shaped jazz music history."},{id:"11",name:"Sleepy Hallow",genres:["Alternative","Pop","Rock","Indie"],image:"/img/artists/Placeholder_Image2.jpg",bio:"A look at the influential figures who shaped jazz music history."},{id:"12",name:"Sleepy Hallow",genres:["Alternative","Pop","Rock","Indie"],image:"/img/artists/Placeholder_Image2.jpg",bio:"A look at the influential figures who shaped jazz music history."}];let p=0;const L=8;function A(){const n=y.slice(p,p+L).map(({id:t,name:s,genres:o,image:a,bio:r})=>{const d=o.map(l=>`<span class="genre">${l}</span>`).join(""),m=r.length>100?r.slice(0,100)+"...":r;return`
        <li class="artist-card" data-id="${t}">
          <img src="${a}" alt="${s}" />
          <div class="genres">${d}</div>
          <h3 class="artist-name">${s}</h3>
          <p class="description">${m}</p>
          <button class="learn-more" data-id="${t}">
            Learn More
            <svg class="icon" width="24" height="24">
              <use href="/img/sprite.svg#icon-caret-right-learn-more"></use>
            </svg>
          </button>
        </li>
      `}).join("");i.artistCardsContainer.insertAdjacentHTML("beforeend",n),p+=L,p>=y.length&&(i.loadMoreBtn.style.display="none")}document.addEventListener("DOMContentLoaded",()=>{A(),i.loadMoreBtn.addEventListener("click",A),i.artistCardsContainer.addEventListener("click",e=>{const n=e.target.closest(".learn-more");if(!n)return;const t=n.dataset.id,s=y.find(o=>o.id===t);s&&(i.modalName.textContent=s.name,i.modalImage.src=s.image,i.modalImage.alt=s.name,i.modalGenres.innerHTML=s.genres.map(o=>`<span class="genre">${o}</span>`).join(""),i.modalBio.textContent=s.bio,i.modal.classList.remove("hidden"))}),i.modalClose.addEventListener("click",()=>{i.modal.classList.add("hidden")}),document.addEventListener("keydown",e=>{e.key==="Escape"&&!i.modal.classList.contains("hidden")&&i.modal.classList.add("hidden")})});const u=document.querySelector(".modal"),c=u.querySelector(".modal-content"),_=document.querySelector(".loader");let f=[];function H(){u.classList.add("is-open"),document.body.style.overflow="hidden"}function b(){u.classList.remove("is-open"),document.body.style.overflow="",c.innerHTML="",q()}function q(){f.forEach(({element:e,handler:n})=>{e.removeEventListener("click",n)}),f=[]}function x(){c.querySelectorAll(".youtube-btn").forEach(n=>{const t=()=>{const s=n.dataset.youtube;s&&window.open(s,"_blank")};n.addEventListener("click",t),f.push({element:n,handler:t})})}function D(e){var l,v;const n=e.yearFormed?e.yearDisbanded?`${e.yearFormed} - ${e.yearDisbanded}`:`${e.yearFormed} - present`:"information missing",t=e.gender||"information missing",s=e.membersCount||"information missing",o=e.country||"information missing",a=e.biography||"information missing",r=(l=e.genres)!=null&&l.length?e.genres.join(", "):"information missing",d=e.imageUrl||"",m=(v=e.albums)!=null&&v.length?e.albums.map(w=>{const $=`
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
      <p><strong>Members</strong> ${s}</p>
      <p><strong>Country</strong> ${o}</p>
      <p class="biography"><strong>Biography</strong> ${a}</p>
      <div class="genres">
        <strong>Genres</strong> ${r}
      </div>
    </div>
    <div class="albums">
      <h3>Albums</h3>
      ${m}
    </div>`,c.querySelector(".button-close").addEventListener("click",b),x()}async function F(e){try{_.style.display="block",c.innerHTML="",H();const t=(await k.get(`https://sound-wave.b.goit.study/api/artists/${e}`)).data,s={name:t.strArtist||t.name||"No name",imageUrl:t.strArtistThumb||t.image||"",yearFormed:t.intFormedYear||t.yearFormed||"",yearDisbanded:t.intDiedYear&&t.intDiedYear!=="null"?t.intDiedYear:"",gender:t.strGender||t.gender||"",membersCount:t.intMembers||t.membersCount||"",country:t.strCountry||t.country||"",biography:t.strBiographyEN||t.bio||"",genres:t.genres||[],albums:[]};let o=[];if(t.albumsList&&Array.isArray(t.albumsList))o=t.albumsList;else{const r=(await k.get(`https://sound-wave.b.goit.study/api/artists/${e}/albums`)).data;o=Array.isArray(r)?r:r.albums||[]}s.albums=o.map(a=>({title:a.strAlbum||a.title||"No title",tracks:(a.tracks||[]).map(r=>({title:r.strTrack||r.title||"No title",duration:r.intDuration?Math.floor(r.intDuration/6e4)+":"+String(Math.floor(r.intDuration%6e4/1e3)).padStart(2,"0"):"",youtubeUrl:r.movie&&r.movie!=="null"?r.movie:""}))})),D(s)}catch(n){c.innerHTML="<p>Помилка завантаження даних</p>",console.error(n)}finally{}}const I=document.querySelector(".artists-grid");I&&I.addEventListener("click",e=>{const n=e.target.closest(".learn-more");if(!n)return;const t=n.closest(".artist-card");if(!t)return;const s=t.dataset.id;F(s)});u.addEventListener("click",e=>{e.target===u&&b()});window.addEventListener("keydown",e=>{e.key==="Escape"&&b()});function E(e){return Math.round(e)}function O(e){return e.map(n=>({...n,roundedRating:E(n.rating)}))}console.log(E);const N=async(e=3)=>{try{const n=await T(),t=[],s=new Set;for(;t.length<e&&s.size<n.length;){const o=Math.floor(Math.random()*n.length);s.has(o)||(s.add(o),t.push(n[o]))}return t}catch(n){return console.error("Не вдалося отримати відгуки:",n),[]}};document.addEventListener("DOMContentLoaded",()=>{(async()=>{try{const e=await N(3),n=O(e),t=document.querySelector(".swiper-wrapper");t.innerHTML="",n.forEach((o,a)=>{const{name:r,descr:d,roundedRating:m}=o,l=document.createElement("div");l.className="swiper-slide",l.innerHTML=`
          <div class="feedback-card">
            <div class="rating" data-score="${m}"></div>
            <p class="feedback_description">${d}</p>
            <h3 class="feedback_name">${r}</h3>
          </div>
        `,t.appendChild(l)}),new C(".swiper",{direction:"horizontal",loop:!1,modules:[S,R],pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},simulateTouch:!0,grabCursor:!0,keyboard:{enabled:!0,pageUpDown:!0,onlyInViewport:!0},mousewheel:{eventsTarget:".swiper"}}),document.querySelectorAll(".rating").forEach(o=>{const a=parseInt(o.dataset.score,10);new z(o,{starOn:"/img/feedback/star-filled.png",starOff:"/img/feedback/star-empty.png",score:a,readOnly:!0}).init()})}catch(e){console.error("Помилка під час обробки відгуків:",e)}})()});const U=document.querySelector("[data-header-open]"),h=document.querySelector("[data-menu]"),Y=document.querySelector("[data-menu-close]"),G=document.querySelectorAll(".mob-nav-link");U.addEventListener("click",M);Y.addEventListener("click",M);function M(){h.classList.toggle("is-open")}document.addEventListener("keydown",K);function K(e){e.key==="Escape"&&h.classList.contains("is-open")&&h.classList.remove("is-open")}G.forEach(e=>{e.addEventListener("click",n=>{n.preventDefault();const t=e.getAttribute("href").substring(1),s=document.getElementById(t);s&&(h.classList.remove("is-open"),document.body.style.overflow="",s.scrollIntoView({behavior:"smooth"}))})});
//# sourceMappingURL=index.js.map

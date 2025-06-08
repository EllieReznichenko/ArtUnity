import{a as f,S as z,N as R,P as S,R as C}from"./assets/vendor-BuJqGh_H.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(t){if(t.ep)return;t.ep=!0;const a=s(t);fetch(t.href,a)}})();const B=document.querySelector("[data-header-open]"),h=document.querySelector("[data-menu]"),H=document.querySelector("[data-menu-close]");B.addEventListener("click",A);H.addEventListener("click",A);function A(){h.classList.toggle("is-open")}document.addEventListener("keydown",_);function _(e){e.key==="Escape"&&h.classList.contains("is-open")&&h.classList.remove("is-open")}menuLinks.forEach(e=>{e.addEventListener("click",n=>{n.preventDefault();const s=e.getAttribute("href").substring(1),o=document.getElementById(s);o&&(h.classList.remove("is-open"),document.body.style.overflow="",o.scrollIntoView({behavior:"smooth"}))})});const r={artistCardsContainer:document.querySelector(".artists-grid"),modal:document.getElementById("artist-modal"),modalName:document.getElementById("modal-artist-name"),modalImage:document.getElementById("modal-artist-image"),modalGenres:document.getElementById("modal-artist-genres"),modalBio:document.getElementById("modal-artist-bio"),modalClose:document.getElementById("modal-close"),loadMoreBtn:document.getElementById("load-more-btn")},y=[{id:"1",name:"Ren",genres:["Alternative","Pop","Rock","Indie"],image:"/img/artists/Placeholder_Image.jpg",bio:"Ren Eryn Gill, known professionally as Ren, is a multi-award-winning..."},{id:"2",name:"Unlike Pluto",genres:["Alternative","Pop","Rock","Indie"],image:"/img/artists/Placeholder_Image1.jpg",bio:"A look at the influential figures who shaped jazz music history."},{id:"3",name:"Sleepy Hallow",genres:["Alternative","Pop","Rock","Indie"],image:"/img/artists/Placeholder_Image2.jpg",bio:"A look at the influential figures who shaped jazz music history."},{id:"4",name:"Samara Cyn",genres:["Alternative","Pop","Rock","Indie"],image:"/img/artists/Placeholder_Image3.jpg",bio:"A look at the influential figures who shaped jazz music history."},{id:"5",name:"Oliver Tree",genres:["Alternative","Pop","Rock","Indie"],image:"/img/artists/Placeholder_Image4.jpg",bio:"A look at the influential figures who shaped jazz music history."},{id:"6",name:"Logic",genres:["Alternative","Pop","Rock","Indie"],image:"/img/artists/Placeholder_Image5.jpg",bio:"A look at the influential figures who shaped jazz music history."},{id:"7",name:"Mother Mother",genres:["Alternative","Pop","Rock","Indie"],image:"/img/artists/Placeholder_Image6.jpg",bio:"A look at the influential figures who shaped jazz music history."},{id:"8",name:"Livingston",genres:["Alternative","Pop","Rock","Indie"],image:"/img/artists/Placeholder_Image7.jpg",bio:"A look at the influential figures who shaped jazz music history."},{id:"9",name:"Sleepy Hallow",genres:["Alternative","Pop","Rock","Indie"],image:"/img/artists/Placeholder_Image2.jpg",bio:"A look at the influential figures who shaped jazz music history."},{id:"10",name:"Sleepy Hallow",genres:["Alternative","Pop","Rock","Indie"],image:"/img/artists/Placeholder_Image2.jpg",bio:"A look at the influential figures who shaped jazz music history."},{id:"11",name:"Sleepy Hallow",genres:["Alternative","Pop","Rock","Indie"],image:"/img/artists/Placeholder_Image2.jpg",bio:"A look at the influential figures who shaped jazz music history."},{id:"12",name:"Sleepy Hallow",genres:["Alternative","Pop","Rock","Indie"],image:"/img/artists/Placeholder_Image2.jpg",bio:"A look at the influential figures who shaped jazz music history."}];let p=0;const L=8;function I(){const n=y.slice(p,p+L).map(({id:s,name:o,genres:t,image:a,bio:i})=>{const d=t.map(l=>`<span class="genre">${l}</span>`).join(""),m=i.length>100?i.slice(0,100)+"...":i;return`
        <li class="artist-card" data-id="${s}">
          <img src="${a}" alt="${o}" />
          <div class="genres">${d}</div>
          <h3 class="artist-name">${o}</h3>
          <p class="description">${m}</p>
          <button class="learn-more" data-id="${s}">
            Learn More
            <svg class="icon" width="24" height="24">
              <use href="/img/sprite.svg#icon-caret-right-learn-more"></use>
            </svg>
          </button>
        </li>
      `}).join("");r.artistCardsContainer.insertAdjacentHTML("beforeend",n),p+=L,p>=y.length&&(r.loadMoreBtn.style.display="none")}document.addEventListener("DOMContentLoaded",()=>{I(),r.loadMoreBtn.addEventListener("click",I),r.artistCardsContainer.addEventListener("click",e=>{const n=e.target.closest(".learn-more");if(!n)return;const s=n.dataset.id,o=y.find(t=>t.id===s);o&&(r.modalName.textContent=o.name,r.modalImage.src=o.image,r.modalImage.alt=o.name,r.modalGenres.innerHTML=o.genres.map(t=>`<span class="genre">${t}</span>`).join(""),r.modalBio.textContent=o.bio,r.modal.classList.remove("hidden"))}),document.addEventListener("keydown",e=>{e.key==="Escape"&&!r.modal.classList.contains("hidden")&&r.modal.classList.add("hidden")})});const u=document.querySelector(".modal"),c=u.querySelector(".modal-content"),E=document.querySelector(".loader");let b=[];function q(){u.classList.add("is-open"),document.body.style.overflow="hidden"}function v(){u.classList.remove("is-open"),document.body.style.overflow="",c.innerHTML="",O()}function O(){b.forEach(({element:e,handler:n})=>{e.removeEventListener("click",n)}),b=[]}function T(){c.querySelectorAll(".youtube-btn").forEach(n=>{const s=()=>{const o=n.dataset.youtube;o&&window.open(o,"_blank")};n.addEventListener("click",s),b.push({element:n,handler:s})})}function x(e){var l,w;const n=e.yearFormed?e.yearDisbanded?`${e.yearFormed} - ${e.yearDisbanded}`:`${e.yearFormed} - present`:"information missing",s=e.gender||"information missing",o=e.membersCount||"information missing",t=e.country||"information missing",a=e.biography||"information missing",i=(l=e.genres)!=null&&l.length?e.genres.join(", "):"information missing",d=e.imageUrl||"",m=(w=e.albums)!=null&&w.length?e.albums.map(k=>{const P=`
            <tr>
              <th>Назва композиції</th>
              <th>Тривалість</th>
              <th>Посилання</th>
            </tr>`,j=k.tracks.map(g=>{const M=g.youtubeUrl?`<button class="youtube-btn" data-youtube="${g.youtubeUrl}">▶️</button>`:"";return`
                <tr>
                  <td>${g.title}</td>
                  <td>${g.duration}</td>
                  <td>${M}</td>
                </tr>`}).join("");return`
            <div class="album">
              <h3>${k.title}</h3>
              <table>
                <thead>${P}</thead>
                <tbody>${j}</tbody>
              </table>
            </div>`}).join(""):"<p>Albums information missing</p>";c.innerHTML=`
    <button class="button-close">Закрити</button>
    <h2>${e.name}</h2>
    ${d?`<img src="${d}" alt="${e.name}" style="width: 576px; height: 354px;">`:""}
    <p><strong>Роки існування:</strong> ${n}</p>
    <p><strong>Стать:</strong> ${s}</p>
    <p><strong>Кількість учасників:</strong> ${o}</p>
    <p><strong>Країна походження:</strong> ${t}</p>
    <p><strong>Біографія:</strong> ${a}</p>
    <p><strong>Жанри:</strong> ${i}</p>
    <div class="albums">
      <h3>Альбоми</h3>
      ${m}
    </div>`,c.querySelector(".button-close").addEventListener("click",v),T()}async function N(e){try{E.style.display="block",c.innerHTML="",q();const s=(await f.get(`https://sound-wave.b.goit.study/api/artists/${e}`)).data,t=(await f.get("https://sound-wave.b.goit.study/api/albums")).data;s.albums=t.filter(a=>a.artistId===e),x(s)}catch(n){c.innerHTML="<p>Помилка завантаження даних</p>",console.error(n)}finally{E.style.display="none"}}document.querySelector(".artist-list").addEventListener("click",e=>{const n=e.target.closest(".artist-card");if(!n)return;const s=n.dataset.id;N(s)});u.addEventListener("click",e=>{e.target===u&&v()});window.addEventListener("keydown",e=>{e.key==="Escape"&&v()});function $(e){return Math.round(e)}function F(e){return e.map(n=>({...n,roundedRating:$(n.rating)}))}console.log($);const D=async(e=3)=>{try{const s=(await f.get("https://sound-wave.b.goit.study/api/feedbacks")).data.data,o=[],t=new Set;for(;o.length<e&&t.size<s.length;){const a=Math.floor(Math.random()*s.length);t.has(a)||(t.add(a),o.push(s[a]))}return o}catch(n){return console.error("Не вдалося отримати відгуки:",n),[]}};document.addEventListener("DOMContentLoaded",()=>{(async()=>{try{const e=await D(3),n=F(e),s=document.querySelector(".swiper-wrapper");s.innerHTML="",n.forEach((t,a)=>{const{name:i,descr:d,roundedRating:m}=t,l=document.createElement("div");l.className="swiper-slide",l.innerHTML=`
          <div class="feedback-card">
            <div class="rating" data-score="${m}"></div>
            <p class="feedback_description">${d}</p>
            <h3 class="feedback_name">${i}</h3>
          </div>
        `,s.appendChild(l)}),new z(".swiper",{direction:"horizontal",loop:!1,modules:[R,S],pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},simulateTouch:!0,grabCursor:!0,keyboard:{enabled:!0,pageUpDown:!0,onlyInViewport:!0},mousewheel:{eventsTarget:".swiper"}}),document.querySelectorAll(".rating").forEach(t=>{const a=parseInt(t.dataset.score,10);new C(t,{starOn:"/img/feedback/star-filled.png",starOff:"/img/feedback/star-empty.png",score:a,readOnly:!0}).init()})}catch(e){console.error("Помилка під час обробки відгуків:",e)}})()});
//# sourceMappingURL=index.js.map

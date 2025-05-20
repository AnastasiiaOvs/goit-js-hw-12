import{a as L,S as w,i as a}from"./assets/vendor-CrlV4O_2.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&c(d)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const S="50324197-16ec26870062a9854cfe1529b",P="https://pixabay.com/api/",E=15;async function f(r,t=1){const o={key:S,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:E,page:t};return(await L.get(P,{params:o})).data}const m=document.querySelector(".gallery"),p=document.querySelector(".loader"),l=document.querySelector(".load-more-btn"),q=new w(".gallery a",{captionsData:"alt",captionDelay:250});function y(r){const t=r.map(o=>`
      <li class="gallery-item">
        <a href="${o.largeImageURL}">
          <img src="${o.webformatURL}" alt="${o.tags}" loading="lazy" />
        </a>
        <div class="gallery-info">
          <div class="info-block">
            <p class="label">Likes</p>
            <p class="value">${o.likes}</p>
          </div>
          <div class="info-block">
            <p class="label">Views</p>
            <p class="value">${o.views}</p>
          </div>
          <div class="info-block">
            <p class="label">Comments</p>
            <p class="value">${o.comments}</p>
          </div>
          <div class="info-block">
            <p class="label">Downloads</p>
            <p class="value">${o.downloads}</p>
          </div>
        </div>
      </li>
    `).join("");m.insertAdjacentHTML("beforeend",t),q.refresh()}function B(){m.innerHTML=""}function h(){p.classList.remove("hidden")}function g(){p.classList.add("hidden")}function $(){const{height:r}=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:r*2,behavior:"smooth"})}function M(){l.classList.remove("hidden"),l.disabled=!1}function v(){l.classList.add("hidden"),l.disabled=!0}const b=document.querySelector(".form"),O=b.elements["search-text"];let n=1,i="",u=0;b.addEventListener("submit",async r=>{if(r.preventDefault(),i=O.value.trim(),!i){a.warning({title:"Warning",message:"Please enter a search term."});return}B(),n=1,v(),h();try{const t=await f(i,n);u=t.totalHits,t.hits.length===0?a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}):(y(t.hits),n*15<u?M():a.info({message:"We're sorry, but you've reached the end of search results."}))}catch{a.error({title:"Error",message:"Something went wrong. Please try again later."})}finally{g()}});document.querySelector(".load-more-btn").addEventListener("click",async()=>{n+=1,h();try{const r=await f(i,n);y(r.hits),$(),n*15>=u&&(v(),a.info({message:"We're sorry, but you've reached the end of search results."}))}catch{a.error({title:"Error",message:"Failed to load more images."})}finally{g()}});
//# sourceMappingURL=index.js.map

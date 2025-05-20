import{a as b,S as L,i as a}from"./assets/vendor-CrlV4O_2.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&c(d)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const w="50324197-16ec26870062a9854cfe1529b",S="https://pixabay.com/api/",P=15;async function f(r,t=1){const s={key:w,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:P,page:t};return(await b.get(S,{params:s})).data}const m=document.querySelector(".gallery"),p=document.querySelector(".loader"),E=new L(".gallery a",{captionsData:"alt",captionDelay:250});function y(r){const t=r.map(s=>`
      <li class="gallery-item">
        <a href="${s.largeImageURL}">
          <img src="${s.webformatURL}" alt="${s.tags}" loading="lazy" />
        </a>
        <div class="gallery-info">
          <div class="info-block">
            <p class="label">Likes</p>
            <p class="value">${s.likes}</p>
          </div>
          <div class="info-block">
            <p class="label">Views</p>
            <p class="value">${s.views}</p>
          </div>
          <div class="info-block">
            <p class="label">Comments</p>
            <p class="value">${s.comments}</p>
          </div>
          <div class="info-block">
            <p class="label">Downloads</p>
            <p class="value">${s.downloads}</p>
          </div>
        </div>
      </li>
    `).join("");m.insertAdjacentHTML("beforeend",t),E.refresh()}function q(){m.innerHTML=""}function h(){p.classList.remove("hidden")}function g(){p.classList.add("hidden")}function $(){const{height:r}=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:r*2,behavior:"smooth"})}const v=document.querySelector(".form"),O=v.elements["search-text"];document.querySelector(".gallery");const i=document.querySelector(".load-more-btn");let l=1,n="",u=0;v.addEventListener("submit",async r=>{if(r.preventDefault(),n=O.value.trim(),!n){a.warning({title:"Warning",message:"Please enter a search term."});return}q(),l=1,i.classList.add("hidden"),h();try{const t=await f(n,l);u=t.totalHits,t.hits.length===0?a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}):(y(t.hits),l*15<u?i.classList.remove("hidden"):a.info({message:"We're sorry, but you've reached the end of search results."}))}catch{a.error({title:"Error",message:"Something went wrong. Please try again later."})}finally{g()}});i.addEventListener("click",async()=>{l+=1,h();try{const r=await f(n,l);y(r.hits),$(),l*15>=u&&(i.classList.add("hidden"),a.info({message:"We're sorry, but you've reached the end of search results."}))}catch{a.error({title:"Error",message:"Failed to load more images."})}finally{g()}});
//# sourceMappingURL=index.js.map

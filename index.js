import{a as v,S as L,i as n}from"./assets/vendor-CrlV4O_2.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&c(d)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const w="50324197-16ec26870062a9854cfe1529b",E="https://pixabay.com/api/",P=15;async function y(r,t=1){const o={key:w,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:P,page:t};return(await v.get(E,{params:o})).data}const f=document.querySelector(".gallery"),p=document.querySelector(".loader"),S=new L(".gallery a",{captionsData:"alt",captionDelay:250});function m(r){const t=r.map(o=>`
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
    `).join("");f.insertAdjacentHTML("beforeend",t),S.refresh()}function q(){f.innerHTML=""}function g(){p.classList.remove("hidden")}function h(){p.classList.add("hidden")}function $(){const{height:r}=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:r*2,behavior:"smooth"})}const b=document.querySelector(".form"),x=b.elements["search-text"];document.querySelector(".gallery");const a=document.createElement("button");a.textContent="Load more";a.classList.add("load-more-btn");a.style.display="none";document.body.appendChild(a);let l=1,i="",u=0;b.addEventListener("submit",async r=>{if(r.preventDefault(),i=x.value.trim(),!i){n.warning({title:"Warning",message:"Please enter a search term."});return}q(),l=1,a.style.display="none",g();try{const t=await y(i,l);u=t.totalHits,t.hits.length===0?n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}):(m(t.hits),l*15<u?a.style.display="block":n.info({message:"We're sorry, but you've reached the end of search results."}))}catch{n.error({title:"Error",message:"Something went wrong. Please try again later."})}finally{h()}});a.addEventListener("click",async()=>{l+=1,g();try{const r=await y(i,l);m(r.hits),$(),l*15>=u&&(a.style.display="none",n.info({message:"We're sorry, but you've reached the end of search results."}))}catch{n.error({title:"Error",message:"Failed to load more images."})}finally{h()}});
//# sourceMappingURL=index.js.map

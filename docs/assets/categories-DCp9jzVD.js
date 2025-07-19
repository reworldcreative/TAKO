import{g as j,i as D,e as O,n as P,a as C,s as z,S as k,N as $,P as A}from"./flip-lLGq5iyu.js";import{f as E,S as R,d as F,j as N,u as H,g as U}from"./scale-CRV3HJO1.js";function G(r){let{swiper:e,extendParams:l,on:a}=r;l({thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-thumbs"}});let n=!1,d=!1;e.thumbs={swiper:null};function i(){const o=e.thumbs.swiper;if(!o||o.destroyed)return;const t=o.clickedIndex,p=o.clickedSlide;if(p&&p.classList.contains(e.params.thumbs.slideThumbActiveClass)||typeof t>"u"||t===null)return;let m;o.params.loop?m=parseInt(o.clickedSlide.getAttribute("data-swiper-slide-index"),10):m=t,e.params.loop?e.slideToLoop(m):e.slideTo(m)}function b(){const{thumbs:o}=e.params;if(n)return!1;n=!0;const t=e.constructor;if(o.swiper instanceof t){if(o.swiper.destroyed)return n=!1,!1;e.thumbs.swiper=o.swiper,Object.assign(e.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),Object.assign(e.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper.update()}else if(D(o.swiper)){const p=Object.assign({},o.swiper);Object.assign(p,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper=new t(p),d=!0}return e.thumbs.swiper.el.classList.add(e.params.thumbs.thumbsContainerClass),e.thumbs.swiper.on("tap",i),!0}function f(o){const t=e.thumbs.swiper;if(!t||t.destroyed)return;const p=t.params.slidesPerView==="auto"?t.slidesPerViewDynamic():t.params.slidesPerView;let m=1;const u=e.params.thumbs.slideThumbActiveClass;if(e.params.slidesPerView>1&&!e.params.centeredSlides&&(m=e.params.slidesPerView),e.params.thumbs.multipleActiveThumbs||(m=1),m=Math.floor(m),t.slides.forEach(g=>g.classList.remove(u)),t.params.loop||t.params.virtual&&t.params.virtual.enabled)for(let g=0;g<m;g+=1)O(t.slidesEl,`[data-swiper-slide-index="${e.realIndex+g}"]`).forEach(c=>{c.classList.add(u)});else for(let g=0;g<m;g+=1)t.slides[e.realIndex+g]&&t.slides[e.realIndex+g].classList.add(u);const y=e.params.thumbs.autoScrollOffset,T=y&&!t.params.loop;if(e.realIndex!==t.realIndex||T){const g=t.activeIndex;let c,M;if(t.params.loop){const s=t.slides.find(h=>h.getAttribute("data-swiper-slide-index")===`${e.realIndex}`);c=t.slides.indexOf(s),M=e.activeIndex>e.previousIndex?"next":"prev"}else c=e.realIndex,M=c>e.previousIndex?"next":"prev";T&&(c+=M==="next"?y:-1*y),t.visibleSlidesIndexes&&t.visibleSlidesIndexes.indexOf(c)<0&&(t.params.centeredSlides?c>g?c=c-Math.floor(p/2)+1:c=c+Math.floor(p/2)-1:c>g&&t.params.slidesPerGroup,t.slideTo(c,o?0:void 0))}}a("beforeInit",()=>{const{thumbs:o}=e.params;if(!(!o||!o.swiper))if(typeof o.swiper=="string"||o.swiper instanceof HTMLElement){const t=j(),p=()=>{const u=typeof o.swiper=="string"?t.querySelector(o.swiper):o.swiper;if(u&&u.swiper)o.swiper=u.swiper,b(),f(!0);else if(u){const y=`${e.params.eventsPrefix}init`,T=g=>{o.swiper=g.detail[0],u.removeEventListener(y,T),b(),f(!0),o.swiper.update(),e.update()};u.addEventListener(y,T)}return u},m=()=>{if(e.destroyed)return;p()||requestAnimationFrame(m)};requestAnimationFrame(m)}else b(),f(!0)}),a("slideChange update resize observerUpdate",()=>{f()}),a("setTransition",(o,t)=>{const p=e.thumbs.swiper;!p||p.destroyed||p.setTransition(t)}),a("beforeDestroy",()=>{const o=e.thumbs.swiper;!o||o.destroyed||d&&o.destroy()}),Object.assign(e.thumbs,{init:b,update:f})}function J(r){let{swiper:e,extendParams:l,emit:a,once:n}=r;l({freeMode:{enabled:!1,momentum:!0,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,momentumVelocityRatio:1,sticky:!1,minimumVelocity:.02}});function d(){if(e.params.cssMode)return;const f=e.getTranslate();e.setTranslate(f),e.setTransition(0),e.touchEventsData.velocities.length=0,e.freeMode.onTouchEnd({currentPos:e.rtl?e.translate:-e.translate})}function i(){if(e.params.cssMode)return;const{touchEventsData:f,touches:o}=e;f.velocities.length===0&&f.velocities.push({position:o[e.isHorizontal()?"startX":"startY"],time:f.touchStartTime}),f.velocities.push({position:o[e.isHorizontal()?"currentX":"currentY"],time:P()})}function b(f){let{currentPos:o}=f;if(e.params.cssMode)return;const{params:t,wrapperEl:p,rtlTranslate:m,snapGrid:u,touchEventsData:y}=e,g=P()-y.touchStartTime;if(o<-e.minTranslate()){e.slideTo(e.activeIndex);return}if(o>-e.maxTranslate()){e.slides.length<u.length?e.slideTo(u.length-1):e.slideTo(e.slides.length-1);return}if(t.freeMode.momentum){if(y.velocities.length>1){const _=y.velocities.pop(),x=y.velocities.pop(),B=_.position-x.position,I=_.time-x.time;e.velocity=B/I,e.velocity/=2,Math.abs(e.velocity)<t.freeMode.minimumVelocity&&(e.velocity=0),(I>150||P()-_.time>300)&&(e.velocity=0)}else e.velocity=0;e.velocity*=t.freeMode.momentumVelocityRatio,y.velocities.length=0;let c=1e3*t.freeMode.momentumRatio;const M=e.velocity*c;let s=e.translate+M;m&&(s=-s);let h=!1,w;const S=Math.abs(e.velocity)*20*t.freeMode.momentumBounceRatio;let v;if(s<e.maxTranslate())t.freeMode.momentumBounce?(s+e.maxTranslate()<-S&&(s=e.maxTranslate()-S),w=e.maxTranslate(),h=!0,y.allowMomentumBounce=!0):s=e.maxTranslate(),t.loop&&t.centeredSlides&&(v=!0);else if(s>e.minTranslate())t.freeMode.momentumBounce?(s-e.minTranslate()>S&&(s=e.minTranslate()+S),w=e.minTranslate(),h=!0,y.allowMomentumBounce=!0):s=e.minTranslate(),t.loop&&t.centeredSlides&&(v=!0);else if(t.freeMode.sticky){let _;for(let x=0;x<u.length;x+=1)if(u[x]>-s){_=x;break}Math.abs(u[_]-s)<Math.abs(u[_-1]-s)||e.swipeDirection==="next"?s=u[_]:s=u[_-1],s=-s}if(v&&n("transitionEnd",()=>{e.loopFix()}),e.velocity!==0){if(m?c=Math.abs((-s-e.translate)/e.velocity):c=Math.abs((s-e.translate)/e.velocity),t.freeMode.sticky){const _=Math.abs((m?-s:s)-e.translate),x=e.slidesSizesGrid[e.activeIndex];_<x?c=t.speed:_<2*x?c=t.speed*1.5:c=t.speed*2.5}}else if(t.freeMode.sticky){e.slideToClosest();return}t.freeMode.momentumBounce&&h?(e.updateProgress(w),e.setTransition(c),e.setTranslate(s),e.transitionStart(!0,e.swipeDirection),e.animating=!0,C(p,()=>{!e||e.destroyed||!y.allowMomentumBounce||(a("momentumBounce"),e.setTransition(t.speed),setTimeout(()=>{e.setTranslate(w),C(p,()=>{!e||e.destroyed||e.transitionEnd()})},0))})):e.velocity?(a("_freeModeNoMomentumRelease"),e.updateProgress(s),e.setTransition(c),e.setTranslate(s),e.transitionStart(!0,e.swipeDirection),e.animating||(e.animating=!0,C(p,()=>{!e||e.destroyed||e.transitionEnd()}))):e.updateProgress(s),e.updateActiveIndex(),e.updateSlidesClasses()}else if(t.freeMode.sticky){e.slideToClosest();return}else t.freeMode&&a("_freeModeNoMomentumRelease");(!t.freeMode.momentum||g>=t.longSwipesMs)&&(a("_freeModeStaticRelease"),e.updateProgress(),e.updateActiveIndex(),e.updateSlidesClasses())}Object.assign(e,{freeMode:{onTouchStart:d,onTouchMove:i,onTouchEnd:b}})}function oe(){z("other-categories__slider",{slidesPerView:1.2,spaceBetween:16,breakpoints:{376:{slidesPerView:1.6,spaceBetween:16},768:{slidesPerView:2.5,spaceBetween:28},1023:{slidesPerView:3.5,spaceBetween:28},1439:{slidesPerView:4,spaceBetween:32}}})}E.registerPlugin(R);function re(r,e){document.querySelectorAll(r).forEach(a=>{const n=a.textContent;a.textContent="";let d="";E.to({},{duration:.08,stagger:.03,repeat:n.trim().length,ease:"power2.out",scrollTrigger:{trigger:e||a,start:"top 80%",toggleActions:"play none none none"},onRepeat:()=>{d=n.substring(0,a.textContent.length+1),a.textContent=d}})})}function W(r){const e=r.querySelector(".category-item__modal"),l=r.querySelector(".category-item__modal-close"),a=r.querySelector(".category-item__modal-content"),n=r.querySelector(".category-item__slides-badge"),d=r.querySelector(".category-item__main-slider"),i=r.querySelector(".category-item__thumbnail-slider"),b=r.querySelector(".category-item__modal-slider");let f={},o=null;function t(){o&&o.destroy(!0,!0),o=new k(i,{loop:!0,spaceBetween:8,slidesPerView:3,watchSlidesProgress:!0,modules:[J],on:{init:function(){const s=i.querySelector(".category-item__slides-badge"),h=this.params.slidesPerView,w=this.slides.length-h;this.slides.length<=h||(s.textContent="+"+w,s.style.display="flex",g(this))},slideChange(){g(this),y(this)},resize(){g(this)},touchMove(){n&&(n.style.opacity="0")},touchEnd(){n&&(n.style.opacity="1")}}})}function p(){i&&(window.innerWidth<=767?(o&&(o.destroy(!0,!0),o=null),i.style.display="none"):(i.style.display="",o||t()))}p(),window.addEventListener("resize",()=>{p()});const m=new k(d,{loop:!0,spaceBetween:10,slideToClickedSlide:!0,navigation:{nextEl:d.querySelector(".category-item__swiper-button-next"),prevEl:d.querySelector(".category-item__swiper-button-prev")},pagination:{el:d.querySelector(".category-item__main-slider-pagination"),type:"progressbar"},thumbs:{swiper:o},modules:[$,A,G],on:{click(s,h){s.clickedIndex!==void 0&&(e==null||e.classList.add("show"),u==null||u.slideToLoop(s.realIndex),E.fromTo(a,{opacity:0,scale:.5},{opacity:1,scale:1,duration:.5,ease:"back.out(1.7)"}),F())},slideChange:()=>{T()}}}),u=new k(b,{loop:!0,spaceBetween:10,modules:[$,A],navigation:{nextEl:b.querySelector(".category-item__swiper-button-next"),prevEl:b.querySelector(".category-item__swiper-button-prev")},pagination:{el:e.querySelector(".category-item__modal-pagination"),type:"fraction"},on:{slideChange(s){m==null||m.slideToLoop(s.realIndex)}}});function y(s){s.slides.forEach(h=>{h.querySelectorAll("video").forEach(S=>{S.pause(),S.currentTime=0})})}function T(){Object.values(f).forEach(s=>{s.pauseVideo&&s.pauseVideo()})}function g(s){var w;if(!s)return;s.slides.forEach(S=>S.classList.remove("blur"));const h=Math.min(s.activeIndex+s.params.slidesPerView-1,s.slides.length-1);(w=s.slides[h])==null||w.classList.add("blur")}function c(){E.to(a,{opacity:0,scale:.5,duration:.3,ease:"power2.in",onComplete:()=>{T(),e==null||e.classList.remove("show"),N()}})}l==null||l.addEventListener("click",c),e==null||e.addEventListener("click",function(s){s.target===e&&c()}),r.querySelectorAll(".video-container").forEach(s=>{s.addEventListener("click",function(){const h=this.dataset.video,w=this.dataset.width||560,S=this.dataset.height||315,v=document.createElement("iframe");v.width=w,v.height=S,v.className=this.className,v.src=`https://www.youtube.com/embed/${h}?enablejsapi=1`,v.allow="autoplay; encrypted-media",v.allowFullscreen=!0,v.id=`youtube-player-${Math.floor(Math.random()*1e4)}`,this.replaceWith(v),f[v.id]=new YT.Player(v.id,{events:{onReady:_=>{_.target.playVideo()}}})})})}function Y(r){const e=window.getComputedStyle(r),l=parseFloat(e.lineHeight),a=r.scrollHeight;return Math.round(a/l)}function X(r,e){const l=parseInt(window.getComputedStyle(e).getPropertyValue("-webkit-line-clamp"),10);if(Y(e)>l){r.classList.add("visible");return}r.classList.remove("visible")}function K(r){const e=r.querySelectorAll(".category-item__more"),l=()=>{e.forEach(a=>{const d=a.closest(".category-item__description").querySelector(".category-item__editor");X(a,d)})};l(),window.addEventListener("resize",()=>{l()}),e.forEach(a=>{const n=a.closest(".category-item__description");a.addEventListener("click",()=>{n.classList.toggle("show"),a.textContent=n.classList.contains("show")?"Менше":"Більше"})})}const Q={all:{ua:"Усі",en:"All"},"more-comfortable-in-the-dark":{ua:"Зручніше в темряві",en:"More comfortable in the dark"},"quick-equipment":{ua:"Швидше споряджання",en:"Quick equipment"},"protection-against-dust-and-dirt":{ua:"Захист від пилу та бруду",en:"Protection against dust and dirt"},"less-effort-when-charging":{ua:"Менше зусиль при заряджанні",en:"Less effort when charging"},"more-comfortable-in-cold":{ua:"Зручніше на морозі",en:"More comfortable in the cold"},"more-comfortable-at-sea":{ua:"Зручніше на морі",en:"More comfortable at sea"}};function Z(r){const e=r.querySelector(".category-item__buy-button"),l={id:r.dataset.id,category:r.dataset.category},a=()=>{(JSON.parse(localStorage.getItem("checkoutProducts"))||[]).some(i=>String(i.id)===String(l.id)&&String(i.category)===String(l.category))?(r.classList.add("added"),e.querySelector(".button-text").textContent="В кошику"):(r.classList.remove("added"),e.querySelector(".button-text").textContent="Купити")};a(),window.addEventListener("checkoutProductsUpdated",a),e.addEventListener("click",()=>{const n=JSON.parse(localStorage.getItem("checkoutProducts"))||[];if(!n.some(i=>String(i.id)===String(l.id)&&String(i.category)===String(l.category))){const i=[...n,l];H(i)}})}const ee="ua";function te(r){const e=JSON.parse(localStorage.getItem("checkoutProducts"))||[];let l=[];return r.forEach(a=>{const n=document.createElement("article"),d=e.find(i=>String(i.id)===String(a.id)&&i.category===a.category);n.classList.add(...["category-item",d?"added":null].filter(Boolean)),n.setAttribute("data-id",a.id),n.setAttribute("data-category",a.category),n.innerHTML=`
    <div class="modal category-item__modal">
      <div class="category-item__modal-content">
        <button type="button" class="category-item__modal-close" aria-label='close modal'>
          <svg class="category-item__close-icon">
            <use xlink:href="#plus"></use>
          </svg>
        </button>

        <div class="category-item__modal-slider swiper">
          <div class="swiper-wrapper">
          ${a.images.map(i=>`
              <div class="swiper-slide">
                ${i.type==="image"?`
                      <picture>
                        <source srcset="${i.webp_url}" type="image/webp">
                        <img class="category-item__img" src="${i.url}" alt="${i.alt}" width="429" height="437" loading="lazy">
                      </picture>
                    `:i.type==="video"?`<div class='video-container category-item__img' data-video='${i.video_id}' data-width="429" data-height="437">
                  <img class='category-item__img' src="https://img.youtube.com/vi/${i.video_id}/hqdefault.jpg" width="429"
                    height="437" alt="Preview">

                  <div class='play-button'>
                    <svg class="play-button__icon">
                      <use xlink:href="#play"></use>
                    </svg>
                  </div>
              </div>`:""}
              </div>
            `).join("")}
          </div>

          <button class="category-item__swiper-button category-item__swiper-button-prev" type='button'
            aria-label='previous slide'>
            <svg class="category-item__swiper-button-icon">
              <use xlink:href="#arrow-right"></use>
            </svg>
          </button>
          <button class="category-item__swiper-button category-item__swiper-button-next" type='button'
            aria-label='next slide'>
            <svg class="category-item__swiper-button-icon">
              <use xlink:href="#arrow-right"></use>
            </svg>
          </button>
        </div>

        <div class="category-item__modal-info">
          <p class='category-item__modal-text'>${a.title}</p>

          <div class='category-item__modal-pagination'> </div>
        </div>
      </div>
    </div>

    <div class='category-item__slider'>
    <div class="swiper-container-wrapper">
      <div class="swiper category-item__main-slider">
        <div class="swiper-wrapper">
          ${a.images.map(i=>`
              <div class="swiper-slide">
                ${i.type==="image"?`
                      <picture>
                        <source srcset="${i.webp_url}" type="image/webp">
                        <img class="category-item__img" src="${i.url}" alt="${i.alt}" width="429" height="437" loading="lazy">
                      </picture>
                    `:i.type==="video"?`
                      <div class='category-item__img'>
                        <img class='category-item__img' src="https://img.youtube.com/vi/${i.video_id}/hqdefault.jpg" width="429" height="437" alt="Preview">

                        <div class='play-button'>
                          <svg class="play-button__icon">
                            <use xlink:href="#play"></use>
                          </svg>
                      </div>
            </div>
                    `:""}
              </div>
            `).join("")}
        </div>

        <button class="category-item__swiper-button category-item__swiper-button-prev" type='button'
          aria-label='previous slide'>
          <svg class="category-item__swiper-button-icon">
            <use xlink:href="#arrow-right"></use>
          </svg>
        </button>
        <button class="category-item__swiper-button category-item__swiper-button-next" type='button'
          aria-label='next slide'>
          <svg class="category-item__swiper-button-icon">
            <use xlink:href="#arrow-right"></use>
          </svg>
        </button>

        <div class='swiper-pagination category-item__main-slider-pagination'></div>
      </div>
    </div>

    ${a.images.length>1?`
    <div class="swiper category-item__thumbnail-slider">
      <div class="swiper-wrapper">
        ${a.images.map(i=>`
              <div class="swiper-slide">
                ${i.type==="image"?`
                      <picture>
                        <source srcset="${i.webp_url}" type="image/webp">
                        <img class="category-item__img" src="${i.url}" alt="${i.alt}" width="429" height="437" loading="lazy">
                      </picture>
                    `:i.type==="video"?`
                      <div class='category-item__img'>
                        <img class='category-item__img' src="https://img.youtube.com/vi/${i.video_id}/hqdefault.jpg" width="429" height="437" alt="Preview">

                        <div class='play-button'>
                          <svg class="play-button__icon">
                            <use xlink:href="#play"></use>
                          </svg>
                      </div>
            </div>
                    `:""}
              </div>
            `).join("")}
      </div>

      <div class='category-item__slides-badge'></div>
    </div>`:""}
  </div>

  <div class='category-item__content'>
    <h2 class='category-item__title'>${a.title}</h2>

    <ul class='category-item__tags'>
      ${a.tags_in_category.map(i=>`
          <li class='category-item__tag category-item__tag_main'>${i}</li>
        `).join("")}
    </ul>

    <div class='category-item__description'>
      <div class='category-item__editor'>
        ${a.description}
      </div>

      <button class='category-item__more' type='button'>Більше</button>
    </div>

    <ul class='category-item__tags'>
      ${a.tags.map(i=>{var b;return`
          <li class='category-item__tag'>${((b=Q[i])==null?void 0:b[ee])||i}</li>
        `}).join("")}
    </ul>

    <div class='category-item__bottom'>
      <div class='category-item__price'>
        <div class='category-item__amount'>
          <p class='category-item__text category-item__text_accent'>
            <span class='category-item__price_accent'>${a.transferred_amount.toLocaleString("uk-UA")}</span> <span>одиниць</span>
          </p>
          <p class='category-item__text'>передано</p>
        </div>

        <div class='category-item__price-per-unit'>
          <p class='category-item__text category-item__text_accent'>
            <span class='category-item__price_accent'>${a.price_per_unit.toLocaleString("uk-UA",{minimumFractionDigits:2,maximumFractionDigits:2})}</span> <span>грн</span>
          </p>
          <p class='category-item__text'>собівартість за од.</p>
        </div>
      </div>

      <button class='button category-item__buy-button' type='button'>
        <span class='button-text'>${d?"В кошику":"Замовити"}</span>

        <svg class="button-icon">
          <use xlink:href="#plus"></use>
        </svg>
      </button>
    </div>
  </div>
  `,W(n),K(n),Z(n),l.push(n)}),l}const se="/TAKO/",L=document.querySelector(".categories__list"),q=L.closest(".categories__container");function V(r){if(r.length===0){q.classList.add("empty");return}L.innerHTML="",L.append(...te(r)),q.classList.remove("empty")}async function ne(r){const l=(await U(`${se}data/categories/categories.json`)).filter(d=>d.category===r),a=document.querySelectorAll('input[name="categories-selector"]');let n=l;a.forEach(d=>{d.addEventListener("change",()=>{n=d.value==="all"?l:l.filter(i=>i.tags.includes(d.value)),V(n)})}),V(n)}export{ne as c,oe as o,re as p};

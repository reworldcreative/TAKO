import{g as E,S as O,d as z,f as F,h as H,a as k,o as N,s as P}from"./scale-DfmRzJRh.js";import{g as W,i as G,e as U,n as C,a as L,s as Y,S as A,N as I,P as V,h as X,r as K}from"./flip-C2rUe2UM.js";import{g as Q,c as J}from"./bank-details-B3ykySP8.js";import{g as Z}from"./get-data-Dh4tsd16.js";function ee(n){let{swiper:e,extendParams:r,on:o}=n;r({thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-thumbs"}});let s=!1,p=!1;e.thumbs={swiper:null};function S(){const a=e.thumbs.swiper;if(!a||a.destroyed)return;const t=a.clickedIndex,u=a.clickedSlide;if(u&&u.classList.contains(e.params.thumbs.slideThumbActiveClass)||typeof t>"u"||t===null)return;let d;a.params.loop?d=parseInt(a.clickedSlide.getAttribute("data-swiper-slide-index"),10):d=t,e.params.loop?e.slideToLoop(d):e.slideTo(d)}function w(){const{thumbs:a}=e.params;if(s)return!1;s=!0;const t=e.constructor;if(a.swiper instanceof t){if(a.swiper.destroyed)return s=!1,!1;e.thumbs.swiper=a.swiper,Object.assign(e.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),Object.assign(e.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper.update()}else if(G(a.swiper)){const u=Object.assign({},a.swiper);Object.assign(u,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper=new t(u),p=!0}return e.thumbs.swiper.el.classList.add(e.params.thumbs.thumbsContainerClass),e.thumbs.swiper.on("tap",S),!0}function g(a){const t=e.thumbs.swiper;if(!t||t.destroyed)return;const u=t.params.slidesPerView==="auto"?t.slidesPerViewDynamic():t.params.slidesPerView;let d=1;const c=e.params.thumbs.slideThumbActiveClass;if(e.params.slidesPerView>1&&!e.params.centeredSlides&&(d=e.params.slidesPerView),e.params.thumbs.multipleActiveThumbs||(d=1),d=Math.floor(d),t.slides.forEach(m=>m.classList.remove(c)),t.params.loop||t.params.virtual&&t.params.virtual.enabled)for(let m=0;m<d;m+=1)U(t.slidesEl,`[data-swiper-slide-index="${e.realIndex+m}"]`).forEach(l=>{l.classList.add(c)});else for(let m=0;m<d;m+=1)t.slides[e.realIndex+m]&&t.slides[e.realIndex+m].classList.add(c);const h=e.params.thumbs.autoScrollOffset,T=h&&!t.params.loop;if(e.realIndex!==t.realIndex||T){const m=t.activeIndex;let l,M;if(t.params.loop){const i=t.slides.find(f=>f.getAttribute("data-swiper-slide-index")===`${e.realIndex}`);l=t.slides.indexOf(i),M=e.activeIndex>e.previousIndex?"next":"prev"}else l=e.realIndex,M=l>e.previousIndex?"next":"prev";T&&(l+=M==="next"?h:-1*h),t.visibleSlidesIndexes&&t.visibleSlidesIndexes.indexOf(l)<0&&(t.params.centeredSlides?l>m?l=l-Math.floor(u/2)+1:l=l+Math.floor(u/2)-1:l>m&&t.params.slidesPerGroup,t.slideTo(l,a?0:void 0))}}o("beforeInit",()=>{const{thumbs:a}=e.params;if(!(!a||!a.swiper))if(typeof a.swiper=="string"||a.swiper instanceof HTMLElement){const t=W(),u=()=>{const c=typeof a.swiper=="string"?t.querySelector(a.swiper):a.swiper;if(c&&c.swiper)a.swiper=c.swiper,w(),g(!0);else if(c){const h=`${e.params.eventsPrefix}init`,T=m=>{a.swiper=m.detail[0],c.removeEventListener(h,T),w(),g(!0),a.swiper.update(),e.update()};c.addEventListener(h,T)}return c},d=()=>{if(e.destroyed)return;u()||requestAnimationFrame(d)};requestAnimationFrame(d)}else w(),g(!0)}),o("slideChange update resize observerUpdate",()=>{g()}),o("setTransition",(a,t)=>{const u=e.thumbs.swiper;!u||u.destroyed||u.setTransition(t)}),o("beforeDestroy",()=>{const a=e.thumbs.swiper;!a||a.destroyed||p&&a.destroy()}),Object.assign(e.thumbs,{init:w,update:g})}function te(n){let{swiper:e,extendParams:r,emit:o,once:s}=n;r({freeMode:{enabled:!1,momentum:!0,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,momentumVelocityRatio:1,sticky:!1,minimumVelocity:.02}});function p(){if(e.params.cssMode)return;const g=e.getTranslate();e.setTranslate(g),e.setTransition(0),e.touchEventsData.velocities.length=0,e.freeMode.onTouchEnd({currentPos:e.rtl?e.translate:-e.translate})}function S(){if(e.params.cssMode)return;const{touchEventsData:g,touches:a}=e;g.velocities.length===0&&g.velocities.push({position:a[e.isHorizontal()?"startX":"startY"],time:g.touchStartTime}),g.velocities.push({position:a[e.isHorizontal()?"currentX":"currentY"],time:C()})}function w(g){let{currentPos:a}=g;if(e.params.cssMode)return;const{params:t,wrapperEl:u,rtlTranslate:d,snapGrid:c,touchEventsData:h}=e,m=C()-h.touchStartTime;if(a<-e.minTranslate()){e.slideTo(e.activeIndex);return}if(a>-e.maxTranslate()){e.slides.length<c.length?e.slideTo(c.length-1):e.slideTo(e.slides.length-1);return}if(t.freeMode.momentum){if(h.velocities.length>1){const y=h.velocities.pop(),x=h.velocities.pop(),R=y.position-x.position,q=y.time-x.time;e.velocity=R/q,e.velocity/=2,Math.abs(e.velocity)<t.freeMode.minimumVelocity&&(e.velocity=0),(q>150||C()-y.time>300)&&(e.velocity=0)}else e.velocity=0;e.velocity*=t.freeMode.momentumVelocityRatio,h.velocities.length=0;let l=1e3*t.freeMode.momentumRatio;const M=e.velocity*l;let i=e.translate+M;d&&(i=-i);let f=!1,b;const v=Math.abs(e.velocity)*20*t.freeMode.momentumBounceRatio;let _;if(i<e.maxTranslate())t.freeMode.momentumBounce?(i+e.maxTranslate()<-v&&(i=e.maxTranslate()-v),b=e.maxTranslate(),f=!0,h.allowMomentumBounce=!0):i=e.maxTranslate(),t.loop&&t.centeredSlides&&(_=!0);else if(i>e.minTranslate())t.freeMode.momentumBounce?(i-e.minTranslate()>v&&(i=e.minTranslate()+v),b=e.minTranslate(),f=!0,h.allowMomentumBounce=!0):i=e.minTranslate(),t.loop&&t.centeredSlides&&(_=!0);else if(t.freeMode.sticky){let y;for(let x=0;x<c.length;x+=1)if(c[x]>-i){y=x;break}Math.abs(c[y]-i)<Math.abs(c[y-1]-i)||e.swipeDirection==="next"?i=c[y]:i=c[y-1],i=-i}if(_&&s("transitionEnd",()=>{e.loopFix()}),e.velocity!==0){if(d?l=Math.abs((-i-e.translate)/e.velocity):l=Math.abs((i-e.translate)/e.velocity),t.freeMode.sticky){const y=Math.abs((d?-i:i)-e.translate),x=e.slidesSizesGrid[e.activeIndex];y<x?l=t.speed:y<2*x?l=t.speed*1.5:l=t.speed*2.5}}else if(t.freeMode.sticky){e.slideToClosest();return}t.freeMode.momentumBounce&&f?(e.updateProgress(b),e.setTransition(l),e.setTranslate(i),e.transitionStart(!0,e.swipeDirection),e.animating=!0,L(u,()=>{!e||e.destroyed||!h.allowMomentumBounce||(o("momentumBounce"),e.setTransition(t.speed),setTimeout(()=>{e.setTranslate(b),L(u,()=>{!e||e.destroyed||e.transitionEnd()})},0))})):e.velocity?(o("_freeModeNoMomentumRelease"),e.updateProgress(i),e.setTransition(l),e.setTranslate(i),e.transitionStart(!0,e.swipeDirection),e.animating||(e.animating=!0,L(u,()=>{!e||e.destroyed||e.transitionEnd()}))):e.updateProgress(i),e.updateActiveIndex(),e.updateSlidesClasses()}else if(t.freeMode.sticky){e.slideToClosest();return}else t.freeMode&&o("_freeModeNoMomentumRelease");(!t.freeMode.momentum||m>=t.longSwipesMs)&&(o("_freeModeStaticRelease"),e.updateProgress(),e.updateActiveIndex(),e.updateSlidesClasses())}Object.assign(e,{freeMode:{onTouchStart:p,onTouchMove:S,onTouchEnd:w}})}function ie(){Y("other-categories__slider",{slidesPerView:1.2,spaceBetween:16,breakpoints:{376:{slidesPerView:1.6,spaceBetween:16},768:{slidesPerView:2.5,spaceBetween:28},1023:{slidesPerView:3.5,spaceBetween:28},1439:{slidesPerView:4,spaceBetween:32}}})}E.registerPlugin(O);function B(n,e){document.querySelectorAll(n).forEach(o=>{const s=o.textContent;o.textContent="";let p="";E.to({},{duration:.08,stagger:.03,repeat:s.trim().length,ease:"power2.out",scrollTrigger:{trigger:e||o,start:"top 80%",toggleActions:"play none none none"},onRepeat:()=>{p=s.substring(0,o.textContent.length+1),o.textContent=p}})})}function se(n){const e=n.querySelector(".category-item__modal"),r=n.querySelector(".category-item__modal-close"),o=n.querySelector(".category-item__modal-content"),s=n.querySelector(".category-item__slides-badge"),p=n.querySelector(".category-item__main-slider"),S=n.querySelector(".category-item__thumbnail-slider"),w=n.querySelector(".category-item__modal-slider");let g={},a=null;function t(){a&&a.destroy(!0,!0),a=new A(S,{loop:!0,spaceBetween:8,slidesPerView:3,watchSlidesProgress:!0,modules:[te],on:{init:function(){const i=S.querySelector(".category-item__slides-badge"),f=this.params.slidesPerView,b=this.slides.length-f;this.slides.length<=f||(i.textContent="+"+b,i.style.display="flex",m(this))},slideChange(){m(this),h(this)},resize(){m(this)},touchMove(){s&&(s.style.opacity="0")},touchEnd(){s&&(s.style.opacity="1")}}})}function u(){S&&(window.innerWidth<=767?(a&&(a.destroy(!0,!0),a=null),S.style.display="none"):(S.style.display="",a||t()))}u(),window.addEventListener("resize",()=>{u()});const d=new A(p,{loop:!0,spaceBetween:10,slideToClickedSlide:!0,navigation:{nextEl:p.querySelector(".category-item__swiper-button-next"),prevEl:p.querySelector(".category-item__swiper-button-prev")},pagination:{el:p.querySelector(".category-item__main-slider-pagination"),type:"progressbar"},thumbs:{swiper:a},modules:[I,V,ee],on:{click(i,f){i.clickedIndex!==void 0&&(e==null||e.classList.add("show"),c==null||c.slideToLoop(i.realIndex),E.fromTo(o,{opacity:0,scale:.5},{opacity:1,scale:1,duration:.5,ease:"back.out(1.7)"}),z())},slideChange:()=>{T()}}}),c=new A(w,{loop:!0,spaceBetween:10,modules:[I,V],navigation:{nextEl:w.querySelector(".category-item__swiper-button-next"),prevEl:w.querySelector(".category-item__swiper-button-prev")},pagination:{el:e.querySelector(".category-item__modal-pagination"),type:"fraction"},on:{slideChange(i){d==null||d.slideToLoop(i.realIndex)}}});function h(i){i.slides.forEach(f=>{f.querySelectorAll("video").forEach(v=>{v.pause(),v.currentTime=0})})}function T(){Object.values(g).forEach(i=>{i.pauseVideo&&i.pauseVideo()})}function m(i){var b;if(!i)return;i.slides.forEach(v=>v.classList.remove("blur"));const f=Math.min(i.activeIndex+i.params.slidesPerView-1,i.slides.length-1);(b=i.slides[f])==null||b.classList.add("blur")}function l(){E.to(o,{opacity:0,scale:.5,duration:.3,ease:"power2.in",onComplete:()=>{T(),e==null||e.classList.remove("show"),F()}})}r==null||r.addEventListener("click",l),e==null||e.addEventListener("click",function(i){i.target===e&&l()}),n.querySelectorAll(".video-container").forEach(i=>{i.addEventListener("click",function(){const f=this.dataset.video,b=this.dataset.width||560,v=this.dataset.height||315,_=document.createElement("iframe");_.width=b,_.height=v,_.className=this.className,_.src=`https://www.youtube.com/embed/${f}?enablejsapi=1`,_.allow="autoplay; encrypted-media",_.allowFullscreen=!0,_.id=`youtube-player-${Math.floor(Math.random()*1e4)}`,this.replaceWith(_),g[_.id]=new YT.Player(_.id,{events:{onReady:y=>{y.target.playVideo()}}})})})}function ae(n){const e=window.getComputedStyle(n),r=parseFloat(e.lineHeight),o=n.scrollHeight;return Math.round(o/r)}function oe(n,e){const r=parseInt(window.getComputedStyle(e).getPropertyValue("-webkit-line-clamp"),10);if(ae(e)>r){n.classList.add("visible");return}n.classList.remove("visible")}function re(n){const e=n.querySelectorAll(".category-item__more"),r=()=>{e.forEach(o=>{const p=o.closest(".category-item__description").querySelector(".category-item__editor");oe(o,p)})};r(),window.addEventListener("resize",()=>{r()}),e.forEach(o=>{const s=o.closest(".category-item__description");o.addEventListener("click",()=>{s.classList.toggle("show"),o.textContent=s.classList.contains("show")?"Менше":"Більше"})})}const ne={all:{ua:"Усі",en:"All"},"more-comfortable-in-the-dark":{ua:"Зручніше в темряві",en:"More comfortable in the dark"},"quick-equipment":{ua:"Швидше споряджання",en:"Quick equipment"},"protection-against-dust-and-dirt":{ua:"Захист від пилу та бруду",en:"Protection against dust and dirt"},"less-effort-when-charging":{ua:"Менше зусиль при заряджанні",en:"Less effort when charging"},"more-comfortable-in-cold":{ua:"Зручніше на морозі",en:"More comfortable in the cold"},"more-comfortable-at-sea":{ua:"Зручніше на морі",en:"More comfortable at sea"}},le="ua";function ce(n){let e=[];return n.forEach(r=>{const o=document.createElement("article");o.classList.add("category-item"),o.setAttribute("data-id",r.id),o.innerHTML=`
    <div class="modal category-item__modal">
      <div class="category-item__modal-content">
        <button type="button" class="category-item__modal-close" aria-label='close modal'>
          <svg class="category-item__close-icon">
            <use xlink:href="#plus"></use>
          </svg>
        </button>

        <div class="category-item__modal-slider swiper">
          <div class="swiper-wrapper">
          ${r.images.map(s=>`
              <div class="swiper-slide">
                ${s.type==="image"?`
                      <picture>
                        <source srcset="${s.webp_url}" type="image/webp">
                        <img class="category-item__img" src="${s.url}" alt="${s.alt}" width="429" height="437" loading="lazy">
                      </picture>
                    `:s.type==="video"?`<div class='video-container category-item__img' data-video='${s.video_id}' data-width="429" data-height="437">
                  <img class='category-item__img' src="https://img.youtube.com/vi/${s.video_id}/hqdefault.jpg" width="429"
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
          <p class='category-item__modal-text'>${r.title}</p>

          <div class='category-item__modal-pagination'> </div>
        </div>
      </div>
    </div>

    <div class='category-item__slider'>
    <div class="swiper-container-wrapper">
      <div class="swiper category-item__main-slider">
        <div class="swiper-wrapper">
          ${r.images.map(s=>`
              <div class="swiper-slide">
                ${s.type==="image"?`
                      <picture>
                        <source srcset="${s.webp_url}" type="image/webp">
                        <img class="category-item__img" src="${s.url}" alt="${s.alt}" width="429" height="437" loading="lazy">
                      </picture>
                    `:s.type==="video"?`
                      <div class='category-item__img'>
                        <img class='category-item__img' src="https://img.youtube.com/vi/${s.video_id}/hqdefault.jpg" width="429" height="437" alt="Preview">

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

    ${r.images.length>1?`
    <div class="swiper category-item__thumbnail-slider">
      <div class="swiper-wrapper">
        ${r.images.map(s=>`
              <div class="swiper-slide">
                ${s.type==="image"?`
                      <picture>
                        <source srcset="${s.webp_url}" type="image/webp">
                        <img class="category-item__img" src="${s.url}" alt="${s.alt}" width="429" height="437" loading="lazy">
                      </picture>
                    `:s.type==="video"?`
                      <div class='category-item__img'>
                        <img class='category-item__img' src="https://img.youtube.com/vi/${s.video_id}/hqdefault.jpg" width="429" height="437" alt="Preview">

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
    <h2 class='category-item__title'>${r.title}</h2>

    <ul class='category-item__tags'>
      ${r.tags_in_category.map(s=>`
          <li class='category-item__tag category-item__tag_main'>${s}</li>
        `).join("")}
    </ul>

    <div class='category-item__description'>
      <div class='category-item__editor'>
        ${r.description}
      </div>

      <button class='category-item__more' type='button'>Більше</button>
    </div>

    <ul class='category-item__tags'>
      ${r.tags.map(s=>{var p;return`
          <li class='category-item__tag'>${((p=ne[s])==null?void 0:p[le])||s}</li>
        `}).join("")}
    </ul>

    <div class='category-item__bottom'>
      <div class='category-item__price'>
        <div class='category-item__amount'>
          <p class='category-item__text category-item__text_accent'>
            <span class='category-item__price_accent'>${r.transferred_amount.toLocaleString("uk-UA")}</span> <span>одиниць</span>
          </p>
          <p class='category-item__text'>передано</p>
        </div>

        <div class='category-item__price-per-unit'>
          <p class='category-item__text category-item__text_accent'>
            <span class='category-item__price_accent'>${r.price_per_unit.toLocaleString("uk-UA",{minimumFractionDigits:2,maximumFractionDigits:2})}</span> <span>грн</span>
          </p>
          <p class='category-item__text'>собівартість за од.</p>
        </div>
      </div>

      <button class='button category-item__buy-button' type='button'>
        <span class='button-text'>Замовити</span>

        <svg class="button-icon">
          <use xlink:href="#plus"></use>
        </svg>
      </button>
    </div>
  </div>
  `,se(o),re(o),e.push(o)}),e}const de="/TAKO/",$=document.querySelector(".categories__list"),D=$.closest(".categories__container");function j(n){if(n.length===0){D.classList.add("empty");return}$.innerHTML="",$.append(...ce(n)),D.classList.remove("empty")}async function ue(){const n=await Z(`${de}data/categories/for-weapon.json`),e=document.querySelectorAll('input[name="categories-selector"]');let r=n;e.forEach(o=>{o.addEventListener("change",()=>{r=o.value==="all"?n:n.filter(s=>s.tags.includes(o.value)),j(r)})}),j(r)}document.addEventListener("DOMContentLoaded",()=>{const n=[{selector:".header",callback:()=>{k([".header__products-button",".header__button-contacts",".header__button-support",".header__button-badge"],".header",.3,.1),P([".header__logo",".navigation__link"],".header",.5,.2)}},{selector:".hero-banner",callback:()=>{B(".hero-banner__title",".hero-banner"),k([".hero-banner__text"],".hero-banner")}},{selector:".about",callback:()=>{k([".about__title",".about__text"],".about__container"),B(".about__title",".about__container")}},{selector:".other-categories",callback:()=>{k([".other-categories__title"],".other-categories"),K([".other-categories__slide"],".other-categories")}},{selector:".how-work",callback:()=>k([".how-work__title"],".how-work")},{selector:".bank-details",callback:()=>{k([".bank-details__title"],".bank-details"),P([".bank-details__code-wrapper"],".bank-details")}},{selector:".footer",callback:()=>{k([".footer__text",".footer__button-contact"],".footer"),k([".footer__item"],".footer",.3,.1),P([".footer__logo",".footer__socials-item"],".footer")}}];O.killAll(),Q(),H(),X(),ie(),J(),ue(),n.forEach(({selector:e,callback:r})=>{N(e,r)})});

import{f as M,S as O,d as z,j as F,u as N,g as H,h as U,a as k,o as W,s as C}from"./scale-n68OfTc5.js";import{g as G,i as J,e as Y,n as P,a as L,s as X,S as I,N as q,P as V,h as K,r as Q}from"./flip-CAFV0uIe.js";import{g as Z,c as ee}from"./bank-details-B3ykySP8.js";function te(r){let{swiper:e,extendParams:l,on:i}=r;l({thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-thumbs"}});let n=!1,g=!1;e.thumbs={swiper:null};function a(){const o=e.thumbs.swiper;if(!o||o.destroyed)return;const t=o.clickedIndex,m=o.clickedSlide;if(m&&m.classList.contains(e.params.thumbs.slideThumbActiveClass)||typeof t>"u"||t===null)return;let u;o.params.loop?u=parseInt(o.clickedSlide.getAttribute("data-swiper-slide-index"),10):u=t,e.params.loop?e.slideToLoop(u):e.slideTo(u)}function v(){const{thumbs:o}=e.params;if(n)return!1;n=!0;const t=e.constructor;if(o.swiper instanceof t){if(o.swiper.destroyed)return n=!1,!1;e.thumbs.swiper=o.swiper,Object.assign(e.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),Object.assign(e.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper.update()}else if(J(o.swiper)){const m=Object.assign({},o.swiper);Object.assign(m,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper=new t(m),g=!0}return e.thumbs.swiper.el.classList.add(e.params.thumbs.thumbsContainerClass),e.thumbs.swiper.on("tap",a),!0}function h(o){const t=e.thumbs.swiper;if(!t||t.destroyed)return;const m=t.params.slidesPerView==="auto"?t.slidesPerViewDynamic():t.params.slidesPerView;let u=1;const d=e.params.thumbs.slideThumbActiveClass;if(e.params.slidesPerView>1&&!e.params.centeredSlides&&(u=e.params.slidesPerView),e.params.thumbs.multipleActiveThumbs||(u=1),u=Math.floor(u),t.slides.forEach(p=>p.classList.remove(d)),t.params.loop||t.params.virtual&&t.params.virtual.enabled)for(let p=0;p<u;p+=1)Y(t.slidesEl,`[data-swiper-slide-index="${e.realIndex+p}"]`).forEach(c=>{c.classList.add(d)});else for(let p=0;p<u;p+=1)t.slides[e.realIndex+p]&&t.slides[e.realIndex+p].classList.add(d);const f=e.params.thumbs.autoScrollOffset,T=f&&!t.params.loop;if(e.realIndex!==t.realIndex||T){const p=t.activeIndex;let c,E;if(t.params.loop){const s=t.slides.find(_=>_.getAttribute("data-swiper-slide-index")===`${e.realIndex}`);c=t.slides.indexOf(s),E=e.activeIndex>e.previousIndex?"next":"prev"}else c=e.realIndex,E=c>e.previousIndex?"next":"prev";T&&(c+=E==="next"?f:-1*f),t.visibleSlidesIndexes&&t.visibleSlidesIndexes.indexOf(c)<0&&(t.params.centeredSlides?c>p?c=c-Math.floor(m/2)+1:c=c+Math.floor(m/2)-1:c>p&&t.params.slidesPerGroup,t.slideTo(c,o?0:void 0))}}i("beforeInit",()=>{const{thumbs:o}=e.params;if(!(!o||!o.swiper))if(typeof o.swiper=="string"||o.swiper instanceof HTMLElement){const t=G(),m=()=>{const d=typeof o.swiper=="string"?t.querySelector(o.swiper):o.swiper;if(d&&d.swiper)o.swiper=d.swiper,v(),h(!0);else if(d){const f=`${e.params.eventsPrefix}init`,T=p=>{o.swiper=p.detail[0],d.removeEventListener(f,T),v(),h(!0),o.swiper.update(),e.update()};d.addEventListener(f,T)}return d},u=()=>{if(e.destroyed)return;m()||requestAnimationFrame(u)};requestAnimationFrame(u)}else v(),h(!0)}),i("slideChange update resize observerUpdate",()=>{h()}),i("setTransition",(o,t)=>{const m=e.thumbs.swiper;!m||m.destroyed||m.setTransition(t)}),i("beforeDestroy",()=>{const o=e.thumbs.swiper;!o||o.destroyed||g&&o.destroy()}),Object.assign(e.thumbs,{init:v,update:h})}function se(r){let{swiper:e,extendParams:l,emit:i,once:n}=r;l({freeMode:{enabled:!1,momentum:!0,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,momentumVelocityRatio:1,sticky:!1,minimumVelocity:.02}});function g(){if(e.params.cssMode)return;const h=e.getTranslate();e.setTranslate(h),e.setTransition(0),e.touchEventsData.velocities.length=0,e.freeMode.onTouchEnd({currentPos:e.rtl?e.translate:-e.translate})}function a(){if(e.params.cssMode)return;const{touchEventsData:h,touches:o}=e;h.velocities.length===0&&h.velocities.push({position:o[e.isHorizontal()?"startX":"startY"],time:h.touchStartTime}),h.velocities.push({position:o[e.isHorizontal()?"currentX":"currentY"],time:P()})}function v(h){let{currentPos:o}=h;if(e.params.cssMode)return;const{params:t,wrapperEl:m,rtlTranslate:u,snapGrid:d,touchEventsData:f}=e,p=P()-f.touchStartTime;if(o<-e.minTranslate()){e.slideTo(e.activeIndex);return}if(o>-e.maxTranslate()){e.slides.length<d.length?e.slideTo(d.length-1):e.slideTo(e.slides.length-1);return}if(t.freeMode.momentum){if(f.velocities.length>1){const b=f.velocities.pop(),x=f.velocities.pop(),R=b.position-x.position,$=b.time-x.time;e.velocity=R/$,e.velocity/=2,Math.abs(e.velocity)<t.freeMode.minimumVelocity&&(e.velocity=0),($>150||P()-b.time>300)&&(e.velocity=0)}else e.velocity=0;e.velocity*=t.freeMode.momentumVelocityRatio,f.velocities.length=0;let c=1e3*t.freeMode.momentumRatio;const E=e.velocity*c;let s=e.translate+E;u&&(s=-s);let _=!1,w;const S=Math.abs(e.velocity)*20*t.freeMode.momentumBounceRatio;let y;if(s<e.maxTranslate())t.freeMode.momentumBounce?(s+e.maxTranslate()<-S&&(s=e.maxTranslate()-S),w=e.maxTranslate(),_=!0,f.allowMomentumBounce=!0):s=e.maxTranslate(),t.loop&&t.centeredSlides&&(y=!0);else if(s>e.minTranslate())t.freeMode.momentumBounce?(s-e.minTranslate()>S&&(s=e.minTranslate()+S),w=e.minTranslate(),_=!0,f.allowMomentumBounce=!0):s=e.minTranslate(),t.loop&&t.centeredSlides&&(y=!0);else if(t.freeMode.sticky){let b;for(let x=0;x<d.length;x+=1)if(d[x]>-s){b=x;break}Math.abs(d[b]-s)<Math.abs(d[b-1]-s)||e.swipeDirection==="next"?s=d[b]:s=d[b-1],s=-s}if(y&&n("transitionEnd",()=>{e.loopFix()}),e.velocity!==0){if(u?c=Math.abs((-s-e.translate)/e.velocity):c=Math.abs((s-e.translate)/e.velocity),t.freeMode.sticky){const b=Math.abs((u?-s:s)-e.translate),x=e.slidesSizesGrid[e.activeIndex];b<x?c=t.speed:b<2*x?c=t.speed*1.5:c=t.speed*2.5}}else if(t.freeMode.sticky){e.slideToClosest();return}t.freeMode.momentumBounce&&_?(e.updateProgress(w),e.setTransition(c),e.setTranslate(s),e.transitionStart(!0,e.swipeDirection),e.animating=!0,L(m,()=>{!e||e.destroyed||!f.allowMomentumBounce||(i("momentumBounce"),e.setTransition(t.speed),setTimeout(()=>{e.setTranslate(w),L(m,()=>{!e||e.destroyed||e.transitionEnd()})},0))})):e.velocity?(i("_freeModeNoMomentumRelease"),e.updateProgress(s),e.setTransition(c),e.setTranslate(s),e.transitionStart(!0,e.swipeDirection),e.animating||(e.animating=!0,L(m,()=>{!e||e.destroyed||e.transitionEnd()}))):e.updateProgress(s),e.updateActiveIndex(),e.updateSlidesClasses()}else if(t.freeMode.sticky){e.slideToClosest();return}else t.freeMode&&i("_freeModeNoMomentumRelease");(!t.freeMode.momentum||p>=t.longSwipesMs)&&(i("_freeModeStaticRelease"),e.updateProgress(),e.updateActiveIndex(),e.updateSlidesClasses())}Object.assign(e,{freeMode:{onTouchStart:g,onTouchMove:a,onTouchEnd:v}})}function ie(){X("other-categories__slider",{slidesPerView:1.2,spaceBetween:16,breakpoints:{376:{slidesPerView:1.6,spaceBetween:16},768:{slidesPerView:2.5,spaceBetween:28},1023:{slidesPerView:3.5,spaceBetween:28},1439:{slidesPerView:4,spaceBetween:32}}})}M.registerPlugin(O);function B(r,e){document.querySelectorAll(r).forEach(i=>{const n=i.textContent;i.textContent="";let g="";M.to({},{duration:.08,stagger:.03,repeat:n.trim().length,ease:"power2.out",scrollTrigger:{trigger:e||i,start:"top 80%",toggleActions:"play none none none"},onRepeat:()=>{g=n.substring(0,i.textContent.length+1),i.textContent=g}})})}function ae(r){const e=r.querySelector(".category-item__modal"),l=r.querySelector(".category-item__modal-close"),i=r.querySelector(".category-item__modal-content"),n=r.querySelector(".category-item__slides-badge"),g=r.querySelector(".category-item__main-slider"),a=r.querySelector(".category-item__thumbnail-slider"),v=r.querySelector(".category-item__modal-slider");let h={},o=null;function t(){o&&o.destroy(!0,!0),o=new I(a,{loop:!0,spaceBetween:8,slidesPerView:3,watchSlidesProgress:!0,modules:[se],on:{init:function(){const s=a.querySelector(".category-item__slides-badge"),_=this.params.slidesPerView,w=this.slides.length-_;this.slides.length<=_||(s.textContent="+"+w,s.style.display="flex",p(this))},slideChange(){p(this),f(this)},resize(){p(this)},touchMove(){n&&(n.style.opacity="0")},touchEnd(){n&&(n.style.opacity="1")}}})}function m(){a&&(window.innerWidth<=767?(o&&(o.destroy(!0,!0),o=null),a.style.display="none"):(a.style.display="",o||t()))}m(),window.addEventListener("resize",()=>{m()});const u=new I(g,{loop:!0,spaceBetween:10,slideToClickedSlide:!0,navigation:{nextEl:g.querySelector(".category-item__swiper-button-next"),prevEl:g.querySelector(".category-item__swiper-button-prev")},pagination:{el:g.querySelector(".category-item__main-slider-pagination"),type:"progressbar"},thumbs:{swiper:o},modules:[q,V,te],on:{click(s,_){s.clickedIndex!==void 0&&(e==null||e.classList.add("show"),d==null||d.slideToLoop(s.realIndex),M.fromTo(i,{opacity:0,scale:.5},{opacity:1,scale:1,duration:.5,ease:"back.out(1.7)"}),z())},slideChange:()=>{T()}}}),d=new I(v,{loop:!0,spaceBetween:10,modules:[q,V],navigation:{nextEl:v.querySelector(".category-item__swiper-button-next"),prevEl:v.querySelector(".category-item__swiper-button-prev")},pagination:{el:e.querySelector(".category-item__modal-pagination"),type:"fraction"},on:{slideChange(s){u==null||u.slideToLoop(s.realIndex)}}});function f(s){s.slides.forEach(_=>{_.querySelectorAll("video").forEach(S=>{S.pause(),S.currentTime=0})})}function T(){Object.values(h).forEach(s=>{s.pauseVideo&&s.pauseVideo()})}function p(s){var w;if(!s)return;s.slides.forEach(S=>S.classList.remove("blur"));const _=Math.min(s.activeIndex+s.params.slidesPerView-1,s.slides.length-1);(w=s.slides[_])==null||w.classList.add("blur")}function c(){M.to(i,{opacity:0,scale:.5,duration:.3,ease:"power2.in",onComplete:()=>{T(),e==null||e.classList.remove("show"),F()}})}l==null||l.addEventListener("click",c),e==null||e.addEventListener("click",function(s){s.target===e&&c()}),r.querySelectorAll(".video-container").forEach(s=>{s.addEventListener("click",function(){const _=this.dataset.video,w=this.dataset.width||560,S=this.dataset.height||315,y=document.createElement("iframe");y.width=w,y.height=S,y.className=this.className,y.src=`https://www.youtube.com/embed/${_}?enablejsapi=1`,y.allow="autoplay; encrypted-media",y.allowFullscreen=!0,y.id=`youtube-player-${Math.floor(Math.random()*1e4)}`,this.replaceWith(y),h[y.id]=new YT.Player(y.id,{events:{onReady:b=>{b.target.playVideo()}}})})})}function oe(r){const e=window.getComputedStyle(r),l=parseFloat(e.lineHeight),i=r.scrollHeight;return Math.round(i/l)}function re(r,e){const l=parseInt(window.getComputedStyle(e).getPropertyValue("-webkit-line-clamp"),10);if(oe(e)>l){r.classList.add("visible");return}r.classList.remove("visible")}function ne(r){const e=r.querySelectorAll(".category-item__more"),l=()=>{e.forEach(i=>{const g=i.closest(".category-item__description").querySelector(".category-item__editor");re(i,g)})};l(),window.addEventListener("resize",()=>{l()}),e.forEach(i=>{const n=i.closest(".category-item__description");i.addEventListener("click",()=>{n.classList.toggle("show"),i.textContent=n.classList.contains("show")?"Менше":"Більше"})})}const le={all:{ua:"Усі",en:"All"},"more-comfortable-in-the-dark":{ua:"Зручніше в темряві",en:"More comfortable in the dark"},"quick-equipment":{ua:"Швидше споряджання",en:"Quick equipment"},"protection-against-dust-and-dirt":{ua:"Захист від пилу та бруду",en:"Protection against dust and dirt"},"less-effort-when-charging":{ua:"Менше зусиль при заряджанні",en:"Less effort when charging"},"more-comfortable-in-cold":{ua:"Зручніше на морозі",en:"More comfortable in the cold"},"more-comfortable-at-sea":{ua:"Зручніше на морі",en:"More comfortable at sea"}};function ce(r){const e=r.querySelector(".category-item__buy-button"),l={id:r.dataset.id,category:r.dataset.category},i=()=>{(JSON.parse(localStorage.getItem("checkoutProducts"))||[]).some(a=>String(a.id)===String(l.id)&&String(a.category)===String(l.category))?(r.classList.add("added"),e.querySelector(".button-text").textContent="В кошику"):(r.classList.remove("added"),e.querySelector(".button-text").textContent="Купити")};i(),window.addEventListener("checkoutProductsUpdated",i),e.addEventListener("click",()=>{const n=JSON.parse(localStorage.getItem("checkoutProducts"))||[];if(!n.some(a=>String(a.id)===String(l.id)&&String(a.category)===String(l.category))){const a=[...n,l];N(a)}})}const de="ua";function ue(r){const e=JSON.parse(localStorage.getItem("checkoutProducts"))||[];let l=[];return r.forEach(i=>{const n=document.createElement("article"),g=e.find(a=>String(a.id)===String(i.id)&&a.category===i.category);n.classList.add(...["category-item",g?"added":null].filter(Boolean)),n.setAttribute("data-id",i.id),n.setAttribute("data-category",i.category),n.innerHTML=`
    <div class="modal category-item__modal">
      <div class="category-item__modal-content">
        <button type="button" class="category-item__modal-close" aria-label='close modal'>
          <svg class="category-item__close-icon">
            <use xlink:href="#plus"></use>
          </svg>
        </button>

        <div class="category-item__modal-slider swiper">
          <div class="swiper-wrapper">
          ${i.images.map(a=>`
              <div class="swiper-slide">
                ${a.type==="image"?`
                      <picture>
                        <source srcset="${a.webp_url}" type="image/webp">
                        <img class="category-item__img" src="${a.url}" alt="${a.alt}" width="429" height="437" loading="lazy">
                      </picture>
                    `:a.type==="video"?`<div class='video-container category-item__img' data-video='${a.video_id}' data-width="429" data-height="437">
                  <img class='category-item__img' src="https://img.youtube.com/vi/${a.video_id}/hqdefault.jpg" width="429"
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
          <p class='category-item__modal-text'>${i.title}</p>

          <div class='category-item__modal-pagination'> </div>
        </div>
      </div>
    </div>

    <div class='category-item__slider'>
    <div class="swiper-container-wrapper">
      <div class="swiper category-item__main-slider">
        <div class="swiper-wrapper">
          ${i.images.map(a=>`
              <div class="swiper-slide">
                ${a.type==="image"?`
                      <picture>
                        <source srcset="${a.webp_url}" type="image/webp">
                        <img class="category-item__img" src="${a.url}" alt="${a.alt}" width="429" height="437" loading="lazy">
                      </picture>
                    `:a.type==="video"?`
                      <div class='category-item__img'>
                        <img class='category-item__img' src="https://img.youtube.com/vi/${a.video_id}/hqdefault.jpg" width="429" height="437" alt="Preview">

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

    ${i.images.length>1?`
    <div class="swiper category-item__thumbnail-slider">
      <div class="swiper-wrapper">
        ${i.images.map(a=>`
              <div class="swiper-slide">
                ${a.type==="image"?`
                      <picture>
                        <source srcset="${a.webp_url}" type="image/webp">
                        <img class="category-item__img" src="${a.url}" alt="${a.alt}" width="429" height="437" loading="lazy">
                      </picture>
                    `:a.type==="video"?`
                      <div class='category-item__img'>
                        <img class='category-item__img' src="https://img.youtube.com/vi/${a.video_id}/hqdefault.jpg" width="429" height="437" alt="Preview">

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
    <h2 class='category-item__title'>${i.title}</h2>

    <ul class='category-item__tags'>
      ${i.tags_in_category.map(a=>`
          <li class='category-item__tag category-item__tag_main'>${a}</li>
        `).join("")}
    </ul>

    <div class='category-item__description'>
      <div class='category-item__editor'>
        ${i.description}
      </div>

      <button class='category-item__more' type='button'>Більше</button>
    </div>

    <ul class='category-item__tags'>
      ${i.tags.map(a=>{var v;return`
          <li class='category-item__tag'>${((v=le[a])==null?void 0:v[de])||a}</li>
        `}).join("")}
    </ul>

    <div class='category-item__bottom'>
      <div class='category-item__price'>
        <div class='category-item__amount'>
          <p class='category-item__text category-item__text_accent'>
            <span class='category-item__price_accent'>${i.transferred_amount.toLocaleString("uk-UA")}</span> <span>одиниць</span>
          </p>
          <p class='category-item__text'>передано</p>
        </div>

        <div class='category-item__price-per-unit'>
          <p class='category-item__text category-item__text_accent'>
            <span class='category-item__price_accent'>${i.price_per_unit.toLocaleString("uk-UA",{minimumFractionDigits:2,maximumFractionDigits:2})}</span> <span>грн</span>
          </p>
          <p class='category-item__text'>собівартість за од.</p>
        </div>
      </div>

      <button class='button category-item__buy-button' type='button'>
        <span class='button-text'>${g?"В кошику":"Замовити"}</span>

        <svg class="button-icon">
          <use xlink:href="#plus"></use>
        </svg>
      </button>
    </div>
  </div>
  `,ae(n),ne(n),ce(n),l.push(n)}),l}const me="/TAKO/",A=document.querySelector(".categories__list"),D=A.closest(".categories__container");function j(r){if(r.length===0){D.classList.add("empty");return}A.innerHTML="",A.append(...ue(r)),D.classList.remove("empty")}async function pe(){const r=await H(`${me}data/categories/for-weapon.json`),e=document.querySelectorAll('input[name="categories-selector"]');let l=r;e.forEach(i=>{i.addEventListener("change",()=>{l=i.value==="all"?r:r.filter(n=>n.tags.includes(i.value)),j(l)})}),j(l)}document.addEventListener("DOMContentLoaded",()=>{const r=[{selector:".header",callback:()=>{k([".header__products-button",".header__button-contacts",".header__button-support",".header__button-badge"],".header",.3,.1),C([".header__logo",".navigation__link"],".header",.5,.2)}},{selector:".hero-banner",callback:()=>{B(".hero-banner__title",".hero-banner"),k([".hero-banner__text"],".hero-banner")}},{selector:".about",callback:()=>{k([".about__title",".about__text"],".about__container"),B(".about__title",".about__container")}},{selector:".other-categories",callback:()=>{k([".other-categories__title"],".other-categories"),Q([".other-categories__slide"],".other-categories")}},{selector:".how-work",callback:()=>k([".how-work__title"],".how-work")},{selector:".bank-details",callback:()=>{k([".bank-details__title"],".bank-details"),C([".bank-details__code-wrapper"],".bank-details")}},{selector:".footer",callback:()=>{k([".footer__text",".footer__button-contact"],".footer"),k([".footer__item"],".footer",.3,.1),C([".footer__logo",".footer__socials-item"],".footer")}}];O.killAll(),Z(),U(),K(),ie(),ee(),pe(),r.forEach(({selector:e,callback:l})=>{W(e,l)})});

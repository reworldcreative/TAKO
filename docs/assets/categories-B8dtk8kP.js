import{g as N,i as H,e as R,n as L,a as k,s as z,S as I,N as A,P as V}from"./flip-lLGq5iyu.js";import{f as C,S as F,d as U,j as W,u as G,g as J}from"./scale-CRV3HJO1.js";function Y(i){let{swiper:e,extendParams:r,on:a}=i;r({thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-thumbs"}});let l=!1,c=!1;e.thumbs={swiper:null};function n(){const s=e.thumbs.swiper;if(!s||s.destroyed)return;const t=s.clickedIndex,m=s.clickedSlide;if(m&&m.classList.contains(e.params.thumbs.slideThumbActiveClass)||typeof t>"u"||t===null)return;let g;s.params.loop?g=parseInt(s.clickedSlide.getAttribute("data-swiper-slide-index"),10):g=t,e.params.loop?e.slideToLoop(g):e.slideTo(g)}function h(){const{thumbs:s}=e.params;if(l)return!1;l=!0;const t=e.constructor;if(s.swiper instanceof t){if(s.swiper.destroyed)return l=!1,!1;e.thumbs.swiper=s.swiper,Object.assign(e.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),Object.assign(e.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper.update()}else if(H(s.swiper)){const m=Object.assign({},s.swiper);Object.assign(m,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper=new t(m),c=!0}return e.thumbs.swiper.el.classList.add(e.params.thumbs.thumbsContainerClass),e.thumbs.swiper.on("tap",n),!0}function d(s){const t=e.thumbs.swiper;if(!t||t.destroyed)return;const m=t.params.slidesPerView==="auto"?t.slidesPerViewDynamic():t.params.slidesPerView;let g=1;const p=e.params.thumbs.slideThumbActiveClass;if(e.params.slidesPerView>1&&!e.params.centeredSlides&&(g=e.params.slidesPerView),e.params.thumbs.multipleActiveThumbs||(g=1),g=Math.floor(g),t.slides.forEach(f=>f.classList.remove(p)),t.params.loop||t.params.virtual&&t.params.virtual.enabled)for(let f=0;f<g;f+=1)R(t.slidesEl,`[data-swiper-slide-index="${e.realIndex+f}"]`).forEach(u=>{u.classList.add(p)});else for(let f=0;f<g;f+=1)t.slides[e.realIndex+f]&&t.slides[e.realIndex+f].classList.add(p);const y=e.params.thumbs.autoScrollOffset,E=y&&!t.params.loop;if(e.realIndex!==t.realIndex||E){const f=t.activeIndex;let u,P;if(t.params.loop){const o=t.slides.find(v=>v.getAttribute("data-swiper-slide-index")===`${e.realIndex}`);u=t.slides.indexOf(o),P=e.activeIndex>e.previousIndex?"next":"prev"}else u=e.realIndex,P=u>e.previousIndex?"next":"prev";E&&(u+=P==="next"?y:-1*y),t.visibleSlidesIndexes&&t.visibleSlidesIndexes.indexOf(u)<0&&(t.params.centeredSlides?u>f?u=u-Math.floor(m/2)+1:u=u+Math.floor(m/2)-1:u>f&&t.params.slidesPerGroup,t.slideTo(u,s?0:void 0))}}a("beforeInit",()=>{const{thumbs:s}=e.params;if(!(!s||!s.swiper))if(typeof s.swiper=="string"||s.swiper instanceof HTMLElement){const t=N(),m=()=>{const p=typeof s.swiper=="string"?t.querySelector(s.swiper):s.swiper;if(p&&p.swiper)s.swiper=p.swiper,h(),d(!0);else if(p){const y=`${e.params.eventsPrefix}init`,E=f=>{s.swiper=f.detail[0],p.removeEventListener(y,E),h(),d(!0),s.swiper.update(),e.update()};p.addEventListener(y,E)}return p},g=()=>{if(e.destroyed)return;m()||requestAnimationFrame(g)};requestAnimationFrame(g)}else h(),d(!0)}),a("slideChange update resize observerUpdate",()=>{d()}),a("setTransition",(s,t)=>{const m=e.thumbs.swiper;!m||m.destroyed||m.setTransition(t)}),a("beforeDestroy",()=>{const s=e.thumbs.swiper;!s||s.destroyed||c&&s.destroy()}),Object.assign(e.thumbs,{init:h,update:d})}function X(i){let{swiper:e,extendParams:r,emit:a,once:l}=i;r({freeMode:{enabled:!1,momentum:!0,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,momentumVelocityRatio:1,sticky:!1,minimumVelocity:.02}});function c(){if(e.params.cssMode)return;const d=e.getTranslate();e.setTranslate(d),e.setTransition(0),e.touchEventsData.velocities.length=0,e.freeMode.onTouchEnd({currentPos:e.rtl?e.translate:-e.translate})}function n(){if(e.params.cssMode)return;const{touchEventsData:d,touches:s}=e;d.velocities.length===0&&d.velocities.push({position:s[e.isHorizontal()?"startX":"startY"],time:d.touchStartTime}),d.velocities.push({position:s[e.isHorizontal()?"currentX":"currentY"],time:L()})}function h(d){let{currentPos:s}=d;if(e.params.cssMode)return;const{params:t,wrapperEl:m,rtlTranslate:g,snapGrid:p,touchEventsData:y}=e,f=L()-y.touchStartTime;if(s<-e.minTranslate()){e.slideTo(e.activeIndex);return}if(s>-e.maxTranslate()){e.slides.length<p.length?e.slideTo(p.length-1):e.slideTo(e.slides.length-1);return}if(t.freeMode.momentum){if(y.velocities.length>1){const b=y.velocities.pop(),T=y.velocities.pop(),j=b.position-T.position,q=b.time-T.time;e.velocity=j/q,e.velocity/=2,Math.abs(e.velocity)<t.freeMode.minimumVelocity&&(e.velocity=0),(q>150||L()-b.time>300)&&(e.velocity=0)}else e.velocity=0;e.velocity*=t.freeMode.momentumVelocityRatio,y.velocities.length=0;let u=1e3*t.freeMode.momentumRatio;const P=e.velocity*u;let o=e.translate+P;g&&(o=-o);let v=!1,w;const S=Math.abs(e.velocity)*20*t.freeMode.momentumBounceRatio;let _;if(o<e.maxTranslate())t.freeMode.momentumBounce?(o+e.maxTranslate()<-S&&(o=e.maxTranslate()-S),w=e.maxTranslate(),v=!0,y.allowMomentumBounce=!0):o=e.maxTranslate(),t.loop&&t.centeredSlides&&(_=!0);else if(o>e.minTranslate())t.freeMode.momentumBounce?(o-e.minTranslate()>S&&(o=e.minTranslate()+S),w=e.minTranslate(),v=!0,y.allowMomentumBounce=!0):o=e.minTranslate(),t.loop&&t.centeredSlides&&(_=!0);else if(t.freeMode.sticky){let b;for(let T=0;T<p.length;T+=1)if(p[T]>-o){b=T;break}Math.abs(p[b]-o)<Math.abs(p[b-1]-o)||e.swipeDirection==="next"?o=p[b]:o=p[b-1],o=-o}if(_&&l("transitionEnd",()=>{e.loopFix()}),e.velocity!==0){if(g?u=Math.abs((-o-e.translate)/e.velocity):u=Math.abs((o-e.translate)/e.velocity),t.freeMode.sticky){const b=Math.abs((g?-o:o)-e.translate),T=e.slidesSizesGrid[e.activeIndex];b<T?u=t.speed:b<2*T?u=t.speed*1.5:u=t.speed*2.5}}else if(t.freeMode.sticky){e.slideToClosest();return}t.freeMode.momentumBounce&&v?(e.updateProgress(w),e.setTransition(u),e.setTranslate(o),e.transitionStart(!0,e.swipeDirection),e.animating=!0,k(m,()=>{!e||e.destroyed||!y.allowMomentumBounce||(a("momentumBounce"),e.setTransition(t.speed),setTimeout(()=>{e.setTranslate(w),k(m,()=>{!e||e.destroyed||e.transitionEnd()})},0))})):e.velocity?(a("_freeModeNoMomentumRelease"),e.updateProgress(o),e.setTransition(u),e.setTranslate(o),e.transitionStart(!0,e.swipeDirection),e.animating||(e.animating=!0,k(m,()=>{!e||e.destroyed||e.transitionEnd()}))):e.updateProgress(o),e.updateActiveIndex(),e.updateSlidesClasses()}else if(t.freeMode.sticky){e.slideToClosest();return}else t.freeMode&&a("_freeModeNoMomentumRelease");(!t.freeMode.momentum||f>=t.longSwipesMs)&&(a("_freeModeStaticRelease"),e.updateProgress(),e.updateActiveIndex(),e.updateSlidesClasses())}Object.assign(e,{freeMode:{onTouchStart:c,onTouchMove:n,onTouchEnd:h}})}function le(){z("other-categories__slider",{slidesPerView:1.2,spaceBetween:16,breakpoints:{376:{slidesPerView:1.6,spaceBetween:16},768:{slidesPerView:2.5,spaceBetween:28},1023:{slidesPerView:3.5,spaceBetween:28},1439:{slidesPerView:4,spaceBetween:32}}})}C.registerPlugin(F);function ce(i,e){document.querySelectorAll(i).forEach(a=>{const l=a.textContent;a.textContent="";let c="";C.to({},{duration:.08,stagger:.03,repeat:l.trim().length,ease:"power2.out",scrollTrigger:{trigger:e||a,start:"top 80%",toggleActions:"play none none none"},onRepeat:()=>{c=l.substring(0,a.textContent.length+1),a.textContent=c}})})}function K(i){const e=i.querySelector(".category-item__modal"),r=i.querySelector(".category-item__modal-close"),a=i.querySelector(".category-item__modal-content"),l=i.querySelector(".category-item__slides-badge"),c=i.querySelector(".category-item__main-slider"),n=i.querySelector(".category-item__thumbnail-slider"),h=i.querySelector(".category-item__modal-slider");let d={},s=null;function t(){s&&s.destroy(!0,!0),s=new I(n,{loop:!1,spaceBetween:8,slidesPerView:3,watchSlidesProgress:!0,modules:[X],on:{init:function(){const o=n.querySelector(".category-item__slides-badge"),v=this.params.slidesPerView,w=this.slides.length-v;this.slides.length<=v||(o.textContent="+"+w,o.style.display="flex",f(this))},slideChange(){f(this),y(this)},resize(){f(this)},touchMove(){l&&(l.style.opacity="0")},touchEnd(){l&&(l.style.opacity="1")}}})}function m(){n&&(window.innerWidth<=767?(s&&(s.destroy(!0,!0),s=null),n.style.display="none"):(n.style.display="",s||t()))}m(),window.addEventListener("resize",()=>{m()});const g=new I(c,{loop:!1,spaceBetween:10,slideToClickedSlide:!0,navigation:{nextEl:c.querySelector(".category-item__swiper-button-next"),prevEl:c.querySelector(".category-item__swiper-button-prev")},pagination:{el:c.querySelector(".category-item__main-slider-pagination"),type:"progressbar"},thumbs:{swiper:s},modules:[A,V,Y],on:{click(o,v){o.clickedIndex!==void 0&&(e==null||e.classList.add("show"),p==null||p.slideToLoop(o.realIndex),C.fromTo(a,{opacity:0,scale:.5},{opacity:1,scale:1,duration:.5,ease:"back.out(1.7)"}),U())},slideChange:()=>{E()}}}),p=new I(h,{loop:!1,spaceBetween:10,modules:[A,V],navigation:{nextEl:h.querySelector(".category-item__swiper-button-next"),prevEl:h.querySelector(".category-item__swiper-button-prev")},pagination:{el:e.querySelector(".category-item__modal-pagination"),type:"fraction"},on:{slideChange(o){g==null||g.slideToLoop(o.realIndex)}}});function y(o){o.slides.forEach(v=>{v.querySelectorAll("video").forEach(S=>{S.pause(),S.currentTime=0})})}function E(){Object.values(d).forEach(o=>{o.pauseVideo&&o.pauseVideo()})}function f(o){var w;if(!o)return;o.slides.forEach(S=>S.classList.remove("blur"));const v=Math.min(o.activeIndex+o.params.slidesPerView-1,o.slides.length-1);(w=o.slides[v])==null||w.classList.add("blur")}function u(){C.to(a,{opacity:0,scale:.5,duration:.3,ease:"power2.in",onComplete:()=>{E(),e==null||e.classList.remove("show"),W()}})}r==null||r.addEventListener("click",u),e==null||e.addEventListener("click",function(o){o.target===e&&u()}),i.querySelectorAll(".video-container").forEach(o=>{o.addEventListener("click",function(){const v=this.dataset.video,w=this.dataset.width||560,S=this.dataset.height||315,_=document.createElement("iframe");_.width=w,_.height=S,_.className=this.className,_.src=`https://www.youtube.com/embed/${v}?enablejsapi=1`,_.allow="autoplay; encrypted-media",_.allowFullscreen=!0,_.id=`youtube-player-${Math.floor(Math.random()*1e4)}`,this.replaceWith(_),d[_.id]=new YT.Player(_.id,{events:{onReady:b=>{b.target.playVideo()}}})})})}function Q(i){const e=window.getComputedStyle(i),r=parseFloat(e.lineHeight),a=i.scrollHeight;return Math.round(a/r)}function Z(i,e){const r=parseInt(window.getComputedStyle(e).getPropertyValue("-webkit-line-clamp"),10);if(Q(e)>r){i.classList.add("visible");return}i.classList.remove("visible")}function ee(i){const e=i.querySelectorAll(".category-item__more"),r=()=>{e.forEach(a=>{const c=a.closest(".category-item__description").querySelector(".category-item__editor");Z(a,c)})};r(),window.addEventListener("resize",()=>{r()}),e.forEach(a=>{const l=a.closest(".category-item__description");a.addEventListener("click",()=>{l.classList.toggle("show"),a.textContent=l.classList.contains("show")?"Менше":"Більше"})})}const te={all:{ua:"Усі",en:"All"},"more-comfortable-in-dark":{ua:"Зручніше в темряві",en:"More comfortable in the dark"},"quick-equipment":{ua:"Швидше споряджання",en:"Quick equipment"},"protection-against-dust-and-dirt":{ua:"Захист від пилу та бруду",en:"Protection against dust and dirt"},"less-effort-when-charging":{ua:"Менше зусиль при заряджанні",en:"Less effort when charging"},"more-comfortable-in-cold":{ua:"Зручніше на морозі",en:"More comfortable in the cold"},"more-comfortable-at-sea":{ua:"Зручніше на морі",en:"More comfortable at sea"}};function ie(i){const e=i.querySelector(".category-item__buy-button"),r={id:i.dataset.id,category:i.dataset.category},a=()=>{(JSON.parse(localStorage.getItem("checkoutProducts"))||[]).some(n=>String(n.id)===String(r.id)&&String(n.category)===String(r.category))?(i.classList.add("added"),e.querySelector(".button-text").textContent="В кошику"):(i.classList.remove("added"),e.querySelector(".button-text").textContent="Купити")};a(),window.addEventListener("checkoutProductsUpdated",a),e.addEventListener("click",()=>{const l=JSON.parse(localStorage.getItem("checkoutProducts"))||[];if(!l.some(n=>String(n.id)===String(r.id)&&String(n.category)===String(r.category))){const n=[...l,r];G(n)}})}const se="ua";function B(i){const e=JSON.parse(localStorage.getItem("checkoutProducts"))||[];let r=[];return i.forEach(a=>{const l=document.createElement("article"),c=e.find(n=>String(n.id)===String(a.id)&&n.category===a.category);l.classList.add(...["category-item",c?"added":null].filter(Boolean)),l.setAttribute("data-id",a.id),l.setAttribute("data-category",a.category),l.innerHTML=`
    <div class="modal category-item__modal">
      <div class="category-item__modal-content">
        <button type="button" class="category-item__modal-close" aria-label='close modal'>
          <svg class="category-item__close-icon">
            <use xlink:href="#plus"></use>
          </svg>
        </button>

        <div class="category-item__modal-slider swiper">
          <div class="swiper-wrapper">
          ${a.images.map(n=>`
              <div class="swiper-slide">
                ${n.type==="image"?`
                      <picture>
                        <source srcset="${n.webp_url}" type="image/webp">
                        <img class="category-item__img" src="${n.url}" alt="${n.alt}" width="429" height="437" loading="lazy">
                      </picture>
                    `:n.type==="video"?`<div class='video-container category-item__img' data-video='${n.video_id}' data-width="429" data-height="437">
                  <img class='category-item__img' src="https://img.youtube.com/vi/${n.video_id}/hqdefault.jpg" width="429"
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
          ${a.images.map(n=>`
              <div class="swiper-slide">
                ${n.type==="image"?`
                      <picture>
                        <source srcset="${n.webp_url}" type="image/webp">
                        <img class="category-item__img" src="${n.url}" alt="${n.alt}" width="429" height="437" loading="lazy">
                      </picture>
                    `:n.type==="video"?`
                      <div class='category-item__img'>
                        <img class='category-item__img' src="https://img.youtube.com/vi/${n.video_id}/hqdefault.jpg" width="429" height="437" alt="Preview">

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
        ${a.images.map(n=>`
              <div class="swiper-slide">
                ${n.type==="image"?`
                      <picture>
                        <source srcset="${n.webp_url}" type="image/webp">
                        <img class="category-item__img" src="${n.url}" alt="${n.alt}" width="429" height="437" loading="lazy">
                      </picture>
                    `:n.type==="video"?`
                      <div class='category-item__img'>
                        <img class='category-item__img' src="https://img.youtube.com/vi/${n.video_id}/hqdefault.jpg" width="429" height="437" alt="Preview">

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
      ${a.tags_in_category.map(n=>`
          <li class='category-item__tag category-item__tag_main'>${n}</li>
        `).join("")}
    </ul>

    <div class='category-item__description'>
      <div class='category-item__editor'>
        ${a.description}
      </div>

      <button class='category-item__more' type='button'>Більше</button>
    </div>

    <ul class='category-item__tags'>
      ${a.tags.map(n=>{var h;return`
          <li class='category-item__tag'>${((h=te[n])==null?void 0:h[se])||n}</li>
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
        <span class='button-text'>${c?"В кошику":"Замовити"}</span>

        <svg class="button-icon">
          <use xlink:href="#plus"></use>
        </svg>
      </button>
    </div>
  </div>
  `,K(l),ee(l),ie(l),r.push(l)}),r}const M=document.querySelector(".categories__list"),$=M.closest(".categories__container");function x(i,e=!1){const r=document.createElement("button");return r.className=`pagination__item ${i==="..."?"pagination__dots":""} ${e?"active":""}`,r.type="button",r.textContent=i,r}function ae(i,e){const a=(window.innerWidth<350?[i-1,i,i+1]:[i-2,i-1,i,i+1,i+2]).filter(s=>s>1&&s<e).map(s=>x(s,s===i)),l=i===5,c=i===e-4,n=i>5,h=i<e-4;l&&a.unshift(x(2)),c&&a.push(x(e-1)),n&&a.unshift(x("...")),h&&a.push(x("..."));const d=[x(1,i===1),...a,x(e,i===e)];if(e<=7&&window.innerWidth>=350){const s=[];for(let t=1;t<=e;t++)s.push(x(t,t===i));return s}if(d.length>7){const s=[];s.push(d[0]),i>4&&s.push(x("..."));for(let t=i-1;t<=i+1;t++)t>1&&t<e&&s.push(x(t,t===i));return i<e-3&&s.push(x("...")),s.push(d[d.length-1]),s}return d}const D=(i,e,r)=>{const a=(r-1)*e,l=a+e;return i.slice(a,l)};async function O(i){let r=1,a=1;if(i.length===0){$.classList.add("empty");return}const l=document.querySelector(".pagination"),c=document.createElement("button"),n=document.createElement("button");c.className="pagination__item pagination__button pagination__button_prev disabled",c.type="button",c.innerHTML=`
    <svg class="icon pagination__arrow">
      <use xlink:href="#arrow-right"></use>
    </svg>`,n.className="pagination__item pagination__button pagination__button_next",n.type="button",n.innerHTML=`
    <svg class="icon pagination__arrow">
      <use xlink:href="#arrow-right"></use>
    </svg>`;async function h(d){if(!i)return;if(a=Math.ceil(i.length/6),a<=1){l.innerHTML="",M.innerHTML="",M.append(...B(D(i,6,r))),$.classList.remove("empty");return}for(l.contains(c)||(l.appendChild(c),l.appendChild(n));n.previousSibling&&n.previousSibling!==c;)l.removeChild(n.previousSibling);const s=ae(d,a);s.forEach(t=>l.insertBefore(t,n)),s.forEach(t=>{t.addEventListener("click",()=>{if(t.textContent==="...")return;const m=Number(t.textContent);!isNaN(m)&&m!==r&&(r=m,h(r))})}),c.classList.toggle("disabled",d===1),n.classList.toggle("disabled",d===a),M.innerHTML="",M.append(...B(D(i,6,r))),$.classList.remove("empty")}await h(r),c.addEventListener("click",()=>{r>1&&(r--,h(r))}),n.addEventListener("click",()=>{r<a&&(r++,h(r))})}const ne="/TAKO/";async function de(i){const r=(await J(`${ne}data/categories/categories.json`)).filter(c=>c.category===i),a=document.querySelectorAll('input[name="categories-selector"]');let l=r;a.forEach(c=>{c.addEventListener("change",()=>{l=c.value==="all"?r:r.filter(n=>n.tags.includes(c.value)),O(l)})}),O(l)}export{de as c,le as o,ce as p};

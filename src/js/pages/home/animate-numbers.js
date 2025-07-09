import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

export function animateNumbers(numbersClassName) {
  gsap.registerPlugin(ScrollTrigger);

  const formatNumber = (num) =>
    num.toLocaleString('uk-UA');

  document.querySelectorAll(numbersClassName).forEach(counter => {
    const targetValue = +counter.dataset.target;
    const obj = { val: 0 };

    ScrollTrigger.create({
      trigger: counter,
      start: 'top 90%',
      once: true,
      onEnter: () => {
        gsap.to(obj, {
          val: targetValue,
          duration: 1.5,
          ease: 'power1.out',
          onUpdate: () => {
            counter.textContent = formatNumber(Math.floor(obj.val));
          }
        });
      }
    });
  });
}
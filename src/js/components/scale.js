import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

export function scaleRevealAnimation(elements, triggerContainer, duration = 1, stagger = 0.2) {
  gsap.from([...elements], {
    scale: 0,
    opacity: 0,
    duration: duration,
    ease: "power2.out",
    stagger: stagger,
    scrollTrigger: {
      trigger: triggerContainer,
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });
}

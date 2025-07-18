import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function appearanceAnimation(classes, tigerContainer, duration = 1, stagger = 0.3) {
  gsap.from([...classes], {
    y: 50,
    opacity: 0,
    duration: duration,
    ease: "power2.out",
    stagger: stagger,
    scrollTrigger: {
      trigger: tigerContainer,
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });
}
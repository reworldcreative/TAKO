import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function appearanceAnimation(classes, tigerContainer) {
  gsap.from([...classes], {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    stagger: 0.3,
    scrollTrigger: {
      trigger: tigerContainer,
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });
}
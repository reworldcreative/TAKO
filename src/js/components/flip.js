import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

export function rotateRevealAnimation(elements, triggerContainer) {
  gsap.from([...elements], {
    rotationX: 45,
    rotationY: 45,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    stagger: 0.2,
    scrollTrigger: {
      trigger: triggerContainer,
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });
}

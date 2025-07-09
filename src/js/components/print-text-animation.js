import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function printTextAnimation(classes, containerSelector) {
  const elements = document.querySelectorAll(classes);

  elements.forEach(element => {
    const fullText = element.textContent;
    element.textContent = "";

    let currentText = "";

    gsap.to({}, {
      duration: 0.08,
      stagger: 0.03,
      repeat: fullText.trim().length,
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerSelector || element,
        start: "top 80%",
        toggleActions: "play none none none"
      },
      onRepeat: () => {
        currentText = fullText.substring(0, element.textContent.length + 1);
        element.textContent = currentText;
      }
    });
  });
}

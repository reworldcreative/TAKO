
export function observeElements(targets, callback, options = {}, once = true) {
  const defaultOptions = {
    root: null,
    rootMargin: "0px 0px -20% 0px",
    threshold: 0,
    ...options
  };

  let elements;

  if (typeof targets === "string") {
    elements = document.querySelectorAll(targets);
  } else if (NodeList.prototype.isPrototypeOf(targets) || Array.isArray(targets)) {
    elements = targets;
  } else if (targets instanceof Element) {
    elements = [targets];
  } else {
    return;
  }

  if (elements.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        callback(entry);

        if (once) {
          observer.unobserve(entry.target);
        }
      }
    });
  }, defaultOptions);

  elements.forEach(el => observer.observe(el));
}

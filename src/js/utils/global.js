
export function globalSettings() {
  document.body.addEventListener('dragstart', event => {
    event.preventDefault();
  });
}
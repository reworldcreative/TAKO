export function playVideo() {
  const videos = document.querySelectorAll('.video-container');

  videos.forEach(video => {
    video.addEventListener('click', function () {
      this.outerHTML = `
      <iframe class="${video.className}" width="${video.dataset.width}" height="${video.dataset.height}"
        src="https://www.youtube.com/embed/${video.dataset.video}?enablejsapi=1"
        frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>
      </iframe>`;
    });
  });
}
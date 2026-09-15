document.addEventListener('DOMContentLoaded', () => {
  const videos = document.querySelectorAll('video[autoplay]');
  if (!videos.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.play().catch(() => {});
        }
      });
    },
    { threshold: 0.05 }
  );

  videos.forEach((video) => observer.observe(video));
});

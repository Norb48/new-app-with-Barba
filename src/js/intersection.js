
export function init(container) {
  const slideInContents = container.querySelectorAll('.slide-in')

  const showOptions = {
    threshold: 0,
    rootMargin: " 0px 0px -10% 0px"
  };
  const showOnScroll = new IntersectionObserver(function (
      entries, showOnScroll) {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          return;
        } else {
          entry.target.classList.add('show');
          showOnScroll.unobserve(entry.target);
        }
      })
    },
    showOptions);
  slideInContents.forEach(slideInContent => {
    showOnScroll.observe(slideInContent)
  });
}
let sectionsScroll, sections, rightNav;

export function init(container) {
  sectionsScroll = container.querySelector('.scroll');
  sections = container.querySelectorAll('.section-link');
  rightNav = container.querySelectorAll('.rightnav-link');

  sectionsScroll.addEventListener('scroll', () => {
    let scrollTop = sectionsScroll.scrollTop;

    sections.forEach((section, i) => {
      if (section.offsetTop < scrollTop + window.innerHeight / 4 && scrollTop < section.offsetTop + window.innerHeight / 4) {
        rightNav.forEach((link) => {
          link.classList.remove('current-section');
        });

        rightNav[i].classList.add('current-section');
      }
    })
  });
}

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
    rightNav.forEach(link => link.addEventListener('click', rightNavClick));

  function rightNavClick(e) {
    smoothScroll(e);

    function smoothScroll(e) {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute("href");
      container.querySelector(targetId).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  };
}

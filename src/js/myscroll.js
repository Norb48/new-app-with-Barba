let sectionsScroll = document.querySelector('.scroll');
let sections = document.querySelectorAll('.section-link');
let rightNav = document.querySelectorAll('.rightnav-link');
let windowHeight = window.innerHeight;

export function init() {
  sectionsScroll.addEventListener('scroll', () => {
    let scrollTop = sectionsScroll.scrollTop;
    sections.forEach((section, i) => {
      if (section.offsetTop < scrollTop + windowHeight / 4 && scrollTop < section.offsetTop + windowHeight / 4) {
        rightNav.forEach((link) => {
          link.classList.remove('current-section');
        });

        rightNav[i].classList.add('current-section');
      }
    })
  });
}

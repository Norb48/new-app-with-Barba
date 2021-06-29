

export function init(container) {
 const rightNav =container.querySelectorAll('.rightnav-link');
 rightNav.forEach(link => link.addEventListener('click', rightNavClick));
 function rightNavClick(e) {
  smoothScroll(e);

  function smoothScroll(e) {
   e.preventDefault();
   const targetId = e.currentTarget.getAttribute("href");
   document.querySelector(targetId).scrollIntoView({
    behavior: 'smooth',
    block: 'start',
   })
  }
 };

 
 const currentLocation = location.href;
 const rightNavLength = rightNav.length;
 for(let i = 0; i<rightNavLength; i++){
  if(rightNav[i].href === currentLocation){
   rightNav[i].classList.add('current-section');
   rightNav[i].classList.remove('current-section')
  }
 }
}

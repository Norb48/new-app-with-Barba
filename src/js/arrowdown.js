export function init(container) {
 const arrow = container.querySelector('.icon');
 const ss = container.querySelector('.scroll');
 ss.addEventListener('scroll', () => {
  let sp = ss.scrollTop
  let dd = window.innerHeight;
  if (sp > dd / 4) {
   arrow.classList.add('fade-icon')
  }
  else{
   return;
  }
  
 })
}

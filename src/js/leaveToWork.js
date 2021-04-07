import gsap from 'gsap';


function leaveToWork(container) {
const main = container.querySelectorAll('.scroll')

 const tl = gsap.timeline({
  defaults: { duration:0.5, ease: 'power2.in' }
 });
  
tl.fromTo(main,{xPercent: 0},{xPercent:-110})
 return tl
}
export default leaveToWork
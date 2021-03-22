import gsap from 'gsap';


function leaveToProject(container) {
const main = container.querySelectorAll('.scroll')

 const tl = gsap.timeline({
  defaults: { duration:0.4, ease: 'power1.in' }
 });
  
tl.fromTo(main,{xPercent: 0},{xPercent:-110})
 return tl
}
export default leaveToProject
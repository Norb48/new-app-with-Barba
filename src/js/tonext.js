import gsap from 'gsap';


function toNext(container) {
const main = container.querySelectorAll('.scroll')

 const tl = gsap.timeline({
  defaults: { duration:0.6, ease: 'power2.out' }
 });
  
tl.fromTo(main,{yPercent:120},{yPercent:0})
 return tl
}
export default toNext
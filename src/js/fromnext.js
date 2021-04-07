import gsap from 'gsap';


function fromNext(container) {
const main = container.querySelectorAll('.scroll')

 const tl = gsap.timeline({
  defaults: { duration:0.38, ease: 'power1.out' }
 });
  
tl.fromTo(main,{scale:1},{scale:.92})
 return tl
}
export default fromNext
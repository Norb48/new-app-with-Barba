import gsap from 'gsap';


function animEnter(container) {



 const main = container.querySelectorAll('.scroll')

 const tl = gsap.timeline({
  defaults: { duration:.4, ease: 'power1.out' }
 });
  

  tl.fromTo(main,{xPercent: -110},{xPercent:0})
 



 return tl

}
export default animEnter
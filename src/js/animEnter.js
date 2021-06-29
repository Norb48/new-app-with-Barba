import gsap from 'gsap';
import CustomEase  from "gsap/CustomEase";
gsap.registerPlugin(CustomEase);

function animEnter(container) {
 const main = container.querySelectorAll('.scroll')
 
 const tl = gsap.timeline({
  defaults: {
    duration: .7,
    delay: .1,
    ease: CustomEase.create("inoutHoop", ".7,.1,.3,.9")
  }
 });
    
  tl.fromTo(main,{xPercent: -110},{xPercent:0})
   

return tl

}
export default animEnter

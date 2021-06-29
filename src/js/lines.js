import gsap from 'gsap';
import CustomEase  from "gsap/CustomEase";
gsap.registerPlugin(CustomEase);

function lines(container) {
const lines = container.querySelectorAll('.line')
const main = container.querySelectorAll('.scroll')
 const tl = gsap.timeline({
  defaults: {
   duration: .7,
   delay:.6,
   ease: CustomEase.create("inoutHoop", ".7,.1,.3,.9")
 }
  
 });
   
    
 tl.fromTo(main,{xPercent: -110},{xPercent:0})
 tl.fromTo(lines,{scaleX: 0},{scaleX:1, stagger:{from:'start',amount:.5}},.5)

 return tl
}
export default lines

import gsap from 'gsap';
import CustomEase from "gsap/CustomEase";
gsap.registerPlugin(CustomEase);

function fromProjects(container) {
 const main = container.querySelectorAll('.scroll')

 const tl = gsap.timeline({

  defaults: {
   duration: 0.7,
   ease: CustomEase.create("inoutHoop", ".7,.1,.3,.9")
   
 }
 });

 tl.fromTo(main,{xPercent: 0}, {xPercent: 110})

 return tl
}
export default fromProjects

import gsap from 'gsap';
import CustomEase from "gsap/CustomEase";
gsap.registerPlugin(CustomEase);

function fromNext(container) {
const main = container.querySelectorAll('.scroll')

 const tl = gsap.timeline({
  defaults: { duration:0.8, ease: CustomEase.create("inoutHoop", ".7,.1,.3,.9")}
 });
  
tl.fromTo(main,{scale:1},{scale:.85})
 return tl
}
export default fromNext

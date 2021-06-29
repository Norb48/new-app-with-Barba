import {gsap} from 'gsap';
import CustomEase from "gsap/CustomEase";
gsap.registerPlugin(CustomEase);
const animLeave = (container) => {

  const main = container.querySelector('.scroll')
  const rightLinks = container.querySelectorAll('.rightnav-link')
  const tl=gsap.timeline({
    defaults: {
      duration: .7,
      ease: CustomEase.create("inoutHoop", ".7,.1,.3,.9")
    }
  })
  tl.fromTo(rightLinks,{xPercent:0}, {xPercent:70,duration:0.15})
  tl.fromTo(main,{xPercent:0}, {xPercent:110})
    
       return tl
}
export default animLeave

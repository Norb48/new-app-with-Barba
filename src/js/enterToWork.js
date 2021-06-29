import {gsap} from 'gsap';
import CustomEase from "gsap/CustomEase";
gsap.registerPlugin(CustomEase);


const enterToWork = (container) => {
  const main = container.querySelector('.scroll')
  const rightLinks= container.querySelectorAll('.rightnav-link')  
//  const rightLinks = () => gsap.set('.rightnav-link', {
//     yPercent: 70,
//   });
  const tl = gsap.timeline({
    defaults: {
      duration: 0.7,
     ease: CustomEase.create("inoutHoop", ".7,.1,.3,.9")
    }
  })
  tl.set(rightLinks,{xPercent:70})
  tl.fromTo(main, {xPercent: 110}, {xPercent: 0})
  tl.to(rightLinks, {xPercent:0,duration:0.15})

  return tl
}
export default enterToWork

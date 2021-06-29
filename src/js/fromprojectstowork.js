import {gsap} from 'gsap';
import CustomEase from "gsap/CustomEase";
gsap.registerPlugin(CustomEase);
const fromProjectsToWork = (container) => {

 const main = container.querySelector('.scroll')
//  const rightLinks = container.querySelectorAll('.rightnav-link')

 const tl = gsap.timeline({

  defaults: {
   duration: .8,
   ease: CustomEase.create("inoutHoop", ".7,.1,.3,.9")
   
 }
 })
 tl.fromTo(main, {xPercent: -110}, {xPercent: 0})
//  tl.from(rightLinks, {autoAlpha: 0,stagger:{from:'start',amount:.5}},'-=0.22')

 return tl
}
export default fromProjectsToWork

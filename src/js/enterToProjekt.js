import {gsap} from 'gsap';
import CustomEase  from "gsap/CustomEase";
gsap.registerPlugin(CustomEase);

const enterToProject = (container) => {
const main = container.querySelector('.scroll')


  const tl = gsap.timeline({
    defaults: {
      duration: .7,
      ease: CustomEase.create("inoutHoop", ".7,.1,.3,.9")
    }
  })
  tl.fromTo(main, {xPercent: 110}, {xPercent: 0},'-= 0.1')




  return tl
}
export default enterToProject

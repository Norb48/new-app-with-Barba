import {
  gsap
} from 'gsap';
import CustomEase from "gsap/CustomEase";
gsap.registerPlugin(CustomEase);


const animOnes = (container) => {

  const rightLinks = container.querySelectorAll('.rightnav-link')
  const scroll = container.querySelector('.scroll')
  const h1 = container.querySelector('.section-link h1')

  const tl = gsap.timeline({
    defaults: {
      duration: 0.7
    }
  })
  tl.to(rightLinks, {
      xPercent: 0,
      stagger: {
        from: 'start',
        amount: .5
      }
    }, '-=0.15')
    .to(scroll, {
      yPercent: 0,
      ease: CustomEase.create("inoutHoop", ".7,.1,.3,.9")
    }, .75)
    .fromTo(h1, {
      autoAlpha: 0
    }, {
      autoAlpha: 1,
      ease: CustomEase.create("inoutHoop", ".8,.0,.2,1")
    }, '-=0.25')

  return tl

}
export default animOnes

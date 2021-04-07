import {
 gsap
} from 'gsap';

const fromProjectsToWork = (container) => {

 const main = container.querySelector('.scroll')
 const rightLinks = container.querySelectorAll('.rightnav-link')

 const tl = gsap.timeline({
  defaults: {
   duration: 0.5,
   ease: 'power2.out'
  }
 })
 tl.fromTo(main, {xPercent: -110}, {xPercent: 0})
   .to(rightLinks, {autoAlpha: 1})

return tl
}
export default fromProjectsToWork
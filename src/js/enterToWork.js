import {gsap} from 'gsap';

const enterToWork = (container) => {

  const main = container.querySelector('.scroll')
  const rightLinks = container.querySelectorAll('.rightnav-link')
  const tl=gsap.timeline({
    defaults:{duration:0.5,ease:'power2.out'}
  })
    tl.fromTo(main,{xPercent:110}, {xPercent:0})
      .fromTo(rightLinks,{autoAlpha:0}, {autoAlpha:1},'+=.2')
    
    
    
       return tl
}
export default enterToWork
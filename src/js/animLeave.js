import {gsap} from 'gsap';

const animLeave = (container) => {

  const main = container.querySelector('.scroll')
  const rightLinks = container.querySelectorAll('.rightnav-link')
  const tl=gsap.timeline({
    defaults:{duration:0.4,ease:'power1.in'}
  })
  tl.to(rightLinks,{autoAlpha:0})
    .to(main,{xPercent:110},'+=0.2')
    
       return tl
}
export default animLeave
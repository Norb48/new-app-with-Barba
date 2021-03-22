import {gsap} from 'gsap';

const enterToProjekt = (container) => {

  const main = container.querySelector('.scroll')
  const rightLinks = container.querySelectorAll('.rightnav-link')
 
  const tl=gsap.timeline({
    defaults:{duration:0.4,ease:'power1.out'}
  })
    tl.fromTo(main,{xPercent:110}, {xPercent:0})
      .fromTo(rightLinks,{autoAlpha:0}, {autoAlpha:1},'+=0.22')
    
    
    
       return tl
}
export default enterToProjekt
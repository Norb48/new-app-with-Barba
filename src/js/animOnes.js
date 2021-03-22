import {gsap} from 'gsap';



const animOnes = (container) => {

 const rightLinks = container.querySelectorAll('.rightnav-link')
 const scroll = container.querySelector('.scroll')
  const h1 = container.querySelector('.section-link h1')

const tl=gsap.timeline({
defaults:{duration:.5}
})
 tl 


 .to(rightLinks,{autoAlpha:1, stagger:.09},'-=0.15')
 .to(scroll,{yPercent:0,ease:'power1.out'},1)
 .fromTo(h1,{autoAlpha:0},{autoAlpha:1,ease:'power2.out'},'-=0.25')



   return tl

}
export default animOnes
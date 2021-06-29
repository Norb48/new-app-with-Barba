import smoothscroll from 'smoothscroll-polyfill';
import '../css/style.scss';
import barba from '@barba/core';
import barbaPrefetch from '@barba/prefetch';
import gsap from 'gsap';
import CustomEase from "gsap/CustomEase";
gsap.registerPlugin(CustomEase);
import animOnes from './animOnes';
import animEnter from './animEnter';
import animLeave from './animLeave';
import leaveToWork from './leaveToWork';
import enterToWork from './enterToWork';
import leaveToProject from './leavetoproject';
import enterToProject from './entertoproject';
import fromProjects from './fromprojects';
import fromProjectsToWork from './fromprojectstowork';
import fromNext from './fromnext';
import toNext from './tonext';
import * as myScroll from './myscroll';
import * as slideInAnim from './intersection';
// import * as spiner from './loader';
import * as lazyLoadImg from './lazyloading';
import * as prevent from './prevent';
import * as rightNav from './rightnav';
import * as arrow from './arrowdown';
import lines from './lines'



barba.use(barbaPrefetch);

const reset = () => gsap.set('.scroll', {
  yPercent: 120,
});
const rightLinks = () => gsap.set('.rightnav-link', {
  xPercent: 70,
});



barba.hooks.afterEnter(({
  next
}) => {
  // spiner.init(next.container);
  prevent.init(next.container);
  myScroll.init(next.container);
  rightNav.init(next.container);
  slideInAnim.init(next.container);
  lazyLoadImg.init(next.container);
  arrow.init(next.container);
});


barba.init({
  debug: true,
  timeout: 5000,
  cacheIgnore: false,
  prefetchIgnore: false,

  transitions: [{
      name: 'projects',
      from: {
        namespace: ['work']
      },
      sync: true,
      leave: ({
        current
      }) => leaveToProject(current.container),
      to: {
        namespace: ['mcflurry', 'mcdonalds-drive-thru', 'bbb-21', 'social-media', 'ui', 'camapains', 'point', 'magazines', 'foxfilms', 'coca', 'pinacoteca', 'print', 'graphic', 'special', 'catalogs'],
      },
      enter: ({
        next
      }) => enterToProject(next.container),
    },

    {
      name: 'leaveToWork',
      to: {
        namespace: ['work'],
      },
      sync: true,
      leave: ({current}) => leaveToWork(current.container),

      enter({next}) 
      {
        rightLinks();
        gsap.to('.rightnav-link',{
          duration: .3,
          xPercent:0,
          ease: CustomEase.create("inoutHoop", ".7,.1,.3,.9"),
        }),
        enterToWork(next.container)
        // => enterToWork(next.container),
    }
    },

    {
      name: 'default',
      once({
        next
      }) {
        reset();
        rightLinks();

        gsap.from('.leftnav-link', {
          duration: 0.5,
          autoAlpha: 0,
          stagger: 0.4,
          ease: CustomEase.create("inoutHoop", ".7,.1,.3,.9"),
          onComplete: () => animOnes(next.container),
        });
      }
    },

    {
      name: 'contacts',
      from: {
        namespace: ['work', 'about', 'contact']
      },
      sync: true,
      leave: ({
        current
      }) => animLeave(current.container),
      enter: ({
        next
      }) => animEnter(next.container),  
    },

    {
      name: 'lines',
      to: {
        namespace: ['contact']
      },
      sync: true,
      leave: ({
        current
      }) => animLeave(current.container),
      enter: ({
        next
      }) => lines(next.container),
    },


    {
      name: 'from-projects',
      from: {
        namespace: ['mcflurry', 'mcdonalds-drive-thru', 'bbb-21', 'social-media', 'ui', 'camapains', 'point', 'magazines', 'foxfilms', 'coca', 'pinacoteca', 'print', 'graphic', 'special', 'catalogs'],
      },

      sync: true,
      leave: ({
        current
      }) => fromProjects(current.container),
      to: {
        namespace: ['work', 'about'],
      },
      enter: ({
        next
      }) => fromProjectsToWork(next.container)
    },


    {
      name: 'next',
      to: {
        namespace: ['mcdonalds-drive-thru', 'bbb-21', 'social-media', 'ui', 'camapains', 'point', 'magazines', 'foxfilms', 'coca', 'pinacoteca', 'print', 'graphic', 'special', 'mcflurry-easter', 'catalogs'],
      },
      sync: true,
      leave: ({
        current
      }) => fromNext(current.container),
      enter: ({
        next
      }) => toNext(next.container)
    },

  ],
});


smoothscroll.polyfill();

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then(registration => {
      console.log('SW registered: ', registration);
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    });
  });
};










// import barba from '@barba/core';
// import barbaPrefetch from '@barba/prefetch';
// import gsap from 'gsap';
// import '../css/style.scss';
// import animOnes from './animOnes';
// import animEnter from './animEnter';
// import animLeave from './animLeave';
// import leaveToProject from './leaveToProjekt';
// import enterToProject from './enterToProjekt';
// import myScroll from './scroll';



// barba.use(barbaPrefetch);

// const reset = () => gsap.set('.scroll', {
//   yPercent: 120
// })
// const resetNav = () => gsap.set('.rightnav-link', {
//   autoAlpha: 0
// })

// barba.hooks.afterEnter((data)=>{
//   // myScroll(),
//   console.log('test')
// }),


// barba.init({
//   timeout:5000,
//   debug: true,

//  transitions: [{
//         name: 'leaveToProject',
//         to: {
//           namespace: ['work']
//         },
//         leave: ({
//           current
//         }) => leaveToProject(current.container),
//         enter: ({
//           next
//         }) => enterToProject(next.container)
//       },
//       {
//         name: 'default',
//         once({next}) {
//           reset()
//           resetNav()
//           gsap.from('.leftnav-link', {
//             duration: 0.5,
//             autoAlpha: 0,
//             stagger: 0.4,
//             ease: 'power1.in',
//             onComplete: () => animOnes(next.container)
//           })
//         },
//         leave: ({
//           current
//         }) => animLeave(current.container),

//         enter: ({
//           next
//         }) => animEnter(next.container)
//      }
//     ]
//  })
// let myScroll
// let myScroll = function() {
//   rightNav.forEach(function (link) {
//     link.classList.remove('current-section')
//   })
// }
// let sectionsScroll = document.querySelector('.scroll');
// let sections = document.querySelectorAll('.section-link');
// let rightNav = document.querySelectorAll('.rightnav-link');
// let windowHeight = window.innerHeight;


// sectionsScroll.addEventListener('scroll', function () {
//   let scrollTop = sectionsScroll.scrollTop;
//   sections.forEach(function (section, i) {
//     if (section.offsetTop < scrollTop + windowHeight / 2 && scrollTop < section.offsetTop + windowHeight / 2) {
//       myScroll();
//       rightNav[i].classList.add('current-section');
//     }
//   })
// })





// let leftNav = document.querySelectorAll('.leftnav-link');
// let leftNavLength = leftNav.length
// let linkCurrent = location.href;

// leftNav.forEach((link, index) => {
//   if (link == linkCurrent) {
//     link.classList.add('current-page');
//     console.log(leftNav);
//   }
// }),

import barba from '@barba/core';
import barbaPrefetch from '@barba/prefetch';
import gsap from 'gsap';
import '../css/style.scss';
// import lazyLoading from 'loading-attribute-polyfill';
import animOnes from './animOnes';
import animEnter from './animEnter';
import animLeave from './animLeave';
import leaveToWork from './leaveToWork';
import enterToWork from './enterToWork';
import leaveToProject from './leaveToProjekt';
import enterToProject from './enterToProjekt';
import fromProjects from './fromprojects';
import fromProjectsToWork from './fromprojectstowork';
import fromNext from './fromnext';
import toNext from './tonext';
import * as myScroll from './myscroll';
import * as slideIn from './intersection';
import * as spiner from './loader';

barba.use(barbaPrefetch);

const reset = () => gsap.set('.scroll', {
  yPercent: 120,
});

const resetNav = () => gsap.set('.rightnav-link', {
  autoAlpha: 0,
});

barba.hooks.afterEnter(({ next }) => {
  myScroll.init(next.container);
   slideIn.init(next.container);
  spiner.init(next.container);
});

barba.init({
  timeout: 5000,
  debug: true,
  transitions: [
    {
      name: 'projects',
      from:{
        namespace:['work']
      },
      leave: ({
        current
      }) => leaveToProject(current.container),
      to: {
        namespace: ['one', 'two', 'tree', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'mobile'],
      },
      enter: ({
        next
      }) => enterToProject(next.container),
    },
    {
      name: 'leaveToProject',
      to: {
        namespace: ['work'],
      },
      leave: ({ current }) => leaveToProject(current.container),
      enter: ({ next }) => enterToProject(next.container),
    }, {
      name: 'default',
      once({ next }) {
        reset();
        resetNav();

        gsap.from('.leftnav-link', {
          duration: 0.5,
          autoAlpha: 0,
          stagger: 0.4,
          ease: 'power1.in',
          onComplete: () => animOnes(next.container),
        });
      },
      leave: ({ current }) => animLeave(current.container),
      enter: ({ next }) => animEnter(next.container),
    },
     {
      name: 'from-projects',
      from: {
        namespace: ['one', 'two', 'tree', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'mobile'],
      },
      leave: ({
        current
      }) => fromProjects(current.container),
      to: {
        namespace: ['work'],
      },
      enter: ({
        next
      }) => fromProjectsToWork(next.container)
    },
       {
      name: 'next',
      to: {
        namespace: ['two', 'tree', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'mobile','one'],
      },
      leave: ({
        current
      }) => fromNext(current.container),
    
      enter: ({
        next
      }) => toNext(next.container)
    },
  ],
});






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

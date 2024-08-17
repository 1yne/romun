import gsap from 'gsap';

export function transitions() {
  gsap.from('.rcisLogo', {
    scrollTrigger: '.rcisLogo',
    y: -40,
    duration: 0.5,
    opacity: 0,
    ease: 'power2'
  });
  gsap.from('.committees', {
    scrollTrigger: '.committees',
    x: -400,
    duration: 0.75,
    opacity: 0,
    ease: 'power2'
  });
  gsap.from('.committeesHeading', {
    scrollTrigger: '.committeesHeading',
    duration: 1,
    opacity: 0,
    ease: 'power2'
  });
  gsap.from('.about', {
    scrollTrigger: '.about',
    x: -400,
    duration: 0.75,
    opacity: 0,
    ease: 'power2'
  });
  gsap.from('.aboutHeading', {
    scrollTrigger: '.aboutHeading',
    duration: 1,
    opacity: 0,
    ease: 'power2'
  });
  gsap.from('.register', {
    scrollTrigger: '.register',
    y: 40,
    duration: 1,
    opacity: 0,
    ease: 'power2'
  });
}
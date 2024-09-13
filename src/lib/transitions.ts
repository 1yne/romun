import gsap from 'gsap';

export function transitions() {
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

	gsap.from(['#title', '#date', '#register'], {
		scrollTrigger: '#title',
		y: 20,
		stagger: 0.3,
		opacity: 0
	});
	gsap.from(['#committeeTitle', '#committeeName', '#committeeAgenda', '#committeeDescription', '#committeeRegister'], {
		scrollTrigger: '#committeeTitle',
		x: -20,
		stagger: 0.3,
		opacity: 0,
		delay: 0.5
	});
	gsap.from("#myVideo", {
		opacity: 0,
		duration: 2
	})
}

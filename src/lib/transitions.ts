export function transitions() {
	gsap.from('.letter', {
		scrollTrigger: '.letter',
		y: 100,
		duration: 1.4,
		opacity: 0,
		ease: 'power2',
		start: '300px'
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
	gsap.from('.ebHeading', {
		scrollTrigger: '.ebHeading',
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
	gsap.from('.registerSection', {
		scrollTrigger: {
			trigger: '.registerSection',
			start: 'top 90%'
		},
		y: 40,
		duration: 1,
		opacity: 0,
		ease: 'power2'
	});
	gsap.from('#school', {
		scrollTrigger: '#school',
		y: 40,
		duration: 1,
		opacity: 0,
		ease: 'power2'
	});
	gsap.from(['#logoInstagram', '#logoGithub', '#logoMail', '#logoLocation'], {
		scrollTrigger: '.registerSection',
		y: 20,
		stagger: 0.3,
		opacity: 0
	});

	gsap.from(['#title', '#date', '#register'], {
		scrollTrigger: '#title',
		y: 20,
		stagger: 0.3,
		opacity: 0
	});
	gsap.from(
		[
			'#committeeTitle',
			'#committeeName',
			'#committeeAgenda',
			'#committeeDescription',
			'#committeeRegister'
		],
		{
			x: -20,
			stagger: 0.3,
			opacity: 0,
			delay: 0.5
		}
	);
	gsap.from('#executiveBoardTitle', {
		y: 40,
		duration: 1,
		opacity: 0,
		ease: 'power2'
	});
	gsap.from(
		[
			'#contactHeading',
			'#contactName',
			'#contactSchool',
			'#contactMessage',
			'#contactButton',
			'#contactMethod'
		],
		{
			x: -20,
			stagger: 0.3,
			opacity: 0,
			delay: 0.005
		}
	);
}

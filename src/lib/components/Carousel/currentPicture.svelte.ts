import { writable } from 'svelte/store';

export const currentPictureState = writable({
	imageLink: '/images/DISEC.jpg',
	name: 'DISEC',
	full: 'Disarmament and International Security',
	link: '/committees/disec',
	agenda: '',
	description: `DISEC addresses the global security threats of LAWs and UAVs, balancing strategic advantages with ethical oversight. Delegates will negotiate frameworks to regulate these technologies, ensuring international stability and compliance with humanitarian law.`
});

export const topArrayState = writable([
	{
		imageLink: '/images/AIPPM.jpg',
		name: 'AIPPM',
		full: 'All India Political Party Meet',
		link: '/committees/aippm',
		agenda: '',
		description: `In Bharat, the All-India Political Parties Meet addresses critical issues. This forum fosters national dialogue, promoting transparency, accountability, and the rule of law to preserve our democratic integrity and ensure a fair electoral process for future generations.`
	},
	{
		imageLink: '/images/CCC.jpeg',
		name: 'CCC',
		full: 'Continous Crisis Committee',
		link: '/committees/ccc',
		agenda: '',
		description: `This committee thrives on the intensity of constantly evolving scenarios, requiring quick thinking, adaptability, and strategic problem-solving. Delegates must stay on their toes, as crises can escalate or shift direction at any moment, pushing participants to showcase their diplomatic agility and collaboration skills. It's a high-octane experience, perfect for those who relish a challenge and the unpredictability of real-world events.`
	}
]);

export const bottomArrayState = writable([
	{
		imageLink: '/images/HRC.jpg',
		name: 'HRC',
		full: 'Human Rights Council',
		link: '/committees/hrc',
		agenda: '',
		description: `In today's world, many suffer as fundamental human, social, and cultural rights are relinquished. The UNHRC stands as a global advocate, defending these rights and promoting justice and dignity, especially in crises like the Rohingya, weaving understanding into hope for a more equitable world.`
	},
	{
		imageLink: '/images/UNSC.avif',
		name: 'UNSC',
		full: 'United Nations Security Council',
		link: '/committees/unsc',
		agenda: '',
		description: `The Security Council of the United Nations maintains international peace and security through sanctions, authorized force, peacekeeping missions, and non-proliferation efforts. It investigates disputes, recommends settlements, and ensures compliance with its binding resolutions, upholding international law and contributing to global stability.`
	}
]);

export const allDataStore = writable([
	{
		imageLink: '/images/HRC.jpg',
		name: 'HRC',
		full: 'Human Rights Council',
		link: '/committees/hrc',
		agenda: `Addressing the Recruitment and Use of Child Soldiers in Armed Conflicts`,
		description: `In today's world, many suffer as fundamental human, social, and cultural rights are relinquished. The UNHRC stands as a global advocate, defending these rights and promoting justice and dignity, especially in crises like the Rohingya, weaving understanding into hope for a more equitable world.`
	},
	{
		imageLink: '/images/UNSC.avif',
		name: 'UNSC',
		full: 'United Nations Security Council',
		link: '/committees/unsc',
		agenda: 'Deliberating on the Recent Sudan Conflict Escalations',
		description: `The Security Council of the United Nations maintains international peace and security through sanctions, authorized force, peacekeeping missions, and non-proliferation efforts. It investigates disputes, recommends settlements, and ensures compliance with its binding resolutions, upholding international law and contributing to global stability.`
	},
	{
		imageLink: '/images/AIPPM.jpg',
		name: 'AIPPM',
		full: 'All India Political Party Meet',
		link: '/committees/aippm',
		agenda: `Discussing the National Security of India with Emphasis on Cross-border Terrorism with Emphasis on Recent Events`,
		description: `In Bharat, the All-India Political Parties Meet addresses critical issues. This forum fosters national dialogue, promoting transparency, accountability, and the rule of law to preserve our democratic integrity and ensure a fair electoral process for future generations.`
	},
	{
		imageLink: '/images/CCC.jpeg',
		name: 'CCC',
		full: 'Continous Crisis Committee',
		link: '/committees/ccc',
		agenda: `Strategic Response to the Discovery of Soviet Missile Installations in Cuba (16 October 1962`,
		description: `This committee thrives on the intensity of constantly evolving scenarios, requiring quick thinking, adaptability, and strategic problem-solving. Delegates must stay on their toes, as crises can escalate or shift direction at any moment, pushing participants to showcase their diplomatic agility and collaboration skills. It's a high-octane experience, perfect for those who relish a challenge and the unpredictability of real-world events.`
	},
	{
		imageLink: '/images/DISEC.jpg',
		name: 'DISEC',
		full: 'Disarmament and International Security',
		link: '/committees/disec',
		agenda: `Reassessing the Global Non-Proliferation in Light of Iran's Renewed Enrichment`,
		description: `DISEC addresses the global security threats of LAWs and UAVs, balancing strategic advantages with ethical oversight. Delegates will negotiate frameworks to regulate these technologies, ensuring international stability and compliance with humanitarian law.`
	}
]);

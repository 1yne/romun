import { readable } from 'svelte/store';
import UNSCLogo from '$lib/logos/UNSC.svelte';
import HRCLogo from '$lib/logos/HRC.svelte';
import AIPPMLogo from '$lib/logos/AIPPM.svelte';

const data = [
	{
		logo: UNSCLogo,
		name: 'UNSC',
		link: '/committees/unsc',
		fullName: 'United Nations Security Council',
		agenda: 'Iran-Iraq War (Freeze date: 23rd September 1980)',
		image: '/CommitteePics/UNSC.jpg',
		description: `The Security Council of the United Nations maintains international peace
			and security through sanctions,
			authorized force, peacekeeping
			missions, and non-proliferation efforts.
			It investigates disputes, recommends
			settlements, and ensures compliance
			with its binding resolutions, upholding
			international law and contributing to
			global stability.`,
		backgroundGuide: "https://drive.google.com/file/d/1WGDNmleYe13xtFHNA8XevM485t2vOPm0/view?usp=sharing"
	},
	{
		logo: HRCLogo,
		name: 'HRC',
		link: '/committees/hrc',
		fullName: 'Human Rights Council',
		agenda: 'Deliberating on the plight of Internally Displaced Person’s in conflict zones',
		image: '/CommitteePics/HRC.jpg',
		description: `In today's world, many suffer as fundamental human, social, and cultural
			rights are relinquished. The UNHRC
			stands as a global advocate, defending
			these rights and promoting justice and
			dignity, especially in crises like the
			Rohingya, weaving understanding into
			hope for a more equitable world.`,
		backgroundGuide: "https://drive.google.com/file/d/1I4SqvuhICu5UWERoSmwQYVpvGbfRtLH-/view?usp=sharing"
	},
	{
		logo: UNSCLogo,
		name: 'DISEC',
		link: '/committees/disec',
		fullName: 'Disarmament and International Security Committee',
		agenda: 'Regulating proliferation of UVS in military operations',
		image: '/CommitteePics/DISEC.jpg',
		description: `DISEC addresses the global security threats of LAWs and UAVs, balancing
			strategic advantages with ethical
			oversight. Delegates will negotiate
			frameworks to regulate these
			technologies, ensuring international
			stability and compliance with
			humanitarian law.`,
		backgroundGuide: "https://drive.google.com/file/d/1DQdXffvOUcBenXHqdVdc8Mf3y6V_4lJh/view?usp=sharing"
	},
	{
		logo: UNSCLogo,
		name: 'CCC',
		link: '/committees/ccc',
		fullName: 'Continuous Crisis Committee',
		agenda: 'World War 2 (2nd September, 1939)',
		image: '/CommitteePics/CCC.jpg',
		description: `Model United Nations Continuous Crisis Committee (MUNCC). This committee 
			thrives on the intensity of constantly evolving scenarios, 
			requiring quick thinking, adaptability, and strategic 
			problem-solving. Delegates must stay on their toes, as 
			crises can escalate or shift direction at any moment, 
			pushing participants to showcase their diplomatic agility 
			and collaboration skills. It's a high-octane experience, 
			perfect for those who relish a challenge and the 
			unpredictability of real-world events.`,
		backgroundGuide: "https://drive.google.com/file/d/14-Jqds7nmAerdCuLFVPRO3DIi02EkTU9/view?usp=sharing"
	},
	{
		logo: AIPPMLogo,
		name: 'AIPPM',
		link: '/committees/aippm',
		fullName: 'All India Political Party Meeting',
		agenda:
			'Deliberation on reservation policy in India with special emphasis on the need for caste census',
		image: '/CommitteePics/AIPPM.jpg',
		description: `In Bharat, the All-India Political Parties Meet addresses critical issues.
			This forum fosters national dialogue,
			promoting transparency,
			accountability, and the rule of law to
			preserve our democratic integrity and
			ensure a fair electoral process for
			future generations.`,
		backgroundGuide: "https://drive.google.com/file/d/1q9Ey_OKpnYA0FKHnnlgpaIEfNqFaR-li/view?usp=sharing"
	}
];

export const committeeDataStore = readable(data);

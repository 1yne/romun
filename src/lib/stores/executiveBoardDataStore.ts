import { readable } from 'svelte/store';

type EBDataType = {
	name: string;
	committee: string;
	position: string;
	image: string;
	bio: string;
};

const data: EBDataType[] = [
	{
		name: 'Prajval Rane',
		committee: 'AIPPM',
		position: 'Chairperson',
		image: '/EBPics/PrajvalRane.jpeg',
		bio: 'Prajval Rane is a lawyer by profession . In his first year of law school, he found himself doing a MUN for the first time and since then he has been seen at various MUNs. Beyond academics, Prajval finds joy in spiking it up on the volleyball court representing his college team and is also an avid follower of the Indian cricket team and he looks forward to an intense and fruitful discussion and yes he is the guy that loves pink.'
	},
	{
		name: 'Vignesh Palanirajan',
		committee: 'AIPPM',
		position: 'Vice-Chairperson',
		image: '/EBPics/VigneshPalanirajan.jpg',
		bio: "I'm batman"
	},
	{
		name: 'Divyansh Sharma',
		committee: 'AIPPM',
		position: 'Moderator',
		image: '/EBPics/DivyanshSharma.jpeg',
		bio: 'In Divyansh Sharma you have a friendly and ever approachable moderator . Drawing from his experience in political campaigns and participation in Indian committees across the circuit, he has placed in conferences like PECON and CAMUN, with Indian Polity and the Constitution always sparking his interest. A reluctant computer science grad, he juggles predicting that Kaun Banega Crorepati using machine learning while jamming on his Stratocaster, piano, or drums—when he’s not cycling, of course. A Delhi boy through and through, he might beg your pardon for his French, but it’s rumored that he speaks six languages—though he’d rather let you witness that firsthand.'
	},
	{
		name: 'Eshwar R A',
		committee: 'UNSC',
		position: 'Chairperson',
		image: '/EBPics/EshwarRA.jpeg',
		bio: '"Eshwar is an excellent public speaker having attended over 40 conferences and debates. He has been on the Executive Board of several prestegious conferences including IITHMUN, IIScMUN, LionsMUN, SJPUCMUN, AMUN and UniCon. His interests range from History to food and physics. He claims to be approachable so please donot hesitate to strike up a conversation with him :)"'
	},
	{
		name: 'Heena Noor',
		committee: 'UNSC',
		position: 'Vice-Chairperson',
		image: '/EBPics/HeenaNoor.jpeg',
		bio: '“The simpsons knew it all” “Heena is a seasoned MUNner with extensive experience in multiple secretariat roles and in chairing committees varying from AIPPM to CCC. However UNSC is always her best bet;)”'
	},
	{
		name: 'Mahathi Sriraam',
		committee: 'UNSC',
		position: 'Moderator',
		image: '/EBPics/MahathiSriraam.jpeg',
		bio: `“I don't pretend to know everything; I just only speak on matters I know I'll win.”- Criss Jami An amicable person who will astound you with her quick wittedness and confidence no matter the scenario. Whether she is surrounded by her friends or has her blazer on in a conference, Mahathi is a force to be reckoned with. She has numerous placements from prestigious conferences notably, AMUN, Jigyasa, PeCon, etc. Apart from speaking, she is an avid singer and musician, born ready to sing and flaunt her skills anytime. She is a swimmer and a huge workout freak who WILL be there if you say the word “coffee”. She is very approachable and looks forward to taking part in the engaging conversations UNSC will have to offer`
	},
	{
		name: 'Aryan Sood',
		committee: 'HRC',
		position: 'Chairperson',
		image: '/EBPics/AryanSood.jpeg',
		bio: '"Crafting Conversations, Beyond Mere Words. Model UNs : Where understanding and Empathy Meet and every perspective shapes a brighter world" The brains behind JU MUN Society, Aryan Sood is the founder and ex president of JU MUN Society. He is a seasoned MUNner with a lot of MUNs, Debates and various elocution competitions under his belt. His love for diplomacy and international relations began way back in 2016 and ever since then he hasn’t looked back. He has a keen eye for detail and is looking forward to a committee filled with lively debates leading to global resolutions. Apart from his love for MUNning, you can usually find him adoring dogs and cracking lame jokes'
	},
	{
		name: 'Alisha Azeem',
		committee: 'HRC',
		position: 'Vice-Chairperson',
		image: '/EBPics/AlishaAzeem.jpeg',
		bio: 'A prolific orator, debater, and a lover of politics and culture, she knows how to bring the gravitas (along with some pizzazz) in every committee she’s a part of, and keeps all the delegates in her committee at the edge of their seats. Presenting the vice chairperson of the UNHRC, Alisha Azeem.'
	},
	{
		name: 'Shreya Robin',
		committee: 'HRC',
		position: 'Moderator',
		image: '/EBPics/ShreyaRobin.jpeg',
		bio: 'An avid debater and accomplished public speaker, who has made her mark on numerous stages during her school years. However, it was her move to Bangalore, under the alibi of pursuing engineering, that introduced her to the world of Model United Nations. Despite initially believing MUNs weren’t her forte, she soon found her niche. A year later, she holds a flawless track record, consistently securing top 3 positions in every Human Rights Council she’s participated in, including prestigious conferences like PeCON, CAMUN, and AMUN. Now, as a first-time Executive Board member, she looks forward to leading an engaging and enjoyable committee. But rest assured, the fierce delegate within remains. She welcomes challenges at any time and promises to meet them all with the same unwavering competitive spirit. Presenting to you Shreya Robin - Moderator of UNHRC'
	},
	{
		name: 'Abhiram Gopal Dasika',
		committee: 'CCC',
		position: 'Chairperson',
		image: '/EBPics/AbhiramDasika.jpeg',
		bio: 'Abhiram Gopal Dasika is a 4th year ECE student at PES University Electronics City, and the ex-president of @munsoc.pesuecc. Having started in 8th grade, Abhiram has delegated in 30+ MUNs, having won multiple awards and has chaired UNSCs and DISECs at prestigious conferences, like BMSMUN 2023, RoMUN 2023, and served as the Secretary General of UniCon 2024. Currently building his own RISC-V CPU on breadboards, he is a man with varied intersts ranging from JDM to FOSS, and is specialising in Digital System Design & Verification. He will be the chair of CCC, and will ensure the experience for the delegates is one filled with learning'
	},
	{
		name: 'Achal Ambiger',
		committee: 'CCC',
		position: 'Vice-Chairperson',
		image: '/EBPics/AchalAmbiger.jpeg',
		bio: 'Achal brings with him a profound passion for history and a keen intellect tempered by years of academic inquiry. With a voracious appetite for knowledge and a meticulous attention to detail, he has cultivated a deep understanding of historical events, personalities, and dynamics that underpin our world. Beyond his scholarly pursuits, Achal embodies a spirit of empathy and open-mindedness essential to the diplomatic process. His innate curiosity and receptiveness to diverse viewpoints enable him to navigate complex issues with sensitivity and nuance, fostering an inclusive environment where all voices are heard and valued'
	},
	{
		name: 'Abhishek RR',
		committee: 'CCC',
		position: 'Moderator',
		image: '/EBPics/AbhishekRR.jpeg',
		bio: 'Abhishek Rao, currently in his second year at PES University, has been part in MUNS since 2018. He has placed in notable MUNs such as CAMUN, AMUN and DipsMUN. He excels in crisis committees, showcasing his talents in diplomacy and strategic thinking. With a strong passion for geopolitics, history, and economics, Abhishek brings a nuanced perspective to discussions on global issues.'
	},
	{
		name: 'Kshitij Saha',
		committee: 'DISEC',
		position: 'Chairperson',
		image: '/EBPics/KshitijSaha.jpeg',
		bio: `Kshitij Saha is a veteran of the Bangalore MUN circuit. He currently works as a cyber strategy consultant in KPMG India. The former Vice President and Chief Advisor of the PES MUN Society, he is an avid MUNer having had a stellar track record, placing in nearly every MUN he's been on. With a keen interest in Human Rights and an eye for niche research in MUN conferences, he brings a unique perspective to conventional committees making them more lively and engaging. He has a keen attention to detail and with his meticulous approach to Model UN, he ensures that nothing goes past him. Apart from his ardent love of diplomacy, he's also a musician and a sitcom fanatic. He also headed the TEDx chapter in his University and has organized several successful conferences, working with high-profile and eminent speakers. With his easy-going style and ever-positive spirit, he always ensures a wildly engaging wholesome, and enriching committee experience for beginners and seasoned delegates alike`
	},
	{
		name: 'Darshan',
		committee: 'DISEC',
		position: 'Vice-Chairperson',
		image: '/EBPics/Darshan.jpeg',
		bio: '"He who masters words, masters the world" Darshan, presently in his third year of law at CMR University, Bengaluru, is an individual whose intellectual pursuits traverse a diverse array of fields, with a keen focus on law, international relations, and human rights. His distinguished career in debate has seen him not only participate but also preside as an EB member across many MUN conferences. In the realm of legal discourse, Darshan’s adeptness at argumentation has garnered him several prestigious awards in both moot courts and debate arenas. Outside the courtroom and conference halls, he passionately engages in teaching and immerses himself in the art of Bharatanatyam, reflecting a balance between his academic rigor and artistic expression.'
	},
	{
		name: 'Himank Jain',
		committee: 'DISEC',
		position: 'Moderator',
		image: '/EBPics/HimankJain.jpeg',
		bio: `Himank Jain is a second year B-TECH student at PESU ECC. A Hyderabadi boy captivated by the intense and challenging Bangalore circuit, determined to make a name for himself. This is his first time standing on the other side of the scoresheet and he has placements at PECON, SLCUMUN, NMGDC, etc. His moto for MUN's has always been "make this a memorable experience or don't take this experience" .`
	}
];

export const executiveBoardDataStore = readable(data);

export type { EBDataType };

import { readable } from 'svelte/store';

const data = [
	{
		name: 'Prajval Rane',
		committee: 'AIPPM',
		position: 'Chairperson',
		image: '/EBPics/PrajvalRane.jpeg'
	},
	{
		name: 'Vignesh Palanirajan',
		committee: 'AIPPM',
		position: 'Vice-Chairperson',
		image: '/EBPics/VigneshPalanirajan.jpg'
	},
	{
		name: 'Divyansh Sharma',
		committee: 'AIPPM',
		position: 'Moderator',
		image: '/EBPics/DivyanshSharma.jpeg'
	},
	{
		name: 'Eshwar R A',
		committee: 'UNSC',
		position: 'Chairperson',
		image: '/EBPics/EshwarRA.jpeg'
	},
	{
		name: 'Heena Noor',
		committee: 'UNSC',
		position: 'Vice-Chairperson',
		image: '/EBPics/HeenaNoor.jpeg'
	},
	{
		name: 'Mahathi Sriraam',
		committee: 'UNSC',
		position: 'Moderator',
		image: '/EBPics/MahathiSriraam.jpeg'
	},
	{
		name: 'Aryan Sood',
		committee: 'HRC',
		position: 'Chairperson',
		image: '/EBPics/AryanSood.jpeg'
	},
	{
		name: 'Alisha Azeem',
		committee: 'HRC',
		position: 'Vice-Chairperson',
		image: '/EBPics/AlishaAzeem.jpeg'
	},
	{
		name: 'Shreya Robin',
		committee: 'HRC',
		position: 'Moderator',
		image: '/EBPics/ShreyaRobin.jpeg'
	},
	{
		name: 'Abhiram Gopal Dasika',
		committee: 'CCC',
		position: 'Chairperson',
		image: '/EBPics/AbhiramDasika.jpeg'
	},
	{
		name: 'Achal Ambiger',
		committee: 'CCC',
		position: 'Vice-Chairperson',
		image: '/EBPics/AchalAmbiger.jpeg'
	},
	{
		name: 'Abhishek RR',
		committee: 'CCC',
		position: 'Moderator',
		image: '/EBPics/AbhishekRR.jpeg'
	},
	{
		name: 'Kshitij Saha',
		committee: 'DISEC',
		position: 'Chairperson',
		image: '/EBPics/KshitijSaha.jpeg'
	},
	{
		name: 'Darshan',
		committee: 'DISEC',
		position: 'Vice-Chairperson',
		image: '/EBPics/Darshan.jpeg'
	},
	{
		name: 'Himank Jain',
		committee: 'DISEC',
		position: 'Moderator',
		image: '/EBPics/HimankJain.jpeg'
	}
];

export const executiveBoardDataStore = readable(data);

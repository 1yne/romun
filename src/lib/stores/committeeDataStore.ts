import { readable } from 'svelte/store';
import UNSCLogo from '$lib/logos/UNSC.svelte';
import HRCLogo from '$lib/logos/HRC.svelte';
import UPILogo from '$lib/logos/UPI.svelte';
import AIPPMLogo from '$lib/logos/AIPPM.svelte';

const data = [
	{
		logo: UNSCLogo,
		name: 'UNSC',
		link: '/committees/unsc',
		fullName: 'United Nations Security Council',
		agenda: '',
		video: "/UNSCVideo.mp4",
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore dignissimos hic eveniet blanditiis, debitis corrupti ea odio officia maiores fugiat temporibus, quo nemo? Recusandae, accusantium minima magni soluta blanditiis optio Nulla rerum voluptate, deleniti unde, sint esse dolorem porro ipsam quod corporis laborum vel sed, praesentium recusandae laudantium. Ad tenetur maxime sunt fuga eius consequuntur ipsam! Suscipit voluptatibus officiis sunt! Ut, modi hic nulla optio rerum similique deleniti quam quaerat omnis laborum ipsam consequatur adipisci? Repellat, sapiente quae! Enim exercitationem ratione nesciunt ipsa sunt vel repellendus nemo ea officia! Ab.'
	},
	{
		logo: HRCLogo,
		name: 'HRC',
		link: '/committees/hrc',
		fullName: 'Human Rights Council',
		agenda: '',
		video: "/HRCVideo.mp4",
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore dignissimos hic eveniet blanditiis, debitis corrupti ea odio officia maiores fugiat temporibus, quo nemo? Recusandae, accusantium minima magni soluta blanditiis optio Nulla rerum voluptate, deleniti unde, sint esse dolorem porro ipsam quod corporis laborum vel sed, praesentium recusandae laudantium. Ad tenetur maxime sunt fuga eius consequuntur ipsam! Suscipit voluptatibus officiis sunt! Ut, modi hic nulla optio rerum similique deleniti quam quaerat omnis laborum ipsam consequatur adipisci? Repellat, sapiente quae! Enim exercitationem ratione nesciunt ipsa sunt vel repellendus nemo ea officia! Ab.'
	},
	{
		logo: UPILogo,
		name: 'UPI',
		link: '/committees/upi',
		fullName: 'United Press International',
		agenda: '',
		video: "/UPIVideo.mp4",
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore dignissimos hic eveniet blanditiis, debitis corrupti ea odio officia maiores fugiat temporibus, quo nemo? Recusandae, accusantium minima magni soluta blanditiis optio Nulla rerum voluptate, deleniti unde, sint esse dolorem porro ipsam quod corporis laborum vel sed, praesentium recusandae laudantium. Ad tenetur maxime sunt fuga eius consequuntur ipsam! Suscipit voluptatibus officiis sunt! Ut, modi hic nulla optio rerum similique deleniti quam quaerat omnis laborum ipsam consequatur adipisci? Repellat, sapiente quae! Enim exercitationem ratione nesciunt ipsa sunt vel repellendus nemo ea officia! Ab.'
	},
	{
		logo: UNSCLogo,
		name: 'DISEC',
		link: '/committees/disec',
		fullName: 'Disarmament and International Security Committee',
		agenda: '',
		video: "/DISECVideo.mp4",
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore dignissimos hic eveniet blanditiis, debitis corrupti ea odio officia maiores fugiat temporibus, quo nemo? Recusandae, accusantium minima magni soluta blanditiis optio Nulla rerum voluptate, deleniti unde, sint esse dolorem porro ipsam quod corporis laborum vel sed, praesentium recusandae laudantium. Ad tenetur maxime sunt fuga eius consequuntur ipsam! Suscipit voluptatibus officiis sunt! Ut, modi hic nulla optio rerum similique deleniti quam quaerat omnis laborum ipsam consequatur adipisci? Repellat, sapiente quae! Enim exercitationem ratione nesciunt ipsa sunt vel repellendus nemo ea officia! Ab.'
	},
	{
		logo: UNSCLogo,
		name: 'CCC',
		link: '/committees/ccc',
		fullName: 'Continuous Crisis Committee',
		agenda: '',
		video: "/CCCVideo.mp4",
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore dignissimos hic eveniet blanditiis, debitis corrupti ea odio officia maiores fugiat temporibus, quo nemo? Recusandae, accusantium minima magni soluta blanditiis optio Nulla rerum voluptate, deleniti unde, sint esse dolorem porro ipsam quod corporis laborum vel sed, praesentium recusandae laudantium. Ad tenetur maxime sunt fuga eius consequuntur ipsam! Suscipit voluptatibus officiis sunt! Ut, modi hic nulla optio rerum similique deleniti quam quaerat omnis laborum ipsam consequatur adipisci? Repellat, sapiente quae! Enim exercitationem ratione nesciunt ipsa sunt vel repellendus nemo ea officia! Ab.'
	},
	{
		logo: AIPPMLogo,
		name: 'AIPPM',
		link: '/committees/aippm',
		fullName: 'All India Political Party Meeting',
		agenda: '',
		video: "/AIPPMVideo.mp4",
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore dignissimos hic eveniet blanditiis, debitis corrupti ea odio officia maiores fugiat temporibus, quo nemo? Recusandae, accusantium minima magni soluta blanditiis optio Nulla rerum voluptate, deleniti unde, sint esse dolorem porro ipsam quod corporis laborum vel sed, praesentium recusandae laudantium. Ad tenetur maxime sunt fuga eius consequuntur ipsam! Suscipit voluptatibus officiis sunt! Ut, modi hic nulla optio rerum similique deleniti quam quaerat omnis laborum ipsam consequatur adipisci? Repellat, sapiente quae! Enim exercitationem ratione nesciunt ipsa sunt vel repellendus nemo ea officia! Ab.'
	},
	{
		logo: UNSCLogo,
		name: 'UNODC',
		link: '/committees/unodc',
		fullName: 'United Nations Office on Drugs and Crime',
		agenda: '',
		video: "/UNODCVideo.mp4",
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore dignissimos hic eveniet blanditiis, debitis corrupti ea odio officia maiores fugiat temporibus, quo nemo? Recusandae, accusantium minima magni soluta blanditiis optio Nulla rerum voluptate, deleniti unde, sint esse dolorem porro ipsam quod corporis laborum vel sed, praesentium recusandae laudantium. Ad tenetur maxime sunt fuga eius consequuntur ipsam! Suscipit voluptatibus officiis sunt! Ut, modi hic nulla optio rerum similique deleniti quam quaerat omnis laborum ipsam consequatur adipisci? Repellat, sapiente quae! Enim exercitationem ratione nesciunt ipsa sunt vel repellendus nemo ea officia! Ab.'
	}
];

export const committeeDataStore = readable(data);

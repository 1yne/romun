import type { PageLoad } from './$types';
import { committeeDataStore } from '$lib/stores/committeeDataStore';
import { get } from 'svelte/store';

export const load: PageLoad = ({ params }) => {
	const committeeData = get(committeeDataStore).filter((val) => val.name == params.committeeId.toLocaleUpperCase())[0]
	return { 
		committeeData
	};
};

import type { PageLoad } from './$types';
import { committeeDataStore } from '$lib/stores/committeeDataStore';
import { executiveBoardDataStore } from '$lib/stores/executiveBoardDataStore';
import { get } from 'svelte/store';

export const load: PageLoad = ({ params }) => {
	const committeeData = get(committeeDataStore).filter(
		(val) => val.name == params.committeeId.toLocaleUpperCase()
	)[0];
	const executiveBoardData = get(executiveBoardDataStore).filter(
		(val) => val.committee == params.committeeId.toLocaleUpperCase()
	);
	return {
		...committeeData,
		executiveBoardData
	};
};

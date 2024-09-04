import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ isDataRequest }) => {
	const obj = {
		isDataRequest
	};
	return obj;
};

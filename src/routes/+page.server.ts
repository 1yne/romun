// import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ isDataRequest }) => {
  const obj = {
    isDataRequest
  }
  return obj
	// error(404, 'Not found');
};

import type { Actions } from './$types';
import { supabase } from '$lib/supabaseClient';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const name = data.get('name');
		const school = data.get('school');
		const message = data.get('message');
		const contactNum = data.get('contactNum');
		const email = data.get('email');

		const dataToSend = {
			name,
			school,
			message,
			methodOfContact: contactNum ? 'whatsapp' : 'email',
			contactNum,
			email
		};

		const { error } = await supabase.from('questions').insert(dataToSend);

    if (error) throw error

		return { success: true };
	}
} satisfies Actions;

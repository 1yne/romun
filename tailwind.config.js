/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				red: "var(--red)",
        purple: "var(--purple)",
			}
		}
	},

	plugins: []
};

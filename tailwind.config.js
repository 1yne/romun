/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				red: "var(--red)",
        purple: "var(--purple)",
				black: "var(--black)"
			}
		},
		fontFamily: {
			'playfair': "Playfair Display",
			'montserrat': "Montserrat"
		}
	},

	plugins: []
};

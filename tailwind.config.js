import flowbitePlugin from 'flowbite/plugin';

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],
	darkMode: 'selector',

	theme: {
		screens: {
			mobile: {
				max: '645px'
			},
			desktop: '845px'
		},
		extend: {
			colors: {
				red: 'var(--red)',
				redHover: 'var(--redHover)',
				purple: 'var(--purple)',
				purpleHover: 'var(--purpleHover)',
				background: 'var(--background)',
				blue: 'var(--blue)',
				primary: {
					50: '#FFF5F2',
					100: '#FFF1EE',
					200: '#FFE4DE',
					300: '#FFD5CC',
					400: '#FFBCAD',
					500: '#FE795D',
					600: '#EF562F',
					700: '#EB4F27',
					800: '#CC4522',
					900: '#A5371B'
				}
			}
		},
		fontFamily: {
			playfair: 'Playfair Display',
			montserrat: 'Montserrat'
		}
	},

	plugins: [flowbitePlugin]
};

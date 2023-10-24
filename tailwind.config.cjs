const config = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],

	plugins: [require('flowbite/plugin')],

	darkMode: 'class',

	theme: {
		extend: {
			colors: {
				// flowbite-svelte
				primary: {
					50: '#f5f5f6',
					100: '#e6e6e7',
					200: '#d0d0d1',
					300: '#afaeb2',
					400: '#86868a',
					500: '#77767b',
					600: '#5c5b5f',
					700: '#4e4e50',
					800: '#444446',
					900: '#3c3c3d',
					950: '#262527'
				},
				link: {
					active: '#2878cf',
					hovered: '#1a5fb4',
					disabled: '#e4ecfa'
				}
			}
		}
	}
};

module.exports = config;

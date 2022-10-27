/* eslint-disable import/no-extraneous-dependencies */
const { fontSize } = require('tailwindcss/defaultTheme');
const color = require('tailwindcss/colors');

// ? => https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/defaultConfig.stub.js
module.exports = {
	content: ['./src/**/*.{html,js}'],
	theme: {
		container: { screen: {} },
		colors: {
			...color,
			primary: '#870000',
			secondary: '#ff6600',
			tertiary: '#ff0066',
			quaternary: '#00ff00',
			bgGray: '#E1E1E1',
		},
		fontSize: {
			...fontSize,
		},
		fontFamily: {
			inter: ['inter'],
		},
	},
	plugins: [],
};

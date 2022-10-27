// ? => https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/defaultConfig.stub.js
module.exports = {
	content: ['./src/**/*.{html,js}'],
	theme: {
		container: { screen: {} },
		fontSize: {
			xs: ['0.75rem', { lineHeight: '1rem' }],
			sm: ['0.875rem', { lineHeight: '1.25rem' }],
			base: ['1rem', { lineHeight: '1.5rem' }],
			lg: ['1.125rem', { lineHeight: '1.75rem' }],
			xl: ['1.25rem', { lineHeight: '1.75rem' }],
		},
		colors: {
			primary: '#870000',
			secondary: '#ff6600',
			tertiary: '#ff0066',
			quaternary: '#00ff00',
		},
	},
	plugins: [],
};

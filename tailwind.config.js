/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				gray: { 100: "#B8BAB9", 200: "#24282E", 300: "#1C1D21" },
				red: { 100: "#B05B63", 200: "#462F30" },
				blue: { 100: "#355693", 100: "#24324B" },
			},
		},
	},
	plugins: [],
};

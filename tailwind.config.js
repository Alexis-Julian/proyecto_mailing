/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
	content: [
		"./node_modules/flowbite-react/**/*.js",
		"./src/app/**/*.{js,jsx}",
		"./src/components/**/*.{js,jsx}",
		"./public/**/*.html",
		"path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
		"path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
	],
	plugins: [require("flowbite/plugin")],
	theme: {
		fontFamily: {
			/* sans: ['sans-serif', 'Lato', 'Quicksand', ...defaultTheme.fontFamily.sans, 'Poppins'], */
			Poppins: ["Poppins", "sans-serif"],
		},
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				primary: "#332941" /* 1 */,
				secondary: "#3B3486" /* 2 */,
				tertiary: "#864AF9" /* 3 */,
				quaternary: "#F8E559" /* 4  Amarillo */,
				quinary: "#1a1a1a" /* 5 Negro */,
			},
			animation: {
				"fade-in-right": "fade-in-right 1s ease-in-out ",
				wobble: "wobble 1s ease-in-out",
				"fade-in": "fade-in 0.6s ease-in",
			},

			keyframes: {
				curriculum: {
					"0%,100%": {
						transform: "translateX(100%)",
					},
				},
				wobble: {
					"0%": {
						transform: "translateX(0)",
					},
					"15%": {
						transform: "translateX(-20px)",
					},
					"30%": {
						transform: "translateX(20%)",
					},
					"45%": {
						transform: "translateX(-15%)",
					},
					"60%": {
						transform: "translateX(20px)",
					},
					"75%": {
						transform: "translateX(-5%)",
					},
					"100%": {
						transform: "translateX(0)",
					},
				},
				"fade-in-right": {
					"0%": {
						opacity: "0",
						transform: "translateX(-20px)",
					},
					"100%": {
						opacity: "1",
						transform: "translateX(0)",
					},
				},
				"fade-in": {
					"0%": {
						opacity: "0",
					},
					"100%": {
						opacity: "1",
					},
				},
			},
		},
	},

	body: [
		"Poppins",
		"Inter",
		"ui-sans-serif",
		"system-ui",
		"-apple-system",
		"system-ui",
		"Segoe UI",
		"Roboto",
		"Helvetica Neue",
		"Arial",
		"Noto Sans",
		"sans-serif",
		"Apple Color Emoji",
		"Segoe UI Emoji",
		"Segoe UI Symbol",
		"Noto Color Emoji",
	],
	fontFamily: {
		/* sans: ['sans-serif', 'Lato', 'Quicksand', ...defaultTheme.fontFamily.sans, 'Poppins'], */
		Poppins: ["Poppins", "sans-serif"],
	},
});

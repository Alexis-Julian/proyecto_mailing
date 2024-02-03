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

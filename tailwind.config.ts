import type { Config } from "tailwindcss"

const config: Config = {
	content: [
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/lib/**/*.{js,ts,jsx,tsx,mdx}"
	],
	theme: {
		extend: {
			colors: {
				background: "#E4EADC",
				green: "#A5CA7B",
				red: "#E66568",
				blue: "#98C2D3",
				black: "#000000",
				white: "#FFFFFF"
			},
			boxShadow: {
				"frame": "0 10px 10px rgba(0, 0, 0, 0.25)",
				"button": "0 4px 0 rgba(0, 0, 0, 0.25)"
			}
		}
	},
	plugins: []
}
export default config
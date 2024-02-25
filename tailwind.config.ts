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
				"bottom": "0 10px 10px rgba(0, 0, 0, 0.25)",
				"top": "0 -10px 10px rgba(0, 0, 0, 0.25)",
				"card": "4px 4px 4px rgba(0, 0, 0, 0.25)",
				"card-slot": "inset 4px 4px 12px rgba(0, 0, 0, 0.5)"
			}
		}
	},
	plugins: []
}
export default config
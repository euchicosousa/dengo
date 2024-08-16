import type { Config } from "tailwindcss";

export default {
	content: ["./app/**/*.{js,jsx,ts,tsx}"],

	theme: {
		extend: {
			colors: {
				carinho: "#B4A3B5",
				abraco: "#EACBD1",
				alegria: "#C0CCB8",
				serenidade: "#BECCDE",
				luz: "#fff",
			},
		},
	},
	plugins: [],
} satisfies Config;

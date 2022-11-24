/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.jsx","./index.html"],
  theme: {
    extend: {
			spacing: {
				"45%": '45%',
				"25%": "25%",
				"85%": "85%"
			}
		},
  },
  plugins: [],
}

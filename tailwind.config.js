/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth:{
        container: "1604px"
      },
      colors:{
        primary: "#262626"
      },
      fontFamily:{
        dmSans:["DM Sans", "serif"]
      }
    },
  },
  plugins: [],
}
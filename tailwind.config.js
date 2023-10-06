/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      fontFamily: {
         mont: ["Montserrat", "serif-serif"],
         // font-family: '', serif;
         jose: ["Josefin Slab", "serif"],
      },
      extend: {},
   },
   plugins: [require("daisyui")],
   daisyui: {
      themes: ["light", "dark"],
   },
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // "Robot": ["Roboto"],
        // "Lato": ["Lato"],
        "Inter": ["Inter"],
        "poppins": ["Poppins"],
        // "RadioCanada": ["RadioCanada"],
        // "Plus-Jakarta-Sans": ["Plus Jakarta Sans"],
        "Montserrat": ["Montserrat"]
        // "averia-serif-libre": ["averia-serif-libre"]
      },
      colors: {
        // Define your custom color here
        'blue': "#124C81"
      },
    },
  },
  plugins: [],
}
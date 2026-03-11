/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ayurveda: {
          green: '#2E7D32',
          light: '#4CAF50',
          dark: '#1B5E20',
          cream: '#F5F5DC',
          sand: '#D7CCC8',
          earth: '#8D6E63',
        }
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
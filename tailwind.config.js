/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    fontFamily: {
      primary: 'Verdana',
      secondary: 'Arial',
      tertiary: 'Helvetica',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      backgroundImage: {
        site: "url('./assets/bg-site.jpg')"
      }
    },
  },
  plugins: [],
}


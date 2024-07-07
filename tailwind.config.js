/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["League Spartan", "sans-serif"],
      },

      backgroundImage: {
        desktopBgImage: "url('/images/bg-header-desktop.svg')",
        mobileBgImage: "url('/images/bg-header-mobile.svg')",
      },

      boxShadow: {
        'custom': '0px 15px 20px -5px rgba(13, 113, 130, 0.15)',
        'inner-left': 'inset 5px 0 0px 0px #5CA5A5',
      }, 
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
/*module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}
*/
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],

  theme: {
    extend: {
      colors: {
        customBlue: '#1D1934',
      },
    },
  },
  variants: {},
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './public/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'logo': "url('/images/svg/logo.svg')",
        'cart': "url('/images/svg/cart.svg')",
        'emporium': "url('/images/pngs/food-emporium.png')"
      },
      fontFamily: {
        sans: ['var(--font-poppins)'],
      },
      colors: {
        primary: "#00A85B",
        secondary: "#FCFCFC"
      },
      boxShadow: {
        'custom': '0px 15px 25px 0px rgba(91, 87, 87, 0.02)',
        'bg': '0px 15px 25px 0px rgba(66, 65, 65, 0.03)',
        'card': '0px 15px 25px 0px rgba(73, 73, 73, 0.03)'
      },
      placeholderColor: {
        'primary': '#B7B7B7'
      }
    },
  },
  plugins: [],
}

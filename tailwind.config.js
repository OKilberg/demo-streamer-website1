/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'headline': ['Sarpanch'],
        'interactive': ['Oxanium'],
        'body': ['Coda'],
        'sans': ['Coda','system-ui',],
      },
      colors: {
        'bg-purple-dark': '#130F1A',
        'bg-purple-mid': '#332E3C',
        'bg-purple-light': '#4D4360',
        'white': '#FBFBF2',
        'gray': '#CFD2CD'
      }
    },
  },
  plugins: [],
}

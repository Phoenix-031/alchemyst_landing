import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens : {
      'xs' : '375px',
      'sm' : '480px',
      'mobile' : '680px',
      'tablet' : '768px',
      'desktop' : '1024px',
      'lg' : '1280px',
      'xl' : '1440px',
      '2xl' : '1920px',
    },
    extend: {
      flex:{
        '2' : '2 2 0%',
        '3' : '3 3 0%',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-section1' : 'linear-gradient(180deg, #DFE8FF 0%, #F8F9FF 100%)',
        // 'footerbg' : 'url("@/assets/images/footerbg.png")',
      },
      colors:{
        'primary' : '#ffffff',
        'secondary' : '#787996',
        'tertiary' : '#181C31',
        'action' : '#006BFF',
      },
      fontFamily:{
        'poppins':["Poppins","sans-serif"],
        'Enriqueta':["Enriqueta","sans-serif"],
        'urbanist':["Urbanist","sans-serif"],
        'varela':["Varela","sans-serif"],
        'roboto':["Roboto","sans-serif"],
        'cursive1':["Nothing You Could Do","sans-serif"],
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 45s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      },
      boxShadow:{
        'cardshadow' : 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;'
      }                    
    },
  },
  plugins: [],
}
export default config